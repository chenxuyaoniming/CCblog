(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{380:function(t,e,n){"use strict";n.r(e);var r=n(44),s=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h4",{attrs:{id:"react性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react性能优化"}},[this._v("#")]),this._v(" react性能优化")]),this._v(" "),e("p",[this._v("1、使用纯组件 pureComponent\n2、使用React.memo 主要用作函数组件\n3、使用shouldComponetupdate\n4、使用React.Fragments 无节点避免额外标记\n5、不要使用内联函数定义，就是render里，组件的onClick直接()=>{this.xxx},因为每次调用render，都会创建一个新的函数实例，因此，直接绑定内联函数就会需要额外的做绑定到DOM操作和回收\n6、使用箭头函数，因为使用箭头函数会绑定上下文，就不需要将函数绑定到constructor了\n7、避免使用内联样式，因为使用内联样式需要花费更多时间处理脚本和渲染，因为要映射传递到实际的CSS属性\n8、优化react的条件渲染\n9、使用唯一键迭代，尽量不要使用默认的index，因为diff算法会去遍历新旧两个对象，如果使用index，在表头新增一个，那么所有的index都+1，所有的都需要重新更新。\n10、事件的防抖和节流\n11、前后端数据传输，如果数据包太大，前端可以用gzip进行压缩")])])}),[],!1,null,null,null);e.default=s.exports}}]);