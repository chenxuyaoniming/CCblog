(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{397:function(t,a,s){"use strict";s.r(a);var r=s(44),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"react事件流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react事件流"}},[t._v("#")]),t._v(" react事件流")]),t._v(" "),s("p",[t._v("本质上采用的是原生DOM事件的事件委托（冒泡）机制，将所有事件统一绑定在Document上。")]),t._v(" "),s("h4",{attrs:{id:"合成事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合成事件"}},[t._v("#")]),t._v(" 合成事件")]),t._v(" "),s("p",[t._v("合成事件是react定义的事件对象，在底层磨平了各个浏览器之间的差异，对外暴露了统一的api。合成事件内部保存的原生事件")]),t._v(" "),s("h4",{attrs:{id:"注册过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册过程"}},[t._v("#")]),t._v(" 注册过程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/78/87/CgqCHl_KCjaALFKsAAHNjlT3rrw342.png",alt:"1"}})]),t._v(" "),s("ul",[s("li",[t._v("初始化时，会在document上注册各种事件，每种事件只注册一次，相同的事件会跳过")])]),t._v(" "),s("h4",{attrs:{id:"合成事件触发过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合成事件触发过程"}},[t._v("#")]),t._v(" 合成事件触发过程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/78/7C/Ciqc1F_KCneAfMZbAAE9PxK7X3w813.png",alt:"2"}})]),t._v(" "),s("ul",[s("li",[t._v("document触发事件监听")]),t._v(" "),s("li",[t._v("从目标元素开始，从下向上收集父级具有相同事件的元素节点，放入一个数组内，直到document")]),t._v(" "),s("li",[t._v("反向遍历数组，收集数组内具有捕获属性的节点事件，放入数组a，模拟原生DOM的捕获阶段")]),t._v(" "),s("li",[t._v("正向遍历数组，收集数组内具有冒泡属性的节点事件，放入数组b，模拟原生DOM的冒泡阶段")]),t._v(" "),s("li",[t._v("按照 捕获 -> 目标 -> 冒泡 来执行 a -> b")])])])}),[],!1,null,null,null);a.default=e.exports}}]);