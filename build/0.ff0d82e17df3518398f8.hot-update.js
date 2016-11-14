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
	var Authentication = __webpack_require__(100);

	var App = __webpack_require__(101);
	var Dashboard = __webpack_require__(102);
	var Roadshow = __webpack_require__(487);
	var Expenses = __webpack_require__(504);
	var Users = __webpack_require__(505);
	var Login = __webpack_require__(507);
	var ListRoadshows = __webpack_require__(516);
	var ForgotPassword = __webpack_require__(519);
	var ResetPassword = __webpack_require__(520);

	var Register = __webpack_require__(521);
	var NotFound = __webpack_require__(522);

	/*function requireAuth(nextState, replace) {
	  if (!Authentication.loggedIn()) {
	    replace({
	      pathname: '/login',
	      state: { nextPathname: nextState.location.pathname }
	    })
	  }
	}
	//onEnter={requireAuth}

	history.listen(function(ev) {
	  if(!(!!localStorage.getItem('roadshow_token'))) {
	  }
	  //console.log('listen', ev.pathname);
	});*/

	module.exports = React.createElement(Router, { history: history }, React.createElement(Route, { component: App }, React.createElement(Redirect, { from: '/dashboard', to: '/dashboard/list' }), React.createElement(Redirect, { from: '/dashboard', to: '/dashboard/list' }), React.createElement(Route, { path: 'login', component: Login }), React.createElement(Route, { path: 'register', component: Register }), React.createElement(Route, { path: 'forgot-password', component: ForgotPassword }), React.createElement(Route, { path: 'reset-password/:userId', component: ResetPassword }), React.createElement(Route, { path: 'login', component: Login }), React.createElement(Route, { path: 'dashboard', component: Dashboard }, React.createElement(Route, { path: 'list', component: ListRoadshows }), React.createElement(Route, { path: 'roadshow/:roadshowId', component: Roadshow }), React.createElement(Route, { path: 'expenses', component: Expenses }), React.createElement(Route, { path: 'users', component: Users })), React.createElement(Route, { path: '*', component: NotFound })));

/***/ }

})