(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3190e50d"],{"9e76":function(t,e,n){},c57e:function(t,e,n){"use strict";n("99af"),n("313d"),n("0eb6"),n("b7ef"),n("8bd4");e["a"]={computed:{hostname:function(){return this.options.hostname||this.error("You must specify a 'hostname' for Glaces"),this.options.hostname},apiVersion:function(){return this.options.apiVersion||3},credentials:function(){if(this.options.username&&this.options.password){var t="".concat(this.options.username,":").concat(this.options.password);return{Authorization:"Basic ".concat(window.btoa(t))}}return null}},methods:{fetchData:function(){this.makeRequest(this.endpoint,this.credentials).then(this.processData)},makeGlancesUrl:function(t){return"".concat(this.hostname,"/api/").concat(this.apiVersion,"/").concat(t)}}}},ce80:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"glances-load-history-wrapper"},[n("div",{staticClass:"gl-history-chart",attrs:{id:t.chartId}})])},s=[],a=(n("d3b7"),n("159b"),n("ac1f"),n("5319"),n("1c8e")),o=n("c57e"),r=n("e599"),c=n("b96f"),u={mixins:[a["a"],o["a"],r["a"]],components:{},data:function(){return{}},computed:{limit:function(){return this.options.limit||500},endpoint:function(){return this.makeGlancesUrl("load/history/".concat(this.limit))}},methods:{processData:function(t){var e=[],n=[],i=[],s=[];t.min1.forEach((function(t){e.push(Object(c["r"])(t[0])),n.push(t[1])})),t.min5.forEach((function(t){i.push(t[1])})),t.min15.forEach((function(t){s.push(t[1])}));var a=this.makeTitle(t.min1),o=[{name:"1 Minute",type:"bar",values:n},{name:"5 Minutes",type:"bar",values:i},{name:"15 Minutes",type:"bar",values:s}];this.generateChart({labels:e,datasets:o},a)},makeTitle:function(t){return"System Load over past ".concat(Object(c["j"])(t[0][0]).replace("ago",""))},generateChart:function(t,e){return new this.Chart("#".concat(this.chartId),{title:e,data:t,type:"axis-mixed",height:this.chartHeight,colors:this.chartColors,truncateLegends:!0,lineOptions:{regionFill:1,hideDots:1},axisOptions:{xIsSeries:!0,xAxisMode:"tick"},tooltipOptions:{formatTooltipY:function(t){return"".concat(t," Processes")}}})}},created:function(){this.overrideUpdateInterval=20}},h=u,p=(n("e465"),n("2877")),l=Object(p["a"])(h,i,s,!1,null,"0856ff36",null);e["default"]=l.exports},e465:function(t,e,n){"use strict";n("9e76")}}]);
//# sourceMappingURL=chunk-3190e50d.5d7090c5.js.map