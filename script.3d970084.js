parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gncz":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function i(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(e){var i=r(e,"string");return"symbol"==t(i)?i:i+""}function r(e,i){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,i||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=exports.default=i(function t(e){n(this,t),this.name=e.name,this.image="https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/"+e.image.full,this.title=e.title,this.tags=e.tags,this.attack=e.info.attack,this.defense=e.info.defense,this.magic=e.info.magic,this.difficulty=e.info.difficulty,this.story=e.blurb});
},{}],"L4bL":[function(require,module,exports) {
var define;
var t,e=r(require("./legends.js"));function r(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){"use strict";o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new G(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var v="suspendedStart",p="suspendedYield",y="executing",g="completed",m={};function w(){}function b(){}function x(){}var L={};f(L,s,function(){return this});var E=Object.getPrototypeOf,_=E&&E(E(I([])));_&&_!==r&&i.call(_,s)&&(L=_);var j=x.prototype=w.prototype=Object.create(L);function k(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function S(t,e){function r(o,a,c,s){var u=d(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,c,s)},function(t){r("throw",t,c,s)}):e.resolve(f).then(function(t){l.value=t,c(l)},function(t){return r("throw",t,c,s)})}s(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e(function(e,o){r(t,n,e,o)})}return o=o?o.then(i,i):i()}})}function O(e,r,n){var o=v;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=N(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=d(e,r,n);if("normal"===u.type){if(o=n.done?g:p,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return b.prototype=x,a(j,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},k(S.prototype),f(S.prototype,u,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},k(j),f(j,l,"Generator"),f(j,s,function(){return this}),f(j,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function i(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)})}}var c=[],s=document.querySelector("button"),u=document.getElementById("loading-data-text");function l(){return f.apply(this,arguments)}function f(){return(f=a(o().mark(function t(){var r,n,i;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json",t.next=4,fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json");case 4:return r=t.sent,t.next=7,r.json();case 7:for(i in n=t.sent.data)c.push(new e.default(n[i]));t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("No se ha podido descargar los datos de la API, error $(error)");case 14:u.style.visibility="hidden";case 15:case"end":return t.stop()}},t,null,[[0,11]])}))).apply(this,arguments)}u.style.visibility="hidden",s.addEventListener("click",a(o().mark(function t(){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s.style.visibility="hidden",document.querySelector("#lol").style.visibility="visible",u.style.visibility="visible",t.next=5,l();case 5:h();case 6:case"end":return t.stop()}},t)})));var h=function(){for(var t=document.getElementById("lol"),e=0;e<c.length;e++)t.innerHTML+='\n            <div class="card-container">\n                <div class="card">\n                    <div class="card-front">\n                        <div class="name">'.concat(c[e].name,'</div>\n                        <img src="').concat(c[e].image,'" alt="').concat(c[e].name,'">\n                        <div class="title">Title: ').concat(c[e].title,'</div>\n                        <div class="tags">Tags: ').concat(c[e].tags&&c[e].tags.length>0?c[e].tags.join(" & "):"No tags available",'</div>\n                        <br>\n                        <div class="stats">\n                            <div class="stat">\n                                <img src="./assets/imgs/attack.png" class="stats-imgs"> ').concat(c[e].attack,'\n                            </div>\n                            <div class="stat">\n                                <img src="./assets/imgs/defense.png" class="stats-imgs"> ').concat(c[e].defense,'  \n                            </div>\n                            <div class="stat">\n                                <img src="./assets/imgs/magic.png" class="stats-imgs"> ').concat(c[e].magic,'  \n                            </div>\n                            <div class="stat">\n                                <img src="./assets/imgs/difficulty.png" class="stats-imgs"> ').concat(c[e].difficulty,'\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card-back">\n                        <div class="description">').concat(c[e].story,"</div>\n                    </div>\n                </div>\n            </div>")};
},{"./legends.js":"gncz"}]},{},["L4bL"], null)
//# sourceMappingURL=/LeagueOfLegends/script.3d970084.js.map