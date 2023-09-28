"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[8448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,d=c["".concat(u,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Semaphore Equivalent",l={unversionedId:"Lab/Compute/quiz/semaphore-equivalent",id:"Lab/Compute/quiz/semaphore-equivalent",title:"Semaphore Equivalent",description:"Question Text",source:"@site/docs/Lab/Compute/quiz/semaphore-equivalent.md",sourceDirName:"Lab/Compute/quiz",slug:"/Lab/Compute/quiz/semaphore-equivalent",permalink:"/operating-systems/refs/pull/2/merge/Lab/Compute/quiz/semaphore-equivalent",draft:!1,tags:[],version:"current",frontMatter:{}},u={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"semaphore-equivalent"},"Semaphore Equivalent"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"From running and inspecting the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/apache2-simulator/apache2_simulator_semaphore.py"),", which of the following is an an equivalent to the value of the semaphore ",(0,a.kt)("inlineCode",{parentName:"p"},"sem"),"?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The value of ",(0,a.kt)("inlineCode",{parentName:"p"},"msg_mutex"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The time a worker thread has to wait before running"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The length of the ",(0,a.kt)("inlineCode",{parentName:"li"},"messages")," list")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of worker threads")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sem")," is incremented (",(0,a.kt)("inlineCode",{parentName:"p"},"release()"),") upon adding a message to the ",(0,a.kt)("inlineCode",{parentName:"p"},"messages")," list and decremented (",(0,a.kt)("inlineCode",{parentName:"p"},"acquire()"),") when removing a message from said list.\nSo it's a rough equivalent to the length of this list."))}m.isMDXComponent=!0}}]);