(()=>{"use strict";var t={d:(e,i)=>{for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function i(t){if(this.formData={},this.tree={},!(t instanceof FormData))return this;this.formData=t;const e=()=>{const t=new Map;return t.largestIndex=0,t.set=function(e,i){""===e?e=t.largestIndex++:/^[0-9]+$/.test(e)&&(e=parseInt(e),t.largestIndex<=e&&(t.largestIndex=e+1)),Map.prototype.set.call(t,e,i)},t};this.tree=e();const i=/^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;for(const[t,s]of this.formData){const o=t.match(i);if(o)if(""===o.groups.array)this.tree.set(o.groups.name,s);else{const t=[...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map((([t,e])=>e));t.unshift(o.groups.name);const i=t.pop();t.reduce(((t,i)=>{if(/^[0-9]+$/.test(i)&&(i=parseInt(i)),t.get(i)instanceof Map)return t.get(i);const s=e();return t.set(i,s),s}),this.tree).set(i,s)}}}t.r(e),t.d(e,{all:()=>D,any:()=>M,date:()=>m,dayofweek:()=>u,email:()=>r,enum:()=>h,file:()=>d,maxdate:()=>z,maxfilesize:()=>j,maxitems:()=>v,maxlength:()=>x,maxnumber:()=>y,mindate:()=>A,minfilesize:()=>$,minitems:()=>w,minlength:()=>g,minnumber:()=>b,number:()=>c,required:()=>n,requiredfile:()=>a,stepnumber:()=>I,tel:()=>l,time:()=>f,url:()=>p}),i.prototype.entries=function(){return this.tree.entries()},i.prototype.get=function(t){return this.tree.get(t)},i.prototype.getAll=function(t){if(!this.has(t))return[];const e=t=>{const i=[];if(t instanceof Map)for(const[s,o]of t)i.push(...e(o));else""!==t&&i.push(t);return i};return e(this.get(t))},i.prototype.has=function(t){return this.tree.has(t)},i.prototype.keys=function(){return this.tree.keys()},i.prototype.values=function(){return this.tree.values()};const s=i;function o({rule:t,field:e,error:i,...s}){this.rule=t,this.field=e,this.error=i,this.properties=s}const n=function(t){if(0===t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).length)throw new o(this)},a=function(t){if(0===t.getAll(this.field).length)throw new o(this)},r=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>{if(t.length<6)return!1;if(-1===t.indexOf("@",1))return!1;if(t.indexOf("@")!==t.lastIndexOf("@"))return!1;const[e,i]=t.split("@",2);if(!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e))return!1;if(/\.{2,}/.test(i))return!1;if(/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(i))return!1;const s=i.split(".");if(s.length<2)return!1;for(const t of s){if(/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t))return!1;if(!/^[a-z0-9-]+$/i.test(t))return!1}return!0})))throw new o(this)},p=function(t){const e=t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t));if(!e.every((t=>{try{return(t=>-1!==["http","https","ftp","ftps","mailto","news","irc","irc6","ircs","gopher","nntp","feed","telnet","mms","rtsp","sms","svn","tel","fax","xmpp","webcal","urn"].indexOf(t))(new URL(t).protocol.replace(/:$/,""))}catch{return!1}})))throw new o(this)},l=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>(((t=(t=t.replace(/[#*].*$/,"")).replaceAll(/[()/.*#\s-]+/g,"")).startsWith("+")||t.startsWith("00"))&&(t=`+${t.replace(/^[+0]+/,"")}`),!!/^[+]?[0-9]+$/.test(t)&&5<t.length&&t.length<16))))throw new o(this)},c=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>!!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)||!!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t))))throw new o(this)},m=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>{if(!/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t))return!1;const e=new Date(t);return!Number.isNaN(e.valueOf())})))throw new o(this)},f=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>{const e=t.match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);if(!e)return!1;const i=parseInt(e[1]),s=parseInt(e[2]),o=e[3]?parseInt(e[3]):0;return 0<=i&&i<=23&&0<=s&&s<=59&&0<=o&&o<=59})))throw new o(this)},d=function(t){if(!t.getAll(this.field).every((t=>t instanceof File&&this.accept?.some((e=>/^\.[a-z0-9]+$/i.test(e)?t.name.toLowerCase().endsWith(e.toLowerCase()):(t=>{const e=[],i=t.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);if(i){const t=i.groups.toplevel.toLowerCase(),s=i.groups.sub.toLowerCase();for(const[o,n]of(()=>{const t=new Map;return t.set("jpg|jpeg|jpe","image/jpeg"),t.set("gif","image/gif"),t.set("png","image/png"),t.set("bmp","image/bmp"),t.set("tiff|tif","image/tiff"),t.set("webp","image/webp"),t.set("ico","image/x-icon"),t.set("heic","image/heic"),t.set("asf|asx","video/x-ms-asf"),t.set("wmv","video/x-ms-wmv"),t.set("wmx","video/x-ms-wmx"),t.set("wm","video/x-ms-wm"),t.set("avi","video/avi"),t.set("divx","video/divx"),t.set("flv","video/x-flv"),t.set("mov|qt","video/quicktime"),t.set("mpeg|mpg|mpe","video/mpeg"),t.set("mp4|m4v","video/mp4"),t.set("ogv","video/ogg"),t.set("webm","video/webm"),t.set("mkv","video/x-matroska"),t.set("3gp|3gpp","video/3gpp"),t.set("3g2|3gp2","video/3gpp2"),t.set("txt|asc|c|cc|h|srt","text/plain"),t.set("csv","text/csv"),t.set("tsv","text/tab-separated-values"),t.set("ics","text/calendar"),t.set("rtx","text/richtext"),t.set("css","text/css"),t.set("htm|html","text/html"),t.set("vtt","text/vtt"),t.set("dfxp","application/ttaf+xml"),t.set("mp3|m4a|m4b","audio/mpeg"),t.set("aac","audio/aac"),t.set("ra|ram","audio/x-realaudio"),t.set("wav","audio/wav"),t.set("ogg|oga","audio/ogg"),t.set("flac","audio/flac"),t.set("mid|midi","audio/midi"),t.set("wma","audio/x-ms-wma"),t.set("wax","audio/x-ms-wax"),t.set("mka","audio/x-matroska"),t.set("rtf","application/rtf"),t.set("js","application/javascript"),t.set("pdf","application/pdf"),t.set("swf","application/x-shockwave-flash"),t.set("class","application/java"),t.set("tar","application/x-tar"),t.set("zip","application/zip"),t.set("gz|gzip","application/x-gzip"),t.set("rar","application/rar"),t.set("7z","application/x-7z-compressed"),t.set("exe","application/x-msdownload"),t.set("psd","application/octet-stream"),t.set("xcf","application/octet-stream"),t.set("doc","application/msword"),t.set("pot|pps|ppt","application/vnd.ms-powerpoint"),t.set("wri","application/vnd.ms-write"),t.set("xla|xls|xlt|xlw","application/vnd.ms-excel"),t.set("mdb","application/vnd.ms-access"),t.set("mpp","application/vnd.ms-project"),t.set("docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"),t.set("docm","application/vnd.ms-word.document.macroEnabled.12"),t.set("dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"),t.set("dotm","application/vnd.ms-word.template.macroEnabled.12"),t.set("xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),t.set("xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"),t.set("xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"),t.set("xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"),t.set("xltm","application/vnd.ms-excel.template.macroEnabled.12"),t.set("xlam","application/vnd.ms-excel.addin.macroEnabled.12"),t.set("pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"),t.set("pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"),t.set("ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"),t.set("ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"),t.set("potx","application/vnd.openxmlformats-officedocument.presentationml.template"),t.set("potm","application/vnd.ms-powerpoint.template.macroEnabled.12"),t.set("ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"),t.set("sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"),t.set("sldm","application/vnd.ms-powerpoint.slide.macroEnabled.12"),t.set("onetoc|onetoc2|onetmp|onepkg","application/onenote"),t.set("oxps","application/oxps"),t.set("xps","application/vnd.ms-xpsdocument"),t.set("odt","application/vnd.oasis.opendocument.text"),t.set("odp","application/vnd.oasis.opendocument.presentation"),t.set("ods","application/vnd.oasis.opendocument.spreadsheet"),t.set("odg","application/vnd.oasis.opendocument.graphics"),t.set("odc","application/vnd.oasis.opendocument.chart"),t.set("odb","application/vnd.oasis.opendocument.database"),t.set("odf","application/vnd.oasis.opendocument.formula"),t.set("wp|wpd","application/wordperfect"),t.set("key","application/vnd.apple.keynote"),t.set("numbers","application/vnd.apple.numbers"),t.set("pages","application/vnd.apple.pages"),t})())("*"===s&&n.startsWith(t+"/")||n===i[0])&&e.push(...o.split("|"))}return e})(e).some((e=>(e="."+e.trim(),t.name.toLowerCase().endsWith(e.toLowerCase())))))))))throw new o(this)},h=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>this.accept?.some((e=>t===String(e))))))throw new o(this)},u=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>{const e=0===(i=new Date(t).getDay())?7:i;var i;return this.accept?.some((t=>e===parseInt(t)))})))throw new o(this)},w=function(t){if(t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).length<parseInt(this.threshold))throw new o(this)},v=function(t){const e=t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t));if(parseInt(this.threshold)<e.length)throw new o(this)},g=function(t){const e=t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t));let i=0;if(e.forEach((t=>{"string"==typeof t&&(i+=t.length)})),0!==i&&i<parseInt(this.threshold))throw new o(this)},x=function(t){const e=t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t));let i=0;if(e.forEach((t=>{"string"==typeof t&&(i+=t.length)})),parseInt(this.threshold)<i)throw new o(this)},b=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>!(parseFloat(t)<parseFloat(this.threshold)))))throw new o(this)},y=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>!(parseFloat(this.threshold)<parseFloat(t)))))throw new o(this)},A=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&t<this.threshold))))throw new o(this)},z=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&this.threshold<t))))throw new o(this)},$=function(t){const e=t.getAll(this.field);let i=0;if(e.forEach((t=>{t instanceof File&&(i+=t.size)})),i<parseInt(this.threshold))throw new o(this)},j=function(t){const e=t.getAll(this.field);let i=0;if(e.forEach((t=>{t instanceof File&&(i+=t.size)})),parseInt(this.threshold)<i)throw new o(this)},I=function(t){const e=t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)),i=parseFloat(this.base),s=parseFloat(this.interval);if(!(0<s))return!0;if(!e.every((t=>{const e=(parseFloat(t)-i)%s;return"0.000000"===Math.abs(e).toFixed(6)||"0.000000"===Math.abs(e-s).toFixed(6)})))throw new o(this)},O=({ruleObj:t,options:i})=>{const{rule:s,...o}=t;return"function"==typeof e[s]&&("function"!=typeof e[s].matches||e[s].matches(o,i))},E=({ruleObj:t,formDataTree:i,options:s})=>{const{rule:o}=t;e[o].call(t,i,s)},k=[],F=t=>[...k].reduce(((t,e)=>i=>e(i,t)),t),D=function(t,e={}){const i=(this.rules??[]).filter((t=>O({ruleObj:t,options:e}))),s=F(E);if(!i.every((i=>{try{s({ruleObj:i,formDataTree:t,options:e})}catch(t){if(!(t instanceof o))throw t;if(void 0!==t.error)throw t;return!1}return!0})))throw new o(this)},M=function(t,e={}){const i=(this.rules??[]).filter((t=>O({ruleObj:t,options:e}))),s=F(E);if(!i.some((i=>{try{s({ruleObj:i,formDataTree:t,options:e})}catch(t){if(!(t instanceof o))throw t;return!1}return!0})))throw new o(this)};var L;window.swv={validators:e,validate:(t,e,i={})=>{const n=(t.rules??[]).filter((t=>O({ruleObj:t,options:i})));if(!n.length)return new Map;const a=F(E),r=new s(e),p=n.reduce(((t,e)=>{try{a({ruleObj:e,formDataTree:r,options:i})}catch(e){if(!(e instanceof o))throw e;if(void 0!==e.field&&!t.has(e.field)&&void 0!==e.error)return t.set(e.field,e)}return t}),new Map);for(const t of r.keys())p.has(t)||p.set(t,{validInputs:r.getAll(t)});return p},use:t=>{k.push(t)},...null!==(L=window.swv)&&void 0!==L?L:{}}})();
(()=>{"use strict";const e=window.wp.i18n,t=e=>Math.abs(parseInt(e,10)),a=(e,t,a)=>{const n=new CustomEvent(`wpcf7${t}`,{bubbles:!0,detail:a});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(n)},n=(e,t)=>{const n=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["validating","validating"],["payment_required","payment-required"]]);n.has(t)&&(t=n.get(t)),Array.from(n.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const r=e.getAttribute("data-status");if(e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),r&&r!==t){e.classList.remove(r);const t={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,prevStatus:r};a(e,"statuschanged",t)}return t},r=e=>{const{root:t,namespace:a="contact-form-7/v1"}=wpcf7.api;return c.reduceRight(((e,t)=>a=>t(a,e)),(e=>{let n,r,{url:c,path:o,endpoint:s,headers:i,body:l,data:p,...d}=e;"string"==typeof s&&(n=a.replace(/^\/|\/$/g,""),r=s.replace(/^\//,""),o=r?n+"/"+r:n),"string"==typeof o&&(-1!==t.indexOf("?")&&(o=o.replace("?","&")),o=o.replace(/^\//,""),c=t+o),i={Accept:"application/json, */*;q=0.1",...i},delete i["X-WP-Nonce"],p&&(l=JSON.stringify(p),i["Content-Type"]="application/json");const f={code:"fetch_error",message:"You are probably offline."},u={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(c||o||window.location.href,{...d,headers:i,body:l}).then((e=>Promise.resolve(e).then((e=>{if(e.status>=200&&e.status<300)return e;throw e})).then((e=>{if(204===e.status)return null;if(e&&e.json)return e.json().catch((()=>{throw u}));throw u}))),(()=>{throw f}))}))(e)},c=[];function o(e,t={}){const{target:a,scope:r=e,...c}=t;if(void 0===e.wpcf7?.schema)return;const o={...e.wpcf7.schema};if(void 0!==a){if(!e.contains(a))return;if(!a.closest(".wpcf7-form-control-wrap[data-name]"))return;if(a.closest(".novalidate"))return}const p=r.querySelectorAll(".wpcf7-form-control-wrap"),d=Array.from(p).reduce(((e,t)=>(t.closest(".novalidate")||t.querySelectorAll(":where(input, textarea, select):enabled").forEach((t=>{if(t.name)switch(t.type){case"button":case"image":case"reset":case"submit":break;case"checkbox":case"radio":t.checked&&e.append(t.name,t.value);break;case"select-multiple":for(const a of t.selectedOptions)e.append(t.name,a.value);break;case"file":for(const a of t.files)e.append(t.name,a);break;default:e.append(t.name,t.value)}})),e)),new FormData),f=e.getAttribute("data-status");Promise.resolve(n(e,"validating")).then((n=>{if(void 0!==swv){const n=swv.validate(o,d,t);for(const t of p){if(void 0===t.dataset.name)continue;const c=t.dataset.name;if(n.has(c)){const{error:t,validInputs:a}=n.get(c);i(e,c),void 0!==t&&s(e,c,t,{scope:r}),l(e,c,null!=a?a:[])}if(t.contains(a))break}}})).finally((()=>{n(e,f)}))}r.use=e=>{c.unshift(e)};const s=(e,t,a,n)=>{const{scope:r=e,...c}=null!=n?n:{},o=`${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,""),s=e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);(()=>{const t=document.createElement("li");t.setAttribute("id",o),s&&s.id?t.insertAdjacentHTML("beforeend",`<a href="#${s.id}">${a}</a>`):t.insertAdjacentText("beforeend",a),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)})(),r.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e=>{const t=document.createElement("span");t.classList.add("wpcf7-not-valid-tip"),t.setAttribute("aria-hidden","true"),t.insertAdjacentText("beforeend",a),e.appendChild(t),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","true")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.classList.add("wpcf7-not-valid"),e.setAttribute("aria-describedby",o),"function"==typeof e.setCustomValidity&&e.setCustomValidity(a),e.closest(".use-floating-validation-tip")&&(e.addEventListener("focus",(e=>{t.setAttribute("style","display: none")})),t.addEventListener("click",(e=>{t.setAttribute("style","display: none")})))}))}))},i=(e,t)=>{const a=`${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,"");e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${a}`)?.remove(),e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e=>{e.querySelector(".wpcf7-not-valid-tip")?.remove(),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","false")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid"),"function"==typeof e.setCustomValidity&&e.setCustomValidity("")}))}))},l=(e,t,a)=>{e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e=>{if("output"===e.tagName.toLowerCase()){const t=e;0===a.length&&a.push(t.dataset.default),a.slice(0,1).forEach((e=>{e instanceof File&&(e=e.name),t.textContent=e}))}else e.querySelectorAll("output").forEach((e=>{e.hasAttribute("data-default")?0===a.length?e.removeAttribute("hidden"):e.setAttribute("hidden","hidden"):e.remove()})),a.forEach((a=>{a instanceof File&&(a=a.name);const n=document.createElement("output");n.setAttribute("name",t),n.textContent=a,e.appendChild(n)}))}))};function p(e,t={}){if(wpcf7.blocked)return d(e),void n(e,"submitting");const c=new FormData(e);t.submitter&&t.submitter.name&&c.append(t.submitter.name,t.submitter.value);const o={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(c,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:c};r({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:c,wpcf7:{endpoint:"feedback",form:e,detail:o}}).then((t=>{const r=n(e,t.status);return o.status=t.status,o.apiResponse=t,["invalid","unaccepted","spam","aborted"].includes(r)?a(e,r,o):["sent","failed"].includes(r)&&a(e,`mail${r}`,o),a(e,"submit",o),t})).then((t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&t.invalid_fields.forEach((t=>{s(e,t.field,t.message)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=t.message}))})).catch((e=>console.error(e)))}r.use(((e,t)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:t,detail:r}=e.wpcf7;d(t),a(t,"beforesubmit",r),n(t,"submitting")}return t(e)}));const d=e=>{e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t=>{t.dataset.name&&i(e,t.dataset.name)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=""}))};function f(e){const t=new FormData(e),c={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(t,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:t};r({endpoint:`contact-forms/${e.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:e,detail:c}}).then((t=>{e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,n(e,"mail_sent")):n(e,"init"),c.apiResponse=t,a(e,"reset",c)})).catch((e=>console.error(e)))}r.use(((e,t)=>{if(e.wpcf7&&"refill"===e.wpcf7.endpoint){const{form:t,detail:a}=e.wpcf7;d(t),n(t,"resetting")}return t(e)}));const u=(e,t)=>{for(const a in t){const n=t[a];e.querySelectorAll(`input[name="${a}"]`).forEach((e=>{e.value=""})),e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":","")}`).forEach((e=>{e.setAttribute("src",n)}));const r=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);r&&e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e=>{e.value=r[1]}))}},m=(e,t)=>{for(const a in t){const n=t[a][0],r=t[a][1];e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e=>{e.querySelector(`input[name="${a}"]`).value="",e.querySelector(".wpcf7-quiz-label").textContent=n,e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value=r}))}};function w(e){const a=new FormData(e);e.wpcf7={id:t(a.get("_wpcf7")),status:e.getAttribute("data-status"),pluginVersion:a.get("_wpcf7_version"),locale:a.get("_wpcf7_locale"),unitTag:a.get("_wpcf7_unit_tag"),containerPost:t(a.get("_wpcf7_container_post")),parent:e.closest(".wpcf7"),get schema(){return wpcf7.schemas.get(this.id)}},wpcf7.schemas.set(e.wpcf7.id,void 0),e.querySelectorAll(".has-spinner").forEach((e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')})),(e=>{e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t=>{t.addEventListener("change",(t=>{const a=t.target.getAttribute("name");e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e=>{e!==t.target&&(e.checked=!1)}))}))}))})(e),(e=>{e.querySelectorAll(".has-free-text").forEach((t=>{const a=t.querySelector("input.wpcf7-free-text"),n=t.querySelector('input[type="checkbox"], input[type="radio"]');a.disabled=!n.checked,e.addEventListener("change",(e=>{a.disabled=!n.checked,e.target===n&&n.checked&&a.focus()}))}))})(e),(e=>{e.querySelectorAll(".wpcf7-validates-as-url").forEach((e=>{e.addEventListener("change",(t=>{let a=e.value.trim();a&&!a.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==a.indexOf(".")&&(a=a.replace(/^\/+/,""),a="http://"+a),e.value=a}))}))})(e),(e=>{if(!e.querySelector(".wpcf7-acceptance")||e.classList.contains("wpcf7-acceptance-as-validation"))return;const t=()=>{let t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((e=>{if(!t||e.classList.contains("optional"))return;const a=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&a.checked||!e.classList.contains("invert")&&!a.checked)&&(t=!1)})),e.querySelectorAll(".wpcf7-submit").forEach((e=>{e.disabled=!t}))};t(),e.addEventListener("change",(e=>{t()})),e.addEventListener("wpcf7reset",(e=>{t()}))})(e),(e=>{const a=(e,a)=>{const n=t(e.getAttribute("data-starting-value")),r=t(e.getAttribute("data-maximum-value")),c=t(e.getAttribute("data-minimum-value")),o=e.classList.contains("down")?n-a.value.trim().length:a.value.trim().length;e.setAttribute("data-current-value",o),e.innerText=o,r&&r<a.value.length?e.classList.add("too-long"):e.classList.remove("too-long"),c&&a.value.length<c?e.classList.add("too-short"):e.classList.remove("too-short")},n=t=>{t={init:!1,...t},e.querySelectorAll(".wpcf7-character-count").forEach((n=>{const r=n.getAttribute("data-target-name"),c=e.querySelector(`[name="${r}"]`);c&&(c.value=c.defaultValue,a(n,c),t.init&&c.addEventListener("keyup",(e=>{a(n,c)})))}))};n({init:!0}),e.addEventListener("wpcf7reset",(e=>{n()}))})(e),window.addEventListener("load",(t=>{wpcf7.cached&&e.reset()})),e.addEventListener("reset",(t=>{wpcf7.reset(e)})),e.addEventListener("submit",(t=>{wpcf7.submit(e,{submitter:t.submitter}),t.preventDefault()})),e.addEventListener("wpcf7submit",(t=>{t.detail.apiResponse.captcha&&u(e,t.detail.apiResponse.captcha),t.detail.apiResponse.quiz&&m(e,t.detail.apiResponse.quiz)})),e.addEventListener("wpcf7reset",(t=>{t.detail.apiResponse.captcha&&u(e,t.detail.apiResponse.captcha),t.detail.apiResponse.quiz&&m(e,t.detail.apiResponse.quiz)})),e.addEventListener("change",(t=>{t.target.closest(".wpcf7-form-control")&&wpcf7.validate(e,{target:t.target})})),e.addEventListener("wpcf7statuschanged",(t=>{const a=t.detail.status;e.querySelectorAll(".active-on-any").forEach((e=>{e.removeAttribute("inert"),e.classList.remove("active-on-any")})),e.querySelectorAll(`.inert-on-${a}`).forEach((e=>{e.setAttribute("inert","inert"),e.classList.add("active-on-any")}))}))}document.addEventListener("DOMContentLoaded",(t=>{var a;if("undefined"!=typeof wpcf7)if(void 0!==wpcf7.api)if("function"==typeof window.fetch)if("function"==typeof window.FormData)if("function"==typeof NodeList.prototype.forEach)if("function"==typeof String.prototype.replaceAll){wpcf7={init:w,submit:p,reset:f,validate:o,schemas:new Map,...null!==(a=wpcf7)&&void 0!==a?a:{}},document.querySelectorAll("form .wpcf7[data-wpcf7-id]").forEach((t=>{const a=document.createElement("p");a.setAttribute("class","wpcf7-form-in-wrong-place");const n=document.createElement("strong");n.append((0,e.__)("Error:","contact-form-7"));const r=(0,e.__)("This contact form is placed in the wrong place.","contact-form-7");a.append(n," ",r),t.replaceWith(a)})),document.querySelectorAll(".wpcf7 > form").forEach((e=>{wpcf7.init(e),e.closest(".wpcf7").classList.replace("no-js","js")}));for(const e of wpcf7.schemas.keys())r({endpoint:`contact-forms/${e}/feedback/schema`,method:"GET"}).then((t=>{wpcf7.schemas.set(e,t)}))}else console.error("Your browser does not support String.replaceAll().");else console.error("Your browser does not support NodeList.forEach().");else console.error("Your browser does not support window.FormData().");else console.error("Your browser does not support window.fetch().");else console.error("wpcf7.api is not defined.");else console.error("wpcf7 is not defined.")}))})();
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery-var-for-color","./vendor/jquery-color/jquery.color","./version"],t):t(jQuery)}(function(u){"use strict";var s,o,r,a,c,e,n,i,f,l,d="ui-effects-",h="ui-effects-style",p="ui-effects-animated";function m(t){var e,n,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,o={};if(i&&i.length&&i[0]&&i[i[0]])for(n=i.length;n--;)"string"==typeof i[e=i[n]]&&(o[e.replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})]=i[e]);else for(e in i)"string"==typeof i[e]&&(o[e]=i[e]);return o}function g(t,e,n,i){return t={effect:t=u.isPlainObject(t)?(e=t).effect:t},"function"==typeof(e=null==e?{}:e)&&(i=e,n=null,e={}),"number"!=typeof e&&!u.fx.speeds[e]||(i=n,n=e,e={}),"function"==typeof n&&(i=n,n=null),e&&u.extend(t,e),n=n||e.duration,t.duration=u.fx.off?0:"number"==typeof n?n:n in u.fx.speeds?u.fx.speeds[n]:u.fx.speeds._default,t.complete=i||e.complete,t}function v(t){return!t||"number"==typeof t||u.fx.speeds[t]||"string"==typeof t&&!u.effects.effect[t]||"function"==typeof t||"object"==typeof t&&!t.effect}function y(t,e){var n=e.outerWidth(),e=e.outerHeight(),t=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,n,e,0];return{top:parseFloat(t[1])||0,right:"auto"===t[2]?n:parseFloat(t[2]),bottom:"auto"===t[3]?e:parseFloat(t[3]),left:parseFloat(t[4])||0}}return u.effects={effect:{}},a=["add","remove","toggle"],c={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1},u.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){u.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,e,t.end),t.setAttr=!0)}}),u.fn.addBack||(u.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),u.effects.animateClass=function(o,t,e,n){var s=u.speed(t,e,n);return this.queue(function(){var n=u(this),t=n.attr("class")||"",e=(e=s.children?n.find("*").addBack():n).map(function(){return{el:u(this),start:m(this)}}),i=function(){u.each(a,function(t,e){o[e]&&n[e+"Class"](o[e])})};i(),e=e.map(function(){return this.end=m(this.el[0]),this.diff=function(t,e){var n,i,o={};for(n in e)i=e[n],t[n]===i||c[n]||!u.fx.step[n]&&isNaN(parseFloat(i))||(o[n]=i);return o}(this.start,this.end),this}),n.attr("class",t),e=e.map(function(){var t=this,e=u.Deferred(),n=u.extend({},s,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,n),e.promise()}),u.when.apply(u,e.get()).done(function(){i(),u.each(arguments,function(){var e=this.el;u.each(this.diff,function(t){e.css(t,"")})}),s.complete.call(n[0])})})},u.fn.extend({addClass:(r=u.fn.addClass,function(t,e,n,i){return e?u.effects.animateClass.call(this,{add:t},e,n,i):r.apply(this,arguments)}),removeClass:(o=u.fn.removeClass,function(t,e,n,i){return 1<arguments.length?u.effects.animateClass.call(this,{remove:t},e,n,i):o.apply(this,arguments)}),toggleClass:(s=u.fn.toggleClass,function(t,e,n,i,o){return"boolean"==typeof e||void 0===e?n?u.effects.animateClass.call(this,e?{add:t}:{remove:t},n,i,o):s.apply(this,arguments):u.effects.animateClass.call(this,{toggle:t},e,n,i)}),switchClass:function(t,e,n,i,o){return u.effects.animateClass.call(this,{add:e,remove:t},n,i,o)}}),u.expr&&u.expr.pseudos&&u.expr.pseudos.animated&&(u.expr.pseudos.animated=(e=u.expr.pseudos.animated,function(t){return!!u(t).data(p)||e(t)})),!1!==u.uiBackCompat&&u.extend(u.effects,{save:function(t,e){for(var n=0,i=e.length;n<i;n++)null!==e[n]&&t.data(d+e[n],t[0].style[e[n]])},restore:function(t,e){for(var n,i=0,o=e.length;i<o;i++)null!==e[i]&&(n=t.data(d+e[i]),t.css(e[i],n))},setMode:function(t,e){return e="toggle"===e?t.is(":hidden")?"show":"hide":e},createWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent();var i={width:n.outerWidth(!0),height:n.outerHeight(!0),float:n.css("float")},t=u("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:n.width(),height:n.height()},o=document.activeElement;try{o.id}catch(t){o=document.body}return n.wrap(t),n[0]!==o&&!u.contains(n[0],o)||u(o).trigger("focus"),t=n.parent(),"static"===n.css("position")?(t.css({position:"relative"}),n.css({position:"relative"})):(u.extend(i,{position:n.css("position"),zIndex:n.css("z-index")}),u.each(["top","left","bottom","right"],function(t,e){i[e]=n.css(e),isNaN(parseInt(i[e],10))&&(i[e]="auto")}),n.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),n.css(e),t.css(i).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),t[0]!==e&&!u.contains(t[0],e)||u(e).trigger("focus")),t}}),u.extend(u.effects,{version:"1.13.3",define:function(t,e,n){return n||(n=e,e="effect"),u.effects.effect[t]=n,u.effects.effect[t].mode=e,n},scaledDimensions:function(t,e,n){var i;return 0===e?{height:0,width:0,outerHeight:0,outerWidth:0}:(i="horizontal"!==n?(e||100)/100:1,n="vertical"!==n?(e||100)/100:1,{height:t.height()*n,width:t.width()*i,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*i})},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,n){var i=t.queue();1<e&&i.splice.apply(i,[1,0].concat(i.splice(e,n))),t.dequeue()},saveStyle:function(t){t.data(h,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(h)||"",t.removeData(h)},mode:function(t,e){t=t.is(":hidden");return"toggle"===e&&(e=t?"show":"hide"),e=(t?"hide"===e:"show"===e)?"none":e},getBaseline:function(t,e){var n,i;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":i=0;break;case"center":i=.5;break;case"right":i=1;break;default:i=t[1]/e.width}return{x:i,y:n}},createPlaceholder:function(t){var e,n=t.css("position"),i=t.position();return t.css({marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),/^(static|relative)/.test(n)&&(n="absolute",e=u("<"+t[0].nodeName+">").insertAfter(t).css({display:/^(inline|ruby)/.test(t.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight"),float:t.css("float")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),t.data(d+"placeholder",e)),t.css({position:n,left:i.left,top:i.top}),e},removePlaceholder:function(t){var e=d+"placeholder",n=t.data(e);n&&(n.remove(),t.removeData(e))},cleanUp:function(t){u.effects.restoreStyle(t),u.effects.removePlaceholder(t)},setTransition:function(i,t,o,s){return s=s||{},u.each(t,function(t,e){var n=i.cssUnit(e);0<n[0]&&(s[e]=n[0]*o+n[1])}),s}}),u.fn.extend({effect:function(){function t(t){var e=u(this),n=u.effects.mode(e,a)||s;e.data(p,!0),c.push(n),s&&("show"===n||n===s&&"hide"===n)&&e.show(),s&&"none"===n||u.effects.saveStyle(e),"function"==typeof t&&t()}var i=g.apply(this,arguments),o=u.effects.effect[i.effect],s=o.mode,e=i.queue,n=e||"fx",r=i.complete,a=i.mode,c=[];return u.fx.off||!o?a?this[a](i.duration,r):this.each(function(){r&&r.call(this)}):!1===e?this.each(t).each(f):this.queue(n,t).queue(n,f);function f(t){var e=u(this);function n(){"function"==typeof r&&r.call(e[0]),"function"==typeof t&&t()}i.mode=c.shift(),!1===u.uiBackCompat||s?"none"===i.mode?(e[a](),n()):o.call(e[0],i,function(){e.removeData(p),u.effects.cleanUp(e),"hide"===i.mode&&e.hide(),n()}):(e.is(":hidden")?"hide"===a:"show"===a)?(e[a](),n()):o.call(e[0],i,n)}},show:(f=u.fn.show,function(t){return v(t)?f.apply(this,arguments):((t=g.apply(this,arguments)).mode="show",this.effect.call(this,t))}),hide:(i=u.fn.hide,function(t){return v(t)?i.apply(this,arguments):((t=g.apply(this,arguments)).mode="hide",this.effect.call(this,t))}),toggle:(n=u.fn.toggle,function(t){return v(t)||"boolean"==typeof t?n.apply(this,arguments):((t=g.apply(this,arguments)).mode="toggle",this.effect.call(this,t))}),cssUnit:function(t){var n=this.css(t),i=[];return u.each(["em","px","%","pt"],function(t,e){0<n.indexOf(e)&&(i=[parseFloat(n),e])}),i},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):y(this.css("clip"),this)},transfer:function(t,e){var n=u(this),i=u(t.to),o="fixed"===i.css("position"),s=u("body"),r=o?s.scrollTop():0,s=o?s.scrollLeft():0,a=i.offset(),a={top:a.top-r,left:a.left-s,height:i.innerHeight(),width:i.innerWidth()},i=n.offset(),c=u("<div class='ui-effects-transfer'></div>");c.appendTo("body").addClass(t.className).css({top:i.top-r,left:i.left-s,height:n.innerHeight(),width:n.innerWidth(),position:o?"fixed":"absolute"}).animate(a,t.duration,t.easing,function(){c.remove(),"function"==typeof e&&e()})}}),u.fx.step.clip=function(t){t.clipInit||(t.start=u(t.elem).cssClip(),"string"==typeof t.end&&(t.end=y(t.end,t.elem)),t.clipInit=!0),u(t.elem).cssClip({top:t.pos*(t.end.top-t.start.top)+t.start.top,right:t.pos*(t.end.right-t.start.right)+t.start.right,bottom:t.pos*(t.end.bottom-t.start.bottom)+t.start.bottom,left:t.pos*(t.end.left-t.start.left)+t.start.left})},l={},u.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){l[t]=function(t){return Math.pow(t,e+2)}}),u.extend(l,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),u.each(l,function(t,e){u.easing["easeIn"+t]=e,u.easing["easeOut"+t]=function(t){return 1-e(1-t)},u.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}}),u.effects});
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(d){"use strict";return d.effects.define("slide","show",function(e,t){var i,o,n=d(this),c={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},s=e.mode,f=e.direction||"left",l="up"===f||"down"===f?"top":"left",p="up"===f||"left"===f,r=e.distance||n["top"==l?"outerHeight":"outerWidth"](!0),u={};d.effects.createPlaceholder(n),i=n.cssClip(),o=n.position()[l],u[l]=(p?-1:1)*r+o,u.clip=n.cssClip(),u.clip[c[f][1]]=u.clip[c[f][0]],"show"===s&&(n.cssClip(u.clip),n.css(l,u[l]),u.clip=i,u[l]=o),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:t})})});
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(t){"use strict";return t.effects.define("highlight","show",function(e,n){var o=t(this),i={backgroundColor:o.css("backgroundColor")};"hide"===e.mode&&(i.opacity=0),t.effects.saveStyle(o),o.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(i,{queue:!1,duration:e.duration,easing:e.easing,complete:n})})});
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(m){"use strict";return m.effects.define("fold","hide",function(i,e){var t=m(this),c=i.mode,n="show"===c,c="hide"===c,s=i.size||15,f=/([0-9]+)%/.exec(s),o=!!i.horizFirst?["right","bottom"]:["bottom","right"],a=i.duration/2,u=m.effects.createPlaceholder(t),l=t.cssClip(),r={clip:m.extend({},l)},p={clip:m.extend({},l)},d=[l[o[0]],l[o[1]]],h=t.queue().length;f&&(s=parseInt(f[1],10)/100*d[c?0:1]),r.clip[o[0]]=s,p.clip[o[0]]=s,p.clip[o[1]]=0,n&&(t.cssClip(p.clip),u&&u.css(m.effects.clipToBox(p)),p.clip=l),t.queue(function(e){u&&u.animate(m.effects.clipToBox(r),a,i.easing).animate(m.effects.clipToBox(p),a,i.easing),e()}).animate(r,a,i.easing).animate(p,a,i.easing).queue(e),m.effects.unshift(t,h,4)})});
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(s){"use strict";return s.effects.define("blind","hide",function(e,t){var i={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},o=s(this),n=e.direction||"up",c=o.cssClip(),f={clip:s.extend({},c)},r=s.effects.createPlaceholder(o);f.clip[i[n][0]]=f.clip[i[n][1]],"show"===e.mode&&(o.cssClip(f.clip),r&&r.css(s.effects.clipToBox(f)),f.clip=c),r&&r.animate(s.effects.clipToBox(f),e.duration,e.easing),o.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:t})})});
if('undefined'===typeof BG_SHCE_USE_EFFECTS){
BG_SHCE_USE_EFFECTS='0';
}
if('undefined'===typeof BG_SHCE_TOGGLE_SPEED){
BG_SHCE_TOGGLE_SPEED='0';
}
if('undefined'===typeof BG_SHCE_TOGGLE_OPTIONS){
BG_SHCE_TOGGLE_OPTIONS='swing';
}
if('undefined'===typeof BG_SHCE_TOGGLE_EFFECT){
BG_SHCE_TOGGLE_EFFECT='';
}
function bgExpandCollapsedContent(){
var bgCollapseExpandItems=document.querySelectorAll('input[bg_collapse_expand]');
for(i=0; i<bgCollapseExpandItems.length; i++){
var showHideButton=document.getElementById('bg-showmore-action-'+bgCollapseExpandItems[i].value);
var hiddenContent=document.getElementById('bg-showmore-hidden-'+bgCollapseExpandItems[i].value);
if(showHideButton&&hiddenContent){
if(window.addEventListener){
showHideButton.addEventListener('click', function(event){bgExpandCollapsedContentAction(event, this);});
}else{
window.attachEvent("onclick", function(event){bgExpandCollapsedContentAction(event, this);});
}}
if(jQuery(showHideButton).parent().prop("tagName")==='LI' &&
jQuery(showHideButton).parent().parent().prop("tagName")==='UL'){
jQuery(showHideButton).parent().parent().css('margin-bottom',0);
}}
}
function bgExpandCollapsedContentAction(event, thisObj){
event.preventDefault();
var bgUniqId=thisObj.id.replace('bg-showmore-action-', '');
var showHideButton=document.getElementById('bg-showmore-action-'+bgUniqId);
var hiddenContent=document.getElementById('bg-showmore-hidden-'+bgUniqId);
var showLessText=document.getElementById('bg-show-less-text-'+bgUniqId).value;
var showMoreText=document.getElementById('bg-show-more-text-'+bgUniqId).value;
var text=jQuery(showHideButton).text();
if(BG_SHCE_USE_EFFECTS==='1'){
jQuery(hiddenContent).toggle(BG_SHCE_TOGGLE_EFFECT, BG_SHCE_TOGGLE_OPTIONS, parseInt(BG_SHCE_TOGGLE_SPEED)+1);
}else{
jQuery(hiddenContent).toggle(parseInt(BG_SHCE_TOGGLE_SPEED));
}
if(showLessText===''){
jQuery(showHideButton).toggle();
if(jQuery(showHideButton).parent().prop("tagName")==='LI'){
jQuery(showHideButton).parent().toggle();
}}else{
jQuery(showHideButton).text(text==showMoreText ? showLessText:showMoreText
);
jQuery(showHideButton).toggleClass("bg-close");
}
if('undefined'!==typeof gmspAllMaps){
gmspResizeMaps('recenterHidden');
}}
function bgSelectedEffect(){
var effectOpts=jQuery('#bg_shce_effect > option');
if(effectOpts.length > 0){
var i=0;
while(i < effectOpts.length){
if(effectOpts[i].value===BG_SHCE_TOGGLE_EFFECT){
effectOpts[i].selected=true;
}
i++;
}}
if(BG_SHCE_USE_EFFECTS==='1'){
jQuery('.bg-effects').show();
}}
jQuery(document).ready(function(){
bgExpandCollapsedContent();
bgSelectedEffect();
});
(function($){
'use strict';
var pluginName="gdpr",
defaults={
bla: "",
};
function Plugin(element, options){
this.element=element;
this.settings=$.extend({}, defaults, options);
this._defaults=defaults;
this._name=pluginName;
this.init();
}
$.extend(Plugin.prototype, {
init: function(){
var that=this;
this.window=$(window);
this.documentHeight=$(document).height();
this.windowHeight=this.window.height();
this.privacySettingsCheckPerformed=false;
this.elements={};
this.elements.popUp=$('.wordpress-gdpr-popup-container');
this.elements.popUpAgreeLink=$('.wordpress-gdpr-popup-agree');
this.elements.popUpDeclineLink=$('.wordpress-gdpr-popup-decline');
this.elements.popUpCloseLink=$('.wordpress-gdpr-popup-close');
this.elements.popUpBackdrop=$('.wordpress-gdpr-popup-overlay-backdrop');
this.privacySettingsLoaded={};
this.elements.privacySettingsPopupTrigger=$('.wordpress-gdpr-privacy-settings-trigger-container');
this.elements.privacySettingsPopup=$('.wordpress-gdpr-privacy-settings-popup');
this.elements.privacySettingsPopupPrivacySettings=$('.wordpress-gdpr-privacy-settings-popup-privacy-settings-modal');
this.elements.privacySettingsPopupAgreeLink=$('.wordpress-gdpr-privacy-settings-popup-agree');
this.elements.privacySettingsPopupDeclineLink=$('.wordpress-gdpr-privacy-settings-popup-decline');
this.elements.privacySettingsPopupCloseLink=$('.wordpress-gdpr-privacy-settings-popup-close');
this.elements.privacySettingsPopupBackdrop=$('.wordpress-gdpr-privacy-settings-popup-backdrop');
if(this.settings.geoIP=="1"){
this.getUsersCountry(function(country){
var euCountries=['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'];
var isEU=that.isInArray(country, euCountries);
if(isEU){
that.popUp();
}else{
$('.wordpress-gdpr-popup-actions-buttons .wordpress-gdpr-popup-agree').trigger('click');
that.elements.privacySettingsPopupTrigger.remove();
}});
}else{
this.popUp();
}
this.popUpAgree();
this.popUpClose();
this.popUpDecline();
this.popUpPrivacySettings();
this.popUpPrivacySettingsOpen();
this.popUpPrivacySettingsClose();
this.privacyPolicyTermsAcceptance();
this.commentFormprivacyPolicyTermsAcceptance();
},
popUp:function(){
var botPattern="/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/";
var re=new RegExp(botPattern, 'i');
if(re.test(navigator.userAgent)){
return false;
}
var that=this;
var cookiesAllowed=false;
$.ajax({
type:'post',
url:that.settings.ajaxURL,
dataType:'json',
data:{
action:'check_privacy_setting',
setting:'wordpress_gdpr_cookies_allowed',
current_page_id:that.get_current_page_id()
},
success:function(response){
var popupExcludePages=that.settings.popupExcludePages;
var exclude=false;
if(!that.isEmpty(popupExcludePages)){
var currentPage, matches=document.body.className.match(/(^|\s)post-id-(\d+)(\s|$)/);
if(matches){
currentPage=matches[2];
}else{
matches=document.body.className.match(/(^|\s)page-id-(\d+)(\s|$)/);
if(matches){
currentPage=matches[2];
}}
if(currentPage!==""&&that.isInArray(currentPage, popupExcludePages)){
exclude=true;
}}
if(!exclude) {
if(response.firstTime){
if(that.elements.popUpBackdrop.length > 0){
that.elements.popUpBackdrop.show();
}
$.each($('.gdpr-service-switch:not(:disabled)'), function(i, index){
$(this).prop('checked', true);
});
that.elements.popUp.show();
}
else if((!response.allowed&&!response.declined)||that.getParameterByName('gdpr')==="debug"){
if(that.elements.popUpBackdrop.length > 0){
that.elements.popUpBackdrop.show();
}
that.elements.popUp.show();
}else{
if(that.elements.popUpBackdrop.length > 0){
that.elements.popUpBackdrop.hide();
}
that.elements.popUp.hide();
}}
that.checkPrivacySettings();
},
error: function (xhr, ajaxOptions, thrownError){
console.log(xhr);
console.log(ajaxOptions);
console.log(thrownError);
}});
},
popUpClose:function(){
var that=this;
$(that.elements.popUpCloseLink).on('click', function(e){
e.preventDefault();
if(that.elements.popUpBackdrop.length > 0){
that.elements.popUpBackdrop.fadeOut();
}
that.elements.popUp.fadeOut();
});
},
popUpDecline:function(){
var that=this;
that.elements.popUpDeclineLink.on('click', function(e){
e.preventDefault();
var $this=$(this);
var text=$this.text();
$this.html('<i class="fa fa-spinner fa-spin"></i>');
$.ajax({
type:'post',
url:that.settings.ajaxURL,
dataType:'json',
data:{
action:'wordpress_gdpr_decline_cookies'
},
success:function(response){
if(that.elements.popUpBackdrop.length > 0){
that.elements.popUpBackdrop.fadeOut();
}
$('.wordpress-gdpr-privacy-settings-popup, .wordpress-gdpr-privacy-settings-popup-backdrop').fadeOut();
that.elements.popUp.fadeOut();
$.each($('.gdpr-service-switch:not(:disabled)'), function(i, index){
$(this).prop('checked', false);
});
$this.text(text);
},
error: function (xhr, ajaxOptions, thrownError){
console.log(xhr);
console.log(ajaxOptions);
console.log(thrownError);
}});
});
},
popUpAgree:function(){
var that=this;
that.elements.popUpAgreeLink.on('click', function(e){
e.preventDefault();
var $this=$(this);
var text=$this.text();
$this.html('<i class="fa fa-spinner fa-spin"></i>');
$.ajax({
type:'post',
url:that.settings.ajaxURL,
dataType:'json',
data:{
action:'wordpress_gdpr_allow_cookies'
},
success:function(response){
if(that.elements.popUpBackdrop.length > 0){
that.elements.popUpBackdrop.fadeOut();
}
$('.wordpress-gdpr-privacy-settings-popup, .wordpress-gdpr-privacy-settings-popup-backdrop').fadeOut();
that.elements.popUp.fadeOut();
$.each($('.gdpr-service-switch:not(:disabled)'), function(i, index){
$(this).prop('checked', true);
});
that.checkPrivacySettings();
$this.text(text);
},
error: function (xhr, ajaxOptions, thrownError){
console.log(xhr);
console.log(ajaxOptions);
console.log(thrownError);
}});
});
},
popUpPrivacySettingsOpen:function (){
var that=this;
$('.wordpress-gdpr-open-privacy-settings-modal').on('click', function(e){
e.preventDefault();
if(($('.wordpress-gdpr-privacy-settings-popup-services-container').length < 1)){
alert('No GDPR Service Categories / Services created yet. Remove the trigger or create services and attach them to service categories first.');
return false;
}
if($('.wordpress-gdpr-popup').length > 0){
$('.wordpress-gdpr-popup').hide(0, function(){
$('.wordpress-gdpr-privacy-settings-popup, .wordpress-gdpr-privacy-settings-popup-backdrop').fadeIn();
});
}else{
$('.wordpress-gdpr-privacy-settings-popup, .wordpress-gdpr-privacy-settings-popup-backdrop').fadeIn();
}});
},
popUpPrivacySettingsClose:function (){
var that=this;
$(that.elements.privacySettingsPopupCloseLink).on('click', function(e){
e.preventDefault();
if(that.elements.privacySettingsPopupBackdrop.length > 0){
that.elements.privacySettingsPopupBackdrop.fadeOut();
}
that.elements.privacySettingsPopup.fadeOut();
});
},
popUpPrivacySettings:function(){
$('.wordpress-gdpr-popup-privacy-settings-open-service-category').on('click', function(e){
e.preventDefault();
var id=$(this).data('id');
$('.wordpress-gdpr-popup-privacy-settings-services-content:not(#wordpress-gdpr-popup-privacy-settings-services-content-' + id + ')').hide(0, function(){
$('#wordpress-gdpr-popup-privacy-settings-services-content-' + id).show();
});
});
$('.wordpress-gdpr-popup-privacy-settings-services-content-title').on('click', function(e){
e.preventDefault();
var $this=$(this);
var id=$(this).data('id');
var fa=$this.find('.fa');
var description=$('#wordpress-gdpr-popup-privacy-settings-services-content-description-' + id);
if(description.css('display')=='none'){
description.slideDown();
fa.removeClass('fa-caret-right').addClass('fa-caret-down');
}else{
description.slideUp();
fa.removeClass('fa-caret-down').addClass('fa-caret-right');
}});
},
checkPrivacySettings:function(){
var that=this;
var settings={};
var switches=$('.gdpr-service-switch');
$.each(switches, function(){
var serviceID=$(this).data('id');
settings[serviceID]=serviceID;
});
$.ajax({
type:'post',
url:that.settings.ajaxURL,
dataType:'json',
data:{
action:'check_privacy_settings',
settings:settings
},
success:function(response){
$.each(response, function(i, index){
if(index.head!==""&&index.allowed&&!that.privacySettingsLoaded[i]){
$("head").append(index.head);
}
if(index.body!==""&&index.allowed&&that.privacySettingsLoaded[i]){
$(index.body).prependTo($('body'));
}
if(index.adsense=="1"&&!index.allowed&&that.privacySettingsLoaded[i]){
var adsExists=$(".adsbygoogle");
if(adsExists.length > 0&&that.getCookie('wordpress_gdpr_adsense_allowed')!=="true"){
adsExists.remove();
}}
var checkbox_exists=$('input[name="' + i + '"]') ;
if(checkbox_exists.length > 0){
if(index.allowed){
checkbox_exists.prop('checked', true);
that.privacySettingsLoaded[i]=true;
}else{
checkbox_exists.prop('checked', false);
that.privacySettingsLoaded[i]=false;
}}
if(checkbox_exists.length > 0&&!that.privacySettingsCheckPerformed){
checkbox_exists.on('change', function(e){
var checked=$(this).prop('checked');
var name=$(this).prop('name');
$('.wordpress-gdpr-privacy-settings-popup-message').fadeIn();
$.ajax({
type:'post',
url:that.settings.ajaxURL,
dataType:'json',
data:{
action:'update_privacy_setting',
setting:name,
checked:checked,
},
success:function(response){
setTimeout(function(){ $('.wordpress-gdpr-privacy-settings-popup-message').fadeOut(); }, 1500);
var index=response[name];
if(index.head!==""&&index.allowed&&that.privacySettingsLoaded[name]){
$("head").append(index.head);
}
if(index.body!==""&&index.allowed&&that.privacySettingsLoaded[name]){
$(index.body).prependTo($('body'));
}
if(index.adsense=="1"&&!index.allowed&&that.privacySettingsLoaded[name]){
var adsExists=$(".adsbygoogle");
if(adsExists.length > 0&&that.getCookie('wordpress_gdpr_adsense_allowed')!=="true"){
adsExists.remove();
}}
var checkbox_exists=$('input[name="' + name + '"]') ;
if(checkbox_exists.length > 0){
if(index.allowed){
checkbox_exists.prop('checked', true);
that.privacySettingsLoaded[name]=true;
}else{
checkbox_exists.prop('checked', false);
}}
}});
});
}});
that.privacySettingsCheckPerformed=true;
},
error: function (xhr, ajaxOptions, thrownError){
console.log(xhr);
console.log(ajaxOptions);
console.log(thrownError);
}});
},
get_current_page_id:function(){
var page_body=$('body.page');
var id=0;
if(page_body){
var page_body_class=page_body.attr('class')
if(page_body_class||page_body_class!=null){
if(page_body_class.length > 1){
var page_body_class_list=page_body_class.split(/\s+/);
$.each(page_body_class_list, function(index, item){
if(item.indexOf('page-id') >=0){
var item_arr=item.split('-');
id=item_arr[item_arr.length -1];
return false;
}});
}}
}
return id;
},
getUsersCountry:function(callback){
var that=this;
$.ajax({
url: "https://ip.nf/me.json",
type: 'get',
dataType: 'json',
success:function(response){
callback(response.ip.country_code);
},
error: function(jqXHR, textStatus, errorThrown){
console.log(jqXHR);
console.log(textStatus);
console.log(errorThrown);
}});
},
commentFormprivacyPolicyTermsAcceptance:function(){
var that=this;
var submit=$('#commentform input[type="submit"]');
if(submit.length < 1){
return false;
}
var checkbox=$('#commentform #privacy_policy');
if(checkbox.length < 1){
return false;
}
submit.on('click', function(e){
var checkboxChecked=checkbox.is(':checked');
if(!checkboxChecked){
e.preventDefault();
alert(that.settings.acceptanceText);
return false;
}
$.ajax({
type:'post',
url:that.settings.ajaxURL,
dataType:'json',
data:{
action:'wordpress_gdpr_update_privacy_policy_terms',
setting:'wordpress_gdpr_privacy_policy_accepted',
checked:checkboxChecked,
}});
return true;
});
},
privacyPolicyTermsAcceptance:function(){
var that=this;
if($('#accept-privacy-policy-checkbox').length < 1&&$('#accept-terms-conditions-checkbox').length < 1){
return false;
}
$('#accept-privacy-policy-checkbox, #accept-terms-conditions-checkbox').on('click', function(e){
var name=$(this).prop('name');
var checked=$(this).prop('checked');
if(!checked){
alert(that.settings.acceptanceText);
return false;
}
$.ajax({
type:'post',
url:that.settings.ajaxURL,
dataType:'json',
data:{
action:'wordpress_gdpr_update_privacy_policy_terms',
setting:name,
checked:checked,
},
});
});
},
deleteAllCookies:function(){
var cookies=document.cookie.split(";");
console.log(cookies);
for (var i=0; i < cookies.length; i++){
var cookie=cookies[i];
var eqPos=cookie.indexOf("=");
var name=eqPos > -1 ? cookie.substr(0, eqPos):cookie;
document.cookie=name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}},
isEmpty: function(obj){
if(obj==null)        return true;
if(obj.length > 0)     return false;
if(obj.length===0)   return true;
for (var key in obj){
if(hasOwnProperty.call(obj, key)) return false;
}
return true;
},
sprintf: function parse(str){
var args=[].slice.call(arguments, 1),
i=0;
return str.replace(/%s/g, function(){
return args[i++];
});
},
getCookie: function(cname){
var name=cname + "=";
var ca=document.cookie.split(';');
for(var i=0; i<ca.length; i++){
var c=ca[i];
while (c.charAt(0)==' ') c=c.substring(1);
if(c.indexOf(name)===0) return c.substring(name.length, c.length);
}
return "";
},
createCookie: function(name, value, days){
var expires="";
if(days){
var date=new Date();
date.setTime(date.getTime() + (days*24*60*60*1000));
var expires="; expires="+date.toGMTString();
}
document.cookie=name + "=" + value+expires + "; path=/";
},
deleteCookie: function(name){
this.createCookie(name, '', -10);
},
getParameterByName: function(name, url){
if(!url) url=window.location.href;
name=name.replace(/[\[\]]/g, "\\$&");
var regex=new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
results=regex.exec(url);
if(!results) return null;
if(!results[2]) return '';
return decodeURIComponent(results[2].replace(/\+/g, " "));
},
isInArray:function (value, array){
return array.indexOf(value) > -1;
}});
$.fn[ pluginName ]=function(options){
return this.each(function(){
if(!$.data(this, "plugin_" + pluginName) ){
$.data(this, "plugin_" +
pluginName, new Plugin(this, options) );
}});
};
$(document).ready(function(){
$("body").gdpr(gdpr_options
);
});
})(jQuery);