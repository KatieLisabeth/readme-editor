"use strict";(self.webpackChunkreadme_editor=self.webpackChunkreadme_editor||[]).push([[211],{211:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(573),a=r(259);const o=/[#.]/g;var i=r(944),l=r(312),s=r(168);const u=new Set(["button","menu","reset","submit"]),p={}.hasOwnProperty;function f(e,t,r){const n=r&&function(e){const t={};let r=-1;for(;++r<e.length;)t[e[r].toLowerCase()]=e[r];return t}(r);return function(r,a){let i,l=-1;for(var s=arguments.length,f=new Array(s>2?s-2:0),h=2;h<s;h++)f[h-2]=arguments[h];if(void 0===r||null===r){i={type:"root",children:[]};const e=a;f.unshift(e)}else if(i=function(e,t){const r=e||"",n={};let a,i,l=0;for(;l<r.length;){o.lastIndex=l;const e=o.exec(r),t=r.slice(l,e?e.index:r.length);t&&(a?"#"===a?n.id=t:Array.isArray(n.className)?n.className.push(t):n.className=[t]:i=t,l+=t.length),e&&(a=e[0],l++)}return{type:"element",tagName:i||t||"div",properties:n,children:[]}}(r,t),i.tagName=i.tagName.toLowerCase(),n&&p.call(n,i.tagName)&&(i.tagName=n[i.tagName]),function(e,t){if(null===e||void 0===e||"object"!==typeof e||Array.isArray(e))return!1;if("input"===t||!e.type||"string"!==typeof e.type)return!0;if("children"in e&&Array.isArray(e.children))return!1;if("button"===t)return u.has(e.type.toLowerCase());return!("value"in e)}(a,i.tagName)){let t;for(t in a)p.call(a,t)&&c(e,i.properties,t,a[t])}else f.unshift(a);for(;++l<f.length;)y(i.children,f[l]);return"element"===i.type&&"template"===i.tagName&&(i.content={type:"root",children:i.children},i.children=[]),i}}function c(e,t,r,n){const o=(0,i.I)(e,r);let l,u=-1;if(void 0!==n&&null!==n){if("number"===typeof n){if(Number.isNaN(n))return;l=n}else l="boolean"===typeof n?n:"string"===typeof n?o.spaceSeparated?(0,s.q)(n):o.commaSeparated?(0,a.q)(n):o.commaOrSpaceSeparated?(0,s.q)((0,a.q)(n).join(" ")):h(o,o.property,n):Array.isArray(n)?n.concat():"style"===o.property?function(e){const t=[];let r;for(r in e)p.call(e,r)&&t.push([r,e[r]].join(": "));return t.join("; ")}(n):String(n);if(Array.isArray(l)){const e=[];for(;++u<l.length;){const t=h(o,o.property,l[u]);e[u]=t}l=e}if("className"===o.property&&Array.isArray(t.className)){const e=l;l=t.className.concat(e)}t[o.property]=l}}function y(e,t){let r=-1;if(void 0===t||null===t);else if("string"===typeof t||"number"===typeof t)e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(;++r<t.length;)y(e,t[r]);else{if("object"!==typeof t||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");"root"===t.type?y(e,t.children):e.push(t)}}function h(e,t,r){if("string"===typeof r){if(e.number&&r&&!Number.isNaN(Number(r)))return Number(r);if((e.boolean||e.overloadedBoolean)&&(""===r||(0,l.S)(r)===(0,l.S)(t)))return!0}return r}const d=f(n.qy,"div"),g=(f(n.JW,"g",["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"]),{});function m(e){const t=e||g,r=v(t.css),n=t.dir,a=v(t.js),o=t.language||"en",i=v(t.link);let l=v(t.meta);const s=v(t.script),u=v(t.style),p=t.title;return!1!==t.responsive&&(l=[{content:"width=device-width, initial-scale=1",name:"viewport"},...l]),function(e,t){const f=t.data.meta?.title||t.data.matter?.title||p||t.stem,c="root"===e.type?[...e.children]:[e],y=[{type:"text",value:"\n"},d("meta",{charSet:"utf-8"})];let h=-1;for(c.length>0&&c.unshift({type:"text",value:"\n"}),f&&y.push({type:"text",value:"\n"},d("title",f));++h<l.length;)y.push({type:"text",value:"\n"},d("meta",l[h]));for(h=-1;++h<i.length;)y.push({type:"text",value:"\n"},d("link",i[h]));for(h=-1;++h<u.length;)y.push({type:"text",value:"\n"},d("style",u[h]));for(h=-1;++h<r.length;)y.push({type:"text",value:"\n"},d("link",{href:r[h],rel:"stylesheet"}));for(y.push({type:"text",value:"\n"}),h=-1;++h<s.length;)c.push({type:"text",value:"\n"},d("script",s[h]));for(h=-1;++h<a.length;)c.push({type:"text",value:"\n"},d("script",{src:a[h]}));return c.push({type:"text",value:"\n"}),{type:"root",children:[{type:"doctype"},{type:"text",value:"\n"},d("html",{dir:n,lang:o},[{type:"text",value:"\n"},d("head",y),{type:"text",value:"\n"},d("body",c),{type:"text",value:"\n"}]),{type:"text",value:"\n"}]}}}function v(e){return null===e||void 0===e?[]:Array.isArray(e)?e:[e]}}}]);
//# sourceMappingURL=211.b3fa5b01.chunk.js.map