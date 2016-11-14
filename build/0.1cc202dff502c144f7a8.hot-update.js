webpackHotUpdate(0,{

/***/ 103:
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
	var BuildLiChildComponents = __webpack_require__(131);

	var BuildLiComponents = React.createClass({
	  displayName: 'BuildLiComponents',

	  render: function render() {
	    return React.createElement('li', { className: 'tl-item', id: this.props.team.teamCode }, React.createElement('div', { className: 'tl-wrap' }, React.createElement('span', { className: 'tl-date', 'data-toggle': 'tooltip',
	      'data-placement': 'top', title: 'Tooltip on top' }, this.props.team.teamCode), React.createElement('div', { className: 'tl-content tl-dragHolder' })));
	  }
	});

	module.exports = BuildLiComponents;

/***/ }

})