_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[118],{"/HE2":function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},"0DlK":function(t,e,n){var r=n("/HE2"),i=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(i,""):t}},"0yDh":function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("aWzz"),i=n.n(r),a=n("ERkP"),o=n.n(a),s=n("O94r"),c=n.n(s),d=n("VFFr");function u(t){var e=t.id,n=t.width,r=t.height,i=t.path,a=t.fill,s=void 0===a?"transparent":a,u=t.stroke,h=t.strokeWidth,l=t.strokeDasharray,f=t.strokeLinecap,p=void 0===f?"square":f,m=t.shapeRendering,g=void 0===m?"auto":m,b=t.background,v=t.className;return o.a.createElement(d.a,{id:e,width:n,height:r},!!b&&o.a.createElement("rect",{width:n,height:r,fill:b}),o.a.createElement("path",{className:c()("visx-pattern-path",v),d:i,fill:s,stroke:u,strokeWidth:h,strokeDasharray:l,strokeLinecap:p,shapeRendering:g}))}function h(t){var e=t.id,n=t.width,r=t.height,i=t.fill,a=t.stroke,s=t.strokeWidth,d=t.strokeDasharray,h=t.strokeLinecap,l=t.shapeRendering,f=t.background,p=t.className;return o.a.createElement(u,{className:c()("visx-pattern-wave",p),path:"M 0 "+r/2+" c "+r/8+" "+-r/4+" , "+3*r/8+" "+-r/4+" , "+r/2+" 0\n             c "+r/8+" "+r/4+" , "+3*r/8+" "+r/4+" , "+r/2+" 0 M "+-r/2+" "+r/2+"\n             c "+r/8+" "+r/4+" , "+3*r/8+" "+r/4+" , "+r/2+" 0 M "+r+" "+r/2+"\n             c "+r/8+" "+-r/4+" , "+3*r/8+" "+-r/4+" , "+r/2+" 0",id:e,width:n,height:r,fill:i,stroke:a,strokeWidth:s,strokeDasharray:d,strokeLinecap:h,shapeRendering:l,background:f})}u.propTypes={id:i.a.string.isRequired,width:i.a.number.isRequired,height:i.a.number.isRequired,path:i.a.string,fill:i.a.string,className:i.a.string,background:i.a.string,stroke:i.a.string,strokeWidth:i.a.oneOfType([i.a.number,i.a.string]),strokeDasharray:i.a.oneOfType([i.a.string,i.a.number]),strokeLinecap:i.a.oneOf(["square","butt","round","inherit"]),shapeRendering:i.a.oneOfType([i.a.string,i.a.number])},h.propTypes={id:i.a.string.isRequired,width:i.a.number.isRequired,height:i.a.number.isRequired,fill:i.a.string,className:i.a.string,background:i.a.string,stroke:i.a.string,strokeWidth:i.a.oneOfType([i.a.number,i.a.string]),strokeDasharray:i.a.oneOfType([i.a.string,i.a.number]),strokeLinecap:i.a.oneOf(["square","butt","round","inherit"]),shapeRendering:i.a.oneOfType([i.a.string,i.a.number])}},"5GZr":function(t,e,n){var r=n("qPqG");t.exports=function(){return r.Date.now()}},"82NN":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/patterns",function(){return n("wOd5")}])},Be24:function(t,e,n){var r=n("0DlK"),i=n("We3G"),a=n("bnhR"),o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(a(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=s.test(t);return n||c.test(t)?d(t.slice(2),n?2:8):o.test(t)?NaN:+t}},FGHv:function(t,e,n){var r=n("We3G"),i=n("5GZr"),a=n("Be24"),o=Math.max,s=Math.min;t.exports=function(t,e,n){var c,d,u,h,l,f,p=0,m=!1,g=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=c,r=d;return c=d=void 0,p=e,h=t.apply(r,n)}function k(t){return p=t,l=setTimeout(y,e),m?v(t):h}function x(t){var n=t-f;return void 0===f||n>=e||n<0||g&&t-p>=u}function y(){var t=i();if(x(t))return w(t);l=setTimeout(y,function(t){var n=e-(t-f);return g?s(n,u-(t-p)):n}(t))}function w(t){return l=void 0,b&&c?v(t):(c=d=void 0,h)}function O(){var t=i(),n=x(t);if(c=arguments,d=this,f=t,n){if(void 0===l)return k(f);if(g)return clearTimeout(l),l=setTimeout(y,e),v(f)}return void 0===l&&(l=setTimeout(y,e)),h}return e=a(e)||0,r(n)&&(m=!!n.leading,u=(g="maxWait"in n)?o(a(n.maxWait)||0,e):u,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==l&&clearTimeout(l),p=0,c=f=d=l=void 0},O.flush=function(){return void 0===l?h:w(i())},O}},JmwF:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("aWzz"),i=n.n(r),a=n("ERkP"),o=n.n(a),s=n("O94r"),c=n.n(s);function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t){var e=t.top,n=void 0===e?0:e,r=t.left,i=void 0===r?0:r,a=t.transform,s=t.className,u=t.children,h=t.innerRef,l=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["top","left","transform","className","children","innerRef"]);return o.a.createElement("g",d({ref:h,className:c()("visx-group",s),transform:a||"translate("+i+", "+n+")"},l),u)}u.propTypes={top:i.a.number,left:i.a.number,transform:i.a.string,className:i.a.string,children:i.a.node,innerRef:i.a.oneOfType([i.a.string,i.a.func,i.a.object])}},LDMG:function(t,e,n){var r=n("LZoh"),i=Object.prototype,a=i.hasOwnProperty,o=i.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(c){}var i=o.call(t);return r&&(e?t[s]=n:delete t[s]),i}},LZoh:function(t,e,n){var r=n("qPqG").Symbol;t.exports=r},Lrg7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},M7oL:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("fRV1"))},VFFr:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("aWzz"),i=n.n(r),a=n("ERkP"),o=n.n(a);function s(t){var e=t.id,n=t.width,r=t.height,i=t.children;return o.a.createElement("defs",null,o.a.createElement("pattern",{id:e,width:n,height:r,patternUnits:"userSpaceOnUse"},i))}s.propTypes={id:i.a.string.isRequired,width:i.a.number.isRequired,height:i.a.number.isRequired,children:i.a.node.isRequired}},We3G:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},XMEZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("ERkP"),i=n.n(r),a=n("g2fB"),o=n("JmwF"),s=n("a49c"),c=n("VFFr"),d=n("dKJj"),u=n("0yDh"),h=n("jg1C"),l={top:0,left:0,right:0,bottom:80},f=[function(t){var e=t.id;return Object(h.jsx)(s.a,{id:e,height:6,width:6,stroke:"black",strokeWidth:1})},function(t){var e=t.id,n=t.prefersReducedMotion;return Object(h.jsxs)(c.a,{id:e,width:10,height:10,children:[!n&&Object(h.jsx)("animateTransform",{attributeType:"xml",attributeName:"patternTransform",type:"translate",from:"0 0",to:"0 30",dur:"10s",repeatCount:"indefinite"}),Object(h.jsx)("circle",{cx:5,cy:5,r:"3",stroke:"none",fill:"black","transform-origin":"center"})]})},function(t){var e=t.id;return Object(h.jsx)(s.a,{id:e,height:6,width:6,stroke:"black",strokeWidth:1,orientation:["horizontal"]})},function(t){var e=t.id;return Object(h.jsx)(s.a,{id:e,height:6,width:6,stroke:"black",strokeWidth:1,orientation:["diagonal"]})},function(t){var e=t.id;return Object(h.jsx)(s.a,{id:e,height:6,width:6,stroke:"black",strokeWidth:1,orientation:["diagonalRightToLeft"]})},function(t){var e=t.id;return Object(h.jsx)(s.a,{id:e,height:6,width:6,stroke:"black",strokeWidth:1,orientation:["vertical","horizontal"]})},function(t){var e=t.id;return Object(h.jsx)(d.a,{id:e,height:10,width:10,fill:"black",complement:!0})},function(t){var e=t.id,n=t.prefersReducedMotion;return Object(h.jsxs)(c.a,{id:e,width:10,height:10,children:[!n&&Object(h.jsx)("animateTransform",{attributeType:"xml",attributeName:"patternTransform",type:"translate",from:"0 0",to:"50 0",dur:"10s",repeatCount:"indefinite"}),Object(h.jsx)("path",{d:"M 0 ".concat(5," c ").concat(1.25," ").concat(-2.5," , ").concat(3.75," ").concat(-2.5," , ").concat(5," 0\n               c ").concat(1.25," ").concat(2.5," , ").concat(3.75," ").concat(2.5," , ").concat(5," 0 M ").concat(-5," ").concat(5,"\n               c ").concat(1.25," ").concat(2.5," , ").concat(3.75," ").concat(2.5," , ").concat(5," 0 M ").concat(10," ").concat(5,"\n               c ").concat(1.25," ").concat(-2.5," , ").concat(3.75," ").concat(-2.5," , ").concat(5," 0"),fill:"none",stroke:"black",strokeWidth:1})]})},function(t){var e=t.id;return Object(h.jsx)(u.a,{id:e,height:6,width:6,fill:"transparent",stroke:"black",strokeWidth:1})}];function p(t){var e=t.width,n=t.height,r=t.margin,s=void 0===r?l:r,c=window.matchMedia("(prefers-reduced-motion: reduce)"),d=!c||!!c.matches,u=f.length/3,p=Math.max((e-s.left-s.right)/3,0),m=Math.max((n-s.bottom-s.top)/u,0);return e>=10?Object(h.jsxs)("svg",{width:e,height:n,children:[Object(h.jsx)("rect",{x:0,y:0,width:e,height:n,fill:"#f5f2e3",rx:14}),Object(h.jsx)(o.a,{top:s.top,left:s.left,children:f.map((function(t,e){var n=e%3,r=Math.floor(e/3),o="visx-pattern-demo-".concat(e,"-").concat(r,"-").concat(n);return Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)(t,{id:o,prefersReducedMotion:d}),Object(h.jsx)(a.a,{fill:"url(#".concat(o,")"),x:n*p,y:r*m,width:p,height:m,rx:14})]},o)}))})]}):null}try{p.displayName="Example",p.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; left: number; right: number; bottom: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-pattern/Example.tsx#Example"]={docgenInfo:p.__docgenInfo,name:"Example",path:"src/sandboxes/visx-pattern/Example.tsx#Example"})}catch(m){}},a49c:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("aWzz"),i=n.n(r),a=n("ERkP"),o=n.n(a),s=n("O94r"),c=n.n(s),d=n("VFFr"),u="horizontal",h="vertical",l="diagonal",f="diagonalRightToLeft";function p(t){var e=t.height;switch(t.orientation){case u:return"M 0,"+e/2+" l "+e+",0";case l:return"M 0,"+e+" l "+e+","+-e+" M "+-e/4+","+e/4+" l "+e/2+","+-e/2+"\n             M "+3/4*e+","+5/4*e+" l "+e/2+","+-e/2;case f:return"M 0,0 l "+e+","+e+"\n        M "+-e/4+","+3/4*e+" l "+e/2+","+e/2+"\n        M "+3/4*e+","+-e/4+" l "+e/2+","+e/2;case h:default:return"M "+e/2+", 0 l 0, "+e}}function m(t){var e=t.id,n=t.width,r=t.height,i=t.stroke,a=t.strokeWidth,s=t.strokeDasharray,u=t.strokeLinecap,h=void 0===u?"square":u,l=t.shapeRendering,f=void 0===l?"auto":l,m=t.orientation,g=void 0===m?["vertical"]:m,b=t.background,v=t.className,k=Array.isArray(g)?g:[g];return o.a.createElement(d.a,{id:e,width:n,height:r},!!b&&o.a.createElement("rect",{className:c()("visx-pattern-line-background"),width:n,height:r,fill:b}),k.map((function(t,n){return o.a.createElement("path",{key:"visx-"+e+"-line-"+t+"-"+n,className:c()("visx-pattern-line",v),d:p({orientation:t,height:r}),stroke:i,strokeWidth:a,strokeDasharray:s,strokeLinecap:h,shapeRendering:f})})))}m.propTypes={id:i.a.string.isRequired,width:i.a.number.isRequired,height:i.a.number.isRequired,className:i.a.string,background:i.a.string,stroke:i.a.string,strokeWidth:i.a.oneOfType([i.a.number,i.a.string]),strokeDasharray:i.a.oneOfType([i.a.string,i.a.number]),strokeLinecap:i.a.oneOf(["square","butt","round","inherit"]),shapeRendering:i.a.oneOfType([i.a.string,i.a.number]),orientation:i.a.array}},bnhR:function(t,e,n){var r=n("luLf"),i=n("Lrg7");t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},cZPn:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},dKJj:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("aWzz"),i=n.n(r),a=n("ERkP"),o=n.n(a),s=n("O94r"),c=n.n(s),d=n("VFFr");function u(t){var e,n=t.id,r=t.width,i=t.height,a=t.radius,s=void 0===a?2:a,u=t.fill,h=t.stroke,l=t.strokeWidth,f=t.strokeDasharray,p=t.background,m=t.complement,g=void 0!==m&&m,b=t.className;return g&&(e=[[0,0],[0,i],[r,0],[r,i]]),o.a.createElement(d.a,{id:n,width:r,height:i},!!p&&o.a.createElement("rect",{width:r,height:i,fill:p}),o.a.createElement("circle",{className:c()("visx-pattern-circle",b),cx:r/2,cy:i/2,r:s,fill:u,stroke:h,strokeWidth:l,strokeDasharray:f}),e&&e.map((function(t){var e=t[0],r=t[1];return o.a.createElement("circle",{key:n+"-complement-"+e+"-"+r,className:c()("visx-pattern-circle visx-pattern-circle-complement",b),cx:e,cy:r,r:s,fill:u,stroke:h,strokeWidth:l,strokeDasharray:f})})))}u.propTypes={id:i.a.string.isRequired,width:i.a.number.isRequired,height:i.a.number.isRequired,radius:i.a.number,fill:i.a.string,className:i.a.string,stroke:i.a.string,strokeWidth:i.a.oneOfType([i.a.number,i.a.string]),strokeDasharray:i.a.oneOfType([i.a.number,i.a.string]),complement:i.a.bool,background:i.a.string}},ePAY:function(t){t.exports=JSON.parse('{"name":"@visx/demo-pattern","description":"Standalone visx pattern demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/group":"latest","@visx/pattern":"latest","@visx/responsive":"latest","@visx/shape":"latest","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx"]}')},fRV1:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},g2fB:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("ERkP"),i=n.n(r),a=n("O94r"),o=n.n(a);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){var e=t.className,n=t.innerRef,r=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["className","innerRef"]);return i.a.createElement("rect",s({ref:n,className:o()("visx-bar",e)},r))}},luLf:function(t,e,n){var r=n("LZoh"),i=n("LDMG"),a=n("cZPn"),o=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":o&&o in Object(t)?i(t):a(t)}},qPqG:function(t,e,n){var r=n("M7oL"),i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();t.exports=a},wOd5:function(t,e,n){"use strict";n.r(e);n("ERkP");var r=n("6wy5"),i=n("XMEZ"),a=n("ePAY"),o=n("jg1C");e.default=function(){return Object(o.jsx)(r.a,{component:i.a,title:"Patterns",margin:{top:10,left:10,right:10,bottom:10},codeSandboxDirectoryName:"visx-pattern",packageJson:a,children:'import React from \'react\';\nimport { Bar } from \'@visx/shape\';\nimport { Group } from \'@visx/group\';\nimport {\n  Pattern as CustomPattern,\n  PatternLines,\n  PatternCircles,\n  PatternWaves,\n} from \'@visx/pattern\';\n\nconst defaultMargin = {\n  top: 0,\n  left: 0,\n  right: 0,\n  bottom: 80,\n};\n\nexport type PatternProps = {\n  width: number;\n  height: number;\n  margin?: typeof defaultMargin;\n};\n\nconst Patterns: React.FC<{ id: string; prefersReducedMotion?: boolean }>[] = [\n  ({ id }) => <PatternLines id={id} height={6} width={6} stroke="black" strokeWidth={1} />,\n  ({ id, prefersReducedMotion }) => (\n    <CustomPattern id={id} width={10} height={10}>\n      {!prefersReducedMotion && (\n        <animateTransform\n          attributeType="xml"\n          attributeName="patternTransform"\n          type="translate"\n          from="0 0"\n          to="0 30"\n          dur="10s"\n          repeatCount="indefinite"\n        />\n      )}\n      <circle cx={5} cy={5} r="3" stroke="none" fill="black" transform-origin="center" />\n    </CustomPattern>\n  ),\n  ({ id }) => (\n    <PatternLines\n      id={id}\n      height={6}\n      width={6}\n      stroke="black"\n      strokeWidth={1}\n      orientation={[\'horizontal\']}\n    />\n  ),\n  ({ id }) => (\n    <PatternLines\n      id={id}\n      height={6}\n      width={6}\n      stroke="black"\n      strokeWidth={1}\n      orientation={[\'diagonal\']}\n    />\n  ),\n  ({ id }) => (\n    <PatternLines\n      id={id}\n      height={6}\n      width={6}\n      stroke="black"\n      strokeWidth={1}\n      orientation={[\'diagonalRightToLeft\']}\n    />\n  ),\n  ({ id }) => (\n    <PatternLines\n      id={id}\n      height={6}\n      width={6}\n      stroke="black"\n      strokeWidth={1}\n      orientation={[\'vertical\', \'horizontal\']}\n    />\n  ),\n  ({ id }) => <PatternCircles id={id} height={10} width={10} fill="black" complement />,\n  ({ id, prefersReducedMotion }) => {\n    const width = 10;\n    const height = 10;\n\n    return (\n      <CustomPattern id={id} width={width} height={height}>\n        {!prefersReducedMotion && (\n          <animateTransform\n            attributeType="xml"\n            attributeName="patternTransform"\n            type="translate"\n            from="0 0"\n            to="50 0"\n            dur="10s"\n            repeatCount="indefinite"\n          />\n        )}\n        <path\n          d={`M 0 ${height / 2} c ${height / 8} ${-height / 4} , ${(height * 3) / 8} ${-height /\n            4} , ${height / 2} 0\n               c ${height / 8} ${height / 4} , ${(height * 3) / 8} ${height / 4} , ${height /\n            2} 0 M ${-height / 2} ${height / 2}\n               c ${height / 8} ${height / 4} , ${(height * 3) / 8} ${height / 4} , ${height /\n            2} 0 M ${height} ${height / 2}\n               c ${height / 8} ${-height / 4} , ${(height * 3) / 8} ${-height / 4} , ${height /\n            2} 0`}\n          fill="none"\n          stroke="black"\n          strokeWidth={1}\n        />\n      </CustomPattern>\n    );\n  },\n  ({ id }) => (\n    <PatternWaves id={id} height={6} width={6} fill="transparent" stroke="black" strokeWidth={1} />\n  ),\n];\n\nexport default function Example({ width, height, margin = defaultMargin }: PatternProps) {\n  // use non-animated components if prefers-reduced-motion is set\n  const prefersReducedMotionQuery =\n    typeof window === \'undefined\' ? false : window.matchMedia(\'(prefers-reduced-motion: reduce)\');\n  const prefersReducedMotion = !prefersReducedMotionQuery || !!prefersReducedMotionQuery.matches;\n\n  const numColumns = 3;\n  const numRows = Patterns.length / numColumns;\n  const columnWidth = Math.max((width - margin.left - margin.right) / numColumns, 0);\n  const rowHeight = Math.max((height - margin.bottom - margin.top) / numRows, 0);\n\n  return width >= 10 ? (\n    <svg width={width} height={height}>\n      <rect x={0} y={0} width={width} height={height} fill="#f5f2e3" rx={14} />\n      <Group top={margin.top} left={margin.left}>\n        {Patterns.map((Pattern, index) => {\n          const columnIndex = index % numColumns;\n          const rowIndex = Math.floor(index / numColumns);\n          const id = `visx-pattern-demo-${index}-${rowIndex}-${columnIndex}`;\n\n          return (\n            <React.Fragment key={id}>\n              {/** Like SVG <defs />, Patterns are rendered with an id */}\n              <Pattern id={id} prefersReducedMotion={prefersReducedMotion} />\n\n              {/** And are then referenced for a style attribute. */}\n              <Bar\n                fill={`url(#${id})`}\n                x={columnIndex * columnWidth}\n                y={rowIndex * rowHeight}\n                width={columnWidth}\n                height={rowHeight}\n                rx={14}\n              />\n            </React.Fragment>\n          );\n        })}\n      </Group>\n    </svg>\n  ) : null;\n}\n'})}}},[["82NN",0,2,1,3,6]]]);