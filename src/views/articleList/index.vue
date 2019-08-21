<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="标题" width="110">
        <template slot-scope="scope">{{ scope.row.articleTitle }}</template>
      </el-table-column>
      <el-table-column label="副标题" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.articleSubTitle }}</span>
        </template>
      </el-table-column>
      <el-table-column label="摘要" align="center">
        <template slot-scope="scope">{{ scope.row.articleSummary }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="文章状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.articleStatus }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="显示主页" width="110" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.inMainPage">是</div>
          <div v-else-if="!scope.row.inMainPage">否</div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="scope">
          <router-link :to="'/articleManage/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">编辑</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getArticleList } from "@/api/article";

export default {
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
  data() {
    return {
      list: null,
      listLoading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getArticleList({
        pageNo: 0,
        pageSize: 10,
        articleType: "newsArticle"
      }).then(response => {
        this.list = response.data.content;
        console.log("=====get article list", this.list);
        this.listLoading = false;
      });
    }
  }
};
</script>
