(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45fd7be6"],{"428f":function(t,e,r){var n=r("da84");t.exports=n},"746f":function(t,e,r){var n=r("428f"),i=r("1a2d"),o=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||c(e,t,{value:o.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),c=r("2ba4"),a=r("c65b"),s=r("e330"),u=r("c430"),f=r("83ab"),l=r("4930"),b=r("d039"),d=r("1a2d"),p=r("e8b5"),g=r("1626"),v=r("861d"),h=r("3a9b"),m=r("d9b5"),O=r("825a"),j=r("7b0b"),y=r("fc6a"),w=r("a04b"),x=r("577e"),S=r("5c6c"),k=r("7c73"),P=r("df75"),$=r("241c"),G=r("057f"),J=r("7418"),N=r("06cf"),A=r("9bf2"),C=r("d1e7"),E=r("f36a"),T=r("6eeb"),q=r("5692"),z=r("f772"),D=r("d012"),F=r("90e3"),Q=r("b622"),I=r("e538"),R=r("746f"),_=r("d44e"),B=r("69f3"),H=r("b727").forEach,K=z("hidden"),L="Symbol",M="prototype",U=Q("toPrimitive"),V=B.set,W=B.getterFor(L),X=Object[M],Y=i.Symbol,Z=Y&&Y[M],tt=i.TypeError,et=i.QObject,rt=o("JSON","stringify"),nt=N.f,it=A.f,ot=G.f,ct=C.f,at=s([].push),st=q("symbols"),ut=q("op-symbols"),ft=q("string-to-symbol-registry"),lt=q("symbol-to-string-registry"),bt=q("wks"),dt=!et||!et[M]||!et[M].findChild,pt=f&&b((function(){return 7!=k(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=nt(X,e);n&&delete X[e],it(t,e,r),n&&t!==X&&it(X,e,n)}:it,gt=function(t,e){var r=st[t]=k(Z);return V(r,{type:L,tag:t,description:e}),f||(r.description=e),r},vt=function(t,e,r){t===X&&vt(ut,e,r),O(t);var n=w(e);return O(r),d(st,n)?(r.enumerable?(d(t,K)&&t[K][n]&&(t[K][n]=!1),r=k(r,{enumerable:S(0,!1)})):(d(t,K)||it(t,K,S(1,{})),t[K][n]=!0),pt(t,n,r)):it(t,n,r)},ht=function(t,e){O(t);var r=y(e),n=P(r).concat(wt(r));return H(n,(function(e){f&&!a(Ot,r,e)||vt(t,e,r[e])})),t},mt=function(t,e){return void 0===e?k(t):ht(k(t),e)},Ot=function(t){var e=w(t),r=a(ct,this,e);return!(this===X&&d(st,e)&&!d(ut,e))&&(!(r||!d(this,e)||!d(st,e)||d(this,K)&&this[K][e])||r)},jt=function(t,e){var r=y(t),n=w(e);if(r!==X||!d(st,n)||d(ut,n)){var i=nt(r,n);return!i||!d(st,n)||d(r,K)&&r[K][n]||(i.enumerable=!0),i}},yt=function(t){var e=ot(y(t)),r=[];return H(e,(function(t){d(st,t)||d(D,t)||at(r,t)})),r},wt=function(t){var e=t===X,r=ot(e?ut:y(t)),n=[];return H(r,(function(t){!d(st,t)||e&&!d(X,t)||at(n,st[t])})),n};if(l||(Y=function(){if(h(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?x(arguments[0]):void 0,e=F(t),r=function(t){this===X&&a(r,ut,t),d(this,K)&&d(this[K],e)&&(this[K][e]=!1),pt(this,e,S(1,t))};return f&&dt&&pt(X,e,{configurable:!0,set:r}),gt(e,t)},Z=Y[M],T(Z,"toString",(function(){return W(this).tag})),T(Y,"withoutSetter",(function(t){return gt(F(t),t)})),C.f=Ot,A.f=vt,N.f=jt,$.f=G.f=yt,J.f=wt,I.f=function(t){return gt(Q(t),t)},f&&(it(Z,"description",{configurable:!0,get:function(){return W(this).description}}),u||T(X,"propertyIsEnumerable",Ot,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Y}),H(P(bt),(function(t){R(t)})),n({target:L,stat:!0,forced:!l},{for:function(t){var e=x(t);if(d(ft,e))return ft[e];var r=Y(e);return ft[e]=r,lt[r]=e,r},keyFor:function(t){if(!m(t))throw tt(t+" is not a symbol");if(d(lt,t))return lt[t]},useSetter:function(){dt=!0},useSimple:function(){dt=!1}}),n({target:"Object",stat:!0,forced:!l,sham:!f},{create:mt,defineProperty:vt,defineProperties:ht,getOwnPropertyDescriptor:jt}),n({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:yt,getOwnPropertySymbols:wt}),n({target:"Object",stat:!0,forced:b((function(){J.f(1)}))},{getOwnPropertySymbols:function(t){return J.f(j(t))}}),rt){var xt=!l||b((function(){var t=Y();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));n({target:"JSON",stat:!0,forced:xt},{stringify:function(t,e,r){var n=E(arguments),i=e;if((v(e)||void 0!==t)&&!m(t))return p(e)||(e=function(t,e){if(g(i)&&(e=a(i,this,t,e)),!m(e))return e}),n[1]=e,c(rt,null,n)}})}if(!Z[U]){var St=Z.valueOf;T(Z,U,(function(t){return a(St,this)}))}_(Y,L),D[K]=!0},d2f1:function(t,e,r){"use strict";r.r(e);r("b0c0"),r("a4d3"),r("e01a");var n=r("7a23"),i={key:0,class:""},o={class:"px-10 mt-5 w-full mx-auto"},c={key:0,class:"w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left"},a={class:"md:flex items-center -mx-10"},s=Object(n["h"])("div",{class:"w-full md:w-1/2 px-10 mb-10 md:mb-0"},[Object(n["h"])("div",{class:"relative"},[Object(n["h"])("img",{src:"https://pngimg.com/uploads/raincoat/raincoat_PNG53.png",class:"w-full relative z-10",alt:""}),Object(n["h"])("div",{class:"border-4 border-red-200 absolute top-10 bottom-10 left-10 right-10 z-0"})])],-1),u={class:"w-full md:w-1/2 px-10"},f={class:"mb-10"},l={class:"font-bold uppercase text-2xl mb-5"},b={class:"text-sm"},d={class:"inline-block align-bottom mr-5"},p=Object(n["h"])("span",{class:"text-2xl leading-none align-baseline"},"$",-1),g={class:"font-bold text-5xl leading-none align-baseline"},v={class:"inline-block align-bottom"};function h(t,e,r,h,m,O){var j=Object(n["D"])("AddToCart");return t.fetching?Object(n["f"])("",!0):(Object(n["x"])(),Object(n["g"])("div",i,[Object(n["h"])("section",o,[t.fetching?Object(n["f"])("",!0):(Object(n["x"])(),Object(n["g"])("div",c,[Object(n["h"])("div",a,[s,Object(n["h"])("div",u,[Object(n["h"])("div",f,[Object(n["h"])("h1",l,Object(n["G"])(t.data.product.name),1),Object(n["h"])("p",b,Object(n["G"])(t.data.product.description),1)]),Object(n["h"])("div",null,[Object(n["h"])("div",d,[p,Object(n["h"])("span",g,Object(n["G"])(t.data.product.price),1)]),Object(n["h"])("div",v,[Object(n["k"])(j,{slug:t.data.product.slug},null,8,["slug"])])])])])]))])]))}var m,O=r("95d6"),j=r("091e"),y=r("47e2"),w=r("8785"),x=r("5184"),S=Object(x["a"])(m||(m=Object(w["a"])(["\n    query ProductQuery ($slug: String!) {\n        product(slug: $slug) {\n            id\n            name\n            slug\n            price\n            description\n        }\n    }\n"]))),k=S,P=r("6c02"),$=Object(n["l"])({components:{AddToCart:O["a"]},setup:function(){var t=Object(y["b"])(),e=t.t,r=Object(P["d"])(),i=Object(n["A"])(r.currentRoute.value.params.slug),o=Object(j["c"])({query:k,variables:{slug:i.value}});return{t:e,slug:i,fetching:o.fetching,data:o.data,error:o.error}}}),G=r("6b0d"),J=r.n(G);const N=J()($,[["render",h]]);e["default"]=N},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),c=r("e330"),a=r("1a2d"),s=r("1626"),u=r("3a9b"),f=r("577e"),l=r("9bf2").f,b=r("e893"),d=o.Symbol,p=d&&d.prototype;if(i&&s(d)&&(!("description"in p)||void 0!==d().description)){var g={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=u(p,this)?new d(t):void 0===t?d():d(t);return""===t&&(g[e]=!0),e};b(v,d),v.prototype=p,p.constructor=v;var h="Symbol(test)"==String(d("test")),m=c(p.toString),O=c(p.valueOf),j=/^Symbol\((.*)\)[^)]+$/,y=c("".replace),w=c("".slice);l(p,"description",{configurable:!0,get:function(){var t=O(this),e=m(t);if(a(g,t))return"";var r=h?w(e,7,-1):y(e,j,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:v})}},e538:function(t,e,r){var n=r("b622");e.f=n}}]);
//# sourceMappingURL=chunk-45fd7be6.ab40e926.js.map