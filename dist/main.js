(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(354),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #f5f5f5;\n  color: #333;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  text-align: center;\n}\n\nheader {\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n  width: 100%;\n}\n\nh1 {\n  margin-bottom: 20px;\n  font-size: 45px;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\n\nnav > button {\n  background-color: #007BFF;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n\nnav > button:hover {\n  background-color: #0056b3;\n  transform: scale(1.1)\n}\n\nnav > button:focus {\n  outline: none;\n  box-shadow: 0 0 5px rgba(0,123,255,0.5);\n}\n\nnav > button.active{\n  background-color: #0056b3;\n  transform: scale(1.2);\n}\n\n#content {\n  margin-top: 20px;\n  padding: 20px;\n  width: 80%;\n  max-width: 800px;\n  background-color: white;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 25px;\n  font-size: 20px;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,2DAA2D;AAC7D;;AAEA;EACE,yBAAyB;EACzB;AACF;;AAEA;EACE,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,UAAU;EACV,gBAAgB;EAChB,uBAAuB;EACvB,uCAAuC;EACvC,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #f5f5f5;\n  color: #333;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  text-align: center;\n}\n\nheader {\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n  width: 100%;\n}\n\nh1 {\n  margin-bottom: 20px;\n  font-size: 45px;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\n\nnav > button {\n  background-color: #007BFF;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n\nnav > button:hover {\n  background-color: #0056b3;\n  transform: scale(1.1)\n}\n\nnav > button:focus {\n  outline: none;\n  box-shadow: 0 0 5px rgba(0,123,255,0.5);\n}\n\nnav > button.active{\n  background-color: #0056b3;\n  transform: scale(1.2);\n}\n\n#content {\n  margin-top: 20px;\n  padding: 20px;\n  width: 80%;\n  max-width: 800px;\n  background-color: white;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 25px;\n  font-size: 20px;\n}"],sourceRoot:""}]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<n.length;A++){var u=[].concat(n[A]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],A=o.base?s[0]+o.base:s[0],u=a[A]||0,d="".concat(A," ").concat(u);a[A]=u+1;var l=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var f=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),A=0;A<a.length;A++){var u=t(a[A]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=function(){const n=document.querySelector("#content");n.innerHTML="",n.textContent="Welcome to my restaurant, which has the best Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit."};var e=t(72),o=t.n(e),r=t(825),a=t.n(r),i=t(659),c=t.n(i),s=t(56),A=t.n(s),u=t(540),d=t.n(u),l=t(113),p=t.n(l),f=t(208),b={};b.styleTagTransform=p(),b.setAttributes=A(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=d(),o()(f.A,b),f.A&&f.A.locals&&f.A.locals;const m=document.querySelectorAll("nav > button");function v(e){const t=e.target.textContent,o=e.target;"Home"===t?n():"Menu"===t?function(){const n=document.querySelector("#content");n.innerHTML="",n.textContent="menu"}():function(){const n=document.querySelector("#content");n.innerHTML="",n.textContent="about"}(),m.forEach((n=>n.classList.remove("active"))),o.classList.add("active")}m.forEach((n=>{n.addEventListener("click",v)})),window.onload=()=>{n(),document.querySelector("nav > button:first-child").classList.add("active")}})()})();
//# sourceMappingURL=main.js.map