"use strict";(self.webpackChunkreadme_editor=self.webpackChunkreadme_editor||[]).push([[673],{7615:(n,t,e)=>{e.d(t,{d:()=>o});const r={};function o(n,t){const e=t||r;return u(n,"boolean"!==typeof e.includeImageAlt||e.includeImageAlt,"boolean"!==typeof e.includeHtml||e.includeHtml)}function u(n,t,e){if(function(n){return Boolean(n&&"object"===typeof n)}(n)){if("value"in n)return"html"!==n.type||e?n.value:"";if(t&&"alt"in n&&n.alt)return n.alt;if("children"in n)return l(n.children,t,e)}return Array.isArray(n)?l(n,t,e):""}function l(n,t,e){const r=[];let o=-1;for(;++o<n.length;)r[o]=u(n[o],t,e);return r.join("")}},1502:(n,t,e)=>{e.d(t,{B:()=>u});var r=e(8906),o=e(6239);const u={tokenize:function(n,t,e){return function(t){return(0,o.On)(t)?(0,r.N)(n,u,"linePrefix")(t):u(t)};function u(n){return null===n||(0,o.HP)(n)?t(n):e(n)}},partial:!0}},8906:(n,t,e)=>{e.d(t,{N:()=>o});var r=e(6239);function o(n,t,e,o){const u=o?o-1:Number.POSITIVE_INFINITY;let l=0;return function(o){if((0,r.On)(o))return n.enter(e),i(o);return t(o)};function i(o){return(0,r.On)(o)&&l++<u?(n.consume(o),i):(n.exit(e),t(o))}}},6239:(n,t,e)=>{e.d(t,{BM:()=>i,CW:()=>r,Ee:()=>a,HP:()=>s,JQ:()=>l,Ny:()=>p,On:()=>d,cx:()=>u,es:()=>h,lV:()=>o,ok:()=>c,ol:()=>f});const r=g(/[A-Za-z]/),o=g(/[\dA-Za-z]/),u=g(/[#-'*+\--9=?A-Z^-~]/);function l(n){return null!==n&&(n<32||127===n)}const i=g(/\d/),c=g(/[\dA-Fa-f]/),f=g(/[!-/:-@[-`{-~]/);function s(n){return null!==n&&n<-2}function a(n){return null!==n&&(n<0||32===n)}function d(n){return-2===n||-1===n||32===n}const h=g(/\p{P}|\p{S}/u),p=g(/\s/);function g(n){return function(t){return null!==t&&t>-1&&n.test(String.fromCharCode(t))}}},3440:(n,t,e)=>{function r(n,t,e,r){const o=n.length;let u,l=0;if(t=t<0?-t>o?0:o+t:t>o?o:t,e=e>0?e:0,r.length<1e4)u=Array.from(r),u.unshift(t,e),n.splice(...u);else for(e&&n.splice(t,e);l<r.length;)u=r.slice(l,l+1e4),u.unshift(t,0),n.splice(...u),l+=1e4,t+=1e4}function o(n,t){return n.length>0?(r(n,n.length,0,t),n):t}e.d(t,{V:()=>o,m:()=>r})},7164:(n,t,e)=>{e.d(t,{S:()=>o});var r=e(6239);function o(n){return null===n||(0,r.Ee)(n)||(0,r.Ny)(n)?1:(0,r.es)(n)?2:void 0}},3366:(n,t,e)=>{e.d(t,{y:()=>u});var r=e(3440);const o={}.hasOwnProperty;function u(n){const t={};let e=-1;for(;++e<n.length;)l(t,n[e]);return t}function l(n,t){let e;for(e in t){const r=(o.call(n,e)?n[e]:void 0)||(n[e]={}),u=t[e];let l;if(u)for(l in u){o.call(r,l)||(r[l]=[]);const n=u[l];i(r[l],Array.isArray(n)?n:n?[n]:[])}}}function i(n,t){let e=-1;const o=[];for(;++e<t.length;)("after"===t[e].add?n:o).push(t[e]);(0,r.m)(n,0,0,o)}},1061:(n,t,e)=>{function r(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}e.d(t,{B:()=>r})},4646:(n,t,e)=>{function r(n,t,e){const r=[];let o=-1;for(;++o<n.length;){const u=n[o].resolveAll;u&&!r.includes(u)&&(t=u(t,e),r.push(u))}return t}e.d(t,{W:()=>r})}}]);
//# sourceMappingURL=673.e580a31a.chunk.js.map