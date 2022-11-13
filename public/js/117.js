"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[117],{5047:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(8222),a=n(7810),i={key:0,class:"flex flex-col items-center"},o=(0,r.Uk)(" Mostrando "),l=(0,r.Uk)(" de "),s=(0,r.Uk)(" elementos. "),u={class:"flex space-x-4 items-center text-slate-900"},c=["disabled"],d={class:"space-x-2"},p=["disabled","onClick"],m=["disabled"];const f={name:"BasePagination",props:{paginationData:{type:Object,default:null}},emits:["refetch-requested"],setup:function(e,t){var n=t.emit,f=e,b=function(e){n("refetch-requested",e)};return function(t,n){return e.paginationData&&1!==e.paginationData.last_page?((0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("p",null,[o,(0,r._)("strong",null,(0,r.zw)(e.paginationData.per_page),1),l,(0,r._)("strong",null,(0,r.zw)(e.paginationData.total),1),s]),(0,r._)("div",u,[(0,r._)("button",{class:"rotate-180 px-4 py-2 hover:bg-slate-200 rounded-md disabled:opacity-50",onClick:n[0]||(n[0]=function(e){return t=f.paginationData.links[0].url,void b(t);var t}),disabled:1===e.paginationData.current_page},[(0,r.Wm)((0,r.SU)(a.GN),{icon:"fa-chevron-right"})],8,c),(0,r._)("div",d,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.paginationData.links.slice(1,-1),(function(t){return(0,r.wg)(),(0,r.iD)("button",{key:t.url,class:(0,r.C_)(["text-xl hover:underline",{"font-bold":t.active}]),disabled:!t.url,onClick:function(e){return b(t.url)}},(0,r.zw)(t.label)+" "+(0,r.zw)(t.label!==e.paginationData.last_page.toString()&&t.url?",":""),11,p)})),128))]),(0,r._)("button",{disabled:e.paginationData.current_page===e.paginationData.last_page,class:"px-4 py-2 hover:bg-slate-200 rounded-md disabled:opacity-50",onClick:n[1]||(n[1]=function(e){return t=f.paginationData.links.slice(-1)[0].url,void b(t);var t})},[(0,r.Wm)((0,r.SU)(a.GN),{icon:"fa-chevron-right"})],8,m)])])):(0,r.kq)("",!0)}}}},9058:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8222),a=n(3907),i=n(5047);const o={name:"ProductPagination",setup:function(e){var t=(0,a.oR)(),n=(0,r.Fl)((function(){return t.state.products.pagination})),o=function(e){t.dispatch("products/refetch",e)};return function(e,t){return(0,r.wg)(),(0,r.j4)(i.Z,{"pagination-data":(0,r.SU)(n),onRefetchRequested:o},null,8,["pagination-data"])}}}},117:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var r=n(8222),a=n(4318);function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l={class:"font-semibold text-xl mb-4"},s={class:"px-2 space-y-2"},u=["checked","onChange"];const c={name:"ProductosFiltersMultiselect",props:{options:{type:Array,required:!0},label:{type:String,required:!0},modelValue:{type:Array,default:function(){return[]}}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,a=e;return function(t,o){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h5",l,(0,r.zw)(e.label)+":",1),(0,r._)("ul",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.options,(function(t,o){return(0,r.wg)(),(0,r.iD)("li",{class:"flex items-center space-x-2",key:o},[(0,r._)("span",null,[(0,r._)("input",{type:"checkbox",class:"accent-amber-500 form-check-input",checked:e.modelValue.includes(t),onChange:function(e){return function(e){var t=a.modelValue.includes(e)?a.modelValue.filter((function(t){return t!==e})):[].concat(i(a.modelValue),[e]);n("update:modelValue",t)}(t)}},null,40,u)]),(0,r._)("span",null,(0,r.zw)(t),1)])})),128))])])}}};var d=n(7810),p=n(3907),m={class:"relative"},f={class:"flex justify-between items-center"},b=(0,r._)("h2",{class:"text-4xl font-semibold text-slate-900"}," Explore nuestros productos ",-1),g=(0,r._)("span",null,"Filtros",-1),x={class:"absolute bg-white w-full shadow-lg px-4 py-8 mt-2"},v={class:"flex justify-between"},y=(0,r._)("div",null,null,-1);const h={name:"ProductosFilters",setup:function(e){var t=(0,r.iH)(!1),n=(0,r.qj)({brand:[]}),i=(0,p.oR)();function o(){i.commit("products/SET_FILTERS",n),i.dispatch("products/refetch"),t.value=!1}function l(){n.brand=[],o()}var s=(0,a.bK)(),u=(0,r.qj)({});return s.get("/api/choices/brands").then((function(e){u.brand={label:"Marcas",options:e.data}})),function(e,a){return(0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("div",f,[b,(0,r._)("button",{class:"flex space-x-2 py-2 px-4 rounded-md text-amber-500 shadow-md items-center",onClick:a[0]||(a[0]=function(e){return t.value=!t.value})},[g,(0,r._)("span",{class:(0,r.C_)(["text-sm duration-100",{"rotate-180":t.value}])},[(0,r.Wm)((0,r.SU)(d.GN),{icon:"fa-chevron-down"})],2)])]),(0,r.wy)((0,r._)("div",x,[(0,r._)("div",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u,(function(e,t){return(0,r.wg)(),(0,r.j4)(c,{key:t,class:"mb-5",options:e.options,label:e.label,modelValue:n[t],"onUpdate:modelValue":function(e){return n[t]=e}},null,8,["options","label","modelValue","onUpdate:modelValue"])})),128)),y]),(0,r._)("div",{class:"flex justify-center space-x-2 mt-4"},[(0,r._)("button",{class:"bg-amber-500 py-2 px-4 text-white rounded",onClick:o}," Aplicar "),(0,r._)("button",{class:"btn btn-secondary ms-1 py-2 px-4 border text-amber-500 border-amber-500 rounded",onClick:l}," Borrar ")])],512),[[r.F8,t.value]])])}}};var w=n(2201),_=n(2674),k=n(8299),D={class:"text-xl font-semibold mb-2 text-center leading-none"},S={class:"mb-8 text-center"},C={key:0,class:"flex justify-center items-center space-x-4"},U=["onClick"],j={class:"text-xl font-semibold text-slate-500"},q=["onClick"],V=["onClick"],A=(0,r._)("span",null,"Añadir al carrito",-1);const E={name:"ProductosListItem",props:{id:{type:Number,required:!0},imgSrc:{type:String,required:!0},title:{type:String,required:!0},price:{type:Number,required:!0}},setup:function(e){var t=e,n=(0,r.Fl)((function(){return(0,k.T)(t.price)})),a=(0,w.tv)(),i=(0,p.oR)(),o=(0,r.Fl)((function(){return i.getters["cart/itemCount"](t.id)})),l=(0,r.IU)(t),s=function(){return i.commit("cart/ADD_ONE_ITEM",l)},u=function(){return i.commit("cart/REMOVE_ONE_ITEM",t.id)},c=function(){return a.push({name:"ProductDetail",params:{id:t.id}})};return function(t,a){return(0,r.wg)(),(0,r.iD)("div",{title:"Ver el producto",onClick:c,class:"bg-slate-100 hover:shadow-xl cursor-pointer flex flex-col items-center px-8 py-12 shadow-sm rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounde-br-md"},[(0,r.Wm)(_.Z,{isExternal:"",src:e.imgSrc,class:"w-60 h-40 object-cover mb-4 rounded"},null,8,["src"]),(0,r._)("h5",D,(0,r.zw)(e.title),1),(0,r._)("p",S,"Price: "+(0,r.zw)((0,r.SU)(n)),1),(0,r.SU)(o)?((0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("button",{class:"py-1 px-2 rounded-md border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white",onClick:(0,r.iM)(u,["stop"])},[(0,r.Wm)((0,r.SU)(d.GN),{icon:"fa fa-minus"})],8,U),(0,r._)("span",j,(0,r.zw)((0,r.SU)(o)),1),(0,r._)("button",{class:"py-1 px-2 rounded-md border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white",onClick:(0,r.iM)(s,["stop"])},[(0,r.Wm)((0,r.SU)(d.GN),{icon:"fa fa-plus"})],8,q)])):((0,r.wg)(),(0,r.iD)("button",{key:1,class:"flex justify-between w-full items-center py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-md",onClick:(0,r.iM)(s,["stop"])},[A,(0,r.Wm)((0,r.SU)(d.GN),{icon:"fa-shopping-cart"})],8,V))])}}};var N={key:0,class:"grid sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-20 py-12"},W={key:0,class:"flex space-x-4 text-xl items-center p-4 text-center justify-center bg-slate-100 text-slate-900 rounded-lg shadow-lg"},M=(0,r._)("p",null,"Lo sentimos, no se pudo encontrar ningún producto.",-1),P={key:1,class:"h-96 flex items-center justify-center"},z=[(0,r._)("div",{class:"w-12 h-12 rounded-full border-4 border-amber-500 animate-spin border-b-transparent"},null,-1)];const F={name:"ProductosList",setup:function(e){var t=(0,p.oR)(),n=(0,r.Fl)((function(){return t.state.products.data}));return function(e,t){return(0,r.SU)(n)?((0,r.wg)(),(0,r.iD)("div",N,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,r.SU)(n),(function(e){return(0,r.wg)(),(0,r.j4)(E,{key:e.id,id:e.id,imgSrc:e.image_url,price:e.price,title:e.title},null,8,["id","imgSrc","price","title"])})),128)),(0,r.SU)(n).length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",W,[(0,r.Wm)((0,r.SU)(d.GN),{icon:"fa-exclamation-triangle"}),M]))])):((0,r.wg)(),(0,r.iD)("div",P,z))}}};var I=n(9058),R={class:"w-11/12 md:w-3/4 mx-auto py-12"};const G={name:"Products",setup:function(e){return function(e,t){return(0,r.wg)(),(0,r.iD)("div",R,[(0,r.Wm)(h),(0,r.Wm)(F),(0,r.Wm)(I.Z)])}}}}}]);