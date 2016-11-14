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
	var ListTeams = __webpack_require__(245);
	var NotFound = __webpack_require__(104);

	module.exports = React.createElement(Router, { history: history }, React.createElement(Route, { component: App }, React.createElement(Redirect, { from: '/', to: '/dashboard' }), React.createElement(Route, { path: 'dashboard', component: Dashboard }, React.createElement(Route, { path: 'teams', component: ListTeams }), React.createElement(Route, { path: 'projects/:teamId', component: Roadshow })), React.createElement(Route, { path: '*', component: NotFound })));

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);

	var TeamList = React.createClass({
	  displayName: "TeamList",

	  render: function render() {
	    return React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" }, this.props.children));
	  }
	});

	module.exports = TeamList;

/***/ }

})