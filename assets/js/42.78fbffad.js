(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{399:function(e,t,i){"use strict";i.r(t);var n=i(44),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h4",{attrs:{id:"react性能优化"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#react性能优化"}},[e._v("#")]),e._v(" react性能优化")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("使用纯组件 pureComponent")])]),e._v(" "),i("li",[i("p",[e._v("使用React.memo 主要用作函数组件")])]),e._v(" "),i("li",[i("p",[e._v("使用shouldComponetupdate")])]),e._v(" "),i("li",[i("p",[e._v("使用React.Fragments 无节点避免额外标记")])]),e._v(" "),i("li",[i("p",[e._v("不要使用内联函数定义，就是render里，组件的onClick直接()=>{this.xxx},因为每次调用render，都会创建一个新的函数实例，因此，直接绑定内联函数就会需要额外的做绑定到DOM操作和回收")])]),e._v(" "),i("li",[i("p",[e._v("使用箭头函数，因为使用箭头函数会绑定上下文，就不需要将函数绑定到constructor了")])]),e._v(" "),i("li",[i("p",[e._v("避免使用内联样式，因为使用内联样式需要花费更多时间处理脚本和渲染，因为要映射传递到实际的CSS属性")])]),e._v(" "),i("li",[i("p",[e._v("优化react的条件渲染")])]),e._v(" "),i("li",[i("p",[e._v("使用唯一键迭代，尽量不要使用默认的index，因为diff算法会去遍历新旧两个对象，如果使用index，在表头新增一个，那么所有的index都+1，所有的都需要重新更新。")])]),e._v(" "),i("li",[i("p",[e._v("事件的防抖和节流")])]),e._v(" "),i("li",[i("p",[e._v("前后端数据传输，如果数据包太大，前端可以用gzip进行压缩")])]),e._v(" "),i("li",[i("p",[e._v("使用suspense组件进行组件的懒加载")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);