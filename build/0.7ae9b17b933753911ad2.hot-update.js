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

	var ProjectList = React.createClass({
	  displayName: 'ProjectList',

	  getInitialState: function getInitialState() {
	    return {
	      projectList: []
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    var a = _axios2['default'].get(URL.gtAllProjects);
	    a.then(function (res) {
	      var posts = res.data;
	      _this.setState({
	        teamList: posts
	      });
	    });
	  },

	  render: function render() {
	    var bindTeams = this.state.teamList.map(function (team, i) {
	      return React.createElement('div', { key: i }, team.teamCode, ' / ', team.teamName);
	    });
	    return React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' }, bindTeams));
	  }
	});

	module.exports = ProjectList;

/***/ }

})