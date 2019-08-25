<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">{{ scope.$index +1 }}</template>
      </el-table-column>
      <el-table-column label="项目名称" align="center" width="110">
        <template slot-scope="scope">{{ scope.row.projectName }}</template>
      </el-table-column>
      <el-table-column label="项目描述" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column label="设计者" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.designer}}</template>
      </el-table-column>

      <el-table-column label="建筑规模" align="center" width="130px">
        <template slot-scope="scope">{{ scope.row.area }}</template>
      </el-table-column>

      <el-table-column label="项目类型" align="center" width="130px">
        <template slot-scope="scope">{{ scope.row.type }}</template>
      </el-table-column>

      <el-table-column label="项目地址" align="center" width="130px">
        <template slot-scope="scope">{{ scope.row.address }}</template>
      </el-table-column>

      <el-table-column label="封面图片" width="210" align="center">
        <template slot-scope="scope">
          <div class="pic-size item-center">
            <img :src="scope.row.picSrc" alt height="100%" width="100%" />
          </div>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="文章状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.articleStatus | statusFilter">{{ scope.row.articleStatus }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="发布时间" width="240">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ format(scope.row.displayTime )}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="120">
        <template slot-scope="scope">
          <router-link :to="baseUrl+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">编辑</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <div>
      <Pagination v-show="total>0" :total="total" :page.sync="pageNo" :limit.sync="pageCount" @pagination="fetchData" />
    </div>
  </div>
</template>

<script>
  import {
    getArticleList
  } from "@/api/article";
  import Pagination from "@/components/Pagination";

  export default {
    name: "ProjectList",
    components: {
      Pagination
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
        pageNo: 1,
        pageSize: 10,
        total: 0,
        pageCount: 0,
        listLoading: true
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
      format(displayTime) {
        var date = new Date(displayTime);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
      },
      fetchData() {
        this.listLoading = true;
        getArticleList({
          articleType: this.articleType,
          pageNo: this.pageNo - 1,
          pageSize: this.pageSize
        }).then(response => {
          console.log("=====get article list", response);
          this.total = response.data.totalElements;
          this.list = response.data.content;
          this.pageCount = response.data.totalPages;
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
