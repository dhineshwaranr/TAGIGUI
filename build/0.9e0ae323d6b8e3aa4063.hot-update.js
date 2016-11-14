webpackHotUpdate(0,{

/***/ 133:
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

	var ProjectComponent = React.createClass({
	  displayName: 'ProjectComponent',

	  getInitialState: function getInitialState() {
	    return {
	      teamId: 0,
	      projectId: 0
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var currentprojectId = this.props.params.projectId;
	    var currentteamId = this.props.params.teamId;
	    this.setState({
	      teamId: currentteamId,
	      projectId: currentprojectId
	    }, this.getTeamProjectData(currentteamId, currentprojectId));
	  },
	  getTeamProjectData: function getTeamProjectData(currentteamId, currentprojectId) {
	    var _this = this;

	    var url = URL.getAllTeams + currentteamId + "/" + currentprojectId;
	    var a = _axios2['default'].get(url);
	    a.then(function (res) {
	      var data = res.data;
	      _this.setState({
	        teamList: data
	      });
	    });
	  },
	  render: function render() {
	    return React.createElement('div', null, 'Project Window');
	  }
	});

	module.exports = ProjectComponent;

/***/ }

})