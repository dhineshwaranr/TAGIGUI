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
	var BuildLiComponents = __webpack_require__(131);

	var DashboardMain = React.createClass({
	    displayName: 'DashboardMain',

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
	        return React.createElement('div', { className: 'main-section' }, React.createElement('div', null, React.createElement(BuildULComponent, { data: this.state.teamList })));
	    }
	});

	var BuildULComponent = React.createClass({
	    displayName: 'BuildULComponent',

	    render: function render() {
	        var bindLiComponents = this.props.data.map(function (teams, i) {
	            var teamDataId = "team-" + team.teamId;
	            return React.createElement(BuildLiComponents, {
	                key: i,
	                team: teams,
	                projects: teams.projects });
	        });
	        return React.createElement('ul', { className: 'timeline showview', id: 'multi' }, bindLiComponents);
	    }
	});

	module.exports = DashboardMain;

/***/ }

})