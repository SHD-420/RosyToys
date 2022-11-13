"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[794],{794:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var l=a(8222),s=a(2201),i=a(4318),r=a(2674),c=a(3907),n=a(7810),d={key:0},o={class:"w-11/12 md:w-3/4 mx-auto py-8 sm:py-20 sm:grid grid-cols-2 gap-x-2 lg:gap-x-8"},u={class:"w-full mb-8 sm:mb-0"},m={class:"text-4xl font-semibold leading-none mb-2"},p={class:"flex space-x-2 mb-4"},b={key:0,class:"px-2 text-sm bg-red-50 text-red-600 rounded-md"},x={key:1,class:"px-2 text-sm bg-slate-100 text-slate-500 rounded-md"},v={class:"font-semibold text-2xl text-slate-600 mb-4"},f={class:"flex items-center space-x-2 mb-4"},_=(0,l._)("h4",{class:"text-xl"},"Cantidad:",-1),g={key:0,class:"flex space-x-2"},w={class:"text-xl font-semibold text-slate-500"},k=["onClick"],y={key:1,class:"px-4 py-2 bg-slate-200 rounded-md"},h={class:"mb-8"},D=(0,l._)("h4",{class:"text-xl mb-2"},"Descripción:",-1),C={key:0,class:"space-y-4"},E={key:1,class:"flex flex-col items-center pt-8 justify-center"},S=[(0,l._)("h1",{class:"text-slate-500 text-6xl font-bold mb-2"},"404",-1),(0,l._)("p",{class:"text-slate-900"},"The product could not be found",-1)],U={key:2,class:"pt-12 flex justify-center"},j=[(0,l._)("div",{class:"w-12 h-12 rounded-full border-4 border-amber-500 animate-spin border-b-transparent"},null,-1)];const M={name:"ProductDetail",setup:function(e){var t=(0,s.yj)(),a=(0,s.tv)(),M=(0,i.bK)(),q=(0,c.oR)(),z=(0,l.iH)(null),N=(0,l.iH)(!1);t.params.id&&M.get("/api/product/".concat(t.params.id)).then((function(e){var t=e.data;return z.value=t})).catch((function(e){404===e.response.status&&(N.value=!0)}));var O=(0,l.Fl)((function(){var e;return q.getters["cart/itemCount"](null===(e=z.value)||void 0===e?void 0:e.id)}));function R(){var e=z.value;e&&q.commit("cart/ADD_ONE_ITEM",{id:e.id,imgSrc:e.image_url,title:e.title,price:e.price})}function T(){R(),a.push({name:"RequestCheckout"})}return function(e,t){return z.value?((0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",o,[(0,l._)("div",u,[(0,l.Wm)(r.Z,{"is-external":"",src:z.value.image_url,alt:z.value.title,class:"w-full h-80 object-cover"},null,8,["src","alt"])]),(0,l._)("div",null,[(0,l._)("h1",m,(0,l.zw)(z.value.title),1),(0,l._)("div",p,[z.value.is_low_stock?((0,l.wg)(),(0,l.iD)("p",b," Existencias bajas ")):(0,l.kq)("",!0),z.value.is_limited_edition?((0,l.wg)(),(0,l.iD)("p",x," Edición limitada ")):(0,l.kq)("",!0)]),(0,l._)("p",v," $"+(0,l.zw)(z.value.price),1),(0,l._)("div",f,[_,(0,l.SU)(O)?((0,l.wg)(),(0,l.iD)("div",g,[(0,l._)("button",{class:"py-1 px-2 rounded-md border border-amber-500 text-amber-500 text-sm",onClick:t[0]||(t[0]=(0,l.iM)((function(e){return(0,l.SU)(q).commit("cart/REMOVE_ONE_ITEM",z.value.id)}),["stop"]))},[(0,l.Wm)((0,l.SU)(n.GN),{icon:"fa fa-minus"})]),(0,l._)("span",w,(0,l.zw)((0,l.SU)(O)),1),(0,l._)("button",{class:"py-1 px-2 rounded-md border border-amber-500 text-amber-500 text-sm",onClick:(0,l.iM)(R,["stop"])},[(0,l.Wm)((0,l.SU)(n.GN),{icon:"fa fa-plus"})],8,k)])):((0,l.wg)(),(0,l.iD)("div",y," 1 "))]),(0,l._)("div",h,[D,(0,l._)("p",null,(0,l.zw)(z.value.description),1)]),(0,l.SU)(O)?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("button",{onClick:T,class:"w-full py-2 border border-amber-500 text-amber-500 rounded-md"}," Comprar ahora "),(0,l._)("button",{class:"w-full py-2 bg-amber-500 text-white rounded-md",onClick:R}," Añadir al carrito ")]))])])])):N.value?((0,l.wg)(),(0,l.iD)("div",E,S)):((0,l.wg)(),(0,l.iD)("div",U,j))}}}}}]);