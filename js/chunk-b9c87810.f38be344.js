(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9c87810"],{"1c8e":function(t,s,e){"use strict";e("99af"),e("e9c4"),e("d3b7");var i=e("bc3a"),n=e.n(i),a=e("d445"),r=e("3136"),o=e("5cc6"),c={props:{options:{type:Object,default:{}}},data:function(){return{progress:new a["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.0",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(o["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,s){Object(r["e"])(t,s),this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:s,trigger:"hover focus",delay:250}},makeRequest:function(t,s,e,i){var a=this,r=e||"GET",o=this.useProxy?this.proxyReqEndpoint:t,c=JSON.stringify(i||{}),d=s||null,u=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(d)}:d,p=this.options.timeout||this.defaultTimeout,l={method:r,url:o,headers:u,data:c,timeout:p};return new Promise((function(t,s){n.a.request(l).then((function(s){!1===s.data.success&&a.error("Proxy returned error from target server",s.data.message),t(s.data)})).catch((function(t){a.error("Unable to fetch data",t),s(t)})).finally((function(){a.finishLoading()}))}))}}};s["a"]=c},7736:function(t,s,e){},"82d1":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.ipAddresses?e("div",{staticClass:"glances-ip-addr-wrapper"},[t.ipAddresses.public_address?e("div",{staticClass:"ip-row public-ip"},[e("span",{staticClass:"lbl"},[t._v("Public IP")]),e("span",{staticClass:"val"},[t._v(t._s(t.ipAddresses.public_address))])]):t._e(),t.ipAddresses.address?e("div",{staticClass:"ip-row"},[e("span",{staticClass:"lbl"},[t._v("Local Address")]),e("span",{staticClass:"val"},[t._v(t._s(t.ipAddresses.address))])]):t._e(),t.ipAddresses.gateway?e("div",{staticClass:"ip-row"},[e("span",{staticClass:"lbl"},[t._v("Gateway")]),e("span",{staticClass:"val"},[t._v(t._s(t.ipAddresses.gateway))])]):t._e(),t.ipAddresses.mask?e("div",{staticClass:"ip-row"},[e("span",{staticClass:"lbl"},[t._v("Mask")]),e("span",{staticClass:"val"},[t._v(t._s(t.ipAddresses.mask))])]):t._e()]):t._e()},n=[],a=(e("b64b"),e("1c8e")),r=e("c57e"),o={mixins:[a["a"],r["a"]],data:function(){return{ipAddresses:null}},computed:{endpoint:function(){return this.makeGlancesUrl("ip")}},filters:{},methods:{processData:function(t){this.ipAddresses=t,0===Object.keys(t).length&&this.error("The IP plugin is not supported in this instance of Glances")}}},c=o,d=(e("dce4"),e("2877")),u=Object(d["a"])(c,i,n,!1,null,"76d367e7",null);s["default"]=u.exports},c57e:function(t,s,e){"use strict";e("99af"),e("313d"),e("0eb6"),e("b7ef"),e("8bd4");s["a"]={computed:{hostname:function(){return this.options.hostname||this.error("You must specify a 'hostname' for Glaces"),this.options.hostname},apiVersion:function(){return this.options.apiVersion||3},credentials:function(){if(this.options.username&&this.options.password){var t="".concat(this.options.username,":").concat(this.options.password);return{Authorization:"Basic ".concat(window.btoa(t))}}return null}},methods:{fetchData:function(){this.makeRequest(this.endpoint,this.credentials).then(this.processData)},makeGlancesUrl:function(t){return"".concat(this.hostname,"/api/").concat(this.apiVersion,"/").concat(t)}}}},dce4:function(t,s,e){"use strict";e("7736")}}]);
//# sourceMappingURL=chunk-b9c87810.f38be344.js.map