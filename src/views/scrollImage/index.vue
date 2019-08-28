<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">{{ scope.$index +1 }}</template>
      </el-table-column>
      <el-table-column label="封面图片" width="210" align="center">
        <template slot-scope="scope">
          <div class="pic-size item-center">
            <img :src="scope.row.imagePath" alt height="100%" width="100%" />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="文章标题" align="center" width="110">
        <template slot-scope="scope">{{ scope.row.articleTitle }}</template>
      </el-table-column>
      <el-table-column label="文章摘要" align="center">
        <template slot-scope="scope">{{ scope.row.articleSummary }}</template>
      </el-table-column>
      <el-table-column label="文章类型" align="center" width="110">
        <template slot-scope="scope">{{ formatArticleType(scope.row.articleType )}}</template>
      </el-table-column>
      <el-table-column label="是否显示" align="center" width="110">
        <template slot-scope="scope">{{ formatPresent(scope.row.present)}}</template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="发布时间" width="240">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ format(scope.row.displayTime )}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-edit" @click="gotoPage(scope.row.articleType, scope.row.articleId)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {
    getScrollImageList
  } from "@/api/article";

  export default {
    name: "ScrollImageList",
    components: {

    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: "success",
          draft: "gray",
          deleted: "danger"
        };
        return statusMap[status];
      }
    },
    props: {
      baseUrl: {
        type: String
      },
      articleType: {
        type: String
      }
    },
    data() {
      return {
        list: null,
        listLoading: false
      };
    },
    beforeMount() {
      this.fetchData();
      console.log("before mount....");
    },
    beforeUpdate() {
      // this.fetchData()
      console.log("before Update....");
    },
    methods: {
      gotoPage(articleType, articleId) {
        console.log(articleType, articleId);
        var url = "";
        var msg = {
          path:'',
          //query
          query:{
            articleType:articleType,
          }
        }
        if (articleType === 'ideaArticle') {
          //params
           msg.path = "/ideaArticleManage/edit/"+articleId;
        } else if (articleType === "newsArticle") {
          msg.path = "/newsArticleManage/edit/"+articleId;
        } else {
          msg.path = "/focusArticleManage/edit/"+articleId;
        }
        this.$router.push(msg);
      },
      formatPresent(present){
        if (present){
          return "是";
        }else{
          return "否";
        }
      },
      formatArticleType(str) {
        if (str === 'ideaArtile') {
          return "理念文章";
        } else if (str === "newsArticle") {
          return "新闻报道";
        } else {
          return "专题报道";
        }
      },
      format(displayTime) {
        var date = new Date(displayTime);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
      },
      fetchData() {
        this.listLoading = true;
        getScrollImageList().then(response => {
          console.log("=====get scroll image list", response);
          this.list = response.data;
          this.listLoading = false;
        });
      }
    }
  };
</script>

<style lang="css" scoped>
  .page-size {
    height: 40px;
  }

  .pic-size {
    /* width: 50px;
    height: 50px; */
  }

  .item-center {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>
