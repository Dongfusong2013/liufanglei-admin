<template>
  <div style="background-color: #f0f2f5; padding:10px;">
    <pannel-group @handleSetLineChartData="handleLineData" />
    <el-row style="background:#fff;padding:16px 16px 0;margin-top: 20px; mmargin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row :gutter="32" style="margin-top: 30px;">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import RaddarChart from './RaddarChart.vue';
  import PieChart from './PieChart.vue';
  import BarChart from './BarChart.vue';
  import LineChart from './LineChart.vue';
  import PannelGroup from './PannelGroup.vue';

  const lineChartData = {
    newVisitis: {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    newUsersRegist: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [79, 82, 108, 154, 162, 98, 130]
    },
  }

  export default {
    data(){
      return {
        lineChartData: lineChartData['newUsersRegist']
      }
    },
    components: {
      RaddarChart,
      PieChart,
      BarChart,
      LineChart,
      PannelGroup,
    },
    methods: {
      handleLineData(type) {
        this.lineChartData = lineChartData[type];
      }
    }

  }
</script>

<style lang="scss" scoped>
  .chart-wrapper {
    background: #fff;
    padding: 16px;
    margin-bottom: 32px;
  }

  // @media (max-width:550px) {
  //   .card-panel-description {
  //     display: none;
  //   }
  //
  //   .card-panel-icon-wrapper {
  //     float: none !important;
  //     width: 100%;
  //     height: 100%;
  //     margin: 0 !important;
  //
  //     .svg-icon {
  //       display: block;
  //       margin: 14px auto !important;
  //       float: none !important;
  //     }
  //   }
  // }
</style>
