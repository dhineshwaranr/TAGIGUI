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
	var NotFound = __webpack_require__(134);

	module.exports = React.createElement(Router, { history: history }, React.createElement(Route, { component: App }, React.createElement(Redirect, { from: '/', to: '/dashboard/list' }), React.createElement(Route, { path: 'dashboard', component: Dashboard }, React.createElement(Route, { path: 'list', component: DashboardMainSection }), React.createElement(Route, { path: 'team/:teamId', component: ProjectComponent }), React.createElement(Route, { path: 'project/:teamId/:projectId', component: ProjectComponent })), React.createElement(Route, { path: '*', component: NotFound })));

/***/ }

})