<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">
      <sticky :z-index="10" :class-name="'sub-navbar '+postForm.status">
        <!-- <CommentDropdown v-model="postForm.comment_disabled" />
        <PlatformDropdown v-model="postForm.platforms" />
        <SourceUrlDropdown v-model="postForm.source_uri" />-->
        <div class="row-box margin-top">
          <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">发布</el-button>
          <el-button v-loading="loading" type="warning" @click="draftForm">保存草稿</el-button>
        </div>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <!-- <Warning /> -->
          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput v-model="postForm.articleTitle" :maxlength="100" name="name" required>标题</MDinput>
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col>
                  <el-form-item style="margin-bottom: 60px;">
                    <MDinput v-model="postForm.articleSubTitle" :maxlength="100" name="name" required>副标题</MDinput>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row style="marginTop:'40px'">
                <el-col :span="8">
                  <el-form-item style="margin-bottom: 40px;" label-width="75px" label="作者来源:" class="postInfo-container-item">
                    <el-input v-model="postForm.author" :rows="1" type="textarea" class="article-textarea" autosize
                      placeholder="请输入作者11" />
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item style="margin-bottom: 40px;" label-width="100px" label="发布时间:" class="postInfo-container-item">
                    <el-date-picker v-model="postForm.displayTime" type="datetime" format="yyyy-MM-dd HH:mm:ss"
                      placeholder="选择日期和时间" />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label-width="90px" label="首页显示:" class="postInfo-container-item">
                    <el-switch v-model="postForm.inMainPage" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-form-item style="margin-bottom: 40px;" label="摘要:">
          <el-row>
            <el-input v-model="postForm.articleSummary" :rows="1" type="textarea" class="article-textarea" autosize
              placeholder="请输入文章摘要" />
            <span v-show="contentShortLength" class="word-counter">{{ contentShortLength }}字</span>
          </el-row>
        </el-form-item>

        <el-form-item prop="picSrc" style="margin-bottom: 30px;" label="封面图片">
          <Upload v-model="postForm.picSrc" />
          <el-col :span="6">
            <el-form-item label-width="78px" label="加入轮播:" class="postInfo-container-item">
              <el-switch v-model="postForm.inScroll" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </el-form-item>
          </el-col>
        </el-form-item>

        <div>
          <el-form-item style="margin-bottom: 40px;" label-width="75px" label="视频地址:" class="postInfo-container-item">
            <el-col :span="18">
              <el-input v-model="postForm.videoSrc" :rows="1" type="textarea" class="article-textarea" autosize
                placeholder="请输入视频地址" />
            </el-col>
          </el-form-item>

          <!-- <el-row>
            <el-col :span="10">
              <VideoPlayerComponent width='500' height="300" :videoSrc="postForm.videoSrc"
              :picSrc="postForm.picSrc"/>
            </el-col>
          </el-row> -->
        </div>

        <el-form-item prop="content" style="margin-bottom: 30px; margin-top: 20px;">
          <Tinymce ref="editor" v-model="postForm.htmlContent" :height="600" />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
  import Tinymce from "@/components/Tinymce";
  import Upload from "@/components/Upload/SingleImage3";
  import MDinput from "@/components/MDinput";
  import Sticky from "@/components/Sticky"; // 粘性header组件
  // import { validURL } from '@/utils/validate'

  import {
    fetchArticle,
    updateArticle
  } from "@/api/article";

  import {
    mapMutations
  } from "vuex";
  import VideoPlayerComponent from '@/components/VideoPlayerComponent.vue'

  const defaultForm = {
    status: "draft",
    articleTitle: "", // 文章题目
    articleSubTitle: "", // 文章副标题
    articleSummary: "", // 文章摘要
    fromTitle: "", //文章来源
    picSrc: "", // 文章封皮图片
    display_time: undefined, // 前台展示时间
    inMainPage: false,
    id: undefined,
    inScroll: false, //是否加入轮播宣传
    videoSrc: ','
  };

  export default {
    name: "ArticleDetail",
    components: {
      Tinymce,
      MDinput,
      Upload,
      Sticky,
      VideoPlayerComponent
      // Warning, CommentDropdown, PlatformDropdown, SourceUrlDropdown
    },
    props: {
      isEdit: {
        type: Boolean,
        default: false
      },
      articleType: {
        type: String,
        default: "" //articleType
      }
    },
    computed: {
      picSrc() {
        return this.postForm.picSrc;
      }
    },

    data() {
      const validateRequire = (rule, value, callback) => {
        callback();
        if (value === "") {
          var fieldDes = "";
          if (rule.field === "title") {
            fieldDes = "标题";
          }
          this.$message({
            message: fieldDes + "为必传项",
            type: "error"
          });
          callback(new Error(fieldDes + "为必传项"));
        } else {
          callback();
        }
      };
      const validateSourceUri = (rule, value, callback) => {
        if (value) {
          if (validURL(value)) {
            callback();
          } else {
            this.$message({
              message: "外链url填写不正确",
              type: "error"
            });
            callback(new Error("外链url填写不正确"));
          }
        } else {
          callback();
        }
      };
      return {
        postForm: Object.assign({}, defaultForm),
        loading: false,
        userListOptions: [],
        rules: {
          picSrc: [{
            validator: validateRequire
          }],
          title: [{
            validator: validateRequire
          }],
          content: [{
            validator: validateRequire
          }],
          source_uri: [{
            validator: validateSourceUri,
            trigger: "blur"
          }]
        },
        tempRoute: {}
      };
    },
    computed: {
      visitViews() {
        return this.$store.state.tagViewData.visitViews;
      },

      contentShortLength() {
        return this.postForm.articleSummary.length;
      },
      displayTime: {
        // set and get is useful when the data
        // returned by the back end api is different from the front end
        // back end return => "2013-06-25 06:59:25"
        // front end need timestamp => 1372114765000
        get() {
          return +new Date(this.postForm.display_time);
        },
        set(val) {
          this.postForm.display_time = new Date(val);
        }
      }
    },
    beforeMount() {
      var query = this.$route.query;
      if (this.articleType === "" && query.articleType !== undefined) {
        this.articleType = query.articleType;
      }
      if (this.isEdit) {
        const id = this.$route.params && this.$route.params.id;
        this.fetchData(id, this.articleType);
      } else {
        this.postForm = Object.assign({}, defaultForm);
      }

      // Why need to make a copy of this.$route here?
      // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
      // https://github.com/PanJiaChen/vue-element-admin/issues/1221
      this.tempRoute = Object.assign({}, this.$route);
    },
    methods: {
      ...mapMutations("tagViewData", ["DEL_VIEW", "DEL_CACHED"]),
      fetchData(id, articleType) {
        fetchArticle(id, articleType)
          .then(response => {
            console.log('response data', response.data);
            this.postForm = response.data;
            console.log('post form', this.postForm);

            // set tagsview title
            this.setTagsViewTitle();

            // set page title
            this.setPageTitle();
          })
          .catch(err => {
            console.log(err);
          });
      },
      setTagsViewTitle() {
        const title = "编辑-";
        const route = {
          title: `${title}-${this.postForm.articleTitle.substr(0, 4)}...`,
          path: this.tempRoute.fullPath
        };
        this.$store.dispatch("tagViewData/updateVisitedView", route);
      },
      setPageTitle() {
        const title = "Edit Article";
        document.title = `${title} - ${this.postForm.id}`;
      },

      closeSelectedTag(viewPath) {
        this.DEL_VIEW(viewPath);
        this.DEL_CACHED(viewPath);
        let lastView = this.visitViews.slice(-1)[0];
        if (lastView) {
          this.$router.push(lastView.path);
        } else {
          this.$router.push("/");
        }
      },
      submitForm() {
        console.log(this.postForm);
        this.postForm.articleType = this.articleType;
        this.postForm.articleStatus = "published";
        this.$refs.postForm.validate(valid => {
          if (valid) {
            console.log("=====submit=====", this.postForm);
            updateArticle(this.postForm).then(() => {
              this.loading = true;
              this.$notify({
                title: "成功",
                message: "发布文章成功",
                type: "success",
                duration: 2000
              });
              this.loading = false;
              this.closeSelectedTag(this.$route.path);
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      draftForm() {
        console.log(this.postForm);
        this.postForm.articleType = this.articleType;
        this.postForm.articleStatus = "draft";
        this.$refs.postForm.validate(valid => {
          if (valid) {
            console.log("=====submit=====", this.postForm);
            updateArticle(this.postForm).then(() => {
              this.loading = true;
              this.$notify({
                title: "成功",
                message: "保存草稿成功",
                type: "success",
                duration: 2000
              });
              this.loading = false;
              this.closeSelectedTag(this.$route.path);
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";

  .row-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .margin-top {
    margin-top: 10px;
  }

  .createPost-container {
    position: relative;

    .createPost-main-container {
      padding: 0px 45px 20px 50px;

      .postInfo-container {
        position: relative;
        @include clearfix;
        margin-bottom: 10px;

        .postInfo-container-item {
          float: left;
        }
      }
    }

    .word-counter {
      width: 40px;
      position: absolute;
      right: 10px;
      top: 0px;
    }
  }

  .article-textarea /deep/ {
    textarea {
      padding-right: 40px;
      resize: none;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid #bfcbd9;
    }
  }
</style>
