webpackHotUpdate(0,{

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _axios = __webpack_require__(104);

	var _axios2 = _interopRequireDefault(_axios);

	var React = __webpack_require__(2);

	var URL = __webpack_require__(129);
	var Ajax = __webpack_require__(272);

	var TeamList = React.createClass({
	  displayName: 'TeamList',

	  getInitialState: function getInitialState() {
	    return {
	      teamList: []
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    var a = _axios2['default'].get(URL.getAllTeams);
	    a.then(function (res) {
	      var posts = res.data;
	      console.log(posts);
	      _this.setState({
	        teamList: posts
	      });
	    });
	  },

	  render: function render() {
	    return React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' }, bindTeams));
	  }
	});

	module.exports = TeamList;

/***/ }

})