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

	var App = __webpack_require__(100);
	var Dashboard = __webpack_require__(101);
	var DashboardMainSection = __webpack_require__(273);
	var NotFound = __webpack_require__(132);

	module.exports = React.createElement(Router, { history: history }, React.createElement(Route, { component: App }, React.createElement(Redirect, { from: '/', to: '/dashboard/list' }), React.createElement(Route, { path: 'dashboard', component: Dashboard }, React.createElement(Route, { path: 'list', component: DashboardMainSection })), React.createElement(Route, { path: '*', component: NotFound })));

/***/ },

/***/ 273:
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
	var BuildLiComponents = __webpack_require__(103);

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
	        return React.createElement('div', { className: 'main-section' }, React.createElement('div', null, React.createElement('div', { className: 'tl-wrap' }, React.createElement(BuildULComponent, { data: this.state.teamList }))));
	    }
	});

	var BuildULComponent = React.createClass({
	    displayName: 'BuildULComponent',

	    render: function render() {
	        var bindLiComponents = this.props.data.map(function (teams, i) {
	            return React.createElement(BuildLiComponents, {
	                key: i,
	                team: teams.date });
	        });
	        return React.createElement('ul', { className: 'timeline showview', id: 'multi' }, bindLiComponents);
	    }
	});

	module.exports = DashboardMain;

/***/ }

})