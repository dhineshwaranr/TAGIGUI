webpackHotUpdate(0,{

/***/ 131:
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
	var BuildLiChildComponents = __webpack_require__(132);

	var BuildLiComponents = React.createClass({
	  displayName: 'BuildLiComponents',

	  getInitialState: function getInitialState() {
	    return {
	      teamId: 0
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.setState({
	      teamId: 100
	    });
	  },
	  render: function render() {
	    var bindComponents = this.props.projects.map(function (project, i) {
	      if (project.length > 0) {
	        return React.createElement(BuildLiChildComponents, { key: i, data: project,
	          className: 'rs-tl-box waves-effect waves-light disabled', teamId: this.state.teamId });
	      } else {
	        return React.createElement(BuildLiChildComponents, { key: i, data: project,
	          className: 'rs-tl-box waves-effect waves-light' });
	      }
	    });
	    return React.createElement('li', { className: 'tl-item', id: this.props.team.teamCode, 'data-id': this.props.teamId }, React.createElement('div', { className: 'tl-wrap' }, React.createElement('span', { className: 'tl-date', 'data-toggle': 'tooltip',
	      'data-placement': 'top', title: 'Tooltip on top' }, this.props.team.teamCode), React.createElement('div', { className: 'tl-content tl-dragHolder' }, bindComponents)));
	  }
	});

	module.exports = BuildLiComponents;

/***/ }

})