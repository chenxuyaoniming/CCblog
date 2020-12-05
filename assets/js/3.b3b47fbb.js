(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{358:function(t,s,e){t.exports=e.p+"assets/img/http.af22398d.jpg"},359:function(t,s,e){t.exports=e.p+"assets/img/spdy.4ec702c8.jpg"},360:function(t,s,e){t.exports=e.p+"assets/img/multip.527d2815.jpg"},373:function(t,s,e){"use strict";e.r(s);var r=e(44),v=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"http解析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http解析"}},[t._v("#")]),t._v(" http解析")]),t._v(" "),r("h4",{attrs:{id:"影响http请求的两个因素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#影响http请求的两个因素"}},[t._v("#")]),t._v(" 影响http请求的两个因素")]),t._v(" "),r("ul",[r("li",[t._v("带宽\n"),r("ul",[r("li",[t._v("网络传输速度影响了http请求速度")])])]),t._v(" "),r("li",[t._v("延迟\n"),r("ul",[r("li",[t._v("浏览器阻塞（同域请求最大连接数6个，剩余请求会被阻塞）")]),t._v(" "),r("li",[t._v("dns查询（查询域名对应的服务器IP地址）")]),t._v(" "),r("li",[t._v("建立连接（tcp三次握手）")])])])]),t._v(" "),r("h3",{attrs:{id:"http与https的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http与https的区别"}},[t._v("#")]),t._v(" http与https的区别")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("HTTPS协议需要到CA申请证书，一般免费证书很少，需要交费。")])]),t._v(" "),r("li",[r("p",[t._v("HTTP协议运行在TCP之上，所有传输的内容都是明文，HTTPS运行在SSL/TLS之上，SSL/TLS运行在TCP之上，所有传输的内容都经过加密的。")])]),t._v(" "),r("li",[r("p",[t._v("HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。")])]),t._v(" "),r("li",[r("p",[t._v("HTTPS可以有效的防止运营商劫持，解决了防劫持的一个大问题。")])])]),t._v(" "),r("p",[r("img",{attrs:{src:e(358),alt:"http"}})]),t._v(" "),r("h3",{attrs:{id:"http1-0和http1-1的一些区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http1-0和http1-1的一些区别"}},[t._v("#")]),t._v(" "),r("strong",[t._v("HTTP1.0和HTTP1.1的一些区别")])]),t._v(" "),r("p",[r("strong",[t._v("1. 缓存处理")]),t._v("，在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。")]),t._v(" "),r("p",[r("strong",[t._v("2. 带宽优化及网络连接的使用")]),t._v("，HTTP1.0中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP1.1则在请求头引入了range头域，它允许只请求资源的某个部分，即返回码是206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。")]),t._v(" "),r("p",[r("strong",[t._v("3. 错误通知的管理")]),t._v("，在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。")]),t._v(" "),r("p",[r("strong",[t._v("4. Host头处理")]),t._v("，在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）。")]),t._v(" "),r("p",[r("strong",[t._v("5. 长连接")]),t._v("，HTTP 1.1支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启Connection： keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。")]),t._v(" "),r("h3",{attrs:{id:"spdy-http1-x的优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spdy-http1-x的优化"}},[t._v("#")]),t._v(" "),r("strong",[t._v("SPDY：HTTP1.x的优化")])]),t._v(" "),r("p",[r("strong",[t._v("1. 降低延迟")]),t._v("，针对HTTP高延迟的问题，SPDY优雅的采取了多路复用（multiplexing）。多路复用通过多个请求stream共享一个tcp连接的方式，解决了HOL blocking的问题，降低了延迟同时提高了带宽的利用率。")]),t._v(" "),r("p",[r("strong",[t._v("2. 请求优先级（request prioritization）")]),t._v("。多路复用带来一个新的问题是，在连接共享的基础之上有可能会导致关键请求被阻塞。SPDY允许给每个request设置优先级，这样重要的请求就会优先得到响应。比如浏览器加载首页，首页的html内容应该优先展示，之后才是各种静态资源文件，脚本文件等加载，这样可以保证用户能第一时间看到网页内容。")]),t._v(" "),r("p",[r("strong",[t._v("3. header压缩")]),t._v("。前面提到HTTP1.x的header很多时候都是重复多余的。选择合适的压缩算法可以减小包的大小和数量。")]),t._v(" "),r("p",[r("strong",[t._v("4. 基于HTTPS的加密协议传输")]),t._v("，大大提高了传输数据的可靠性。")]),t._v(" "),r("p",[r("strong",[t._v("5. 服务端推送（server push）")]),t._v("，采用了SPDY的网页，例如我的网页有一个sytle.css的请求，在客户端收到sytle.css数据的同时，服务端会将sytle.js的文件推送给客户端，当客户端再次尝试获取sytle.js时就可以直接从缓存中获取到，不用再发请求了。SPDY构成图：")]),t._v(" "),r("p",[r("img",{attrs:{src:e(359),alt:"spdy"}})]),t._v(" "),r("h3",{attrs:{id:"http2-0和http1-x相比的新特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http2-0和http1-x相比的新特性"}},[t._v("#")]),t._v(" HTTP2.0和HTTP1.X相比的新特性")]),t._v(" "),r("p",[r("strong",[t._v("1. 新的二进制格式（Binary Format）")]),t._v("，HTTP1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。")]),t._v(" "),r("p",[r("strong",[t._v("2. 多路复用（MultiPlexing）")]),t._v("，即连接共享，即每一个request都是是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。")]),t._v(" "),r("p",[r("strong",[t._v("3. header压缩")]),t._v("，如上文中所言，对前面提到过HTTP1.x的header带有大量信息，而且每次都要重复发送，HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。")]),t._v(" "),r("p",[r("strong",[t._v("4. 服务端推送（server push）")]),t._v("，同SPDY一样，HTTP2.0也具有server push功能。")]),t._v(" "),r("h3",{attrs:{id:"http2-0的多路复用和http1-x中的长连接复用有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http2-0的多路复用和http1-x中的长连接复用有什么区别"}},[t._v("#")]),t._v(" HTTP2.0的多路复用和HTTP1.X中的长连接复用有什么区别？")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("HTTP/1.* 一次请求-响应，建立一个连接，用完关闭；每一个请求都要建立一个连接；")])]),t._v(" "),r("li",[r("p",[t._v("HTTP/1.1 Pipeling解决方式为，若干个请求排队串行化单线程处理，后面的请求等待前面请求的返回才能获得执行机会，一旦有某请求超时等，后续请求只能被阻塞，毫无办法，也就是人们常说的线头阻塞；")])]),t._v(" "),r("li",[r("p",[t._v("HTTP/2多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行；具体如图：\n"),r("img",{attrs:{src:e(360),alt:"multip"}})])])]),t._v(" "),r("h3",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),r("ol",[r("li",[t._v("为什么需要压缩头部资源\n"),r("ul",[r("li",[t._v("页面在加载资源时，每次请求都带有消息头，当请求足够多时，传输消息头所消耗的流量就会增加，http2.0可以维护一个字典集，差量更新消息头，减少传输消息头所需要的流量消耗。")])])]),t._v(" "),r("li",[t._v("http1.x的缺点\n"),r("ul",[r("li",[t._v("数据传输是基于串行文件传输数据，请求必须是有序的，要等到上个请求完成数据返回后才能进行下个请求操作，对于同一个域名下的请求最大并发数是6个，剩余请求会被搁置等待前面请求完成后才会进行，如果前面的请求延迟过高，会影响后续的请求")])])]),t._v(" "),r("li",[t._v("http2.0多路复用有什么优势\n"),r("ul",[r("li",[t._v("tcp链接是慢启动的，传输速度会随着时间的增加而加快，http2.0多路复用，让同一域名下的请求共享一个tcp连接，http2.0使用的二进制数据流可以让不同请求的数据并行传输，而不会导致乱序")])])])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/GICbiyJpINrHZ41u_4zT-A",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),r("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=v.exports}}]);