import{a as e,i as t,n,o as r,r as i,t as a}from"./react.BRNZa73l.js";function o(e,t,n){return(t=u(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?s(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function u(e){var t=l(e,`string`);return typeof t==`symbol`?t:t+``}var d=()=>{},f={},p={},m=null,h={mark:d,measure:d};try{typeof window<`u`&&(f=window),typeof document<`u`&&(p=document),typeof MutationObserver<`u`&&(m=MutationObserver),typeof performance<`u`&&(h=performance)}catch{}var{userAgent:g=``}=f.navigator||{},_=f,v=p,y=m,b=h;_.document;var x=!!v.documentElement&&!!v.head&&typeof v.addEventListener==`function`&&typeof v.createElement==`function`,S=~g.indexOf(`MSIE`)||~g.indexOf(`Trident/`),ee=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,te=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ne={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`}},re={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ie=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],C=`classic`,w=`duotone`,ae=[C,w,`sharp`,`sharp-duotone`],oe={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`}},se={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`}},ce=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}]]),le={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,brands:`fab`},duotone:{solid:`fad`,regular:`fadr`,light:`fadl`,thin:`fadt`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`,regular:`fasdr`,light:`fasdl`,thin:`fasdt`}},ue=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],de={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},fe=[`kit`],pe={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},me=[`fak`,`fakd`],he={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},ge={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},_e={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ve=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],ye=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],be={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},xe={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`}},Se={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`]},Ce={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`}},we=[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`],Te=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,...ve,...we],Ee=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],De=[1,2,3,4,5,6,7,8,9,10],Oe=De.concat([11,12,13,14,15,16,17,18,19,20]),ke=[...Object.keys(Se),...Ee,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,_e.GROUP,_e.SWAP_OPACITY,_e.PRIMARY,_e.SECONDARY].concat(De.map(e=>`${e}x`),Oe.map(e=>`w-${e}`)),Ae={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},T=`___FONT_AWESOME___`,je=16,Me=`fa`,Ne=`svg-inline--fa`,E=`data-fa-i2svg`,Pe=`data-fa-pseudo-element`,Fe=`data-fa-pseudo-element-pending`,Ie=`data-prefix`,Le=`data-icon`,Re=`fontawesome-i2svg`,ze=`async`,Be=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ve=(()=>{try{return!0}catch{return!1}})();function D(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[C]}})}var He=c({},ne);He[C]=c(c(c(c({},{"fa-duotone":`duotone`}),ne[C]),de.kit),de[`kit-duotone`]);var Ue=D(He),We=c({},le);We[C]=c(c(c(c({},{duotone:`fad`}),We[C]),ge.kit),ge[`kit-duotone`]);var Ge=D(We),Ke=c({},Ce);Ke[C]=c(c({},Ke[C]),he.kit);var qe=D(Ke),Je=c({},xe);Je[C]=c(c({},Je[C]),pe.kit),D(Je);var Ye=ee,Xe=`fa-layers-text`,Ze=te;D(c({},oe));var Qe=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],$e=re,et=[...fe,...ke],O=_.FontAwesomeConfig||{};function tt(e){var t=v.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function nt(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}v&&typeof v.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=nt(tt(t));r!=null&&(O[n]=r)});var rt={styleDefault:`solid`,familyDefault:C,cssPrefix:Me,replacementClass:Ne,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};O.familyPrefix&&(O.cssPrefix=O.familyPrefix);var k=c(c({},rt),O);k.autoReplaceSvg||(k.observeMutations=!1);var A={};Object.keys(rt).forEach(e=>{Object.defineProperty(A,e,{enumerable:!0,set:function(t){k[e]=t,j.forEach(e=>e(A))},get:function(){return k[e]}})}),Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(e){k.cssPrefix=e,j.forEach(e=>e(A))},get:function(){return k.cssPrefix}}),_.FontAwesomeConfig=A;var j=[];function it(e){return j.push(e),()=>{j.splice(j.indexOf(e),1)}}var M=je,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function at(e){if(!e||!x)return;let t=v.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=v.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return v.head.insertBefore(t,r),e}var ot=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function P(){let e=12,t=``;for(;e-->0;)t+=ot[Math.random()*62|0];return t}function F(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function st(e){return e.classList?F(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function ct(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function lt(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${ct(e[n])}" `,``).trim()}function I(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function ut(e){return e.size!==N.size||e.x!==N.x||e.y!==N.y||e.rotate!==N.rotate||e.flipX||e.flipY}function dt(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function ft(e){let{transform:t,width:n=je,height:r=je,startCentered:i=!1}=e,a=``;return i&&S?a+=`translate(${t.x/M-n/2}em, ${t.y/M-r/2}em) `:i?a+=`translate(calc(-50% + ${t.x/M}em), calc(-50% + ${t.y/M}em)) `:a+=`translate(${t.x/M}em, ${t.y/M}em) `,a+=`scale(${t.size/M*(t.flipX?-1:1)}, ${t.size/M*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}var pt=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function mt(){let e=Me,t=Ne,n=A.cssPrefix,r=A.replacementClass,i=pt;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var ht=!1;function gt(){A.autoAddCss&&!ht&&(at(mt()),ht=!0)}var _t={mixout(){return{dom:{css:mt,insertCss:gt}}},hooks(){return{beforeDOMElementCreation(){gt()},beforeI2svg(){gt()}}}},L=_||{};L[T]||(L[T]={}),L[T].styles||(L[T].styles={}),L[T].hooks||(L[T].hooks={}),L[T].shims||(L[T].shims=[]);var R=L[T],vt=[],yt=function(){v.removeEventListener(`DOMContentLoaded`,yt),bt=1,vt.map(e=>e())},bt=!1;x&&(bt=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),bt||v.addEventListener(`DOMContentLoaded`,yt));function xt(e){x&&(bt?setTimeout(e,0):vt.push(e))}function z(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?ct(e):`<${t} ${lt(n)}>${r.map(z).join(``)}</${t}>`}function St(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ct=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},wt=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Ct(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Tt(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Et(e){let t=Tt(e);return t.length===1?t[0].toString(16):null}function Dt(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ot(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function kt(e,t){let{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Ot(t);typeof R.hooks.addPack==`function`&&!n?R.hooks.addPack(e,Ot(t)):R.styles[e]=c(c({},R.styles[e]||{}),r),e===`fas`&&kt(`fa`,t)}var{styles:B,shims:At}=R,jt=Object.keys(qe),Mt=jt.reduce((e,t)=>(e[t]=Object.keys(qe[t]),e),{}),Nt=null,Pt={},Ft={},It={},Lt={},Rt={};function zt(e){return~et.indexOf(e)}function Bt(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!zt(i)?i:null}var Vt=()=>{let e=e=>wt(B,(t,n,r)=>(t[r]=wt(n,e,{}),t),{});Pt=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),Ft=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),Rt=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in B||A.autoFetchSvg,n=wt(At,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});It=n.names,Lt=n.unicodes,Nt=Jt(A.styleDefault,{family:A.familyDefault})};it(e=>{Nt=Jt(e.styleDefault,{family:A.familyDefault})}),Vt();function Ht(e,t){return(Pt[e]||{})[t]}function Ut(e,t){return(Ft[e]||{})[t]}function V(e,t){return(Rt[e]||{})[t]}function Wt(e){return It[e]||{prefix:null,iconName:null}}function Gt(e){let t=Lt[e],n=Ht(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function H(){return Nt}var Kt=()=>({prefix:null,iconName:null,rest:[]});function qt(e){let t=C,n=jt.reduce((e,t)=>(e[t]=`${A.cssPrefix}-${t}`,e),{});return ae.forEach(r=>{(e.includes(n[r])||e.some(e=>Mt[r].includes(e)))&&(t=r)}),t}function Jt(e){let{family:t=C}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Ue[t][e];if(t===w&&!e)return`fad`;let r=Ge[t][e]||Ge[t][n],i=e in R.styles?e:null;return r||i||null}function Yt(e){let t=[],n=null;return e.forEach(e=>{let r=Bt(A.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Xt(e){return e.sort().filter((e,t,n)=>n.indexOf(e)===t)}function U(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,r=Te.concat(ye),i=Xt(e.filter(e=>r.includes(e))),a=Xt(e.filter(e=>!Te.includes(e))),[o=null]=i.filter(e=>(n=e,!ie.includes(e))),s=qt(i),l=c(c({},Yt(a)),{},{prefix:Jt(o,{family:s})});return c(c(c({},l),en({values:e,family:s,styles:B,config:A,canonical:l,givenPrefix:n})),Zt(t,n,l))}function Zt(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};let a=t===`fa`?Wt(i):{},o=V(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!B.far&&B.fas&&!A.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Qt=ae.filter(e=>e!==C||e!==w),$t=Object.keys(Ce).filter(e=>e!==C).map(e=>Object.keys(Ce[e])).flat();function en(e){let{values:t,family:n,canonical:r,givenPrefix:i=``,styles:a={},config:o={}}=e,s=n===w,c=t.includes(`fa-duotone`)||t.includes(`fad`),l=o.familyDefault===`duotone`,u=r.prefix===`fad`||r.prefix===`fa-duotone`;return!s&&(c||l||u)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Qt.includes(n)&&(Object.keys(a).find(e=>$t.includes(e))||o.autoFetchSvg)&&(r.prefix=ce.get(n).defaultShortPrefixId,r.iconName=V(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||i===`fa`)&&(r.prefix=H()||`fas`),r}var tn=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]=c(c({},this.definitions[t]||{}),e[t]),kt(t,e[t]);let n=qe[C][t];n&&kt(n,e[t]),Vt()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},nn=[],W={},G={},rn=Object.keys(G);function an(e,t){let{mixoutsTo:n}=t;return nn=e,W={},Object.keys(G).forEach(e=>{rn.indexOf(e)===-1&&delete G[e]}),nn.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{W[e]||(W[e]=[]),W[e].push(t[e])})}e.provides&&e.provides(G)}),n}function on(e,t){var n=[...arguments].slice(2);return(W[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function K(e){var t=[...arguments].slice(1);(W[e]||[]).forEach(e=>{e.apply(null,t)})}function q(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return G[e]?G[e].apply(null,t):void 0}function sn(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||H();if(t)return t=V(n,t)||t,St(cn.definitions,n,t)||St(R.styles,n,t)}var cn=new tn,J={noAuto:()=>{A.autoReplaceSvg=!1,A.observeMutations=!1,K(`noAuto`)},config:A,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return x?(K(`beforeI2svg`,e),q(`pseudoElements2svg`,e),q(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,xt(()=>{ln({autoReplaceSvgRoot:t}),K(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:V(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Jt(e[0]);return{prefix:n,iconName:V(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${A.cssPrefix}-`)>-1||e.match(Ye))){let t=U(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||H(),iconName:V(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=H();return{prefix:t,iconName:V(t,e)||e}}}},library:cn,findIconDefinition:sn,toHtml:z},ln=function(){let{autoReplaceSvgRoot:e=v}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(R.styles).length>0||A.autoFetchSvg)&&x&&A.autoReplaceSvg&&J.dom.i2svg({node:e})};function un(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(e=>z(e))}}),Object.defineProperty(e,"node",{get:function(){if(!x)return;let t=v.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function dn(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(ut(o)&&n.found&&!r.found){let{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=I(c(c({},a),{},{"transform-origin":`${r.x+o.x/16}em ${r.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function fn(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,o=a===!0?`${t}-${A.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:c(c({},i),{},{id:o}),children:r}]}]}function pn(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:s,maskId:l,titleId:u,extra:d,watchable:f=!1}=e,{width:p,height:m}=n.found?n:t,h=me.includes(r),g=[A.replacementClass,i?`${A.cssPrefix}-${i}`:``].filter(e=>d.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(d.classes).join(` `),_={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:g,role:d.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${p} ${m}`})},v=h&&!~d.classes.indexOf(`fa-fw`)?{width:`${p/m*16*.0625}em`}:{};f&&(_.attributes[E]=``),s&&(_.children.push({tag:`title`,attributes:{id:_.attributes[`aria-labelledby`]||`title-${u||P()}`},children:[s]}),delete _.attributes.title);let y=c(c({},_),{},{prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:a,symbol:o,styles:c(c({},v),d.styles)}),{children:b,attributes:x}=n.found&&t.found?q(`generateAbstractMask`,y)||{children:[],attributes:{}}:q(`generateAbstractIcon`,y)||{children:[],attributes:{}};return y.children=b,y.attributes=x,o?fn(y):dn(y)}function mn(e){let{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:s=!1}=e,l=c(c(c({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(` `)});s&&(l[E]=``);let u=c({},o.styles);ut(i)&&(u.transform=ft({transform:i,startCentered:!0,width:n,height:r}),u[`-webkit-transform`]=u.transform);let d=I(u);d.length>0&&(l.style=d);let f=[];return f.push({tag:`span`,attributes:l,children:[t]}),a&&f.push({tag:`span`,attributes:{class:`sr-only`},children:[a]}),f}function hn(e){let{content:t,title:n,extra:r}=e,i=c(c(c({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(` `)}),a=I(r.styles);a.length>0&&(i.style=a);let o=[];return o.push({tag:`span`,attributes:i,children:[t]}),n&&o.push({tag:`span`,attributes:{class:`sr-only`},children:[n]}),o}var{styles:gn}=R;function _n(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${A.cssPrefix}-${$e.GROUP}`},children:[{tag:`path`,attributes:{class:`${A.cssPrefix}-${$e.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${A.cssPrefix}-${$e.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var vn={found:!1,width:512,height:512};function yn(e,t){!Ve&&!A.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function bn(e,t){let n=t;return t===`fa`&&A.styleDefault!==null&&(t=H()),new Promise((r,i)=>{if(n===`fa`){let n=Wt(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&gn[t]&&gn[t][e]){let n=gn[t][e];return r(_n(n))}yn(e,t),r(c(c({},vn),{},{icon:A.showMissingIcons&&e&&q(`missingIconAbstract`)||{}}))})}var xn=()=>{},Sn=A.measurePerformance&&b&&b.mark&&b.measure?b:{mark:xn,measure:xn},Y=`FA "6.7.2"`,Cn=e=>(Sn.mark(`${Y} ${e} begins`),()=>wn(e)),wn=e=>{Sn.mark(`${Y} ${e} ends`),Sn.measure(`${Y} ${e}`,`${Y} ${e} begins`,`${Y} ${e} ends`)},Tn={begin:Cn,end:wn},En=()=>{};function Dn(e){return typeof(e.getAttribute?e.getAttribute(E):null)==`string`}function On(e){let t=e.getAttribute?e.getAttribute(Ie):null,n=e.getAttribute?e.getAttribute(Le):null;return t&&n}function kn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function An(){return A.autoReplaceSvg===!0?Fn.replace:Fn[A.autoReplaceSvg]||Fn.replace}function jn(e){return v.createElementNS(`http://www.w3.org/2000/svg`,e)}function Mn(e){return v.createElement(e)}function Nn(e){let{ceFn:t=e.tag===`svg`?jn:Mn}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return v.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(Nn(e,{ceFn:t}))}),n}function Pn(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Fn={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(e=>{t.parentNode.insertBefore(Nn(e),t)}),t.getAttribute(E)===null&&A.keepOriginalSource){let e=v.createComment(Pn(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~st(t).indexOf(A.replacementClass))return Fn.replace(e);let r=RegExp(`${A.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===A.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>z(e)).join(`
`);t.setAttribute(E,``),t.innerHTML=i}};function In(e){e()}function Ln(e,t){let n=typeof t==`function`?t:En;if(e.length===0)n();else{let t=In;A.mutateApproach===ze&&(t=_.requestAnimationFrame||In),t(()=>{let t=An(),r=Tn.begin(`mutate`);e.map(t),r(),n()})}}var Rn=!1;function zn(){Rn=!0}function Bn(){Rn=!1}var Vn=null;function Hn(e){if(!y||!A.observeMutations)return;let{treeCallback:t=En,nodeCallback:n=En,pseudoElementsCallback:r=En,observeMutationsRoot:i=v}=e;Vn=new y(e=>{if(Rn)return;let i=H();F(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!Dn(e.addedNodes[0])&&(A.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&A.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&Dn(e.target)&&~Qe.indexOf(e.attributeName))if(e.attributeName===`class`&&On(e.target)){let{prefix:t,iconName:n}=U(st(e.target));e.target.setAttribute(Ie,t||i),n&&e.target.setAttribute(Le,n)}else kn(e.target)&&n(e.target)})}),x&&Vn.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Un(){Vn&&Vn.disconnect()}function Wn(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Gn(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=U(st(e));return i.prefix||=H(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Ut(i.prefix,e.innerText)||Ht(i.prefix,Et(e.innerText))),!i.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Kn(e){let t=F(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return A.autoA11y&&(n?t[`aria-labelledby`]=`${A.replacementClass}-title-${r||P()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function qn(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=Gn(e),a=Kn(e),o=on(`parseNodeAttributes`,{},e),s=t.styleParser?Wn(e):[];return c({iconName:n,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:r,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},o)}var{styles:Yn}=R;function Xn(e){let t=A.autoReplaceSvg===`nest`?Jn(e,{styleParser:!1}):Jn(e);return~t.extra.classes.indexOf(Xe)?q(`generateLayersText`,e,t):q(`generateSvgReplacementMutation`,e,t)}function Zn(){return[...ue,...Te]}function Qn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!x)return Promise.resolve();let n=v.documentElement.classList,r=e=>n.add(`${Re}-${e}`),i=e=>n.remove(`${Re}-${e}`),a=A.autoFetchSvg?Zn():ie.concat(Object.keys(Yn));a.includes(`fa`)||a.push(`fa`);let o=[`.${Xe}:not([${E}])`].concat(a.map(e=>`.${e}:not([${E}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=F(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=Tn.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=Xn(t);n&&e.push(n)}catch(e){Ve||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{Ln(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function $n(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xn(e).then(e=>{e&&Ln([e],t)})}function er(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:sn(t||{}),{mask:i}=n;return i&&=(i||{}).icon?i:sn(i||{}),e(r,c(c({},n),{},{mask:i}))}}var tr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=N,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:l=[],attributes:u={},styles:d={}}=t;if(!e)return;let{prefix:f,iconName:p,icon:m}=e;return un(c({type:`icon`},e),()=>(K(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),A.autoA11y&&(o?u[`aria-labelledby`]=`${A.replacementClass}-title-${s||P()}`:(u[`aria-hidden`]=`true`,u.focusable=`false`)),pn({icons:{main:_n(m),mask:i?_n(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:c(c({},N),n),symbol:r,title:o,maskId:a,titleId:s,extra:{attributes:u,styles:d,classes:l}})))},nr={mixout(){return{icon:er(tr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Qn,e.nodeCallback=$n,e}}},provides(e){e.i2svg=function(e){let{node:t=v,callback:n=()=>{}}=e;return Qn(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([bn(n,a),c.iconName?bn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,pn({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=I(a);o.length>0&&(n.style=o);let s;return ut(i)&&(s=q(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},rr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return un({type:`layer`},()=>{K(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${A.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},ir={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return un({type:`counter`,content:e},()=>(K(`beforeDOMElementCreation`,{content:e,params:t}),hn({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${A.cssPrefix}-layers-counter`,...r]}})))}}}},ar={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=N,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return un({type:`text`,content:e},()=>(K(`beforeDOMElementCreation`,{content:e,params:t}),mn({content:e,transform:c(c({},N),n),title:r,extra:{attributes:a,styles:o,classes:[`${A.cssPrefix}-layers-text`,...i]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(S){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return A.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,mn({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},or=RegExp(`"`,`ug`),sr=[1105920,1112319],cr=c(c(c(c({},{FontAwesome:{normal:`fas`,400:`fas`}}),se),Ae),be),lr=Object.keys(cr).reduce((e,t)=>(e[t.toLowerCase()]=cr[t],e),{}),ur=Object.keys(lr).reduce((e,t)=>{let n=lr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function dr(e){let t=e.replace(or,``),n=Dt(t,0),r=n>=sr[0]&&n<=sr[1],i=t.length===2?t[0]===t[1]:!1;return{value:Et(i?t[0]:t),isSecondary:r||i}}function fr(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(lr[n]||{})[i]||ur[n]}function pr(e,t){let n=`${Fe}${t.replace(`:`,`-`)}`;return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let a=F(e.children).filter(e=>e.getAttribute(Pe)===t)[0],o=_.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),l=s.match(Ze),u=o.getPropertyValue(`font-weight`),d=o.getPropertyValue(`content`);if(a&&!l)return e.removeChild(a),r();if(l&&d!==`none`&&d!==``){let d=o.getPropertyValue(`content`),f=fr(s,u),{value:p,isSecondary:m}=dr(d),h=l[0].startsWith(`FontAwesome`),g=Ht(f,p),_=g;if(h){let e=Gt(p);e.iconName&&e.prefix&&(g=e.iconName,f=e.prefix)}if(g&&!m&&(!a||a.getAttribute(Ie)!==f||a.getAttribute(Le)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);let o=qn(),{extra:s}=o;s.attributes[Pe]=t,bn(g,f).then(i=>{let a=pn(c(c({},o),{},{icons:{main:i,mask:Kt()},prefix:f,iconName:_,extra:s,watchable:!0})),l=v.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(l,e.firstChild):e.appendChild(l),l.outerHTML=a.map(e=>z(e)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function mr(e){return Promise.all([pr(e,`::before`),pr(e,`::after`)])}function hr(e){return e.parentNode!==document.head&&!~Be.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pe)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function gr(e){if(x)return new Promise((t,n)=>{let r=F(e.querySelectorAll(`*`)).filter(hr).map(mr),i=Tn.begin(`searchPseudoElements`);zn(),Promise.all(r).then(()=>{i(),Bn(),t()}).catch(()=>{i(),Bn(),n()})})}var _r={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=gr,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=v}=e;A.searchPseudoElements&&gr(t)}}},vr=!1,yr={mixout(){return{dom:{unwatch(){zn(),vr=!0}}}},hooks(){return{bootstrap(){Hn(on(`mutationObserverCallbacks`,{}))},noAuto(){Un()},watch(e){let{observeMutationsRoot:t}=e;vr?Bn():Hn(on(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},br=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),xr={mixout(){return{parse:{transform:e=>br(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=br(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:c({},a.outer),children:[{tag:`g`,attributes:c({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:c(c({},t.icon.attributes),a.path)}]}]}}}},Sr={x:0,y:0,width:`100%`,height:`100%`};function Cr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function wr(e){return e.tag===`g`?e.children:[e]}an([_t,nr,rr,ir,ar,_r,yr,xr,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?U(n.split(` `).map(e=>e.trim())):Kt();return r.prefix||=H(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:a,transform:o}=e,{width:s,icon:l}=r,{width:u,icon:d}=i,f=dt({transform:o,containerWidth:u,iconWidth:s}),p={tag:`rect`,attributes:c(c({},Sr),{},{fill:`white`})},m=l.children?{children:l.children.map(Cr)}:{},h={tag:`g`,attributes:c({},f.inner),children:[Cr(c({tag:l.tag,attributes:c(c({},l.attributes),f.path)},m))]},g={tag:`g`,attributes:c({},f.outer),children:[h]},_=`mask-${a||P()}`,v=`clip-${a||P()}`,y={tag:`mask`,attributes:c(c({},Sr),{},{id:_,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[p,g]},b={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:v},children:wr(d)},y]};return t.push(b,{tag:`rect`,attributes:c({fill:`currentColor`,"clip-path":`url(#${v})`,mask:`url(#${_})`},Sr)}),{children:t,attributes:n}}}},{provides(e){let t=!1;_.matchMedia&&(t=_.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:c(c({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});let i=c(c({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:c(c({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:c(c({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:c(c({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:c(c({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:c(c({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:c(c({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:c(c({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:J}),J.noAuto;var Tr=J.config;J.library,J.dom;var Er=J.parse;J.findIconDefinition,J.toHtml;var Dr=J.icon;J.layer,J.text,J.counter;var Or=n(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),kr=n(((e,t)=>{var n=Or();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),Ar=n(((e,t)=>{t.exports=kr()()})),jr=t({author:()=>Ir,bugs:()=>Fr,default:()=>Jr,dependencies:()=>zr,description:()=>Mr,engines:()=>Rr,exports:()=>Kr,homepage:()=>Pr,keywords:()=>Nr,license:()=>`MIT`,main:()=>Hr,module:()=>Ur,name:()=>Vr,repository:()=>Lr,sideEffects:()=>qr,style:()=>Wr,types:()=>Gr,version:()=>Br}),Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr=i((()=>{Mr=`The iconic font, CSS, and SVG framework`,Nr=[`font`,`awesome`,`fontawesome`,`icon`,`svg`,`bootstrap`],Pr=`https://fontawesome.com`,Fr={url:`https://github.com/FortAwesome/Font-Awesome/issues`},Ir=`The Font Awesome Team (https://github.com/orgs/FortAwesome/people)`,Lr={type:`git`,url:`https://github.com/FortAwesome/Font-Awesome`},Rr={node:`>=6`},zr={"@fortawesome/fontawesome-common-types":`6.7.2`},Br=`6.7.2`,Vr=`@fortawesome/fontawesome-svg-core`,Hr=`index.js`,Ur=`index.mjs`,Wr=`styles.css`,Gr=`./index.d.ts`,Kr={".":{types:`./index.d.ts`,module:`./index.mjs`,import:`./index.mjs`,require:`./index.js`,style:`./styles.css`,default:`./index.js`},"./index":{types:`./index.d.ts`,module:`./index.mjs`,import:`./index.mjs`,require:`./index.js`,default:`./index.js`},"./index.js":{types:`./index.d.ts`,module:`./index.mjs`,import:`./index.mjs`,require:`./index.js`,default:`./index.js`},"./plugins":{types:`./index.d.ts`,module:`./plugins.mjs`,import:`./plugins.mjs`,default:`./plugins.mjs`},"./import.macro":`./import.macro.js`,"./import.macro.js":`./import.macro.js`,"./styles":`./styles.css`,"./styles.css":`./styles.css`,"./package.json":`./package.json`},qr=[`./index.js`,`./index.mjs`,`./styles.css`],Jr={description:Mr,keywords:Nr,homepage:Pr,bugs:Fr,author:Ir,repository:Lr,engines:Rr,dependencies:zr,version:Br,name:Vr,main:Hr,module:Ur,"jsnext:main":`index.mjs`,style:Wr,license:`MIT`,types:Gr,exports:Kr,sideEffects:qr}})),X=r(Ar()),Xr=r(a());function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Qr(e){if(Array.isArray(e))return e}function $r(e){if(Array.isArray(e))return Zr(e)}function Z(e,t,n){return(t=ui(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ei(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ti(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ni(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ri(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ii(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ii(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ai(e,t){if(e==null)return{};var n,r,i=oi(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function oi(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function si(e,t){return Qr(e)||ti(e,t)||di(e,t)||ni()}function ci(e){return $r(e)||ei(e)||di(e)||ri()}function li(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ui(e){var t=li(e,`string`);return typeof t==`symbol`?t:t+``}function $(e){"@babel/helpers - typeof";return $=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$(e)}function di(e,t){if(e){if(typeof e==`string`)return Zr(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Zr(e,t):void 0}}var fi=`7.0.0`,pi;try{pi=(Yr(),e(jr).default).version}catch{pi=typeof process<`u`&&{}.FA_VERSION||`7.0.0`}function mi(e){var t=e.beat,n=e.fade,r=e.beatFade,i=e.bounce,a=e.shake,o=e.flash,s=e.spin,c=e.spinPulse,l=e.spinReverse,u=e.pulse,d=e.fixedWidth,f=e.inverse,p=e.border,m=e.listItem,h=e.flip,g=e.size,_=e.rotation,v=e.pull,y=e.swapOpacity,b=e.rotateBy,x=e.widthAuto,S=hi(pi,fi),ee=Z(Z(Z(Z(Z(Z({"fa-beat":t,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":a,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":m,"fa-flip":h===!0,"fa-flip-horizontal":h===`horizontal`||h===`both`,"fa-flip-vertical":h===`vertical`||h===`both`},`fa-${g}`,g!=null),`fa-rotate-${_}`,_!=null&&_!==0),`fa-pull-${v}`,v!=null),`fa-swap-opacity`,y),`fa-rotate-by`,S&&b),`fa-width-auto`,S&&x);return Object.keys(ee).map(function(e){return ee[e]?e:null}).filter(function(e){return e})}function hi(e,t){for(var n=si(e.split(`-`),2),r=n[0],i=n[1],a=si(t.split(`-`),2),o=a[0],s=a[1],c=r.split(`.`),l=o.split(`.`),u=0;u<Math.max(c.length,l.length);u++){var d=c[u]||`0`,f=l[u]||`0`,p=parseInt(d,10),m=parseInt(f,10);if(p!==m)return p>m}for(var h=0;h<Math.max(c.length,l.length);h++){var g=c[h]||`0`,_=l[h]||`0`;if(g!==_&&g.length!==_.length)return g.length<_.length}return!(i&&!s)}function gi(e){return e-=0,e===e}function _i(e){return gi(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))}var vi=[`style`];function yi(e){return e.charAt(0).toUpperCase()+e.slice(1)}function bi(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=_i(t.slice(0,n)),i=t.slice(n+1).trim();return r.startsWith(`webkit`)?e[yi(r)]=i:e[r]=i,e},{})}function xi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t==`string`)return t;var r=(t.children||[]).map(function(t){return xi(e,t)}),i=Object.keys(t.attributes||{}).reduce(function(e,n){var r=t.attributes[n];switch(n){case`class`:e.attrs.className=r,delete t.attributes.class;break;case`style`:e.attrs.style=bi(r);break;default:n.indexOf(`aria-`)===0||n.indexOf(`data-`)===0?e.attrs[n.toLowerCase()]=r:e.attrs[_i(n)]=r}return e},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=ai(n,vi);return i.attrs.style=Q(Q({},i.attrs.style),o),e.apply(void 0,[t.tag,Q(Q({},i.attrs),s)].concat(ci(r)))}var Si=!1;try{Si=!0}catch{}function Ci(){if(!Si&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function wi(e){if(e&&$(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Er.icon)return Er.icon(e);if(e===null)return null;if(e&&$(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}function Ti(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Z({},e,t):{}}var Ei={border:!1,className:``,mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Di=Xr.forwardRef(function(e,t){var n=Q(Q({},Ei),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,c=n.titleId,l=n.maskId,u=wi(r),d=Ti(`classes`,[].concat(ci(mi(n)),ci((o||``).split(` `)))),f=Ti(`transform`,typeof n.transform==`string`?Er.transform(n.transform):n.transform),p=Ti(`mask`,wi(i)),m=Dr(u,Q(Q(Q(Q({},d),f),p),{},{symbol:a,title:s,titleId:c,maskId:l}));if(!m)return Ci(`Could not find icon`,u),null;var h=m.abstract,g={ref:t};return Object.keys(n).forEach(function(e){Ei.hasOwnProperty(e)||(g[e]=n[e])}),Oi(h[0],g)});Di.displayName=`FontAwesomeIcon`,Di.propTypes={beat:X.default.bool,border:X.default.bool,beatFade:X.default.bool,bounce:X.default.bool,className:X.default.string,fade:X.default.bool,flash:X.default.bool,mask:X.default.oneOfType([X.default.object,X.default.array,X.default.string]),maskId:X.default.string,fixedWidth:X.default.bool,inverse:X.default.bool,flip:X.default.oneOf([!0,!1,`horizontal`,`vertical`,`both`]),icon:X.default.oneOfType([X.default.object,X.default.array,X.default.string]),listItem:X.default.bool,pull:X.default.oneOf([`right`,`left`]),pulse:X.default.bool,rotation:X.default.oneOf([0,90,180,270]),rotateBy:X.default.bool,shake:X.default.bool,size:X.default.oneOf([`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`]),spin:X.default.bool,spinPulse:X.default.bool,spinReverse:X.default.bool,symbol:X.default.oneOfType([X.default.bool,X.default.string]),title:X.default.string,titleId:X.default.string,transform:X.default.oneOfType([X.default.string,X.default.object]),swapOpacity:X.default.bool,widthAuto:X.default.bool};var Oi=xi.bind(null,Xr.createElement),ki={prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},Ai={prefix:`fab`,iconName:`github`,icon:[496,512,[],`f09b`,`M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`]},ji={prefix:`fas`,iconName:`sun`,icon:[512,512,[9728],`f185`,`M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z`]},Mi={prefix:`fas`,iconName:`moon`,icon:[384,512,[127769,9214],`f186`,`M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z`]};export{Di as a,ki as i,ji as n,Tr as o,Ai as r,Mi as t};