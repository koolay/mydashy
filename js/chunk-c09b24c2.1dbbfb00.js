(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c09b24c2"],{"1c8e":function(t,a,e){"use strict";e("99af"),e("e9c4"),e("d3b7");var n=e("bc3a"),o=e.n(n),i=e("d445"),s=e("3136"),c=e("5cc6"),r={props:{options:{type:Object,default:{}}},data:function(){return{progress:new i["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.0",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(c["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,a){Object(s["e"])(t,a),this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:a,trigger:"hover focus",delay:250}},makeRequest:function(t,a,e,n){var i=this,s=e||"GET",c=this.useProxy?this.proxyReqEndpoint:t,r=JSON.stringify(n||{}),l=a||null,u=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(l)}:l,d=this.options.timeout||this.defaultTimeout,h={method:s,url:c,headers:u,data:r,timeout:d};return new Promise((function(t,a){o.a.request(h).then((function(a){!1===a.data.success&&i.error("Proxy returned error from target server",a.data.message),t(a.data)})).catch((function(t){i.error("Unable to fetch data",t),a(t)})).finally((function(){i.finishLoading()}))}))}}};a["a"]=r},"6d7b":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wallet-balance-wrapper"},[e("p",{staticClass:"wallet-title"},[t._v(t._s(t.getCoinNameFromSymbol(t.coin))+" Wallet")]),t.metaInfo?e("a",{staticClass:"wallet-address",attrs:{href:t.metaInfo.explorer}},[t._v(t._s(t.address))]):t._e(),e("div",{staticClass:"balance-inner"},[t.metaInfo?e("img",{staticClass:"wallet-qr",attrs:{src:t.metaInfo.qrCode,alt:"QR Code"}}):t._e(),t.balances?e("div",{staticClass:"balances-section"},[e("p",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.makeBalanceTooltip(t.balances),expression:"makeBalanceTooltip(balances)"}],staticClass:"main-balance"},[t._v(t._s(t.balances.current))]),e("div",{staticClass:"balance-info"},[e("div",{staticClass:"balance-info-row"},[e("span",{staticClass:"label"},[t._v("Total In")]),e("span",{staticClass:"amount"},[t._v("+ "+t._s(t.balances.totalReceived))])]),e("div",{staticClass:"balance-info-row"},[e("span",{staticClass:"label"},[t._v("Total Out:")]),e("span",{staticClass:"amount"},[t._v("- "+t._s(t.balances.totalSent))])]),e("div",{staticClass:"balance-info-row"},[e("span",{staticClass:"label"},[t._v("Last Activity:")]),e("span",{staticClass:"amount"},[t._v(t._s(t.balances.lastTransaction))])])])]):t._e()]),t.transactions?e("div",{staticClass:"transactions"},[e("p",{staticClass:"transactions-title"},[t._v("Recent Transactions")]),t._l(t.transactions,(function(a){return e("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.makeTransactionTooltip(a),expression:"makeTransactionTooltip(transaction)"}],key:a.hash,staticClass:"transaction-row",attrs:{href:a.url}},[e("span",{staticClass:"date"},[t._v(t._s(a.date))]),e("span",{class:"amount "+(a.incoming?"in":"out")},[t._v(" "+t._s(a.incoming?"+":"-")+t._s(a.amount)+" ")])])}))],2):t._e()])},o=[],i=(e("99af"),e("b680"),e("d3b7"),e("159b"),e("fb6a"),e("caad"),e("2532"),e("b64b"),e("1c8e")),s=e("5cc6"),c=e("b96f"),r={mixins:[i["a"]],computed:{coin:function(){return this.options.coin||this.error("You must specify a coin, e.g. 'BTC'"),this.options.coin.toLowerCase()},address:function(){return this.options.address||this.error("You must specify a public address"),this.options.address},network:function(){return this.options.network||"main"},limit:function(){return this.options.limit||10},endpoint:function(){return"".concat(s["widgetApiEndpoints"].walletBalance,"/")+"".concat(this.coin,"/").concat(this.network,"/addrs/").concat(this.address)},divisionFactor:function(){switch(this.coin){case"btc":return 1e8;case"eth":return 1e18;default:return 1}}},data:function(){return{balances:null,metaInfo:null,transactions:null}},methods:{fetchData:function(){this.makeRequest(this.endpoint).then(this.processData)},processData:function(t){var a=this,e=function(t){var e=a.coin.toUpperCase();return t?"".concat((t/a.divisionFactor).toFixed(6)," ").concat(e):"0 ".concat(e)};this.balances={current:e(t.balance),unconfirmed:e(t.unconfirmed_balance),final:e(t.final_balance),totalSent:e(t.total_sent),totalReceived:e(t.total_received),lastTransaction:t.txrefs[0]?Object(c["j"])(t.txrefs[0].confirmed):"Never"};var n=[];t.txrefs.forEach((function(t){n.push({hash:t.tx_hash,amount:e(t.value),date:Object(c["p"])(t.confirmed),time:Object(c["r"])(t.confirmed),confirmations:t.confirmations,blockHeight:t.block_height,balance:e(t.ref_balance),incoming:-1===t.tx_input_n,url:"https://live.blockcypher.com/".concat(a.coin,"/tx/").concat(t.tx_hash,"/")})})),this.transactions=n.slice(0,this.limit)},getCoinNameFromSymbol:function(t){var a={btc:"Bitcoin",dash:"Dash",doge:"Doge",ltc:"Litecoin",eth:"Ethereum",bhc:"BitcoinCash",xmr:"Monero",ada:"Cardano",bcy:"BlockCypher"};return t&&Object.keys(a).includes(t.toLowerCase())?a[t.toLowerCase()]:""},makeBalanceTooltip:function(t){return this.tooltip("<b>Unconfirmed:</b> ".concat(t.unconfirmed,"<br><b>Final:</b> ").concat(t.final),!0)},makeTransactionTooltip:function(t){return this.tooltip("At ".concat(t.time,"<br>")+"<b>BlockHeight:</b> ".concat(t.blockHeight,"<br>")+"<b>Confirmations:</b> ".concat(t.confirmations,"<br>")+"<b>Balance After:</b> ".concat(t.balance),!0)},makeMetaInfo:function(){var t="https://live.blockcypher.com/".concat(this.coin,"/address/").concat(this.address,"/"),a=this.getCoinNameFromSymbol(this.coin).toLowerCase(),e="".concat(s["widgetApiEndpoints"].walletQrCode,"/")+"?style=".concat(a.toLowerCase(),"&color=11&address=").concat(this.address);return{explorer:t,coin:a,qrCode:e}}},mounted:function(){this.metaInfo=this.makeMetaInfo()}},l=r,u=(e("da6e"),e("2877")),d=Object(u["a"])(l,n,o,!1,null,"80b64974",null);a["default"]=d.exports},ac92:function(t,a,e){},da6e:function(t,a,e){"use strict";e("ac92")}}]);
//# sourceMappingURL=chunk-c09b24c2.1dbbfb00.js.map