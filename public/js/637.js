/*! For license information please see 637.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[637],{9637:(t,r,e)=>{e.r(r),e.d(r,{default:()=>at});var n=e(8222),o={class:"admin-layout"},a={class:"border mx-2 mx-sm-5 my-2"},i={class:"border-bottom d-none d-lg-flex"},u={class:"flex-fill py-4 px-4 px-xl-5"},s=(0,n._)("h2",{class:"fw-bolder lh-1"},"Panel de administración",-1),l={class:"text-primary"},c=(0,n.Uk)(" Ir a casa "),f=(0,n.Uk)(" Registrar un nuevo administrador "),d={key:0,class:"py-4 px-3 px-xl-5 bg-secondary border-start"},p={class:"mb-0 fw-bolder"},m={class:"mb-0"},h={class:"mb-0 mt-2"},y=(0,n.Uk)(" Editar "),v=(0,n._)("div",{class:"d-lg-none py-2 bg-primary"},null,-1);var g=(0,n.Uk)(" Acciónos: "),b={class:"bg-secondary h-100 border-end"},w={class:"py-3 pt-5 ms-xl-5"},k={class:"text-primary border-bottom border-primary pb-4 mb-0 ps-3 ps-xl-0"},_=(0,n.Uk)(),x=(0,n._)("span",null,"Productos",-1),L={class:"list-unstyled"},E=(0,n._)("div",{class:"my-3 border-top"},null,-1),P={class:"py-3 ms-xl-5"},U={class:"text-primary border-bottom border-primary pb-4 ps-3 ps-xl-0 mb-0"},D=(0,n.Uk)(),W=(0,n._)("span",null,"Manuales",-1),A={class:"list-unstyled"};const S={props:{productosLinks:{type:Array,default:function(){return[]}},manualesLinks:{type:Array,default:function(){return[]}}}};var O=e(3744);const j=(0,O.Z)(S,[["render",function(t,r,e,o,a,i){var u=(0,n.up)("router-link"),s=(0,n.up)("BIconCart3"),l=(0,n.up)("BIconFileEarmarkPdf");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(u,{class:"btn btn-primary w-100 fs-5 fw-bold py-2 text-center rounded-0",to:{name:"AdminDashboard"}},{default:(0,n.w5)((function(){return[g]})),_:1}),(0,n._)("div",b,[(0,n._)("div",w,[(0,n._)("h5",k,[(0,n.Wm)(s,{class:"me-2"}),_,x]),(0,n._)("ul",L,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.productosLinks,(function(t,r){return(0,n.wg)(),(0,n.iD)("li",{key:r},[(0,n.Wm)(u,{class:"btn py-3 px-4 w-100 text-start border-bottom","exact-active-class":"btn-primary border-bottom-0",to:{name:t.route}},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(t.name),1)]})),_:2},1032,["to"])])})),128))])]),E,(0,n._)("div",P,[(0,n._)("h5",U,[(0,n.Wm)(l,{class:"me-2"}),D,W]),(0,n._)("ul",A,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.manualesLinks,(function(t,r){return(0,n.wg)(),(0,n.iD)("li",{key:r},[(0,n.Wm)(u,{class:"btn py-3 px-4 w-100 text-start border-bottom","exact-active-class":"btn-primary border-bottom-0",to:{name:t.route}},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(t.name),1)]})),_:2},1032,["to"])])})),128))])])])])}]]);var N={class:"border-top px-5 py-4 bottom-nav"},G=(0,n._)("p",{class:"mb-1"},"Tareas de gestión:",-1),C={class:"bottom-nav__links"},I={class:"list-unstyled"},z={class:"list-unstyled"},F=(0,n._)("p",{class:"mb-1"},"Perfil de administrador:",-1),T={class:"list-unstyled"},Y={class:"mb-1"},B=(0,n.Uk)(" Editar perfil "),H={class:"mb-1"},K=(0,n.Uk)(" Borrar perfil "),M={class:"mb-1"},R=(0,n.Uk)(" Agregar un administrador "),Z={class:"my-2"},Q=(0,n.Uk)(" Ir al panel de control ");const q={props:{productosLinks:{type:Array,default:function(){return[]}},manualesLinks:{type:Array,default:function(){return[]}}}},J=(0,O.Z)(q,[["render",function(t,r,e,o,a,i){var u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",N,[G,(0,n._)("div",C,[(0,n._)("ul",I,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.productosLinks,(function(t,r){return(0,n.wg)(),(0,n.iD)("li",{class:"mb-1",key:r},[(0,n.Wm)(u,{to:{name:t.route}},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(t.name),1)]})),_:2},1032,["to"])])})),128))]),(0,n._)("ul",z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.manualesLinks,(function(t,r){return(0,n.wg)(),(0,n.iD)("li",{class:"mb-1",key:r},[(0,n.Wm)(u,{to:{name:t.route}},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(t.name),1)]})),_:2},1032,["to"])])})),128))])]),(0,n._)("div",null,[F,(0,n._)("ul",T,[(0,n._)("li",Y,[(0,n.Wm)(u,{to:{name:"UpdateProfile"}},{default:(0,n.w5)((function(){return[B]})),_:1})]),(0,n._)("li",H,[(0,n.Wm)(u,{to:{name:"DeleteProfile"}},{default:(0,n.w5)((function(){return[K]})),_:1})]),(0,n._)("li",M,[(0,n.Wm)(u,{to:{name:"AdminRegister"}},{default:(0,n.w5)((function(){return[R]})),_:1})])])]),(0,n._)("p",Z,[(0,n.Wm)(u,{to:{name:"AdminDashboard"}},{default:(0,n.w5)((function(){return[Q]})),_:1})])])}]]);var V=e(3907),X=e(4318),$=e(2201);function tt(t){return tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(t)}function rt(){rt=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof f?r:f,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return E()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var u=w(i,e);if(u){if(u===c)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var s=l(t,r,e);if("normal"===s.type){if(n=e.done?"completed":"suspendedYield",s.arg===c)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n="completed",e.method="throw",e.arg=s.arg)}}}(t,e,i),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var c={};function f(){}function d(){}function p(){}var m={};u(m,o,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(L([])));y&&y!==r&&e.call(y,o)&&(m=y);var v=p.prototype=f.prototype=Object.create(m);function g(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function n(o,a,i,u){var s=l(t[o],t,a);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"==tt(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):r.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return n("throw",t,i,u)}))}u(s.arg)}var o;this._invoke=function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}}function w(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,w(t,r),"throw"===r.method))return c;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=l(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,c;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,c):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,c)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=p,u(v,"constructor",p),u(p,"constructor",d),d.displayName=u(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new b(s(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(v),u(v,i,"Generator"),u(v,o,(function(){return this})),u(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),c},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),c}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:L(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),c}},t}function et(t,r,e,n,o,a,i){try{var u=t[a](i),s=u.value}catch(t){return void e(t)}u.done?r(s):Promise.resolve(s).then(n,o)}function nt(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function i(t){et(a,n,o,i,u,"next",t)}function u(t){et(a,n,o,i,u,"throw",t)}i(void 0)}))}}const ot={components:{SideBar:j,BottomNavigation:J},setup:function(){var t=(0,X.bK)(),r=(0,$.tv)();function e(){return(e=nt(rt().mark((function e(){return rt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.logout();case 2:r.push({name:"AdminLogin"});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{productosLinks:[{route:"CreateProduct",name:"Agregar producto"},{route:"UpdateProduct",name:"Editar producto"},{route:"DeleteProduct",name:"Quitar un producto"}],manualesLinks:[{route:"CreateManual",name:"Agregar manual"},{route:"UpdateManual",name:"Editar manual"},{route:"DeleteManual",name:"Quitar un manual"}],logout:function(){return e.apply(this,arguments)}}},computed:(0,V.rn)("auth",["profile"])},at=(0,O.Z)(ot,[["render",function(t,r,e,g,b,w){var k=(0,n.up)("side-bar"),_=(0,n.up)("router-link"),x=(0,n.up)("router-view"),L=(0,n.up)("bottom-navigation");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(k,{class:"d-none d-lg-block",manualesLinks:g.manualesLinks,productosLinks:g.productosLinks},null,8,["manualesLinks","productosLinks"]),(0,n._)("div",a,[(0,n._)("div",i,[(0,n._)("div",u,[s,(0,n._)("p",l,[(0,n.Wm)(_,{to:{name:"Home"}},{default:(0,n.w5)((function(){return[c]})),_:1}),(0,n.Wm)(_,{to:{name:"AdminRegister"},class:"ps-2 ms-2 border-start","exact-active-class":"d-none"},{default:(0,n.w5)((function(){return[f]})),_:1})])]),t.profile?((0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",null,[(0,n._)("h6",p,(0,n.zw)(t.profile.name),1),(0,n._)("small",m,(0,n.zw)(t.profile.email),1)]),(0,n._)("p",h,[(0,n.Wm)(_,{to:{name:"UpdateProfile"},class:"pe-2 me-2 border-end"},{default:(0,n.w5)((function(){return[y]})),_:1}),(0,n._)("a",{href:"/",onClick:r[0]||(r[0]=(0,n.iM)((function(){return g.logout&&g.logout.apply(g,arguments)}),["prevent"])),class:"link-primary"}," Cerrar sesión ")])])):(0,n.kq)("",!0)]),v,(0,n.Wm)(x),(0,n.Wm)(L,{manualesLinks:g.manualesLinks,productosLinks:g.productosLinks,class:"d-lg-none"},null,8,["manualesLinks","productosLinks"])])])}]])}}]);