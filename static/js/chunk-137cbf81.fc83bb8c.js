(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-137cbf81"],{"2b4a":function(t,e,n){},c9ba:function(t,e,n){"use strict";n("2b4a")},e9c4:function(t,e,n){var a=n("23e7"),o=n("da84"),r=n("d066"),c=n("2ba4"),d=n("e330"),s=n("d039"),i=o.Array,u=r("JSON","stringify"),l=d(/./.exec),f=d("".charAt),g=d("".charCodeAt),p=d("".replace),h=d(1..toString),m=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,C=/^[\uDC00-\uDFFF]$/,y=function(t,e,n){var a=f(n,e-1),o=f(n,e+1);return l(v,t)&&!l(C,o)||l(C,t)&&!l(v,a)?"\\u"+h(g(t,0),16):t},b=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&a({target:"JSON",stat:!0,forced:b},{stringify:function(t,e,n){for(var a=0,o=arguments.length,r=i(o);a<o;a++)r[a]=arguments[a];var d=c(u,null,r);return"string"==typeof d?p(d,m,y):d}})},f1f3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{attrs:{shadow:"always"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{"padding-left":"100px"}},[t._v("过境数据")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0","margin-left":"10px"},attrs:{type:"text"},on:{click:function(e){return t.getServerData()}}},[t._v("劫持数据")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){return t.copyCode()}}},[t._v("一键复制")])],1),n("div",[n("pre",{attrs:{id:"CodeStyle"}},[n("code",{attrs:{id:"CodeContent"}},[t._v(t._s(t.codeJsonContent))])])])])},o=[],r=(n("e9c4"),{name:"cCodeFormat",data:function(){return{codeJsonContent:"点击 <劫持数据> 可以看到推送进GoMessage的原始数据...\n\n每次 <劫持数据> 都可以实时抓取到最新的一条数据...\n\n此处对数据进行了格式化与对齐，您可以把数据 <一键复制> 到其它地方使用...",codeUpdateTime:null,arr2:[]}},methods:{copyCode:function(){var t=document.getElementById("CodeContent");window.getSelection().selectAllChildren(t),document.execCommand("Copy"),this.$message("复制成功...")},getServerData:function(){var t=this;this.axios({url:"/v1/web/json",method:"get"}).then((function(e){console.log(e.data);var n=e["data"]["json_data"],a=e["data"]["update_time"];null===n?t.$message({showClose:!1,message:"没有数据进入GoMessage服务，无法向您展示数据。"}):(t.codeJsonContent=JSON.stringify(n,null,4),t.codeUpdateTime=t.dateFormat(new Date(a)))})).catch((function(t){console.log(t)}))}}}),c=r,d=(n("c9ba"),n("2877")),s=Object(d["a"])(c,a,o,!1,null,"b4c5c54a",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-137cbf81.fc83bb8c.js.map