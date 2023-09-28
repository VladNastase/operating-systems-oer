"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[2827],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>b});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},I=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(i),I=a,b=m["".concat(o,".").concat(I)]||m[I]||c[I]||l;return i?n.createElement(b,r(r({ref:t},p),{},{components:i})):n.createElement(b,r({ref:t},p))}));function b(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=I;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<l;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}I.displayName="MDXCreateElement"},4387:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=i(7462),a=(i(7294),i(3905));const l={},r="I/O Internals",s={unversionedId:"Lab/IO/io-internals",id:"Lab/IO/io-internals",title:"I/O Internals",description:"Now, we will take a short look at how the file descriptors you've just learnt about are handled in libc.",source:"@site/docs/Lab/IO/io-internals.md",sourceDirName:"Lab/IO",slug:"/Lab/IO/io-internals",permalink:"/operating-systems/refs/pull/2/merge/Lab/IO/io-internals",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"File Mappings",permalink:"/operating-systems/refs/pull/2/merge/Lab/IO/file-mappings"},next:{title:"Zero-Copy",permalink:"/operating-systems/refs/pull/2/merge/Lab/IO/zero-copy"}},o={},d=[{value:"IO Optimisations",id:"io-optimisations",level:2},{value:"I/O Buffering",id:"io-buffering",level:3},{value:"Practice: <code>printf()</code> Buffering",id:"practice-printf-buffering",level:4},{value:"Practice: Buffering Performance",id:"practice-buffering-performance",level:4},{value:"Practice: DIY Buffering",id:"practice-diy-buffering",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"io-internals"},"I/O Internals"),(0,a.kt)("p",null,"Now, we will take a short look at how the file descriptors you've just learnt about are handled in libc.\nThe Software Stack chapter has taught us that applications generally interact with libraries which expose wrappers on top of syscalls.\nThe most important library in a POSIX system (such as Linux) is libc.\nAmong many others, it provides higher-level abstractions over I/O-related syscalls."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Musl"),' (read just like "muscle") is a lightweight implementation of libc, which exposes the same API that you have used so far, while also being fit for embedded and OS development.\nFor example, ',(0,a.kt)("a",{parentName:"p",href:"https://unikraft.org/"},"Unikraft")," ",(0,a.kt)("a",{parentName:"p",href:"https://unikraft.org/docs/concepts/"},"unikernels")," may ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/unikraft/lib-musl"},"use musl"),"."),(0,a.kt)("p",null,"First, it provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," that groups together multiple data that is necessary when handling files.\nWe know from the example in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/simple-file-operations/file_operations.c")," that the file handler employed by libc is ",(0,a.kt)("inlineCode",{parentName:"p"},"FILE *"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"FILE")," is just a ",(0,a.kt)("inlineCode",{parentName:"p"},"typedef")," for ",(0,a.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/musl/v1.2.3/source/src/internal/stdio_impl.h#L21"},(0,a.kt)("inlineCode",{parentName:"a"},"struct _IO_FILE")),".\nHere are the most important fields in ",(0,a.kt)("inlineCode",{parentName:"p"},"struct _IO_FILE"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct _IO_FILE {\n        int fd;         /* File descriptor */\n\n        unsigned flags; /* Flags with which `open()` was called */\n\n        int mode;       /* File permissions; passed to `open()` */\n\n        off_t off;      /* File offset from where to read / write */\n\n        /**\n         * Internal buffer used to make fewer costly `read()`/`write()`\n         * syscalls.\n         */\n        unsigned char *buf;\n        size_t buf_size;\n\n        /* Pointers for reading and writing from/to the buffer defined above. */\n        unsigned char *rpos, *rend;\n        unsigned char *wend, *wpos;\n\n        /* Function pointers to syscall wrappers. */\n        size_t (*read)(FILE *, unsigned char *, size_t);\n        size_t (*write)(FILE *, const unsigned char *, size_t);\n        off_t (*seek)(FILE *, off_t, int);\n        int (*close)(FILE *);\n\n        /* Lock for concurrent file access. */\n        volatile int lock;\n};\n")),(0,a.kt)("p",null,"As you might have imagined, this structure contains the underlying file descriptor, the ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," (read, write, truncate etc.) with which the file was opened, as well as the offset within the file from which the next read / write will start."),(0,a.kt)("p",null,"Libc also defines its own wrappers over commonly-used syscalls, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"read()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"write()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"close()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lseek()"),".\nThese syscalls themselves need to be implemented by the driver for each file system.\nThis is done by writing the required functions for each syscall and then populating ",(0,a.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/v6.0.9/source/include/linux/fs.h#L2093"},"this structure")," with pointers to them.\nYou will recognise quite a few syscalls: ",(0,a.kt)("inlineCode",{parentName:"p"},"open()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"close()")," ",(0,a.kt)("inlineCode",{parentName:"p"},"read()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"write()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mmap()")," etc."),(0,a.kt)("h2",{id:"io-optimisations"},"IO Optimisations"),(0,a.kt)("p",null,"You saw this hierarchy during the Data lecture:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Memory Hierarchy",src:i(4132).Z,width:"711",height:"371"})),(0,a.kt)("p",null,"It says that while the disk can store lots of data, it does so at the cost of speed.\nWhen we say speed, we mean the rate at which we can read/write data from/to the disk, i.e. the maximum number of bytes transferred per unit of time.\nThis means that ",(0,a.kt)("inlineCode",{parentName:"p"},"read()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"write()"),' syscalls (or their various corresponding library calls) are slow and cause performance bottlenecks.\nMore often than not, it is the I/O component that drags down the performance of an otherwise fast application.\nAnd what\'s worse, the further the "destination" of the I/O operation (file on the disk or host on the Web) is, the more time it takes to transfer data to and from it.'),(0,a.kt)("p",null,"On the other hand, as we've already established, the I/O component defines how we interact with an app.\nIf we want it to be responsive and to do something useful, most likely, the I/O is the key."),(0,a.kt)("p",null,"So I/O is crucial for most applications, yet it is also the slowest..."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sad Pepe",src:i(6585).Z,width:"382",height:"362"})),(0,a.kt)("p",null,"But fear not!\nThere are countless optimisations out there aimed precisely at bridging the speed gap between the memory and the disk."),(0,a.kt)("h3",{id:"io-buffering"},"I/O Buffering"),(0,a.kt)("p",null,"Going back to our initial example with ",(0,a.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/musl/v1.2.3/source/src/internal/stdio_impl.h#L21"},(0,a.kt)("inlineCode",{parentName:"a"},"struct _IO_FILE"))," from Musl, we can see some more fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"unsigned char *buf;\nsize_t buf_size;\nunsigned char *rpos, *rend;\nunsigned char *wend, *wpos;\n")),(0,a.kt)("p",null,"Given the number ",(0,a.kt)("inlineCode",{parentName:"p"},"unsigned char *")," fields we have in this structure, it seems there is some heavy ",(0,a.kt)("em",{parentName:"p"},"buffering")," going on.\nBut what is it?"),(0,a.kt)("h4",{id:"practice-printf-buffering"},"Practice: ",(0,a.kt)("inlineCode",{parentName:"h4"},"printf()")," Buffering"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"support/buffering/printf_buffering.c"),".\nThose ",(0,a.kt)("inlineCode",{parentName:"li"},"printf()")," calls obviously end up calling ",(0,a.kt)("inlineCode",{parentName:"li"},"write()")," at some point.\nRun the code under ",(0,a.kt)("inlineCode",{parentName:"li"},"strace"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/operating-systems/refs/pull/2/merge/Lab/IO/quiz/strace-printf"},"Quiz")),(0,a.kt)("p",null,"Since there is only one ",(0,a.kt)("inlineCode",{parentName:"p"},"write()")," syscall despite multiple calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"printf()"),", it means that the strings given to ",(0,a.kt)("inlineCode",{parentName:"p"},"printf()")," as arguments are kept ",(0,a.kt)("em",{parentName:"p"},"somewhere")," until the syscall is made.\nThat ",(0,a.kt)("em",{parentName:"p"},"somewhere")," is precisely that buffer inside ",(0,a.kt)("inlineCode",{parentName:"p"},"struct _IO_FILE")," that we highlighted above.\nRemember that syscalls cause the system to change from user mode to kernel mode, which is time-consuming.\nInstead of performing one ",(0,a.kt)("inlineCode",{parentName:"p"},"write()")," syscall per call to ",(0,a.kt)("inlineCode",{parentName:"p"},"printf()"),", it is more efficient to copy the string passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"printf()")," to an ",(0,a.kt)("strong",{parentName:"p"},"internal buffer")," inside libc (the ",(0,a.kt)("inlineCode",{parentName:"p"},"unsigned char *buf")," from above) and then at a given time (like when the buffer is full for example) ",(0,a.kt)("inlineCode",{parentName:"p"},"write()")," the whole buffer.\nThis results in far fewer ",(0,a.kt)("inlineCode",{parentName:"p"},"write()")," syscalls."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Now, it is interesting to see how we can force libc to dump that internal buffer.\nThe most direct way is by using the ",(0,a.kt)("inlineCode",{parentName:"li"},"fflush()")," library call, which is made for this exact purpose.\nBut we can be more subtle.\nAdd a ",(0,a.kt)("inlineCode",{parentName:"li"},"\\n")," in some of the strings printed in ",(0,a.kt)("inlineCode",{parentName:"li"},"support/buffering/printf_buffering.c"),".\nPlace them wherever you want (at the beginning, at the end, in the middle).\nRecompile the code and observe its change in behaviour under ",(0,a.kt)("inlineCode",{parentName:"li"},"strace"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/operating-systems/refs/pull/2/merge/Lab/IO/quiz/flush-libc-buffer"},"Quiz")),(0,a.kt)("p",null,"Now we know that I/O buffering ",(0,a.kt)("strong",{parentName:"p"},"does happen")," within libc.\nIf you need further convincing, check out the Musl implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/musl/v1.2.3/source/src/stdio/fread.c#L6"},(0,a.kt)("inlineCode",{parentName:"a"},"fread()")),", for example.\nIt first copies the ",(0,a.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/musl/v1.2.3/source/src/stdio/fread.c#L16"},"data previously saved in the internal buffer"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"if (f->rpos != f->rend) {\n        /* First exhaust the buffer. */\n        k = MIN(f->rend - f->rpos, l);\n        memcpy(dest, f->rpos, k);\n        f->rpos += k;\n        dest += k;\n        l -= k;\n}\n")),(0,a.kt)("p",null,"Then, if more data is requested and the internal buffer isn't full, it refills it using ",(0,a.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/musl/v1.2.3/source/src/stdio/fread.c#L27"},"the internal ",(0,a.kt)("inlineCode",{parentName:"a"},"read()")," wrapper"),".\nThis wrapper also places the data inside the destination buffer."),(0,a.kt)("h4",{id:"practice-buffering-performance"},"Practice: Buffering Performance"),(0,a.kt)("p",null,"Up to now, it's pretty clear what I/O buffering is about.\nLet's see what kind of a performance increase it brings.\nWe'll look at an extreme example.\nNavigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"support/buffering/no_buffering.c"),".\nThis code either writes or reads the contents of a file ",(0,a.kt)("strong",{parentName:"p"},"one byte at a time")," using a syscall for each of them."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"benchmark_buffering.sh")," script to compare the ",(0,a.kt)("inlineCode",{parentName:"p"},"no_buffering")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"libc_buffering")," implementations.\nBelow are some possible results.\nYours are likely going to be different:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:/.../support/buffering$\n======== Testing no_buffering ========\nTesting no_buffering read...\nRead 1048576 bytes from test-file.txt in 717 ms\nTesting no_buffering write...\nWrote 1048576 bytes to test-file.txt in 19632 ms\n======== Testing libc_buffering ========\nTesting libc_buffering read...\nRead 1048576 bytes from test-file.txt in 14 ms\nTesting libc_buffering write...\nWrote 1048576 bytes to test-file.txt in 38 ms\n")),(0,a.kt)("p",null,"So buffering brings a ",(0,a.kt)("strong",{parentName:"p"},"98%")," improvement for reading and a ",(0,a.kt)("strong",{parentName:"p"},"99.8%"),' improvement for writing!\nThis is massive!\nYes, this is an extreme example, but it goes a long way to show how powerful I/O buffering can be.\nNow, the question is, "Can YOU do better?"'),(0,a.kt)("h3",{id:"practice-diy-buffering"},"Practice: DIY Buffering"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"support/buffering/diy_buffering.c"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"diy_fread()")," already defines a minimalistic implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"fread()"),".\nUse it as a starting point to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"diy_write()")," as an implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"fwrite()"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"benchmark_buffering.sh")," to compare the performance of your implementation with that of libc.\nDid you beat it?"))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"I/O Buffering is a ubiquitous optimisation in all libc implementations.\nIt is so powerful that the kernel uses it as well.\nThis means that the kernel also reads more bytes than it's requested and stores the remainder in an internal buffer, just like libc.\nThis concept is known as ",(0,a.kt)("strong",{parentName:"p"},"double buffering"),".\nIn the ",(0,a.kt)("a",{parentName:"p",href:"/operating-systems/refs/pull/2/merge/Lab/IO/zero-copy"},"following section"),", we will see how to make use of this internal buffering to optimise network requests."),(0,a.kt)("p",null,"Notice that the script in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/buffering/benchmark_buffering.sh")," also uses ",(0,a.kt)("inlineCode",{parentName:"p"},"echo 3 > /proc/sys/vm/drop_caches"),".\nThat section ",(0,a.kt)("a",{parentName:"p",href:"/operating-systems/refs/pull/2/merge/Lab/IO/arena#to-drop-or-not-to-drop"},"in the Arena")," that we mentioned earlier is becoming even more interesting."))}c.isMDXComponent=!0},4132:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZGlhZ3JhbXMubmV0IC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgd2lkdGg9IjcxMXB4IiBoZWlnaHQ9IjM3MXB4IiB2aWV3Qm94PSItMC41IC0wLjUgNzExIDM3MSIgY29udGVudD0iJmx0O214ZmlsZSBob3N0PSZxdW90O2FwcC5kaWFncmFtcy5uZXQmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMi0xMi0wOFQwOTowMzozNy44MjhaJnF1b3Q7IGFnZW50PSZxdW90OzUuMCAoWDExKSZxdW90OyBldGFnPSZxdW90O3JWbUViSzdSbGM2VW1rU2RVRFNzJnF1b3Q7IHZlcnNpb249JnF1b3Q7MjAuNi4wJnF1b3Q7IHR5cGU9JnF1b3Q7ZGV2aWNlJnF1b3Q7Jmd0OyZsdDtkaWFncmFtIGlkPSZxdW90OzFOb3R2clVOZU4td2JBQWhaRFlYJnF1b3Q7IG5hbWU9JnF1b3Q7UGFnZS0xJnF1b3Q7Jmd0OzdaaGRiOW93RklaL1RhVHRnc21KQ1drdklaU2hUVWhWVVRYdUpqZDJFNnRKbkRtbXdINzk3TVRPTndLdFVGWGF1Q0Y1YlIvYjcrT0RUMnRCUDlsLzVTaUxWZ3lUMkhJQTNsdHdiam55NHpueVN5bUhVcmx4UUNtRW5PSlNzbXRoVFg4VExacHVXNHBKM3Vvb0dJc0Z6ZHBpd05LVUJLS2xJYzdacnQzdG1jWHRXVE1Va3A2d0RsRGNWMzlRTENLOUN4ZlUrcExRTURJejIwQzNKTWgwMWtJZUljeDJEUW5lV2REbmpJbnlLZG43SkZibUdWL0tjWXNqcmRYQ09FbkZPUU95N3orLzNhWGVaamQ3ZWR4Nm04VnFFM2tqSGVVVnhWdTlZYjFZY1RBT2NMWk5NVkZCYkF2T2RoRVZaSjJoUUxYdUpIT3BSU0tKZFhNdU9Ic2hQb3NabDByS1V0bHRwdWNnWEpEOTBjWGJsU1h5TEJHV0VNRVBzb3NlTUlMYXhZTTVIdnA5VjBQeHpKbUpHa0NncDBXa0QwSll4YTY5a2cvYXJtSHJIa2ZaUEhOdm95QzBJNWd0bHhrR3dhQjFrMWhPTzN0bWNsTk5EeWUvdHN3MGpQTGlqRTlsQjJuQXZyREh0TXVuVUg4WGdaNk04RUJDbWd2Q2M5TWlWL3pVN1MyMWNtWWp2eDJrT2ZKanRYZ2F4d2FzNVVBSExoWmdXczNUUXprQS9DaGRhSGZvdW4yNnRqTkFkM0l0dU01UnVKWHRQZ29pb2hLZEpFek5PQVRtTFFRVVMvMTdLTGQrQmhFQWJtOEJ1QXdSeDIwVHFYNlBHMFNjOFhzU2dhZUpyQkJOWlplVkJnSStQVXhYbno4QW1JWDhRSGdoTUtBRHh1dURnZThLWm53YXpKckk2eG1qWWg4MW5TWGllSVJwL21JNWNtYXdYcy9MQnlLQ0x4OEJtKzhEY0tsOHNqdjVCR0VmMi9oZHNibW5iMzZTNHFrcW9lUmJFS004cDBIYjBkcCtjSmEvUjMwa3VGV0U5VjFzdU9RT21HUTBUbUlrNkd1N2RCdHlUczl3ejJoeFV4dElUaHZTMk9tWW43TXRENGdlMVN5MVRnU3k3VTRnZ1hoSVJDOVFBYkxhOXQrem5aeE95WHZDbnhsUFVDcXo1WnhVaytkY3RPbWptSWFwT2hxU0pwRXBNMVBaUUdYbFBOVU5DY1ZZRFo5eEltc2U5RlNFVWljalUvc3VuSEJubGp0WHNiYUNsWFhSOFNxeW1aMUc2aHk1Q3lScXQ5Q3NMcmxtS1RLVXFQQmFpZXI5VDlTckplckVPeEhveW9sNmN6cFJmU1J2TkNyT0t6RC9sU3l0S2h6RGJTaEx3V1d5Vkw3V2Y2U1g0T3QvZGNDN1B3PT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjcxMCIgaGVpZ2h0PSIzNzAiIHJ4PSI1NS41IiByeT0iNTUuNSIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIzNDAiIHk9IjUwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiByeD0iOSIgcnk9IjkiIGZpbGw9IiMyM2ZmMGEiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2Utd2lkdGg9IjQiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogODBweDsgbWFyZ2luLWxlZnQ6IDM0MXB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiIGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+PGZvbnQgc3R5bGU9ImZvbnQtc2l6ZTogMjBweDsiPjxiPlJlZ2lzdGVyczwvYj48L2ZvbnQ+PC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjQwMCIgeT0iODQiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SZWdpc3RlcnM8L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjI4MCIgeT0iMTEwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjYwIiByeD0iOSIgcnk9IjkiIGZpbGw9IiMwMDk5MDAiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2Utd2lkdGg9IjQiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMjM4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTQwcHg7IG1hcmdpbi1sZWZ0OiAyODFweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDIwcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPjxiPkNhY2hlIG1lbW9yeTwvYj48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNDAwIiB5PSIxNDYiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIyMHB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DYWNoZSBtZW1vcnk8L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjIzMCIgeT0iMTcwIiB3aWR0aD0iMzQwIiBoZWlnaHQ9IjYwIiByeD0iOSIgcnk9IjkiIGZpbGw9IiNmZmZmMzMiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2Utd2lkdGg9IjQiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMzM4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjAwcHg7IG1hcmdpbi1sZWZ0OiAyMzFweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDIwcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPjxiPk1haW4gTWVtb3J5IChSQU0pPC9iPjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI0MDAiIHk9IjIwNiIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjIwcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1haW4gTWVtb3J5IChSQU0pPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIxODAiIHk9IjIzMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSI2MCIgcng9IjkiIHJ5PSI5IiBmaWxsPSIjY2MwMDAwIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLXdpZHRoPSI0IiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDQzOHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDI2MHB4OyBtYXJnaW4tbGVmdDogMTgxcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyIgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAyMHB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij48Yj5TZWNvbmRhcnkgTWVtb3J5IChIYXJkLWRpc2ssIFNTRCwgZXRjLik8L2I+PC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjQwMCIgeT0iMjY2IiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMjBweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U2Vjb25kYXJ5IE1lbW9yeSAoSGFyZC1kaXNrLCBTU0QsIGV0Yy4pPC90ZXh0Pjwvc3dpdGNoPjwvZz48cGF0aCBkPSJNIDE1MCAzMjAgTCAxNTAgMjEuOTciIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTUwIDE0LjQ3IEwgMTU1IDI0LjQ3IEwgMTUwIDIxLjk3IEwgMTQ1IDI0LjQ3IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMCIgeT0iMTQwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMXB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDE1NXB4OyBtYXJnaW4tbGVmdDogNzBweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDIwcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij48Yj5QZXJmb3JtYW5jZTwvYj48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNzAiIHk9IjE2MSIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjIwcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBlcmZvcm1hbmNlPC90ZXh0Pjwvc3dpdGNoPjwvZz48cGF0aCBkPSJNIDE1MCAzMjAgTCA2ODguMDMgMzIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDY5NS41MyAzMjAgTCA2ODUuNTMgMzI1IEwgNjg4LjAzIDMyMCBMIDY4NS41MyAzMTUgWiIgZmlsbD0icmdiKDAsIDAsIDApIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIzNzAiIHk9IjM0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAzNTVweDsgbWFyZ2luLWxlZnQ6IDQyMHB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiIGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMjBweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPjxiPkNhcGFjaXR5PC9iPjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI0MjAiIHk9IjM2MSIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjIwcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNhcGFjaXR5PC90ZXh0Pjwvc3dpdGNoPjwvZz48L2c+PHN3aXRjaD48ZyByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiLz48YSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC01KSIgeGxpbms6aHJlZj0iaHR0cHM6Ly93d3cuZGlhZ3JhbXMubmV0L2RvYy9mYXEvc3ZnLWV4cG9ydC10ZXh0LXByb2JsZW1zIiB0YXJnZXQ9Il9ibGFuayI+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMHB4IiB4PSI1MCUiIHk9IjEwMCUiPlRleHQgaXMgbm90IFNWRyAtIGNhbm5vdCBkaXNwbGF5PC90ZXh0PjwvYT48L3N3aXRjaD48L3N2Zz4="},6585:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/sad-pepe-93384f7b72f31ab085cdf22a743d769d.png"}}]);