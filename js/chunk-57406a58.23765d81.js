(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57406a58"],{"1c8e":function(t,e,o){"use strict";o("99af"),o("e9c4"),o("d3b7");var n=o("bc3a"),s=o.n(n),a=o("d445"),i=o("3136"),r=o("5cc6"),d={props:{options:{type:Object,default:{}}},data:function(){return{progress:new a["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.0",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(r["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,e){Object(i["e"])(t,e),this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:e,trigger:"hover focus",delay:250}},makeRequest:function(t,e,o,n){var a=this,i=o||"GET",r=this.useProxy?this.proxyReqEndpoint:t,d=JSON.stringify(n||{}),c=e||null,u=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(c)}:c,l=this.options.timeout||this.defaultTimeout,h={method:i,url:r,headers:u,data:d,timeout:l};return new Promise((function(t,e){s.a.request(h).then((function(e){!1===e.data.success&&a.error("Proxy returned error from target server",e.data.message),t(e.data)})).catch((function(t){a.error("Unable to fetch data",t),e(t)})).finally((function(){a.finishLoading()}))}))}}};e["a"]=d},"5a4b":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.tasks?o("div",{staticClass:"synology-download-wrapper"},t._l(t.tasks,(function(e,n){return o("div",{key:n,staticClass:"task-row"},[o("PercentageChart",{attrs:{title:e.DisplayTitle,showAsPercent:!1,showLegend:!1,values:[{label:t.$t("widgets.synology-download.downloaded"),size:e.Progress,color:"#20e253"},{label:t.$t("widgets.synology-download.remaining"),size:100-e.Progress,color:"#6092d1"}]}}),o("p",{staticClass:"info"},[o("strong",[t._v(t._s(t.$t("widgets.synology-download.downloaded")))]),t._v(": "+t._s(t._f("formatSize")(e.Downloaded))+" / "+t._s(t._f("formatSize")(e.TotalSize))+" ("+t._s(e.Progress)+"%) ("+t._s(t._f("formatSize")(e.DownSpeed))+"/s)"),o("br"),o("strong",[t._v(t._s(t.$t("widgets.synology-download.uploaded")))]),t._v(": "+t._s(t._f("formatSize")(e.Uploaded))+" ("+t._s(t._f("formatSize")(e.UpSpeed))+"/s) (ratio : "+t._s(Math.floor(e.Uploaded/e.Downloaded*100)/100)+") ")])],1)})),0):t._e()},s=[],a=(o("99af"),o("4e82"),o("d81d"),o("bc3a")),i=o.n(a),r=o("1c8e"),d=o("6152"),c=o("b96f"),u=o("5cc6"),l={mixins:[r["a"]],components:{PercentageChart:d["a"]},data:function(){return{tasks:null,sid:null}},computed:{hostname:function(){return this.options.hostname||this.error("A hostname is required"),this.options.hostname},username:function(){return this.options.username||this.error("A username is required"),this.options.username},password:function(){return this.options.password||this.error("A password is required"),this.options.password},endpointLogin:function(){return"".concat(this.hostname,"/webapi/auth.cgi?api=SYNO.API.Auth&version=3&method=login&account=").concat(this.username,"&passwd=").concat(this.password,"&session=DownloadStation&format=sid")},endpointTasks:function(){return"".concat(this.hostname,"/webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=1&method=list&additional=transfer,detail&_sid=").concat(this.sid)},endpointLogout:function(){return"".concat(this.hostname,"/webapi/auth.cgi?api=SYNO.API.Auth&version=3&method=logout&session=DownloadStation&_sid=").concat(this.sid)},proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.0",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(u["serviceEndpoints"].corsProxy)}},filters:{formatSize:function(t){return Object(c["c"])(t)}},methods:{login:function(){i.a.request({method:"GET",url:this.proxyReqEndpoint,headers:{"Target-URL":this.endpointLogin}}).then(this.processLogin)},getTasks:function(){i.a.request({method:"GET",url:this.proxyReqEndpoint,headers:{"Target-URL":this.endpointTasks}}).then(this.processTask)},logout:function(){i.a.request({method:"GET",url:this.proxyReqEndpoint,headers:{"Target-URL":this.endpointLogout}})},fetchData:function(){this.startLoading(),this.login()},update:function(){this.startLoading(),this.login()},processLogin:function(t){200===t.status&&t.data.success||this.error("Auth failed, check hostname, username & password (OTP not supported yet)"),this.sid=t.data.data.sid,this.getTasks()},processTask:function(t){var e=this;this.tasks=t.data.data.tasks.map((function(t){return{Title:t.title,DisplayTitle:"[".concat(t.status,"] ").concat(t.title),Status:t.status,TotalSize:t.size,CreatedTime:t.additional.detail.create_time,Downloaded:t.additional.transfer.size_downloaded,Uploaded:t.additional.transfer.size_uploaded,DownSpeed:t.additional.transfer.speed_download,UpSpeed:t.additional.transfer.speed_upload,Progress:Math.floor(t.additional.transfer.size_downloaded/t.size*1e4)/100}})).sort((function(t,o){return e.statusToInt(o)-e.statusToInt(t)||o.CreatedTime-t.CreatedTime})),this.finishLoading(),this.logout()},statusToInt:function(t){switch(t){case"downloading":return 1;case"seeding":return 2;case"finished":return 4;default:return 0}}},mounted:function(){this.background=Object(c["l"])("widget-accent-color")}},h=l,p=(o("5e7c"),o("2877")),f=Object(p["a"])(h,n,s,!1,null,"4ff1ccd8",null);e["default"]=f.exports},"5e7c":function(t,e,o){"use strict";o("a727")},6152:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"percentage-chart-wrapper"},[t.title?o("div",{staticClass:"title"},[o("p",[t._v(t._s(t.title))])]):t._e(),o("div",{staticClass:"percentage-chart",style:t.makeWrapperStyles(t.height)},t._l(t.blocks,(function(e,n){return o("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.label+" - "+e.width+"%",expression:"`${block.label} - ${block.width}%`"}],key:n,staticClass:"inner",style:t.makeDimens(e)})})),0),t.showLegend?o("div",{staticClass:"legend"},t._l(t.blocks,(function(e,n){return o("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:Math.round(e.width)+"% ("+e.value+")",expression:"`${Math.round(block.width)}% (${block.value})`"}],key:n,staticClass:"legend-item"},[e.label?o("div",{staticClass:"dot",style:t.makeDotColor(e)}):t._e(),e.label?o("div",{staticClass:"txt"},[t._v(t._s(e.label))]):t._e()])})),0):t._e()])},s=[],a=(o("d3b7"),o("ddb0"),o("159b"),o("99af"),{props:{showAsPercent:{type:Boolean,default:!0},showLegend:{type:Boolean,default:!0},height:{number:Boolean,default:1},values:Array,title:String},data:function(){return{defaultColors:["#eb5cad","#985ceb","#5346f3","#5c90eb","#5cdfeb","#00CCB4","#5ceb8d","#afeb5c","#eff961"]}},computed:{blocks:function(){var t=this,e=0,o=[],n=this.values.reduce((function(t,e){return(t.size||t)+e.size})),s=this.showAsPercent?100/n:1;return this.values.forEach((function(n,a){var i=t.defaultColors[a%t.defaultColors.length];o.push({start:e,width:Math.round(n.size*s),color:n.color||i,label:n.label,value:n.size}),e+=n.size*s})),o}},methods:{makeDimens:function(t){return"margin-left: ".concat(t.start,"%; width: ").concat(t.width,"%; background: ").concat(t.color)},makeDotColor:function(t){return"background: ".concat(t.color,";")},makeWrapperStyles:function(t){return"height: ".concat(t,"rem")}}}),i=a,r=(o("953b"),o("2877")),d=Object(r["a"])(i,n,s,!1,null,"b3e246fa",null);e["a"]=d.exports},"838b":function(t,e,o){},"953b":function(t,e,o){"use strict";o("838b")},a727:function(t,e,o){}}]);
//# sourceMappingURL=chunk-57406a58.23765d81.js.map