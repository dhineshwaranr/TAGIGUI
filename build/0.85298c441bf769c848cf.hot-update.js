webpackHotUpdate(0,{

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var URL = __webpack_require__(105);
	var MyInput = __webpack_require__(508);
	var Form = __webpack_require__(509).Form;
	var Ajax = __webpack_require__(100);
	var Router = __webpack_require__(37);
	var browserHistory = Router.browserHistory;

	//https://github.com/reactjs/react-router/tree/master/examples/auth-flow
	//http://stackoverflow.com/questions/33794230/how-to-use-react-routers-redirect-function

	var Login = React.createClass({
	    displayName: 'Login',

	    contextTypes: {
	        router: React.PropTypes.object.isRequired
	    },
	    getInitialState: function getInitialState() {
	        return { canSubmit: false };
	    },
	    submit: function submit(data) {
	        var _router = this.context.router;
	        /*var _user = {"username": "admin", "password": "admin12345"}
	        var login = Ajax.login(URL.login, data);
	        login.done(function(obj) {
	           localStorage.setItem("roadshow_token",obj.token);
	           localStorage.setItem("/g60up_$1",JSON.stringify(obj));
	           _router.push('/dashboard');
	           //window.location.hash = "#/dashboard/list"
	         }).fail(function(obj) {
	           if(obj.status == 400)
	               window.Materialize.toast('Invalid Username/Password', 4000);
	         })*/
	        _router.push('/dashboard');
	    },
	    enableButton: function enableButton() {
	        this.setState({ canSubmit: true });
	    },
	    disableButton: function disableButton() {
	        this.setState({ canSubmit: false });
	    },
	    render: function render() {
	        return React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'wrapperDiv bg-dark' }, React.createElement('section', { id: 'content', className: 'p-t-lg wrapper-md animated fadeInUp login-box' }, React.createElement('div', { className: 'container aside-xxl' }, ' ', React.createElement('a', { className: 'navbar-brand block', href: 'index.html' }, 'RoadShow'), React.createElement('section', { className: 'panel panel-default bg-white m-t-lg' }, React.createElement('header', { className: 'panel-heading text-center' }, ' ', React.createElement('strong', null, 'Sign in'), ' '), React.createElement(Form, { className: 'panel-body wrapper-lg',
	            onSubmit: this.submit,
	            onValid: this.enableButton,
	            onInvalid: this.disableButton }, React.createElement('div', { className: 'input-field' }, React.createElement(MyInput, { value: '',
	            name: 'username',
	            title: 'Email Address',
	            id: 'username',
	            type: 'email',
	            validations: 'isEmail',
	            validationError: 'This is not a valid email',
	            required: true,
	            className: 'md-input' })), React.createElement('div', { className: 'input-field' }, React.createElement(MyInput, { value: '',
	            name: 'password',
	            title: 'Password',
	            id: 'pasword',
	            type: 'password',
	            validationError: 'Password Required',
	            required: true,
	            className: 'md-input' })), React.createElement('a', { href: '#/forgot-password',
	            className: 'pull-right m-t-xs' }, React.createElement('small', null, 'Forgot password?')), React.createElement('button', { type: 'submit',
	            className: 'btn btn-primary',
	            disabled: !this.state.canSubmit }, 'Sign in'), React.createElement('div', { className: 'line line-dashed' }))))), React.createElement('footer', { id: 'footer' }, React.createElement('div', { className: 'text-center padder' }, React.createElement('p', null, 'Road show © 2016')))));
	    }
	});

	module.exports = Login;

/***/ }

})