(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-281d1ad6"],{"1c8e":function(t,e,i){"use strict";i("99af"),i("e9c4"),i("d3b7");var a=i("bc3a"),n=i.n(a),s=i("d445"),r=i("3136"),o=i("5cc6"),d={props:{options:{type:Object,default:{}}},data:function(){return{progress:new s["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.0",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(o["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,e){Object(r["e"])(t,e),this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:e,trigger:"hover focus",delay:250}},makeRequest:function(t,e,i,a){var s=this,r=i||"GET",o=this.useProxy?this.proxyReqEndpoint:t,d=JSON.stringify(a||{}),c=e||null,l=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(c)}:c,u=this.options.timeout||this.defaultTimeout,m={method:r,url:o,headers:l,data:d,timeout:u};return new Promise((function(t,e){n.a.request(m).then((function(e){!1===e.data.success&&s.error("Proxy returned error from target server",e.data.message),t(e.data)})).catch((function(t){s.error("Unable to fetch data",t),e(t)})).finally((function(){s.finishLoading()}))}))}}};e["a"]=d},"3bae":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blacklist-check-wrapper"},[t.domainMeta?i("div",{staticClass:"expiry-wrap",on:{click:t.toggleDomainInfo}},[i("span",{staticClass:"name"},[t._v(t._s(t.domainMeta.domainName))]),t.domainMeta.isRegistered?t._e():i("span",{staticClass:"not-registered"},[t._v(" Not Registered ")]),t.domainMeta.isRegistered?i("span",{class:"is-registered expire-date "+t.getExpireColor(t.domainRegistration.expireDate)},[t._v(" "+t._s(t._f("formatDate")(t.domainRegistration.expireDate))+" ")]):t._e(),t.domainMeta.isRegistered?i("span",{class:"is-registered time-left "+t.getExpireColor(t.domainRegistration.expireDate)},[t._v(" "+t._s(t._f("formatTimeLeft")(t.domainRegistration.expireDate))+" ")]):t._e()]):t._e(),t.showDomainInfo&&t.domainRegistration?i("div",{staticClass:"domain-more-data"},[i("div",{staticClass:"row"},[i("span",{staticClass:"lbl"},[t._v("Created")]),i("span",{staticClass:"val"},[t._v(t._s(t._f("formatDate")(t.domainRegistration.createdDate)))])]),i("div",{staticClass:"row"},[i("span",{staticClass:"lbl"},[t._v("Updated")]),i("span",{staticClass:"val"},[t._v(t._s(t._f("formatDate")(t.domainRegistration.updatedDate)))])]),i("div",{staticClass:"row"},[i("span",{staticClass:"lbl"},[t._v("Expires")]),i("span",{staticClass:"val"},[t._v(t._s(t._f("formatDate")(t.domainRegistration.expireDate)))])]),t._l(t.domainRegistration.nameServers,(function(e,a){return i("div",{key:a,staticClass:"row"},[i("span",{staticClass:"lbl"},[t._v("NS "+t._s(a+1))]),i("span",{staticClass:"val"},[t._v(t._s(e))])])})),i("div",{staticClass:"row"},[i("span",{staticClass:"lbl"},[t._v("Domain ID")]),i("span",{staticClass:"val"},[t._v(t._s(t.domainRegistration.domainId))])]),t.domainRegistration.registrar?i("div",{staticClass:"row"},[i("span",{staticClass:"lbl"},[t._v("Registrar")]),i("span",{staticClass:"val"},[t._v(t._s(t.domainRegistration.registrar))])]):t._e(),t.domainRegistration.admin?i("div",{staticClass:"row"},[i("span",{staticClass:"lbl"},[t._v("Admin")]),i("span",{staticClass:"val"},[t._v(t._s(t.domainRegistration.admin))])]):t._e()],2):t._e(),t.domainRegistration?i("p",{staticClass:"expend-details-btn",on:{click:t.toggleDomainInfo}},[t._v(" "+t._s(t.showDomainInfo?t.$t("widgets.general.show-less"):t.$t("widgets.general.show-more"))+" ")]):t._e()])},n=[],s=(i("99af"),i("ac1f"),i("5319"),i("7db0"),i("d3b7"),i("b0c0"),i("1c8e")),r=i("b96f"),o=i("5cc6"),d={mixins:[s["a"]],computed:{apiKey:function(){return this.options.apiKey||this.error("Missing API Key"),this.options.apiKey},domain:function(){return this.options.domain||this.error("Missing Domain Name Key"),this.options.domain},endpoint:function(){return"".concat(o["widgetApiEndpoints"].domainMonitor,"/?domain=").concat(this.domain,"&r=whois&apikey=").concat(this.apiKey)}},data:function(){return{domainMeta:null,domainRegistration:null,showDomainInfo:!1}},filters:{formatDate:function(t){return t?Object(r["p"])(t):"No Date Supplied"},formatTimeLeft:function(t){return Object(r["j"])(new Date(t)).replace("in","")}},methods:{fetchData:function(){this.makeRequest(this.endpoint).then(this.processData)},processData:function(t){t.limit_hit&&this.error("API Limit Reached"),"0"!==t.status&&this.error(t.status_desc||"API Error");var e=t.domain_name,i=t.registered;this.domainMeta={domainName:e,isRegistered:i},i&&(this.domainRegistration={expireDate:t.date_expires,createdDate:t.date_created,updatedDate:t.date_updated,nameServers:t.nameservers,domainId:t.registry_domain_id,registrar:this.getRegistrar(t.contacts),admin:this.getAdmin(t.contacts)})},getExpireColor:function(t){var e=(new Date).getTime(),i=new Date(t).getTime(),a=Math.round((i-e)/864e5);return a<7?"red":a<30?"orange":a<180?"yellow":a>=180?"green":"grey"},getRegistrar:function(t){if(!Array.isArray(t)||t.length<1)return null;var e=t.find((function(t){return"registrar"===t.type}));return e?e.name||e.organization:null},getAdmin:function(t){if(!Array.isArray(t)||t.length<1)return null;var e=t.find((function(t){return"admin"===t.type}))||t.find((function(t){return"registrant"===t.type}));return e?e.name||e.organization:null},toggleDomainInfo:function(){this.showDomainInfo=!this.showDomainInfo}},mounted:function(){this.options.showFullInfo&&(this.showDomainInfo=!0)}},c=d,l=(i("9ecf"),i("2877")),u=Object(l["a"])(c,a,n,!1,null,"718f5aa2",null);e["default"]=u.exports},8695:function(t,e,i){},"9ecf":function(t,e,i){"use strict";i("8695")}}]);
//# sourceMappingURL=chunk-281d1ad6.e39173dc.js.map