(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{398:function(e,t,c){"use strict";c.r(t);var l={data:function(){return{selectList:[{name:"请选择出行方式",value:0},{name:"巴士",value:1},{name:"快车",value:2},{name:"专车",value:3},{name:"顺风车",value:4},{name:"出租车",value:5},{name:"代驾",value:6}],curSelected:"3"}},methods:{selectAction:function(){console.log(this.curSelected)}}},a=c(1),n=Object(a.a)(l,function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticStyle:{width:"400px"}},[c("g-select",{attrs:{data:e.selectList},on:{change:e.selectAction},model:{value:e.curSelected,callback:function(t){e.curSelected=t},expression:"curSelected"}}),e._v(" "),c("div",{staticStyle:{width:"100%",border:"0.5px solid #ccc"}}),e._v(" "),c("g-select",{attrs:{right:"",data:e.selectList},model:{value:e.curSelected,callback:function(t){e.curSelected=t},expression:"curSelected"}})],1)},[],!1,null,null,null);n.options.__file="select.vue";t.default=n.exports}}]);