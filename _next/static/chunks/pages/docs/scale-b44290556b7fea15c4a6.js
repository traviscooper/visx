_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[90],{"0yDh":function(e,n,a){"use strict";a.d(n,"a",(function(){return u}));var t=a("aWzz"),r=a.n(t),i=a("ERkP"),s=a.n(i),o=a("O94r"),c=a.n(o),l=a("VFFr");function d(e){var n=e.id,a=e.width,t=e.height,r=e.path,i=e.fill,o=void 0===i?"transparent":i,d=e.stroke,u=e.strokeWidth,p=e.strokeDasharray,m=e.strokeLinecap,h=void 0===m?"square":m,f=e.shapeRendering,g=void 0===f?"auto":f,b=e.background,x=e.className;return s.a.createElement(l.a,{id:n,width:a,height:t},!!b&&s.a.createElement("rect",{width:a,height:t,fill:b}),s.a.createElement("path",{className:c()("visx-pattern-path",x),d:r,fill:o,stroke:d,strokeWidth:u,strokeDasharray:p,strokeLinecap:h,shapeRendering:g}))}function u(e){var n=e.id,a=e.width,t=e.height,r=e.fill,i=e.stroke,o=e.strokeWidth,l=e.strokeDasharray,u=e.strokeLinecap,p=e.shapeRendering,m=e.background,h=e.className;return s.a.createElement(d,{className:c()("visx-pattern-wave",h),path:"M 0 "+t/2+" c "+t/8+" "+-t/4+" , "+3*t/8+" "+-t/4+" , "+t/2+" 0\n             c "+t/8+" "+t/4+" , "+3*t/8+" "+t/4+" , "+t/2+" 0 M "+-t/2+" "+t/2+"\n             c "+t/8+" "+t/4+" , "+3*t/8+" "+t/4+" , "+t/2+" 0 M "+t+" "+t/2+"\n             c "+t/8+" "+-t/4+" , "+3*t/8+" "+-t/4+" , "+t/2+" 0",id:n,width:a,height:t,fill:r,stroke:i,strokeWidth:o,strokeDasharray:l,strokeLinecap:u,shapeRendering:p,background:m})}d.propTypes={id:r.a.string.isRequired,width:r.a.number.isRequired,height:r.a.number.isRequired,path:r.a.string,fill:r.a.string,className:r.a.string,background:r.a.string,stroke:r.a.string,strokeWidth:r.a.oneOfType([r.a.number,r.a.string]),strokeDasharray:r.a.oneOfType([r.a.string,r.a.number]),strokeLinecap:r.a.oneOf(["square","butt","round","inherit"]),shapeRendering:r.a.oneOfType([r.a.string,r.a.number])},u.propTypes={id:r.a.string.isRequired,width:r.a.number.isRequired,height:r.a.number.isRequired,fill:r.a.string,className:r.a.string,background:r.a.string,stroke:r.a.string,strokeWidth:r.a.oneOfType([r.a.number,r.a.string]),strokeDasharray:r.a.oneOfType([r.a.string,r.a.number]),strokeLinecap:r.a.oneOf(["square","butt","round","inherit"]),shapeRendering:r.a.oneOfType([r.a.string,r.a.number])}},"201w":function(e,n,a){"use strict";a.d(n,"a",(function(){return r}));var t=a("J4UP");function r(e){return Object(t.a)(e)}},"Cf/J":function(e,n,a){"use strict";a.d(n,"a",(function(){return c}));var t=a("aWzz"),r=a.n(t),i=a("ERkP"),s=a.n(i);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function c(e){var n=e.children,a=e.id,t=e.from,r=e.to,i=e.x1,c=e.y1,l=e.x2,d=e.y2,u=e.fromOffset,p=void 0===u?"0%":u,m=e.fromOpacity,h=void 0===m?1:m,f=e.toOffset,g=void 0===f?"100%":f,b=e.toOpacity,x=void 0===b?1:b,y=e.rotate,v=e.transform,O=e.vertical,k=void 0===O||O,j=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),E=i,w=l,S=c,R=d;return!k||E||w||S||R||(E="0",w="0",S="0",R="1"),s.a.createElement("defs",null,s.a.createElement("linearGradient",o({id:a,x1:E,y1:S,x2:w,y2:R,gradientTransform:y?"rotate("+y+")":v},j),!!n&&n,!n&&s.a.createElement("stop",{offset:p,stopColor:t,stopOpacity:h}),!n&&s.a.createElement("stop",{offset:g,stopColor:r,stopOpacity:x})))}c.propTypes={id:r.a.string.isRequired,from:r.a.string,to:r.a.string,x1:r.a.oneOfType([r.a.string,r.a.number]),x2:r.a.oneOfType([r.a.string,r.a.number]),y1:r.a.oneOfType([r.a.string,r.a.number]),y2:r.a.oneOfType([r.a.string,r.a.number]),fromOffset:r.a.oneOfType([r.a.string,r.a.number]),fromOpacity:r.a.oneOfType([r.a.string,r.a.number]),toOffset:r.a.oneOfType([r.a.string,r.a.number]),toOpacity:r.a.oneOfType([r.a.string,r.a.number]),rotate:r.a.oneOfType([r.a.string,r.a.number]),transform:r.a.string,children:r.a.node,vertical:r.a.bool}},J4UP:function(e,n,a){"use strict";a.d(n,"a",(function(){return r}));const t=1/4294967296;function r(e=Math.random()){let n=0|(0<=e&&e<1?e/t:Math.abs(e));return()=>(n=1664525*n+1013904223|0,t*(n>>>0))}},VFFr:function(e,n,a){"use strict";a.d(n,"a",(function(){return o}));var t=a("aWzz"),r=a.n(t),i=a("ERkP"),s=a.n(i);function o(e){var n=e.id,a=e.width,t=e.height,r=e.children;return s.a.createElement("defs",null,s.a.createElement("pattern",{id:n,width:a,height:t,patternUnits:"userSpaceOnUse"},r))}o.propTypes={id:r.a.string.isRequired,width:r.a.number.isRequired,height:r.a.number.isRequired,children:r.a.node.isRequired}},W0xs:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return w}));var t=a("ERkP"),r=a("E+ue"),i=a("dKJj"),s=a("0yDh"),o=a("67po"),c=a("D+es"),l=a("ue4z"),d=a("0yf5");var u,p=a("201w"),m=Object(p.a)(.65),h=function(e,n){for(var a=1/(.1+m()),t=2*m()-.5,r=10/(.1+m()),i=0;i<n;i+=1){var s=(i/n-t)*r;e[i]+=a*Math.exp(-s*s)}},f=function(e,n){var a,t=[];for(a=0;a<e;a+=1)t[a]=0;for(a=0;a<n;a+=1)h(t,e);return t},g=a("jg1C"),b="#ffdede",x=(u=20,Array.from(new Array(u),(function(e,n){return n}))),y=Object(o.a)({domain:[0,199]}),v=Object(o.a)({domain:[-30,50]}),O=Object(c.a)({domain:x,range:["#ffc409","#f14702","#262d97","white","#036ecd","#9ecadd","#51666e"]}),k=Object(c.a)({domain:x,range:["mustard","cherry","navy","circles","circles","circles","circles"]}),j=function(e){var n;return null!==(n=v(e[0]))&&void 0!==n?n:0},E=function(e){var n;return null!==(n=v(e[1]))&&void 0!==n?n:0};function w(e){var n=e.width,a=e.height,o=e.animate,c=void 0===o||o,u=function(){var e=Object(t.useState)(0)[1];return function(){return e((function(e){return e+1}))}}(),p=function(){return u()};if(n<10)return null;y.range([0,n]),v.range([a,0]);var m=Object(l.f)(x.map((function(){return f(200,10)})));return Object(g.jsxs)("svg",{width:n,height:a,children:[Object(g.jsx)(i.a,{id:"mustard",height:40,width:40,radius:5,fill:"#036ecf",complement:!0}),Object(g.jsx)(s.a,{id:"cherry",height:12,width:12,fill:"transparent",stroke:"#232493",strokeWidth:1}),Object(g.jsx)(i.a,{id:"navy",height:60,width:60,radius:10,fill:"white",complement:!0}),Object(g.jsx)(i.a,{complement:!0,id:"circles",height:60,width:60,radius:10,fill:"transparent"}),Object(g.jsxs)("g",{onClick:p,onTouchStart:p,children:[Object(g.jsx)("rect",{x:0,y:0,width:n,height:a,fill:b,rx:14}),Object(g.jsx)(r.a,{data:m,keys:x,offset:"wiggle",color:O,x:function(e,n){var a;return null!==(a=y(n))&&void 0!==a?a:0},y0:j,y1:E,children:function(e){var n=e.stacks,a=e.path;return n.map((function(e){var n=a(e)||"",t=c?Object(d.useSpring)({pathString:n}):{pathString:n},r=O(e.key),i=k(e.key);return Object(g.jsxs)("g",{children:[Object(g.jsx)(d.animated.path,{d:t.pathString,fill:r}),Object(g.jsx)(d.animated.path,{d:t.pathString,fill:"url(#".concat(i,")")})]},"series-".concat(e.key))}))}})]})]})}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},animate:{defaultValue:{value:!0},description:"",name:"animate",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-streamgraph/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-streamgraph/Example.tsx#Example"})}catch(S){}},YoEO:function(e){e.exports=JSON.parse('{"name":"@visx/demo-bargroup","description":"Standalone visx grouped bar demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/axis":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-time-format":"^2.2.3","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","bargroup"]}')},a7GN:function(e,n,a){"use strict";a.d(n,"a",(function(){return u}));var t=a("ERkP"),r=a.n(t),i=a("O94r"),s=a.n(i),o=a("5Nbk"),c=a("pn27");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var d=function(){return{dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"middle"}};function u(e){var n=e.axisClassName,a=e.labelOffset,t=void 0===a?8:a,i=e.tickLabelProps,u=void 0===i?d:i,p=e.tickLength,m=void 0===p?8:p,h=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return r.a.createElement(o.a,l({axisClassName:s()("visx-axis-bottom",n),labelOffset:t,orientation:c.a.bottom,tickLabelProps:u,tickLength:m},h))}},dKJj:function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a("aWzz"),r=a.n(t),i=a("ERkP"),s=a.n(i),o=a("O94r"),c=a.n(o),l=a("VFFr");function d(e){var n,a=e.id,t=e.width,r=e.height,i=e.radius,o=void 0===i?2:i,d=e.fill,u=e.stroke,p=e.strokeWidth,m=e.strokeDasharray,h=e.background,f=e.complement,g=void 0!==f&&f,b=e.className;return g&&(n=[[0,0],[0,r],[t,0],[t,r]]),s.a.createElement(l.a,{id:a,width:t,height:r},!!h&&s.a.createElement("rect",{width:t,height:r,fill:h}),s.a.createElement("circle",{className:c()("visx-pattern-circle",b),cx:t/2,cy:r/2,r:o,fill:d,stroke:u,strokeWidth:p,strokeDasharray:m}),n&&n.map((function(e){var n=e[0],t=e[1];return s.a.createElement("circle",{key:a+"-complement-"+n+"-"+t,className:c()("visx-pattern-circle visx-pattern-circle-complement",b),cx:n,cy:t,r:o,fill:d,stroke:u,strokeWidth:p,strokeDasharray:m})})))}d.propTypes={id:r.a.string.isRequired,width:r.a.number.isRequired,height:r.a.number.isRequired,radius:r.a.number,fill:r.a.string,className:r.a.string,stroke:r.a.string,strokeWidth:r.a.oneOfType([r.a.number,r.a.string]),strokeDasharray:r.a.oneOfType([r.a.number,r.a.string]),complement:r.a.bool,background:r.a.string}},dkc1:function(e){e.exports=JSON.parse('{"name":"@visx/demo-streamgraph","description":"Standalone visx streamgraph demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/d3-array":"^2.0.0","@types/react":"^17","@types/react-dom":"^17","@visx/mock-data":"latest","@visx/pattern":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.4.0","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","react-spring":"^9.2.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","streamgraph","react-spring"]}')},fw9s:function(e,n,a){"use strict";a.d(n,"c",(function(){return h})),a.d(n,"a",(function(){return f})),a.d(n,"b",(function(){return R}));var t=a("fGyu"),r=(a("ERkP"),a("JmwF")),i=a("nrLb"),s=a("a7GN"),o=a("s2H9"),c=a.n(o),l=a("cc+0"),d=a("67po"),u=a("D+es"),p=a("mHfT"),m=a("jg1C"),h="#e5fd3d",f="#612efb",g=c.a.slice(0,8),b=Object.keys(g[0]).filter((function(e){return"date"!==e})),x={top:40,right:0,bottom:40,left:0},y=Object(p.b)("%Y-%m-%d"),v=Object(p.a)("%b %d"),O=function(e){return v(y(e))},k=function(e){return e.date},j=Object(l.a)({domain:g.map(k),padding:.2}),E=Object(l.a)({domain:b,padding:.1}),w=Object(d.a)({domain:[0,Math.max.apply(Math,Object(t.a)(g.map((function(e){return Math.max.apply(Math,Object(t.a)(b.map((function(n){return Number(e[n])}))))}))))]}),S=Object(u.a)({domain:b,range:["#aeeef8",h,"#9caff6"]});function R(e){var n=e.width,a=e.height,t=e.events,o=void 0!==t&&t,c=e.margin,l=void 0===c?x:c,d=n-l.left-l.right,u=a-l.top-l.bottom;return j.rangeRound([0,d]),E.rangeRound([0,j.bandwidth()]),w.range([u,0]),n<10?null:Object(m.jsxs)("svg",{width:n,height:a,children:[Object(m.jsx)("rect",{x:0,y:0,width:n,height:a,fill:f,rx:14}),Object(m.jsx)(r.a,{top:l.top,left:l.left,children:Object(m.jsx)(i.a,{data:g,keys:b,height:u,x0:k,x0Scale:j,x1Scale:E,yScale:w,color:S,children:function(e){return e.map((function(e){return Object(m.jsx)(r.a,{left:e.x0,children:e.bars.map((function(n){return Object(m.jsx)("rect",{x:n.x,y:n.y,width:n.width,height:n.height,fill:n.color,rx:4,onClick:function(){if(o){var e=n.key,a=n.value;alert(JSON.stringify({key:e,value:a}))}}},"bar-group-bar-".concat(e.index,"-").concat(n.index,"-").concat(n.value,"-").concat(n.key))}))},"bar-group-".concat(e.index,"-").concat(e.x0))}))}})}),Object(m.jsx)(s.a,{top:u+l.top,tickFormat:O,scale:j,stroke:h,tickStroke:h,hideAxisLine:!0,tickLabelProps:function(){return{fill:h,fontSize:11,textAnchor:"middle"}}})]})}try{R.displayName="Example",R.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-bargroup/Example.tsx#Example"]={docgenInfo:R.__docgenInfo,name:"Example",path:"src/sandboxes/visx-bargroup/Example.tsx#Example"})}catch(T){}},mcxs:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/scale",function(){return a("nog3")}])},mgYg:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return l}));a("ERkP");var t=a("ER2I"),r=a("i9k6"),i=a("jg1C"),s=a("L4cs");a.d(n,"packageJson",(function(){return s}));var o={background:"black"},c={color:"#aaa"};function l(){return Object(i.jsx)(r.a,{title:"Legends",description:"<Legend />",exampleRenderer:t.a,exampleUrl:"/legends",tileStyles:o,detailsStyles:c})}},ncWJ:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return l}));a("ERkP");var t=a("O2oz"),r=a("i9k6"),i=a("jg1C"),s=a("d2Lb");a.d(n,"packageJson",(function(){return s}));var o={background:t.a},c={color:"#f63a48"};function l(){return Object(i.jsx)(r.a,{title:"Mercator",description:"<Geo.Mercator />",exampleRenderer:t.b,exampleUrl:"/geo-mercator",tileStyles:o,detailsStyles:c})}},nog3:function(e,n,a){"use strict";a.r(n);a("ERkP");var t=a("QnPE"),r=a("smMw"),i=a("mgYg"),s=a("z0cX"),o=a("ncWJ"),c=a("x401"),l=a("vkp0"),d=a("jg1C"),u=[r.default,i.default,c.default,l.default,s.default,o.default];n.default=function(){return Object(d.jsx)(t.a,{examples:u,readme:"# @visx/scale\n\n<a title=\"@visx/scale npm downloads\" href=\"https://www.npmjs.com/package/@visx/scale\">\n  <img src=\"https://img.shields.io/npm/dm/@visx/scale.svg?style=flat-square\" />\n</a>\n\n## Installation\n\n```sh\nnpm install --save @visx/scale\n```\n\n## Overview of scales\n\nThe `@visx/scale` package aims to provide a wrapper around existing `d3` scaling originally defined\nin the [d3-scale](https://github.com/d3/d3-scale) package.\n\nScales are functions that help you map your data values to the physical pixel size that your graph\nrequires. For example, let's say you wanted to create a bar chart to show populations per country.\nIf you were to use a 1-to-1 scale (IE: 1 pixel per y value) your bar for the USA would be about\n321.4 million pixels high!\n\nInstead, you can tell `visx` a function to use that takes a data value (like your population per\ncountry) and quantitatively maps to another dimensional space, like pixels.\n\nFor example, we could create a linear scale like this:\n\n```js\nconst graphWidth = 500;\nconst graphHeight = 200;\nconst [minX, maxX] = getXMinAndMax();\nconst [minY, maxY] = getYMinAndMax();\n\nconst xScale = Scale.scaleLinear({\n  domain: [minX, maxX], // x-coordinate data values\n  range: [0, graphWidth], // svg x-coordinates, svg x-coordinates increase left to right\n  round: true,\n});\n\nconst yScale = Scale.scaleLinear({\n  domain: [minY, maxY], // y-coordinate data values\n  // svg y-coordinates, these increase from top to bottom so we reverse the order\n  // so that minY in data space maps to graphHeight in svg y-coordinate space\n  range: [graphHeight, 0],\n  round: true,\n});\n\n// ...\n\nconst points = data.map((d, i) => {\n  const barHeight = graphHeight - yScale(d.y);\n  return <Shape.Bar height={barHeight} y={graphHeight - barHeight} />;\n});\n```\n\n## Different types of scales\n\n### Band scale\n\n[Original d3 docs](https://github.com/d3/d3-scale/blob/master/README.md#_band)\n\nExample:\n\n```js\nconst scale = Scale.scaleBand({\n  /*\n    range,\n    round,\n    domain,\n    padding,\n    nice = false\n  */\n});\n```\n\n### Linear scale\n\n[Original d3 docs](https://github.com/d3/d3-scale/blob/master/README.md#scaleLinear)\n\nExample:\n\n```js\nconst scale = Scale.scaleLinear({\n  /*\n    range,\n    round,\n    domain,\n    nice = false,\n    clamp = false,\n  */\n});\n```\n\n### Log scale\n\n[Original d3 docs](https://github.com/d3/d3-scale/blob/master/README.md#scaleLog)\n\nExample:\n\n```js\nconst scale = Scale.scaleLog({\n  /*\n    range,\n    round,\n    domain,\n    base,\n    nice = false,\n    clamp = false,\n  */\n});\n```\n\n### Radial scale\n\n[Original d3 docs](https://github.com/d3/d3-scale/blob/master/README.md#scaleRadial)\n\nExample:\n\n```js\nconst scale = Scale.scaleRadial({\n  /*\n    range,\n    round,\n    domain,\n    nice = false,\n    clamp = false,\n  */\n});\n```\n\n### Ordinal scale\n\n[Original d3 docs](https://github.com/d3/d3-scale/blob/master/README.md#scaleOrdinal)\n\nExample:\n\n```js\nconst scale = Scale.scaleOrdinal({\n  /*\n    range,\n    domain,\n    unknown,\n  */\n});\n```\n\n### Point scale\n\n[Original d3 docs](https://github.com/d3/d3-scale/blob/master/README.md#scalePoint)\n\nExample:\n\n```js\nconst scale = Scale.scalePoint({\n  /*\n    range,\n    round,\n    domain,\n    padding,\n    align,\n    nice = false,\n  */\n});\n```\n\n### Power scale\n\n[Original d3 docs](https://github.com/d3/d3-scale/blob/master/README.md#scalePow)\n\nExample:\n\n```js\nconst scale = Scale.scalePower({\n  /*\n    range,\n    round,\n    domain,\n    exponent,\n    nice = false,\n    clamp = false,\n  */\n});\n```\n\n### Square Root scale\n\n[Original d3 docs](https://github.com/d3/d3-scale#scaleSqrt)\n\nExample:\n\n```js\n// No need to set the exponent, It is always 0.5\nconst scale = Scale.scaleSqrt({\n  /*\n    range,\n    round,\n    domain,\n    nice = false,\n    clamp = false,\n  */\n});\n```\n\n### Time scale\n\n[Original d3 docs](https://github.com/d3/d3-scale/blob/master/README.md#scaleTime)\n\nExample:\n\n```js\nconst scale = Scale.scaleTime({\n  /*\n    range,\n    round,\n    domain,\n    nice = false,\n    clamp = false,\n   */\n});\n```\n\nYou also can scale time with Coordinated Universal Time via `scaleUtc`.\n\nExample:\n\n```js\nconst scale = Scale.scaleUtc({\n  /*\n    range,\n    round,\n    domain,\n    nice = false,\n    clamp = false,\n   */\n});\n```\n\n### Color Scales\n\nD3 scales offer the ability to map points to colors. You can use\n[`d3-scale-chromatic`](https://github.com/d3/d3-scale-chromatic) in conjunction with visx's\n`scaleOrdinal` to make color scales.\n\nYou can install `d3-scale-chromatic` with npm:\n\n```sh\nnpm install --save d3-scale-chromatic\n```\n\nYou create a color scale like so:\n\n```js\nimport { scaleOrdinal } from '@visx/scale';\nimport { schemeSet1 } from 'd3-scale-chromatic';\n\nconst colorScale = scaleOrdinal({\n  domain: arrayOfThings,\n  range: schemeSet1,\n});\n```\n\nThis generates a color scale with the following colors:\n\n![d3-scale-chromatic schemeSet1](https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Set1.png)\n\nThere are a number of other\n[categorical color schemes](https://github.com/d3/d3-scale-chromatic/blob/master/README.md#categorical)\navailable, along with other continuous color schemes.\n",visxPackage:"scale"})}},smMw:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return d}));a("ERkP");var t=a("gnM9"),r=a("i9k6"),i=a("jg1C"),s=a("Soe+");a.d(n,"packageJson",(function(){return s}));var o={backgroundColor:t.a},c={color:t.c},l={showControls:!1};function d(){return Object(i.jsx)(r.a,{title:"Axes & scales",description:"<Axis.AxisBottom />",detailsStyles:c,detailsHeight:20,exampleProps:l,exampleRenderer:t.b,exampleUrl:"/axis",tileStyles:o})}},vkp0:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return d}));a("ERkP");var t=a("W0xs"),r=a("i9k6"),i=a("jg1C"),s=a("dkc1");a.d(n,"packageJson",(function(){return s}));var o={background:t.a},c={color:"rgb(93,30,91)"},l={animate:!1};function d(){return Object(i.jsx)(r.a,{title:"Streamgraph",description:"<Shape.Stack />",exampleProps:l,exampleRenderer:t.b,exampleUrl:"/streamgraph",tileStyles:o,detailsStyles:c})}},z0cX:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return l}));a("ERkP");var t=a("fw9s"),r=a("i9k6"),i=a("jg1C"),s=a("YoEO");a.d(n,"packageJson",(function(){return s}));var o={background:t.a},c={color:t.c};function l(){return Object(i.jsx)(r.a,{title:"Bar Group",description:"<Shape.BarGroup />",detailsStyles:c,exampleRenderer:t.b,exampleUrl:"/bargroup",tileStyles:o})}},zjfJ:function(e,n,a){"use strict";function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}a.d(n,"a",(function(){return t}))}},[["mcxs",0,2,1,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,22,26,27,28,30,37]]]);