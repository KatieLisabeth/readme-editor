"use strict";(self.webpackChunkreadme_editor=self.webpackChunkreadme_editor||[]).push([[954],{954:(e,t,n)=>{function r(e,t){const n=String(e);if("string"!==typeof t)throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;-1!==i;)r++,i=n.indexOf(t,i+t.length);return r}n.r(t),n.d(t,{default:()=>rt});var i=n(122),o=n(239);var l=n(265),a=n(880);function s(e,t,n){const r=n||{},i=(0,a.C)(r.ignore||[]),o=function(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const e=n[r];t.push([c(e[0]),u(e[1])])}return t}(t);let s=-1;for(;++s<o.length;)(0,l.VG)(e,"text",f);function f(e,t){let n,r=-1;for(;++r<t.length;){const e=t[r],o=n?n.children:void 0;if(i(e,o?o.indexOf(e):void 0,n))return;n=e}if(n)return function(e,t){const n=t[t.length-1],r=o[s][0],i=o[s][1];let l=0;const a=n.children.indexOf(e);let c=!1,u=[];r.lastIndex=0;let f=r.exec(e.value);for(;f;){const n=f.index,o={index:f.index,input:f.input,stack:[...t,e]};let a=i(...f,o);if("string"===typeof a&&(a=a.length>0?{type:"text",value:a}:void 0),!1===a?r.lastIndex=n+1:(l!==n&&u.push({type:"text",value:e.value.slice(l,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),l=n+f[0].length,c=!0),!r.global)break;f=r.exec(e.value)}c?(l<e.value.length&&u.push({type:"text",value:e.value.slice(l)}),n.children.splice(a,1,...u)):u=[e];return a+u.length}(e,t)}}function c(e){return"string"===typeof e?new RegExp(function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e),"g"):e}function u(e){return"function"===typeof e?e:function(){return e}}const f="phrasing",h=["autolink","link","image","label"];function p(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function d(e){this.config.enter.autolinkProtocol.call(this,e)}function m(e){this.config.exit.autolinkProtocol.call(this,e)}function g(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];(0,i.ok)("link"===t.type),t.url="http://"+this.sliceSerialize(e)}function k(e){this.config.exit.autolinkEmail.call(this,e)}function b(e){this.exit(e)}function x(e){s(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,v],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,y]],{ignore:["link","linkReference"]})}function v(e,t,n,i,o){let l="";if(!C(o))return!1;if(/^w/i.test(t)&&(n=t+n,t="",l="http://"),!function(e){const t=e.split(".");if(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))return!1;return!0}(n))return!1;const a=function(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],i=n.indexOf(")");const o=r(e,"(");let l=r(e,")");for(;-1!==i&&o>l;)e+=n.slice(0,i+1),n=n.slice(i+1),i=n.indexOf(")"),l++;return[e,n]}(n+i);if(!a[0])return!1;const s={type:"link",title:null,url:l+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[s,{type:"text",value:a[1]}]:s}function y(e,t,n,r){return!(!C(r,!0)||/[-\d_]$/.test(n))&&{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function C(e,t){const n=e.input.charCodeAt(e.index-1);return(0===e.index||(0,o.Ny)(n)||(0,o.es)(n))&&(!t||47!==n)}var w=n(61);function F(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function D(){this.buffer()}function E(e){const t=this.resume(),n=this.stack[this.stack.length-1];(0,i.ok)("footnoteDefinition"===n.type),n.label=t,n.identifier=(0,w.B)(this.sliceSerialize(e)).toLowerCase()}function L(e){this.exit(e)}function O(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function S(){this.buffer()}function A(e){const t=this.resume(),n=this.stack[this.stack.length-1];(0,i.ok)("footnoteReference"===n.type),n.label=t,n.identifier=(0,w.B)(this.sliceSerialize(e)).toLowerCase()}function M(e){this.exit(e)}function T(e,t,n,r){const i=n.createTracker(r);let o=i.move("[^");const l=n.enter("footnoteReference"),a=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{...i.current(),before:o,after:"]"})),a(),l(),o+=i.move("]"),o}function z(e,t,n,r){const i=n.createTracker(r);let o=i.move("[^");const l=n.enter("footnoteDefinition"),a=n.enter("label");return o+=i.move(n.safe(n.associationId(e),{...i.current(),before:o,after:"]"})),a(),o+=i.move("]:"+(e.children&&e.children.length>0?" ":"")),i.shift(4),o+=i.move(n.indentLines(n.containerFlow(e,i.current()),R)),l(),o}function R(e,t,n){return 0===t?e:(n?"":"    ")+e}T.peek=function(){return"["};const I=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];function j(e){this.enter({type:"delete",children:[]},e)}function P(e){this.exit(e)}function _(e,t,n,r){const i=n.createTracker(r),o=n.enter("strikethrough");let l=i.move("~~");return l+=n.containerPhrasing(e,{...i.current(),before:l,after:"~"}),l+=i.move("~~"),o(),l}function B(e){return e.length}function H(e){const t="string"===typeof e?e.codePointAt(0):0;return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}function $(e,t,n){return">"+(n?"":" ")+e}function N(e,t,n){if("string"===typeof t&&(t=[t]),!t||0===t.length)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function W(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if("\n"===n.unsafe[i].character&&(o=n.stack,l=n.unsafe[i],N(o,l.inConstruct,!0)&&!N(o,l.notInConstruct,!1)))return/[ \t]/.test(r.before)?"":" ";var o,l;return"\\\n"}function q(e,t,n){return(n?"":"    ")+e}function V(e){const t=e.options.quote||'"';if('"'!==t&&"'"!==t)throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function U(e,t,n,r){const i=function(e){const t=e.options.emphasis||"*";if("*"!==t&&"_"!==t)throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}(n),o=n.enter("emphasis"),l=n.createTracker(r);let a=l.move(i);return a+=l.move(n.containerPhrasing(e,{before:a,after:i,...l.current()})),a+=l.move(i),o(),a}_.peek=function(){return"~"},U.peek=function(e,t,n){return n.options.emphasis||"*"};var Q=n(723),G=n(615);function J(e){return e.value||""}function Z(e,t,n,r){const i=V(n),o='"'===i?"Quote":"Apostrophe",l=n.enter("image");let a=n.enter("label");const s=n.createTracker(r);let c=s.move("![");return c+=s.move(n.safe(e.alt,{before:c,after:"]",...s.current()})),c+=s.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(a=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":")",...s.current()}))),a(),e.title&&(a=n.enter(`title${o}`),c+=s.move(" "+i),c+=s.move(n.safe(e.title,{before:c,after:i,...s.current()})),c+=s.move(i),a()),c+=s.move(")"),l(),c}function Y(e,t,n,r){const i=e.referenceType,o=n.enter("imageReference");let l=n.enter("label");const a=n.createTracker(r);let s=a.move("![");const c=n.safe(e.alt,{before:s,after:"]",...a.current()});s+=a.move(c+"]["),l();const u=n.stack;n.stack=[],l=n.enter("reference");const f=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return l(),n.stack=u,o(),"full"!==i&&c&&c===f?"shortcut"===i?s=s.slice(0,-1):s+=a.move("]"):s+=a.move(f+"]"),s}function K(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){const e=n.unsafe[o],t=n.compilePattern(e);let i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;10===r.charCodeAt(e)&&13===r.charCodeAt(e-1)&&e--,r=r.slice(0,e)+" "+r.slice(i.index+1)}}return i+r+i}function X(e,t){const n=(0,G.d)(e);return Boolean(!t.options.resourceLink&&e.url&&!e.title&&e.children&&1===e.children.length&&"text"===e.children[0].type&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}function ee(e,t,n,r){const i=V(n),o='"'===i?"Quote":"Apostrophe",l=n.createTracker(r);let a,s;if(X(e,n)){const t=n.stack;n.stack=[],a=n.enter("autolink");let r=l.move("<");return r+=l.move(n.containerPhrasing(e,{before:r,after:">",...l.current()})),r+=l.move(">"),a(),n.stack=t,r}a=n.enter("link"),s=n.enter("label");let c=l.move("[");return c+=l.move(n.containerPhrasing(e,{before:c,after:"](",...l.current()})),c+=l.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(n.safe(e.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(s=n.enter("destinationRaw"),c+=l.move(n.safe(e.url,{before:c,after:e.title?" ":")",...l.current()}))),s(),e.title&&(s=n.enter(`title${o}`),c+=l.move(" "+i),c+=l.move(n.safe(e.title,{before:c,after:i,...l.current()})),c+=l.move(i),s()),c+=l.move(")"),a(),c}function te(e,t,n,r){const i=e.referenceType,o=n.enter("linkReference");let l=n.enter("label");const a=n.createTracker(r);let s=a.move("[");const c=n.containerPhrasing(e,{before:s,after:"]",...a.current()});s+=a.move(c+"]["),l();const u=n.stack;n.stack=[],l=n.enter("reference");const f=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return l(),n.stack=u,o(),"full"!==i&&c&&c===f?"shortcut"===i?s=s.slice(0,-1):s+=a.move("]"):s+=a.move(f+"]"),s}function ne(e){const t=e.options.bullet||"*";if("*"!==t&&"+"!==t&&"-"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function re(e){const t=e.options.rule||"*";if("*"!==t&&"-"!==t&&"_"!==t)throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}J.peek=function(){return"<"},Z.peek=function(){return"!"},Y.peek=function(){return"!"},K.peek=function(){return"`"},ee.peek=function(e,t,n){return X(e,n)?"<":"["},te.peek=function(){return"["};const ie=(0,a.C)(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function oe(e,t,n,r){const i=function(e){const t=e.options.strong||"*";if("*"!==t&&"_"!==t)throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}(n),o=n.enter("strong"),l=n.createTracker(r);let a=l.move(i+i);return a+=l.move(n.containerPhrasing(e,{before:a,after:i,...l.current()})),a+=l.move(i+i),o(),a}oe.peek=function(e,t,n){return n.options.strong||"*"};const le={blockquote:function(e,t,n,r){const i=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);const l=n.indentLines(n.containerFlow(e,o.current()),$);return i(),l},break:W,code:function(e,t,n,r){const i=function(e){const t=e.options.fence||"`";if("`"!==t&&"~"!==t)throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}(n),o=e.value||"",l="`"===i?"GraveAccent":"Tilde";if(function(e,t){return Boolean(!1===t.options.fences&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}(e,n)){const e=n.enter("codeIndented"),t=n.indentLines(o,q);return e(),t}const a=n.createTracker(r),s=i.repeat(Math.max(function(e,t){const n=String(e);let r=n.indexOf(t),i=r,o=0,l=0;if("string"!==typeof t)throw new TypeError("Expected substring");for(;-1!==r;)r===i?++o>l&&(l=o):o=1,i=r+t.length,r=n.indexOf(t,i);return l}(o,i)+1,3)),c=n.enter("codeFenced");let u=a.move(s);if(e.lang){const t=n.enter(`codeFencedLang${l}`);u+=a.move(n.safe(e.lang,{before:u,after:" ",encode:["`"],...a.current()})),t()}if(e.lang&&e.meta){const t=n.enter(`codeFencedMeta${l}`);u+=a.move(" "),u+=a.move(n.safe(e.meta,{before:u,after:"\n",encode:["`"],...a.current()})),t()}return u+=a.move("\n"),o&&(u+=a.move(o+"\n")),u+=a.move(s),c(),u},definition:function(e,t,n,r){const i=V(n),o='"'===i?"Quote":"Apostrophe",l=n.enter("definition");let a=n.enter("label");const s=n.createTracker(r);let c=s.move("[");return c+=s.move(n.safe(n.associationId(e),{before:c,after:"]",...s.current()})),c+=s.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(a=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":"\n",...s.current()}))),a(),e.title&&(a=n.enter(`title${o}`),c+=s.move(" "+i),c+=s.move(n.safe(e.title,{before:c,after:i,...s.current()})),c+=s.move(i),a()),l(),c},emphasis:U,hardBreak:W,heading:function(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if(function(e,t){let n=!1;return(0,Q.YR)(e,(function(e){if("value"in e&&/\r?\n|\r/.test(e.value)||"break"===e.type)return n=!0,l.dc})),Boolean((!e.depth||e.depth<3)&&(0,G.d)(e)&&(t.options.setext||n))}(e,n)){const t=n.enter("headingSetext"),r=n.enter("phrasing"),l=n.containerPhrasing(e,{...o.current(),before:"\n",after:"\n"});return r(),t(),l+"\n"+(1===i?"=":"-").repeat(l.length-(Math.max(l.lastIndexOf("\r"),l.lastIndexOf("\n"))+1))}const a="#".repeat(i),s=n.enter("headingAtx"),c=n.enter("phrasing");o.move(a+" ");let u=n.containerPhrasing(e,{before:"# ",after:"\n",...o.current()});return/^[\t ]/.test(u)&&(u="&#x"+u.charCodeAt(0).toString(16).toUpperCase()+";"+u.slice(1)),u=u?a+" "+u:a,n.options.closeAtx&&(u+=" "+a),c(),s(),u},html:J,image:Z,imageReference:Y,inlineCode:K,link:ee,linkReference:te,list:function(e,t,n,r){const i=n.enter("list"),o=n.bulletCurrent;let l=e.ordered?function(e){const t=e.options.bulletOrdered||".";if("."!==t&&")"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}(n):ne(n);const a=e.ordered?"."===l?")":".":function(e){const t=ne(e),n=e.options.bulletOther;if(!n)return"*"===t?"-":"*";if("*"!==n&&"+"!==n&&"-"!==n)throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}(n);let s=!(!t||!n.bulletLastUsed)&&l===n.bulletLastUsed;if(!e.ordered){const t=e.children?e.children[0]:void 0;if("*"!==l&&"-"!==l||!t||t.children&&t.children[0]||"list"!==n.stack[n.stack.length-1]||"listItem"!==n.stack[n.stack.length-2]||"list"!==n.stack[n.stack.length-3]||"listItem"!==n.stack[n.stack.length-4]||0!==n.indexStack[n.indexStack.length-1]||0!==n.indexStack[n.indexStack.length-2]||0!==n.indexStack[n.indexStack.length-3]||(s=!0),re(n)===l&&t){let t=-1;for(;++t<e.children.length;){const n=e.children[t];if(n&&"listItem"===n.type&&n.children&&n.children[0]&&"thematicBreak"===n.children[0].type){s=!0;break}}}}s&&(l=a),n.bulletCurrent=l;const c=n.containerFlow(e,r);return n.bulletLastUsed=l,n.bulletCurrent=o,i(),c},listItem:function(e,t,n,r){const i=function(e){const t=e.options.listItemIndent||"one";if("tab"!==t&&"one"!==t&&"mixed"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}(n);let o=n.bulletCurrent||ne(n);t&&"list"===t.type&&t.ordered&&(o=("number"===typeof t.start&&t.start>-1?t.start:1)+(!1===n.options.incrementListMarker?0:t.children.indexOf(e))+o);let l=o.length+1;("tab"===i||"mixed"===i&&(t&&"list"===t.type&&t.spread||e.spread))&&(l=4*Math.ceil(l/4));const a=n.createTracker(r);a.move(o+" ".repeat(l-o.length)),a.shift(l);const s=n.enter("listItem"),c=n.indentLines(n.containerFlow(e,a.current()),(function(e,t,n){if(t)return(n?"":" ".repeat(l))+e;return(n?o:o+" ".repeat(l-o.length))+e}));return s(),c},paragraph:function(e,t,n,r){const i=n.enter("paragraph"),o=n.enter("phrasing"),l=n.containerPhrasing(e,r);return o(),i(),l},root:function(e,t,n,r){return(e.children.some((function(e){return ie(e)}))?n.containerPhrasing:n.containerFlow).call(n,e,r)},strong:oe,text:function(e,t,n,r){return n.safe(e.value,r)},thematicBreak:function(e,t,n){const r=(re(n)+(n.options.ruleSpaces?" ":"")).repeat(function(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}(n));return n.options.ruleSpaces?r.slice(0,-1):r}};function ae(e){const t=e._align;(0,i.ok)(t,"expected `_align` on table"),this.enter({type:"table",align:t.map((function(e){return"none"===e?null:e})),children:[]},e),this.data.inTable=!0}function se(e){this.exit(e),this.data.inTable=void 0}function ce(e){this.enter({type:"tableRow",children:[]},e)}function ue(e){this.exit(e)}function fe(e){this.enter({type:"tableCell",children:[]},e)}function he(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,pe));const n=this.stack[this.stack.length-1];(0,i.ok)("inlineCode"===n.type),n.value=t,this.exit(e)}function pe(e,t){return"|"===t?t:e}function de(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:"\n",inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[\t :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:function(e,t,n){let r=le.inlineCode(e,t,n);n.stack.includes("tableCell")&&(r=r.replace(/\|/g,"\\$&"));return r},table:function(e,t,n,r){return a(function(e,t,n){const r=e.children;let i=-1;const o=[],l=t.enter("table");for(;++i<r.length;)o[i]=s(r[i],t,n);return l(),o}(e,n,r),e.align)},tableCell:l,tableRow:function(e,t,n,r){const i=a([s(e,n,r)]);return i.slice(0,i.indexOf("\n"))}}};function l(e,t,n,r){const i=n.enter("tableCell"),l=n.enter("phrasing"),a=n.containerPhrasing(e,{...r,before:o,after:o});return l(),i(),a}function a(e,t){return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=(t.align||[]).concat(),r=t.stringLength||B,i=[],o=[],l=[],a=[];let s=0,c=-1;for(;++c<e.length;){const n=[],i=[];let f=-1;for(e[c].length>s&&(s=e[c].length);++f<e[c].length;){const o=null===(u=e[c][f])||void 0===u?"":String(u);if(!1!==t.alignDelimiters){const e=r(o);i[f]=e,(void 0===a[f]||e>a[f])&&(a[f]=e)}n.push(o)}o[c]=n,l[c]=i}var u;let f=-1;if("object"===typeof n&&"length"in n)for(;++f<s;)i[f]=H(n[f]);else{const e=H(n);for(;++f<s;)i[f]=e}f=-1;const h=[],p=[];for(;++f<s;){const e=i[f];let n="",r="";99===e?(n=":",r=":"):108===e?n=":":114===e&&(r=":");let o=!1===t.alignDelimiters?1:Math.max(1,a[f]-n.length-r.length);const l=n+"-".repeat(o)+r;!1!==t.alignDelimiters&&(o=n.length+o+r.length,o>a[f]&&(a[f]=o),p[f]=o),h[f]=l}o.splice(1,0,h),l.splice(1,0,p),c=-1;const d=[];for(;++c<o.length;){const e=o[c],n=l[c];f=-1;const r=[];for(;++f<s;){const o=e[f]||"";let l="",c="";if(!1!==t.alignDelimiters){const e=a[f]-(n[f]||0),t=i[f];114===t?l=" ".repeat(e):99===t?e%2?(l=" ".repeat(e/2+.5),c=" ".repeat(e/2-.5)):(l=" ".repeat(e/2),c=l):c=" ".repeat(e)}!1===t.delimiterStart||f||r.push("|"),!1===t.padding||!1===t.alignDelimiters&&""===o||!1===t.delimiterStart&&!f||r.push(" "),!1!==t.alignDelimiters&&r.push(l),r.push(o),!1!==t.alignDelimiters&&r.push(c),!1!==t.padding&&r.push(" "),!1===t.delimiterEnd&&f===s-1||r.push("|")}d.push(!1===t.delimiterEnd?r.join("").replace(/ +$/,""):r.join(""))}return d.join("\n")}(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function s(e,t,n){const r=e.children;let i=-1;const o=[],a=t.enter("tableRow");for(;++i<r.length;)o[i]=l(r[i],0,t,n);return a(),o}}function me(e){const t=this.stack[this.stack.length-2];(0,i.ok)("listItem"===t.type),t.checked="taskListCheckValueChecked"===e.type}function ge(e){const t=this.stack[this.stack.length-2];if(t&&"listItem"===t.type&&"boolean"===typeof t.checked){const e=this.stack[this.stack.length-1];(0,i.ok)("paragraph"===e.type);const n=e.children[0];if(n&&"text"===n.type){const r=t.children;let i,o=-1;for(;++o<r.length;){const e=r[o];if("paragraph"===e.type){i=e;break}}i===e&&(n.value=n.value.slice(1),0===n.value.length?e.children.shift():e.position&&n.position&&"number"===typeof n.position.start.offset&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function ke(e,t,n,r){const i=e.children[0],o="boolean"===typeof e.checked&&i&&"paragraph"===i.type,l="["+(e.checked?"x":" ")+"] ",a=n.createTracker(r);o&&a.move(l);let s=le.listItem(e,t,n,{...r,...a.current()});return o&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,(function(e){return e+l}))),s}var be=n(366);const xe={tokenize:function(e,t,n){let r=0;return function t(o){if((87===o||119===o)&&r<3)return r++,e.consume(o),t;if(46===o&&3===r)return e.consume(o),i;return n(o)};function i(e){return null===e?n(e):t(e)}},partial:!0},ve={tokenize:function(e,t,n){let r,i,l;return a;function a(t){return 46===t||95===t?e.check(Ce,c,s)(t):null===t||(0,o.Ee)(t)||(0,o.Ny)(t)||45!==t&&(0,o.es)(t)?c(t):(l=!0,e.consume(t),a)}function s(t){return 95===t?r=!0:(i=r,r=void 0),e.consume(t),a}function c(e){return i||r||!l?n(e):t(e)}},partial:!0},ye={tokenize:function(e,t){let n=0,r=0;return i;function i(a){return 40===a?(n++,e.consume(a),i):41===a&&r<n?l(a):33===a||34===a||38===a||39===a||41===a||42===a||44===a||46===a||58===a||59===a||60===a||63===a||93===a||95===a||126===a?e.check(Ce,t,l)(a):null===a||(0,o.Ee)(a)||(0,o.Ny)(a)?t(a):(e.consume(a),i)}function l(t){return 41===t&&r++,e.consume(t),i}},partial:!0},Ce={tokenize:function(e,t,n){return r;function r(a){return 33===a||34===a||39===a||41===a||42===a||44===a||46===a||58===a||59===a||63===a||95===a||126===a?(e.consume(a),r):38===a?(e.consume(a),l):93===a?(e.consume(a),i):60===a||null===a||(0,o.Ee)(a)||(0,o.Ny)(a)?t(a):n(a)}function i(e){return null===e||40===e||91===e||(0,o.Ee)(e)||(0,o.Ny)(e)?t(e):r(e)}function l(e){return(0,o.CW)(e)?a(e):n(e)}function a(t){return 59===t?(e.consume(t),r):(0,o.CW)(t)?(e.consume(t),a):n(t)}},partial:!0},we={tokenize:function(e,t,n){return function(t){return e.consume(t),r};function r(e){return(0,o.lV)(e)?n(e):t(e)}},partial:!0},Fe={name:"wwwAutolink",tokenize:function(e,t,n){const r=this;return function(t){if(87!==t&&119!==t||!Se.call(r,r.previous)||ze(r.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(xe,e.attempt(ve,e.attempt(ye,i),n),n)(t)};function i(n){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(n)}},previous:Se},De={name:"protocolAutolink",tokenize:function(e,t,n){const r=this;let i="",l=!1;return function(t){if((72===t||104===t)&&Ae.call(r,r.previous)&&!ze(r.events))return e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(t),e.consume(t),a;return n(t)};function a(t){if((0,o.CW)(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),a;if(58===t){const n=i.toLowerCase();if("http"===n||"https"===n)return e.consume(t),s}return n(t)}function s(t){return 47===t?(e.consume(t),l?c:(l=!0,s)):n(t)}function c(t){return null===t||(0,o.JQ)(t)||(0,o.Ee)(t)||(0,o.Ny)(t)||(0,o.es)(t)?n(t):e.attempt(ve,e.attempt(ye,u),n)(t)}function u(n){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(n)}},previous:Ae},Ee={name:"emailAutolink",tokenize:function(e,t,n){const r=this;let i,l;return function(t){if(!Te(t)||!Me.call(r,r.previous)||ze(r.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(t)};function a(t){return Te(t)?(e.consume(t),a):64===t?(e.consume(t),s):n(t)}function s(t){return 46===t?e.check(we,u,c)(t):45===t||95===t||(0,o.lV)(t)?(l=!0,e.consume(t),s):u(t)}function c(t){return e.consume(t),i=!0,s}function u(a){return l&&i&&(0,o.CW)(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(a)):n(a)}},previous:Me},Le={};let Oe=48;for(;Oe<123;)Le[Oe]=Ee,Oe++,58===Oe?Oe=65:91===Oe&&(Oe=97);function Se(e){return null===e||40===e||42===e||95===e||91===e||93===e||126===e||(0,o.Ee)(e)}function Ae(e){return!(0,o.CW)(e)}function Me(e){return!(47===e||Te(e))}function Te(e){return 43===e||45===e||46===e||95===e||(0,o.lV)(e)}function ze(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if(("labelLink"===r.type||"labelImage"===r.type)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}Le[43]=Ee,Le[45]=Ee,Le[46]=Ee,Le[95]=Ee,Le[72]=[Ee,De],Le[104]=[Ee,De],Le[87]=[Ee,Fe],Le[119]=[Ee,Fe];var Re=n(502),Ie=n(906);const je={tokenize:function(e,t,n){const r=this;return(0,Ie.N)(e,(function(e){const i=r.events[r.events.length-1];return i&&"gfmFootnoteDefinitionIndent"===i[1].type&&4===i[2].sliceSerialize(i[1],!0).length?t(e):n(e)}),"gfmFootnoteDefinitionIndent",5)},partial:!0};function Pe(e,t,n){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l;for(;i--;){const e=r.events[i][1];if("labelImage"===e.type){l=e;break}if("gfmFootnoteCall"===e.type||"labelLink"===e.type||"label"===e.type||"image"===e.type||"link"===e.type)break}return function(i){if(!l||!l._balanced)return n(i);const a=(0,w.B)(r.sliceSerialize({start:l.end,end:r.now()}));if(94!==a.codePointAt(0)||!o.includes(a.slice(1)))return n(i);return e.enter("gfmFootnoteCallLabelMarker"),e.consume(i),e.exit("gfmFootnoteCallLabelMarker"),t(i)}}function _e(e,t){let n,r=e.length;for(;r--;)if("labelImage"===e[r][1].type&&"enter"===e[r][0]){n=e[r][1];break}e[r+1][1].type="data",e[r+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[r+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[r+3][1].end),end:Object.assign({},e[r+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},s=[e[r+1],e[r+2],["enter",i,t],e[r+3],e[r+4],["enter",o,t],["exit",o,t],["enter",l,t],["enter",a,t],["exit",a,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(r,e.length-r+1,...s),e}function Be(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,a=0;return function(t){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(t),e.exit("gfmFootnoteCallLabelMarker"),s};function s(t){return 94!==t?n(t):(e.enter("gfmFootnoteCallMarker"),e.consume(t),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c)}function c(s){if(a>999||93===s&&!l||null===s||91===s||(0,o.Ee)(s))return n(s);if(93===s){e.exit("chunkString");const o=e.exit("gfmFootnoteCallString");return i.includes((0,w.B)(r.sliceSerialize(o)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(s)}return(0,o.Ee)(s)||(l=!0),a++,e.consume(s),92===s?u:c}function u(t){return 91===t||92===t||93===t?(e.consume(t),a++,c):c(t)}}function He(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,a,s=0;return function(t){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),c};function c(t){return 94===t?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",u):n(t)}function u(t){if(s>999||93===t&&!a||null===t||91===t||(0,o.Ee)(t))return n(t);if(93===t){e.exit("chunkString");const n=e.exit("gfmFootnoteDefinitionLabelString");return l=(0,w.B)(r.sliceSerialize(n)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return(0,o.Ee)(t)||(a=!0),s++,e.consume(t),92===t?f:u}function f(t){return 91===t||92===t||93===t?(e.consume(t),s++,u):u(t)}function h(t){return 58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),i.includes(l)||i.push(l),(0,Ie.N)(e,p,"gfmFootnoteDefinitionWhitespace")):n(t)}function p(e){return t(e)}}function $e(e,t,n){return e.check(Re.B,t,e.attempt(je,t,n))}function Ne(e){e.exit("gfmFootnoteDefinition")}var We=n(440),qe=n(164),Ve=n(646);function Ue(e){let t=(e||{}).singleTilde;const n={name:"strikethrough",tokenize:function(e,n,r){const i=this.previous,o=this.events;let l=0;return function(t){if(126===i&&"characterEscape"!==o[o.length-1][1].type)return r(t);return e.enter("strikethroughSequenceTemporary"),a(t)};function a(o){const s=(0,qe.S)(i);if(126===o)return l>1?r(o):(e.consume(o),l++,a);if(l<2&&!t)return r(o);const c=e.exit("strikethroughSequenceTemporary"),u=(0,qe.S)(o);return c._open=!u||2===u&&Boolean(s),c._close=!s||2===s&&Boolean(u),n(o)}},resolveAll:function(e,t){let n=-1;for(;++n<e.length;)if("enter"===e[n][0]&&"strikethroughSequenceTemporary"===e[n][1].type&&e[n][1]._close){let r=n;for(;r--;)if("exit"===e[r][0]&&"strikethroughSequenceTemporary"===e[r][1].type&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type="strikethroughSequence",e[r][1].type="strikethroughSequence";const i={type:"strikethrough",start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},o={type:"strikethroughText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},l=[["enter",i,t],["enter",e[r][1],t],["exit",e[r][1],t],["enter",o,t]],a=t.parser.constructs.insideSpan.null;a&&(0,We.m)(l,l.length,0,(0,Ve.W)(a,e.slice(r+1,n),t)),(0,We.m)(l,l.length,0,[["exit",o,t],["enter",e[n][1],t],["exit",e[n][1],t],["exit",i,t]]),(0,We.m)(e,r-1,n-r+3,l),n=r+l.length-2;break}}n=-1;for(;++n<e.length;)"strikethroughSequenceTemporary"===e[n][1].type&&(e[n][1].type="data");return e}};return null!==t&&void 0!==t||(t=!0),{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}}}class Qe{constructor(){this.map=[]}add(e,t,n){!function(e,t,n,r){let i=0;if(0===n&&0===r.length)return;for(;i<e.map.length;){if(e.map[i][0]===t)return e.map[i][1]+=n,void e.map[i][2].push(...r);i+=1}e.map.push([t,n,r])}(this,e,t,n)}consume(e){if(this.map.sort((function(e,t){return e[0]-t[0]})),0===this.map.length)return;let t=this.map.length;const n=[];for(;t>0;)t-=1,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push([...e]),e.length=0;let r=n.pop();for(;r;)e.push(...r),r=n.pop();this.map.length=0}}function Ge(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if("enter"===i[0])"tableContent"===i[1].type&&r.push("tableDelimiterMarker"===e[t+1][1].type?"left":"none");else if("tableContent"===i[1].type){if("tableDelimiterMarker"===e[t-1][1].type){const e=r.length-1;r[e]="left"===r[e]?"center":"right"}}else if("tableDelimiterRow"===i[1].type)break}else"enter"===i[0]&&"tableDelimiterRow"===i[1].type&&(n=!0);t+=1}return r}function Je(e,t,n){const r=this;let i,l=0,a=0;return function(e){let t=r.events.length-1;for(;t>-1;){const e=r.events[t][1].type;if("lineEnding"!==e&&"linePrefix"!==e)break;t--}const i=t>-1?r.events[t][1].type:null,o="tableHead"===i||"tableRow"===i?y:s;if(o===y&&r.parser.lazy[r.now().line])return n(e);return o(e)};function s(t){return e.enter("tableHead"),e.enter("tableRow"),function(e){if(124===e)return c(e);return i=!0,a+=1,c(e)}(t)}function c(t){return null===t?n(t):(0,o.HP)(t)?a>1?(a=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),h):n(t):(0,o.On)(t)?(0,Ie.N)(e,c,"whitespace")(t):(a+=1,i&&(i=!1,l+=1),124===t?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),i=!0,c):(e.enter("data"),u(t)))}function u(t){return null===t||124===t||(0,o.Ee)(t)?(e.exit("data"),c(t)):(e.consume(t),92===t?f:u)}function f(t){return 92===t||124===t?(e.consume(t),u):u(t)}function h(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter("tableDelimiterRow"),i=!1,(0,o.On)(t)?(0,Ie.N)(e,p,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):p(t))}function p(t){return 45===t||58===t?m(t):124===t?(i=!0,e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),d):v(t)}function d(t){return(0,o.On)(t)?(0,Ie.N)(e,m,"whitespace")(t):m(t)}function m(t){return 58===t?(a+=1,i=!0,e.enter("tableDelimiterMarker"),e.consume(t),e.exit("tableDelimiterMarker"),g):45===t?(a+=1,g(t)):null===t||(0,o.HP)(t)?x(t):v(t)}function g(t){return 45===t?(e.enter("tableDelimiterFiller"),k(t)):v(t)}function k(t){return 45===t?(e.consume(t),k):58===t?(i=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(t),e.exit("tableDelimiterMarker"),b):(e.exit("tableDelimiterFiller"),b(t))}function b(t){return(0,o.On)(t)?(0,Ie.N)(e,x,"whitespace")(t):x(t)}function x(n){return 124===n?p(n):(null===n||(0,o.HP)(n))&&i&&l===a?(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(n)):v(n)}function v(e){return n(e)}function y(t){return e.enter("tableRow"),C(t)}function C(n){return 124===n?(e.enter("tableCellDivider"),e.consume(n),e.exit("tableCellDivider"),C):null===n||(0,o.HP)(n)?(e.exit("tableRow"),t(n)):(0,o.On)(n)?(0,Ie.N)(e,C,"whitespace")(n):(e.enter("data"),w(n))}function w(t){return null===t||124===t||(0,o.Ee)(t)?(e.exit("data"),C(t)):(e.consume(t),92===t?F:w)}function F(t){return 92===t||124===t?(e.consume(t),w):w(t)}}function Ze(e,t){let n,r,i,o=-1,l=!0,a=0,s=[0,0,0,0],c=[0,0,0,0],u=!1,f=0;const h=new Qe;for(;++o<e.length;){const p=e[o],d=p[1];"enter"===p[0]?"tableHead"===d.type?(u=!1,0!==f&&(Ke(h,t,f,n,r),r=void 0,f=0),n={type:"table",start:Object.assign({},d.start),end:Object.assign({},d.end)},h.add(o,0,[["enter",n,t]])):"tableRow"===d.type||"tableDelimiterRow"===d.type?(l=!0,i=void 0,s=[0,0,0,0],c=[0,o+1,0,0],u&&(u=!1,r={type:"tableBody",start:Object.assign({},d.start),end:Object.assign({},d.end)},h.add(o,0,[["enter",r,t]])),a="tableDelimiterRow"===d.type?2:r?3:1):!a||"data"!==d.type&&"tableDelimiterMarker"!==d.type&&"tableDelimiterFiller"!==d.type?"tableCellDivider"===d.type&&(l?l=!1:(0!==s[1]&&(c[0]=c[1],i=Ye(h,t,s,a,void 0,i)),s=c,c=[s[1],o,0,0])):(l=!1,0===c[2]&&(0!==s[1]&&(c[0]=c[1],i=Ye(h,t,s,a,void 0,i),s=[0,0,0,0]),c[2]=o)):"tableHead"===d.type?(u=!0,f=o):"tableRow"===d.type||"tableDelimiterRow"===d.type?(f=o,0!==s[1]?(c[0]=c[1],i=Ye(h,t,s,a,o,i)):0!==c[1]&&(i=Ye(h,t,c,a,o,i)),a=0):!a||"data"!==d.type&&"tableDelimiterMarker"!==d.type&&"tableDelimiterFiller"!==d.type||(c[3]=o)}for(0!==f&&Ke(h,t,f,n,r),h.consume(t.events),o=-1;++o<t.events.length;){const e=t.events[o];"enter"===e[0]&&"table"===e[1].type&&(e[1]._align=Ge(t.events,o))}return e}function Ye(e,t,n,r,i,o){const l=1===r?"tableHeader":2===r?"tableDelimiter":"tableData";0!==n[0]&&(o.end=Object.assign({},Xe(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));const a=Xe(t.events,n[1]);if(o={type:l,start:Object.assign({},a),end:Object.assign({},a)},e.add(n[1],0,[["enter",o,t]]),0!==n[2]){const i=Xe(t.events,n[2]),o=Xe(t.events,n[3]),l={type:"tableContent",start:Object.assign({},i),end:Object.assign({},o)};if(e.add(n[2],0,[["enter",l,t]]),2!==r){const r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type="chunkText",r[1].contentType="text",n[3]>n[2]+1){const t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[["exit",l,t]])}return void 0!==i&&(o.end=Object.assign({},Xe(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function Ke(e,t,n,r,i){const o=[],l=Xe(t.events,n);i&&(i.end=Object.assign({},l),o.push(["exit",i,t])),r.end=Object.assign({},l),o.push(["exit",r,t]),e.add(n+1,0,o)}function Xe(e,t){const n=e[t],r="enter"===n[0]?"start":"end";return n[1][r]}const et={name:"tasklistCheck",tokenize:function(e,t,n){const r=this;return function(t){if(null!==r.previous||!r._gfmTasklistFirstContentOfListItem)return n(t);return e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),i};function i(t){return(0,o.Ee)(t)?(e.enter("taskListCheckValueUnchecked"),e.consume(t),e.exit("taskListCheckValueUnchecked"),l):88===t||120===t?(e.enter("taskListCheckValueChecked"),e.consume(t),e.exit("taskListCheckValueChecked"),l):n(t)}function l(t){return 93===t?(e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(t)}function a(r){return(0,o.HP)(r)?t(r):(0,o.On)(r)?e.check({tokenize:tt},t,n)(r):n(r)}}};function tt(e,t,n){return(0,Ie.N)(e,(function(e){return null===e?n(e):t(e)}),"whitespace")}const nt={};function rt(e){const t=e||nt,n=this.data(),r=n.micromarkExtensions||(n.micromarkExtensions=[]),i=n.fromMarkdownExtensions||(n.fromMarkdownExtensions=[]),o=n.toMarkdownExtensions||(n.toMarkdownExtensions=[]);r.push(function(e){return(0,be.y)([{text:Le},{document:{91:{name:"gfmFootnoteDefinition",tokenize:He,continuation:{tokenize:$e},exit:Ne}},text:{91:{name:"gfmFootnoteCall",tokenize:Be},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Pe,resolveTo:_e}}},Ue(e),{flow:{null:{name:"table",tokenize:Je,resolveAll:Ze}}},{text:{91:et}}])}(t)),i.push([{transforms:[x],enter:{literalAutolink:p,literalAutolinkEmail:d,literalAutolinkHttp:d,literalAutolinkWww:d},exit:{literalAutolink:b,literalAutolinkEmail:k,literalAutolinkHttp:m,literalAutolinkWww:g}},{enter:{gfmFootnoteDefinition:F,gfmFootnoteDefinitionLabelString:D,gfmFootnoteCall:O,gfmFootnoteCallString:S},exit:{gfmFootnoteDefinition:L,gfmFootnoteDefinitionLabelString:E,gfmFootnoteCall:M,gfmFootnoteCallString:A}},{canContainEols:["delete"],enter:{strikethrough:j},exit:{strikethrough:P}},{enter:{table:ae,tableData:fe,tableHeader:fe,tableRow:ce},exit:{codeText:he,table:se,tableData:ue,tableHeader:ue,tableRow:ue}},{exit:{taskListCheckValueChecked:me,taskListCheckValueUnchecked:me,paragraph:ge}}]),o.push(function(e){return{extensions:[{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:f,notInConstruct:h},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:f,notInConstruct:h},{character:":",before:"[ps]",after:"\\/",inConstruct:f,notInConstruct:h}]},{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:z,footnoteReference:T}},{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:I}],handlers:{delete:_}},de(e),{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:ke}}]}}(t))}}}]);
//# sourceMappingURL=954.96af8cdc.chunk.js.map