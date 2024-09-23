"use strict";(self.webpackChunkaurorahelp=self.webpackChunkaurorahelp||[]).push([[7434],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=m(r),d=n,y=l["".concat(p,".").concat(d)]||l[d]||u[d]||i;return r?a.createElement(y,o(o({ref:t},s),{},{components:r})):a.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:n,o[1]=c;for(var m=2;m<i;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const i={},o="Validate a TFL Summary",c={unversionedId:"create_addin_prime/topics/Validate a TFL Summary",id:"create_addin_prime/topics/Validate a TFL Summary",title:"Validate a TFL Summary",description:"TFL summary normal text in the document cannot be detected or managed by the Prime Create add-in. You must first use Convert Text to TFL Summary to transform normal text into specialized TFL summary objects before they can be processed by the add-in.",source:"@site/docs/create_addin_prime/topics/Validate a TFL Summary.md",sourceDirName:"create_addin_prime/topics",slug:"/create_addin_prime/topics/Validate a TFL Summary",permalink:"/docs/create_addin_prime/topics/Validate a TFL Summary",draft:!1,editUrl:"https://github.com/huntershen008/huntershen008.github.io/-/tree/main/create_addin_prime/topics/Validate a TFL Summary.md/",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Upload TFL Source Files",permalink:"/docs/create_addin_prime/topics/Upload TFL Source Files"},next:{title:"View In-Text TFLs",permalink:"/docs/create_addin_prime/topics/View In-Text TFLs"}},p={},m=[],s={toc:m};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"validate-a-tfl-summary"},"Validate a TFL Summary"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"TFL summary normal text in the document cannot be detected or managed by the Prime Create add-in. You must first use ",(0,n.kt)("a",{parentName:"p",href:"/docs/create_addin_prime/topics/Convert%20Text%20to%20TFL%20Summary"},"Convert Text to TFL Summary")," to transform normal text into specialized TFL summary objects before they can be processed by the add-in.")),(0,n.kt)("p",null,"The Create add-in can help you validate the accuracy and consistency of the TFL summary objects against the TFL data and to ensure that the TFL summaries are presented coherently and align with the corresponding TFLs. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://doc.myaurora.cn/auroraprime_help_en_us/images/image_20240516110538.png",alt:null})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the document, select the TFL summary object. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Validate TFL Summary"),". "),(0,n.kt)("p",{parentName:"li"},"The add-in examines the selected TFL summary object against the corresponding TFL object and list any discrepancies found. Discrepancies are also highlighted in the in-text TFL object. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you wish to have the system auto-update the TFL summary object to fix the discrepancies, click ",(0,n.kt)("strong",{parentName:"p"},"Summary Update"),". "),(0,n.kt)("p",{parentName:"li"},"Wait until the content generation is complete and review the updated version of the TFL summary object. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose whether to track changes in the in-text TFL object to be updated. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Replace")," to substitute the updated TFL summary object for the original version in the document. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you are happy with the revisions, accept these changes in Microsoft Word. "))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://doc.myaurora.cn/auroraprime_help_en_us/images/image_20240516110592.png",alt:null})))}l.isMDXComponent=!0}}]);