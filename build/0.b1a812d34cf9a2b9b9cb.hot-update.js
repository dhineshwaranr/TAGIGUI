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
	var Ajax = __webpack_require__(130);

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
	      var data = res.data;
	      _this.setState({
	        teamList: data
	      });
	    });
	  },

	  render: function render() {
	    var bindTeams = this.state.teamList.map(function (team, i) {
	      return React.createElement('div', { key: i }, React.createElement('span', null, team.teamCode));
	    });
	    return React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'tl-wrap' }, bindTeams));
	  }
	});

	module.exports = TeamList;

/***/ }

})