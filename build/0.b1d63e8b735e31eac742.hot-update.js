webpackHotUpdate(0,{

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var routerModule = __webpack_require__(37);
	var Link = routerModule.Link;

	var Navbar = React.createClass({
	  displayName: 'Navbar',

	  render: function render() {
	    return React.createElement('div', { className: 'col-sm-3 col-md-2 sidebar' }, React.createElement('div', { className: 'menuSection' }, React.createElement('div', { className: 'logo' }, React.createElement('img', { src: 'assets/img/logo.png' }), React.createElement('span', { className: 'icon-bar' }), React.createElement('span', { className: 'icon-bar' }), React.createElement('span', { className: 'icon-bar' })), React.createElement('ul', { className: 'nav nav-sidebar' }, React.createElement('li', null, React.createElement(Link, { to: '/dashboard/teams' }, 'Teams')), React.createElement('li', null, React.createElement(Link, { to: '/dashboard/projects' }, 'Expenses')))));
	  }
	});

	module.exports = Navbar;

/***/ }

})