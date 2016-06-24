!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.watermark=e():t.watermark=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return t[r].call(u.exports,u,u.exports,e),u.loaded=!0,u.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(1),t.exports=n(2).default},function(t,e){"use strict";e.__esModule=!0,e.default=function(){},t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function u(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return(0,h.extend)((0,h.clone)(v),t)}function i(t,e){var n=t.canvas,r=t.sources,u=(0,f.dataUrl)(n);return r.forEach(e.release),u}function c(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=arguments.length<=2||void 0===arguments[2]?null:arguments[2],r=o(e);return n||(n=(0,a.load)(t,r.init)),{dataUrl:function(e){var n=this.then(function(t){return(0,a.mapToCanvas)(t,g.default)}).then(function(t){return d.result(e,t)}).then(function(t){return i(t,g.default)});return c(t,r,n)},load:function(t,e){var n=this.then(function(n){return(0,a.load)([n].concat(t),e)});return c(t,r,n)},render:function(){var e=this.then(function(t){return(0,a.load)([t])});return c(t,r,e)},blob:function(e){var n=this.dataUrl(e).then(l.blob);return c(t,r,n)},image:function(e){var n=this.dataUrl(e).then(a.createImage);return c(t,r,n)},then:function(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];return n.then.apply(n,e)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var a=n(3),f=n(5),l=n(6),s=n(7),d=u(s),h=n(10),p=n(11),g=r(p),v={init:function(){}};c.image=d.image,c.text=d.text,c.destroy=function(){return g.default.clear()}},function(t,e,n){"use strict";function r(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function u(t,e,n){t.onload=function(){return n(t)},t.src=e}function o(t){var e="undefined"==typeof t?"undefined":r(t);return"string"===e?c:t instanceof Image?h.identity:a}function i(t,e){for(var n=[],r=0;r<t.length;r++){var u=t[r],i=o(u),c=i(u,e);n.push(c)}return Promise.all(n)}function c(t,e){var n=new Image;return"function"==typeof e&&e(n),new Promise(function(e){n.onload=function(){return e(n)},n.src=t})}function a(t){var e=new FileReader;return new Promise(function(n){var r=new Image;e.onloadend=function(){return u(r,e.result,n)},e.readAsDataURL(t)})}function f(t,e){var n=new Image;return"function"==typeof e&&(n.onload=e),n.src=t,n}function l(t,e){var n=e.getContext("2d");return e.width=t.width,e.height=t.height,n.drawImage(t,0,0),e}function s(t,e){var n=e.pop();return l(t,n)}function d(t,e){return t.map(function(t){return s(t,e)})}Object.defineProperty(e,"__esModule",{value:!0}),e.getLoader=o,e.load=i,e.loadUrl=c,e.loadFile=a,e.createImage=f,e.imageToCanvas=s,e.mapToCanvas=d;var h=n(4)},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e.call(null,t)},t)}}function r(t){return t}Object.defineProperty(e,"__esModule",{value:!0}),e.sequence=n,e.identity=r},function(t,e){"use strict";function n(t){return t.toDataURL()}Object.defineProperty(e,"__esModule",{value:!0}),e.dataUrl=n},function(t,e,n){"use strict";function r(t){return c.exec(t).slice(1)}function u(t){return window.atob(t)}function o(t){for(var e=t.length,n=new Uint8Array(e),r=0;e>r;r++)n[r]=t.charCodeAt(r);return n}Object.defineProperty(e,"__esModule",{value:!0}),e.blob=void 0,e.split=r,e.decode=u,e.uint8=o;var i=n(4),c=/^data:([^;]+);base64,(.*)$/;e.blob=(0,i.sequence)(r,function(t){return[u(t[1]),t[0]]},function(t){return new Blob([o(t[0])],{type:t[1]})})},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function u(t,e){var n=t.apply(null,e);return{canvas:n,sources:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.text=e.image=void 0,e.result=u;var o=n(8),i=r(o),c=n(9),a=r(c);e.image=i,e.text=a},function(t,e){"use strict";function n(t,e,n){return n||(n=1),function(r,u){var o=r.getContext("2d");return o.save(),o.globalAlpha=n,o.drawImage(u,t(r,u),e(r,u)),o.restore(),r}}function r(t){return n(function(t,e){return t.width-(e.width+10)},function(t,e){return t.height-(e.height+10)},t)}function u(t){return n(function(t,e){return t.width-(e.width+10)},function(t,e){return 10},t)}function o(t){return n(function(t,e){return 10},function(t,e){return t.height-(e.height+10)},t)}function i(t){return n(function(t,e){return 10},function(t,e){return 10},t)}function c(t){return n(function(t,e){return(t.width-e.width)/2},function(t,e){return(t.height-e.height)/2},t)}Object.defineProperty(e,"__esModule",{value:!0}),e.atPos=n,e.lowerRight=r,e.upperRight=u,e.lowerLeft=o,e.upperLeft=i,e.center=c},function(t,e){"use strict";function n(t,e,n,r,u,o){return o||(o=1),function(i){var c=i.getContext("2d");c.save(),c.globalAlpha=o,c.fillStyle=u,c.font=r;var a=c.measureText(n);return c.fillText(n,t(i,a,c),e(i,a,c)),c.restore(),i}}function r(t,e,r,u,o){return n(function(t,e){return t.width-(e.width+10)},function(t){return o||t.height-10},t,e,r,u)}function u(t,e,r,u,o){return n(function(){return 10},function(t){return o||t.height-10},t,e,r,u)}function o(t,e,r,u,o){return n(function(t,e){return t.width-(e.width+10)},function(){return o||20},t,e,r,u)}function i(t,e,r,u,o){return n(function(){return 10},function(){return o||20},t,e,r,u)}function c(t,e,r,u,o){return n(function(t,e,n){return n.textAlign="center",t.width/2},function(t,e,n){return n.textBaseline="middle",t.height/2},t,e,r,u)}Object.defineProperty(e,"__esModule",{value:!0}),e.atPos=n,e.lowerRight=r,e.lowerLeft=u,e.upperRight=o,e.upperLeft=i,e.center=c},function(t,e){"use strict";function n(t,e){var n=Object.keys(e);return n.forEach(function(n){return t[n]=e[n]}),t}function r(t){return n({},t)}Object.defineProperty(e,"__esModule",{value:!0}),e.extend=n,e.clone=r},function(t,e){"use strict";function n(){var t=[];return{pop:function(){return 0===this.length&&t.push(document.createElement("canvas")),t.pop()},get length(){return t.length},release:function(e){var n=e.getContext("2d");n.clearRect(0,0,e.width,e.height),t.push(e)},clear:function(){t.splice(0,t.length)},get elements(){return t}}}Object.defineProperty(e,"__esModule",{value:!0}),e.CanvasPool=n;var r=n();e.default=r}])});