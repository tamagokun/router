"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Navigation Container",sidebar_position:6},i=void 0,l={unversionedId:"features/container",id:"features/container",title:"Navigation Container",description:"The global React Navigation ` is managed by Expo Router, you can pass it props like theme and initialState from any screen by using the ` component.",source:"@site/docs/features/container.md",sourceDirName:"features",slug:"/features/container",permalink:"/router/docs/features/container",draft:!1,editUrl:"https://github.com/expo/router/tree/main/docs/docs/features/container.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Navigation Container",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Screen Options",permalink:"/router/docs/features/options"},next:{title:"Error handling",permalink:"/router/docs/features/errors"}},p={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The global React Navigation ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigation-container/"},(0,r.kt)("inlineCode",{parentName:"a"},"<NavigationContainer />"))," is managed by Expo Router, you can pass it props like ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"initialState")," from any screen by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<RootContainer />")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/home.tsx",title:"app/home.tsx"},'import { RootContainer } from "expo-router";\nimport { DarkTheme } from "@react-navigation/native";\n\nexport default function Page() {\n  return (\n    <>\n      {/* These props will be applied to the parent NavigationContainer. */}\n      // highlight-next-line\n      <RootContainer theme={DarkTheme} />\n    </>\n  );\n}\n')),(0,r.kt)("p",null,"Access the ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigation-container/"},(0,r.kt)("inlineCode",{parentName:"a"},"<NavigationContainer />"))," ref with the ",(0,r.kt)("inlineCode",{parentName:"p"},"RootContainer.useRef()")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/home.tsx",title:"app/home.tsx"},"function Page() {\n  // Returns null when the container has not finished mounting.\n  const navigationRef = RootContainer.useRef();\n  return <>...</>;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RootContainer.useRef()")," can be used to determine if the container has finished loading."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Avoid setting ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"linking")," as these will break all automatic assumptions made by the router.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoid using ",(0,r.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/navigation-container/#initialstate"},(0,r.kt)("inlineCode",{parentName:"a"},"initialState"))," as this is automatically handled by deep links (which Expo Router enables by default)."),(0,r.kt)("li",{parentName:"ul"},"Avoid using ",(0,r.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/navigation-container/#independent"},(0,r.kt)("inlineCode",{parentName:"a"},"independent"))," as this isn't automatically supported by the router."),(0,r.kt)("li",{parentName:"ul"},"Use dynamic routes and 404 screens in favor of ",(0,r.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/navigation-container/#onunhandledaction"},(0,r.kt)("inlineCode",{parentName:"a"},"onUnhandledAction")),".")))}u.isMDXComponent=!0}}]);