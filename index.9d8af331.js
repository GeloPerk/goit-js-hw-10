function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",i=NaN,r="[object Symbol]",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,p="object"==typeof self&&self&&self.Object===Object&&self,d=s||p||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,y=function(){return d.Date.now()};function h(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&m.call(t)==r}(t))return i;if(h(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=h(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=f.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):a.test(t)?i:+t}e=function(t,e,n){var i,r,u,a,f,c,l=0,s=!1,p=!1,d=!0;if("function"!=typeof t)throw new TypeError(o);function m(e){var n=i,o=r;return i=r=void 0,l=e,a=t.apply(o,n)}function j(t){var n=t-c;return void 0===c||n>=e||n<0||p&&t-l>=u}function $(){var t=y();if(j(t))return T(t);f=setTimeout($,function(t){var n=e-(t-c);return p?g(n,u-(t-l)):n}(t))}function T(t){return f=void 0,d&&i?m(t):(i=r=void 0,a)}function w(){var t=y(),n=j(t);if(i=arguments,r=this,c=t,n){if(void 0===f)return function(t){return l=t,f=setTimeout($,e),s?m(t):a}(c);if(p)return f=setTimeout($,e),m(c)}return void 0===f&&(f=setTimeout($,e)),a}return e=b(e)||0,h(n)&&(s=!!n.leading,u=(p="maxWait"in n)?v(b(n.maxWait)||0,e):u,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=r=f=void 0},w.flush=function(){return void 0===f?a:T(y())},w};const j="https://restcountries.com/v2/";const $=(t,e)=>{console.log(t);const n=t.map((t=>`<div>\n      <p>Countru:${t.name}</p>\n      <p>Capital:${t.capital}</p>\n      <p>Population:${t.population}</p>\n      <p>Languag:${t.languages.map((({name:t})=>t))}</p>\n      <img src="${t.flags.svg}" width="50px" height='50px'/>\n      </div>`)).join("");e.insertAdjacentHTML("beforeend",n)},T=(t,e)=>{const n=t.map((t=>`<li><img src='${t.flags.svg}' width = "40px" height="40px" alt = "${t.name}"/> <p>${t.name}</p></li>`)).join("");e.insertAdjacentHTML("beforeend",n)},w=document.querySelector("#search-box"),x=document.querySelector(".country-info"),O=document.querySelector(".country-list");w.addEventListener("input",t(e)((function(t){const e=t.target.value;if(!e)return;(n=e,fetch(`${j}/name/${n}?fields=capital,population,flags,languages,name`).then((t=>t.json()))).then((t=>(x.innerHTML="",O.innerHTML="",404===t.status?Notify.failure('"Oops, there is no country with that name"'):1===t.length?$(t,x):t.length>10?Notify.info("Too many matches found. Please enter a more specific name."):void T(t,O))));var n}),300));
//# sourceMappingURL=index.9d8af331.js.map
