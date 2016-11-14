webpackHotUpdate(0,{

/***/ 102:
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
	    return React.createElement('div', null, React.createElement('input', { type: 'text', name: 'greetingText', id: 'greetingText', onKeyDown: this.greetingName }), React.createElement('div', null, 'Hello ', this.state.name, ' im React'));
	  }
	});

	module.exports = Navbar;

/***/ }

})