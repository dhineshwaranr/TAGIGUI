webpackHotUpdate(0,{

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var Navbar = __webpack_require__(102);

	var Dashboard = React.createClass({
	  displayName: 'Dashboard',

	  render: function render() {
	    return React.createElement('div', { className: 'row' }, React.createElement(Navbar, null), React.createElement(ChangePassword, null), React.createElement(Profile, null), React.createElement('div', { className: 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' }, this.props.children));
	  }
	});

	module.exports = Dashboard;

/***/ }

})