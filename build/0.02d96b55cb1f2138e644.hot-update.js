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
	var DashboardMainSection = __webpack_require__(103);
	var ProjectComponent = __webpack_require__(133);
	var TeamComponent = __webpack_require__(275);
	var AllTeamComponent = __webpack_require__(276);
	var NotFound = __webpack_require__(134);

	module.exports = React.createElement(Router, { history: history }, React.createElement(Route, { component: App }, React.createElement(Redirect, { from: '/', to: '/dashboard/list' }), React.createElement(Route, { path: 'dashboard', component: Dashboard }, React.createElement(Route, { path: 'list', component: DashboardMainSection }), React.createElement(Route, { path: 'team/:teamId', component: TeamComponent }), React.createElement(Route, { path: 'team', component: AllTeamComponent }), React.createElement(Route, { path: 'project/:teamId/:projectId', component: ProjectComponent })), React.createElement(Route, { path: '*', component: NotFound })));

/***/ },

/***/ 276:
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

	  getInitialState: function getInitialState() {
	    return {
	      teamId: 0,
	      projectId: 0
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    /*var currentteamId = this.props.params.teamId
	    this.setState({
	      teamId : currentteamId,
	    })*/

	  },
	  getTeamProjectData: function getTeamProjectData(currentteamId, currentprojectId) {
	    var _this = this;

	    var url = URL.getBy_projects_team + currentteamId + "/" + currentprojectId;
	    var a = _axios2['default'].get(url);
	    a.then(function (res) {
	      var data = res.data;
	      _this.setState({
	        teamList: data
	      });
	    });
	  },
	  render: function render() {
	    return React.createElement('div', null, 'All Team Window');
	  }
	});

	module.exports = ProjectComponent;

/***/ }

})