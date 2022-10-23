"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[296],{752:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(8222);const n={name:"BaseTextField",props:{modelValue:{type:String,default:""},label:{type:String,default:""},isTextArea:{type:Boolean,default:!1},type:{type:String,default:"text"},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e){var t=e.isTextArea?"textarea":"input",a=(0,l.iH)(!1);return function(n,o){return(0,l.wg)(),(0,l.iD)("div",{class:(0,l.C_)(["grid rounded-md border-t border-b-2 px-4 py-1",e.isInvalid?"border-red-600 bg-red-50":"border-amber-500 bg-slate-100"])},[((0,l.wg)(),(0,l.j4)((0,l.LL)((0,l.SU)(t)),{rows:"5",value:e.modelValue,onInput:o[0]||(o[0]=function(e){return n.$emit("update:modelValue",e.target.value)}),type:e.type,class:"row-start-1 col-start-1 bg-transparent focus:outline-none resize-none",onFocus:o[1]||(o[1]=function(e){return a.value=!0}),onBlur:o[2]||(o[2]=function(e){return a.value=!1})},null,40,["value","type"])),(0,l._)("p",{class:(0,l.C_)([{"scale-75 -translate-y-6 -translate-x-2 opacity-100":a.value||e.modelValue.length},"pointer-events-none origin-top-left col-start-1 row-start-1 duration-200 opacity-50"])},(0,l.zw)(e.label),3)],2)}}}},7296:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var l=a(8222),n=a(752),o=["onSubmit"],r={class:"space-y-8 w-full"},s=(0,l._)("button",{class:"mt-8 bg-amber-500 text-white py-2 px-4 rounded-md"}," Send Message ",-1);const u={name:"ContactForm",setup:function(e){var t=(0,l.qj)({firstName:"",lastName:"",email:"",message:""});function a(){console.log("handling form submition")}return function(e,u){return(0,l.wg)(),(0,l.iD)("form",{onSubmit:(0,l.iM)(a,["prevent"]),class:"flex flex-col items-end"},[(0,l._)("div",r,[(0,l.Wm)(n.Z,{modelValue:t.firstName,"onUpdate:modelValue":u[0]||(u[0]=function(e){return t.firstName=e}),label:"First Name"},null,8,["modelValue"]),(0,l.Wm)(n.Z,{modelValue:t.lastName,"onUpdate:modelValue":u[1]||(u[1]=function(e){return t.lastName=e}),label:"Last Name"},null,8,["modelValue"]),(0,l.Wm)(n.Z,{modelValue:t.email,"onUpdate:modelValue":u[2]||(u[2]=function(e){return t.email=e}),label:"Email Id"},null,8,["modelValue"]),(0,l.Wm)(n.Z,{modelValue:t.message,"onUpdate:modelValue":u[3]||(u[3]=function(e){return t.message=e}),label:"Message","is-text-area":""},null,8,["modelValue"])]),s],40,o)}}};var i=a(7810),m={class:"border-y-4 border-slate-900"};const c={name:"ContactMap",setup:function(e){var t={lat:19.432608,lng:-99.133209};return function(e,a){var n=(0,l.up)("GMapMarker"),o=(0,l.up)("GMapMap");return(0,l.wg)(),(0,l.iD)("div",m,[(0,l.Wm)(o,{center:t,zoom:12,"map-type-id":"terrain",class:"w-full h-96"},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{position:t})]})),_:1})])}}};var d={class:"py-12"},p=(0,l._)("h2",{class:"max-w-xs text-2xl text-center mx-auto font-semibold mb-12"}," We Love to Hear from you, Get in Touch With Us 👋 ",-1),f={class:"flex flex-col-reverse sm:grid grid-cols-2 mx-auto gap-x-8 w-11/12 md:w-3/4 mb-12"},x={class:"grid overflow-hidden rounded-xl mt-8 sm:mt-0 bg-amber-500"},b={class:"p-8 text-white row-start-1 col-start-1 min-w-0 z-10"},g=(0,l._)("h4",{class:"text-2xl mb-8 font-semibold"}," Contact Information ",-1),v=(0,l._)("p",{class:"mb-12"}," Fill up the form and our team will get back to you within 24Hrs ",-1),w={class:"space-y-4"},y={class:"max-w-xs leading-none truncate"},h=(0,l._)("div",{class:"row-start-1 col-start-1 bg-slate-600 w-40 h-40 rounded-full self-end justify-self-end translate-x-1/4 translate-y-1/4"},null,-1);const V={name:"Contact",setup:function(e){var t=[{icon:"fa-phone",text:"(406) 555-0120"},{icon:"fa-envelope",text:"contact@anonymoustoys.com.mx"},{icon:"fa-map-location",text:"2972 Westheimer Rd. Santa Ana, Illinois 85486"}];return function(e,a){return(0,l.wg)(),(0,l.iD)("div",d,[p,(0,l._)("div",f,[(0,l._)("div",x,[(0,l._)("div",b,[g,v,(0,l._)("ul",w,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(t,(function(e,t){return(0,l._)("li",{class:"flex items-center space-x-4",key:t},[(0,l.Wm)((0,l.SU)(i.GN),{icon:e.icon,class:"text-slate-600"},null,8,["icon"]),(0,l._)("p",y,(0,l.zw)(e.text),1)])})),64))])]),h]),(0,l.Wm)(u)]),(0,l.Wm)(c)])}}}}}]);