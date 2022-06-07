(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a54cb84"],{"048f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weather"},[i("div",{staticClass:"intro"},[i("p",{staticClass:"temp"},[t._v(t._s(t.temp))]),i("i",{class:"owi owi-"+t.icon})]),i("p",{staticClass:"description"},[t._v(t._s(t.description))]),t.showDetails&&t.weatherDetails.length>0?i("div",{staticClass:"details"},t._l(t.weatherDetails,(function(e,s){return i("div",{key:s,staticClass:"info-wrap"},t._l(e,(function(e){return i("p",{key:e.label,staticClass:"info-line"},[i("span",{staticClass:"lbl"},[t._v(t._s(e.label))]),i("span",{staticClass:"val"},[t._v(t._s(e.value))])])})),0)})),0):t._e(),t.weatherDetails.length>0?i("p",{staticClass:"more-details-btn",on:{click:t.toggleDetails}},[t._v(" "+t._s(t.showDetails?t.$t("widgets.general.show-less"):t.$t("widgets.general.show-more"))+" ")]):t._e()])},n=[],a=(i("99af"),i("a4d3"),i("e01a"),i("1c8e")),r=i("5cc6"),o={mixins:[a["a"]],data:function(){return{loading:!0,icon:null,description:null,temp:null,showDetails:!1,weatherDetails:[]}},mounted:function(){this.checkProps()},computed:{units:function(){return this.options.units||"metric"},endpoint:function(){var t=this.options,e=t.apiKey,i=t.city;return"".concat(r["widgetApiEndpoints"].weather,"?q=").concat(i,"&appid=").concat(e,"&units=").concat(this.units)},tempDisplayUnits:function(){switch(this.units){case"metric":return"°C";case"imperial":return"°F";default:return""}},speedDisplayUnits:function(){switch(this.units){case"metric":return"m/s";case"imperial":return"mph";default:return""}}},methods:{processTemp:function(t){return"".concat(Math.round(t)).concat(this.tempDisplayUnits)},fetchData:function(){this.makeRequest(this.endpoint).then(this.processData)},processData:function(t){this.icon=t.weather[0].icon,this.description=t.weather[0].description,this.temp=this.processTemp(t.main.temp),this.options.hideDetails||this.makeWeatherData(t)},makeWeatherData:function(t){this.weatherDetails=[[{label:"Min Temp",value:this.processTemp(t.main.temp_min)},{label:"Max Temp",value:this.processTemp(t.main.temp_max)},{label:"Feels Like",value:this.processTemp(t.main.feels_like)}],[{label:"Pressure",value:"".concat(t.main.pressure,"hPa")},{label:"Humidity",value:"".concat(t.main.humidity,"%")},{label:"visibility",value:t.visibility},{label:"wind",value:"".concat(t.wind.speed).concat(this.speedDisplayUnits)},{label:"clouds",value:"".concat(t.clouds.all,"%")}]]},toggleDetails:function(){this.showDetails=!this.showDetails},checkProps:function(){var t=this.options;t.apiKey||this.error("Missing API key for OpenWeatherMap"),t.city||this.error("A city name is required to fetch weather"),t.units&&"metric"!==t.units&&"imperial"!==t.units&&this.error("Invalid units specified, must be either 'metric' or 'imperial'")}}},c=o,u=(i("3e91"),i("2877")),l=Object(u["a"])(c,s,n,!1,null,"7f035946",null);e["default"]=l.exports},"1c8e":function(t,e,i){"use strict";i("99af"),i("e9c4"),i("d3b7");var s=i("bc3a"),n=i.n(s),a=i("d445"),r=i("3136"),o=i("5cc6"),c={props:{options:{type:Object,default:{}}},data:function(){return{progress:new a["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.0",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(o["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,e){Object(r["e"])(t,e),this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:e,trigger:"hover focus",delay:250}},makeRequest:function(t,e,i,s){var a=this,r=i||"GET",o=this.useProxy?this.proxyReqEndpoint:t,c=JSON.stringify(s||{}),u=e||null,l=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(u)}:u,h=this.options.timeout||this.defaultTimeout,p={method:r,url:o,headers:l,data:c,timeout:h};return new Promise((function(t,e){n.a.request(p).then((function(e){!1===e.data.success&&a.error("Proxy returned error from target server",e.data.message),t(e.data)})).catch((function(t){a.error("Unable to fetch data",t),e(t)})).finally((function(){a.finishLoading()}))}))}}};e["a"]=c},"3e91":function(t,e,i){"use strict";i("75de")},"75de":function(t,e,i){}}]);
//# sourceMappingURL=chunk-2a54cb84.7b77d41b.js.map