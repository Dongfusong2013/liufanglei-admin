<template>
  <div class="app-container">
    <button @click="goto('/example/table')"> jump</button>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="文章标题">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="文章摘要">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <!-- <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item> -->
      <el-form-item label="封面图片">
        <el-upload action="/api/thirdApi/qiniu/img" list-type="picture-card" :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="首页展示">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <!-- <el-form-item label="文章类型">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="理念" name="type" />
          <el-checkbox label="新闻" name="type" />
        </el-checkbox-group>
      </el-form-item>-->
      <!-- <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>-->

      <!-- <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item> -->
    </el-form>
    <div>
      <div class="edit_container">
        <quill-editor v-model="content" ref="myQuillEditor" class="editer" :options="editorOption" @ready="onEditorReady($event)"></quill-editor>
      </div>
      <div class="submit_btn">
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </div>
  </div>

</template>

<script>
  import {
    quillEditor,
    Quill
  } from "vue-quill-editor";
  import {
    container,
    ImageExtend,
    QuillWatch
  } from "quill-image-extend-module";
  import ImageResize from "quill-image-resize-module";


  Quill.register("modules/ImageExtend", ImageExtend);
  Quill.register("modules/ImageResize", ImageResize);
  export default {
    beforeMount() {
      console.log('$router', this.$router);
    },
    data() {
      return {
        dialogImageUrl: "",
        dialogVisible: false,
        form: {
          name: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc: ""
        },
        content: "<h3>说些什么吧~~</h3>",
        editorOption: {
          modules: {
            ImageResize: {
              modules: ["Resize", "DisplaySize", "Toolbar"]
            },
            ImageExtend: {
              loading: true,
              name: "file",
              action: "/api" + "/thirdApi/qiniu/img",
              response: res => {
                console.log("---", res);
                return res.imgPath;
              }
            },
            toolbar: {
              container: container,
              handlers: {
                image: function() {
                  QuillWatch.emit(this.quill.id);
                }
              }
            }
          }
        }
      };
    },
    components: {
      quillEditor
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill;
      }
    },
    methods: {
      goto(path) {
        this.$router.push(path);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      // onSubmit() {
      //   this.("submit!");
      // },
      // onCancel() {
      //   this.$message({
      //     message: "cancel!",
      //     type: "warning"
      //   });
      // },
      onEditorReady(editor) {
        console.log("editor ready!", editor);
      },
      submit() {
        console.log(this.content);
        this.$message.success("提交成功！");
      }
    }
  };
</script>

<style lang="scss" scoped>
  .line {
    text-align: center;
  }

  .edit_container {
    padding: 40px;
    margin-bottom: 40px;
  }

  .editer {
    height: 450px;
  }

  .submit_btn {
    text-align: center;
  }

  .ql-snow .ql-editor pre.ql-syntax::after {
    background: #e1e1e1;
  }

  .quill-code {
    height: auto;
    border: none;

    >.title {
      border: 1px solid #ccc;
      border-left: none;
      height: 3em;
      line-height: 3em;
      text-indent: 1rem;
      font-weight: bold;
    }

    >code {
      width: 100%;
      margin: 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-top: none;
      border-left: none;
      border-radius: 0;
      height: 30rem;
      overflow-y: auto;
      background: #ccc;
    }
  }
</style>
