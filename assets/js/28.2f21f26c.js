(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{385:function(t,a,e){"use strict";e.r(a);var r=e(44),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"原生dom事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原生dom事件"}},[t._v("#")]),t._v(" 原生DOM事件")]),t._v(" "),e("p",[e("strong",[t._v("事件捕获")]),t._v(" -> "),e("strong",[t._v("目标事件")]),t._v(" -> "),e("strong",[t._v("事件冒泡")]),t._v(" "),e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/78/7B/Ciqc1F_KCc2AH3SuAADAfZ2rEXk066.png",alt:"原生事件"}}),t._v("\n当事件被触发时，首先会从事件源的最外层开始，一步一步的向下寻找，直到找到目标元素，目标元素执行事件，此时事件将被反弹回去，直到dom最外层，这一过程称之为冒泡")]),t._v(" "),e("h4",{attrs:{id:"dom事件流的优化方法-事件委托-事件冒泡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom事件流的优化方法-事件委托-事件冒泡"}},[t._v("#")]),t._v(" DOM事件流的优化方法 ---- 事件委托（事件冒泡）")]),t._v(" "),e("p",[t._v("事件委托：将原本该赋予子节点的事件方法，赋予父节点，在点击子节点时，通过事件的冒泡机制，触发父节点的事件方法，减少内存开销，优化事件注册的复杂性")]),t._v(" "),e("h4",{attrs:{id:"取消事件冒泡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消事件冒泡"}},[t._v("#")]),t._v(" 取消事件冒泡")]),t._v(" "),e("ul",[e("li",[t._v("e.stopPropagation() (w3c)")])]),t._v(" "),e("h4",{attrs:{id:"取消默认事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消默认事件"}},[t._v("#")]),t._v(" 取消默认事件")]),t._v(" "),e("ul",[e("li",[t._v("e.preventDefault()")])]),t._v(" "),e("h4",{attrs:{id:"事件监听-target-addeventlistener-type-callback-option-true"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件监听-target-addeventlistener-type-callback-option-true"}},[t._v("#")]),t._v(" 事件监听 target.addeventListener(type, callback, option = true)")]),t._v(" "),e("ul",[e("li",[t._v("type: 监听的事件类型 click,scroll,mousemove")]),t._v(" "),e("li",[t._v("callback: 事件触发时执行的回调")]),t._v(" "),e("li",[t._v("option：选择事件类型，默认false 事件在冒泡阶段触发， 设置为true时，事件将会在捕获阶段触发")])])])}),[],!1,null,null,null);a.default=s.exports}}]);