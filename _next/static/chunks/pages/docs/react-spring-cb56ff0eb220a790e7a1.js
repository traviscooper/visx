_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[88],{"/WrK":function(e,t,n){"use strict";n.r(t);var i=n("ERkP"),r=n("zjfJ"),a=n("HbGN"),o=n("XDdH"),l=n.n(o),s=n("0yf5"),u=n("O94r"),c=n.n(u),d=n("uJnh"),p=n.n(d),f=n("O3m4"),m=n("zygG"),y=n("HlJr");function h(e,t,n,i,r){var a;switch(e){case"center":return r;case"min":return null!==n&&void 0!==n?n:0;case"max":return null!==i&&void 0!==i?i:0;case"outside":default:return null!==(a=(null!==t&&void 0!==t?t:0)<r?n:i)&&void 0!==a?a:0}}function g(e){var t=e.from,n=e.to;return{fromX:t.x,toX:n.x,fromY:t.y,toY:n.y,opacity:1}}function b(e){var t=e.scale,n=e.animateXOrY,r=e.animationTrajectory,a=void 0===r?"outside":r,o="x"===n;return Object(i.useMemo)((function(){var e=t.range().map(y.a),n=Object(m.a)(e,2),i=n[0],r=n[1],l=null!=r&&null!=i&&r<i?[r,i]:[i,r],s=Object(m.a)(l,2),u=s[0],c=s[1],d=null!=r&&null!=i?Math.abs(r-i):0,p=(null!==u&&void 0!==u?u:0)+d/2,f=a;o||"min"!==a||(f="max"),o||"max"!==a||(f="min");var b=function(e){var t=e.from,n=e.to;return{fromX:o?h(f,t.x,u,c,p):t.x,toX:o?h(f,t.x,u,c,p):n.x,fromY:o?t.y:h(f,t.y,u,c,p),toY:o?n.y:h(f,t.y,u,c,p),opacity:0}};return{from:b,leave:b,enter:g,update:g}}),[t,o,a])}try{b.displayName="useLineTransitionConfig",b.__docgenInfo={description:"A hook that returns `react-spring` transition config for animating a Line\nhorizontally, vertically, and from a specific starting point.",displayName:"useLineTransitionConfig",props:{scale:{defaultValue:null,description:"Scale along which animation occurs.",name:"scale",required:!0,type:{name:"Scale"}},animateXOrY:{defaultValue:null,description:"Whether to animate the `x` or `y` values of a Line.",name:"animateXOrY",required:!0,type:{name:'"x" | "y"'}},animationTrajectory:{defaultValue:null,description:"The scale position entering lines come from, and exiting lines leave to.",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/spring-configs/useLineTransitionConfig.ts#useLineTransitionConfig"]={docgenInfo:b.__docgenInfo,name:"useLineTransitionConfig",path:"../visx-react-spring/src/spring-configs/useLineTransitionConfig.ts#useLineTransitionConfig"})}catch(B){}var O=n("jg1C");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=e.hideTicks,n=e.horizontal,i=e.orientation,r=e.scale,a=e.tickClassName,o=e.tickComponent,l=e.tickLabelProps,u=e.tickStroke,d=void 0===u?"#222":u,m=e.tickTransform,y=e.ticks,h=e.animationTrajectory,g=Object(s.useTransition)(y,v(v({},b({scale:r,animateXOrY:n?"x":"y",animationTrajectory:h})),{},{keys:function(e){return"".concat(e.value)}}));return Object(O.jsx)(O.Fragment,{children:g((function(e,n,r,u){var y,h,g=e.fromX,b=e.toX,x=e.fromY,j=e.toY,k=e.opacity,T=r.key,S=null!==(y=null!==(h=l[u])&&void 0!==h?h:l[0])&&void 0!==y?y:{};return null==n||null==T?null:Object(O.jsxs)(s.animated.g,{className:c()("visx-axis-tick",a),transform:m,children:[!t&&Object(O.jsx)(s.animated.line,{x1:g,x2:b,y1:x,y2:j,stroke:d,strokeLinecap:"square",strokeOpacity:k}),Object(O.jsx)(s.animated.g,{transform:Object(s.to)([b,j],(function(e,t){var n;return"translate(".concat(e,",").concat(t+(i===p.a.bottom&&"number"===typeof S.fontSize?null!==(n=S.fontSize)&&void 0!==n?n:10:0),")")})),opacity:k,children:o?o(v(v({},S),{},{x:b,y:j,formattedValue:null===n||void 0===n?void 0:n.formattedValue})):Object(O.jsx)(f.a,v(v({},S),{},{children:null===n||void 0===n?void 0:n.formattedValue}))},u)]},T)}))})}try{j.displayName="AnimatedTicks",j.__docgenInfo={description:"",displayName:"AnimatedTicks",props:{tickLabelProps:{defaultValue:null,description:"",name:"tickLabelProps",required:!0,type:{name:"Partial<TextProps>[]"}},scale:{defaultValue:null,description:"A [d3](https://github.com/d3/d3-scale) or [visx](https://github.com/airbnb/visx/tree/master/packages/visx-scale) scale function.",name:"scale",required:!0,type:{name:"Scale"}},orientation:{defaultValue:null,description:"Placement of the axis",name:"orientation",required:!1,type:{name:'"left" | "top" | "bottom" | "right" | undefined'}},strokeWidth:{defaultValue:null,description:"The pixel value for the width of the lines.",name:"strokeWidth",required:!1,type:{name:"string | number | undefined"}},horizontal:{defaultValue:null,description:"Whether this axis is horizontal",name:"horizontal",required:!0,type:{name:"boolean"}},hideTicks:{defaultValue:null,description:"If true, will hide the ticks (but not the tick labels).",name:"hideTicks",required:!1,type:{name:"boolean | undefined"}},tickLineProps:{defaultValue:null,description:"Props to be applied to individual tick lines.",name:"tickLineProps",required:!1,type:{name:'Pick<SVGProps<SVGLineElement>, "string" | "children" | "className" | "width" | "height" | "scale" | "color" | "id" | "lang" | "max" | "media" | "method" | ... 455 more ... | "key"> | undefined'}},tickClassName:{defaultValue:null,description:"The class name applied to each tick group.",name:"tickClassName",required:!1,type:{name:"string | undefined"}},tickComponent:{defaultValue:null,description:"Override the component used to render tick labels (instead of <Text /> from @visx/text).",name:"tickComponent",required:!1,type:{name:"((tickRendererProps: TickRendererProps) => ReactNode) | undefined"}},tickStroke:{defaultValue:{value:"#222"},description:"The color for the tick's stroke value.",name:"tickStroke",required:!1,type:{name:"string | undefined"}},tickTransform:{defaultValue:null,description:"A custom SVG transform value to be applied to each tick group.",name:"tickTransform",required:!1,type:{name:"string | undefined"}},ticks:{defaultValue:null,description:"Computed ticks with positions and formatted value",name:"ticks",required:!0,type:{name:"ComputedTick<Scale>[]"}},animationTrajectory:{defaultValue:null,description:"",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/axis/AnimatedTicks.tsx#AnimatedTicks"]={docgenInfo:j.__docgenInfo,name:"AnimatedTicks",path:"../visx-react-spring/src/axis/AnimatedTicks.tsx#AnimatedTicks"})}catch(B){}var k=["animationTrajectory","tickComponent"];function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){var t=e.animationTrajectory,n=e.tickComponent,r=Object(a.a)(e,k),o=Object(i.useMemo)((function(){return function(e){return Object(O.jsx)(j,S(S({},e),{},{tickComponent:n,animationTrajectory:t}))}}),[t,n]);return Object(O.jsx)(l.a,S(S({},r),{},{ticksComponent:o}))}try{w.displayName="AnimatedAxis",w.__docgenInfo={description:"",displayName:"AnimatedAxis",props:{children:{defaultValue:null,description:"For more control over rendering or to add event handlers to datum, pass a function as children.",name:"children",required:!1,type:{name:"((renderProps: AxisRendererProps<Scale>) => ReactNode) | undefined"}},scale:{defaultValue:null,description:"A [d3](https://github.com/d3/d3-scale) or [visx](https://github.com/airbnb/visx/tree/master/packages/visx-scale) scale function.",name:"scale",required:!0,type:{name:"Scale"}},orientation:{defaultValue:null,description:"Placement of the axis",name:"orientation",required:!1,type:{name:'"left" | "top" | "bottom" | "right" | undefined'}},stroke:{defaultValue:null,description:"The color for the stroke of the lines.",name:"stroke",required:!1,type:{name:"string | undefined"}},strokeDasharray:{defaultValue:null,description:"The pattern of dashes in the stroke.",name:"strokeDasharray",required:!1,type:{name:"string | undefined"}},strokeWidth:{defaultValue:null,description:"The pixel value for the width of the lines.",name:"strokeWidth",required:!1,type:{name:"string | number | undefined"}},left:{defaultValue:null,description:"A left pixel offset applied to the entire axis.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"A top pixel offset applied to the entire axis.",name:"top",required:!1,type:{name:"number | undefined"}},label:{defaultValue:null,description:"The text for the axis label.",name:"label",required:!1,type:{name:"string | undefined"}},numTicks:{defaultValue:null,description:"The number of ticks wanted for the axis (note this is approximate)",name:"numTicks",required:!1,type:{name:"number | undefined"}},tickValues:{defaultValue:null,description:"An array of values that determine the number and values of the ticks. Falls back to `scale.ticks()` or `.domain()`.",name:"tickValues",required:!1,type:{name:"Parameters<Scale>[0][] | undefined"}},axisLineClassName:{defaultValue:null,description:"The class name applied to the axis line element.",name:"axisLineClassName",required:!1,type:{name:"string | undefined"}},hideAxisLine:{defaultValue:null,description:"If true, will hide the axis line.",name:"hideAxisLine",required:!1,type:{name:"boolean | undefined"}},hideTicks:{defaultValue:null,description:"If true, will hide the ticks (but not the tick labels).",name:"hideTicks",required:!1,type:{name:"boolean | undefined"}},hideZero:{defaultValue:null,description:"If true, will hide the '0' value tick and tick label.",name:"hideZero",required:!1,type:{name:"boolean | undefined"}},labelClassName:{defaultValue:null,description:"The class name applied to the axis label text element.",name:"labelClassName",required:!1,type:{name:"string | undefined"}},labelOffset:{defaultValue:null,description:"Pixel offset of the axis label (does not include tick label font size, which is accounted for automatically)",name:"labelOffset",required:!1,type:{name:"number | undefined"}},labelProps:{defaultValue:null,description:"Props applied to the axis label component.",name:"labelProps",required:!1,type:{name:"Partial<TextProps> | undefined"}},rangePadding:{defaultValue:null,description:"Pixel padding to apply to both sides of the axis.",name:"rangePadding",required:!1,type:{name:"number | undefined"}},tickLineProps:{defaultValue:null,description:"Props to be applied to individual tick lines.",name:"tickLineProps",required:!1,type:{name:'Pick<SVGProps<SVGLineElement>, "string" | "children" | "className" | "width" | "height" | "scale" | "color" | "id" | "lang" | "max" | "media" | "method" | ... 455 more ... | "key"> | undefined'}},tickClassName:{defaultValue:null,description:"The class name applied to each tick group.",name:"tickClassName",required:!1,type:{name:"string | undefined"}},tickComponent:{defaultValue:null,description:"Override the component used to render tick labels (instead of <Text /> from @visx/text).",name:"tickComponent",required:!1,type:{name:"((tickRendererProps: TickRendererProps) => ReactNode) | undefined"}},tickFormat:{defaultValue:null,description:"A [d3 formatter](https://github.com/d3/d3-scale/blob/master/README.md#continuous_tickFormat) for the tick text.",name:"tickFormat",required:!1,type:{name:"TickFormatter<Parameters<Scale>[0]> | undefined"}},tickLabelProps:{defaultValue:null,description:"A function that returns props for a given tick label.",name:"tickLabelProps",required:!1,type:{name:"TickLabelProps<Parameters<Scale>[0]> | undefined"}},tickLength:{defaultValue:null,description:"The length of the tick lines.",name:"tickLength",required:!1,type:{name:"number | undefined"}},tickStroke:{defaultValue:null,description:"The color for the tick's stroke value.",name:"tickStroke",required:!1,type:{name:"string | undefined"}},tickTransform:{defaultValue:null,description:"A custom SVG transform value to be applied to each tick group.",name:"tickTransform",required:!1,type:{name:"string | undefined"}},axisClassName:{defaultValue:null,description:"The class name applied to the outermost axis group element.",name:"axisClassName",required:!1,type:{name:"string | undefined"}},animationTrajectory:{defaultValue:null,description:"",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/axis/AnimatedAxis.tsx#AnimatedAxis"]={docgenInfo:w.__docgenInfo,name:"AnimatedAxis",path:"../visx-react-spring/src/axis/AnimatedAxis.tsx#AnimatedAxis"})}catch(B){}var P=n("mv6+"),V=n.n(P),A=["scale","lines","animationTrajectory","animateXOrY","lineKey","lineStyle"];function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e){var t=e.scale,n=e.lines,i=e.animationTrajectory,r=e.animateXOrY,o=e.lineKey,l=e.lineStyle,u=Object(a.a)(e,A),c=Object(s.useTransition)(n,C(C({},b({scale:t,animateXOrY:r,animationTrajectory:i})),{},{key:o}));return Object(O.jsx)(O.Fragment,{children:c((function(e,t,n){var i=e.fromX,r=e.toX,a=e.fromY,o=e.toY,c=e.opacity,d=n.key;return Object(O.jsx)(s.animated.line,C({x1:i,x2:r,y1:a,y2:o,strokeOpacity:c,style:l},u),d)}))})}try{_.displayName="AnimatedGridLines",_.__docgenInfo={description:"",displayName:"AnimatedGridLines",props:{lines:{defaultValue:null,description:"",name:"lines",required:!0,type:{name:"GridLines"}},lineKey:{defaultValue:null,description:"",name:"lineKey",required:!0,type:{name:"(line: { from: { x?: number | undefined; y?: number | undefined; }; to: { x?: number | undefined; y?: number | undefined; }; }) => string"}},scale:{defaultValue:null,description:"",name:"scale",required:!0,type:{name:"Scale"}},animationTrajectory:{defaultValue:null,description:"The scale position entering lines come from, and exiting lines leave to.",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}},animateXOrY:{defaultValue:null,description:"Whether to animate the `x` or `y` values of a Line.",name:"animateXOrY",required:!0,type:{name:'"x" | "y"'}},lineStyle:{defaultValue:null,description:"Styles to apply as grid line style.",name:"lineStyle",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/grid/AnimatedGridLines.tsx#AnimatedGridLines"]={docgenInfo:_.__docgenInfo,name:"AnimatedGridLines",path:"../visx-react-spring/src/grid/AnimatedGridLines.tsx#AnimatedGridLines"})}catch(B){}var E=["scale","height","numTicks","tickValues","offset","className","animationTrajectory","top","left"];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function N(e){var t=e.scale,n=e.height,i=e.numTicks,o=e.tickValues,l=(e.offset,e.className),s=e.animationTrajectory,u=e.top,c=e.left,d=Object(a.a)(e,E);return Object(O.jsx)(V.a,{scale:t,height:n,numTicks:i,tickValues:o,className:l,top:u,left:c,children:function(e){var n=e.lines;return Object(O.jsx)(_,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({scale:t,lines:n,animationTrajectory:s,animateXOrY:"x",lineKey:function(e){var t,n;return String(null!==(t=null===e||void 0===e||null===(n=e.from)||void 0===n?void 0:n.x)&&void 0!==t?t:"")}},d))}})}try{N.displayName="AnimatedGridColumns",N.__docgenInfo={description:"",displayName:"AnimatedGridColumns",props:{className:{defaultValue:null,description:"classname to apply to line group element.",name:"className",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"Total height of each grid column line.",name:"height",required:!0,type:{name:"number"}},scale:{defaultValue:null,description:"`@visx/scale` or `d3-scale` object used to convert value to position.",name:"scale",required:!0,type:{name:"Scale"}},offset:{defaultValue:null,description:"Pixel offset to apply as a translation (y- for Rows, x- for Columns) to each grid lines.",name:"offset",required:!1,type:{name:"number | undefined"}},stroke:{defaultValue:null,description:"Grid line stroke color.",name:"stroke",required:!1,type:{name:"string | undefined"}},strokeDasharray:{defaultValue:null,description:"Grid line stroke-dasharray attribute.",name:"strokeDasharray",required:!1,type:{name:"string | undefined"}},strokeWidth:{defaultValue:null,description:"Grid line stroke thickness.",name:"strokeWidth",required:!1,type:{name:"string | number | undefined"}},left:{defaultValue:null,description:"Left offset to apply to glyph g element container.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"Top offset to apply to glyph g element container.",name:"top",required:!1,type:{name:"number | undefined"}},numTicks:{defaultValue:null,description:"Approximate number of grid lines. Approximate due to d3 alogrithm, specify `tickValues` for precise control.",name:"numTicks",required:!1,type:{name:"number | undefined"}},lineStyle:{defaultValue:null,description:"Styles to apply as grid line style.",name:"lineStyle",required:!1,type:{name:"CSSProperties | undefined"}},tickValues:{defaultValue:null,description:"Exact values used to generate grid lines using `scale`.\nOverrides `numTicks` if specified.",name:"tickValues",required:!1,type:{name:"Parameters<Scale>[0][] | undefined"}},animationTrajectory:{defaultValue:null,description:"",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/grid/AnimatedGridColumns.tsx#AnimatedGridColumns"]={docgenInfo:N.__docgenInfo,name:"AnimatedGridColumns",path:"../visx-react-spring/src/grid/AnimatedGridColumns.tsx#AnimatedGridColumns"})}catch(B){}var L=n("0XzA"),G=n.n(L),D=["scale","width","numTicks","tickValues","offset","className","animationTrajectory","top","left"];function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function I(e){var t=e.scale,n=e.width,i=e.numTicks,o=e.tickValues,l=(e.offset,e.className),s=e.animationTrajectory,u=e.top,c=e.left,d=Object(a.a)(e,D);return Object(O.jsx)(G.a,{scale:t,width:n,numTicks:i,tickValues:o,className:l,top:u,left:c,children:function(e){var n=e.lines;return Object(O.jsx)(_,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({scale:t,lines:n,animationTrajectory:s,animateXOrY:"y",lineKey:function(e){var t,n;return String(null!==(t=null===e||void 0===e||null===(n=e.from)||void 0===n?void 0:n.y)&&void 0!==t?t:"")}},d))}})}try{I.displayName="AnimatedGridRows",I.__docgenInfo={description:"",displayName:"AnimatedGridRows",props:{className:{defaultValue:null,description:"classname to apply to line group element.",name:"className",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Total width of each grid row line.",name:"width",required:!0,type:{name:"number"}},scale:{defaultValue:null,description:"`@visx/scale` or `d3-scale` object used to convert value to position.",name:"scale",required:!0,type:{name:"Scale"}},offset:{defaultValue:null,description:"Pixel offset to apply as a translation (y- for Rows, x- for Columns) to each grid lines.",name:"offset",required:!1,type:{name:"number | undefined"}},stroke:{defaultValue:null,description:"Grid line stroke color.",name:"stroke",required:!1,type:{name:"string | undefined"}},strokeDasharray:{defaultValue:null,description:"Grid line stroke-dasharray attribute.",name:"strokeDasharray",required:!1,type:{name:"string | undefined"}},strokeWidth:{defaultValue:null,description:"Grid line stroke thickness.",name:"strokeWidth",required:!1,type:{name:"string | number | undefined"}},left:{defaultValue:null,description:"Left offset to apply to glyph g element container.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"Top offset to apply to glyph g element container.",name:"top",required:!1,type:{name:"number | undefined"}},numTicks:{defaultValue:null,description:"Approximate number of grid lines. Approximate due to d3 alogrithm, specify `tickValues` for precise control.",name:"numTicks",required:!1,type:{name:"number | undefined"}},lineStyle:{defaultValue:null,description:"Styles to apply as grid line style.",name:"lineStyle",required:!1,type:{name:"CSSProperties | undefined"}},tickValues:{defaultValue:null,description:"Exact values used to generate grid lines using `scale`.\nOverrides `numTicks` if specified.",name:"tickValues",required:!1,type:{name:"Parameters<Scale>[0][] | undefined"}},animationTrajectory:{defaultValue:null,description:"",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/grid/AnimatedGridRows.tsx#AnimatedGridRows"]={docgenInfo:I.__docgenInfo,name:"AnimatedGridRows",path:"../visx-react-spring/src/grid/AnimatedGridRows.tsx#AnimatedGridRows"})}catch(B){}var z=n("QnPE"),X=n("smMw"),K=[w,N,I],W=[X.default];t.default=function(){return Object(O.jsx)(z.a,{components:K,examples:W,readme:'# @visx/react-spring\n\n<a title="@visx/react-spring npm downloads" href="https://www.npmjs.com/package/@visx/react-spring">\n  <img src="https://img.shields.io/npm/dm/@visx/react-spring.svg?style=flat-square" />\n</a>\n\nAlthough `visx` is largely unopinioned on animation, there is value in abstracting the complexity +\nboilerplate of building **animated** `visx` visualization components. This package requires\n`react-spring` as a `peerDependency` (to be compatible with any usage within your app) and exports\nall `visx` components that depend on `react-spring`.\n\n[`react-spring`](https://www.react-spring.io/) provides performant primitives for animating react\ncomponents and is our recommended library for making animated charts. In order to minimize\n`react-spring` as a dependency across other `visx` packages, we\'ve consolidated components which\ndepend on it here.\n\n## Installation\n\n```\nnpm install --save react-spring @visx/react-spring\n```\n',visxPackage:"react-spring"})}},"201w":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("J4UP");function r(e){return Object(i.a)(e)}},"Cf/J":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("aWzz"),r=n.n(i),a=n("ERkP"),o=n.n(a);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e){var t=e.children,n=e.id,i=e.from,r=e.to,a=e.x1,s=e.y1,u=e.x2,c=e.y2,d=e.fromOffset,p=void 0===d?"0%":d,f=e.fromOpacity,m=void 0===f?1:f,y=e.toOffset,h=void 0===y?"100%":y,g=e.toOpacity,b=void 0===g?1:g,O=e.rotate,x=e.transform,v=e.vertical,j=void 0===v||v,k=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),T=a,S=u,w=s,P=c;return!j||T||S||w||P||(T="0",S="0",w="0",P="1"),o.a.createElement("defs",null,o.a.createElement("linearGradient",l({id:n,x1:T,y1:w,x2:S,y2:P,gradientTransform:O?"rotate("+O+")":x},k),!!t&&t,!t&&o.a.createElement("stop",{offset:p,stopColor:i,stopOpacity:m}),!t&&o.a.createElement("stop",{offset:h,stopColor:r,stopOpacity:b})))}s.propTypes={id:r.a.string.isRequired,from:r.a.string,to:r.a.string,x1:r.a.oneOfType([r.a.string,r.a.number]),x2:r.a.oneOfType([r.a.string,r.a.number]),y1:r.a.oneOfType([r.a.string,r.a.number]),y2:r.a.oneOfType([r.a.string,r.a.number]),fromOffset:r.a.oneOfType([r.a.string,r.a.number]),fromOpacity:r.a.oneOfType([r.a.string,r.a.number]),toOffset:r.a.oneOfType([r.a.string,r.a.number]),toOpacity:r.a.oneOfType([r.a.string,r.a.number]),rotate:r.a.oneOfType([r.a.string,r.a.number]),transform:r.a.string,children:r.a.node,vertical:r.a.bool}},HbGN:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return i}))},J4UP:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const i=1/4294967296;function r(e=Math.random()){let t=0|(0<=e&&e<1?e/i:Math.abs(e));return()=>(t=1664525*t+1013904223|0,i*(t>>>0))}},WPYZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react-spring",function(){return n("/WrK")}])},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=c;var i=s(n("aWzz")),r=s(n("FGHv")),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=i?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("ERkP")),o=s(n("LaGA"));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function c(e){var t=e.className,n=e.children,i=e.debounceTime,l=void 0===i?300:i,s=e.ignoreDimensions,c=void 0===s?[]:s,d=e.parentSizeStyles,p=void 0===d?{width:"100%",height:"100%"}:d,f=e.enableDebounceLeadingCall,m=void 0===f||f,y=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"]),h=(0,a.useRef)(null),g=(0,a.useRef)(0),b=(0,a.useState)({width:0,height:0,top:0,left:0}),O=b[0],x=b[1],v=(0,a.useMemo)((function(){var e=Array.isArray(c)?c:[c];return(0,r.default)((function(t){x((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),l,{leading:m})}),[l,m,c]);return(0,a.useEffect)((function(){var e=new o.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,i=t.top,r=t.width,a=t.height;g.current=window.requestAnimationFrame((function(){v({width:r,height:a,top:i,left:n})}))}))}));return h.current&&e.observe(h.current),function(){window.cancelAnimationFrame(g.current),e.disconnect(),v&&v.cancel&&v.cancel()}}),[v]),a.default.createElement("div",u({style:p,ref:h,className:t},y),n(u({},O,{ref:h.current,resize:v})))}c.propTypes={className:i.default.string,debounceTime:i.default.number,enableDebounceLeadingCall:i.default.bool,ignoreDimensions:i.default.oneOfType([i.default.any,i.default.arrayOf(i.default.any)]),children:i.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n("zjfJ"),r=n("yFcC"),a=n.n(r),o=n("ERkP"),l=n.n(o),s=n("jvFD"),u=n.n(s),c=n("i6Tx"),d=n.n(c),p=n("jg1C");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){var t,n,r=e.description,o=e.detailsHeight,s=void 0===o?76:o,c=e.detailsStyles,m=e.exampleProps,y=e.exampleRenderer,h=e.exampleUrl,g=e.tileStyles,b=e.title;return Object(p.jsxs)(p.Fragment,{children:[(t=h,n=Object(p.jsxs)("div",{style:g,className:"jsx-713312509 gallery-tile",children:[Object(p.jsx)("div",{className:"jsx-713312509 image",children:Object(p.jsx)(d.a,{children:function(e){var t=e.width,n=e.height;return l.a.createElement(y,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(b||r?s:0)},m))}})}),(b||r)&&Object(p.jsxs)("div",{style:c,className:"jsx-713312509 details",children:[b&&Object(p.jsx)("div",{className:"jsx-713312509 title",children:b}),r&&Object(p.jsx)("div",{className:"jsx-713312509 description",children:Object(p.jsx)("pre",{className:"jsx-713312509",children:r})})]})]}),t?Object(p.jsx)(u.a,{href:t,children:n}):n),Object(p.jsx)(a.a,{id:"713312509",children:["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]})]})}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(y){}},smMw:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));n("ERkP");var i=n("gnM9"),r=n("i9k6"),a=n("jg1C"),o=n("Soe+");n.d(t,"packageJson",(function(){return o}));var l={backgroundColor:i.a},s={color:i.c},u={showControls:!1};function c(){return Object(a.jsx)(r.a,{title:"Axes & scales",description:"<Axis.AxisBottom />",detailsStyles:s,detailsHeight:20,exampleProps:u,exampleRenderer:i.b,exampleUrl:"/axis",tileStyles:l})}},zjfJ:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))},zygG:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("HO86");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(s){l=!0,r=s}finally{try{o||null==n.return||n.return()}finally{if(l)throw r}}return a}}(e,t)||Object(i.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["WPYZ",0,2,1,3,4,5,7,8,9,10,11,12,13,14,15,17,19,22,27]]]);