_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[80],{"+1NP":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n,a){return new Array(e).fill(1).reduce((function(e,i,c){return e.concat([{bin:c,bins:(0,r.default)(t,n,a)}])}),[])};var a,r=(a=n("mNV6"))&&a.__esModule?a:{default:a}},"201w":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("J4UP");function r(e){return Object(a.a)(e)}},"67po":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("uKU/"),r=n("xx0A"),i=Object(r.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function c(e){return i(Object(a.a)(),e)}},HbGN:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},IkWl:function(e){e.exports=JSON.parse('{"name":"@visx/demo-heatmap","description":"Standalone visx heatmap demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/group":"latest","@visx/heatmap":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","heatmap"]}')},J4UP:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const a=1/4294967296;function r(e=Math.random()){let t=0|(0<=e&&e<1?e/a:Math.abs(e));return()=>(t=1664525*t+1013904223|0,a*(t>>>0))}},JmwF:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("aWzz"),r=n.n(a),i=n("ERkP"),c=n.n(i),l=n("O94r"),o=n.n(l);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e){var t=e.top,n=void 0===t?0:t,a=e.left,r=void 0===a?0:a,i=e.transform,l=e.className,s=e.children,d=e.innerRef,p=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["top","left","transform","className","children","innerRef"]);return c.a.createElement("g",u({ref:d,className:o()("visx-group",l),transform:i||"translate("+r+", "+n+")"},p),s)}s.propTypes={top:r.a.number,left:r.a.number,transform:r.a.string,className:r.a.string,children:r.a.node,innerRef:r.a.oneOfType([r.a.string,r.a.func,r.a.object])}},Mjv1:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));n("ERkP");var a=n("Zydf"),r=n("i9k6"),i=n("jg1C"),c=n("IkWl");n.d(t,"packageJson",(function(){return c}));var l={background:a.a},o={color:"rgba(255,255,255,0.3)"};function u(){return Object(i.jsx)(r.a,{title:"Heatmaps",description:"<HeatmapCircle /> & <HeatmapRect />",exampleRenderer:a.b,exampleUrl:"/heatmaps",tileStyles:l,detailsStyles:o})}},Sg64:function(e,t,n){"use strict";n.r(t);n("ERkP");var a=n("zjfJ"),r=n("HbGN"),i=n("O94r"),c=n.n(i),l=n("JmwF"),o=n("jg1C"),u=["className","top","left","data","binWidth","binHeight","x0","gap","xScale","yScale","colorScale","opacityScale","bins","count","children"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){var t=e.className,n=e.top,i=e.left,d=e.data,p=void 0===d?[]:d,f=e.binWidth,m=void 0===f?6:f,h=e.binHeight,b=void 0===h?6:h,y=e.x0,v=void 0===y?0:y,x=e.gap,g=void 0===x?1:x,O=e.xScale,j=e.yScale,S=e.colorScale,w=void 0===S?function(){}:S,N=e.opacityScale,P=void 0===N?function(){return 1}:N,E=e.bins,_=void 0===E?function(e){return e&&e.bins}:E,C=e.count,R=void 0===C?function(e){return e&&e.count}:C,k=e.children,q=Object(r.a)(e,u),V=m-g,M=b-g,D=p.map((function(e,t){var n=O(t);return _(e).map((function(a,r){var i=R(a);return{bin:a,row:r,column:t,datum:e,width:V,height:M,gap:g,count:i,x:n+v,y:j(r)+g,color:w(i),opacity:P(i)}}))}));return k?Object(o.jsx)(o.Fragment,{children:k(D)}):Object(o.jsx)(l.a,{className:"visx-heatmap-rects",top:n,left:i,children:D.map((function(e){return e.map((function(e){return Object(o.jsx)("rect",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:c()("visx-heatmap-rect",t),width:e.width,height:e.height,x:e.x,y:e.y,fill:e.color,fillOpacity:e.opacity},q),"heatmap-tile-rect-".concat(e.row,"-").concat(e.column))}))}))})}try{d.displayName="HeatmapRect",d.__docgenInfo={description:"",displayName:"HeatmapRect",props:{data:{defaultValue:{value:"[]"},description:"Array of column data (one per column desired) for the heatmap.",name:"data",required:!1,type:{name:"ColumnDatum[] | undefined"}},left:{defaultValue:null,description:"Left offset applied to heatmap wrapper g element.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"Top offset applied to heatmap wrapper g element.",name:"top",required:!1,type:{name:"number | undefined"}},binWidth:{defaultValue:{value:6},description:"Width of a rect bin.",name:"binWidth",required:!1,type:{name:"number | undefined"}},binHeight:{defaultValue:{value:6},description:"Height of a rect bin.",name:"binHeight",required:!1,type:{name:"number | undefined"}},x0:{defaultValue:{value:0},description:"",name:"x0",required:!1,type:{name:"number | undefined"}},gap:{defaultValue:{value:1},description:"Pixel gap between heatmap rects.",name:"gap",required:!1,type:{name:"number | undefined"}},xScale:{defaultValue:null,description:"Given a column index, returns the x position of a rect cell.",name:"xScale",required:!0,type:{name:"(columnIndex: number) => number"}},yScale:{defaultValue:null,description:"Given a row index, returns the y position of a rect cell.",name:"yScale",required:!0,type:{name:"(rowIndex: number) => number"}},colorScale:{defaultValue:{value:"() => undefined"},description:"Given a count value, returns the desired rect fill color.",name:"colorScale",required:!1,type:{name:"ColorScale | undefined"}},opacityScale:{defaultValue:{value:"() => 1"},description:"Given a count value, returns the desired rect fill opacity.",name:"opacityScale",required:!1,type:{name:"OpacityScale | undefined"}},bins:{defaultValue:{value:"(d: any) => d && d.bins"},description:"Accessor that returns an array of cell BinDatums (rows) for the provided ColumnData.",name:"bins",required:!1,type:{name:"((column: ColumnDatum) => BinDatum[]) | undefined"}},count:{defaultValue:{value:"(d: any) => d && d.count"},description:"Accessor that returns the count for the provided Bin.",name:"count",required:!1,type:{name:"((bin: BinDatum) => number) | undefined"}},className:{defaultValue:null,description:"className to apply to each heatmap rect element.",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Render function override, provided with heatmap.",name:"children",required:!1,type:{name:"((cells: RectCell<ColumnDatum, BinDatum>[][]) => ReactNode) | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-heatmap/src/heatmaps/HeatmapRect.tsx#HeatmapRect"]={docgenInfo:d.__docgenInfo,name:"HeatmapRect",path:"../visx-heatmap/src/heatmaps/HeatmapRect.tsx#HeatmapRect"})}catch(x){}var p=["className","top","left","data","gap","radius","xScale","yScale","colorScale","opacityScale","bins","count","children"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){var t=e.className,n=e.top,i=e.left,u=e.data,s=void 0===u?[]:u,d=e.gap,m=void 0===d?1:d,h=e.radius,b=void 0===h?6:h,y=e.xScale,v=e.yScale,x=e.colorScale,g=void 0===x?function(){}:x,O=e.opacityScale,j=void 0===O?function(){return 1}:O,S=e.bins,w=void 0===S?function(e){return e&&e.bins}:S,N=e.count,P=void 0===N?function(e){return e&&e.count}:N,E=e.children,_=Object(r.a)(e,p),C=b-m,R=s.map((function(e,t){var n=y(t);return w(e).map((function(a,r){var i=P(a);return{bin:a,row:r,column:t,datum:e,radius:b,gap:m,count:i,cx:b+n,cy:v(r)+m+b,r:C,opacity:j(i),color:g(i)}}))}));return E?Object(o.jsx)(o.Fragment,{children:E(R)}):Object(o.jsx)(l.a,{className:"visx-heatmap-circles",top:n,left:i,children:R.map((function(e){return e.map((function(e){return Object(o.jsx)("circle",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:c()("visx-heatmap-circle",t),r:e.r,cx:e.cx,cy:e.cy,fill:e.color,fillOpacity:e.opacity},_),"heatmap-tile-circle-".concat(e.row,"-").concat(e.column))}))}))})}try{m.displayName="HeatmapCircle",m.__docgenInfo={description:"",displayName:"HeatmapCircle",props:{data:{defaultValue:{value:"[]"},description:"Array of column data (one per column desired) for the heatmap.",name:"data",required:!1,type:{name:"ColumnDatum[] | undefined"}},left:{defaultValue:null,description:"Left offset applied to heatmap wrapper g element.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"Top offset applied to heatmap wrapper g element.",name:"top",required:!1,type:{name:"number | undefined"}},gap:{defaultValue:{value:1},description:"Pixel gap between heatmap circles.",name:"gap",required:!1,type:{name:"number | undefined"}},radius:{defaultValue:{value:6},description:"Pixel radius of heatmap circles.",name:"radius",required:!1,type:{name:"number | undefined"}},xScale:{defaultValue:null,description:"Given a column index, returns the x position of a circle cell.",name:"xScale",required:!0,type:{name:"(columnIndex: number) => number"}},yScale:{defaultValue:null,description:"Given a row index, returns the y position of a circle cell.",name:"yScale",required:!0,type:{name:"(rowIndex: number) => number"}},colorScale:{defaultValue:{value:"() => undefined"},description:"Given a count value, returns the desired circle fill color.",name:"colorScale",required:!1,type:{name:"ColorScale | undefined"}},opacityScale:{defaultValue:{value:"() => 1"},description:"Given a count value, returns the desired circle fill opacity.",name:"opacityScale",required:!1,type:{name:"OpacityScale | undefined"}},bins:{defaultValue:{value:"(column: any) => column && column.bins"},description:"Accessor that returns an array of cell BinDatums (rows) for the provided ColumnData.",name:"bins",required:!1,type:{name:"((column: ColumnDatum) => BinDatum[]) | undefined"}},count:{defaultValue:{value:"(cell: any) => cell && cell.count"},description:"Accessor that returns the count for the provided Bin.",name:"count",required:!1,type:{name:"((bin: BinDatum) => number) | undefined"}},className:{defaultValue:null,description:"className to apply to each heatmap circle element.",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Render function override, provided with heatmap.",name:"children",required:!1,type:{name:"((cells: CircleCell<ColumnDatum, BinDatum>[][]) => ReactNode) | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-heatmap/src/heatmaps/HeatmapCircle.tsx#HeatmapCircle"]={docgenInfo:m.__docgenInfo,name:"HeatmapCircle",path:"../visx-heatmap/src/heatmaps/HeatmapCircle.tsx#HeatmapCircle"})}catch(x){}var h=n("QnPE"),b=n("Mjv1"),y=[d,m],v=[b.default];t.default=function(){return Object(o.jsx)(h.a,{components:y,examples:v,readme:'# @visx/heatmap\n\n<a title="@visx/heatmap npm downloads" href="https://www.npmjs.com/package/@visx/heatmap">\n  <img src="https://img.shields.io/npm/dm/@visx/heatmap.svg?style=flat-square" />\n</a>\n\nA Heatmap is an arrangement of shapes where the data values are represented as colors.\n\n## Example\n\n<img style="display:block; width:34vw;" src="http://i.imgur.com/OzSD3X3.png">\n\n```js\n<HeatmapRect\n  data={data}\n  xScale={xScale}\n  yScale={yScale}\n  colorScale={colorScale}\n  opacityScale={opacityScale}\n  binWidth={bWidth}\n  binHeight={bWidth}\n  step={dStep}\n  gap={0}\n/>\n```\n\nHeatmaps generally require structure that has this shape:\n\n```js\n[\n  {\n    bin: 1,\n    bins: [\n      {\n        count: 20,\n        bin: 23,\n      },\n    ],\n  },\n];\n```\n\nHowever, you\'re welcome to use your own structure by defining `x`, `y`, `z` accessors such as:\n\n```js\n// Example accessors\nconst x = d => d.myBin;\nconst y = d => d.myBins;\nconst z = d => d.myCount;\n\n// Example scale with an accessors\nconst xScale = scaleLinear({\n  range: [0, xMax],\n  domain: extent(data, x),\n});\n```\n\n## Installation\n\n```\nnpm install --save @visx/heatmap\n```\n',visxPackage:"heatmap"})}},Zbhd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("PB0s"),r=n("XAd9"),i=n("Cyas"),c=n("VBI3");function l(e,t,n,l){var o,u=Object(a.c)(e,t,n);switch((l=Object(r.a)(null==l?",f":l)).type){case"s":var s=Math.max(Math.abs(e),Math.abs(t));return null!=l.precision||isNaN(o=function(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(e)))}(u,s))||(l.precision=o),Object(c.b)(l,s);case"":case"e":case"g":case"p":case"r":null!=l.precision||isNaN(o=function(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Object(i.a)(t)-Object(i.a)(e))+1}(u,Math.max(Math.abs(e),Math.abs(t))))||(l.precision=o-("e"===l.type));break;case"f":case"%":null!=l.precision||isNaN(o=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(u))||(l.precision=o-2*("%"===l.type))}return Object(c.a)(l)}},Zydf:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("fGyu"),r=n("ERkP"),i=n.n(r),c=n("JmwF"),l=n("+1NP"),o=n.n(l),u=n("67po"),s=n("aWzz"),d=n.n(s),p=n("O94r"),f=n.n(p);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){var t=e.className,n=e.top,a=e.left,r=e.data,l=void 0===r?[]:r,o=e.gap,u=void 0===o?1:o,s=e.radius,d=void 0===s?6:s,p=e.xScale,h=e.yScale,b=e.colorScale,y=void 0===b?function(){}:b,v=e.opacityScale,x=void 0===v?function(){return 1}:v,g=e.bins,O=void 0===g?function(e){return e&&e.bins}:g,j=e.count,S=void 0===j?function(e){return e&&e.count}:j,w=e.children,N=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","top","left","data","gap","radius","xScale","yScale","colorScale","opacityScale","bins","count","children"]),P=d-u,E=l.map((function(e,t){var n=p(t);return O(e).map((function(a,r){var i=S(a);return{bin:a,row:r,column:t,datum:e,radius:d,gap:u,count:i,cx:d+n,cy:h(r)+u+d,r:P,opacity:x(i),color:y(i)}}))}));return w?i.a.createElement(i.a.Fragment,null,w(E)):i.a.createElement(c.a,{className:"visx-heatmap-circles",top:n,left:a},E.map((function(e){return e.map((function(e){return i.a.createElement("circle",m({key:"heatmap-tile-circle-"+e.row+"-"+e.column,className:f()("visx-heatmap-circle",t),r:e.r,cx:e.cx,cy:e.cy,fill:e.color,fillOpacity:e.opacity},N))}))})))}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e){var t=e.className,n=e.top,a=e.left,r=e.data,l=void 0===r?[]:r,o=e.binWidth,u=void 0===o?6:o,s=e.binHeight,d=void 0===s?6:s,p=e.x0,m=void 0===p?0:p,h=e.gap,y=void 0===h?1:h,v=e.xScale,x=e.yScale,g=e.colorScale,O=void 0===g?function(){}:g,j=e.opacityScale,S=void 0===j?function(){return 1}:j,w=e.bins,N=void 0===w?function(e){return e&&e.bins}:w,P=e.count,E=void 0===P?function(e){return e&&e.count}:P,_=e.children,C=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","top","left","data","binWidth","binHeight","x0","gap","xScale","yScale","colorScale","opacityScale","bins","count","children"]),R=u-y,k=d-y,q=l.map((function(e,t){var n=v(t);return N(e).map((function(a,r){var i=E(a);return{bin:a,row:r,column:t,datum:e,width:R,height:k,gap:y,count:i,x:n+m,y:x(r)+y,color:O(i),opacity:S(i)}}))}));return _?i.a.createElement(i.a.Fragment,null,_(q)):i.a.createElement(c.a,{className:"visx-heatmap-rects",top:n,left:a},q.map((function(e){return e.map((function(e){return i.a.createElement("rect",b({key:"heatmap-tile-rect-"+e.row+"-"+e.column,className:f()("visx-heatmap-rect",t),width:e.width,height:e.height,x:e.x,y:e.y,fill:e.color,fillOpacity:e.opacity},C))}))})))}h.propTypes={data:d.a.array,left:d.a.number,top:d.a.number,gap:d.a.number,radius:d.a.number,xScale:d.a.func.isRequired,yScale:d.a.func.isRequired,bins:d.a.func,count:d.a.func,className:d.a.string,children:d.a.func},y.propTypes={data:d.a.array,left:d.a.number,top:d.a.number,binWidth:d.a.number,binHeight:d.a.number,x0:d.a.number,gap:d.a.number,xScale:d.a.func.isRequired,yScale:d.a.func.isRequired,bins:d.a.func,count:d.a.func,className:d.a.string,children:d.a.func};var v=n("201w"),x=n("jg1C"),g="#28272c",O=Object(v.a)(.41),j=o()(16,16,(function(e){return 150*e}),(function(e,t){return 25*(t-e)*O()}));function S(e,t){return Math.max.apply(Math,Object(a.a)(e.map(t)))}var w=function(e){return e.bins},N=function(e){return e.count},P=S(j,(function(e){return S(w(e),N)})),E=S(j,(function(e){return w(e).length})),_=Object(u.a)({domain:[0,j.length]}),C=Object(u.a)({domain:[0,E]}),R=Object(u.a)({range:["#77312f","#f33d15"],domain:[0,P]}),k=Object(u.a)({range:["#122549","#b4fbde"],domain:[0,P]}),q=Object(u.a)({range:[.1,1],domain:[0,P]}),V={top:10,left:20,right:20,bottom:110},M=function(e){var t,n,r=e.width,i=e.height,l=e.events,o=void 0!==l&&l,u=e.margin,s=void 0===u?V:u,d=e.separation,p=void 0===d?20:d,f=(r>s.left+s.right?r-s.left-s.right-p:r)/2,m=i-s.bottom-s.top,b=f/j.length,v=(t=[b,m/E],n=function(e){return e},Math.min.apply(Math,Object(a.a)(t.map(n)))/2);return _.range([0,f]),C.range([m,0]),r<10?null:Object(x.jsxs)("svg",{width:r,height:i,children:[Object(x.jsx)("rect",{x:0,y:0,width:r,height:i,rx:14,fill:g}),Object(x.jsx)(c.a,{top:s.top,left:s.left,children:Object(x.jsx)(h,{data:j,xScale:function(e){var t;return null!==(t=_(e))&&void 0!==t?t:0},yScale:function(e){var t;return null!==(t=C(e))&&void 0!==t?t:0},colorScale:R,opacityScale:q,radius:v,gap:2,children:function(e){return e.map((function(e){return e.map((function(e){return Object(x.jsx)("circle",{className:"visx-heatmap-circle",cx:e.cx,cy:e.cy,r:e.r,fill:e.color,fillOpacity:e.opacity,onClick:function(){if(o){var t=e.row,n=e.column;alert(JSON.stringify({row:t,column:n,bin:e.bin}))}}},"heatmap-circle-".concat(e.row,"-").concat(e.column))}))}))}})}),Object(x.jsx)(c.a,{top:s.top,left:f+s.left+p,children:Object(x.jsx)(y,{data:j,xScale:function(e){var t;return null!==(t=_(e))&&void 0!==t?t:0},yScale:function(e){var t;return null!==(t=C(e))&&void 0!==t?t:0},colorScale:k,opacityScale:q,binWidth:b,binHeight:b,gap:2,children:function(e){return e.map((function(e){return e.map((function(e){return Object(x.jsx)("rect",{className:"visx-heatmap-rect",width:e.width,height:e.height,x:e.x,y:e.y,fill:e.color,fillOpacity:e.opacity,onClick:function(){if(o){var t=e.row,n=e.column;alert(JSON.stringify({row:t,column:n,bin:e.bin}))}}},"heatmap-rect-".concat(e.row,"-").concat(e.column))}))}))}})})]})};t.b=M;try{M.displayName="Example",M.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},separation:{defaultValue:{value:20},description:"",name:"separation",required:!1,type:{name:"number | undefined"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-heatmap/Example.tsx#Example"]={docgenInfo:M.__docgenInfo,name:"Example",path:"src/sandboxes/visx-heatmap/Example.tsx#Example"})}catch(D){}},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=s;var a=o(n("aWzz")),r=o(n("FGHv")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("ERkP")),c=o(n("LaGA"));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e){var t=e.className,n=e.children,a=e.debounceTime,l=void 0===a?300:a,o=e.ignoreDimensions,s=void 0===o?[]:o,d=e.parentSizeStyles,p=void 0===d?{width:"100%",height:"100%"}:d,f=e.enableDebounceLeadingCall,m=void 0===f||f,h=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"]),b=(0,i.useRef)(null),y=(0,i.useRef)(0),v=(0,i.useState)({width:0,height:0,top:0,left:0}),x=v[0],g=v[1],O=(0,i.useMemo)((function(){var e=Array.isArray(s)?s:[s];return(0,r.default)((function(t){g((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),l,{leading:m})}),[l,m,s]);return(0,i.useEffect)((function(){var e=new c.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,a=t.top,r=t.width,i=t.height;y.current=window.requestAnimationFrame((function(){O({width:r,height:i,top:a,left:n})}))}))}));return b.current&&e.observe(b.current),function(){window.cancelAnimationFrame(y.current),e.disconnect(),O&&O.cancel&&O.cancel()}}),[O]),i.default.createElement("div",u({style:p,ref:b,className:t},h),n(u({},x,{ref:b.current,resize:O})))}s.propTypes={className:a.default.string,debounceTime:a.default.number,enableDebounceLeadingCall:a.default.bool,ignoreDimensions:a.default.oneOfType([a.default.any,a.default.arrayOf(a.default.any)]),children:a.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("zjfJ"),r=n("yFcC"),i=n.n(r),c=n("ERkP"),l=n.n(c),o=n("jvFD"),u=n.n(o),s=n("i6Tx"),d=n.n(s),p=n("jg1C");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){var t,n,r=e.description,c=e.detailsHeight,o=void 0===c?76:c,s=e.detailsStyles,m=e.exampleProps,h=e.exampleRenderer,b=e.exampleUrl,y=e.tileStyles,v=e.title;return Object(p.jsxs)(p.Fragment,{children:[(t=b,n=Object(p.jsxs)("div",{style:y,className:"jsx-713312509 gallery-tile",children:[Object(p.jsx)("div",{className:"jsx-713312509 image",children:Object(p.jsx)(d.a,{children:function(e){var t=e.width,n=e.height;return l.a.createElement(h,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(v||r?o:0)},m))}})}),(v||r)&&Object(p.jsxs)("div",{style:s,className:"jsx-713312509 details",children:[v&&Object(p.jsx)("div",{className:"jsx-713312509 title",children:v}),r&&Object(p.jsx)("div",{className:"jsx-713312509 description",children:Object(p.jsx)("pre",{className:"jsx-713312509",children:r})})]})]}),t?Object(p.jsx)(u.a,{href:t,children:n}):n),Object(p.jsx)(i.a,{id:"713312509",children:["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]})]})}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(h){}},"l5+1":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/heatmap",function(){return n("Sg64")}])},mNV6:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){void 0===t&&(t=r);void 0===n&&(n=a);return new Array(e).fill(1).reduce((function(a,r,i){return a.concat([{bin:t(i,e),count:n(i,e)}])}),[])};var a=function(e,t){return Math.random()*(25*(t-e))},r=function(e,t){return 150*e}},"uKU/":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));var a=n("PB0s"),r=n("2+fR"),i=n("W1cA"),c=n("Zbhd");function l(e){var t=e.domain;return e.ticks=function(e){var n=t();return Object(a.a)(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var a=t();return Object(c.a)(a[0],a[a.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10);var r,i,c=t(),l=0,o=c.length-1,u=c[l],s=c[o],d=10;for(s<u&&(i=u,u=s,s=i,i=l,l=o,o=i);d-- >0;){if((i=Object(a.b)(u,s,n))===r)return c[l]=u,c[o]=s,t(c);if(i>0)u=Math.floor(u/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;u=Math.ceil(u*i)/i,s=Math.floor(s*i)/i}r=i}return e},e}function o(){var e=Object(r.b)();return e.copy=function(){return Object(r.a)(e,o())},i.b.apply(e,arguments),l(e)}},zjfJ:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}},[["l5+1",0,2,1,3,4,5,8,9,10]]]);