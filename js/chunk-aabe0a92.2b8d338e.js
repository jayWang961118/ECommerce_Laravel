(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aabe0a92"],{6879:function(t,e,c){"use strict";var n,s=c("8785"),a=c("5184"),r=Object(a["a"])(n||(n=Object(s["a"])(["\n    query CartItemAllQuery (\n        $visitor_id: String!\n    ) {\n        cartItems (\n            visitor_id: $visitor_id\n        ) {\n                visitor_id\n                product_id\n                product {\n                    id\n                    name\n                    slug\n                    price\n                    main_image_url\n                }\n                qty\n        }\n    }\n"])));e["a"]=r},b789:function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),s={key:0,class:""},a={class:"flex shadow-md my-10"},r={class:"w-3/4 bg-white px-10 py-10"},o={class:"flex justify-between border-b pb-8"},i={class:"font-semibold text-2xl"},l={class:"font-semibold text-2xl"},b={class:"flex mt-10 mb-5"},u={class:"font-semibold text-gray-600 text-xs uppercase w-2/5"},d={class:"font-semibold text-center text-gray-600 text-xs uppercase w-1/5"},j={class:"font-semibold text-center text-gray-600 text-xs uppercase w-1/5"},O={class:"font-semibold text-center text-gray-600 text-xs uppercase w-1/5"},h={class:"flex w-2/5"},p={class:"w-20"},m=["src"],g={class:"flex flex-col justify-between ml-4 flex-grow"},x={class:"font-bold text-sm"},f=["onClick"],v={class:"flex justify-center w-1/5"},y=Object(n["h"])("svg",{class:"fill-current text-gray-600 w-3",viewBox:"0 0 448 512"},[Object(n["h"])("path",{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"})],-1),w=["onUpdate:modelValue","onChange"],_=Object(n["h"])("svg",{class:"fill-current text-gray-600 w-3",viewBox:"0 0 448 512"},[Object(n["h"])("path",{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"})],-1),I={class:"text-center w-1/5 font-semibold text-sm"},k={class:"text-center w-1/5 font-semibold text-sm"},C=Object(n["h"])("svg",{class:"fill-current mr-2 text-indigo-600 w-4",viewBox:"0 0 448 512"},[Object(n["h"])("path",{d:"M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"})],-1),G={id:"summary",class:"w-1/4 px-8 py-10"},$={class:"font-semibold text-2xl border-b pb-8"},q={class:"flex justify-between mt-10 mb-5"},S={class:"font-semibold text-sm uppercase"},M={class:"font-semibold text-sm"},H={class:"border-t mt-8"},V={class:"flex font-semibold justify-between py-6 text-sm uppercase"},B=Object(n["h"])("span",null,"Total cost",-1),T={class:"flex justify-center"};function z(t,e,c,z,D,J){var U=Object(n["D"])("router-link"),F=Object(n["D"])("vue-feather");return t.fetching?Object(n["f"])("",!0):(Object(n["x"])(),Object(n["g"])("div",s,[Object(n["h"])("div",a,[Object(n["h"])("div",r,[Object(n["h"])("div",o,[Object(n["h"])("h1",i,Object(n["G"])(t.t("shopping_cart")),1),Object(n["h"])("h2",l,[Object(n["h"])("span",null,Object(n["G"])(t.data.cartItems.length)+" "+Object(n["G"])(t.t("items")),1)])]),Object(n["h"])("div",b,[Object(n["h"])("h3",u,Object(n["G"])(t.t("product_details")),1),Object(n["h"])("h3",d,Object(n["G"])(t.t("quantity")),1),Object(n["h"])("h3",j,Object(n["G"])(t.t("price")),1),Object(n["h"])("h3",O,Object(n["G"])(t.t("total")),1)]),Object(n["h"])("div",null,[(Object(n["x"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(t.data.cartItems,(function(e,c){return Object(n["x"])(),Object(n["g"])("div",{key:"category-link-".concat(c),class:"flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"},[Object(n["h"])("div",h,[Object(n["h"])("div",p,[Object(n["h"])("img",{class:"h-24",src:e.product.main_image_url,alt:""},null,8,m)]),Object(n["h"])("div",g,[Object(n["h"])("span",x,Object(n["G"])(e.product.name),1),Object(n["h"])("button",{type:"button",onClick:Object(n["O"])((function(c){return t.deleteCartItemOnClick(e.product.slug)}),["prevent"]),class:"font-semibold hover:text-red-500 text-gray-500 text-xs"},Object(n["G"])(t.t("remove")),9,f)])]),Object(n["h"])("div",v,[y,Object(n["N"])(Object(n["h"])("input",{class:"mx-2 border text-center w-8",type:"text","onUpdate:modelValue":function(t){return e.qty=t},onChange:function(c){return t.updateCartItemOnChange(e.product.slug,e.qty)}},null,40,w),[[n["J"],e.qty]]),_]),Object(n["h"])("span",I,"$"+Object(n["G"])(e.product.price),1),Object(n["h"])("span",k,"$"+Object(n["G"])(e.product.price*e.qty),1)])})),128))]),Object(n["k"])(U,{to:{name:"home"},class:"flex font-semibold text-indigo-600 text-sm mt-10"},{default:Object(n["M"])((function(){return[C,Object(n["j"])(" "+Object(n["G"])(t.t("continue_shopping")),1)]})),_:1})]),Object(n["h"])("div",G,[Object(n["h"])("h1",$,Object(n["G"])(t.t("order_summary")),1),Object(n["h"])("div",q,[Object(n["h"])("span",S,"Items "+Object(n["G"])(t.data.cartItems.length),1),Object(n["h"])("span",M,"$ "+Object(n["G"])(t.getTotal(t.data.cartItems)),1)]),Object(n["h"])("div",H,[Object(n["h"])("div",V,[B,Object(n["h"])("span",null,"$"+Object(n["G"])(t.getTotal(t.data.cartItems)),1)])]),Object(n["k"])(U,{to:{name:"checkout"},class:"bg-red-500 block font-semibold hover:bg-red-600 py-3 text-sm text-white uppercase w-full"},{default:Object(n["M"])((function(){return[Object(n["h"])("span",T,[Object(n["k"])(F,{class:"mr-5",type:"shopping-cart"}),Object(n["j"])(" "+Object(n["G"])(t.t("checkout")),1)])]})),_:1})])])]))}c("159b");var D,J,U=c("6879"),F=c("4edd"),A=c("091e"),E=c("47e2"),L=c("8f12"),N=c("8785"),Q=c("5184"),K=Object(Q["a"])(D||(D=Object(N["a"])(["\n    mutation DeleteCartMutation (\n        $slug: String!\n        $visitor_id: String!\n    ) {\n        deleteCart(\n            slug: $slug\n            visitor_id: $visitor_id\n        ) {\n            visitor_id\n        }\n    }\n"]))),P=K,R=Object(Q["a"])(J||(J=Object(N["a"])(["\n    mutation UpdateCartMutation (\n        $slug: String!\n        $visitor_id: String!\n        $qty: Float!\n    ) {\n        updateCart(\n            slug: $slug\n            visitor_id: $visitor_id\n            qty: $qty\n        ) {\n            visitor_id\n            product_id\n            qty\n        }\n    }\n"]))),W=R,X=Object(n["l"])({components:{"vue-feather":F["a"]},setup:function(){var t=Object(E["b"])(),e=t.t,c={},n={},s={},a=Object(A["b"])(P),r=Object(A["b"])(W);localStorage.getItem(L["b"])&&(c={visitor_id:localStorage.getItem(L["b"])});var o=Object(A["c"])({query:U["a"],variables:c}),i=function(t){var e=0;return t.forEach((function(t){e+=t.product.price*t.qty})),e},l=function(t){localStorage.getItem(L["b"])&&(n={visitor_id:localStorage.getItem(L["b"]),slug:t},a.executeMutation(n).then((function(t){console.log(t)})))},b=function(t,e){localStorage.getItem(L["b"])&&(s={visitor_id:localStorage.getItem(L["b"]),slug:t,qty:parseFloat(e)},console.log(s),r.executeMutation(s).then((function(t){console.log(t)})))};return{t:e,getTotal:i,fetching:o.fetching,data:o.data,error:o.error,deleteCartItemOnClick:l,updateCartItemOnChange:b}}}),Y=c("6b0d"),Z=c.n(Y);const tt=Z()(X,[["render",z]]);e["default"]=tt}}]);
//# sourceMappingURL=chunk-aabe0a92.2b8d338e.js.map