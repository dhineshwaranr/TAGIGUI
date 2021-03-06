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
	    var a = _axios2['default'].get(URL.getAllTeams);
	    a.then(function (res) {
	      var posts = res.data.data.children.map(function (obj) {
	        return obj.data;
	      });
	      _this.setState({
	        teamList: posts
	      });
	    });
	  },
	  render: function render() {
	    return React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' }, React.createElement('span', null, this.state.teamList)));
	  }
	});

	module.exports = TeamList;

/***/ },

/***/ 272:
/***/ function(module, exports) {

	"use strict";

	module.exports = {

	    getCall: function getCall(_url) {
	        var token = "JWT " + localStorage.getItem('roadshow_token');
	        var result = $.ajax({
	            type: "GET",
	            url: _url,
	            headers: { 'Authorization': token },
	            contentType: 'application/json'
	        });
	        return result;
	    },

	    postCall: function postCall(_url, data) {
	        var token = "JWT " + localStorage.getItem('roadshow_token');
	        var result = $.ajax({
	            type: "POST",
	            url: _url,
	            data: JSON.stringify(data),
	            contentType: 'application/json',
	            headers: { 'Authorization': token }
	        });
	        return result;
	    },

	    putCall: function putCall(_url, data) {
	        var token = "JWT " + localStorage.getItem('roadshow_token');
	        var result = $.ajax({
	            type: "PUT",
	            url: _url,
	            data: JSON.stringify(data),
	            contentType: 'application/json',
	            headers: { 'Authorization': token }
	        });
	        return result;
	    },

	    deleteCall: function deleteCall(_url) {
	        var token = "JWT " + localStorage.getItem('roadshow_token');
	        var result = $.ajax({
	            type: "DELETE",
	            url: _url,
	            contentType: 'application/json',
	            headers: { 'Authorization': token }
	        });
	        return result;
	    },

	    login: function login(_url, data) {
	        var result = $.ajax({
	            type: "POST",
	            url: _url,
	            data: JSON.stringify(data),
	            contentType: 'application/json',
	            dataType: "json"
	        });
	        return result;
	    },

	    getToken: function getToken() {
	        return localStorage.getItem('roadshow_token');
	    },

	    logout: function logout() {
	        localStorage.removeItem('roadshow_token');
	        localStorage.removeItem('/g60up_$1');
	    },

	    loggedIn: function loggedIn() {
	        return !!localStorage.getItem('roadshow_token');
	    },

	    isAuthorisedToAdd: function isAuthorisedToAdd() {
	        var user = JSON.parse(localStorage.getItem('/g60up_$1'));
	        var style;
	        if (!user.user_group.includes(1)) {
	            style = {
	                visibility: 'hidden', display: 'none'
	            };
	        }
	        return style;
	    },

	    closeModal: function closeModal(id) {
	        $('#' + id).on('hidden.bs.modal', function () {
	            $(this).find("input,textarea,select").val('').end();
	        });
	    }
	};

/***/ }

})