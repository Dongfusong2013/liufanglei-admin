(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9e2e50c"],{2423:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"a",function(){return l}),n.d(e,"d",function(){return i}),n.d(e,"b",function(){return o});var r=n("b775");function a(){return Object(r["a"])({url:"/scrollImg/list",method:"get"})}function l(t,e){return Object(r["a"])({url:"/article/get",method:"get",params:{id:t,articleType:e}})}function i(t){return Object(r["a"])({url:"/article/detail",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/article/list",method:"post",data:t})}},"5dc5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"封面图片",width:"210",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("div",{staticClass:"pic-size item-center"},[n("img",{attrs:{src:t.row.imagePath,alt:"",height:"100%",width:"100%"}})])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"文章标题",align:"center",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.articleTitle))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"文章摘要",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.articleSummary))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"文章类型",align:"center",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.formatArticleType(e.row.articleType)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"是否显示",align:"center",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.formatPresent(e.row.present)))]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"发布时间",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(t.format(e.row.displayTime)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(n){return t.gotoPage(e.row.articleType,e.row.articleId)}}},[t._v("编辑")])]}}])})],1)],1)},a=[],l=n("2423"),i={name:"ScrollImageList",components:{},filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},props:{baseUrl:{type:String},articleType:{type:String}},data:function(){return{list:null,listLoading:!1}},beforeMount:function(){this.fetchData(),console.log("before mount....")},beforeUpdate:function(){console.log("before Update....")},methods:{gotoPage:function(t,e){console.log(t,e);var n={path:"",query:{articleType:t}};n.path="ideaArticle"===t?"/ideaArticleManage/edit/"+e:"newsArticle"===t?"/newsArticleManage/edit/"+e:"/focusArticleManage/edit/"+e,this.$router.push(n)},formatPresent:function(t){return t?"是":"否"},formatArticleType:function(t){return"ideaArtile"===t?"理念文章":"newsArticle"===t?"新闻报道":"专题报道"},format:function(t){var e=new Date(t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},fetchData:function(){var t=this;this.listLoading=!0,Object(l["c"])().then(function(e){console.log("=====get scroll image list",e),t.list=e.data,t.listLoading=!1})}}},o=i,c=(n("f737"),n("2877")),s=Object(c["a"])(o,r,a,!1,null,"52497166",null);e["default"]=s.exports},"8f23":function(t,e,n){},f737:function(t,e,n){"use strict";var r=n("8f23"),a=n.n(r);a.a}}]);