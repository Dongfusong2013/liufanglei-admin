<template>
  <div class="row-container container-top create-box">
    <baidu-map class="map" :center="center" :zoom="12">
      <!-- 循环显示点 -->
      <div v-for="(item,index) in locations" :key="index">
        <bm-marker :position="item.position" :dragging="true" @click="infoWindowOpen">
        </bm-marker>
      </div>
      <!-- 显示 -->
      <bm-info-window :position="activeItem.position" :title="activeItem.name" :show="show" @close="infoWindowClose"
        @open="infoWindowOpen">
        <div style="width: 100px; height: 100px;">
          <img :src="activeItem.picSrc" height="100%" width="100%">
        </div>
      </bm-info-window>

      <el-table :data="locations" stripe style="width: 100%" @row-click="gotoPosition">
        <el-table-column prop="name" label="建筑名称" width="100">
        </el-table-column>
        <el-table-column prop="position.lng" label="经度" width="100">
        </el-table-column>
        <el-table-column prop="position.lat" label="纬度" width="100">
        </el-table-column>
        <el-table-column prop="summary" label="简介">
        </el-table-column>
      </el-table>
    </baidu-map>
    <div v-if="selectActive" class="des_container">
      <div style="display: flex; flex-direction: row; justify-content: flex-end;">
        <sticky :z-index="10">
          <div class="row-box margin-top">
            <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">发布</el-button>
            <el-button v-loading="loading" type="warning" @click="draftForm">保存草稿</el-button>
          </div>
        </sticky>
      </div>

      <el-form :model="activeItem" ref="activeItem">
        <el-row>
          <el-form-item label="建筑名称:">
            <el-input v-model="activeItem.name" :rows="1" type="textarea" autosize placeholder="请输入建筑名称" />
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item prop="picSrc" label="建筑图片:">
            <Upload v-model="activeItem.picSrc" />
            <!-- <img :src="activeItem.picSrc" height="100%" width="100%"> -->
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="建筑介绍:">
            <el-input v-model="activeItem.descript" :rows="20" type="textarea" class="article-textarea"
              placeholder="请输入建筑名称" />
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </div>

</template>

<script>
  import Upload from "@/components/Upload/SingleImage2";
  import Sticky from "@/components/Sticky"; // 粘性header组件
  export default {
    computed: {
      selectActive() {
        return this.activeItem != {};
      }
    },
    components: {
      Sticky,
      Upload,
    },
    data() {
      return {
        center: {
          lng: 121.473354,
          lat: 31.238413,
        },
        show: false,
        loading: false,
        activeItem: {},
        locations: [{
            position: {
              lng: 116.404,
              lat: 39.915
            },
            name: '北京市',
            summary: '莫高窟始建于十六国时期',
            descript: "莫高窟始建于十六国时期，据唐《李克让重修莫高窟佛龛碑》一书的记载，前秦建元二年（366年），僧人乐尊路经此山" +
              "忽见金光闪耀，如现万佛，于是便在岩壁上开凿了第一个洞窟。此后法良禅师等又继续在此建洞修禅，称为“漠高窟”，意为",
            picSrc: '@/static/works/项目_001.jpg'
          },
          {
            position: {
              lng: 121.473354,
              lat: 31.238413,
            },
            name: '上海市',
            summary: '金字塔在埃及和美洲等地均有分布',
            descript: "金字塔在埃及和美洲等地均有分布，古埃及的上埃及、中埃及和下埃及，今苏丹和埃及境内。现在的尼罗河下游，散布着约80座金字塔遗迹。 ," +
              "。他们为自己修建了巨大的陵墓金字塔，金字塔就成了法老权力的象征。因为这些巨大的陵墓外形形似汉字的“金”字，因此我们将其称之为“金字塔”。在哈夫拉金字塔前，还有一尊狮身人面像守卫着法老们的陵墓。",
            picSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=714737168,3873241494&fm=26&gp=0.jpg'
          },
          {
            position: {
              lng: 121.473354,
              lat: 31.238413,
            },
            name: '鞍山市',
            summary: '金字塔在埃及和美洲等地均有分布',
            descript: "金字塔在埃及和美洲等地均有分布，古埃及的上埃及、中埃及和下埃及，今苏丹和埃及境内。现在的尼罗河下游，散布着约80座金字塔遗迹。 ," +
              "。他们为自己修建了巨大的陵墓金字塔，金字塔就成了法老权力的象征。因为这些巨大的陵墓外形形似汉字的“金”字，因此我们将其称之为“金字塔”。在哈夫拉金字塔前，还有一尊狮身人面像守卫着法老们的陵墓。",
            picSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=714737168,3873241494&fm=26&gp=0.jpg'
          },
          {
            position: {
              lng: 121.473354,
              lat: 31.238413,
            },
            name: '吉林市',
            summary: '金字塔在埃及和美洲等地均有分布',
            descript: "金字塔在埃及和美洲等地均有分布，古埃及的上埃及、中埃及和下埃及，今苏丹和埃及境内。现在的尼罗河下游，散布着约80座金字塔遗迹。 ," +
              "。他们为自己修建了巨大的陵墓金字塔，金字塔就成了法老权力的象征。因为这些巨大的陵墓外形形似汉字的“金”字，因此我们将其称之为“金字塔”。在哈夫拉金字塔前，还有一尊狮身人面像守卫着法老们的陵墓。",
            picSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=714737168,3873241494&fm=26&gp=0.jpg'
          },
        ],
        selectCity: '',
        zoom: 15
      }
    },
    methods: {
      submitForm() {

      },
      draftForm() {

      },
      infoWindowClose() {
        console.log("infowindow close");
        this.show = false
      },
      infoWindowOpen() {
        console.log("infowindow open");
        this.show = true
      },
      gotoPosition(item) {
        var position = item.position;
        console.log("--goto position", position);
        this.center = {
          lng: position.lng,
          lat: position.lat
        }
        // this.show = true;
        this.activeItem = item;
        console.log(this.center.lat);
        console.log(this.center.lng);
      }
    }
  }
</script>

<style>
  ;

  .des_container {
    margin-left: 10px;
    margin-right: 10px;
    width: 50%;
  }

  .pic-top {
    margin-top: 10px;
  }

  .pic-size {
    width: 100px;
    height: 100px;
  }

  .map {
    width: 50%;
    height: 500px;
  }

  .container-top {
    margin-top: 10px;
  }

  .row-container {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100%;
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
