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

	var App = __webpack_require__(101);
	var Dashboard = __webpack_require__(102);
	var Login = __webpack_require__(507);

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

	module.exports = React.createElement(Router, { history: history }, React.createElement(Route, { component: App }, React.createElement(Redirect, { from: '/dashboard', to: '/dashboard' }), React.createElement(Route, { path: 'dashboard', component: Dashboard }), React.createElement(Route, { path: '*', component: NotFound })));

/***/ }

})