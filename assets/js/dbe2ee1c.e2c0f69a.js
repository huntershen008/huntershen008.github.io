"use strict";(self.webpackChunkaurorahelp=self.webpackChunkaurorahelp||[]).push([[738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),a=r(6010),c=r(2802),o=r(9960),i=r(3919),l=r(5999);const s="cardContainer_fWXF",p="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function d(e){let{href:t,icon:r,title:c,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:c},r," ",c),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:o},o))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const o=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},2982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),c=r(2991);const o={},i="Sync Data",l={unversionedId:"create_addin_prime/topics/Sync Data",id:"create_addin_prime/topics/Sync Data",title:"Sync Data",description:"TFL placeholders embedded in the document are empty TFL objects with no data in them.",source:"@site/docs/create_addin_prime/topics/Sync Data.md",sourceDirName:"create_addin_prime/topics",slug:"/create_addin_prime/topics/Sync Data",permalink:"/docs/create_addin_prime/topics/Sync Data",draft:!1,editUrl:"https://github.com/huntershen008/huntershen008.github.io/-/tree/main/create_addin_prime/topics/Sync Data.md/",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Sync Data from Source to an In-Text TFL",permalink:"/docs/create_addin_prime/topics/Sync Data from Source to an In-Text TFL"},next:{title:"Translate Text",permalink:"/docs/create_addin_prime/topics/Translate Text"}},s={},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sync-data"},"Sync Data"),(0,a.kt)("p",null,"TFL placeholders embedded in the document are empty TFL objects with no data in them.\nYou must sync data from TFL source files to their corresponding placeholders to actually insert the TFLs into the document. After TFL data is populated, when its mapping source file has been updated, you must perform data sync again to keep the data points in the in-text TFL most updated. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://doc.myaurora.cn/auroraprime_help_en_us/images/image_20240530160554.png",alt:null})),(0,a.kt)("p",null,"Sync TFL data using in either of the following ways: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/create_addin_prime/topics/Sync%20Data%20from%20Source%20to%20an%20In-Text%20TFL"},"Sync Data from Source to an In-Text TFL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/create_addin_prime/topics/Batch%20Sync%20Data%20from%20Source%20to%20In-Text%20TFLs"},"Batch Sync Data from Source to In-Text TFLs"))),(0,a.kt)(c.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);