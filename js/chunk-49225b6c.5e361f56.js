(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49225b6c"],{"1c8e":function(t,e,i){"use strict";i("99af"),i("e9c4"),i("d3b7");var r=i("bc3a"),n=i.n(r),a=i("d445"),o=i("3136"),s=i("5cc6"),c={props:{options:{type:Object,default:{}}},data:function(){return{progress:new a["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.0",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(s["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,e){Object(o["e"])(t,e),this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:e,trigger:"hover focus",delay:250}},makeRequest:function(t,e,i,r){var a=this,o=i||"GET",s=this.useProxy?this.proxyReqEndpoint:t,c=JSON.stringify(r||{}),u=e||null,d=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(u)}:u,l=this.options.timeout||this.defaultTimeout,p={method:o,url:s,headers:d,data:c,timeout:l};return new Promise((function(t,e){n.a.request(p).then((function(e){!1===e.data.success&&a.error("Proxy returned error from target server",e.data.message),t(e.data)})).catch((function(t){a.error("Unable to fetch data",t),e(t)})).finally((function(){a.finishLoading()}))}))}}};e["a"]=c},"4f87":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rss-wrapper"},[t.meta?i("a",{staticClass:"meta-container",attrs:{href:t.meta.link,title:t.meta.description}},[t.meta.image?i("img",{staticClass:"feed-icon",attrs:{src:t.meta.image,alt:"Feed Image"}}):t._e(),i("div",{staticClass:"feed-text"},[i("p",{staticClass:"feed-title"},[t._v(t._s(t.meta.title))]),t.meta.author?i("p",{staticClass:"feed-author"},[t._v("By "+t._s(t.meta.author))]):t._e()])]):t._e(),t.posts?i("div",{staticClass:"post-wrapper"},t._l(t.posts,(function(e,r){return i("div",{key:r,staticClass:"post-row"},[i("a",{staticClass:"post-top",attrs:{href:e.link}},[e.image?i("img",{staticClass:"post-img",attrs:{src:e.image,alt:"Post Image"}}):t._e(),i("div",{staticClass:"post-title-wrap"},[i("p",{staticClass:"post-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"post-date"},[t._v(" "+t._s(t._f("formatDate")(e.date))+" "+t._s(t._f("formatAuthor")(e.author))+" ")])])]),i("div",{staticClass:"post-body",domProps:{innerHTML:t._s(e.description)}}),i("a",{staticClass:"continue-reading-btn",attrs:{href:e.link}},[t._v(" "+t._s(t.$t("widgets.general.open-link"))+" ")])])})),0):t._e()])},n=[],a=(i("caad"),i("99af"),i("9911"),i("a4d3"),i("e01a"),i("d3b7"),i("159b"),i("1c8e")),o=i("5cc6"),s={mixins:[a["a"]],components:{},data:function(){return{meta:null,posts:null}},computed:{rssUrl:function(){return this.options.rssUrl||this.error("Missing feed URL"),encodeURIComponent(this.options.rssUrl||"")},apiKey:function(){return this.options.apiKey},limit:function(){var t=this.options.limit;return t||10},orderBy:function(){var t=this.options.orderBy,e=["title","pubDate","author"];return t&&e.includes(t)?t:"pubDate"},orderDirection:function(){var t=this.options.orderBy;return!t||"desc"!==t&&"asc"!==t?"desc":t},endpoint:function(){var t=this.apiKey?"&api_key=".concat(this.apiKey):"",e=this.limit&&this.apiKey?"&count=".concat(this.limit):"",i=this.orderBy&&this.apiKey?"&order_by=".concat(this.orderBy):"",r=this.orderDirection?"&order_dir=".concat(this.orderDirection):"";return"".concat(o["widgetApiEndpoints"].rssToJson,"?rss_url=").concat(this.rssUrl)+"".concat(t).concat(e).concat(i).concat(r)}},filters:{formatDate:function(t){var e=navigator.language,i={weekday:"short",day:"numeric",month:"short"};return new Date(t).toLocaleDateString(e,i)},formatAuthor:function(t){return t?"by ".concat(t):""}},methods:{fetchData:function(){this.makeRequest(this.endpoint).then(this.processData)},processData:function(t){var e=t.feed,i=t.items;this.meta={title:e.title,link:e.link,author:e.author,description:e.description,image:e.image};var r=[];i.forEach((function(t){r.push({title:t.title,description:t.description,image:t.thumbnail,author:t.author,date:t.pubDate,link:t.link})})),this.posts=r}}},c=s,u=(i("8a91"),i("2877")),d=Object(u["a"])(c,r,n,!1,null,"014da26b",null);e["default"]=d.exports},"857a":function(t,e,i){var r=i("e330"),n=i("1d80"),a=i("577e"),o=/"/g,s=r("".replace);t.exports=function(t,e,i,r){var c=a(n(t)),u="<"+e;return""!==i&&(u+=" "+i+'="'+s(a(r),o,"&quot;")+'"'),u+">"+c+"</"+e+">"}},"872f":function(t,e,i){},"8a91":function(t,e,i){"use strict";i("872f")},9911:function(t,e,i){"use strict";var r=i("23e7"),n=i("857a"),a=i("af03");r({target:"String",proto:!0,forced:a("link")},{link:function(t){return n(this,"a","href",t)}})},af03:function(t,e,i){var r=i("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);
//# sourceMappingURL=chunk-49225b6c.5e361f56.js.map