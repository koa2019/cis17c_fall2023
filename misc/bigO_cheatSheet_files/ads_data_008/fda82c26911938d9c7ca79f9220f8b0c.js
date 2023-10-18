(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m=this||self;function aa(a){a=a.o;const b=encodeURIComponent;let c="";a.platform&&(c+="&uap="+b(a.platform));a.platformVersion&&(c+="&uapv="+b(a.platformVersion));a.uaFullVersion&&(c+="&uafv="+b(a.uaFullVersion));a.architecture&&(c+="&uaa="+b(a.architecture));a.model&&(c+="&uam="+b(a.model));a.bitness&&(c+="&uab="+b(a.bitness));a.fullVersionList&&(c+="&uafvl="+b(a.fullVersionList.map(d=>b(d.brand)+";"+b(d.version)).join("|")));"undefined"!==typeof a.wow64&&(c+="&uaw="+Number(a.wow64));return c}
function ba(a,b){return a.g?a.j.slice(0,a.g.index)+b+a.j.slice(a.g.index):a.j+b}function ca(a){let b="&act=1&ri=1";a.h&&a.o&&(b+=aa(a));return ba(a,b)}function da(a,b){return a.h&&a.i||a.m?1==b?a.h?a.i:ba(a,"&dct=1"):2==b?ba(a,"&ri=2"):ba(a,"&ri=16"):a.j}
var ea=class{constructor({url:a,O:b}){this.j=a;this.o=b;b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.i=c}}};var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function ha(a,b){return a<b?-1:a>b?1:0};var p=class{constructor(a){this.g=a}toString(){return this.g.toString()}};p.prototype.h=!0;var ia;try{new URL("s://g"),ia=!0}catch(a){ia=!1}var ka=ia,la={},ma=new p("about:invalid#zClosurez",la);function na(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};function oa(a){let b=0;for(const c in a)b++};var pa,qa;a:{for(var ra=["CLOSURE_FLAGS"],sa=m,ta=0;ta<ra.length;ta++)if(sa=sa[ra[ta]],null==sa){qa=null;break a}qa=sa}var ua=qa&&qa[610401301];pa=null!=ua?ua:!1;function t(){var a=m.navigator;return a&&(a=a.userAgent)?a:""}var v;const va=m.navigator;v=va?va.userAgentData||null:null;function wa(a){return pa?v?v.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function w(a){return-1!=t().indexOf(a)};function x(){return pa?!!v&&0<v.brands.length:!1}function xa(){return x()?!1:w("Opera")}function ya(){return w("Firefox")||w("FxiOS")}function za(){return x()?wa("Chromium"):(w("Chrome")||w("CriOS"))&&!(x()?0:w("Edge"))||w("Silk")};function Aa(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b};/*

 SPDX-License-Identifier: Apache-2.0
*/
class Ba{constructor(a){this.X=a}}function y(a){return new Ba(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Ca=new Ba(a=>/^[^:]*([/?#]|$)/.test(a));var Da=y("http"),Ea=y("https"),Fa=y("ftp"),Ga=y("mailto"),Ha=y("intent"),Ia=y("market"),Ka=y("itms"),La=y("itms-appss");const Ma=[y("data"),Da,Ea,Ga,Fa,Ca];function Na(a,b=Ma){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Ba&&d.X(a))return new p(a,la)}}function Oa(a,b=Ma){return Na(a,b)||ma};function Pa(a){m.setTimeout(()=>{throw a;},0)};function Qa(){return w("iPhone")&&!w("iPod")&&!w("iPad")};function Ra(a){Ra[" "](a);return a}Ra[" "]=function(){};var Sa=xa(),Ta=x()?!1:w("Trident")||w("MSIE"),Ua=w("Edge"),Va=w("Gecko")&&!(-1!=t().toLowerCase().indexOf("webkit")&&!w("Edge"))&&!(w("Trident")||w("MSIE"))&&!w("Edge"),Wa=-1!=t().toLowerCase().indexOf("webkit")&&!w("Edge"),Xa=Qa(),Ya=w("iPad"),Za;
a:{var $a="",ab=function(){var a=t();if(Va)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ua)return/Edge\/([\d\.]+)/.exec(a);if(Ta)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Wa)return/WebKit\/(\S+)/.exec(a);if(Sa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();ab&&($a=ab?ab[1]:"");if(Ta){var bb,cb=m.document;bb=cb?cb.documentMode:void 0;if(null!=bb&&bb>parseFloat($a)){Za=String(bb);break a}}Za=$a}var db=Za;var eb=ya(),fb=Qa()||w("iPod"),gb=w("iPad"),ib=w("Android")&&!(za()||ya()||xa()||w("Silk")),jb=za(),kb=w("Safari")&&!(za()||(x()?0:w("Coast"))||xa()||(x()?0:w("Edge"))||(x()?wa("Microsoft Edge"):w("Edg/"))||(x()?wa("Opera"):w("OPR"))||ya()||w("Silk")||w("Android"))&&!(Qa()||w("iPad")||w("iPod"));var lb={},nb=null;function z(a){return Array.prototype.slice.call(a)};const B=Symbol();function ob(a){const b=a[B]|0;1!==(b&1)&&(Object.isFrozen(a)&&(a=z(a)),a[B]=b|1)}function pb(a,b){Object.isFrozen(a)&&(a=z(a));a[B]=b;return a}function qb(){var a=[];a[B]|=1;return a}function E(a){a[B]|=34;return a}function rb(a,b){b[B]=(a|0)&-255}function sb(a,b){b[B]=(a|34)&-221}function tb(a){a=a>>11&1023;return 0===a?536870912:a};var ub={};function vb(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let zb;var F;const Ab=[];Ab[B]=39;F=Object.freeze(Ab);class Bb{constructor(a,b,c){this.i=0;this.g=a;this.h=b;this.j=c}next(){if(this.i<this.g.length){const a=this.g[this.i++];return{done:!1,value:this.h?this.h.call(this.j,a):a}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Bb(this.g,this.h,this.j)}}var Cb={};function Db(){const a=Error();Aa(a,"incident");return a};function Eb(a){if(!Number.isFinite(a)){const b=Db();Pa(b)}return a}function Fb(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a}function G(a){return null==a||"string"===typeof a?a:void 0}function Gb(a,b,c,d){var e=!1;if(null!=a&&"object"===typeof a&&!(e=Array.isArray(a))&&a.B===ub)return a;if(!e)return c?d&2?(a=b[Hb])?b=a:(a=new b,E(a.l),b=b[Hb]=a):b=new b:b=void 0,b;e=c=a[B]|0;0===e&&(e|=d&32);e|=d&2;e!==c&&(a[B]=e);return new b(a)}const Hb=Symbol();
function Ib(a){return a}function Jb(a,b,c){return"string"===typeof a?a:c?"":void 0};let Kb;function Lb(a){if(a.h&2)throw Error("Cannot mutate an immutable Map");}
var H=class extends Map{constructor(a,b,c=Ib,d=Ib){super();let e=a[B]|0;e|=64;this.h=a[B]=e;this.i=b;this.g=c||Ib;this.m=this.i?Mb:d||Ib;for(let f=0;f<a.length;f++){const h=a[f],g=c(h[0],!1,!0);let k=h[1];b?void 0===k&&(k=null):k=d(h[1],!1,!0,void 0,void 0,e);super.set(g,k)}}s(a=Nb){return this.j(a)}j(a=Nb){const b=[],c=super.entries();for(var d;!(d=c.next()).done;)d=d.value,d[0]=a(d[0]),d[1]=a(d[1]),b.push(d);return b}clear(){Lb(this);super.clear()}delete(a){Lb(this);return super.delete(this.g(a,
!0,!1))}entries(){var a=this.o();return new Bb(a,Ob,this)}keys(){return this.v()}values(){var a=this.o();return new Bb(a,H.prototype.get,this)}forEach(a,b){super.forEach((c,d)=>{a.call(b,this.get(d),d,this)})}set(a,b){Lb(this);a=this.g(a,!0,!1);return null==a?this:null==b?(super.delete(a),this):super.set(a,this.m(b,!0,!0,this.i,!1,this.h))}has(a){return super.has(this.g(a,!1,!1))}get(a){a=this.g(a,!1,!1);const b=super.get(a);if(void 0!==b){var c=this.i;return c?(c=this.m(b,!1,!0,c,this.u,this.h),
c!==b&&super.set(a,c),c):b}}o(){return Array.from(super.keys())}v(){return super.keys()}[Symbol.iterator](){return this.entries()}};H.prototype.toJSON=void 0;function Mb(a,b,c,d,e,f){a=Gb(a,d,c,f);e&&(a=Pb(a));return a}function Nb(a){return a}function Ob(a){return[a,this.get(a)]};function Qb(a,b){return Rb(b)}function Rb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(null!=a&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}if(a instanceof H)return a.s()}}return a};function Sb(a,b,c){a=z(a);var d=a.length;const e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(const f in e)b[f]=c(e[f])}return a}function Tb(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&(a[B]|0)&1?void 0:f&&(a[B]|0)&2?a:Ub(a,b,c,void 0!==d,e,f);else if(vb(a)){const h={};for(let g in a)h[g]=Tb(a[g],b,c,d,e,f);a=h}else a=b(a,d);return a}}
function Ub(a,b,c,d,e,f){const h=d||c?a[B]|0:0;d=d?!!(h&32):void 0;a=z(a);for(let g=0;g<a.length;g++)a[g]=Tb(a[g],b,c,d,e,f);c&&c(h,a);return a}function Vb(a){return Tb(a,Wb,void 0,void 0,!1,!1)}function Wb(a){return a.B===ub?a.toJSON():a instanceof H?a.s(Vb):Rb(a)};function Xb(a,b,c=sb){if(null!=a){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const d=a[B]|0;return d&2?a:!b||d&68||!(d&32||0===d)?Ub(a,Xb,d&4?sb:c,!0,!1,!0):(a[B]=d|34,a)}a.B===ub?(b=a.l,c=b[B],a=c&2?a:Yb(a,b,c,!0)):a instanceof H&&(b=E(a.j(Xb)),a=new H(b,a.i,a.g,a.m));return a}}function Zb(a){const b=a.l;return Yb(a,b,b[B],!1)}function Yb(a,b,c,d){a=a.constructor;Kb=b=$b(b,c,d);b=new a(b);Kb=void 0;return b}
function $b(a,b,c){const d=c||b&2?sb:rb,e=!!(b&32);a=Sb(a,b,f=>Xb(f,e,d));a[B]=a[B]|32|(c?2:0);return a}function Pb(a){const b=a.l,c=b[B];return c&2?Yb(a,b,c,!1):a};function I(a,b){a=a.l;return ac(a,a[B],b)}function ac(a,b,c,d){if(-1===c)return null;if(c>=tb(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}function bc(a,b,c){const d=a.l,e=d[B];if(e&2)throw Error();J(d,e,b,c);return a}
function J(a,b,c,d,e){var f=tb(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&(a[B]=e)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}function cc(a,b,c){a=ac(a,b,c);Array.isArray(a)||(a=F);c=a[B]|0;c&1||(c|=1,a[B]=c);b&2?c&2||E(a):c&32&&!(c&2)&&(a[B]&=-33);return a}let dc;function ec(){let a;return null!=(a=dc)?a:dc=new H(E([]),void 0,void 0,void 0,Cb)}
function fc(a,b,c,d,e,f){const h=b&2;a:{var g=c,k=b&2;c=!1;if(null==g){if(k){a=ec();break a}g=[]}else if(g.constructor===H){if(0==(g.h&2)||k){a=g;break a}g=g.j()}else Array.isArray(g)?c=!!((g[B]|0)&2):g=[];if(k){if(!g.length){a=ec();break a}c||(c=!0,E(g))}else if(c){c=!1;k=z(g);for(g=0;g<k.length;g++){const l=k[g]=z(k[g]);Array.isArray(l[1])&&(l[1]=E(l[1]))}g=k}c||((g[B]|0)&64?g[B]&=-33:32&b&&(g[B]|=32));f=new H(g,e,Jb,f);J(a,b,d,f,!1);a=f}if(null==a)return a;!h&&e&&(a.u=!0);return a}
function gc(a,b){a=a.l;const c=a[B];return fc(a,c,ac(a,c,b),b,void 0,Jb)}function L(a,b,c){a=a.l;const d=a[B],e=ac(a,d,c,!1);b=Gb(e,b,!1,d);b!==e&&null!=b&&J(a,d,c,b,!1);return b}function M(a,b,c){b=L(a,b,c);if(null==b)return b;a=a.l;const d=a[B];if(!(d&2)){const e=Pb(b);e!==b&&(b=e,J(a,d,c,b,!1))}return b}
function hc(a){var b=a.l,c=b[B];a=!!(c&2);var d=a?1:2,e=ic,f=!!(c&2),h=cc(b,c,7);if(h!==F&&(h[B]|0)&4){if(3!==d)if(f)2===d&&(d=h[B]|0,h=z(h),h[B]=d,J(b,c,7,h));else if(f=Object.isFrozen(h),1===d)f||Object.freeze(h);else{d=h[B]|0;e=d&-33;if(f||d&2)e&=-3,h=z(h),d=0,J(b,c,7,h);d!==e&&(h[B]=e)}b=h}else{var g=h;h=!!(c&2);var k=!!((g[B]|0)&2);f=g;!h&&k&&(g=z(g));var l=c|(k?2:0);k=k||void 0;let n=0,q=0;for(;n<g.length;n++){const r=Gb(g[n],e,!1,l);void 0!==r&&(k=k||r.l[B]&2,g[q++]=r)}q<n&&(g.length=q);e=
g;g=e[B]|0;l=g|5;k=k?l&-9:l|8;g!=k&&(e=pb(e,k));g=e;f!==g&&J(b,c,7,g);(h&&2!==d||1===d)&&Object.freeze(g);b=g}if(!(a||(b[B]|0)&8)){for(a=0;a<b.length;a++)c=b[a],d=Pb(c),c!==d&&(b[a]=d);b[B]|=8}return b}
function jc(a,b){{a=a.l;const c=a[B],d=c&2;let e=cc(a,c,b),f=e[B]|0;if(!(f&4)){Object.isFrozen(e)&&(f=0,e=z(e),J(a,c,b,e));let h=0,g=0;for(;h<e.length;h++){const k=G(e[h]);null!=k&&(e[g++]=k)}g<h&&(e.length=g);f|=5;d&&(f|=34);e[B]=f;f&2&&Object.freeze(e)}!d&&(f&2||Object.isFrozen(e))&&(e=z(e),e[B]|=5,J(a,c,b,e));b=e}return b}function N(a,b){return null!=a?a:b}function O(a,b){a=I(a,b);return N(null==a?a:"boolean"===typeof a||"number"===typeof a?!!a:void 0,!1)}
function P(a,b){return N(G(I(a,b)),"")}function Q(a,b,c=0){return N(I(a,b),c)}function kc(a,b,c){if(null!=c){if("boolean"!==typeof c)throw a=typeof c,Error(`Expected boolean but got ${"object"!=a?a:c?Array.isArray(c)?"array":a:"null"}: ${c}`);c=!!c}return bc(a,b,c)}function lc(a,b,c){if(null!=c){if("number"!==typeof c)throw a=Error(),Aa(a,"warning"),a;if(!Number.isFinite(c)){const d=Db();Pa(d)}}bc(a,b,c)}function R(a,b,c){if(null!=c&&"string"!==typeof c)throw Error();return bc(a,b,c)};function mc(a){zb=!0;try{return JSON.stringify(a.toJSON(),Qb)}finally{zb=!1}}
var S=class{constructor(a){a:{null==a&&(a=Kb);Kb=void 0;if(null==a){var b=96;a=[]}else{if(!Array.isArray(a))throw Error();b=a[B]|0;if(b&64)break a;var c=a;b|=64;var d=c.length;if(d){var e=d-1;d=c[e];if(vb(d)){b|=256;const f=+!!(b&512)-1;e-=f;if(1024<=e){e=1023+f;const h=c.length;for(let g=e;g<h;g++){const k=c[g];null!=k&&k!==d&&(d[g-f]=k)}c.length=e+1;c[e]=d;e=1023}b=b&-2095105|(e&1023)<<11}}}a[B]=b}this.l=a}toJSON(){if(zb)var a=nc(this,this.l,!1);else a=Ub(this.l,Wb,void 0,void 0,!1,!1),a=nc(this,
a,!0);return a}};S.prototype.B=ub;S.prototype.toString=function(){return nc(this,this.l,!1).toString()};
function nc(a,b,c){var d=a.constructor.C,e=tb((c?a.l:b)[B]),f=!1;if(d){if(!c){b=z(b);var h;if(b.length&&vb(h=b[b.length-1]))for(f=0;f<d.length;f++)if(d[f]>=e){Object.assign(b[b.length-1]={},h);break}f=!0}e=b;c=!c;h=a.l[B];a=tb(h);h=+!!(h&512)-1;var g;for(let D=0;D<d.length;D++){var k=d[D];if(k<a){k+=h;var l=e[k];null==l?e[k]=c?F:qb():c&&l!==F&&ob(l)}else{if(!g){var n=void 0;e.length&&vb(n=e[e.length-1])?g=n:e.push(g={})}l=g[k];null==g[k]?g[k]=c?F:qb():c&&l!==F&&ob(l)}}}d=b.length;if(!d)return b;let q,
r;if(vb(g=b[d-1])){a:{var u=g;n={};e=!1;for(let D in u)c=u[D],Array.isArray(c)&&c!=c&&(e=!0),null!=c?n[D]=c:e=!0;if(e){for(let D in n){u=n;break a}u=null}}u!=g&&(q=!0);d--}for(;0<d;d--){g=b[d-1];if(null!=g)break;r=!0}if(!q&&!r)return b;var C;f?C=b:C=Array.prototype.slice.call(b,0,d);b=C;f&&(b.length=d);u&&b.push(u);return b};var oc=class extends S{constructor(){super()}};var pc=class extends S{};var qc=class extends S{};var ic=class extends S{A(){return P(this,3)}N(a){kc(this,5,a)}};var T=class extends S{A(){return P(this,1)}N(a){kc(this,2,a)}};var rc=class extends S{};var sc=class extends S{};sc.C=[6,7];function tc(a){a=a.l;const b=a[B];return fc(a,b,ac(a,b,1),1,sc)}var uc=class extends S{};uc.C=[17];var vc=class extends S{};var wc=class extends S{constructor(){super()}};function xc(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var yc={capture:!0},zc={passive:!0},Ac=xc(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(b){}return a});function Bc(a){return a?a.passive&&Ac()?a:a.capture||!1:!1}function U(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Bc(d))};function Cc(a,b){if(!(b instanceof p||b instanceof p)){b="object"==typeof b&&b.h?b.g.toString():String(b);b:{var c=b;if(ka){try{var d=new URL(c)}catch(e){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(e){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"===c&&(b="about:invalid#zClosurez");b=new p(b,la)}a.href=b instanceof p&&b.constructor===p?b.g:"type_error:SafeUrl"};var Dc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}var Fc=/#|$/;
function Gc(a,b){var c=a.search(Fc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))};function Hc(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}var Ic=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};let Jc=[];const Pc=()=>{const a=Jc;Jc=[];for(const b of a)try{b()}catch(c){}};
var Qc=a=>{Jc.push(a);1==Jc.length&&(window.Promise?Promise.resolve().then(Pc):window.setImmediate?setImmediate(Pc):setTimeout(Pc,0))},Rc=a=>{var b=V;"complete"===b.readyState||"interactive"===b.readyState?Qc(a):b.addEventListener("DOMContentLoaded",a)},Sc=a=>{var b=window;"complete"===b.document.readyState?Qc(a):b.addEventListener("load",a)};function Tc(a=document){return a.createElement("img")};function Uc(a,b,c=null,d=!1){Vc(a,b,c,d)}function Vc(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=Tc(a.document);if(c||d){const f=h=>{c&&c(h);if(d){h=a.google_image_requests;const g=Array.prototype.indexOf.call(h,e,void 0);0<=g&&Array.prototype.splice.call(h,g,1)}e.removeEventListener&&e.removeEventListener("load",f,Bc());e.removeEventListener&&e.removeEventListener("error",f,Bc())};U(e,"load",f);U(e,"error",f)}e.src=b;a.google_image_requests.push(e)}
function Wc(a,b){var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):Uc(a,b,void 0,!1)};let Xc=0;function Yc(a){return(a=Zc(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Zc(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function $c(a){if(!(.01<Math.random())){const b=Zc(a,document.currentScript);a=`https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Yc(a)}&sample=${.01}`;Wc(window,a)}};var V=document,W=window;const ad=[Da,Ea,Ga,Fa,Ca,Ia,Ka,Ha,La];function bd(a,b){if(a instanceof p)return a;const c=Oa(a,ad);c===ma&&b(a);return c}
var cd=a=>{var b=`${"http:"===W.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c={id:"unsafeurl",ctx:a,url:c};var d=[];for(e in c)Ec(e,c[e],d);var e=d.join("&");if(e){c=b.indexOf("#");0>c&&(c=b.length);d=b.indexOf("?");if(0>d||d>c){d=c;var f=""}else f=b.substring(d+1,c);c=[b.slice(0,d),f,b.slice(c)];d=c[1];c[1]=e?d?d+"&"+e:e:d;e=c[0]+(c[1]?"?"+c[1]:"")+c[2]}else e=b;navigator.sendBeacon&&navigator.sendBeacon(e,"")}};var dd=a=>{var b=V;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class ed{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const fd=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var gd=class{constructor(a,b){this.g=a;this.h=b}},hd=class{constructor(a,b){this.url=a;this.M=!!b;this.depth=null}};let id=null;function jd(){const a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function kd(){const a=m.performance;return a&&a.now?a.now():null};var ld=class{constructor(a,b){var c=kd()||jd();this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()}};const X=m.performance,md=!!(X&&X.mark&&X.measure&&X.clearMarks),nd=xc(()=>{var a;if(a=md){var b;if(null===id){id="";try{a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}a&&(id=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=id;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function od(a){a&&X&&nd()&&(X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class pd{constructor(){var a=window;this.h=[];this.i=a||m;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=nd()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new ld(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;X&&nd()&&X.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(kd()||jd())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;X&&nd()&&X.mark(b);!this.g||
2048<this.h.length||this.h.push(a)}}};function qd(a,b){const c={};c[a]=b;return[c]}function rd(a,b,c,d,e){const f=[];Hc(a,function(h,g){(h=sd(h,b,c,d,e))&&f.push(g+"="+h)});return f.join(b)}
function sd(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let h=0;h<a.length;h++)f.push(sd(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(rd(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function td(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
function ud(a,b){let c="https://pagead2.googlesyndication.com"+b,d=td(a)-b.length;if(0>d)return"";a.g.sort(function(f,h){return f-h});b=null;let e="";for(let f=0;f<a.g.length;f++){const h=a.g[f],g=a.h[h];for(let k=0;k<g.length;k++){if(!d){b=null==b?h:b;break}let l=rd(g[k],a.i,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.i;break}b=null==b?h:b}}}a="";null!=b&&(a=e+"trn="+b);return c+a}class vd{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function wd(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b}
function xd(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{od(e),c=a.m(b,new ed(f,{message:wd(f)}),void 0,void 0)}catch(h){a.j(217,h)}if(c){let h,g;null==(h=window.console)||null==(g=h.error)||g.call(h,f)}else throw f;}return d}function yd(a,b){var c=zd;return(...d)=>xd(c,a,()=>b.apply(void 0,d))}
var Cd=class{constructor(a=null){this.pinger=Ad;this.g=a;this.h=null;this.i=!1;this.m=this.j}j(a,b,c,d,e){e=e||"jserror";let f;try{const A=new vd;A.g.push(1);A.h[1]=qd("context",a);b.error&&b.meta&&b.id||(b=new ed(b,{message:wd(b)}));if(b.msg){var h=b.msg.substring(0,512);A.g.push(2);A.h[2]=qd("msg",h)}const Ja=b.meta||{};if(this.h)try{this.h(Ja)}catch(K){}if(d)try{d(Ja)}catch(K){}b=[Ja];A.g.push(3);A.h[3]=b;d=m;b=[];let wb;h=null;do{var g=d;try{var k;if(k=!!g&&null!=g.location.href)b:{try{Ra(g.foo);
k=!0;break b}catch(K){}k=!1}var l=k}catch(K){l=!1}l?(wb=g.location.href,h=g.document&&g.document.referrer||null):(wb=h,h=null);b.push(new hd(wb||""));try{d=g.parent}catch(K){d=null}}while(d&&g!=d);for(let K=0,Kc=b.length-1;K<=Kc;++K)b[K].depth=Kc-K;g=m;if(g.location&&g.location.ancestorOrigins&&g.location.ancestorOrigins.length==b.length-1)for(l=1;l<b.length;++l){var n=b[l];n.url||(n.url=g.location.ancestorOrigins[l-1]||"",n.M=!0)}var q=b;let xb=new hd(m.location.href,!1);g=null;const yb=q.length-
1;for(n=yb;0<=n;--n){var r=q[n];!g&&fd.test(r.url)&&(g=r);if(r.url&&!r.M){xb=r;break}}r=null;const Xd=q.length&&q[yb].url;0!=xb.depth&&Xd&&(r=q[yb]);f=new gd(xb,r);if(f.h){var u=f.h.url||"";A.g.push(4);A.h[4]=qd("top",u)}var C={url:f.g.url||""};if(f.g.url){var D=f.g.url.match(Dc),Lc=D[1],Mc=D[3],Nc=D[4];q="";Lc&&(q+=Lc+":");Mc&&(q+="//",q+=Mc,Nc&&(q+=":"+Nc));var Oc=q}else Oc="";C=[C,{url:Oc}];A.g.push(5);A.h[5]=C;Bd(this.pinger,e,A,this.i,c)}catch(A){try{Bd(this.pinger,e,{context:"ecmserr",rctx:a,
msg:wd(A),url:f&&f.g.url},this.i,c)}catch(Ja){}}return!0}};class Dd{};function Bd(a,b,c,d=!1,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof vd?f=c:(f=new vd,Hc(c,(g,k)=>{var l=f;const n=l.j++;g=qd(k,g);l.g.push(n);l.h[n]=g}));const h=ud(f,"/pagead/gen_204?id="+b+"&");h&&Uc(m,h)}catch(f){}}function Ed(){var a=Ad,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}class Fd{constructor(){this.g=Math.random()}};let Ad,zd;const Y=new pd;var Gd=()=>{window.google_measure_js_timing||(Y.g=!1,Y.h!=Y.i.google_js_reporting_queue&&(nd()&&Array.prototype.forEach.call(Y.h,od,void 0),Y.h.length=0))};(a=>{Ad=null!=a?a:new Fd;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());Ed();zd=new Cd(Y);zd.h=b=>{const c=Xc;0!==c&&(b.jc=String(c),b.shv=Yc(c))};zd.i=!0;"complete"==window.document.readyState?Gd():Y.g&&U(window,"load",()=>{Gd()})})();
var Hd=(a,b)=>yd(a,b),Id=a=>{var b=Dd;var c="L";b.L&&b.hasOwnProperty(c)||(c=new b,b.L=c);b=[];!a.eid&&b.length&&(a.eid=b.toString());Bd(Ad,"gdn-asoch",a,!0)};function Jd(a=window){return a};oa({ia:0,ha:1,ea:2,Z:3,fa:4,aa:5,ga:6,ca:7,da:8,Y:9,ba:10,ka:11});oa({ma:0,na:1,la:2});[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);function Z(a){return(a=a.exec(t()))?a[1]:""}
var Kd=function(){if(eb)return Z(/Firefox\/([0-9.]+)/);if(Ta||Ua||Sa)return db;if(jb){if(Qa()||w("iPad")||w("iPod")||(pa&&v&&v.platform?"macOS"===v.platform:w("Macintosh"))){var a=Z(/CriOS\/([0-9.]+)/);if(a)return a}return Z(/Chrome\/([0-9.]+)/)}if(kb&&!(Qa()||w("iPad")||w("iPod")))return Z(/Version\/([0-9.]+)/);if(fb||gb){if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(t()))return a[1]+"."+a[2]}else if(ib)return(a=Z(/Android\s+([0-9.]+)/))?a:Z(/Version\/([0-9.]+)/);return""}();var Ld=(a,b)=>{b=P(a,2)||b;if(!b)return"";if(O(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];gc(a,4).forEach((e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Md=(a,b=[])=>{b=0<b.length?b:dd("data-asoch-targets");a=tc(a);const c=[];for(let g=0;g<b.length;++g){var d=b[g].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let k of e)if(!a.has(k)){f=!1;break}if(f){f=a.get(e[0]);
for(d=1;d<e.length;++d){var h=a.get(e[d]);f=Zb(f).toJSON();h=h.toJSON();const k=Math.max(f.length,h.length);for(let l=0;l<k;++l)null==f[l]&&(f[l]=h[l]);f=new sc(f)}e=gc(f,4);null!=I(f,5)&&e.set("nb",Q(f,5,0).toString());c.push({element:b[g],data:f})}else Id({type:1,data:d})}return c},Pd=(a,b,c,d)=>{c=Ld(b,c);if(0!==c.length){if("2"===Gc(c,"ase")&&1087!==d){const f=609===d;var e;const h=!(null==(e=V.featurePolicy)||!e.allowedFeatures().includes("attribution-reporting"));e=f?4:h?6:5;let g="";f||h&&
!Nd(c)?(c=Od(c,"nis",e.toString()),a.setAttribute("attributionsrc",g)):h&&Nd(c)&&(g=Od(ca(new ea({url:c})),"nis",e.toString()),a.setAttribute("attributionsrc",g))}Cc(a,bd(c,cd(d)));a.target||(a.target=null!=G(I(b,11))?P(b,11):"_top")}},Qd=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!O(a,1)){const c=b.element;Pd(c,a,c.href,609)}},Nd=a=>!/[?&]dsh=1(&|$)/.test(a)&&/[?&]ae=1(&|$)/.test(a),Rd=a=>{const b=m.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&void 0!==L(a,rc,8)){const d=P(M(a,
rc,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,P(M(a,rc,8),6));break}}},Sd=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&void 0!==L(a,T,12)&&(d.push(M(a,T,12)),c.push(M(a,T,12).A()));e=(f,h)=>{if(h)for(const g of d)h[g.A()]&&g.N(!0)};a=m.oneAfmaInstance;for(const f of c){let h;null==(h=a)||h.canOpenAndroidApp(f,e,()=>{},b)}},Ud=(a,b,c,d,e)=>{if(!b||void 0===L(b,rc,8))return!1;const f=M(b,rc,8);let h=P(f,2);gc(b,10).forEach((l,n)=>{var q=h;n=encodeURIComponent(n);const r=encodeURIComponent(l);
l=new RegExp("[?&]"+n+"=([^&]+)");const u=l.exec(q);console.log(u);n=n+"="+r;h=u?q.replace(l,u[0].charAt(0)+n):q.replace("?","?"+n+"&")});Td(b)&&O(b,15)&&!/[?&]label=/.test(c)&&(c=Od(c,"label","deep_link_fallback"));const g=l=>d.openStoreOverlay(l,void 0,P(f,6)),k=l=>Wc(W,l);return d.redirectForStoreU2({clickUrl:c,trackingUrl:P(f,3),finalUrl:h,pingFunc:O(b,13)?d.httpTrack:e?k:d.click,openFunc:(null==a?0:O(a,1))?g:d.openIntentOrNativeApp,isExternalClickUrl:O(b,13)})},Wd=(a,b,c,d,e,f,h,g=!1)=>{e=O(e,
15);const k=Nd(f);!a||!b||e&&k||(f=g?Vd(f):Vd(f,h.click));f&&f.startsWith("intent:")?h.openIntentOrNativeApp(f):c?d?h.openBrowser(f):h.openChromeCustomTab(f):h.openSystemBrowser(f,{useFirstPackage:!0,useRunningProcess:!0})},Vd=(a,b=null)=>{if(null!==b){const c=new ea({url:a});if(c.h&&c.i||c.m)return b(ca(c)),da(c,1)}else return{O:b}={},b=new ea({url:a,O:b}),b.h&&b.i||b.m?navigator.sendBeacon?navigator.sendBeacon(ca(b),"")?da(b,1):da(b,2):da(b,0):a;return a},Yd=(a,b=!0)=>{b&&W.fetch?W.fetch(a,{method:"GET",
keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||Uc(W,a)}):Uc(W,a)},Od=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},Td=a=>{for(const b of hc(a))if(3===Q(b,1,0)&&P(b,2))return!0;return!1};var Zd=(a,b)=>a&&(a=a.match(b+"=([^&]+)"))&&2==a.length?a[1]:"";var $d=class extends S{constructor(){super()}};function ae(a,b){return R(a,2,b)}function be(a,b){return R(a,3,b)}function ce(a,b){return R(a,4,b)}function de(a,b){return R(a,5,b)}function ee(a,b){return R(a,9,b)}function fe(a,b){const c=a.l,d=c[B];if(d&2)throw Error();if(null!=b){const e=b[B]|0;let f=e|5;if(!(e&2)){let h=!0;for(let g=0;g<b.length;g++){const k=b[g];h=h&&!((k.l[B]|0)&2)}h&&(f|=8)}f!==e&&(b=pb(b,f),f&2&&Object.freeze(b))}null==b&&(b=void 0);J(c,d,10,b);return a}function ge(a,b){return kc(a,11,b)}
function he(a,b){return R(a,1,b)}function ie(a,b){return kc(a,7,b)}var je=class extends S{constructor(){super()}};je.C=[10,6];const ke="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function le(a){let b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function me(a){let b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function ne(){var a=window;if(!me(a))return null;const b=le(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(ke).then(c=>{null!=b.uach||(b.uach=c);return c});return b.uach_promise=a}
function oe(a){let b;return ge(fe(de(ae(he(ce(ie(ee(be(new je,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(c=>{var d=new $d;d=R(d,1,c.brand);return R(d,2,c.version)}))||[]),a.wow64||!1)}function pe(){let a,b;return null!=(b=null==(a=ne())?void 0:a.then(c=>oe(c)))?b:null};function qe(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null==G(I(c,2))&&R(c,2,a.href)}}function re(a,b){return na(a,c=>c.element===b)}function se(a){Rc(Hd(556,()=>{new te(a||{})}))}
function ue(a,b){if(!b.defaultPrevented||a.u===b){for(var c,d,e=b.target;(!c||!d)&&e;){d||"A"!=e.tagName||(d=e);var f=e.hasAttribute("data-asoch-targets"),h=e.hasAttribute("data-asoch-fixed-value");if(!c)if(h)c=new sc(JSON.parse(e.getAttribute("data-asoch-fixed-value"))||[]);else if("A"==e.tagName||f)if(f=f&&"true"===e.getAttribute("data-asoch-is-dynamic")?Md(a.h,[e]):a.g,f=re(f,e))c=f.data;e=e.parentElement}e=c&&!O(c,1);if(a.D&&a.j&&b.defaultPrevented)ve(a,b,d,e?c:a.j);else{if(e){if(!a.D&&b.defaultPrevented){ve(a,
b,d,c);return}f=c;for(var g of jc(f,6))Yd(g)}if(d&&e){c=e?c:null;(g=re(a.g,d))?g=g.data:(g=new sc,R(g,2,d.href),R(g,11,d.target||"_top"),a.g.push({element:d,data:g}));Pd(d,c||g,P(g,2),557);we(a,b,d,c);for(var k of jc(a.h,17))g=V.body,e={},"function"===typeof window.CustomEvent?f=new CustomEvent(k,e):(f=document.createEvent("CustomEvent"),f.initCustomEvent(k,!!e.bubbles,!!e.cancelable,e.detail)),g.dispatchEvent(f);if(null==c?0:null!=G(I(c,19))){k=new oc;g=Q(c,5,0);bc(k,1,null==g?g:Eb(g));g=Zd(d.href,
"nx");""!=g&&lc(k,2,+g);g=Zd(d.href,"ny");""!=g&&lc(k,3,+g);g=Zd(d.href,"bg");""!=g&&R(k,4,g);g=Zd(d.href,"nm");""!=g&&lc(k,5,+g);g=Zd(d.href,"mb");""!=g&&lc(k,6,+g);g=P(c,19);e=null!=Fb(I(c,20))?N(Fb(I(c,20)),0):null;f=mc(k);h=a.o;k=Jd(m);var l=new wc;R(l,1,g);null!==e&&lc(l,2,e);null!==h&&R(l,3,h);R(l,4,f);g=JSON.stringify(l);var n;null==k||null==(n=k.fence)||n.reportEvent({eventType:"click",eventData:g,destination:["buyer"]});if(n=jb){n=0;e=fa(String(Kd)).split(".");f=fa("116").split(".");h=Math.max(e.length,
f.length);for(l=0;0==n&&l<h;l++){var q=e[l]||"",r=f[l]||"";do{q=/(\d*)(\D*)(.*)/.exec(q)||["","","",""];r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""];if(0==q[0].length&&0==r[0].length)break;n=ha(0==q[1].length?0:parseInt(q[1],10),0==r[1].length?0:parseInt(r[1],10))||ha(0==q[2].length,0==r[2].length)||ha(q[2],r[2]);q=q[3];r=r[3]}while(0==n)}n=0<=n}if(n){var u;null==k||null==(u=k.fence)||u.setReportEventDataForAutomaticBeacons({eventType:"reserved.top_navigation",eventData:g,destination:["buyer"],once:!0})}else{var C;
null==k||null==(C=k.fence)||C.setReportEventDataForAutomaticBeacons({eventType:"reserved.top_navigation",eventData:g,destination:["buyer"]})}}O(a.h,16)||a.G?xe(a,b,d,c):(u="",(C=m.oneAfmaInstance)&&(u=C.appendClickSignals(d.href)),ye(a,b,d,c,u))}}}}
function ve(a,b,c,d){if(a.u===b&&a.v){const f=new qc(a.v),h=P(d,9);var e="";switch(Q(f,4,1)){case 2:if(N(Fb(I(f,2)),0))e="blocked_fast_click";else if(P(f,1)||P(f,7))e="blocked_border_click";break;case 3:e=V;e=e.getElementById?e.getElementById("common_15click_anchor"):null;const g=window;if("function"===typeof g.copfcChm&&e){d=Zb(d);bc(d,5,Eb(12));gc(d,4).set("nb",(12).toString());const k=re(a.g,e);k?k.data=d:a.g.push({element:e,data:d});!a.K&&c&&(we(a,b,c,d),R(d,2,c.href));g.copfcChm(b,Ld(d,e.href),
null,void 0!==L(f,pc,10)?mc(M(f,pc,10)):null);a.K&&we(a,b,e,d)}e="onepointfiveclick_first_click"}h&&e&&Yd(h+"&label="+e,!1);$c(a.H)}}
function we(a,b,c,d){if(!O(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(Cc(c,bd(e[0],cd(557)));!c.id;)if(f="asoch-id-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),!V.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,V.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===
typeof window.ja&&window.ja(f,d?Q(d,5,0):0);"function"===typeof window.vti&&window.vti(c);a.i&&"function"===typeof window.ss&&(a.J?window.ss(f,1,a.i):window.ss(a.i,1));0<e.length&&(a=0<a.o.length&&(null==d||null==G(I(d,19)))?c.href+"&uach="+encodeURIComponent(a.o)+e[1]:c.href+e[1],Cc(c,bd(a,cd(557))))}}
async function xe(a,b,c,d){let e="";var f=m.oneAfmaInstance;if(f&&(b.preventDefault(),e=await f.appendClickSignalsAsync(c.href)||"",a.G)){if(a.S)return;if(f=await f.getNativeClickMeta()){if(f.customClickGestureEligible)return;e=Od(e,"nas",f.encodedNas)}}ye(a,b,c,d,e)}
function ye(a,b,c,d,e){const f=O(a.h,2),h=f&&300<Date.now()-a.I,g=m.oneAfmaInstance;g?(Ic(b),(()=>{let k=O(d,13)?e:g.logScionEventAndAddParam(e);if(!a.s&&d&&void 0!==L(d,T,12)){var l=M(d,T,12).A();if(0<hc(d).length)for(const n of hc(d));O(M(d,T,12),2)?(g.click(k),g.openAndroidApp(l),l=!0):l=!1}else l=!1;l||Ud(a.m,d,k,g,a.T)||Wd(f,h,a.V,a.s,d,k,g,a.U)})()):(b=window,a.R&&b.pawsig&&"function"===typeof b.pawsig.clk?b.pawsig.clk(c):h&&(b=null!=c.getAttribute("attributionsrc")&&"6"===Gc(c.getAttribute("attributionsrc"),
"nis")?Vd(c.href,()=>{}):Vd(c.href),b!==c.href&&Cc(c,bd(b,cd(599)))));h&&(a.I=Date.now());$c(a.H)}
var te=class{constructor(a){this.s=fb||Xa||gb||Ya;var b=dd("data-asoch-meta");if(1!==b.length)Id({type:2,data:b.length});else{this.H=70;this.h=new uc(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.F=a["extra-meta"]?new uc(JSON.parse(a["extra-meta"])):null;this.G="true"===a["is-fsn"];this.S="true"===a["is-tap-disabled-for-fsn"];this.m=a["ios-store-overlay-config"]?new vc(JSON.parse(a["ios-store-overlay-config"])):null;this.V="true"===a["use-cct-over-browser"];this.T="true"===a["send-ac-click-ping-by-js"];
this.K="true"===a["correct-redirect-url-for-och-15-click"];this.U="true"===a["send-click-ping-by-js-in-och"];this.P="true"===a["middle-clicks-in-och"];this.D="true"===a["default-msg-in-och"];this.R="true"===a["enable-paw"];this.o="";b=pe();null!=b&&b.then(d=>{var e=mc(d);d=[];for(var f=0,h=0;h<e.length;h++){var g=e.charCodeAt(h);255<g&&(d[f++]=g&255,g>>=8);d[f++]=g}e=3;void 0===e&&(e=0);if(!nb)for(nb={},f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=",
"-_.","-_"],g=0;5>g;g++){var k=f.concat(h[g].split(""));lb[g]=k;for(var l=0;l<k.length;l++){var n=k[l];void 0===nb[n]&&(nb[n]=l)}}e=lb[e];f=Array(Math.floor(d.length/3));h=e[64]||"";for(g=k=0;k<d.length-2;k+=3){var q=d[k],r=d[k+1];n=d[k+2];l=e[q>>2];q=e[(q&3)<<4|r>>4];r=e[(r&15)<<2|n>>6];n=e[n&63];f[g++]=l+q+r+n}l=0;n=h;switch(d.length-k){case 2:l=d[k+1],n=e[(l&15)<<2]||h;case 1:d=d[k],f[g]=e[d>>2]+e[(d&3)<<4|l>>4]+n+h}this.o=f.join("")});this.g=Md(this.h);this.D&&(this.j=null,tc(this.h).forEach(d=>
{null==this.j&&null!=G(I(d,2))&&null!=G(I(d,9))&&(this.j=d)}));this.W=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.I=-Infinity;this.i=P(this.h,5)||"";this.J=O(this.h,11);this.F&&(this.J=O(this.F,11));this.v=this.u=null;O(this.h,3)||(Qd(this.g),kc(this.h,3,!0));qe(this.g);a=m.oneAfmaInstance;!this.s&&a&&Sd(this.g,this.W);var c;if(a&&(null==(c=this.m)?0:O(c,2)))switch(c=()=>{const d=N(Fb(I(this.m,4)),0);0<d?m.setTimeout(()=>{Rd(this.g)},d):Rd(this.g)},Q(this.m,3,0)){case 1:a.runOnOnShowEvent(c);
break;case 2:Sc(c);break;default:Rd(this.g)}U(V,"click",Hd(557,d=>{ue(this,d)}),yc);this.P&&U(V,"auxclick",Hd(557,d=>{1===d.button&&ue(this,d)}),yc);this.i&&"function"===typeof window.ss&&U(V.body,"mouseover",Hd(626,()=>{window.ss(this.i,0)}),zc);"function"===typeof window.ivti&&window.ivti(V.body);c=window;c.googqscp&&"function"===typeof c.googqscp.registerCallback&&c.googqscp.registerCallback((d,e)=>{this.u=d;this.v=e})}}};var ze=Hd(555,a=>se(a));Xc=70;const Ae=Zc(70,document.currentScript);if(null==Ae)throw Error("JSC not found 70");const Be={},Ce=Ae.attributes;for(let a=Ce.length-1;0<=a;a--){const b=Ce[a].name;0===b.indexOf("data-jcp-")&&(Be[b.substring(9)]=Ce[a].value)}ze(Be);}).call(this);