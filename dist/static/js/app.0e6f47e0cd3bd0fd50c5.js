webpackJsonp([1],{"+BTi":function(t,e){},"+GKY":function(t,e){},"2rGO":function(t,e){},G1q7:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o("2rGO"),o("+BTi");var n=o("nu7/"),s=o.n(n),i=o("7+uW");document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("html"),e=Math.min(window.innerWidth/750*100,75);t.style.fontSize=e+"px"});var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},a=o("VU/8")({name:"App"},r,!1,null,null,null).exports,c=o("/ocq"),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide-down"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.isTitleAndMenuShow,expression:"isTitleAndMenuShow"}],staticClass:"title-wrapper"},[e("div",{staticClass:"title-left",on:{click:this.goBack}},[e("span",{staticClass:"icon-back icon"})]),this._v(" "),e("div",{staticClass:"title-right"},[e("div",{staticClass:"icon-wrapper"},[e("span",{staticClass:"icon-cart icon"})]),this._v(" "),e("div",{staticClass:"icon-wrapper"},[e("span",{staticClass:"icon-person icon"})]),this._v(" "),e("div",{staticClass:"icon-wrapper"},[e("span",{staticClass:"icon-more icon"})])])])])},staticRenderFns:[]};var l=o("VU/8")({name:"TitleBar",methods:{goBack:function(){this.$router.go(-1)}},computed:{isTitleAndMenuShow:function(){return this.$store.state.isTitleAndMenuShow}}},u,!1,function(t){o("+GKY")},"data-v-16c067d0",null).exports,h=o("bOdI"),d=o.n(h),f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"slide-right"}},[o("div",{staticClass:"content"},[t.isBookAvailable?o("div",{staticClass:"content-wrapper"},t._l(t.currentNavigation,function(e,n){return o("div",{key:n,staticClass:"content-item",class:{current:e.cfi===t.currentHref},on:{click:function(o){t.navigateTo(e)}}},[o("span",{staticClass:"text"},[t._v(t._s(e.label))])])})):o("div",{staticClass:"empty"},[t._v("加载中...")])])])},staticRenderFns:[]};var v={bookConfig:{fontSizeList:[{fontSize:12},{fontSize:14},{fontSize:16},{fontSize:18},{fontSize:20},{fontSize:22},{fontSize:24}],themesList:[{name:"default",title:"默认",style:{color:"#000",background:"#fff"}},{name:"eye",title:"护眼",style:{color:"#000",background:"#ceeaba"}},{name:"night",title:"夜晚",style:{color:"#fff",background:"#000"}},{name:"classic",title:"经典",style:{color:"#000",background:"rgb(241, 236, 226)"}}]}},g={name:"MenuBar",components:{ContentView:o("VU/8")({name:"content-view",methods:{navigateTo:function(t){this.$emit("navigateTo",t)}},computed:{currentHref:function(){return this.$store.state.currentHref},isBookAvailable:function(){return this.$store.state.isBookAvailable},currentNavigation:function(){return this.$store.state.currentNavigation}}},f,!1,function(t){o("wCXt")},"data-v-79981dc8",null).exports},data:function(){return{showTag:0,progress:0}},methods:{showSetting:function(t){this.showTag=t,3===this.showTag?(this.$store.commit("setSettingShow",!1),this.$store.commit("setContentShow",!0)):this.$store.commit("setSettingShow",!0),this.getProcess()},hideSetting:function(){this.$store.commit("setSettingShow",!1)},setFontSize:function(t){this.$emit("setFontSize",t)},setTheme:function(t){this.$emit("setTheme",t)},onProgressChange:function(t){this.$emit("onProgressChange",t.target.value)},onProgressInput:function(t){this.progress=t.target.value},hideContent:function(){this.$store.commit("setContentShow",!1)},navigateTo:function(t){this.$emit("navigateTo",t)},getProcess:function(){this.$emit("getProcess")}},computed:d()({fontSizeList:function(){return v.bookConfig.fontSizeList},themesList:function(){return v.bookConfig.themesList},currentFontSize:function(){return this.$store.state.currentFontSize},currentThemeId:function(){return this.$store.state.currentThemeId},isTitleAndMenuShow:function(){return this.$store.state.isTitleAndMenuShow},isContentShow:function(){return this.$store.state.isContentShow},isSettingShow:function(){return this.$store.state.isSettingShow},isBookAvailable:function(){return this.$store.state.isBookAvailable}},"currentThemeId",function(){return this.$store.state.currentThemeId}),watch:{progress:{handler:function(t){this.$refs.progress.style.backgroundSize=t+"% 100%",localStorage.setItem("defaultProcess",t)}}}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu-bar"},[o("transition",{attrs:{name:"slide-up"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isSettingShow,expression:"isSettingShow"}],staticClass:"setting-wrapper"},[o("div",{directives:[{name:"show",rawName:"v-show",value:0==t.showTag,expression:"showTag == 0"}],staticClass:"setting-font-size"},[o("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[0].fontSize+"px"}},[t._v("A")]),t._v(" "),o("div",{staticClass:"font-wrapper"},t._l(t.fontSizeList,function(e,n){return o("div",{key:n,ref:"fontItem",refInFor:!0,staticClass:"font-size",on:{click:function(o){t.setFontSize(e.fontSize)}}},[t.currentFontSize==e.fontSize?o("div",{staticClass:"point"},[o("div",{staticClass:"small-point"})]):t._e()])})),t._v(" "),o("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[t.fontSizeList.length-1].fontSize+"px"}},[t._v("A")])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:1==t.showTag,expression:"showTag == 1"}],staticClass:"setting-theme"},t._l(t.themesList,function(e,n){return o("div",{key:n,staticClass:"setting-theme-item",on:{click:function(e){t.setTheme(n)}}},[o("div",{staticClass:"preview",class:{border:"#fff"===e.style.background},style:{background:e.style.background}}),t._v(" "),o("div",{staticClass:"text",class:{selected:n===t.currentThemeId}},[t._v(t._s(e.title))])])})),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:2==t.showTag,expression:"showTag == 2"}],staticClass:"setting-progress"},[o("div",{staticClass:"progress-wrapper"},[o("input",{ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",step:"0.1",disabled:!t.isBookAvailable},domProps:{value:t.progress},on:{change:t.onProgressChange,input:t.onProgressInput}})]),t._v(" "),o("div",{staticClass:"text-wrapper"},[o("span",[t._v(t._s(t.isBookAvailable?t.progress+"%":"加载中..."))])])])])]),t._v(" "),o("transition",{attrs:{name:"slide-up"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isTitleAndMenuShow,expression:"isTitleAndMenuShow"}],staticClass:"menu-wrapper",class:{"hide-box-shadow":t.isSettingShow||!t.isTitleAndMenuShow}},[o("div",{staticClass:"icon-wrapper"},[o("span",{staticClass:"icon-menu icon",on:{click:function(e){t.showSetting(3)}}})]),t._v(" "),o("div",{staticClass:"icon-wrapper"},[o("span",{staticClass:"icon-progress icon",on:{click:function(e){t.showSetting(2)}}})]),t._v(" "),o("div",{staticClass:"icon-wrapper"},[o("span",{staticClass:"icon-bright icon",on:{click:function(e){t.showSetting(1)}}})]),t._v(" "),o("div",{staticClass:"icon-wrapper"},[o("span",{staticClass:"icon-a icon",on:{click:function(e){t.showSetting(0)}}},[t._v("A")])])])]),t._v(" "),t.isContentShow?o("content-view",{on:{navigateTo:t.navigateTo}}):t._e(),t._v(" "),o("transition",{attrs:{name:"fade"}},[t.isContentShow?o("div",{staticClass:"content-mask",on:{click:t.hideContent}}):t._e()])],1)},staticRenderFns:[]};var k=o("VU/8")(g,m,!1,function(t){o("tOVM")},"data-v-70790f44",null).exports,p=window.ePub,b={components:{TitleBar:l,MenuBar:k},data:function(){return{}},methods:{init:function(){localStorage.getItem("currentThemeId")&&this.$store.commit("setCurrentThemeId",Number(localStorage.getItem("currentThemeId"))),localStorage.getItem("currentFontSize")&&this.$store.commit("setCurrentFontSize",Number(localStorage.getItem("currentFontSize"))),this.$route.params.bookId?(this.bookId=this.$route.params.bookId,localStorage.setItem("currentBookId",this.bookId),this.readBookInfo(this.bookId)):(this.bookId=Number(localStorage.getItem("currentBookId")),this.openIndexedDB(this.bookId))},openIndexedDB:function(t){var e=window.indexedDB.open("bookBD"),o=this;e.onsuccess=function(){o.$store.commit("setBookDatabase",e.result),o.readBookInfo(t)},e.onerror=function(){console.log("数据库打开失败")},e.onupgradeneeded=function(t){var e=t.target.result;e.objectStoreNames.contains("bookInfoList")||e.createObjectStore("bookInfoList",{autoIncrement:!0}).createIndex("bookName","bookName",{unique:!0});o.$store.commit("setBookDatabase",e)}},prevPage:function(){var t=this;this.book.prevPage().then(function(){t.getProcess()})},nextPage:function(){var t=this;this.book.nextPage().then(function(){t.getProcess()})},showEpub:function(){var t=this;this.$store.state.currentBookInfo.bookFile&&(this.book=p({bookPath:this.$store.state.currentBookInfo.bookFile,width:window.innerWidth,height:window.innerHeight,restore:!1,spreads:!1}),this.$store.state.currentBookInfo.currentProgress>0&&(this.loadingInstance=s.a.service({text:"进度读取中"})),this.book.getToc().then(function(e){t.$store.commit("setCurrentNavigation",e)}),this.book.ready.all.then(function(){return t.book.locations.generate()}).then(function(){if(t.locations=t.book.locations,t.$store.commit("setBookAvailable",!0),t.$store.state.currentBookInfo.currentProgress>0){var e=t.locations.cfiFromPercentage(t.$store.state.currentBookInfo.currentProgress/100);t.book.goto(e),t.loadingInstance.close()}}),this.book.renderer.forceSingle(!1),this.book.on("renderer:locationChanged",function(e){t.locationCfi=e}),this.setFontSize(this.$store.state.currentFontSize),this.setTheme(this.$store.state.currentThemeId),this.book.renderTo("read").then(function(){t.book.setStyle("padding-left","20px"),t.book.setStyle("padding-right","10px")}))},toggleTitleAndMenu:function(){this.$store.commit("setTitleAndMenuShow",!this.$store.state.isTitleAndMenuShow),this.$store.state.isTitleAndMenuShow||this.$refs.MenuBar.hideSetting()},setFontSize:function(t){this.$store.commit("setCurrentFontSize",t),this.book.setStyle("font-size",t+"px")},setTheme:function(t){var e=v.bookConfig.themesList[t];this.$store.commit("setCurrentThemeId",t),this.book.setStyle("color",e.style.color),this.book.setStyle("background-color",e.style.background)},onProgressChange:function(t){var e=t/100,o=e>0?this.locations.cfiFromPercentage(e):0;this.book.goto(o),this.updateBookProgress(t)},navigateTo:function(t){this.book.goto(t.href),this.hideTitleAndMenu(),this.getProcess()},hideTitleAndMenu:function(){this.$store.commit("setTitleAndMenuShow",!1),this.$refs.MenuBar.hideSetting(),this.$refs.MenuBar.hideContent()},getProcess:function(){if(this.$store.state.isBookAvailable){var t=this.locations.percentageFromCfi(this.locationCfi);this.$refs.MenuBar.progress=Math.round(1e3*t)/10,this.$store.commit("setCurrentHref",this.locationCfi),this.updateBookProgress(Math.round(1e3*t)/10)}},readBookInfo:function(t){var e=this.$store.state.bookDatabase.transaction(["bookInfoList"]).objectStore("bookInfoList").get(t),o=this;e.onerror=function(){console.log("书籍信息获取失败")},e.onsuccess=function(){var t=e.result;o.$store.commit("setCurrentBookInfo",t),o.showEpub()}},updateBookProgress:function(t){var e=this.$store.state.currentBookInfo;e.currentProgress=t,this.$store.commit("setCurrentBookInfo",e);var o=this.$store.state.bookDatabase.transaction(["bookInfoList"],"readwrite").objectStore("bookInfoList").put(e,this.bookId);o.onsuccess=function(){console.log("进度更新成功")},o.onerror=function(t){console.log("进度更新失败")}}},computed:{},mounted:function(){this.init()},destroyed:function(){this.book&&this.book.destroy()},created:function(){var t=this;document.onkeyup=function(e){var o=e.keyCode;37===o&&t.prevPage(),39===o&&t.nextPage()}}},w={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"eBook"},[o("title-bar"),t._v(" "),o("div",{ref:"Reader",staticClass:"reader-wrapper"},[o("div",{attrs:{id:"read"}}),t._v(" "),o("div",{directives:[{name:"touch",rawName:"v-touch:left",value:t.nextPage,expression:"nextPage",arg:"left"},{name:"touch",rawName:"v-touch:right",value:t.prevPage,expression:"prevPage",arg:"right"}],staticClass:"mask"},[o("div",{staticClass:"mask-left",on:{click:t.prevPage}}),t._v(" "),o("div",{staticClass:"mask-center",on:{click:t.toggleTitleAndMenu}}),t._v(" "),o("div",{staticClass:"mask-right",on:{click:t.nextPage}})])]),t._v(" "),o("menu-bar",{ref:"MenuBar",on:{setFontSize:t.setFontSize,onProgressChange:t.onProgressChange,navigateTo:t.navigateTo,getProcess:t.getProcess,setTheme:t.setTheme}})],1)},staticRenderFns:[]};var S=o("VU/8")(b,w,!1,function(t){o("jJfW")},"data-v-dd3583cc",null).exports,C=(o("cwe7"),o("2X9z")),I=o.n(C);var B=window.ePub,T={name:"bookshelf",data:function(){return{}},methods:{init:function(){this.openIndexedDB()},addBook:function(t){var e=t.target.files[0];t.target.value="";var o=this,n=new FileReader;n.onload=function(t){var e=this,n=t.target.result;this.book=B({bookPath:n,restore:!1}),this.book.getMetadata().then(function(t){var s,i;s=e.book,i=function(e){var s=o.$store.state.bookDatabase.transaction(["bookInfoList"],"readwrite").objectStore("bookInfoList").add({bookName:t.bookTitle,bookAuthor:t.creator,currentProgress:0,bookFile:n,bookCover:e});s.onsuccess=function(){o.getBookInfoList()},s.onerror=function(t){console.log("数据写入失败"),I()({message:t.target.error.message,type:"error"})}},s.coverUrl().then(function(t){var e=new XMLHttpRequest;e.responseType="blob",e.onload=function(){var t=e.response,o=new FileReader;o.onload=function(){i&&i(o.result)},o.readAsDataURL(t)},e.open("GET",t),e.send()})})},n.readAsArrayBuffer(e)},openIndexedDB:function(){var t=window.indexedDB.open("bookBD"),e=this;t.onsuccess=function(){e.$store.commit("setBookDatabase",t.result),e.getBookInfoList()},t.onerror=function(){console.log("数据库打开失败")},t.onupgradeneeded=function(t){var o=t.target.result;o.objectStoreNames.contains("bookInfoList")||o.createObjectStore("bookInfoList",{autoIncrement:!0}).createIndex("bookName","bookName",{unique:!0});e.$store.commit("setBookDatabase",o)}},getBookInfoList:function(){var t=this,e=[];this.$store.state.bookDatabase.transaction("bookInfoList").objectStore("bookInfoList").openCursor().onsuccess=function(o){var n=o.target.result;n?(e.push({bookId:n.key,bookName:n.value.bookName,currentProgress:n.value.currentProgress,bookCover:n.value.bookCover,bookAuthor:n.value.bookAuthor}),n.continue()):t.$store.commit("setBookInfoList",e)}},openBook:function(t){this.$router.push({name:"EBook",params:{bookId:t}})}},computed:{bookInfoList:function(){return this.$store.state.bookInfoList}},mounted:function(){this.init()}},$={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bookshelf"},[o("div",{staticClass:"title-wrapper"},[o("div",{staticClass:"title-text"},[t._v("缓存图书")]),t._v(" "),o("div",{staticClass:"title-button"},[o("div",{staticClass:"button-text"},[t._v("添加本地图书")]),t._v(" "),o("input",{staticClass:"addBook",attrs:{type:"file",accept:".epub"},on:{change:t.addBook}})])]),t._v(" "),o("div",{staticClass:"bookshelf-wrapper"},t._l(t.bookInfoList,function(e){return o("div",{staticClass:"book"},[o("div",{staticClass:"book-cover",on:{click:function(o){t.openBook(e.bookId)}}},[o("img",{staticClass:"book-cover-img",attrs:{src:e.bookCover,alt:""}})]),t._v(" "),o("div",{staticClass:"book-info"},[o("div",{staticClass:"book-name"},[t._v(t._s(e.bookName))]),t._v(" "),o("div",{staticClass:"book-process"},[t._v(t._s(e.currentProgress)+"%")])])])}))])},staticRenderFns:[]};var _=o("VU/8")(T,$,!1,function(t){o("S+R2")},"data-v-348de9ae",null).exports;i.default.use(c.a);var P=new c.a({routes:[{path:"/",name:"/",redirect:"/Bookshelf"},{path:"/EBook",name:"EBook",component:S},{path:"/Bookshelf",name:"Bookshelf",component:_,meta:{title:"书架"}}]}),z=o("NYxO");i.default.use(z.a);var A={setCurrentThemeId:function(t,e){t.currentThemeId=e,localStorage.setItem("currentThemeId",e)},setCurrentFontSize:function(t,e){t.currentFontSize=e,localStorage.setItem("currentFontSize",e)},setCurrentBookInfo:function(t,e){t.currentBookInfo=e},setCurrentHref:function(t,e){t.currentHref=e},setCurrentNavigation:function(t,e){t.currentNavigation=e},setTitleAndMenuShow:function(t,e){t.isTitleAndMenuShow=e},setSettingShow:function(t,e){t.isSettingShow=e},setContentShow:function(t,e){t.isContentShow=e},setBookAvailable:function(t,e){t.isBookAvailable=e},setBookDatabase:function(t,e){t.bookDatabase=e},setBookInfoList:function(t,e){t.bookInfoList=e}},x=new z.a.Store({state:{currentThemeId:0,currentFontSize:16,currentBookInfo:null,currentHref:"",currentNavigation:{},isTitleAndMenuShow:!1,isSettingShow:!1,isContentShow:!1,isBookAvailable:!1,bookDatabase:null,bookInfoList:null},mutations:A}),L=o("Fn0J"),M=o.n(L);o("tvR6"),o("jYjM"),o("G1q7");i.default.config.productionTip=!1,i.default.use(s.a),i.default.use(M.a),new i.default({el:"#app",router:P,store:x,components:{App:a},template:"<App/>",render:function(t){return t(a)}})},"S+R2":function(t,e){},cwe7:function(t,e){},jJfW:function(t,e){},jYjM:function(t,e){},tOVM:function(t,e){},tvR6:function(t,e){},wCXt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0e6f47e0cd3bd0fd50c5.js.map