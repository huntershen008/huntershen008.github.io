"use strict";(self.webpackChunkaurorahelp=self.webpackChunkaurorahelp||[]).push([[494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),p=i,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),i=r(6010),a=r(2802),o=r(9960),c=r(3919),s=r(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},r," ",a),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:o},o))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const o=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},3112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905)),a=r(2991);const o={},c="Work with Variables",s={unversionedId:"create_addin_prime/topics/Work with Variables",id:"create_addin_prime/topics/Work with Variables",title:"Work with Variables",description:"Integrating variables into your document offers a streamlined approach to managing recurrent pieces of information, such as the name of a test drug or its usual route of administration. By defining these repeating elements as variables, you can insert the relevant variable wherever needed within the document. This method centralizes updates; changing the information in one place automatically reflects across all instances where the variable is used. Utilizing variables enhances the uniformity, standardization, and structure of your document\u2019s wording. This not only significantly reduces the time spent on manually updating repeated information but also minimizes the risk of human errors in editing. Such a strategy is particularly beneficial in documents requiring frequent updates or containing complex, repetitive data, ensuring both efficiency and consistency in document preparation.",source:"@site/docs/create_addin_prime/topics/Work with Variables.md",sourceDirName:"create_addin_prime/topics",slug:"/create_addin_prime/topics/Work with Variables",permalink:"/docs/create_addin_prime/topics/Work with Variables",draft:!1,editUrl:"https://github.com/huntershen008/huntershen008.github.io/-/tree/main/create_addin_prime/topics/Work with Variables.md/",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"View TFL Summaries",permalink:"/docs/create_addin_prime/topics/View TFL Summaries"}},l={},u=[],m={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"work-with-variables"},"Work with Variables"),(0,i.kt)("p",null,"Integrating variables into your document offers a streamlined approach to managing recurrent pieces of information, such as the name of a test drug or its usual route of administration. By defining these repeating elements as variables, you can insert the relevant variable wherever needed within the document. This method centralizes updates; changing the information in one place automatically reflects across all instances where the variable is used. Utilizing variables enhances the uniformity, standardization, and structure of your document\u2019s wording. This not only significantly reduces the time spent on manually updating repeated information but also minimizes the risk of human errors in editing. Such a strategy is particularly beneficial in documents requiring frequent updates or containing complex, repetitive data, ensuring both efficiency and consistency in document preparation."),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);