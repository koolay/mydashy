(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73f4d9da"],{"1c8e":function(t,e,n){"use strict";n("99af"),n("e9c4"),n("d3b7");var s=n("bc3a"),a=n.n(s),o=n("d445"),i=n("3136"),r=n("5cc6"),l={props:{options:{type:Object,default:{}}},data:function(){return{progress:new o["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.0",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(r["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,e){Object(i["e"])(t,e),this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:e,trigger:"hover focus",delay:250}},makeRequest:function(t,e,n,s){var o=this,i=n||"GET",r=this.useProxy?this.proxyReqEndpoint:t,l=JSON.stringify(s||{}),c=e||null,d=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(c)}:c,u=this.options.timeout||this.defaultTimeout,h={method:i,url:r,headers:d,data:l,timeout:u};return new Promise((function(t,e){a.a.request(h).then((function(e){!1===e.data.success&&o.error("Proxy returned error from target server",e.data.message),t(e.data)})).catch((function(t){o.error("Unable to fetch data",t),e(t)})).finally((function(){o.finishLoading()}))}))}}};e["a"]=l},"2fd2":function(t,e,n){},ed5d:function(t,e,n){"use strict";n("2fd2")},f258:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ad-guard-dns-info-wrapper"},[null!==t.enabled?n("div",{staticClass:"enable-status"},[t.enabled?n("p",{staticClass:"status connected"},[n("span",[t._v("✔")]),t._v(" Enabled")]):n("p",{staticClass:"status not-connected"},[n("span",[t._v("✘")]),t._v(" Disabled")])]):t._e(),t.dnsInfo.length>0?n("p",{staticClass:"expend-details-btn",on:{click:t.toggleShowData}},[t._v(" "+t._s(t.showData?t.$t("widgets.general.show-less"):t.$t("widgets.general.show-more"))+" ")]):t._e(),t.showData&&t.dnsInfo.length>0?n("div",{staticClass:"dns-info"},t._l(t.dnsInfo,(function(e,s){return n("div",{key:s,staticClass:"row"},[n("span",{staticClass:"lbl"},[t._v(t._s(e.lbl)+": ")]),n("span",{staticClass:"val"},[t._v(t._s(t._f("renderVal")(e.val)))])])})),0):t._e()])},a=[],o=n("2909"),i=(n("313d"),n("0eb6"),n("b7ef"),n("8bd4"),n("99af"),n("a15b"),n("1c8e")),r=n("b96f"),l={mixins:[i["a"]],computed:{hostname:function(){return this.options.hostname||this.error("You must specify the path to your AdGuard server"),this.options.hostname},showFullInfo:function(){return this.options.showFullInfo},endpoint:function(){return"".concat(this.hostname,"/control/dns_info")},basicInoEndpoint:function(){return"".concat(this.hostname,"/control/status")},authHeaders:function(){if(this.options.username&&this.options.password){var t=window.btoa("".concat(this.options.username,":").concat(this.options.password));return{Authorization:"Basic ".concat(t)}}return{}}},data:function(){return{enabled:null,dnsInfo:[],showData:!1}},filters:{renderVal:function(t){return void 0===t||Array.isArray(t)&&0===t.length?"N/A":"boolean"===typeof t?t?"✔":"✘":"string"===typeof t?Object(r["b"])(t):Array.isArray(t)?t.join("\n"):t}},methods:{fetchData:function(){this.makeRequest(this.basicInoEndpoint,this.authHeaders).then(this.processStatusBasics),this.makeRequest(this.endpoint,this.authHeaders).then(this.processData)},processStatusBasics:function(t){var e=[{lbl:"DNS Address",val:t.dns_addresses},{lbl:"DNS Port",val:t.dns_port},{lbl:"HTTP Port",val:t.http_port}];this.dnsInfo=[].concat(Object(o["a"])(this.dnsInfo),e)},processData:function(t){this.enabled=t.protection_enabled;var e=[{lbl:"Blocking Mode",val:t.blocking_mode},{lbl:"Cache Size",val:"".concat(t.cache_size," B")},{lbl:"IPv6",val:!t.disable_ipv6},{lbl:"DNSSEC",val:t.dnssec_enabled},{lbl:"EDNS Client-Subnet",val:t.edns_cs_enabled},{lbl:"Private PTR",val:t.use_private_ptr_resolvers},{lbl:"Upstream DNS",val:t.upstream_dns},{lbl:"PRT Upstream",val:t.local_ptr_upstreams},{lbl:"Bootstrap DNS",val:t.bootstrap_dns}];this.dnsInfo=[].concat(Object(o["a"])(this.dnsInfo),e)},toggleShowData:function(){this.showData=!this.showData}},mounted:function(){this.showFullInfo&&(this.showData=!0)}},c=l,d=(n("ed5d"),n("2877")),u=Object(d["a"])(c,s,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-73f4d9da.7db5ef10.js.map