(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"148":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),i=n(59),l=_interopRequireDefault(n(60)),u=_interopRequireDefault(n(64)),f=_interopRequireDefault(n(61));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(149);var c=function(e){function AtDivider(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtDivider),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtDivider.__proto__||Object.getPrototypeOf(AtDivider)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtDivider,f.default),r(AtDivider,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.customStyle,r=e.content,l=e.height,f=e.fontColor,c=e.fontSize,s=e.lineColor,d={"height":""+o.default.pxTransform(l)},p={"color":f,"font-size":""+o.default.pxTransform(c)},_={"background-color":s};return a.default.createElement(i.View,{"className":(0,u.default)("at-divider",t),"style":this.mergeStyle(d,n)},a.default.createElement(i.View,{"className":"at-divider__content","style":p},""===r?this.props.children:r),a.default.createElement(i.View,{"className":"at-divider__line","style":_}))}}]),AtDivider}();c.defaultProps={"content":"","height":112,"fontColor":"#6190E8","fontSize":32,"lineColor":"#CCC"},c.propTypes={"customStyle":l.default.oneOfType([l.default.object,l.default.string]),"className":l.default.oneOfType([l.default.array,l.default.string]),"content":l.default.string,"height":l.default.oneOfType([l.default.number,l.default.string]),"fontColor":l.default.string,"fontSize":l.default.oneOfType([l.default.number,l.default.string]),"lineColor":l.default.string},t.default=c},"149":function(e,t,n){},"150":function(e,t,n){},"21":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),i=n(59),l=_interopRequireDefault(n(148)),u=_interopRequireDefault(n(72)),f=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(150);var c=function(e){function LoadMorePage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LoadMorePage);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=LoadMorePage.__proto__||Object.getPrototypeOf(LoadMorePage)).call.apply(e,[this].concat(o))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(LoadMorePage,o.default.Component),r(LoadMorePage,[{"key":"render","value":function render(){return a.default.createElement(i.View,{"className":"page"},a.default.createElement(f.default,{"title":"Divider 分隔线"}),a.default.createElement(i.View,{"className":"doc-body"},a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"一般用法"),a.default.createElement(i.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,{"content":"分割线"}))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"自定义颜色"),a.default.createElement(i.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,{"content":"没有更多了","fontColor":"#ed3f14","lineColor":"#ed3f14"}),a.default.createElement(l.default,{"content":"没有更多了","fontColor":"#ff9900","lineColor":"#ff9900"}),a.default.createElement(l.default,{"content":"没有更多了","fontColor":"#2d8cf0","lineColor":"#2d8cf0"}))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"自定义内容"),a.default.createElement(i.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,null,a.default.createElement(u.default,{"value":"check-circle"}))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),LoadMorePage}();t.default=c},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=(_interopRequireDefault(o),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(60)),l=n(59);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(63);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(l.View,{"className":"doc-header"},a.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"63":function(e,t,n){}}]);