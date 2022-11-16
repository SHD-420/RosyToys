/*! For license information please see 922.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[922],{5345:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(8222),o=r(7810),a={key:0},i=(0,n._)("p",{class:"my-2 text-slate-500"},"Haga clic para cambiar la imagen",-1),l=["src"],u=["onClick"],s=["onDrop"],c={class:"text-xl mb-1 text-slate-500"},d=(0,n._)("p",{class:"text-slate-500 mb-2"},"Suelta un archivo o",-1),p={inheritAttrs:!1};const f=Object.assign(p,{name:"BaseImageInput",props:{label:{type:String,required:!0},modelValue:{type:Blob,default:null},defaultSrc:{type:String,default:null},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e,t){var r=t.emit,p=e,f=(0,n.l1)(),m=Object.fromEntries(["drag","dragstart","dragend","dragover","dragenter","dragleave"].map((function(e){return[e,function(e){e.preventDefault(),e.stopPropagation()}]}))),h=(0,n.iH)(null),b=(0,n.iH)(!1);function v(e){if(e&&e.type.startsWith("image")){r("update:modelValue",e);var t=new FileReader;t.readAsDataURL(e),t.addEventListener("load",(function(e){h.value=e.target.result}))}}function y(e){var t;b.value=!1,v(null===(t=e.dataTransfer.files)||void 0===t?void 0:t[0])}function g(e){v(e.target.files[0])}function w(){r("update:modelValue",null),h.value=p.defaultSrc}return(0,n.YP)((function(){return p.modelValue}),(function(e){e?v(e):h.value=p.defaultSrc})),function(t,r){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.wy)((0,n._)("input",{type:"file",ref:"inputEl",onChange:g},null,544),[[n.F8,!1]]),(0,n._)("label",{class:(0,n.C_)(["py-1 px-2 rounded-t-md text-white",e.isInvalid?"bg-red-600":"bg-amber-500"])},(0,n.zw)(e.label),3),h.value||e.defaultSrc?((0,n.wg)(),(0,n.iD)("div",a,[i,(0,n._)("img",(0,n.dG)({src:h.value||e.defaultSrc},(0,n.SU)(f),{onClick:r[0]||(r[0]=function(e){return t.$refs.inputEl.click()})}),null,16,l),e.modelValue?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:(0,n.iM)(w,["prevent","stop"]),class:"py-1 text-amber-500 px-2 border border-amber-500 rounded-md mt-2"}," Quita la imagen ",8,u)):(0,n.kq)("",!0)])):((0,n.wg)(),(0,n.iD)("div",(0,n.dG)({key:1,class:["py-8 flex flex-col items-center rounded-b-md shadow bg-slate-100 ring-slate-200",[e.isInvalid?"bg-red-50":"bg-slate-100",{"ring-2":b.value}]],onDrop:(0,n.iM)(y,["prevent","stop"]),onDragover:r[2]||(r[2]=function(e){return b.value=!0}),onDragleave:r[3]||(r[3]=function(e){return b.value=!1})},(0,n.mx)((0,n.SU)(m))),[(0,n._)("p",c,[(0,n.Wm)((0,n.SU)(o.GN),{icon:"fa fa-upload"})]),d,(0,n._)("button",{class:"text-amber-500 hover:underline",onClick:r[1]||(r[1]=(0,n.iM)((function(e){return t.$refs.inputEl.click()}),["prevent"]))}," Haga clic para navegar ")],16,s))])}}})},6846:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(8222),o=r(7810),a={key:0,class:"z-20 bg-white my-8 shadow-xl rounded-md overflow-hidden max-w-lg h-max"},i={class:"flex justify-end"};const l={name:"BaseModal",props:{shouldShow:{type:Boolean,default:!1}},emits:["close"],setup:function(e,t){var r=t.emit,l=e,u=(0,n.iH)(!1),s=(0,n.iH)(0);return(0,n.YP)((function(){return l.shouldShow}),(function(e){e&&(s.value=document.body.scrollHeight)})),function(t,l){return(0,n.wg)(),(0,n.j4)(n.lR,{to:"#app-modals"},[(0,n.Wm)(n.uT,{name:"modal",onAfterEnter:l[2]||(l[2]=function(e){return u.value=!0})},{default:(0,n.w5)((function(){return[e.shouldShow?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"bg-gradient-to-b from-transparent to-slate-100 grid w-full justify-center z-10",style:(0,n.j5)({height:"".concat(s.value,"px")})},[(0,n.Wm)(n.uT,{name:"modal",onAfterLeave:l[1]||(l[1]=function(e){return r("close")})},{default:(0,n.w5)((function(){return[u.value?((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",i,[(0,n._)("button",{class:"text-xl text-slate-900 p-4",onClick:l[0]||(l[0]=function(e){return u.value=!1})},[(0,n.Wm)((0,n.SU)(o.GN),{icon:"fa fa-times"})])]),(0,n.WI)(t.$slots,"default")])):(0,n.kq)("",!0)]})),_:3})],4)):(0,n.kq)("",!0)]})),_:3})])}}}},5047:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(8222),o=r(7810),a={key:0,class:"flex flex-col items-center"},i=(0,n.Uk)(" Mostrando "),l=(0,n.Uk)(" de "),u=(0,n.Uk)(" elementos. "),s={class:"flex space-x-4 items-center text-slate-900"},c=["disabled"],d={class:"space-x-2"},p=["disabled","onClick"],f=["disabled"];const m={name:"BasePagination",props:{paginationData:{type:Object,default:null}},emits:["refetch-requested"],setup:function(e,t){var r=t.emit,m=e,h=function(e){r("refetch-requested",e)};return function(t,r){return e.paginationData&&1!==e.paginationData.last_page?((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("p",null,[i,(0,n._)("strong",null,(0,n.zw)(e.paginationData.per_page),1),l,(0,n._)("strong",null,(0,n.zw)(e.paginationData.total),1),u]),(0,n._)("div",s,[(0,n._)("button",{class:"rotate-180 px-4 py-2 hover:bg-slate-200 rounded-md disabled:opacity-50",onClick:r[0]||(r[0]=function(e){return t=m.paginationData.links[0].url,void h(t);var t}),disabled:1===e.paginationData.current_page},[(0,n.Wm)((0,n.SU)(o.GN),{icon:"fa-chevron-right"})],8,c),(0,n._)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.paginationData.links.slice(1,-1),(function(t){return(0,n.wg)(),(0,n.iD)("button",{key:t.url,class:(0,n.C_)(["text-xl hover:underline",{"font-bold":t.active}]),disabled:!t.url,onClick:function(e){return h(t.url)}},(0,n.zw)(t.label)+" "+(0,n.zw)(t.label!==e.paginationData.last_page.toString()&&t.url?",":""),11,p)})),128))]),(0,n._)("button",{disabled:e.paginationData.current_page===e.paginationData.last_page,class:"px-4 py-2 hover:bg-slate-200 rounded-md disabled:opacity-50",onClick:r[1]||(r[1]=function(e){return t=m.paginationData.links.slice(-1)[0].url,void h(t);var t})},[(0,n.Wm)((0,n.SU)(o.GN),{icon:"fa-chevron-right"})],8,f)])])):(0,n.kq)("",!0)}}}},752:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8222);const o={name:"BaseTextField",props:{modelValue:{type:String,default:""},label:{type:String,default:""},isTextArea:{type:Boolean,default:!1},type:{type:String,default:"text"},min:{type:Number,default:null},max:{type:Number,default:null},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e){var t=e.isTextArea?"textarea":"input",r=(0,n.iH)(!1);return function(o,a){return(0,n.wg)(),(0,n.iD)("div",{class:(0,n.C_)(["grid rounded-md border-t border-b-2 px-4 py-1",e.isInvalid?"border-red-600 bg-red-50":"border-amber-500 bg-slate-100"])},[((0,n.wg)(),(0,n.j4)((0,n.LL)((0,n.SU)(t)),{rows:"5",class:"row-start-1 col-start-1 bg-transparent focus:outline-none resize-none",type:e.type,minlength:e.min,maxlength:e.max,value:e.modelValue,onInput:a[0]||(a[0]=function(e){return o.$emit("update:modelValue",e.target.value)}),onFocus:a[1]||(a[1]=function(e){return r.value=!0}),onBlur:a[2]||(a[2]=function(e){return r.value=!1})},null,40,["type","minlength","maxlength","value"])),(0,n._)("p",{class:(0,n.C_)([{"scale-75 -translate-y-6 -translate-x-2 opacity-100":r.value||e.modelValue.length},"pointer-events-none origin-top-left col-start-1 row-start-1 duration-200 opacity-50"])},(0,n.zw)(e.label),3)],2)}}}},9058:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(8222),o=r(3907),a=r(5047);const i={name:"ProductPagination",setup:function(e){var t=(0,o.oR)(),r=(0,n.Fl)((function(){return t.state.products.pagination})),i=function(e){t.dispatch("products/refetch",e)};return function(e,t){return(0,n.wg)(),(0,n.j4)(a.Z,{"pagination-data":(0,n.SU)(r),onRefetchRequested:i},null,8,["pagination-data"])}}}},4922:(e,t,r)=>{r.r(t),r.d(t,{default:()=>He});var n=r(8222),o=r(2201),a=r(3907),i={class:"flex bg-slate-100 px-4 py-2 rounded-md focus-within:ring-2 ring-amber-500 items-center"},l=["onInput"],u={class:"w-4 h-4 border-2 border-b-transparent border-amber-500 rounded-full animate-spin"};const s={name:"ProductSearchBox",props:{shouldRedirectOnSuccess:{type:Boolean,default:!1}},setup:function(e){var t=e,r=null,s=(0,o.tv)(),c=(0,a.oR)(),d=(0,n.Fl)((function(){return c.state.products.isLoading}));function p(e){var n=e.target.value;clearTimeout(r),r=setTimeout((function(){t.shouldRedirectOnSuccess&&s.push({name:"Productos"}),c.commit("products/SET_QUERY",n),c.dispatch("products/refetch")}),1e3)}return function(e,t){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("input",{type:"text",placeholder:"Búsqueda",class:"bg-transparent focus:outline-none flex-grow",onInput:(0,n.iM)(p,["stop"])},null,40,l),(0,n.wy)((0,n._)("div",u,null,512),[[n.F8,(0,n.SU)(d)]])])}}};var c=r(7810),d=r(2674),p=r(9058),f=r(752),m=r(5345),h=r(6846),b=r(4318),v=r(4174),y=["isLimitedEdition","isLowStock","isPromoted"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O=["onSubmit"],j={class:"space-y-8"},E={class:"flex space-x-4"},P={class:"grid grid-cols-2"},L={class:"flex space-x-2"},D=(0,n._)("label",null,"Limited edition",-1),U={class:"flex space-x-2"},V=(0,n._)("label",null,"Low stock",-1),N={class:"flex space-x-2"},I=(0,n._)("label",null,"Promoted",-1),C=["disabled"],R={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},W={key:1};const A={name:"AddModal",props:{shouldShow:{type:Boolean,default:!1}},emits:["update:shouldShow"],setup:function(e,t){var r=t.emit,o=(0,n.qj)({image:null,title:"",description:"",price:"",brand:"",isLimitedEdition:!1,isLowStock:!1,isPromoted:!1}),a=(0,n.qj)(new Set),i=(0,n.iH)(!1),l=(0,b.ZP)();function u(){a.clear(),Object.entries(o).forEach((function(e){var t=S(e,2),r=t[0],n=t[1];r.startsWith("is")||n||a.add(r)}));var e=parseFloat(o.price);if(isNaN(e)&&a.add("price"),!a.size){i.value=!0;var t=o.isLimitedEdition,n=o.isLowStock,u=o.isPromoted,s=_(o,y);l.postMultipart("/api/product/create",w(w({},s),{},{is_limited_edition:Number(t),is_low_stock:Number(n),is_promoted:Number(u)})).then((function(e){"success"===e.data.message&&(o.image=null,o.title="",o.price="",o.brand="",o.description="",o.isLimitedEdition=!1,o.isLowStock=!1,o.isPromoted=!1,r("update:shouldShow",!1),(0,v.c7)(v.j_.PRODUCT_CREATED))})).catch((function(e){console.log(e.response),(0,v.c7)(v.j_.GENERAL_ERROR)})).finally((function(){return i.value=!1}))}}return function(t,l){return(0,n.wg)(),(0,n.j4)(h.Z,{"should-show":e.shouldShow,onClose:l[8]||(l[8]=function(e){return r("update:shouldShow",!1)})},{default:(0,n.w5)((function(){return[(0,n._)("form",{class:"px-4 pb-8",onSubmit:(0,n.iM)(u,["prevent"])},[(0,n._)("div",j,[(0,n.Wm)(m.Z,{"is-invalid":a.has("image"),modelValue:o.image,"onUpdate:modelValue":l[0]||(l[0]=function(e){return o.image=e}),class:"w-full h-40 object-cover",label:"Product Image"},null,8,["is-invalid","modelValue"]),(0,n.Wm)(f.Z,{modelValue:o.title,"onUpdate:modelValue":l[1]||(l[1]=function(e){return o.title=e}),label:"Product Name","is-invalid":a.has("title")},null,8,["modelValue","is-invalid"]),(0,n.Wm)(f.Z,{"is-invalid":a.has("description"),modelValue:o.description,"onUpdate:modelValue":l[2]||(l[2]=function(e){return o.description=e}),label:"Description","is-text-area":""},null,8,["is-invalid","modelValue"]),(0,n._)("div",E,[(0,n.Wm)(f.Z,{"is-invalid":a.has("price"),modelValue:o.price,"onUpdate:modelValue":l[3]||(l[3]=function(e){return o.price=e}),label:"Price"},null,8,["is-invalid","modelValue"]),(0,n.Wm)(f.Z,{"is-invalid":a.has("brand"),modelValue:o.brand,"onUpdate:modelValue":l[4]||(l[4]=function(e){return o.brand=e}),label:"Brand"},null,8,["is-invalid","modelValue"])]),(0,n._)("div",P,[(0,n._)("div",L,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"accent-amber-500","onUpdate:modelValue":l[5]||(l[5]=function(e){return o.isLimitedEdition=e})},null,512),[[n.e8,o.isLimitedEdition]]),D]),(0,n._)("div",U,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"accent-amber-500","onUpdate:modelValue":l[6]||(l[6]=function(e){return o.isLowStock=e})},null,512),[[n.e8,o.isLowStock]]),V]),(0,n._)("div",N,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"accent-amber-500","onUpdate:modelValue":l[7]||(l[7]=function(e){return o.isPromoted=e})},null,512),[[n.e8,o.isPromoted]]),I])])]),(0,n._)("button",{class:"bg-amber-500 py-2 mt-8 text-white rounded-md w-full",disabled:i.value,type:"submit"},[i.value?((0,n.wg)(),(0,n.iD)("span",R)):((0,n.wg)(),(0,n.iD)("span",W," Create "))],8,C)],40,O)]})),_:1},8,["should-show"])}}};var Z={class:"px-4 pb-8 max-w-xs"},T={class:"text-slate-900 mb-8 text-center"},B=(0,n._)("p",null,"Are you sure you want to delete the product:",-1),G={class:"font-semibold"},H=["disabled"],q={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},M={key:1};const F={name:"RemoveModal",props:{shouldShow:{type:Boolean,default:!1},productId:{type:Number,default:null}},emits:["update:shouldShow"],setup:function(e,t){var r=t.emit,o=e,i=(0,a.oR)(),l=(0,n.Fl)((function(){var e,t,r;return null!==(e=null===(t=i.state.products.data)||void 0===t||null===(r=t.find((function(e){return e.id===o.productId})))||void 0===r?void 0:r.title)&&void 0!==e?e:""})),u=(0,n.iH)(!1),s=(0,b.ZP)();function c(){u.value=!0,s.authDelete("/api/product/".concat(o.productId)).then((function(e){"success"===e.data.message&&(i.dispatch("products/refetch"),r("update:shouldShow",!1),(0,v.c7)(v.j_.PRODUCT_DELETED))})).catch((function(e){console.log(e.response),(0,v.c7)(v.j_.GENERAL_ERROR)})).finally((function(){return u.value=!1}))}return function(t,o){return(0,n.wg)(),(0,n.j4)(h.Z,{shouldShow:e.shouldShow,onClose:o[0]||(o[0]=function(e){return r("update:shouldShow",!1)})},{default:(0,n.w5)((function(){return[(0,n._)("div",Z,[(0,n._)("div",T,[B,(0,n._)("p",G,'"'+(0,n.zw)((0,n.SU)(l))+'" ?',1)]),(0,n._)("button",{onClick:c,class:"bg-amber-500 py-2 text-white rounded-md w-full",disabled:u.value,type:"submit"},[u.value?((0,n.wg)(),(0,n.iD)("span",q)):((0,n.wg)(),(0,n.iD)("span",M," Yes "))],8,H)])]})),_:1},8,["shouldShow"])}}};function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}var Y=["isLimitedEdition","isLowStock","isPromoted"];function $(){$=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=w(i,r);if(l){if(l===c)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===c)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var c={};function d(){}function p(){}function f(){}var m={};l(m,o,(function(){return this}));var h=Object.getPrototypeOf,b=h&&h(h(k([])));b&&b!==t&&r.call(b,o)&&(m=b);var v=f.prototype=d.prototype=Object.create(m);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){function n(o,a,i,l){var u=s(e[o],e,a);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==z(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(d).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,l)}))}l(u.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,c;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=f,l(v,"constructor",f),l(f,"constructor",p),p.displayName=l(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(g.prototype),l(g.prototype,a,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new g(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(v),l(v,i,"Generator"),l(v,o,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}function K(e,t,r,n,o,a,i){try{var l=e[a](i),u=l.value}catch(e){return void r(e)}l.done?t(u):Promise.resolve(u).then(n,o)}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ee(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return re(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ne={key:0,class:"py-8 flex justify-center w-80"},oe=[(0,n._)("div",{class:"w-8 h-8 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"},null,-1)],ae=["onSubmit"],ie={class:"space-y-8"},le={class:"flex space-x-4"},ue={class:"grid grid-cols-2"},se={class:"flex space-x-2"},ce=(0,n._)("label",null,"Limited edition",-1),de={class:"flex space-x-2"},pe=(0,n._)("label",null,"Low stock",-1),fe={class:"flex space-x-2"},me=(0,n._)("label",null,"Promoted",-1),he=["disabled"],be={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},ve={key:1};const ye={name:"EditModal",props:{shouldShow:{type:Boolean,default:!1},productId:{type:Number,default:null}},emits:["update:shouldShow"],setup:function(e,t){var r=t.emit,o=e,i=null,l=(0,n.qj)({image:null,title:"",description:"",price:"",brand:"",isLimitedEdition:!1,isLowStock:!1,isPromoted:!1}),u=(0,n.iH)(!1),s=(0,n.iH)(!1),c=(0,n.iH)(null),d=(0,n.qj)(new Set),p=(0,b.ZP)(),y=(0,a.oR)();function g(){d.clear(),Object.entries(l).forEach((function(e){var t=te(e,2),r=t[0],n=t[1];"image"===r||r.startsWith("is")||n||d.add(r)}));var e=parseFloat(l.price);if(isNaN(e)&&d.add("price"),!d.size){s.value=!0;var t=l.isLimitedEdition,n=l.isLowStock,a=l.isPromoted,u=ee(l,Y);p.postMultipart("/api/product/update/".concat(o.productId),J(J({},u),{},{is_limited_edition:Number(t),is_low_stock:Number(n),is_promoted:Number(a)})).then((function(e){"success"===e.data.message&&(i=null,y.dispatch("products/refetch"),r("update:shouldShow",!1),(0,v.c7)(v.j_.PRODUCT_UPDATED))})).catch((function(e){console.log(e.response),(0,v.c7)(v.j_.GENERAL_ERROR)})).finally((function(){return s.value=!1}))}}return(0,n.YP)((function(){return o.shouldShow}),function(){var e,t=(e=$().mark((function e(t){var r,n;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i!==o.productId){e.next=2;break}return e.abrupt("return");case 2:if(!t){e.next=18;break}return u.value=!0,e.next=6,p.get("/api/product/".concat(o.productId));case 6:r=e.sent,n=r.data,l.title=n.title,l.description=n.description,l.price=String(n.price),l.brand=n.brand,l.isLimitedEdition=Boolean(n.is_limited_edition),l.isLowStock=Boolean(n.is_low_stock),l.isPromoted=Boolean(n.is_promoted),c.value=n.image_url,u.value=!1,i=o.productId;case 18:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){K(a,n,o,i,l,"next",e)}function l(e){K(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),function(t,o){return(0,n.wg)(),(0,n.j4)(h.Z,{"should-show":e.shouldShow,onClose:o[8]||(o[8]=function(e){return r("update:shouldShow",!1)})},{default:(0,n.w5)((function(){return[u.value?((0,n.wg)(),(0,n.iD)("div",ne,oe)):((0,n.wg)(),(0,n.iD)("form",{key:1,class:"px-4 pb-8",onSubmit:(0,n.iM)(g,["prevent"])},[(0,n._)("div",ie,[(0,n.Wm)(m.Z,{"default-src":c.value,class:"w-full h-40 object-cover",label:"Product Image",modelValue:l.image,"onUpdate:modelValue":o[0]||(o[0]=function(e){return l.image=e})},null,8,["default-src","modelValue"]),(0,n.Wm)(f.Z,{modelValue:l.title,"onUpdate:modelValue":o[1]||(o[1]=function(e){return l.title=e}),label:"Product Name"},null,8,["modelValue"]),(0,n.Wm)(f.Z,{modelValue:l.description,"onUpdate:modelValue":o[2]||(o[2]=function(e){return l.description=e}),label:"Description","is-text-area":""},null,8,["modelValue"]),(0,n._)("div",le,[(0,n.Wm)(f.Z,{modelValue:l.price,"onUpdate:modelValue":o[3]||(o[3]=function(e){return l.price=e}),label:"Price"},null,8,["modelValue"]),(0,n.Wm)(f.Z,{modelValue:l.brand,"onUpdate:modelValue":o[4]||(o[4]=function(e){return l.brand=e}),label:"Brand"},null,8,["modelValue"])])]),(0,n._)("div",ue,[(0,n._)("div",se,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"accent-amber-500","onUpdate:modelValue":o[5]||(o[5]=function(e){return l.isLimitedEdition=e})},null,512),[[n.e8,l.isLimitedEdition]]),ce]),(0,n._)("div",de,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"accent-amber-500","onUpdate:modelValue":o[6]||(o[6]=function(e){return l.isLowStock=e})},null,512),[[n.e8,l.isLowStock]]),pe]),(0,n._)("div",fe,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"accent-amber-500","onUpdate:modelValue":o[7]||(o[7]=function(e){return l.isPromoted=e})},null,512),[[n.e8,l.isPromoted]]),me])]),(0,n._)("button",{class:"bg-amber-500 py-2 mt-8 text-white rounded-md w-full",disabled:s.value,type:"submit"},[s.value?((0,n.wg)(),(0,n.iD)("span",be)):((0,n.wg)(),(0,n.iD)("span",ve," Update "))],8,he)],40,ae))]})),_:1},8,["should-show"])}}};var ge={class:"mt-8 py-8 w-11/12 lg:w-3/4 mx-auto bg-white rounded-md shadow"},we={class:"px-12 mb-8"},xe=(0,n._)("h4",{class:"font-semibold mb-8 text-2xl"},"Product Manager",-1),_e={class:"flex justify-end space-x-4"},Se=(0,n.Uk)(" Add "),ke=["disabled"],Oe=(0,n.Uk)(" Edit "),je=["disabled"],Ee=(0,n.Uk)(" Remove "),Pe={class:"grid mb-12"},Le=(0,n._)("div",{class:"h-16 bg-slate-200 col-start-1 row-start-1"},null,-1),De={key:0,class:"w-3/4 mx-auto col-start-1 row-start-1"},Ue=(0,n._)("tr",{class:"text-slate-900 h-16 mb-8"},[(0,n._)("th",{class:"text-left px-2 w-16"},"Id"),(0,n._)("th",{class:"text-left px-2"},"Image"),(0,n._)("th",{class:"text-left px-2"},"Name"),(0,n._)("th",{class:"text-left px-2"},"Price"),(0,n._)("th",{class:"text-left px-2"})],-1),Ve=(0,n._)("tr",{class:"h-4"},null,-1),Ne=["onClick"],Ie={class:"w-16 px-4"},Ce={key:1},Re={class:"px-2 w-24 py-2"},We={class:"px-2"},Ae={class:"px-2"},Ze={class:"px-2 py-4 space-y-2 flex flex-col items-end"},Te={key:0,class:"text-sm bg-slate-200 text-slate-500 border border-slate-500 px-2 rounded-full py-1 w-max"},Be={key:1,class:"text-sm bg-red-50 text-red-600 border border-red-600 px-2 rounded-full py-1 w-max"},Ge={key:2,class:"text-sm text-amber-500 border border-amber-500 px-2 rounded-full py-1 w-max"};const He={name:"ProductManager",setup:function(e){var t=(0,a.oR)(),r=(0,n.Fl)((function(){return t.state.products.data})),o=(0,n.iH)(null);t.watch((function(e){return e.products.data}),(function(){return o.value=null}));var i=(0,n.iH)(!1),l=(0,n.iH)(!1),u=(0,n.iH)(!1);return function(e,t){return(0,n.wg)(),(0,n.iD)("div",ge,[(0,n._)("div",we,[xe,(0,n.Wm)(s,{class:"w-full mb-8"}),(0,n._)("div",_e,[(0,n._)("button",{class:"rounded-md shadow-lg px-4 py-2 text-slate-500",onClick:t[0]||(t[0]=function(e){return i.value=!0})},[Se,(0,n.Wm)((0,n.SU)(c.GN),{icon:"fa fa-plus"})]),(0,n._)("button",{class:"rounded-md shadow-lg px-4 py-2 text-amber-500 disabled:opacity-50",disabled:null===o.value,onClick:t[1]||(t[1]=function(e){return u.value=!0})},[Oe,(0,n.Wm)((0,n.SU)(c.GN),{icon:"fa fa-pen"})],8,ke),(0,n._)("button",{class:"rounded-md shadow-lg px-4 py-2 text-red-600 disabled:opacity-50",disabled:null===o.value,onClick:t[2]||(t[2]=function(e){return l.value=!0})},[Ee,(0,n.Wm)((0,n.SU)(c.GN),{icon:"fa fa-times"})],8,je)])]),(0,n._)("div",Pe,[Le,(0,n.SU)(r)?((0,n.wg)(),(0,n.iD)("table",De,[Ue,Ve,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,n.SU)(r),(function(e,t){return(0,n.wg)(),(0,n.iD)("tr",{key:t,class:(0,n.C_)(["border-b border-amber-500 hover:bg-slate-100 cursor-pointer",{"bg-slate-100 border-transparent  rounded-lg shadow":o.value===e.id}]),onClick:function(t){return o.value=e.id}},[(0,n._)("td",Ie,[o.value===e.id?((0,n.wg)(),(0,n.j4)((0,n.SU)(c.GN),{key:0,icon:"fa fa-check-square",class:"text-slate-500"})):((0,n.wg)(),(0,n.iD)("span",Ce,(0,n.zw)(e.id),1))]),(0,n._)("td",Re,[(0,n.Wm)(d.Z,{src:e.image_url,"is-external":"",class:"w-full h-24 mx-auto object-cover"},null,8,["src"])]),(0,n._)("td",We,(0,n.zw)(e.title),1),(0,n._)("td",Ae,"$"+(0,n.zw)(e.price),1),(0,n._)("td",Ze,[e.is_limited_edition?((0,n.wg)(),(0,n.iD)("p",Te," Limited Edition ")):(0,n.kq)("",!0),e.is_low_stock?((0,n.wg)(),(0,n.iD)("p",Be," Low stock ")):(0,n.kq)("",!0),e.is_promoted?((0,n.wg)(),(0,n.iD)("p",Ge," Promoted ")):(0,n.kq)("",!0)])],10,Ne)})),128))])):(0,n.kq)("",!0)]),(0,n.Wm)(p.Z),(0,n.Wm)(A,{shouldShow:i.value,"onUpdate:shouldShow":t[3]||(t[3]=function(e){return i.value=e})},null,8,["shouldShow"]),(0,n.Wm)(F,{shouldShow:l.value,"onUpdate:shouldShow":t[4]||(t[4]=function(e){return l.value=e}),"product-id":o.value},null,8,["shouldShow","product-id"]),(0,n.Wm)(ye,{"should-show":u.value,"onUpdate:should-show":t[5]||(t[5]=function(e){return u.value=e}),"product-id":o.value},null,8,["should-show","product-id"])])}}}}}]);