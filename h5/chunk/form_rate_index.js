(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"263":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=_interopRequireDefault(a(1)),l=_interopRequireDefault(a(2)),o=a(59),u=_interopRequireDefault(a(60)),i=_interopRequireDefault(a(64)),c=_interopRequireDefault(a(72)),f=_interopRequireDefault(a(61));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(264);var s=function(e){function AtRate(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtRate),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtRate.__proto__||Object.getPrototypeOf(AtRate)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtRate,f.default),n(AtRate,[{"key":"handleClick","value":function handleClick(){var e;(e=this.props).onChange.apply(e,arguments)}},{"key":"render","value":function render(){for(var e=this,t=this.props,a=t.customStyle,n=t.className,u=t.value,f=t.max,s=t.size,p=t.margin,d={"marginRight":r.default.pxTransform(p)},m=[],_=Math.floor(u),h=Math.ceil(u),y=0;y<f;y++)_>y?m.push("at-rate__icon at-rate__icon--on"):h-1===y?m.push("at-rate__icon at-rate__icon--half"):m.push("at-rate__icon at-rate__icon--off");return l.default.createElement(o.View,{"className":(0,i.default)("at-rate",n),"style":a},m.map(function(t,a){return l.default.createElement(o.View,{"className":t,"key":a,"style":d,"onClick":e.handleClick.bind(e,a+1)},l.default.createElement(c.default,{"customStyle":{"fontSize":s+"px"},"value":"star-2"}),l.default.createElement(o.View,{"className":"at-rate__left"},l.default.createElement(c.default,{"customStyle":{"fontSize":s+"px"},"value":"star-2"})))}))}}]),AtRate}();s.defaultProps={"isTest":!1,"customStyle":"","className":"","size":20,"value":0,"max":5,"margin":5,"onChange":function onChange(){}},s.propTypes={"customStyle":u.default.oneOfType([u.default.object,u.default.string]),"className":u.default.oneOfType([u.default.array,u.default.string]),"size":u.default.oneOfType([u.default.string,u.default.number]),"value":u.default.number,"max":u.default.number,"margin":u.default.number,"onChange":u.default.func},t.default=s},"264":function(e,t,a){},"265":function(e,t,a){},"51":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=_interopRequireDefault(a(1)),l=_interopRequireDefault(a(2)),o=a(59),u=_interopRequireDefault(a(263)),i=_interopRequireDefault(a(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(265);var c=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"rateValue1":3,"rateValue2":3,"rateValue3":3,"rateValue4":3},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,r.default.Component),n(Index,[{"key":"handleRateChange","value":function handleRateChange(e,t){this.setState(function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{"value":a,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=a,e}({},e,t))}},{"key":"render","value":function render(){var e=this.state,t=e.rateValue1,a=e.rateValue2,n=e.rateValue3,r=e.rateValue4;return l.default.createElement(o.View,{"className":"page"},l.default.createElement(i.default,{"title":"Rate 评分"}),l.default.createElement(o.View,{"className":"doc-body"},l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"基础用法"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"example-item"},l.default.createElement(u.default,{"value":t,"onChange":this.handleRateChange.bind(this,"rateValue1")})))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"自定义尺寸"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"example-item"},l.default.createElement(u.default,{"size":"16","value":a,"onChange":this.handleRateChange.bind(this,"rateValue2")})))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"自定义评分数"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"example-item"},l.default.createElement(u.default,{"max":10,"value":n,"onChange":this.handleRateChange.bind(this,"rateValue3")})))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"自定义星星间隔"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"example-item"},l.default.createElement(u.default,{"margin":15,"value":r,"onChange":this.handleRateChange.bind(this,"rateValue4")})))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"只读"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"example-item"},l.default.createElement(o.View,null,"评分: 3.5"),l.default.createElement(o.View,null,l.default.createElement(u.default,{"value":3.5})))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Index}();t.default=c},"62":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=a(1),l=(_interopRequireDefault(r),_interopRequireDefault(a(2))),o=_interopRequireDefault(a(60)),u=a(59);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(63);var i=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return l.default.createElement(u.View,{"className":"doc-header"},l.default.createElement(u.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=i,i.defaultProps={"title":"标题"},i.propTypes={"title":o.default.string}},"63":function(e,t,a){}}]);