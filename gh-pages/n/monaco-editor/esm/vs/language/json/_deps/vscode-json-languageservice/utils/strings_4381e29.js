define("node_modules/monaco-editor/esm/vs/language/json/_deps/vscode-json-languageservice/utils/strings",function(e,n){"use strict";function t(e,n){if(e.length<n.length)return!1;for(var t=0;t<n.length;t++)if(e[t]!==n[t])return!1;return!0}function r(e,n){var t=e.length-n.length;return t>0?e.lastIndexOf(n)===t:0===t?e===n:!1}function s(e){return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&").replace(/[\*]/g,".*")}function o(e,n){for(var t="";n>0;)1===(1&n)&&(t+=e),e+=e,n>>>=1;return t}Object.defineProperty(n,"__esModule",{value:!0}),n.startsWith=t,n.endsWith=r,n.convertSimple2RegExpPattern=s,n.repeat=o});