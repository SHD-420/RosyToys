/*! For license information please see 579.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[579],{4174:(e,t,r)=>{r.d(t,{c7:()=>i,j_:()=>n,lm:()=>a});var n={PRODUCT_CREATED:{type:"success",message:"Producto creado con éxito"},PRODUCT_UPDATED:{type:"success",message:"¡Actualizó con éxito los datos del producto!"},PRODUCT_DELETED:{type:"success",message:"¡Eliminado el producto con éxito!"},CAROUSEL_IMAGE_CREATED:{type:"success",message:"¡Artículo agregado!"},CAROUSEL_IMAGE_DELETED:{type:"success",message:"¡Artículo eliminado con éxito!"},CAROUSEL_IMAGE_UPDATED:{type:"success",message:"¡Artículo actualizado con éxito!"},MANUAL_CREATED:{type:"success",message:"¡Manual creado con éxito!"},MANUAL_DELETED:{type:"success",message:"¡Manual eliminado correctamente!"},MANUAL_UPDATED:{type:"success",message:"¡Manual actualizado con éxito!"},LOGIN_SUCCESS:{type:"success",message:"¡Ingresó exitosamente!"},GENERAL_ERROR:{type:"error",message:"¡Ocurrió un error inesperado!"},INVALID_CREDENTIALS:{type:"error",message:"Verifique sus credenciales y vuelva a intentarlo."},USER_EXISTS:{type:"error",message:"Este correo electrónico ha sido tomado."}};function o(e){window.dispatchEvent(new CustomEvent("notificationreq",{detail:e}))}function a(){return{fire:o}}var i=o},5345:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(8222),o=r(7810),a={key:0},i=(0,n._)("p",{class:"my-2 text-slate-500"},"Haga clic para cambiar la imagen",-1),s=["src"],l=["onClick","disabled"],u=["onDrop"],c={class:"text-xl mb-1 text-slate-500"},d=(0,n._)("p",{class:"text-slate-500 mb-2"},"Suelta un archivo o",-1),f={inheritAttrs:!1};const p=Object.assign(f,{name:"BaseImageInput",props:{label:{type:String,required:!0},modelValue:{type:Blob,default:null},defaultSrc:{type:String,default:null},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e,t){var r=t.emit,f=e,p=(0,n.l1)(),m=Object.fromEntries(["drag","dragstart","dragend","dragover","dragenter","dragleave"].map((function(e){return[e,function(e){e.preventDefault(),e.stopPropagation()}]}))),h=(0,n.iH)(null),v=(0,n.iH)(!1);function y(e){if(e&&e.type.startsWith("image")){r("update:modelValue",e);var t=new FileReader;t.readAsDataURL(e),t.addEventListener("load",(function(e){h.value=e.target.result}))}}function g(e){var t;v.value=!1,y(null===(t=e.dataTransfer.files)||void 0===t?void 0:t[0])}function w(e){y(e.target.files[0])}function b(){r("update:modelValue",null),h.value=f.defaultSrc}return(0,n.YP)((function(){return f.modelValue}),(function(e){return e&&y(e)})),function(t,r){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.wy)((0,n._)("input",{type:"file",ref:"inputEl",onChange:w},null,544),[[n.F8,!1]]),(0,n._)("label",{class:(0,n.C_)(["py-1 px-2 rounded-t-md text-white",e.isInvalid?"bg-red-600":"bg-amber-500"])},(0,n.zw)(e.label),3),h.value||e.defaultSrc?((0,n.wg)(),(0,n.iD)("div",a,[i,(0,n._)("img",(0,n.dG)({src:h.value||e.defaultSrc},(0,n.SU)(p),{onClick:r[0]||(r[0]=function(e){return t.$refs.inputEl.click()})}),null,16,s),(0,n._)("button",{onClick:(0,n.iM)(b,["prevent","stop"]),class:"py-1 text-amber-500 px-2 border border-amber-500 rounded-md disabled:opacity-50 mt-2",disabled:!e.modelValue}," Quita la imagen ",8,l)])):((0,n.wg)(),(0,n.iD)("div",(0,n.dG)({key:1,class:["py-8 flex flex-col items-center rounded-b-md shadow bg-slate-100 ring-slate-200",[e.isInvalid?"bg-red-50":"bg-slate-100",{"ring-2":v.value}]],onDrop:(0,n.iM)(g,["prevent","stop"]),onDragover:r[2]||(r[2]=function(e){return v.value=!0}),onDragleave:r[3]||(r[3]=function(e){return v.value=!1})},(0,n.mx)((0,n.SU)(m))),[(0,n._)("p",c,[(0,n.Wm)((0,n.SU)(o.GN),{icon:"fa fa-upload"})]),d,(0,n._)("button",{class:"text-amber-500 hover:underline",onClick:r[1]||(r[1]=(0,n.iM)((function(e){return t.$refs.inputEl.click()}),["prevent"]))}," Haga clic para navegar ")],16,u))])}}})},9579:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n=r(8222),o={class:"update-profile mx-auto my-5 px-3 px-sm-5 px-xl-0"},a=(0,n._)("h2",{class:"fw-bolder text-dark-blue"},"Edite su perfil",-1),i=(0,n._)("p",{class:"mb-5"}," Utilice el siguiente formulario para editar su perfil de administrador. ",-1);var s=r(4174),l={class:"my-4"},u={class:"form-label text-dark-blue mb-1"},c=(0,n._)("span",null,"Elige un nombre de usuario:",-1),d={key:0,class:"ms-2 text-danger"},f={class:"register-form__password-field d-md-grid"},p={class:"my-3"},m={class:"form-label text-dark-blue mb-1"},h=(0,n._)("span",null,"Cambia tu contraseña:",-1),v={key:0,class:"text-danger d-block mb-2"},y={class:"my-3"},g={class:"form-label text-dark-blue mb-1"},w=(0,n._)("span",null,"Escriba la contraseña otra vez:",-1),b={key:0,class:"text-danger d-block mb-2"},E=["disabled"],_={key:0,class:"spinner-grow spinner-grow-sm"},x={key:1};var L=r(4318),S=r(3907);r(5345);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function C(){C=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=b(i,r);if(s){if(s===c)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var c={};function d(){}function f(){}function p(){}var m={};s(m,o,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(L([])));v&&v!==t&&r.call(v,o)&&(m=v);var y=p.prototype=d.prototype=Object.create(m);function g(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(o,a,i,s){var l=u(e[o],e,a);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==k(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(d).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,s)}))}s(l.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,c;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=p,s(y,"constructor",p),s(p,"constructor",f),f.displayName=s(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(w.prototype),s(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),s(y,i,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}function D(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,o)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){D(a,n,o,i,s,"next",e)}function s(e){D(a,n,o,i,s,"throw",e)}i(void 0)}))}}const N={setup:function(e,t){var r=t.emit,o=(0,L.bK)(),a=(0,n.iH)(!1),i=(0,n.iH)([]),s=(0,S.oR)(),l=(0,n.qj)({profileImage:null,userName:s.state.auth.profile.name,password:"",passwordConfirmation:""});function u(){var e=[];l.userName.length<4&&e.push("userName"),l.password.length&&l.password.length<6&&e.push("password"),l.passwordConfirmation!==l.password&&e.push("passwordConfirmation"),i.value=e}function c(){return(c=A(C().mark((function e(){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(),i.value.length){e.next=15;break}return a.value=!0,e.prev=3,e.next=6,o.postMultipart("/api/admin/update",{name:l.userName,password:l.password,profile_image:l.profileImage});case 6:"success"===e.sent.data.message&&(o.setUser(),a.value=!1,l.password="",l.passwordConfirmation="",l.profileImage=null,r("success")),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0.response),r("error"),a.value=!1;case 15:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}return s.state.auth.profile.profile_image_url&&o.get(s.state.auth.profile.profile_image_url,{responseType:"blob"}).then((function(e){l.profileImage=e.data})),{fields:l,invalidFields:i,submitForm:function(){return c.apply(this,arguments)},isFormSending:a}}};var U=r(3744);const I={components:{UpdateProfileForm:(0,U.Z)(N,[["render",function(e,t,r,o,a,i){var s=(0,n.up)("base-image-input");return(0,n.wg)(),(0,n.iD)("form",{class:"register-form my-4",onSubmit:t[4]||(t[4]=(0,n.iM)((function(){return o.submitForm&&o.submitForm.apply(o,arguments)}),["prevent"]))},[(0,n.Wm)(s,{modelValue:o.fields.profileImage,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.fields.profileImage=e}),label:"Imagen de perfil"},null,8,["modelValue"]),(0,n._)("div",l,[(0,n._)("label",u,[c,o.invalidFields.includes("userName")?((0,n.wg)(),(0,n.iD)("small",d," Mínimo 4 caracteres. ")):(0,n.kq)("",!0)]),(0,n.wy)((0,n._)("input",{type:"text",maxlength:"12",class:(0,n.C_)(["form-control",{"is-invalid":o.invalidFields.includes("userName")}]),placeholder:"Nombre","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.fields.userName=e})},null,2),[[n.nr,o.fields.userName]])]),(0,n._)("div",f,[(0,n._)("div",p,[(0,n._)("label",m,[h,o.invalidFields.includes("password")?((0,n.wg)(),(0,n.iD)("small",v," Mínimo 6 caracteres ")):(0,n.kq)("",!0)]),(0,n.wy)((0,n._)("input",{type:"password",class:(0,n.C_)(["form-control",{"is-invalid":o.invalidFields.includes("password")}]),placeholder:"Contraseña","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.fields.password=e})},null,2),[[n.nr,o.fields.password]])]),(0,n._)("div",y,[(0,n._)("label",g,[w,o.invalidFields.includes("passwordConfirmation")?((0,n.wg)(),(0,n.iD)("small",b," Confirmación incomparable")):(0,n.kq)("",!0)]),(0,n.wy)((0,n._)("input",{type:"password",class:(0,n.C_)(["form-control",{"is-invalid":o.invalidFields.includes("passwordConfirmation")}]),placeholder:"Contraseña","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.fields.passwordConfirmation=e})},null,2),[[n.nr,o.fields.passwordConfirmation]])])]),(0,n._)("button",{class:"w-100 btn btn-primary mt-5",disabled:o.isFormSending},[o.isFormSending?((0,n.wg)(),(0,n.iD)("span",_)):((0,n.wg)(),(0,n.iD)("span",x,"Ahorrar"))],8,E)],32)}]])},setup:function(){var e=(0,s.lm)();return{notifySuccess:function(){e.fire(s.j_.MANUAL_CREATED)},notifyError:function(){e.fire(s.j_.GENERAL_ERROR)}}}},O=(0,U.Z)(I,[["render",function(e,t,r,s,l,u){var c=(0,n.up)("update-profile-form");return(0,n.wg)(),(0,n.iD)("div",o,[a,i,(0,n.Wm)(c,{onError:s.notifyError,onSuccess:s.notifySuccess},null,8,["onError","onSuccess"])])}]])}}]);