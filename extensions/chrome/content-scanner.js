javascript:!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var r,u=o(1),d=n(u),a=o(2),i=(n(a),o(3)),l=n(i),c=o(4),s=n(c),f="",p=(0,d["default"])();for(console.log(d["default"]);r=l["default"].nextNode();)f+=r.data.trim()+" ";var v=(0,s["default"])(f);console.log(v),p.request("https://localhost:8086/write?db=loglady",{method:"POST",data:v})},function(e,t){"use strict";function o(){return{request:function(e,t){var o;o=new XMLHttpRequest,o.open(t.method,e,!0),o.send(t.data)}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){return{send:function(o){window.navigator.sendBeacon(e+"/write?db="+t,o)}}},e.exports=t["default"]},function(e,t){"use strict";function o(){return NodeFilter.SHOW_TEXT}function n(){return{acceptNode:function(e){var t=e.parentNode.getBoundingClientRect();return t.bottom<window.innerHeight&&t.bottom>0&&!/^\s*$/.test(e.data)?NodeFilter.FILTER_ACCEPT:void 0}}}Object.defineProperty(t,"__esModule",{value:!0});var r=document.createNodeIterator(document.querySelector("body"),o(),n(),!0);t["default"]=r,e.exports=t["default"]},function(e,t){"use strict";function o(){return window?window.location.href:null}function n(e){return e.trim().replace(/[!?,;.'"(){}\[\]\\\/]/g,"")}function r(e,t,n){var r=o(),u=Date.now(),d=100*t;return'"'+e+'" hit=1,url="'+r+'" '+1e6*(u+d)}function u(e){console.log(e);var t=n(e),o=/^\s+$|^\n+$/.test(t);return!t||o?(console.log("excluded"),!1):!0}function d(e){var t=void 0;return console.log(e),t=e.split(/\s/),t=t.filter(u).map(n).map(r).map(function(e,t,o){return e.toLowerCase()}),t.join("\n")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=d,e.exports=t["default"]}]);