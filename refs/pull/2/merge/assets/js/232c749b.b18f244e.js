"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[5899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o="Syscall Used by `fopen()`",i={unversionedId:"Lab/IO/quiz/fopen-syscall",id:"Lab/IO/quiz/fopen-syscall",title:"Syscall Used by `fopen()`",description:"Question Text",source:"@site/docs/Lab/IO/quiz/fopen-syscall.md",sourceDirName:"Lab/IO/quiz",slug:"/Lab/IO/quiz/fopen-syscall",permalink:"/operating-systems/refs/pull/2/merge/Lab/IO/quiz/fopen-syscall",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedaback",id:"feedaback",level:2}],c={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"syscall-used-by-fopen"},"Syscall Used by ",(0,a.kt)("inlineCode",{parentName:"h1"},"fopen()")),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"strace")," to determine the syscall called by ",(0,a.kt)("inlineCode",{parentName:"p"},"fopen()")," to access the file.\nWhich one is it?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"read()"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openat()"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"write()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"fstat()")))),(0,a.kt)("h2",{id:"feedaback"},"Feedaback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/simple-file-handling$ strace ./file_operations\n[...]\nopenat(AT_FDCWD, "file.txt", O_RDONLY)  = 3\nfstat(3, {st_mode=S_IFREG|0664, st_size=11, ...}) = 0\nread(3, "C was here!", 4096)            = 11\n[...]\n')),(0,a.kt)("p",null,"So ",(0,a.kt)("inlineCode",{parentName:"p"},"fopen()"),"'s (main) underlying syscall is ",(0,a.kt)("inlineCode",{parentName:"p"},"openat()"),"."))}f.isMDXComponent=!0}}]);