(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"4MDm":function(e,i,n){"use strict";function r(){return 0}n.d(i,"a",(function(){return r})),i.b=function(e){return function(){return e}}},"5RFG":function(e,i,n){"use strict";function r(e){return null==e?null:a(e)}function a(e){if("function"!==typeof e)throw new Error;return e}n.d(i,"a",(function(){return r})),n.d(i,"b",(function(){return a}))},GtZW:function(e,i,n){"use strict";n.d(i,"b",(function(){return L})),n.d(i,"a",(function(){return k})),n.d(i,"c",(function(){return w}));var r=n("fGyu"),a=n("ERkP"),t=n.n(a),s=n("JmwF"),o=n("5RFG"),d=n("tshL"),u={depth:-1},p={};function l(e){return e.id}function h(e){return e.parentId}var c=n("ZOE4"),f=n("TXCZ"),z=n("Gy5O"),m=function e(i){function n(e,n,r,a,t){if((s=e._squarify)&&s.ratio===i)for(var s,o,d,u,p,l=-1,h=s.length,m=e.value;++l<h;){for(d=(o=s[l]).children,u=o.value=0,p=d.length;u<p;++u)o.value+=d[u].value;o.dice?Object(f.a)(o,n,r,a,r+=(t-r)*o.value/m):Object(z.a)(o,n,r,n+=(a-n)*o.value/m,t),m-=o.value}else e._squarify=s=Object(c.c)(i,e,n,r,a,t),s.ratio=i}return n.ratio=function(i){return e((i=+i)>1?i:1)},n}(c.b),y=n("aWzz"),g=n.n(y),T=n("O94r"),O=n.n(T),C=n("znep");function b(e){var i=e.node,n=i.x0,r=i.x1,a=i.y0,s=i.y1;return t.a.createElement("rect",{x:n,y:a,width:Math.abs(r-n),height:Math.abs(s-a),fill:"#21D4FD"})}function A(e,i){e(i)}function I(e){var i=e.top,n=e.left,r=e.className,a=e.root,o=e.tile,d=e.size,u=e.round,p=e.padding,l=e.paddingInner,h=e.paddingOuter,c=e.paddingTop,f=e.paddingRight,z=e.paddingBottom,m=e.paddingLeft,y=e.children,g=e.nodeComponent,T=void 0===g?b:g,I=Object(C.a)();o&&I.tile(o),d&&I.size(d),u&&I.round(u),p&&A(I.padding,p),l&&A(I.paddingInner,l),h&&A(I.paddingOuter,h),c&&A(I.paddingTop,c),f&&A(I.paddingRight,f),z&&A(I.paddingBottom,z),m&&A(I.paddingLeft,m);var v=I(a);return y?t.a.createElement(t.a.Fragment,null,y(v)):t.a.createElement(s.a,{top:i,left:n,className:O()("visx-treemap",r)},T&&v.descendants().map((function(e,i){return t.a.createElement(s.a,{key:"treemap-node-"+i},t.a.createElement(T,{node:e}))})))}b.propTypes={node:g.a.shape({x0:g.a.number.isRequired,x1:g.a.number.isRequired,y0:g.a.number.isRequired,y1:g.a.number.isRequired}).isRequired},I.propTypes={children:g.a.func,top:g.a.number,left:g.a.number,className:g.a.string,round:g.a.bool,padding:g.a.oneOfType([g.a.number,g.a.func]),paddingInner:g.a.oneOfType([g.a.number,g.a.func]),paddingOuter:g.a.oneOfType([g.a.number,g.a.func]),paddingTop:g.a.oneOfType([g.a.number,g.a.func]),paddingRight:g.a.oneOfType([g.a.number,g.a.func]),paddingBottom:g.a.oneOfType([g.a.number,g.a.func]),paddingLeft:g.a.oneOfType([g.a.number,g.a.func])};var v=n("zco+"),M=n.n(v),J=n("67po"),H=n("jg1C"),L="#f3e9d2",k="#114b5f",S=Object(J.a)({domain:[0,Math.max.apply(Math,Object(r.a)(M.a.map((function(e){return e.size||0}))))],range:["#4281a4",L]}),D=function(){var e=l,i=h;function n(n){var r,a,t,s,o,l,h,c=n.length,f=new Array(c),z={};for(a=0;a<c;++a)r=n[a],o=f[a]=new d.a(r),null!=(l=e(r,a,n))&&(l+="")&&(z[h="$"+(o.id=l)]=h in z?p:o);for(a=0;a<c;++a)if(o=f[a],null!=(l=i(n[a],a,n))&&(l+="")){if(!(s=z["$"+l]))throw new Error("missing: "+l);if(s===p)throw new Error("ambiguous: "+l);s.children?s.children.push(o):s.children=[o],o.parent=s}else{if(t)throw new Error("multiple roots");t=o}if(!t)throw new Error("no root");if(t.parent=u,t.eachBefore((function(e){e.depth=e.parent.depth+1,--c})).eachBefore(d.b),t.parent=null,c>0)throw new Error("cycle");return t}return n.id=function(i){return arguments.length?(e=Object(o.b)(i),n):e},n.parentId=function(e){return arguments.length?(i=Object(o.b)(e),n):i},n}().id((function(e){return e.id})).parentId((function(e){return e.parent}))(M.a).sum((function(e){return e.size||0})),x={treemapSquarify:c.a,treemapBinary:function(e,i,n,r,a){var t,s,o=e.children,d=o.length,u=new Array(d+1);for(u[0]=s=t=0;t<d;++t)u[t+1]=s+=o[t].value;!function e(i,n,r,a,t,s,d){if(i>=n-1){var p=o[i];return p.x0=a,p.y0=t,p.x1=s,void(p.y1=d)}var l=u[i],h=r/2+l,c=i+1,f=n-1;for(;c<f;){var z=c+f>>>1;u[z]<h?c=z+1:f=z}h-u[c-1]<u[c]-h&&i+1<c&&--c;var m=u[c]-l,y=r-m;if(s-a>d-t){var g=(a*y+s*m)/r;e(i,c,m,a,t,g,d),e(c,n,y,g,t,s,d)}else{var T=(t*y+d*m)/r;e(i,c,m,a,t,s,T),e(c,n,y,a,T,s,d)}}(0,d,e.value,i,n,r,a)},treemapDice:f.a,treemapResquarify:m,treemapSlice:z.a,treemapSliceDice:function(e,i,n,r,a){(1&e.depth?z.a:f.a)(e,i,n,r,a)}},V={top:10,left:10,right:10,bottom:10};function w(e){var i=e.width,n=e.height,r=e.margin,t=void 0===r?V:r,o=Object(a.useState)("treemapSquarify"),u=o[0],p=o[1],l=i-t.left-t.right,h=n-t.top-t.bottom,c=Object(d.c)(D).sort((function(e,i){return(i.value||0)-(e.value||0)}));return i<10?null:Object(H.jsxs)("div",{children:[Object(H.jsx)("label",{children:"tile method"})," ",Object(H.jsx)("select",{onClick:function(e){return e.stopPropagation()},onChange:function(e){return p(e.target.value)},value:u,children:Object.keys(x).map((function(e){return Object(H.jsx)("option",{value:e,children:e},e)}))}),Object(H.jsx)("div",{children:Object(H.jsxs)("svg",{width:i,height:n,children:[Object(H.jsx)("rect",{width:i,height:n,rx:14,fill:k}),Object(H.jsx)(I,{top:t.top,root:c,size:[l,h],tile:x[u],round:!0,children:function(e){return Object(H.jsx)(s.a,{children:e.descendants().reverse().map((function(e,i){var n=e.x1-e.x0,r=e.y1-e.y0;return Object(H.jsxs)(s.a,{top:e.y0+t.top,left:e.x0+t.left,children:[1===e.depth&&Object(H.jsx)("rect",{width:n,height:r,stroke:k,strokeWidth:4,fill:"transparent"}),e.depth>2&&Object(H.jsx)("rect",{width:n,height:r,stroke:k,fill:S(e.value||0)})]},"node-".concat(i))}))})}})]})})]})}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-treemap/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-treemap/Example.tsx#Example"})}catch(P){}},Gy5O:function(e,i,n){"use strict";i.a=function(e,i,n,r,a){for(var t,s=e.children,o=-1,d=s.length,u=e.value&&(a-n)/e.value;++o<d;)(t=s[o]).x0=i,t.x1=r,t.y0=n,t.y1=n+=t.value*u}},TXCZ:function(e,i,n){"use strict";i.a=function(e,i,n,r,a){for(var t,s=e.children,o=-1,d=s.length,u=e.value&&(r-i)/e.value;++o<d;)(t=s[o]).y0=n,t.y1=a,t.x0=i,t.x1=i+=t.value*u}},ZOE4:function(e,i,n){"use strict";n.d(i,"b",(function(){return t})),n.d(i,"c",(function(){return s}));var r=n("TXCZ"),a=n("Gy5O"),t=(1+Math.sqrt(5))/2;function s(e,i,n,t,s,o){for(var d,u,p,l,h,c,f,z,m,y,g,T=[],O=i.children,C=0,b=0,A=O.length,I=i.value;C<A;){p=s-n,l=o-t;do{h=O[b++].value}while(!h&&b<A);for(c=f=h,g=h*h*(y=Math.max(l/p,p/l)/(I*e)),m=Math.max(f/g,g/c);b<A;++b){if(h+=u=O[b].value,u<c&&(c=u),u>f&&(f=u),g=h*h*y,(z=Math.max(f/g,g/c))>m){h-=u;break}m=z}T.push(d={value:h,dice:p<l,children:O.slice(C,b)}),d.dice?Object(r.a)(d,n,t,s,I?t+=l*h/I:o):Object(a.a)(d,n,t,I?n+=p*h/I:s,o),I-=h,C=b}return T}i.a=function e(i){function n(e,n,r,a,t){s(i,e,n,r,a,t)}return n.ratio=function(i){return e((i=+i)>1?i:1)},n}(t)},a41g:function(e){e.exports=JSON.parse('{"name":"@visx/demo-treemap","description":"Standalone visx treemap demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/group":"latest","@visx/hierarchy":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","treemap","hierarchy"]}')},oeoV:function(e,i,n){"use strict";i.a=function(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)}},tshL:function(e,i,n){"use strict";function r(e){var i=0,n=e.children,r=n&&n.length;if(r)for(;--r>=0;)i+=n[r].value;else i=1;e.value=i}n.d(i,"c",(function(){return a})),n.d(i,"b",(function(){return o})),n.d(i,"a",(function(){return d}));function a(e,i){var n,r,a,s,u,p=new d(e),l=+e.value&&(p.value=e.value),h=[p];for(null==i&&(i=t);n=h.pop();)if(l&&(n.value=+n.data.value),(a=i(n.data))&&(u=a.length))for(n.children=new Array(u),s=u-1;s>=0;--s)h.push(r=n.children[s]=new d(a[s])),r.parent=n,r.depth=n.depth+1;return p.eachBefore(o)}function t(e){return e.children}function s(e){e.data=e.data.data}function o(e){var i=0;do{e.height=i}while((e=e.parent)&&e.height<++i)}function d(e){this.data=e,this.depth=this.height=0,this.parent=null}d.prototype=a.prototype={constructor:d,count:function(){return this.eachAfter(r)},each:function(e){var i,n,r,a,t=this,s=[t];do{for(i=s.reverse(),s=[];t=i.pop();)if(e(t),n=t.children)for(r=0,a=n.length;r<a;++r)s.push(n[r])}while(s.length);return this},eachAfter:function(e){for(var i,n,r,a=this,t=[a],s=[];a=t.pop();)if(s.push(a),i=a.children)for(n=0,r=i.length;n<r;++n)t.push(i[n]);for(;a=s.pop();)e(a);return this},eachBefore:function(e){for(var i,n,r=this,a=[r];r=a.pop();)if(e(r),i=r.children)for(n=i.length-1;n>=0;--n)a.push(i[n]);return this},sum:function(e){return this.eachAfter((function(i){for(var n=+e(i.data)||0,r=i.children,a=r&&r.length;--a>=0;)n+=r[a].value;i.value=n}))},sort:function(e){return this.eachBefore((function(i){i.children&&i.children.sort(e)}))},path:function(e){for(var i=this,n=function(e,i){if(e===i)return e;var n=e.ancestors(),r=i.ancestors(),a=null;e=n.pop(),i=r.pop();for(;e===i;)a=e,e=n.pop(),i=r.pop();return a}(i,e),r=[i];i!==n;)i=i.parent,r.push(i);for(var a=r.length;e!==n;)r.splice(a,0,e),e=e.parent;return r},ancestors:function(){for(var e=this,i=[e];e=e.parent;)i.push(e);return i},descendants:function(){var e=[];return this.each((function(i){e.push(i)})),e},leaves:function(){var e=[];return this.eachBefore((function(i){i.children||e.push(i)})),e},links:function(){var e=this,i=[];return e.each((function(n){n!==e&&i.push({source:n.parent,target:n})})),i},copy:function(){return a(this).eachBefore(s)}}},"zco+":function(e,i,n){"use strict";i.__esModule=!0,i.default=void 0;var r=[{id:"Shakespeare",parent:null,size:0},{id:"Comedies",parent:"Shakespeare",size:null},{id:"Tragedies",parent:"Shakespeare",size:null},{id:"Histories",parent:"Shakespeare",size:null},{id:"As You Like It",parent:"Comedies",size:null},{id:"Adam",parent:"As You Like It",size:10},{id:"Amiens",parent:"As You Like It",size:10},{id:"Audrey",parent:"As You Like It",size:12},{id:"Celia",parent:"As You Like It",size:108},{id:"Charles",parent:"As You Like It",size:8},{id:"Corin",parent:"As You Like It",size:24},{id:"Dennis",parent:"As You Like It",size:2},{id:"Duke",parent:"As You Like It",size:32},{id:"Frederick",parent:"As You Like It",size:20},{id:"Hymen",parent:"As You Like It",size:1},{id:"Jaques (lord)",parent:"As You Like It",size:57},{id:"Jaques (son)",parent:"As You Like It",size:2},{id:"Le Beau",parent:"As You Like It",size:14},{id:"Oliver",parent:"As You Like It",size:37},{id:"Orlando",parent:"As You Like It",size:120},{id:"Phebe",parent:"As You Like It",size:23},{id:"Rosalind",parent:"As You Like It",size:201},{id:"Silvius",parent:"As You Like It",size:24},{id:"Sir Oliver Martext",parent:"As You Like It",size:3},{id:"Touchstone",parent:"As You Like It",size:74},{id:"William",parent:"As You Like It",size:11},{id:"Comedy Of Errors",parent:"Comedies",size:null},{id:"Adriana",parent:"Comedy Of Errors",size:79},{id:"Aegeon",parent:"Comedy Of Errors",size:17},{id:"Aemilia",parent:"Comedy Of Errors",size:16},{id:"Angelo",parent:"Comedy Of Errors",size:31},{id:"Antipholus of Ephesus",parent:"Comedy Of Errors",size:76},{id:"Antipholus of Syracuse",parent:"Comedy Of Errors",size:103},{id:"Balthazar",parent:"Comedy Of Errors",size:5},{id:"Courtezan",parent:"Comedy Of Errors",size:11},{id:"Dromio of Ephesus",parent:"Comedy Of Errors",size:63},{id:"Dromio of Syracuse",parent:"Comedy Of Errors",size:99},{id:"Luce",parent:"Comedy Of Errors",size:7},{id:"Luciana",parent:"Comedy Of Errors",size:43},{id:"Pinch",parent:"Comedy Of Errors",size:6},{id:"Solinus",parent:"Comedy Of Errors",size:22},{id:"Merchant Of Venice",parent:"Comedies",size:null},{id:"Antonio",parent:"Merchant Of Venice",size:47},{id:"Balthasar",parent:"Merchant Of Venice",size:1},{id:"Bassanio",parent:"Merchant Of Venice",size:73},{id:"Duke (of Venice)",parent:"Merchant Of Venice",size:18},{id:"Gratiano",parent:"Merchant Of Venice",size:48},{id:"Jessica",parent:"Merchant Of Venice",size:26},{id:"Launcelot Gobbo",parent:"Merchant Of Venice",size:44},{id:"Leonardo",parent:"Merchant Of Venice",size:2},{id:"Lorenzo",parent:"Merchant Of Venice",size:47},{id:"Nerissa",parent:"Merchant Of Venice",size:36},{id:"Old Gobbo",parent:"Merchant Of Venice",size:19},{id:"Portia",parent:"Merchant Of Venice",size:117},{id:"Prince of Arragon",parent:"Merchant Of Venice",size:4},{id:"Prince of Morocco",parent:"Merchant Of Venice",size:7},{id:"Salanio",parent:"Merchant Of Venice",size:18},{id:"Salarino",parent:"Merchant Of Venice",size:27},{id:"Salerio",parent:"Merchant Of Venice",size:6},{id:"Shylock",parent:"Merchant Of Venice",size:79},{id:"Stephano",parent:"Merchant Of Venice",size:3},{id:"Tubal",parent:"Merchant Of Venice",size:8},{id:"Midsummer Night's Dream",parent:"Comedies",size:null},{id:"Bottom",parent:"Midsummer Night's Dream",size:59},{id:"Cobweb",parent:"Midsummer Night's Dream",size:4},{id:"Demetrius",parent:"Midsummer Night's Dream",size:48},{id:"Egeus",parent:"Midsummer Night's Dream",size:7},{id:"Fairy",parent:"Midsummer Night's Dream",size:4},{id:"Flute",parent:"Midsummer Night's Dream",size:18},{id:"Helena",parent:"Midsummer Night's Dream",size:36},{id:"Hermia",parent:"Midsummer Night's Dream",size:48},{id:"Hippolyta",parent:"Midsummer Night's Dream",size:14},{id:"Lysander",parent:"Midsummer Night's Dream",size:50},{id:"Moth",parent:"Midsummer Night's Dream",size:2},{id:"Mustardseed",parent:"Midsummer Night's Dream",size:5},{id:"Oberon",parent:"Midsummer Night's Dream",size:29},{id:"Peaseblossom",parent:"Midsummer Night's Dream",size:4},{id:"Philostrate",parent:"Midsummer Night's Dream",size:6},{id:"Puck",parent:"Midsummer Night's Dream",size:33},{id:"Quince",parent:"Midsummer Night's Dream",size:40},{id:"Snout",parent:"Midsummer Night's Dream",size:9},{id:"Snug",parent:"Midsummer Night's Dream",size:4},{id:"Starveling",parent:"Midsummer Night's Dream",size:7},{id:"Theseus",parent:"Midsummer Night's Dream",size:48},{id:"Titania",parent:"Midsummer Night's Dream",size:23},{id:"Taming Of The Shrew",parent:"Comedies",size:null},{id:"Baptista Minola",parent:"Taming Of The Shrew",size:68},{id:"Bianca",parent:"Taming Of The Shrew",size:29},{id:"Biondello",parent:"Taming Of The Shrew",size:39},{id:"Christopher Sly",parent:"Taming Of The Shrew",size:24},{id:"Curtis",parent:"Taming Of The Shrew",size:20},{id:"Gremio",parent:"Taming Of The Shrew",size:58},{id:"Grumio",parent:"Taming Of The Shrew",size:63},{id:"Haberdasher",parent:"Taming Of The Shrew",size:1},{id:"Hortensio",parent:"Taming Of The Shrew",size:70},{id:"Joseph",parent:"Taming Of The Shrew",size:1},{id:"Katherina",parent:"Taming Of The Shrew",size:82},{id:"Lucentio",parent:"Taming Of The Shrew",size:61},{id:"Nathaniel",parent:"Taming Of The Shrew",size:4},{id:"Nicholas",parent:"Taming Of The Shrew",size:1},{id:"Peter",parent:"Taming Of The Shrew",size:2},{id:"Petruchio",parent:"Taming Of The Shrew",size:158},{id:"Philip",parent:"Taming Of The Shrew",size:1},{id:"Tranio",parent:"Taming Of The Shrew",size:90},{id:"Vincentio",parent:"Taming Of The Shrew",size:23},{id:"The Tempest",parent:"Comedies",size:null},{id:"Adrian",parent:"The Tempest",size:9},{id:"Alonso",parent:"The Tempest",size:40},{id:"Antonio, duke of Milan",parent:"The Tempest",size:57},{id:"Ariel",parent:"The Tempest",size:45},{id:"Caliban",parent:"The Tempest",size:50},{id:"Ceres",parent:"The Tempest",size:4},{id:"Ferdinand",parent:"The Tempest",size:31},{id:"Francisco",parent:"The Tempest",size:2},{id:"Gonzalo",parent:"The Tempest",size:52},{id:"Iris",parent:"The Tempest",size:4},{id:"Juno",parent:"The Tempest",size:2},{id:"Master",parent:"The Tempest",size:2},{id:"Miranda",parent:"The Tempest",size:50},{id:"Nymphs",parent:"The Tempest",size:0},{id:"Prospero",parent:"The Tempest",size:114},{id:"Reapers",parent:"The Tempest",size:0},{id:"Sebastian",parent:"The Tempest",size:67},{id:"Stephano (Servant to Portia)",parent:"The Tempest",size:60},{id:"Trinculo",parent:"The Tempest",size:39},{id:"Henry VIII",parent:"Histories",size:null},{id:"Anne Bullen",parent:"Henry VIII",size:18},{id:"Archbishop Cranmer",parent:"Henry VIII",size:21},{id:"Bishop Lincoln",parent:"Henry VIII",size:2},{id:"Brandon",parent:"Henry VIII",size:6},{id:"Capucius",parent:"Henry VIII",size:5},{id:"Cardinal Campeius",parent:"Henry VIII",size:14},{id:"Cardinal Wolsey",parent:"Henry VIII",size:79},{id:"Cromwell",parent:"Henry VIII",size:21},{id:"Doctor Butts",parent:"Henry VIII",size:4},{id:"Duke of Buckingham",parent:"Henry VIII",size:26},{id:"Duke of Norfolk",parent:"Henry VIII",size:48},{id:"Duke of Suffolk",parent:"Henry VIII",size:30},{id:"Earl of Surrey",parent:"Henry VIII",size:24},{id:"First Secretary to Wolsey",parent:"Henry VIII",size:2},{id:"Gardiner",parent:"Henry VIII",size:22},{id:"Garter",parent:"Henry VIII",size:1},{id:"Griffith",parent:"Henry VIII",size:13},{id:"King Henry VIII",parent:"Henry VIII",size:81},{id:"Lord Abergavenny",parent:"Henry VIII",size:5},{id:"Lord Chamberlain",parent:"Henry VIII",size:38},{id:"Lord Chancellor",parent:"Henry VIII",size:7},{id:"Lord Sands",parent:"Henry VIII",size:17},{id:"Old Lady",parent:"Henry VIII",size:14},{id:"Patience",parent:"Henry VIII",size:3},{id:"Porter (door-keeper of the Council-chamber)",parent:"Henry VIII",size:10},{id:"Queen Katharine",parent:"Henry VIII",size:50},{id:"Sir Anthony Denny",parent:"Henry VIII",size:3},{id:"Sir Henry Guildford",parent:"Henry VIII",size:1},{id:"Sir Nicholas Vaux",parent:"Henry VIII",size:1},{id:"Sir Thomas Lovell",parent:"Henry VIII",size:21},{id:"Surveyor to the Duke of Buckingham",parent:"Henry VIII",size:9},{id:"History Of King John",parent:"Histories",size:null},{id:"Arthur Duke of Bretagne",parent:"History Of King John",size:23},{id:"Blanch",parent:"History Of King John",size:9},{id:"Cardinal Pandulph",parent:"History Of King John",size:23},{id:"Chatillon",parent:"History Of King John",size:5},{id:"Constance",parent:"History Of King John",size:36},{id:"Essex",parent:"History Of King John",size:1},{id:"Faulconbridge",parent:"History Of King John",size:4},{id:"Hubert de Burgh",parent:"History Of King John",size:52},{id:"James Gurney",parent:"History Of King John",size:1},{id:"King John",parent:"History Of King John",size:95},{id:"King Phillip",parent:"History Of King John",size:43},{id:"Lady Faulconbridge",parent:"History Of King John",size:5},{id:"Lewis the Dauphin",parent:"History Of King John",size:29},{id:"Lord Bigot",parent:"History Of King John",size:6},{id:"Lymoges duke of Austria",parent:"History Of King John",size:16},{id:"Melun",parent:"History Of King John",size:3},{id:"Pembroke earl of Pembroke",parent:"History Of King John",size:20},{id:"Peter of Pomfret",parent:"History Of King John",size:1},{id:"Philip the Bastard",parent:"History Of King John",size:89},{id:"Prince Henry",parent:"History Of King John",size:8},{id:"Queen Elinor",parent:"History Of King John",size:22},{id:"Salisbury earl of Salisbury",parent:"History Of King John",size:36},{id:"Antony And Cleopatra",parent:"Tragedies",size:null},{id:"Agrippa",parent:"Antony And Cleopatra",size:28},{id:"Alexas",parent:"Antony And Cleopatra",size:15},{id:"Antony",parent:"Antony And Cleopatra",size:202},{id:"Canidius",parent:"Antony And Cleopatra",size:10},{id:"Captain",parent:"Antony And Cleopatra",size:1},{id:"Charmian",parent:"Antony And Cleopatra",size:63},{id:"Cleopatra",parent:"Antony And Cleopatra",size:204},{id:"Demetrius (Friend to Antony)",parent:"Antony And Cleopatra",size:2},{id:"Dercetas",parent:"Antony And Cleopatra",size:5},{id:"Diomedes",parent:"Antony And Cleopatra",size:7},{id:"Dolabella",parent:"Antony And Cleopatra",size:23},{id:"Domitius Enobarus",parent:"Antony And Cleopatra",size:113},{id:"Egyptian",parent:"Antony And Cleopatra",size:2},{id:"Eros",parent:"Antony And Cleopatra",size:27},{id:"Euphronius",parent:"Antony And Cleopatra",size:5},{id:"Gallus",parent:"Antony And Cleopatra",size:1},{id:"Iras",parent:"Antony And Cleopatra",size:18},{id:"Lepidus",parent:"Antony And Cleopatra",size:30},{id:"Mardian",parent:"Antony And Cleopatra",size:7},{id:"Mecaenas",parent:"Antony And Cleopatra",size:16},{id:"Menas",parent:"Antony And Cleopatra",size:35},{id:"Menecrates",parent:"Antony And Cleopatra",size:2},{id:"Octavia",parent:"Antony And Cleopatra",size:13},{id:"Octavius",parent:"Antony And Cleopatra",size:98},{id:"Philo",parent:"Antony And Cleopatra",size:2},{id:"Pompey",parent:"Antony And Cleopatra",size:41},{id:"Proculeius",parent:"Antony And Cleopatra",size:10},{id:"Scarus",parent:"Antony And Cleopatra",size:12},{id:"Seleucus",parent:"Antony And Cleopatra",size:3},{id:"Silius",parent:"Antony And Cleopatra",size:3},{id:"Taurus",parent:"Antony And Cleopatra",size:1},{id:"Thyreus",parent:"Antony And Cleopatra",size:12},{id:"Varrius",parent:"Antony And Cleopatra",size:1},{id:"Ventidius",parent:"Antony And Cleopatra",size:4},{id:"Coriolanus",parent:"Tragedies",size:null},{id:"Aedile",parent:"Coriolanus",size:10},{id:"Cominius",parent:"Coriolanus",size:67},{id:"Coriolanus (Caius Marcius Coriolanus)",parent:"Coriolanus",size:189},{id:"Junius Brutus",parent:"Coriolanus",size:91},{id:"Lieutenant",parent:"Coriolanus",size:4},{id:"Menenius Agrippa",parent:"Coriolanus",size:162},{id:"Patrician",parent:"Coriolanus",size:3},{id:"Roman",parent:"Coriolanus",size:10},{id:"Sicinius Velutus",parent:"Coriolanus",size:117},{id:"Titus Lartius",parent:"Coriolanus",size:23},{id:"Tullus Aufidius",parent:"Coriolanus",size:45},{id:"Valeria",parent:"Coriolanus",size:14},{id:"Virgilia",parent:"Coriolanus",size:26},{id:"Volsce",parent:"Coriolanus",size:9},{id:"Volumnia",parent:"Coriolanus",size:57},{id:"Young Coriolanus",parent:"Coriolanus",size:1},{id:"Cymbeline",parent:"Tragedies",size:null},{id:"Arviragus",parent:"Cymbeline",size:46},{id:"Belarius",parent:"Cymbeline",size:58},{id:"Caius Lucius",parent:"Cymbeline",size:25},{id:"Cloten",parent:"Cymbeline",size:77},{id:"Cornelius (physician)",parent:"Cymbeline",size:13},{id:"Cymbeline, King of Britain",parent:"Cymbeline",size:81},{id:"Guiderius",parent:"Cymbeline",size:62},{id:"Helen",parent:"Cymbeline",size:0},{id:"Iachimo",parent:"Cymbeline",size:77},{id:"Imogen",parent:"Cymbeline",size:118},{id:"Jupiter",parent:"Cymbeline",size:1},{id:"Philario",parent:"Cymbeline",size:14},{id:"Pisanio",parent:"Cymbeline",size:58},{id:"Posthumus Leonatus",parent:"Cymbeline",size:77},{id:"Queen",parent:"Cymbeline",size:27},{id:"Roman Captain",parent:"Cymbeline",size:4},{id:"Sicilius Leonatus",parent:"Cymbeline",size:7},{id:"The Tragedy of Hamlet, Prince of Denmark",parent:"Tragedies",size:null},{id:"Bernardo",parent:"The Tragedy of Hamlet, Prince of Denmark",size:19},{id:"Claudius, King of Denmark",parent:"The Tragedy of Hamlet, Prince of Denmark",size:102},{id:"Cornelius",parent:"The Tragedy of Hamlet, Prince of Denmark",size:1},{id:"Father's Ghost",parent:"The Tragedy of Hamlet, Prince of Denmark",size:15},{id:"Fortinbras",parent:"The Tragedy of Hamlet, Prince of Denmark",size:6},{id:"Francisco ",parent:"The Tragedy of Hamlet, Prince of Denmark",size:8},{id:"Gertrude",parent:"The Tragedy of Hamlet, Prince of Denmark",size:69},{id:"Guildenstern",parent:"The Tragedy of Hamlet, Prince of Denmark",size:29},{id:"Hamlet",parent:"The Tragedy of Hamlet, Prince of Denmark",size:358},{id:"Horatio",parent:"The Tragedy of Hamlet, Prince of Denmark",size:109},{id:"Laertes",parent:"The Tragedy of Hamlet, Prince of Denmark",size:62},{id:"Lucianus",parent:"The Tragedy of Hamlet, Prince of Denmark",size:0},{id:"Marcellus",parent:"The Tragedy of Hamlet, Prince of Denmark",size:37},{id:"Ophelia",parent:"The Tragedy of Hamlet, Prince of Denmark",size:58},{id:"Osric",parent:"The Tragedy of Hamlet, Prince of Denmark",size:25},{id:"Polonius",parent:"The Tragedy of Hamlet, Prince of Denmark",size:86},{id:"Reynaldo",parent:"The Tragedy of Hamlet, Prince of Denmark",size:13},{id:"Rosencrantz",parent:"The Tragedy of Hamlet, Prince of Denmark",size:48},{id:"Voltemand",parent:"The Tragedy of Hamlet, Prince of Denmark",size:1},{id:"Julius Caesar",parent:"Tragedies",size:null},{id:"Antony (Marcus Antonius)",parent:"Julius Caesar",size:51},{id:"Artemidorus of Cnidos",parent:"Julius Caesar",size:4},{id:"Brutus (Marcus Brutus)",parent:"Julius Caesar",size:194},{id:"Caesar (Julius Caesar)",parent:"Julius Caesar",size:42},{id:"Calpurnia",parent:"Julius Caesar",size:6},{id:"Casca",parent:"Julius Caesar",size:39},{id:"Cassius",parent:"Julius Caesar",size:140},{id:"Cicero",parent:"Julius Caesar",size:4},{id:"Cinna",parent:"Julius Caesar",size:11},{id:"Cinna the Poet",parent:"Julius Caesar",size:8},{id:"Claudius",parent:"Julius Caesar",size:2},{id:"Clitus",parent:"Julius Caesar",size:8},{id:"Dardanius",parent:"Julius Caesar",size:3},{id:"Decius Brutus",parent:"Julius Caesar",size:12},{id:"Flavius",parent:"Julius Caesar",size:5},{id:"Lepidus (Marcus Antonius Lepidus)",parent:"Julius Caesar",size:3},{id:"Ligarius",parent:"Julius Caesar",size:5},{id:"Lucilius",parent:"Julius Caesar",size:10},{id:"Lucius",parent:"Julius Caesar",size:24},{id:"Marullus",parent:"Julius Caesar",size:6},{id:"Messala",parent:"Julius Caesar",size:20},{id:"Metellus Cimber",parent:"Julius Caesar",size:5},{id:"Octavius (Octavius Caesar)",parent:"Julius Caesar",size:19},{id:"Pindarus",parent:"Julius Caesar",size:5},{id:"Popilius (Popilius Lena)",parent:"Julius Caesar",size:2},{id:"Portia (wife of Brutus)",parent:"Julius Caesar",size:16},{id:"Publius",parent:"Julius Caesar",size:2},{id:"Strato",parent:"Julius Caesar",size:4},{id:"Tintinius",parent:"Julius Caesar",size:10},{id:"Trebonius",parent:"Julius Caesar",size:4},{id:"Varro",parent:"Julius Caesar",size:6},{id:"Volumnius",parent:"Julius Caesar",size:3},{id:"Young Cato",parent:"Julius Caesar",size:3},{id:"King Lear",parent:"Tragedies",size:null},{id:"Cordelia",parent:"King Lear",size:31},{id:"Curan",parent:"King Lear",size:4},{id:"Duke of Albany",parent:"King Lear",size:58},{id:"Duke of Burgundy",parent:"King Lear",size:5},{id:"Duke of Cornwall",parent:"King Lear",size:53},{id:"Earl of Gloucester",parent:"King Lear",size:118},{id:"Earl of Kent",parent:"King Lear",size:127},{id:"Edgar",parent:"King Lear",size:98},{id:"Edmund",parent:"King Lear",size:79},{id:"Goneril",parent:"King Lear",size:53},{id:"King of France",parent:"King Lear",size:5},{id:"Lear",parent:"King Lear",size:188},{id:"Oswald",parent:"King Lear",size:38},{id:"Regan",parent:"King Lear",size:73},{id:"The Tragedy Of Macbeth",parent:"Tragedies",size:null},{id:"Angus",parent:"The Tragedy Of Macbeth",size:4},{id:"Banquo",parent:"The Tragedy Of Macbeth",size:33},{id:"Caithness",parent:"The Tragedy Of Macbeth",size:3},{id:"Donalbain",parent:"The Tragedy Of Macbeth",size:3},{id:"Duncan",parent:"The Tragedy Of Macbeth",size:18},{id:"Fleance",parent:"The Tragedy Of Macbeth",size:2},{id:"Hecate",parent:"The Tragedy Of Macbeth",size:2},{id:"Lady Macbeth",parent:"The Tragedy Of Macbeth",size:59},{id:"Lady Macduff",parent:"The Tragedy Of Macbeth",size:19},{id:"Lennox",parent:"The Tragedy Of Macbeth",size:21},{id:"Macbeth",parent:"The Tragedy Of Macbeth",size:146},{id:"Macduff",parent:"The Tragedy Of Macbeth",size:59},{id:"Malcolm",parent:"The Tragedy Of Macbeth",size:40},{id:"Menteith",parent:"The Tragedy Of Macbeth",size:5},{id:"Porter",parent:"The Tragedy Of Macbeth",size:4},{id:"Ross",parent:"The Tragedy Of Macbeth",size:39},{id:"Seyton",parent:"The Tragedy Of Macbeth",size:5},{id:"Siward",parent:"The Tragedy Of Macbeth",size:11},{id:"Son (Macduff's son)",parent:"The Tragedy Of Macbeth",size:14},{id:"Young Siward",parent:"The Tragedy Of Macbeth",size:4},{id:"The Tragedy Of Othello",parent:"Tragedies",size:null},{id:"Bianca (Mistress to Cassio)",parent:"The Tragedy Of Othello",size:15},{id:"Brabantio",parent:"The Tragedy Of Othello",size:30},{id:"Cassio",parent:"The Tragedy Of Othello",size:110},{id:"Desdemona",parent:"The Tragedy Of Othello",size:165},{id:"Duke of Venice",parent:"The Tragedy Of Othello",size:25},{id:"Emilia",parent:"The Tragedy Of Othello",size:103},{id:"Gratiano (Brother to Brabantio)",parent:"The Tragedy Of Othello",size:20},{id:"Iago",parent:"The Tragedy Of Othello",size:272},{id:"Lodovico",parent:"The Tragedy Of Othello",size:33},{id:"Montano",parent:"The Tragedy Of Othello",size:24},{id:"Othello",parent:"The Tragedy Of Othello",size:274},{id:"Roderigo",parent:"The Tragedy Of Othello",size:59},{id:"Romeo And Juliet",parent:"Tragedies",size:null},{id:"Abraham",parent:"Romeo And Juliet",size:5},{id:"Balthasar (Servant to Romeo)",parent:"Romeo And Juliet",size:12},{id:"Benvolio",parent:"Romeo And Juliet",size:64},{id:"Capulet",parent:"Romeo And Juliet",size:51},{id:"Friar John",parent:"Romeo And Juliet",size:4},{id:"Friar Laurence",parent:"Romeo And Juliet",size:55},{id:"Gregory",parent:"Romeo And Juliet",size:15},{id:"Juliet",parent:"Romeo And Juliet",size:118},{id:"Lady Capulet",parent:"Romeo And Juliet",size:45},{id:"Lady Montague",parent:"Romeo And Juliet",size:2},{id:"Mercutio",parent:"Romeo And Juliet",size:62},{id:"Montague",parent:"Romeo And Juliet",size:10},{id:"Paris",parent:"Romeo And Juliet",size:23},{id:"Peter (Servant to Juliet's Nurse)",parent:"Romeo And Juliet",size:13},{id:"Prince Escalus",parent:"Romeo And Juliet",size:16},{id:"Romeo",parent:"Romeo And Juliet",size:163},{id:"Sampson",parent:"Romeo And Juliet",size:20},{id:"Tybalt",parent:"Romeo And Juliet",size:17}];i.default=r},znep:function(e,i,n){"use strict";var r=n("oeoV"),a=n("ZOE4"),t=n("5RFG"),s=n("4MDm");i.a=function(){var e=a.a,i=!1,n=1,o=1,d=[0],u=s.a,p=s.a,l=s.a,h=s.a,c=s.a;function f(e){return e.x0=e.y0=0,e.x1=n,e.y1=o,e.eachBefore(z),d=[0],i&&e.eachBefore(r.a),e}function z(i){var n=d[i.depth],r=i.x0+n,a=i.y0+n,t=i.x1-n,s=i.y1-n;t<r&&(r=t=(r+t)/2),s<a&&(a=s=(a+s)/2),i.x0=r,i.y0=a,i.x1=t,i.y1=s,i.children&&(n=d[i.depth+1]=u(i)/2,r+=c(i)-n,a+=p(i)-n,(t-=l(i)-n)<r&&(r=t=(r+t)/2),(s-=h(i)-n)<a&&(a=s=(a+s)/2),e(i,r,a,t,s))}return f.round=function(e){return arguments.length?(i=!!e,f):i},f.size=function(e){return arguments.length?(n=+e[0],o=+e[1],f):[n,o]},f.tile=function(i){return arguments.length?(e=Object(t.b)(i),f):e},f.padding=function(e){return arguments.length?f.paddingInner(e).paddingOuter(e):f.paddingInner()},f.paddingInner=function(e){return arguments.length?(u="function"===typeof e?e:Object(s.b)(+e),f):u},f.paddingOuter=function(e){return arguments.length?f.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e):f.paddingTop()},f.paddingTop=function(e){return arguments.length?(p="function"===typeof e?e:Object(s.b)(+e),f):p},f.paddingRight=function(e){return arguments.length?(l="function"===typeof e?e:Object(s.b)(+e),f):l},f.paddingBottom=function(e){return arguments.length?(h="function"===typeof e?e:Object(s.b)(+e),f):h},f.paddingLeft=function(e){return arguments.length?(c="function"===typeof e?e:Object(s.b)(+e),f):c},f}}}]);