"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[410],{3462:function(e,t,i){i.d(t,{Z:function(){return o}});var s={name:"DialogSlot",mixins:[{props:{visible:{type:Boolean,default:!1},title:{type:String,default:""},isOpenVip:{type:Boolean,default:!0},isDefaultBtn:{type:Boolean,default:!0}},data(){return{dialogVisible:!1}},computed:{},watch:{visible(){this.dialogVisible=this.visible}},filters:{},created(){},mounted(){},beforeDestroy(){},methods:{close(){this.$emit("update:visible",!1),this.$emit("close-modal")},confirm(){this.$emit("update:visible",!1),this.$emit("confirm-modal")}}}],components:{}},o=(0,i(1001).Z)(s,(function(){var e=this,t=e._self._c;return t("div",{class:[""===e.title?"title-null":"","dialog"]},[t("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[t("div",{staticClass:"content-dialog"},[t("div",{staticClass:"content-info",style:{height:e.isDefaultBtn?"height: calc(100% - 90px)":"100%"}},[e._t("content")],2),e.isDefaultBtn?t("div",{staticClass:"footer"},[t("div",{staticClass:"btn",on:{click:e.confirm}},[t("el-image",{directives:[{name:"show",rawName:"v-show",value:e.isOpenVip,expression:"isOpenVip"}],attrs:{src:i(2234)}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpenVip,expression:"isOpenVip"}],staticClass:"btn__text"},[e._v("开通NAS会员")]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isOpenVip,expression:"!isOpenVip"}],class:[e.isOpenVip?"":"clear-m-l","btn__text"]},[e._v("查看详情")])],1)]):e._e()])])],1)}),[],!1,null,"11ab2890",null).exports},4386:function(e,t,i){i.d(t,{Z:function(){return r}});var s=i(8071);var o={props:{floatText:{type:String,default:""}},data(){return{timer:null,isFloatBubble:!1,isInit:!0,mouseX:0,mouseY:0}},computed:{},watch:{},filters:{},created(){},mounted(){clearTimeout(this.timer),s.Z.$on("clearFloatTimeout",(()=>{clearTimeout(this.timer),this.isFloatBubble=!1,this.isInit=!0}))},beforeDestroy(){s.Z.$off("clearFloatTimeout")},methods:{mouseenterFloat(e){try{clearTimeout(this.timer);let t=this;this.timer=setTimeout((()=>{this.mouseX=e.clientX,this.mouseY=e.clientY,t.isFloatBubble=!0,t.isInit=!1}),1500)}catch(e){}},mouseleaveFloat(){try{clearTimeout(this.timer),this.isFloatBubble=!1}catch(e){}}}},l={name:"Bubble",props:{isBubble:{type:Boolean,default:!1},bubbleText:{type:String,default:""},isInit:{type:Boolean,default:!0},mouseX:{type:Number,default:0},mouseY:{type:Number,default:0}},data(){return{}},components:{},computed:{},watch:{},filters:{},created(){},mounted(){},beforeDestroy(){},methods:{}},a=i(1001),n={name:"FloatBubble",mixins:[o],components:{bubble:(0,a.Z)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"bubble"},[t("div",{class:[e.isInit?"float-bubble-name-hide":"",e.isBubble||e.isInit?"float-bubble-animation-show":"float-bubble-animation-hide","float-bubble-name"],style:{top:e.mouseY+"px",left:e.mouseX+"px"}},[t("div",{staticClass:"float-bubble-name__text"},[e._v(" "+e._s(e.bubbleText)+" ")])])])}),[],!1,null,"7ea15ed0",null).exports}},r=(0,a.Z)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"float-bubble",attrs:{id:"float-bubble"},on:{mouseenter:function(t){return e.mouseenterFloat(t)},mouseleave:e.mouseleaveFloat}},[e._t("content"),t("bubble",{attrs:{"is-bubble":e.isFloatBubble,"is-init":e.isInit,"mouse-x":e.mouseX,"mouse-y":e.mouseY,"bubble-text":e.floatText}})],2)}),[],!1,null,"3af52d58",null).exports},7852:function(e,t,i){i.d(t,{Z:function(){return m}});var s=i(408),o=i(4738);var l=(e,t)=>{let i=t.indexOf("?"),s=t.substr(i+1).split("&");for(let t=0;t<s.length;t++){let i=s[t].split("=");if(e===i[0])return i[1]}},a=i(1579),n=i.n(a);var r={props:{unloadingVisible:{type:Boolean,default:!1},shareLink:{type:String,default:""}},data(){return{dialogVisible:!1,code:"",shareLinkInfo:"",isShowModule:!1}},computed:{...(0,s.Se)({getUserName:"userStore/getUserName",getAvatarUrl:"userStore/getAvatarUrl",getNVip:"userStore/getNVip"})},watch:{unloadingVisible(){this.dialogVisible=this.unloadingVisible,this.interceptShareLink()}},filters:{},created(){},mounted(){},beforeDestroy(){},methods:{interceptShareLink(){try{let e=n().cloneDeep(this.shareLink).trim(),t="";-1!==e.indexOf("s/")&&-1!==e.indexOf("?")?t=e.substring(e.indexOf("s/"),e.indexOf("?")):-1!==e.indexOf("提取码")?t=e.substring(e.indexOf("s/"),e.indexOf("提取码")):-1!==e.indexOf("s/")&&(t=e.substring(e.indexOf("s/")));let i="";-1!==e.indexOf("pwd")&&-1!==e.indexOf("提取码")?i=e.substring(e.indexOf("pwd"),e.indexOf("提取码")):-1!==e.indexOf("pwd")?i=e.substring(e.indexOf("pwd")):-1!==e.indexOf("提取码")&&(i=e.substring(e.indexOf("提取码")));let s=i.replace(/\s/g,"");""!==t&&""!==s?(this.shareLinkInfo=t.substring(2).trim(),this.code=l("pwd",s)):this.shareLinkInfo=t.substring(2).trim()}catch(e){}},close(){this.$emit("update:unloadingVisible",!1),this.$emit("close-modal"),this.code="",this.shareLinkInfo=""},openFolderList(){if(0===this.getNVip)return void(this.isShowModule=!0);if(!this.code||""===this.code||void 0===this.code)return void(0,o.y)({message:"请输入提取码",type:"warning"});let e={shortUrl:this.shareLinkInfo,pwd:this.code};this.$api.article.shareTransferVerification(e).then((e=>{try{if(200===e.status){if(200!==e.data.code)return void(0,o.y)({message:e.data.message,type:"warning"});200===e.data.code&&(this.isNetDisk=!1,this.folderModuleTitle="保存到 飞牛",this.isOpenFolder=!0,this.newSynologyFolder({device_id:this.getDeviceId,path:"/",fs_id:0,start:0,limit:50}))}}catch(e){(0,o.y)({message:"转存失败",type:"error"})}})).catch((e=>{(0,o.y)({message:"转存失败",type:"error"})}))},confirmUnloading(e){this.code&&""!==this.code&&void 0!==this.code?(e.isNetDisk||this.$emit("confirm-modal",{path:e.path,link:this.shareLinkInfo,code:this.code}),this.clearFolderData(),this.close()):(0,o.y)({message:"请输入提取码",type:"warning"})},closeModule(){this.isShowModule=!1,this.$emit("update:isShowModule",!1)}}},d=i(4288),u=i(3723),c=i(4575),b=i(3462),f={name:"ShareUnloading",mixins:[r,u.Z,d.Z],components:{dialogSlot:b.Z,folderList:c.Z}},m=(0,i(1001).Z)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"share-unloading"},[t("div",{staticClass:"unloading-view"},[t("el-dialog",{attrs:{visible:e.dialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[t("div",{staticClass:"un-content"},[t("div",{staticClass:"ul-header"},[t("el-image",{attrs:{src:e.getAvatarUrl}}),t("div",{staticClass:"user-name"},[t("div",{staticClass:"user-name__text"},[e._v(e._s(e.getUserName))]),t("el-image",{attrs:{src:i(2234)}})],1)],1),t("div",{staticClass:"ul-body"},[t("div",{staticClass:"b-title"},[e._v("提取码")]),t("div",{staticClass:"b-input"},[t("el-input",{attrs:{placeholder:"请输入提取码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),t("div",{staticClass:"b-btn",on:{click:e.openFolderList}},[t("div",{staticClass:"b-btn__text"},[e._v("转存文件至飞牛")]),t("el-image",{attrs:{src:i(2234)}})],1)]),t("div",{staticClass:"u-footer"},[e._v(" 转存文件至飞牛将同时转存至网盘，网盘默认转存文件夹："),t("span",[e._v("/我的资源")])])])])],1),t("folder-list",{attrs:{"folder-visible":e.isOpenFolder,title:e.folderModuleTitle,"is-net-disk":e.isNetDisk,"folder-list":e.folderList,"folder-loading":e.folderLoadingStatus,"prohibit-roll":e.isProhibitRoll},on:{"update:folderVisible":function(t){e.isOpenFolder=t},"update:folder-visible":function(t){e.isOpenFolder=t},"enter-sub-folder":e.enterTargetFolder,"go-back-directory":e.enterTargetFolder,"all-directory-files":e.enterTargetFolder,"delete-index":e.enterTargetFolder,"bottoming-out-load":e.bottomingOutLoad,"confirm-modal":e.confirmUnloading,"close-modal":e.clearFolderData}}),t("dialog-slot",{attrs:{visible:e.isShowModule},on:{"update:visible":function(t){e.isShowModule=t},"close-modal":e.closeModule,"confirm-modal":e.openNasMember},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",{staticClass:"m-text"},[e._v("不支持转存文件，成为NAS会员可直接转存文件至飞牛")])]},proxy:!0}])})],1)}),[],!1,null,"103dd911",null).exports},8071:function(e,t,i){var s=i(7195);t.Z=new s.default}}]);