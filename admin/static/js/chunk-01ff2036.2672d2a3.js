(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01ff2036"],{"31f8":function(t,e,i){},"38c0":function(t,e,i){"use strict";var a=i("721a"),o=i.n(a);o.a},"721a":function(t,e,i){},c773:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row-container container-top create-box"},[i("baidu-map",{staticClass:"map",staticStyle:{"margin-left":"10px"},attrs:{center:t.center,zoom:1,mapStyle:t.mapStyle}},[i("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),t._v(" "),i("bm-overview-map",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",isOpen:!0}}),t._v(" "),t._l(t.locations,function(e,a){return i("div",{key:a},[i("bm-marker",{attrs:{position:e.position,dragging:!0},on:{click:t.infoWindowOpen}})],1)}),t._v(" "),i("bm-info-window",{attrs:{position:t.activeItem.position,title:t.activeItem.name,show:t.show},on:{close:t.infoWindowClose,open:t.infoWindowOpen}},[i("div",{staticStyle:{width:"100px",height:"100px"}},[i("img",{attrs:{src:t.activeItem.picSrc,height:"100%",width:"100%"}})])]),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.locations,stripe:"","highlight-current-row":"true"},on:{"row-click":t.gotoPosition}},[i("el-table-column",{attrs:{prop:"id",label:"建筑编号",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"建筑名称",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"position.lng",label:"经度",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"position.lat",label:"纬度",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"summary",label:"简介"}})],1)],2),t._v(" "),t.selectActive?i("div",{staticClass:"des_container"},[i("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between"}},[i("div",[i("sticky",{attrs:{"z-index":10}},[i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.clear}},[t._v("新建")])],1)],1),t._v(" "),i("div",{staticClass:"row-box margin-top"},[i("sticky",{attrs:{"z-index":10}},[i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("发布")]),t._v(" "),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:t.draftForm}},[t._v("保存草稿")])],1)],1)]),t._v(" "),i("el-form",{ref:"activeItem",staticStyle:{"margin-left":"10px","margin-top":"30px"},attrs:{model:t.activeItem}},[i("el-row",[i("el-form-item",{attrs:{label:"建筑名称:"}},[i("el-input",{attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入建筑名称"},model:{value:t.activeItem.name,callback:function(e){t.$set(t.activeItem,"name",e)},expression:"activeItem.name"}})],1)],1),t._v(" "),i("el-row",[i("el-col",[i("el-form-item",{attrs:{label:"经度:"}},[i("el-input",{attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入建筑经度"},model:{value:t.activeItem.position.lng,callback:function(e){t.$set(t.activeItem.position,"lng",e)},expression:"activeItem.position.lng"}})],1)],1),t._v(" "),i("el-col",[i("el-form-item",{attrs:{label:"纬度:"}},[i("el-input",{attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入建筑纬度"},model:{value:t.activeItem.position.lat,callback:function(e){t.$set(t.activeItem.position,"lat",e)},expression:"activeItem.position.lat"}})],1)],1)],1),t._v(" "),i("el-row",[i("el-form-item",{attrs:{prop:"picSrc",label:"建筑图片:"}},[i("Upload",{model:{value:t.activeItem.picSrc,callback:function(e){t.$set(t.activeItem,"picSrc",e)},expression:"activeItem.picSrc"}})],1)],1),t._v(" "),i("el-row",[i("el-form-item",{attrs:{label:"建筑简介:"}},[i("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",placeholder:"请输入建筑名称"},model:{value:t.activeItem.summary,callback:function(e){t.$set(t.activeItem,"summary",e)},expression:"activeItem.summary"}})],1)],1),t._v(" "),i("el-row",[i("el-form-item",{attrs:{label:"建筑描述:"}},[i("el-input",{staticClass:"article-textarea",attrs:{rows:20,type:"textarea",placeholder:"请输入建筑名称"},model:{value:t.activeItem.descript,callback:function(e){t.$set(t.activeItem,"descript",e)},expression:"activeItem.descript"}})],1)],1)],1)],1):t._e()],1)},o=[],n=i("db72"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"singleImageUpload2 upload-container"},[i("el-upload",{staticClass:"image-uploader",attrs:{multiple:!1,"show-file-list":!1,"on-success":t.handleImageSuccess,"before-upload":t.beforeUpload,drag:"",name:"file",action:"/liufanglei_server/thirdApi/qiniu/img"}},[i("i",{staticClass:"el-icon-upload"}),t._v(" "),i("div",{staticClass:"el-upload__text"},[t._v("\n      Drag或"),i("em",[t._v("点击上传")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.imageUrl.length>0,expression:"imageUrl.length>0"}],staticClass:"image-preview"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.imageUrl.length>1,expression:"imageUrl.length>1"}],staticClass:"image-preview-wrapper"},[i("img",{attrs:{src:t.imageUrl}}),t._v(" "),i("div",{staticClass:"image-preview-action"},[i("i",{staticClass:"el-icon-delete",on:{click:t.rmImage}})])])])],1)},s=[],c=(i("4be7"),{name:"SingleImageUpload2",props:{value:{type:String,default:""}},data:function(){return{tempUrl:"",dataObj:{token:"",key:""}}},computed:{imageUrl:function(){return this.value}},methods:{rmImage:function(){this.emitInput("")},emitInput:function(t){this.$emit("input",t)},handleImageSuccess:function(t,e,i){console.log("imgPath",t.imgPath),this.emitInput(t.imgPath)},beforeUpload:function(){}}}),r=c,m=(i("d12b"),i("2877")),p=Object(m["a"])(r,l,s,!1,null,"732e1a40",null),u=p.exports,d=i("b804"),v=i("b775");function g(t){return Object(v["a"])({url:"/civilLocation/detail",method:"post",data:t})}function f(t){return Object(v["a"])({url:"/civilLocation/list",method:"get"})}var h={position:{lng:"",lat:""},name:"",summary:"",descript:"",picSrc:""};function w(t){return Object.assign({},t)}var b={computed:{selectActive:function(){return this.activeItem!={}}},components:{Sticky:d["a"],Upload:u},data:function(){return{mapStyle:{styleJson:[{featureType:"continent",elementType:"all",stylers:{color:"#ccccccff",hue:"#cccccc",weight:"4.4",lightness:-3,saturation:41,visibility:"on"}}]},center:{lng:121.473354,lat:31.238413},show:!1,loading:!1,activeItem:Object(n["a"])({},h),locations:[{position:{lng:116.404,lat:39.915},name:"北京市",summary:"莫高窟始建于十六国时期",descript:"莫高窟始建于十六国时期，据唐《李克让重修莫高窟佛龛碑》一书的记载，前秦建元二年（366年），僧人乐尊路经此山忽见金光闪耀，如现万佛，于是便在岩壁上开凿了第一个洞窟。此后法良禅师等又继续在此建洞修禅，称为“漠高窟”，意为",picSrc:"@/static/works/项目_001.jpg"}],zoom:15}},beforeMount:function(){var t=this;f().then(function(e){console.log("response data",e.data),t.locations=e.data})},methods:{submitForm:function(){var t=this;this.loading=!0,console.log(this.activeItem),g(this.activeItem).then(function(e){console.log("updateCivilLocation",e),t.loading=!1,t.clear()})},draftForm:function(){},clear:function(){this.activeItem=w(h),window.scrollTo(0,0)},infoWindowClose:function(){console.log("infowindow close"),this.show=!1},infoWindowOpen:function(){console.log("infowindow open"),this.show=!0},gotoPosition:function(t){var e=t.position;console.log("--goto position",e),this.center={lng:e.lng,lat:e.lat},this.activeItem=w(t),console.log(this.center.lat),console.log(this.center.lng)}}},_=b,I=(i("38c0"),Object(m["a"])(_,a,o,!1,null,null,null));e["default"]=I.exports},d12b:function(t,e,i){"use strict";var a=i("31f8"),o=i.n(a);o.a}}]);