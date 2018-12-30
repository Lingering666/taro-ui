(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"257":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),l=n(59),i=_interopRequireDefault(n(60)),u=_interopRequireDefault(n(64)),c=_interopRequireDefault(n(61));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(258);var s=function defaultFunc(){},f=function(e){function AtTextarea(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTextarea),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTextarea.__proto__||Object.getPrototypeOf(AtTextarea)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTextarea,c.default),o(AtTextarea,[{"key":"handleInput","value":function handleInput(){var e;(e=this.props).onChange.apply(e,arguments)}},{"key":"handleFocus","value":function handleFocus(){var e;(e=this.props).onFocus.apply(e,arguments)}},{"key":"handleBlur","value":function handleBlur(){var e;(e=this.props).onBlur.apply(e,arguments)}},{"key":"handleConfirm","value":function handleConfirm(){var e;(e=this.props).onConfirm.apply(e,arguments)}},{"key":"handleLinechange","value":function handleLinechange(){var e;(e=this.props).onLinechange.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.customStyle,n=e.className,o=e.value,i=e.cursorSpacing,c=e.placeholder,s=e.placeholderStyle,f=e.placeholderClass,p=e.maxlength,d=e.count,h=e.disabled,m=e.autoFocus,y=e.focus,b=e.showConfirmBar,_=e.selectionStart,v=e.selectionEnd,g=e.fixed,w=e.textOverflowForbidden,C=e.height,O=p;w||(O+=500);var x=C?"height:"+r.default.pxTransform(C):"";return a.default.createElement(l.View,{"className":(0,u.default)("at-textarea",n),"style":t},a.default.createElement(l.Textarea,{"style":x,"placeholderStyle":s,"placeholderClass":(0,u.default)("placeholder",f),"cursorSpacing":i,"className":"at-textarea__textarea","value":o,"confirmType":"完成","maxlength":O,"placeholder":c,"disabled":h,"autoFocus":m,"focus":y,"showConfirmBar":b,"selectionStart":_,"selectionEnd":v,"fixed":g,"onInput":this.handleInput.bind(this),"onFocus":this.handleFocus.bind(this),"onBlur":this.handleBlur.bind(this),"onConfirm":this.handleConfirm.bind(this),"onLinechange":this.handleLinechange.bind(this)}),d?a.default.createElement(l.View,{"className":(0,u.default)({"at-textarea__bottom":!0,"at-textarea--error":p<o.length})},o.length,"/",p):null)}}]),AtTextarea}();f.defaultProps={"isTest":!1,"customStyle":"","className":"","value":"","cursorSpacing":100,"maxlength":200,"placeholder":"","disabled":!1,"autoFocus":!1,"focus":!1,"showConfirmBar":!1,"selectionStart":-1,"selectionEnd":-1,"count":!0,"fixed":!1,"height":"","textOverflowForbidden":!0,"onLinechange":s,"onChange":s,"onFocus":s,"onBlur":s,"onConfirm":s},f.propTypes={"customStyle":i.default.oneOfType([i.default.object,i.default.string]),"className":i.default.oneOfType([i.default.array,i.default.string]),"value":i.default.string.isRequired,"cursorSpacing":i.default.number,"maxlength":i.default.oneOfType([i.default.string,i.default.number]),"placeholderClass":i.default.string,"placeholderStyle":i.default.string,"placeholder":i.default.string,"disabled":i.default.bool,"autoFocus":i.default.bool,"focus":i.default.bool,"showConfirmBar":i.default.bool,"selectionStart":i.default.number,"selectionEnd":i.default.number,"count":i.default.bool,"textOverflowForbidden":i.default.bool,"fixed":i.default.bool,"height":i.default.string,"onLinechange":i.default.func,"onChange":i.default.func.isRequired,"onFocus":i.default.func,"onBlur":i.default.func,"onConfirm":i.default.func},t.default=f},"258":function(e,t,n){},"259":function(e,t,n){},"49":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),l=n(59),i=_interopRequireDefault(n(257)),u=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(259);var c=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"value1":"","value2":"","value3":"","value4":""},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,r.default.Component),o(Index,[{"key":"handleChange","value":function handleChange(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t.target.value))}},{"key":"render","value":function render(){return a.default.createElement(l.View,{"className":"page"},a.default.createElement(u.default,{"title":"Textarea 多行文本框"}),a.default.createElement(l.View,{"className":"doc-body"},a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"基础"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(l.View,{"className":"example-item"},a.default.createElement(i.default,{"value":this.state.value1,"onChange":this.handleChange.bind(this,"value1"),"maxLength":200,"placeholder":"你的问题是..."})))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"不显示字数"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(l.View,{"className":"example-item"},a.default.createElement(i.default,{"count":!1,"value":this.state.value2,"onChange":this.handleChange.bind(this,"value2"),"maxLength":200,"placeholder":"你的问题是..."})))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"文字超出仍可输入"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(l.View,{"className":"example-item"},a.default.createElement(i.default,{"textOverflowForbidden":!1,"value":this.state.value3,"onChange":this.handleChange.bind(this,"value3"),"maxLength":200,"placeholder":"你的问题是..."})))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"自定义高度"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(l.View,{"className":"example-item"},a.default.createElement(i.default,{"height":"300","value":this.state.value4,"onChange":this.handleChange.bind(this,"value4"),"maxLength":200,"placeholder":"你的问题是..."}))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Index}();t.default=c},"59":function(e,t,n){e.exports=n(0)(18)},"60":function(e,t,n){e.exports=n(65)()},"61":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(1);_interopRequireDefault(a),_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":r(e))){var t="";return Object.keys(e).forEach(function(n){var o=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=o+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},i=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,a.Component),o(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":r(e))&&t&&"object"===(void 0===t?"undefined":r(t))?Object.assign({},e,t):l(e)+l(t)}}]),AtComponent}();i.options={"addGlobalClass":!0},t.default=i},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),a=(_interopRequireDefault(r),_interopRequireDefault(n(2))),l=_interopRequireDefault(n(60)),i=n(59);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(63);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(i.View,{"className":"doc-header"},a.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":l.default.string}},"63":function(e,t,n){},"64":function(e,t,n){e.exports=n(0)(19)},"65":function(e,t,n){"use strict";var o=n(66);function emptyFunction(){}e.exports=function(){function shim(e,t,n,r,a,l){if(l!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"66":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);