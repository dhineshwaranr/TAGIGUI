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

	var BuildLiChildComponents = React.createClass({
	    displayName: 'BuildLiChildComponents',

	    getInitialState: function getInitialState() {
	        return {
	            projectList: []
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        var _this = this;

	        var a = _axios2['default'].get(URL.gtAllProjects);
	        a.then(function (res) {
	            var data = res.data;
	            _this.setState({
	                projectList: data
	            });
	        });
	    },

	    render: function render() {
	        return React.createElement('a', { href: '', className: true }, React.createElement('div', { className: this.props.className }, React.createElement('span', null, this.props.data.projectCode), React.createElement('span', null, this.props.data.projectCode)));
	    }
	});

	module.exports = BuildLiChildComponents;

/***/ }

})