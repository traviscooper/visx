(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{"3Ng6":function(e){e.exports=JSON.parse('{"name":"@visx/demo-annotation","description":"Standalone visx annotation demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/annotation":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.8.0","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","annotation"]}')},HbGN:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}n.d(t,"a",(function(){return a}))},erk3:function(e,t,n){"use strict";n.d(t,"b",(function(){return A})),n.d(t,"a",(function(){return T}));var a=n("HbGN"),s=n("ERkP"),c=n("/GET"),i=n("Xr0V"),o=n("amCE"),r=n("tNN4"),l=n("geX1"),d=n("zjfJ"),u=n("yFcC"),j=n.n(u),x=n("oT5u"),b=n.n(x),p=n("cjvV"),h=n("67po"),m=n("ue4z"),O=n("xH1m"),f=n("5srZ"),y=n("jg1C");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=b.a.slice(-100),S=function(e){return new Date(e.date).valueOf()},C=function(e){return e.close},k=N[Math.floor(N.length/2)+4];function w(e){var t,n,a=e.width,c=e.height,i=e.compact,o=void 0!==i&&i,r=e.children,l=Object(s.useMemo)((function(){return Object(p.a)({domain:Object(m.b)(N,(function(e){return S(e)})),range:[0,a]})}),[a]),d=Object(s.useMemo)((function(){return Object(h.a)({domain:Object(m.b)(N,(function(e){return C(e)})),range:[c-100,100]})}),[c]),u=Object(s.useState)(!1),x=u[0],b=u[1],v=Object(s.useState)(!1),w=v[0],E=v[1],_=Object(s.useState)("Title"),A=_[0],T=_[1],P=Object(s.useState)(o?"Subtitle":"Subtitle with deets and deets and deets and deets"),V=P[0],z=P[1],D=Object(s.useState)("elbow"),L=D[0],R=D[1],q=Object(s.useState)("circle"),I=q[0],H=q[1],B=Object(s.useState)(!0),K=B[0],Y=B[1],J=Object(s.useState)("auto"),F=J[0],G=J[1],M=Object(s.useState)("auto"),W=M[0],X=M[1],Z=Object(s.useState)(o?100:175)[0],Q=Object(s.useState)({x:null!==(t=l(S(k)))&&void 0!==t?t:0,y:null!==(n=d(C(k)))&&void 0!==n?n:0,dx:o?-50:-100,dy:o?-30:-50}),U=Q[0],$=Q[1];return Object(s.useEffect)((function(){$((function(e){var t,n;return g(g({},e),{},{x:null!==(t=l(S(k)))&&void 0!==t?t:0,y:null!==(n=d(C(k)))&&void 0!==n?n:0})}))}),[l,d]),Object(y.jsxs)(y.Fragment,{children:[r({AnnotationComponent:x||w?O.a:f.a,annotationPosition:U,approxTooltipHeight:70,connectorType:L,data:N,editLabelPosition:x,editSubjectPosition:w,getDate:S,getStockValue:C,horizontalAnchor:"auto"===W?void 0:W,labelWidth:Z,setAnnotationPosition:$,showAnchorLine:K,subjectType:I,subtitle:V,title:A,verticalAnchor:"auto"===F?void 0:F,xScale:l,yScale:d}),!o&&Object(y.jsxs)("div",{className:"jsx-272244364 controls",children:[Object(y.jsxs)("div",{className:"jsx-272244364",children:[Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("strong",{className:"jsx-272244364",children:"Title"}),"\xa0\xa0",Object(y.jsx)("input",{type:"text",onChange:function(e){return T(e.target.value)},value:A,className:"jsx-272244364"})]}),"\xa0\xa0\xa0",Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("strong",{className:"jsx-272244364",children:"Subtitle"}),"\xa0\xa0",Object(y.jsx)("input",{type:"text",onChange:function(e){return z(e.target.value)},value:V,className:"jsx-272244364"})]}),"\xa0\xa0\xa0",Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"checkbox",onChange:function(){return E(!w)},checked:w,className:"jsx-272244364"}),"Edit subject position"]}),"\xa0\xa0",Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"checkbox",onChange:function(){return b(!x)},checked:x,className:"jsx-272244364"}),"Edit label position"]})]}),Object(y.jsxs)("div",{className:"jsx-272244364",children:[Object(y.jsx)("strong",{className:"jsx-272244364",children:"Connector type"}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return R("elbow")},checked:"elbow"===L,className:"jsx-272244364"}),"Elbow"]}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return R("line")},checked:"line"===L,className:"jsx-272244364"}),"Straight line"]})]}),Object(y.jsxs)("div",{className:"jsx-272244364",children:[Object(y.jsx)("strong",{className:"jsx-272244364",children:"Subject type"}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return H("circle")},checked:"circle"===I,className:"jsx-272244364"}),"Circle"]}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return H("vertical-line")},checked:"vertical-line"===I,className:"jsx-272244364"}),"Vertical line"]}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return H("horizontal-line")},checked:"horizontal-line"===I,className:"jsx-272244364"}),"Horizontal line"]})]}),Object(y.jsxs)("div",{className:"jsx-272244364",children:[Object(y.jsx)("strong",{className:"jsx-272244364",children:"Horizontal label anchor"}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return X("auto")},checked:"auto"===W,className:"jsx-272244364"}),"auto"]}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return X("start")},checked:"start"===W,className:"jsx-272244364"}),"left"]}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return X("middle")},checked:"middle"===W,className:"jsx-272244364"}),"middle"]}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return X("end")},checked:"end"===W,className:"jsx-272244364"}),"right"]})]}),Object(y.jsxs)("div",{className:"jsx-272244364",children:[Object(y.jsx)("strong",{className:"jsx-272244364",children:"Vertical label anchor"}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return G("auto")},checked:"auto"===F,className:"jsx-272244364"}),"auto"]}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return G("start")},checked:"start"===F,className:"jsx-272244364"}),"top"]}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return G("middle")},checked:"middle"===F,className:"jsx-272244364"}),"middle"]}),Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"radio",onChange:function(){return G("end")},checked:"end"===F,className:"jsx-272244364"}),"bottom"]}),Object(y.jsx)("div",{className:"jsx-272244364",children:Object(y.jsxs)("label",{className:"jsx-272244364",children:[Object(y.jsx)("input",{type:"checkbox",onChange:function(){return Y(!K)},checked:K,className:"jsx-272244364"}),"Show anchor line"]})})]})]}),Object(y.jsx)(j.a,{id:"272244364",children:[".controls.jsx-272244364{font-size:13px;line-height:1.5em;}",".controls.jsx-272244364>div.jsx-272244364{margin-bottom:4px;}"]})]})}try{w.displayName="ExampleControls",w.__docgenInfo={description:"",displayName:"ExampleControls",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},compact:{defaultValue:{value:!1},description:"",name:"compact",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/ExampleControls.tsx#ExampleControls"]={docgenInfo:w.__docgenInfo,name:"ExampleControls",path:"src/sandboxes/visx-annotation/ExampleControls.tsx#ExampleControls"})}catch(P){}function E(e){var t=e.value,n=e.scale,a=e.accessor,s=e.data,c=Object(m.a)(a).left,i=n.invert(t),o=c(s,i,1),r=s[o-1],l=s[o],d=r;return l&&a(l)&&(d=i-a(r)>a(l)-i?l:r),d}try{E.displayName="findNearestDatum",E.__docgenInfo={description:"",displayName:"findNearestDatum",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},scale:{defaultValue:null,description:"",name:"scale",required:!0,type:{name:"ScaleLinear<unknown, unknown, never> | ScaleTime<unknown, unknown, never>"}},accessor:{defaultValue:null,description:"",name:"accessor",required:!0,type:{name:"(d: AppleStock) => number"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"AppleStock[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/findNearestDatum.ts#findNearestDatum"]={docgenInfo:E.__docgenInfo,name:"findNearestDatum",path:"src/sandboxes/visx-annotation/findNearestDatum.ts#findNearestDatum"})}catch(P){}var _=["event"],A=["#ecf4f3","#68b0ab","#006a71"];function T(e){var t=e.width,n=e.height,s=e.compact,d=void 0!==s&&s;return Object(y.jsx)(w,{width:t,height:n,compact:d,children:function(e){var s=e.AnnotationComponent,d=e.annotationPosition,u=e.approxTooltipHeight,j=e.connectorType,x=e.data,b=e.editLabelPosition,p=e.editSubjectPosition,h=e.getDate,m=e.getStockValue,O=e.horizontalAnchor,f=e.labelWidth,v=e.setAnnotationPosition,g=e.showAnchorLine,N=e.subjectType,S=e.subtitle,C=e.title,k=e.verticalAnchor,w=e.xScale,T=e.yScale;return Object(y.jsxs)("svg",{width:t,height:n,children:[Object(y.jsx)("rect",{width:t,height:n,fill:A[0]}),Object(y.jsx)(l.a,{stroke:A[2],strokeWidth:2,data:x,x:function(e){var t;return null!==(t=w(h(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=T(m(e)))&&void 0!==t?t:0}}),Object(y.jsxs)(s,{width:t,height:n,x:d.x,y:d.y,dx:d.dx,dy:d.dy,canEditLabel:b,canEditSubject:p,onDragEnd:function(e){e.event;var s,c,i=Object(a.a)(e,_),o=E({accessor:"horizontal-line"===N?m:h,data:x,scale:"horizontal-line"===N?T:w,value:"horizontal-line"===N?i.y:i.x}),r=null!==(s=w(h(o)))&&void 0!==s?s:0,l=null!==(c=T(m(o)))&&void 0!==c?c:0,d=i.dx>0&&r+i.dx+f>t||i.dx<0&&r+i.dx-f<=0,j=i.dy>0&&n-(l+i.dy)<u||i.dy<0&&l+i.dy-u<=0;v({x:r,y:l,dx:(d?-1:1)*i.dx,dy:(j?-1:1)*i.dy})},children:[Object(y.jsx)(c.a,{stroke:"#ff7e67",type:j}),Object(y.jsx)(i.a,{backgroundFill:"white",showAnchorLine:g,anchorLineStroke:A[2],backgroundProps:{stroke:A[1]},fontColor:A[2],horizontalAnchor:O,subtitle:S,title:C,verticalAnchor:k,width:f}),"circle"===N&&Object(y.jsx)(o.a,{stroke:"#ff7e67"}),"circle"!==N&&Object(y.jsx)(r.a,{orientation:"vertical-line"===N?"vertical":"horizontal",stroke:"#ff7e67",min:0,max:"vertical-line"===N?n:t})]})]})}})}try{T.displayName="Example",T.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},compact:{defaultValue:{value:!1},description:"",name:"compact",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/Example.tsx#Example"]={docgenInfo:T.__docgenInfo,name:"Example",path:"src/sandboxes/visx-annotation/Example.tsx#Example"})}catch(P){}}}]);