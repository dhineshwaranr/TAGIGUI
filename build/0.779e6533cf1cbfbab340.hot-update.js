webpackHotUpdate(0,{

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _axios = __webpack_require__(104);

	var _axios2 = _interopRequireDefault(_axios);

	var React = __webpack_require__(2);

	var URL = __webpack_require__(129);
	var Ajax = __webpack_require__(130);

	var ProjectComponent = React.createClass({
	  displayName: 'ProjectComponent',

	  componentDidMount: function componentDidMount() {
	    console.log(this.props.params.roadshowId);
	    console.log(this.props.params.teamId);
	  },
	  render: function render() {
	    return React.createElement('div', null, 'Project Window');
	  }
	});

	module.exports = ProjectComponent;

/***/ }

})