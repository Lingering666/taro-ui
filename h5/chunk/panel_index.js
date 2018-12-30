(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"120":function(e,A,a){},"59":function(e,A,a){e.exports=a(0)(18)},"8":function(e,A,a){"use strict";Object.defineProperty(A,"__esModule",{"value":!0}),A.default=void 0;var t=function(){function defineProperties(e,A){for(var a=0;a<A.length;a++){var t=A[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,A,a){return A&&defineProperties(e.prototype,A),a&&defineProperties(e,a),e}}(),n=a(1),i=_interopRequireDefault(n),o=_interopRequireDefault(a(2)),r=a(59),d=_interopRequireDefault(a(89)),c=_interopRequireDefault(a(90)),m=_interopRequireDefault(a(91)),u=_interopRequireDefault(a(92)),l=_interopRequireDefault(a(93)),s=_interopRequireDefault(a(94)),g=_interopRequireDefault(a(95));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(120);var B=function(e){function PanelBasic(){!function _classCallCheck(e,A){if(!(e instanceof A))throw new TypeError("Cannot call a class as a function")}(this,PanelBasic);var e=function _possibleConstructorReturn(e,A){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!A||"object"!=typeof A&&"function"!=typeof A?e:A}(this,(PanelBasic.__proto__||Object.getPrototypeOf(PanelBasic)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.gotoComponent=function(e){var A=e.currentTarget.dataset,a=A.id,t=A.parent;i.default.navigateTo({"url":"/pages/"+t.toLowerCase()+"/"+a.toLowerCase()+"/index"})},e.state={"panelNames":{"basic":{"name":"基础","icon":d.default},"view":{"name":"视图","icon":c.default},"action":{"name":"操作反馈","icon":m.default},"form":{"name":"表单","icon":u.default},"layout":{"name":"布局","icon":l.default},"navigation":{"name":"导航","icon":s.default},"advanced":{"name":"高阶组件","icon":g.default}},"list":{"basic":[{"id":"Color","name":"颜色"},{"id":"Icon","name":"图标"},{"id":"Typo","name":"字体"},{"id":"Button","name":"按钮"}],"view":[{"id":"Avatar","name":"头像"},{"id":"Article","name":"文章"},{"id":"Badge","name":"徽标"},{"id":"Countdown","name":"倒计时"},{"id":"Curtain","name":"幕帘"},{"id":"Divider","name":"分割线"},{"id":"NoticeBar","name":"通告栏"},{"id":"Tag","name":"标签"},{"id":"Timeline","name":"时间轴"},{"id":"Swiper","name":"滑块视图容器"},{"id":"Load-More","name":"页面提示"},{"id":"Steps","name":"步骤条"}],"action":[{"id":"Action-Sheet","name":"动作面板"},{"id":"Activity-Indicator","name":"活动指示器"},{"id":"Modal","name":"模态框"},{"id":"Progress","name":"进度条"},{"id":"Toast","name":"轻提示"},{"id":"Swipe-Action","name":"滑动操作"},{"id":"Message","name":"消息通知"}],"form":[{"id":"Input","name":"输入框"},{"id":"Radio","name":"单选框"},{"id":"Checkbox","name":"复选框"},{"id":"Switch","name":"开关"},{"id":"Rate","name":"评分"},{"id":"Input-Number","name":"数字输入框"},{"id":"Textarea","name":"多行文本框"},{"id":"Picker","name":"选择器"},{"id":"Picker-View","name":"滚动选择器"},{"id":"Slider","name":"滑动条"},{"id":"Search-Bar","name":"搜索栏"},{"id":"Image-Picker","name":"图片选择器"},{"id":"Range","name":"范围选择器"}],"layout":[{"id":"Flex","name":"弹性布局"},{"id":"Grid","name":"栅格"},{"id":"List","name":"列表"},{"id":"Card","name":"卡片"},{"id":"Float-Layout","name":"浮动弹层"},{"id":"Accordion","name":"手风琴"}],"navigation":[{"id":"NavBar","name":"导航栏"},{"id":"TabBar","name":"标签栏"},{"id":"Tabs","name":"标签页"},{"id":"Segmented-Control","name":"分段器"},{"id":"Pagination","name":"分页器"},{"id":"Drawer","name":"抽屉"},{"id":"Indexes","name":"索引选择器"}],"advanced":[{"id":"Calendar","name":"日历"}]}},e}return function _inherits(e,A){if("function"!=typeof A&&null!==A)throw new TypeError("Super expression must either be null or a function, not "+typeof A);e.prototype=Object.create(A&&A.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),A&&(Object.setPrototypeOf?Object.setPrototypeOf(e,A):e.__proto__=A)}(PanelBasic,n.Component),t(PanelBasic,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.$router.params.id;this.setState({"currentId":e.toLowerCase()||""})}},{"key":"render","value":function render(){var e=this,A=this.state,a=A.list,t=A.currentId,n=A.panelNames,i=a[t]||[],d=n[t]&&n[t].name||"",c=n[t]&&n[t].icon||"";return o.default.createElement(r.View,{"className":"page"},o.default.createElement(r.View,{"className":"panel-header"},o.default.createElement(r.View,{"className":"panel-header__icon"},c?o.default.createElement(r.Image,{"src":c,"className":"img","mode":"widthFix"}):o.default.createElement(r.Text,{"className":"at-icon at-icon-list"})),o.default.createElement(r.View,{"className":"panel-header__title"},d)),o.default.createElement(r.View,{"className":"panel-body"},o.default.createElement(r.View,{"className":"component-list"},i.map(function(A){return o.default.createElement(r.View,{"className":"component-list__item","key":A.id,"data-id":A.id,"data-parent":t,"onClick":e.gotoComponent},o.default.createElement(r.Text,{"className":"name"},A.id+" "+A.name),o.default.createElement(r.Text,{"className":"at-icon at-icon-chevron-right"}))}))))}},{"key":"componentDidShow","value":function componentDidShow(){}}]),PanelBasic}();A.default=B},"89":function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJ1BMVEUAAAB9p/eCntV+lcOCpeqBm85/mMmCpOWCoNqBpu6DouCAp/J4pPoCEz3vAAAADHRSTlMA/q868JFp5sf22Pq3icc7AAABfElEQVRYw+yVu0oDQRiFfyPeooVoUIQtIpZaqFgo2ATBKoUPYKGlYKG9hWBrofgCPoCF+ATGW0T+h3L2ZIezAzmE6XOK7JnzkX8uOztjlWY7hfdat5ZKo00f6C1JNVr3qCWjNDpw6omxRFNe14lRAp0m6TcyhViltWG7HdYRiFWOYS9YR6PJ0q3YQOdlYxtWornw/LKobmg9wEm0FZ7PFtUMrQ84iYqqCuv0YBRquPuiUROh3YYTaD78nhk1HdqvcAItoNu043cYge7df5L00v0XRqBuNU6ONNYVqHC/StKZuEwCcVGMawMjELdCbT/ACBQxFROBMv+QP6TsSWcva/aLy98ah0N22CeMQLnbO/sDwlr0jbrhJypQ7iGAjvqswmEohNNquQp3eJBphPPwCOFeclQq1PRSq21rXMPxclLoxev6M0ig/AuF84E4R43yL0XGDEej/ceQrd2lYYrGGut/1AWjrcrRVuVoq3K0VTnaqhxtVY62KkdyqxIA1YQ8GZWiH3YAAAAASUVORK5CYII="},"90":function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJFBMVEUAAACAj66Np9iJrfSFlrmLoMuNreqMpNGJncV4pPqFrPd/qfmpup8zAAAACXRSTlMALeD9d8H40q2eBq/qAAABZklEQVRYw+2YsUrDUBiFTzSi3ULdnFqc6iRubgE3p67iE6hP4CO4SUsKp12qiNAXEHw7Y8A0+bly7r+1cD9op3xQmv+cPzcATh4ZyecUNfk1o5mXtXBPBxWQf9NDiUO6WOOFLio8kLMCUWQTcoENOUIkB+QKJItYISOJ3080SdhFYdgm6apATXbe5mZsBZu8D9TcsGVZBoRTdi4ogKwb3beAMGGHUTOaW2YBodcFl+hHcR4Q2OUVGLBLWAAaBrXw992QhD0TPHfazNJSC3ZatZBtTB6UgFuTOClkF+31Y2ihTxKCrWGrUvXS2lalbj5dlWemW+Xw5Ztee+uqxLA13guIABnsn5uE8NrVgl27VpBr1wpy+Kyg164WuGWH90MSnIL7AUtWpVi7+iFRVqVdu7Iq7dqVVWnW7r4cB5Lwr+A+HrsO4MfkynXEfyYXuKOLyv+aIqeLEr7fVLVJE/SSd/TESL6mwA85jKuBGZe0fwAAAABJRU5ErkJggg=="},"91":function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJFBMVEUAAAB0n/Jgg8hwmepmi9Nrkt9df8Fjhs1uluRynO5pj9l4pPpuZQxgAAAAC3RSTlMA+mnwr9g6keb2x9K3PwMAAANHSURBVFjDlZe/b9pAFMcdfpiCl0hpu3hxVHVpFtKxLETdykK7shBVqlSxsLNk68CCOnTJgqouFYsphB/xP1ewv7znu3d3xm8Iuef73Pt557Mn5d1tcpSr395Z0gqTkyznXrHcJXl5WTh/kKjyVDy/FNFLpKwd879jztWfoed/usXol3V+I5uwizCuTDPF2B3A+5zmjTOMi/RpX9HVU92lGUgL1taUX9MC2g38E+obmDAb2Bn0U4uJC1s+ahYTAzgkZUKJEjUYYvA2PLrxBSPfaHt0UG5Qrw5KvIrEM5bHgzLK5uf2Q0TW94bItpkDB5RkNaSe7KpAcFA9IEQSWuTF4b9Y5gi9wMKdIvNEOc0cetX1ap8zp6jcWo+hi5pprN0sLm6uKmwpIXCHj7k2cMXXg+jhQSOh4BEs8IG2VUMsMEJieCGULNAa8OTrIzsEpxB2VY26hTJXyACb4CdztbXxiwg4CrQ2fjlJO0q3uUBTJU030HbYI/YJaykNuwBOdqW3AeUVK18isq6hjaMMXCllaKNBPF3QFFWlEFj5gpXKYjNkXgCBabMPsvhqOjBUAquHybKPNGWArwPIRIyOoK4jpRMY0KFdDMAATJwJBABiAViCHgB4kkHLtCL1u28dFMWW1nl2AiwxfMCWEYWTrQEP4YNsDdl8iA9/W8bm63EmYg0IjO094m21VgDeQBPeQHKLan83cos284eAAlRzh8DMfMzEChDgiboZme8YgBX7wBLyidhXXeIzdK+8WbFQJf0hILUZmQ6ggN+5CgDBcS9eKHagyTHznK0DkGfogjQCQAhrw2vXCcTyqhE7XYpowB0ugA9jaGrwSPVprgMHWf7wLOKHzzLo4puxBCg9xQDdgtpnAvd0a7JOxP3iJxJa+QgjM/v8SgI5jf8eB892YKIBuG4MXdd7ALyGK+xAAGia4g8aRWkPIjzeVe80INC2s7wFXVN1KWwbgIRc7/taJmxVMz+yAw1YkIAzBjcgs1QAyDq8LgBkpSM3IHtpXQDIbu27AWli6Qbkp1CyOR/A98O4BFDHWSQAd9ztEoCfxj08G8B5tHUD8vM26ZYAWviwFoAz7l0ZwA9LAl5TcSlEs7hkkQ/6Xt0j/wG8np5SDq4EQAAAAABJRU5ErkJggg=="},"92":function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJ1BMVEUAAAB0n/Jjhs1wmepdf8F2ofVgg8hrkt9uluRmi9Npj9lynO54pPrdM8LLAAAADHRSTlMA+pHwOv1p2Oavx/Za7Wu8AAAB/0lEQVRYw+2YsU7CUBSGKyBqZHBgZOgDODCocWCAuDqYsHZgNXHwAdicTJidHHRn8BGoWMDkfygt0py0f+75OzD6L3Tgy3d6em5ubyPLDUq5iEQaqCQWwG0V+BLAoAosBQDK3oCjxP7BfPYY6A4BwW5NFbAmgQewoqOBBVXkAFxTAiyH4ba2BkBWbX/few5NAFVg6I1GCwz4wxcAwuPdQ0qAu4BG6DKg074ExpP6QCPZDmJcG5hhm01d4AC7nNUEegWwMUAIisQGCEEaN/KfOwOEIP57tCsDfMFnfnEOLA0Qgt1VZoAWRCcADFCCPCVghEq6JQEDvSqQlgRcEigksJsOAiawtvolmYAeHN80CeRosAATF2DB2sZbC3gBaUEaESAEBCgBAUJAgBIQIAQEKAEBUsCAFvDwdX0Bj3fqC3gBISAIAyFBsKSQIHjTvoDbKgQMCIEBQkCAFhigBT5wygIfeCCBAAYkEEBCAgEAeCOBACYkcIA2ABIEANuXSOAAx0BGAg9oAksSeMAhsCGBB3SAbxIIYJU3a14IGKBRWtw/JSgE8jX0lTZeMa0zA2w/8IBBWaABeyP4qAfMi/PYVSQBOxSNn38H1gcs79cvxaUALP/AHoBhFEjo4Nf3gGYO8OE1GD68TiGzplkTWdARXySOuCZdESu0gD+EcPhDyA8E65pf+djXngAAAABJRU5ErkJggg=="},"93":function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAFVBMVEUAAABwmep0n/Jpj9pjh85vl+V4pPrMnV0iAAAABnRSTlMA5/imRtkzWYE3AAAAkUlEQVRYw+3YOwqAMBCE4bWxtvIE4hE8gIVHsI6vuf8RFExSCMJsF3H+JhDykbQbK7QWVIvFBpBt9/kKdE26wHcFHMUX+d5UX2tnRCOAcIPVqPoMdg5MGQQO1AICHwRs/wbBHr1sCggICAgICAgIFAN2DkwZrBzoM0BHgDS8+sdj8wD3iO/+RHB/U8RmUB1WZied+CXVXNCGEwAAAABJRU5ErkJggg=="},"94":function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAGFBMVEUAAABjh85NaZ90n/NScaxcfsBuluR4pPo12DsVAAAAB3RSTlMA2Sj9bbj23SUm6gAAANdJREFUWMPt1rEOAiEMBuAe6m5cbtXJ1Y2VR7jNR7hVJcDr69ZcUlr/mBiG/vsXCC1NiS6xdZJPJGTflCQBXDXwEsCsgacAogayAJoaGVAnDhxgQA3c3vAHwr/o70MAGjP2Ow4Bzig4QmD9lAo64r551bqYYKfXza56se8EHxG34EFWDqtyJyNhbq0SkgntlDBm89IX8d3AdwMHvhsMvRsMNzP/D+xHZACViYHdCAyQVmNgN7MAmhoZUCcDg4CCCQO8B9mAU1BwQ0ECQSEM5ISBuvisBmf1G+jRsaBhq2A7AAAAAElFTkSuQmCC"},"95":function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAIVBMVEUAAAC6yeifvPWuxO+rw/GOsvmaufeowfK2yOt4pPqIrvq8cth0AAAACXRSTlMALfLB0v344HeUs92fAAAA8UlEQVRYw+2XMQ6CMBSGIcboSIwXcHRzdWRkc/UIOrm6cQZFzNcDmPSWwlRD4aVv0pp+0+sLX2goeemffbJi4xZ+02fLTWr6AKPNJPyHMDsTyGvXP788Esyj7oQ9Cu7dC1BRZ3NUHPod6fZ0gmcR9lnzK7SZhUvoOSzA9OsiVMj7Ggg/6QgEeS45IXzyOUEmCVEIa8sQU0pChU8jCRYfIwmM8XVhUCQhCSphbREYESqUgtUK/KQwVSQhCRNFNL+3RcBoh0CjHDOmjOxykoRRocgCyQEXmkRcaHKxTMTFMnXwU0dLdXjVxmN1ANdF/LaL+G9UV0cKloM0+wAAAABJRU5ErkJggg=="}}]);