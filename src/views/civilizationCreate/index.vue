<template>
  <div class="row-container container-top create-box">
    <baidu-map class="map" :center="center" :zoom="12" style="margin-left: 10px;">
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
        <el-table-column prop="id" label="建筑编号" width="80">
        </el-table-column>
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
      <div style="display: flex; flex-direction: row; justify-content: space-between; ">
        <div>
          <sticky :z-index="10">
            <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="clear">新建</el-button>
          </sticky>
        </div>

        <div class="row-box margin-top">
          <sticky :z-index="10">
            <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">发布</el-button>
            <el-button v-loading="loading" type="warning" @click="draftForm">保存草稿</el-button>
          </sticky>
        </div>
      </div>

      <el-form :model="activeItem" ref="activeItem" style="margin-left: 10px; margin-top: 30px;">
        <el-row>
          <el-form-item label="建筑名称:">
            <el-input v-model="activeItem.name" :rows="1" type="textarea" autosize placeholder="请输入建筑名称" />
          </el-form-item>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="经度:">
              <el-input v-model="activeItem.position.lng" :rows="1" type="textarea" autosize placeholder="请输入建筑经度" />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="纬度:">
              <el-input v-model="activeItem.position.lat" :rows="1" type="textarea" autosize placeholder="请输入建筑纬度" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item prop="picSrc" label="建筑图片:">
            <Upload v-model="activeItem.picSrc" />
            <!-- <img :src="activeItem.picSrc" height="100%" width="100%"> -->
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="建筑简介:">
            <el-input v-model="activeItem.summary" :rows="1" type="textarea" class="article-textarea" placeholder="请输入建筑名称" />
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="建筑描述:">
            <el-input v-model="activeItem.descript" :rows="20" type="textarea" class="article-textarea" placeholder="请输入建筑名称" />
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </div>

</template>

<script>
  const defaultItem = {
    position: {
      lng: '',
      lat: ''
    },
    name: '',
    summary: '',
    descript: '',
    picSrc: '',
  };

  function clone(src){
    return Object.assign({}, src);
  }

  import Upload from "@/components/Upload/SingleImage2";
  import Sticky from "@/components/Sticky"; // 粘性header组件
  import {
    updateCivilLocation,
    getCivilLocationList
  } from '@/api/civilLocation.js';

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
        activeItem:{...defaultItem},
        locations: [{
          position: {
            lng: 116.404,
            lat: 39.915,
          },
          name: '北京市',
          summary: '莫高窟始建于十六国时期',
          descript: "莫高窟始建于十六国时期，据唐《李克让重修莫高窟佛龛碑》一书的记载，前秦建元二年（366年），僧人乐尊路经此山" +
            "忽见金光闪耀，如现万佛，于是便在岩壁上开凿了第一个洞窟。此后法良禅师等又继续在此建洞修禅，称为“漠高窟”，意为",
          picSrc: '@/static/works/项目_001.jpg'
        }, ],
        zoom: 15
      }
    },

    beforeMount() {
      getCivilLocationList().then((response) => {
          console.log("response data", response.data);
          this.locations = response.data;
      })
    },

    methods: {
      // ready(){
      //     copyTo(this.activeItem, defaultItem);
      // },
      submitForm() {
        this.loading = true;
        console.log(this.activeItem);
        updateCivilLocation(this.activeItem).then((response) => {
          console.log("updateCivilLocation", response);
          this.loading = false;
          this.clear();
        })
      },
      draftForm() {

      },
      clear() {
        this.activeItem = clone(defaultItem);
        window.scrollTo(0, 0);
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
        this.activeItem = clone(item);
        console.log(this.center.lat);
        console.log(this.center.lng);
      }
    }
  }
</script>

<style>
  ;

  .des_container {

    padding-right: 10px;
    width: 50%;
    position: relative;
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
