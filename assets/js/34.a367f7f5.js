(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{391:function(t,s,n){"use strict";n.r(s);var a=n(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"js事件循环-event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js事件循环-event-loop"}},[t._v("#")]),t._v(" JS事件循环 - Event Loop")]),t._v(" "),n("h4",{attrs:{id:"js是单线程语言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js是单线程语言"}},[t._v("#")]),t._v(" js是单线程语言")]),t._v(" "),n("p",[t._v("js是单线程语言，同一时间只能执行一件事，h5规范中提出web worker,允许js注册多个线程，\n但是这些线程都是受主线程控制，不得操作DOM，所以仍然是单线程。")]),t._v(" "),n("h4",{attrs:{id:"任务队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#任务队列"}},[t._v("#")]),t._v(" 任务队列")]),t._v(" "),n("p",[t._v("因为js是单线程的，所以任务必须一个一个执行，如果前面的任务计算量过大，会阻塞后面任务的执行\n，但是如果前面的任务需要等待IO接口，此时cpu就会空闲下来，如果出现这种情况，js设计者认为此时\n可以完全不必等待IO接口返回结果,将这个任务挂起，继续往下执行任务，如果IO接口返回了结果，\n那么再转过头来把之前挂起的任务继续执行下去。这样，任务就分成了两种，同步任务，异步任务。")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("同步任务")]),t._v("：任务自上而下执行，只有上一个任务执行完毕之后，才会执行下一个任务")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("异步任务")]),t._v("：不进入主线程，进入的是任务队列（task queue），只有任务队列通知主线程后，异步任务才会被放入主线程执行")])])]),t._v(" "),n("h4",{attrs:{id:"运行机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行机制"}},[t._v("#")]),t._v(" 运行机制")]),t._v(" "),n("ol",[n("li",[t._v("所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）")]),t._v(" "),n("li",[t._v("主线程之外，还存在一个任务队列，只要异步任务有了结果，就在任务队列中放入一个事件")]),t._v(" "),n("li",[t._v("一旦执行栈中的同步任务执行完毕，系统就会读取任务队列中的事件，放入主线程中执行")]),t._v(" "),n("li",[t._v("主线程循环执行第三步\n"),n("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100801.jpg",alt:""}})])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("只要主线程空了，就会读取任务队列，这就是js的运行机制")])]),t._v(" "),n("li",[n("strong",[t._v("异步事件执行，挂机了回调函数")])]),t._v(" "),n("li",[n("strong",[t._v("主线程从任务队列中读取任务是不断循环的，所以这一机制被称之为event loop")])])]),t._v(" "),n("h4",{attrs:{id:"event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png",alt:""}}),t._v("\n主线程运行的时候产生堆（heap）和栈（stack），栈中的代码调用各种外部api，这些api\n在任务队列中加入各种事件（click,done,load），只要栈中的代码执行完毕，主线程就回\n去读取任务队列，依次执行那些事件所对应的回调函数，"),n("font",{attrs:{color:"red"}},[t._v("执行栈中的代\n码，总是在读取任务队列之前执行（不一定执行完）")])],1),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" xhr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// onload onerror为xhr执行过程中的回调函数，js会在执行完执行栈中的方法后再去读")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取任务队列，所以声明位置不需要和send保持严格上下关系")]),t._v("\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("h4",{attrs:{id:"定时器-settimeout与setinterval"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定时器-settimeout与setinterval"}},[t._v("#")]),t._v(" 定时器 settimeout与setinterval")]),t._v(" "),n("p",[t._v("定时器的作用是将回调函数推入任务队列之中，等待n后执行任务，但是n有可能是不准确的，当执行栈中的\n任务计算量过大阻塞了线程后，定时器设定的执行时间就会出现偏差")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 1")]),t._v("\n")])])]),n("p",[t._v("以上执行过程，会先执行执行栈中的任务（console.log(2)），之后再去执行任务队列中的任务")]),t._v(" "),n("h3",{attrs:{id:"nodejs中的event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs中的event-loop"}},[t._v("#")]),t._v(" NodeJs中的Event Loop")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100803.png",alt:""}})]),t._v(" "),n("ul",[n("li",[t._v("v8引擎解析js脚本")]),t._v(" "),n("li",[t._v("解析后的代码调用node api")]),t._v(" "),n("li",[t._v("libuv库负责Node Api的运行，他将不同的任务分配给不同的线程，形成一个event loop，以异步的方式将结果返回给v8引擎")]),t._v(" "),n("li",[t._v("v8引擎将结果反馈给用户")])]),t._v(" "),n("h4",{attrs:{id:"process-nexttick-setimmediate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#process-nexttick-setimmediate"}},[t._v("#")]),t._v(" process.nextTick && setImmediate")]),t._v(" "),n("p",[t._v("与settimeout类似，将任务推入任务队列，不同的是，process，nextTick可以将其回调函数放在当前执行栈的末尾（主线程读取任务队列之前）执行，\nsetImmediate方法是将其回调函数放入任务队列的尾部执行")]),t._v(" "),n("ul",[n("li",[t._v("process.nextTick的回调函数总是在异步方法执行之前执行")]),t._v(" "),n("li",[t._v("setImmediate的回调总是注册在下一次的event loop中")]),t._v(" "),n("li",[t._v("process.nextTick总是在本次事件循环中执行，setImmediate总是在下次事件循环中执行，所以process.nextTick\n效率要比setImmediate高")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nPromise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise:::2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nprocess"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'next::3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setImm::::4'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'settimeout:::5'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// next::3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// promise:::2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setImm::::4 ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// settimeout:::5")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4和5的执行顺序不是稳定的")]),t._v("\n\n")])])]),n("p",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰原文"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);