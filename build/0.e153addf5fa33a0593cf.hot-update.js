webpackHotUpdate(0,{

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var routerModule = __webpack_require__(37);
	var history = routerModule.hashHistory;

	var Router = routerModule.Router;
	var Route = routerModule.Route;
	var Redirect = routerModule.Redirect;

	// load all components

	var App = __webpack_require__(100);
	var Dashboard = __webpack_require__(101);
	var ListTeams = __webpack_require__(273);
	var NotFound = __webpack_require__(132);

	module.exports = React.createElement(Router, { history: history }, React.createElement(Route, { component: App }, React.createElement(Redirect, { from: '/', to: '/dashboard/' }), React.createElement(Route, { path: 'dashboard', component: Dashboard }, React.createElement(Route, { path: 'teams', component: ListTeams })), React.createElement(Route, { path: '*', component: NotFound })));

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var routerModule = __webpack_require__(37);
	var Link = routerModule.Link;

	var Navbar = React.createClass({
	  displayName: 'Navbar',

	  render: function render() {
	    return React.createElement('div', { className: 'col-sm-3 col-md-2 sidebar' }, React.createElement('div', { className: 'menuSection' }, React.createElement('div', { className: 'logo' }, React.createElement('span', { className: 'icon-bar' }), React.createElement('span', { className: 'icon-bar' }), React.createElement('span', { className: 'icon-bar' })), React.createElement('ul', { className: 'nav nav-sidebar' }, React.createElement('li', null, React.createElement(Link, { to: '/dashboard/' }, 'Dashboard')))));
	  }
	});

	module.exports = Navbar;

/***/ },

/***/ 273:
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

	var TeamList = React.createClass({
	  displayName: 'TeamList',

	  getInitialState: function getInitialState() {
	    return {
	      teamList: []
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    var a = _axios2['default'].get(URL.getAllTeams);
	    a.then(function (res) {
	      var data = res.data;
	      _this.setState({
	        teamList: data
	      });
	    });
	  },

	  render: function render() {
	    var bindTeams = this.state.teamList.map(function (team, i) {
	      return React.createElement('div', { key: i }, React.createElement('span', null, team.teamCode), React.createElement('span', null, team.teamName));
	    });
	    return React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'tl-wrap' }, bindTeams));
	  }
	});

	module.exports = TeamList;

/***/ }

})