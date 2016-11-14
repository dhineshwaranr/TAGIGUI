webpackHotUpdate(0,{

/***/ 132:
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

	var BuildLiChildComponents = React.createClass({
	    displayName: 'BuildLiChildComponents',

	    getInitialState: function getInitialState() {
	        return {
	            projectList: []
	        };
	    },
	    componentDidMount: function componentDidMount() {},

	    _buildLinkHref: function _buildLinkHref(id) {
	        return '#/dashboard/project/' + id;
	    },
	    _builddataid: function _builddataid(id) {
	        return 'project-' + id;
	    },
	    getTeamId: function getTeamId(e) {
	        console.log(e.currentTarget.data - id);
	    },

	    render: function render() {
	        return React.createElement('a', { href: this._buildLinkHref(this.props.data.projectId), 'data-id': this._builddataid(this.props.data.projectId), onClick: this.getTeamId, className: true }, React.createElement('div', { className: this.props.className }, React.createElement('p', null, this.props.data.projectCode, React.createElement('span', { className: 'projectNameSpan' }, this.props.data.projectName))));
	    }
	});

	module.exports = BuildLiChildComponents;

/***/ }

})