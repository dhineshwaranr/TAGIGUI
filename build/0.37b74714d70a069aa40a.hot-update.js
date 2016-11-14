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
	var ProjectComponent = __webpack_require__(274);
	var NotFound = __webpack_require__(133);

	module.exports = React.createElement(Router, { history: history }, React.createElement(Route, { component: App }, React.createElement(Redirect, { from: '/', to: '/dashboard/list' }), React.createElement(Route, { path: 'dashboard', component: Dashboard }, React.createElement(Route, { path: 'list', component: DashboardMainSection }), React.createElement(Route, { path: 'project/:teamId/:roadshowId', component: ProjectComponent })), React.createElement(Route, { path: '*', component: NotFound })));

/***/ },

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
	var BuildLiChildComponents = __webpack_require__(132);

	var ProjectComponent = React.createClass({
	  displayName: 'ProjectComponent',

	  render: function render() {
	    var bindComponents = this.props.projects.map(function (project, i) {
	      if (project.length > 0) {
	        return React.createElement(BuildLiChildComponents, { key: i, data: project,
	          className: 'rs-tl-box waves-effect waves-light disabled' });
	      } else {
	        return React.createElement(BuildLiChildComponents, { key: i, data: project,
	          className: 'rs-tl-box waves-effect waves-light' });
	      }
	    });
	    return React.createElement('li', { className: 'tl-item', id: this.props.team.teamCode, 'data-id': this.props.teamId }, React.createElement('div', { className: 'tl-wrap' }, React.createElement('span', { className: 'tl-date', 'data-toggle': 'tooltip',
	      'data-placement': 'top', title: 'Tooltip on top' }, this.props.team.teamCode), React.createElement('div', { className: 'tl-content tl-dragHolder' }, bindComponents)));
	  }
	});

	module.exports = ProjectComponent;

/***/ }

})