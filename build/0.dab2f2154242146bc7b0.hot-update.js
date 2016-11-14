webpackHotUpdate(0,{

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	//var Header = require('./common/header.js');
	var Navbar = __webpack_require__(103);

	var Dashboard = React.createClass({
	  displayName: 'Dashboard',

	  render: function render() {
	    return React.createElement('div', { className: 'row' }, React.createElement(Navbar, null), React.createElement('div', { className: 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' }, this.props.children));
	  }
	});

	module.exports = Dashboard;

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var routerModule = __webpack_require__(37);
	var Link = routerModule.Link;

	var Navbar = React.createClass({
	  displayName: 'Navbar',

	  getInitialState: function getInitialState() {
	    return {
	      greetingText: ''
	    };
	  },
	  greetingName: function greetingName() {
	    var name = $('#greetingText').val();
	    this.setState({
	      greetingText: name
	    });
	  },
	  render: function render() {
	    return React.createElement('div', null, React.createElement('input', { type: 'text', name: 'greetingText', id: 'greetingText', onKeyUp: this.greetingName }), React.createElement('div', null, 'Hello ', this.state.greetingText, ' im React'));
	  }
	});

	module.exports = Navbar;

/***/ }

})