webpackHotUpdate(0,Array(101).concat([
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var Navbar = __webpack_require__(102);
	var ChangePassword = __webpack_require__(103);
	var Profile = __webpack_require__(485);
	var Loader = __webpack_require__(486);

	var Dashboard = React.createClass({
	  displayName: 'Dashboard',

	  render: function render() {
	    return React.createElement('div', { className: 'row' }, React.createElement(Navbar, null), React.createElement(ChangePassword, null), React.createElement(Profile, null), React.createElement('div', { className: 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' }, this.props.children));
	  }
	});

	module.exports = Dashboard;

/***/ },
/* 102 */,
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var URL = __webpack_require__(104);
	var Ajax = __webpack_require__(105);

	var AutoComplete = __webpack_require__(106);
	var ChangePassword = React.createClass({
	  displayName: 'ChangePassword',

	  getInitialState: function getInitialState() {
	    return {
	      users: [],
	      selected_users: ['santhosh', 'root', 'admin'],
	      roadshow_data: []
	    };
	  },

	  changePassword: function changePassword() {
	    var data = $("#change-password").find("select, textarea, input").serializeObject();
	    var _data = JSON.parse(localStorage.getItem("/g60up_$1"));
	    var userId = _data.user.id;
	    var url = URL.change_passwords + userId + "/";
	    var changePasswords = Ajax.putCall(url, data);
	    changePasswords.done(function (obj) {
	      //login and change the token
	      var logindata = {
	        password: data.password1,
	        username: _data.user.email
	      };
	      var login_user = Ajax.login(URL.login, logindata);
	      login_user.done(function (obj) {

	        localStorage.setItem("roadshow_token", obj.token);
	        localStorage.setItem("/g60up_$1", JSON.stringify(obj));
	        $("#change-password-modal").modal("hide");
	        window.Materialize.toast('Password Changed', 4000);
	      });
	    }).fail(function (obj) {
	      if (obj.status == 400) window.Materialize.toast(obj.responseJSON.message, 4000);
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    $("#change-password-from").on("click", function () {
	      $("#change-password-modal").modal('show');
	    });
	    validateModal(this.changePassword);
	  },

	  render: function render() {
	    return React.createElement('div', { id: 'change-password-modal', className: 'modal right fade',
	      role: 'dialog' }, React.createElement('div', { className: 'modal-dialog' }, React.createElement('div', { className: 'modal-content' }, React.createElement('div', { className: 'modal-header' }, React.createElement('button', { type: 'button', className: 'close',
	      'data-dismiss': 'modal' }, '×'), React.createElement('h4', { className: 'modal-title' }, 'Change Password')), React.createElement('div', { className: 'modal-body add-details' }, React.createElement('div', { className: 'row' }, React.createElement('form', { id: 'change-password' }, React.createElement('div', { className: 'col-md-12' }, React.createElement('div', { className: 'input-field' }, React.createElement('input', { id: 'current_password',
	      name: 'current_password',
	      type: 'text',
	      className: 'md-input' }), React.createElement('label', { htmlFor: 'current_password' }, 'Current Password'))), React.createElement('div', { className: 'col-md-12' }, React.createElement('div', { className: 'input-field' }, React.createElement('input', { id: 'password1', name: 'password1', type: 'text', className: 'md-input' }), React.createElement('label', { htmlFor: 'password1' }, 'New Password'))), React.createElement('div', { className: 'col-md-12' }, React.createElement('div', { className: 'input-field' }, React.createElement('input', { id: 'password2', name: 'password2', type: 'text', className: 'md-input' }), React.createElement('label', { htmlFor: 'password2' }, 'Repeat Password'))), React.createElement('div', { className: 'col-md-12' }, React.createElement('div', { className: 'input-field' }, React.createElement('button', { className: 'waves-effect waves-light btn blue white-text' }, 'Save'), React.createElement('button', { className: 'waves-effect waves-dark btn transparent black-text', 'data-dismiss': 'modal' }, 'Cancel')))))))));
	  }
	});

	var validateModal = function validateModal(callback) {

	  $("#change-password").validate({
	    rules: {
	      current_password: "required",
	      password1: {
	        required: true,
	        minlength: 5
	      },
	      password2: {
	        required: true,
	        minlength: 5,
	        equalTo: "#password1"
	      }

	    },
	    messages: {
	      current_password: "Required",
	      password1: {
	        required: "Password Required",
	        minlength: "Password Must be 5 character in length"
	      },
	      password2: {
	        required: "Password Required",
	        equalTo: "Password Not Match",
	        minlength: "Password Must be 5 character in length"
	      }

	    },
	    submitHandler: function submitHandler(form) {
	      callback();
	    }
	  });
	};

	module.exports = ChangePassword;

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";

	var URL = {

	    "login": "http://192.168.7.221:8000/api/v1/api-token-auth/",
	    "get_all_roadshows": "/api/get-roadshows",
	    "get_roadshow": "http://192.168.7.221:8000/api/v1/roadshow/",
	    "get_expenses": "api/get-expenses/",
	    "get_user_info": "api/get-user-info/",
	    "save_appoinments": "http://192.168.8.3/api/v1/meeting/",
	    "create_new_roadshow": "http://192.168.7.221:8000/api/v1/roadshow/",
	    "get_users": "http://192.168.7.221:8000/api/v1/user/",
	    "get_roadshow_users": "http://192.168.7.221:8000/api/v1/get-roadshow-users/",
	    "get_user_groups": "http://192.168.7.221:8000/api/v1/groups/",
	    "save_new_user": "http://192.168.7.221:8000/api/v1/user/",
	    "save_meetings": "http://192.168.7.221:8000/api/v1/meeting/",
	    "forget_password": "http://192.168.7.221:8000/api/v1/forgot-password/",
	    "reset_password": "http://192.168.7.221:8000/api/v1/reset-password/",
	    "flight": "http://192.168.7.221:8000/api/v1/flight/",
	    "cab": "http://192.168.7.221:8000/api/v1/rental/",
	    "hotel": "http://192.168.7.221:8000/api/v1/hotel/",
	    "dinner": "http://192.168.7.221:8000/api/v1/dinner/",
	    "users": "http://192.168.7.221:8000/api/v1/userslist/?users=",
	    "change_passwords": "http://192.168.7.221:8000/api/v1/change-password/",
	    "fetch_roadshow": "http://192.168.7.221:8000/api/v1/fetch-roadshow/",
	    "can_delete_user": " http://192.168.7.221:8000/api/v1/check-user-meeting/",
	    "search_filter": "http://192.168.7.221:8000/api/v1/roadshow-search/",
	    "meeting_modes": "http://192.168.7.221:8000/api/v1/fetch-meetingmodes/",
	    "meeting_types": " http://192.168.7.221:8000/api/v1/fetch-meetingtypes/",
	    "remove_user_roadshow": " http://192.168.7.221:8000/api/v1/remove-user-meeting/",
	    "get_roadshow_details": "http://192.168.7.221:8000/api/v1/fetch-roadshow/",
	    "users_distance": " http://192.168.7.221:8000/api/v1/travel-detail/"

	};

	module.exports = URL;

/***/ },
/* 105 */
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

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactTags = __webpack_require__(107).WithContext;
	var React = __webpack_require__(2);
	var URL = __webpack_require__(104);
	var Ajax = __webpack_require__(105);
	var Storage = __webpack_require__(484);

	var AutoComplete = React.createClass({
	    displayName: 'AutoComplete',

	    getInitialState: function getInitialState() {
	        return {
	            ids: [],
	            tags: [],
	            users: [],
	            suggestions: [],
	            flag: false,
	            url: "",
	            editFlag: false
	        };
	    },
	    prependTags: function prependTags(url) {
	        var _this = this;
	        _this.setState({
	            editFlag: true
	        });
	        var user_tags = Ajax.getCall(url);
	        var temp_tags = [];
	        var temp_ids = [];
	        user_tags.done(function (result) {
	            for (var i in result) {
	                var temp = { id: "", text: "" };
	                temp.id = result[i].id;
	                temp.text = result[i].name;
	                temp_tags.push(temp);
	                temp_ids.push(temp.id);
	            }
	            _this.setState({
	                tags: temp_tags,
	                ids: temp_ids
	            });
	        });
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.tags !== this.state.url && nextProps.tags != undefined) {
	            this.prependTags(nextProps.tags);
	        }
	    },

	    componentDidMount: function componentDidMount() {
	        var _this = this;
	        var users_list = Ajax.getCall(this.props.url);
	        users_list.done(function (result) {
	            var user_list = [];
	            for (var i in result) {
	                user_list.push(result[i].username);
	            }
	            _this.setState({
	                suggestions: user_list,
	                users: result
	            });
	        });
	    },

	    handleDelete: function handleDelete(i) {

	        var tags = this.state.tags;
	        var id = this.state.tags[i].id;
	        var ids = this.state.ids;
	        var index = ids.indexOf(id);
	        var roadshow_id = Storage.getRoadshowId();
	        debugger;
	        var isEdit = this.props.isEdit;
	        if (this.state.editFlag && isEdit) {
	            var url = URL.can_delete_user + "?user_id=" + id + "&roadshow_id=" + roadshow_id;
	            var can_edit = Ajax.getCall(url);
	            can_edit.done(function (data) {
	                if (data.message) {
	                    var confirm = confirmation();
	                    if (confirm) {
	                        var url = URL.remove_user_roadshow + "?user_id=" + id + "&roadshow_id=" + roadshow_id;
	                        var remove_user = Ajax.getCall(url);
	                        remove_user.done(function (data) {
	                            if (data.message) {
	                                window.Materialize.toast('User Removed from Roadshow', 4000);
	                            }
	                        });
	                        Ajax.getCall();
	                    } else {
	                        console.log("not confirmed");
	                    }
	                }
	            });
	        } else {
	            ids.splice(index, 1);
	            tags.splice(i, 1);
	            this.setState({ tags: tags, ids: ids });
	        }
	        if (this.props.updateUsers != undefined) {
	            var callback = this.props.updateUsers;
	            callback(this.state.tags);
	        }
	    },
	    handleAddition: function handleAddition(tag) {

	        //  var filteruserscallback = this.props.filterusers;
	        var tags = this.state.tags;
	        var flag = false;
	        var temp = { id: '', text: '' };
	        for (var i in this.state.users) {
	            if (this.state.users[i].username == tag) {
	                temp.id = this.state.users[i].id;
	                temp.text = tag;
	                if (tags.length > 0) {
	                    for (var j in tags) {
	                        if (tags[j].text == tag) {
	                            flag = false;
	                            break;
	                        } else {
	                            flag = true;
	                        }
	                    }
	                } else {
	                    flag = true;
	                }
	            }
	        }
	        if (flag) {
	            this.state.ids.push(temp.id);
	            //filteruserscallback(temp)
	            tags.push(temp);
	        }
	        this.setState({ tags: tags });
	        if (this.props.updateUsers != undefined) {
	            var callback = this.props.updateUsers;
	            callback(this.state.tags);
	        }
	    },

	    handleDrag: function handleDrag(tag, currPos, newPos) {
	        var tags = this.state.tags;
	        // mutate array
	        tags.splice(currPos, 1);
	        tags.splice(newPos, 0, tag);

	        // re-render
	        this.setState({ tags: tags });
	    },
	    render: function render() {
	        var style = {
	            visibility: 'hidden'
	        };
	        var tags = this.state.tags;
	        var suggestions = this.state.suggestions;
	        var placeholder = "Type to Add users";
	        var ids = this.state.ids;

	        return React.createElement('div', null, React.createElement(ReactTags, { tags: tags,
	            classNames: {
	                tags: 'tagsClass',
	                tagInput: 'tagInputClass',
	                selected: 'selectedClass',
	                tag: 'chip',
	                remove: 'removeClass',
	                suggestions: 'suggestionsClass'
	            },
	            placeholder: placeholder,
	            tags: tags,
	            suggestions: suggestions,
	            handleDelete: this.handleDelete,
	            handleAddition: this.handleAddition,
	            handleDrag: this.handleDrag }), React.createElement('input', { type: 'text', id: 'users_id', name: 'users_id',
	            value: this.state.ids.toString(),
	            style: style }));
	    }
	});

	var DeleteModal = React.createClass({
	    displayName: 'DeleteModal',

	    getInitialState: function getInitialState() {
	        return {
	            url: ""
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        $('.modal-trigger').leanModal({
	            dismissible: true, // Modal can be dismissed by clicking outside of the modal
	            opacity: .5, // Opacity of modal background
	            in_duration: 300, // Transition in duration
	            out_duration: 200, // Transition out duration
	            starting_top: '4%', // Starting top style attribute
	            ending_top: '10%', // Ending top style attribute
	            ready: function ready() {
	                alert('Ready');
	            }, // Callback for Modal open
	            complete: function complete() {
	                alert('Closed');
	            } // Callback for Modal close
	        });
	    },

	    render: function render() {
	        return React.createElement('div', null, React.createElement('div', { id: 'modal-bottom1', className: 'modal bottom-sheet' }, React.createElement('div', { className: 'modal-content' }, React.createElement('h4', null, 'Modal Header'), React.createElement('p', null, 'A bunch of text')), React.createElement('div', { className: 'modal-footer' }, React.createElement('a', { href: '#!', className: ' modal-action modal-close waves-effect waves-green btn-flat' }, 'Agree'))));
	    }
	});

	var confirmation = function confirmation() {
	    var retVal = confirm("This user have appoinments sheduled, Do you want to continue deleting user from this roadshow event?");
	    if (retVal == true) {
	        return true;
	    } else {
	        return false;
	    }
	};

	module.exports = AutoComplete;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(108);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactDnd = __webpack_require__(248);

	var _reactDndHtml5Backend = __webpack_require__(376);

	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

	var _Suggestions = __webpack_require__(481);

	var _Suggestions2 = _interopRequireDefault(_Suggestions);

	var _Tag = __webpack_require__(482);

	var _Tag2 = _interopRequireDefault(_Tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Constants
	var Keys = {
	  ENTER: 13,
	  TAB: 9,
	  BACKSPACE: 8,
	  UP_ARROW: 38,
	  DOWN_ARROW: 40,
	  ESCAPE: 27
	};

	var DefaultClassNames = {
	  tags: 'ReactTags__tags',
	  tagInput: 'ReactTags__tagInput',
	  selected: 'ReactTags__selected',
	  tag: 'ReactTags__tag',
	  remove: 'ReactTags__remove',
	  suggestions: 'ReactTags__suggestions'
	};

	var ReactTags = _react2.default.createClass({
	  displayName: 'ReactTags',

	  propTypes: {
	    tags: _react2.default.PropTypes.array,
	    placeholder: _react2.default.PropTypes.string,
	    labelField: _react2.default.PropTypes.string,
	    suggestions: _react2.default.PropTypes.array,
	    delimiters: _react2.default.PropTypes.array,
	    autofocus: _react2.default.PropTypes.bool,
	    inline: _react2.default.PropTypes.bool,
	    handleDelete: _react2.default.PropTypes.func.isRequired,
	    handleAddition: _react2.default.PropTypes.func.isRequired,
	    handleDrag: _react2.default.PropTypes.func,
	    handleFilterSuggestions: _react2.default.PropTypes.func,
	    allowDeleteFromEmptyInput: _react2.default.PropTypes.bool,
	    handleInputChange: _react2.default.PropTypes.func,
	    handleInputBlur: _react2.default.PropTypes.func,
	    minQueryLength: _react2.default.PropTypes.number,
	    shouldRenderSuggestions: _react2.default.PropTypes.func,
	    removeComponent: _react2.default.PropTypes.func,
	    autocomplete: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.number]),
	    readOnly: _react2.default.PropTypes.bool,
	    classNames: _react2.default.PropTypes.object
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      placeholder: 'Add new tag',
	      tags: [],
	      suggestions: [],
	      delimiters: [Keys.ENTER, Keys.TAB],
	      autofocus: true,
	      inline: true,
	      allowDeleteFromEmptyInput: true,
	      minQueryLength: 2,
	      autocomplete: false,
	      readOnly: false
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this.setState({
	      classNames: _extends({}, DefaultClassNames, this.props.classNames)
	    });
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.autofocus && !this.props.readOnly) {
	      this.refs.input.focus();
	    }
	  },
	  getInitialState: function getInitialState() {
	    return {
	      suggestions: this.props.suggestions,
	      query: "",
	      selectedIndex: -1,
	      selectionMode: false
	    };
	  },
	  filteredSuggestions: function filteredSuggestions(query, suggestions) {
	    if (this.props.handleFilterSuggestions) {
	      return this.props.handleFilterSuggestions(query, suggestions);
	    }

	    return suggestions.filter(function (item) {
	      return item.toLowerCase().indexOf(query.toLowerCase()) === 0;
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    var suggestions = this.filteredSuggestions(this.state.query, props.suggestions);
	    this.setState({
	      suggestions: suggestions,
	      classNames: _extends({}, DefaultClassNames, props.classNames)
	    });
	  },

	  handleDelete: function handleDelete(i, e) {
	    this.props.handleDelete(i);
	    this.setState({ query: "" });
	  },
	  handleChange: function handleChange(e) {
	    if (this.props.handleInputChange) {
	      this.props.handleInputChange(e.target.value.trim());
	    }

	    var query = e.target.value.trim();
	    var suggestions = this.filteredSuggestions(query, this.props.suggestions);
	    var selectedIndex = this.state.selectedIndex;
	    // if our selected entry is gonna disappear, select the last entry we will have
	    if (selectedIndex >= suggestions.length) {
	      selectedIndex = suggestions.length - 1;
	    }
	    this.setState({
	      query: query,
	      suggestions: suggestions,
	      selectedIndex: selectedIndex
	    });
	  },
	  handleBlur: function handleBlur(e) {
	    var value = e.target.value.trim();
	    if (this.props.handleInputBlur) {
	      this.props.handleInputBlur(value);
	      this.refs.input.value = "";
	    }
	  },
	  handleKeyDown: function handleKeyDown(e) {
	    var _state = this.state;
	    var query = _state.query;
	    var selectedIndex = _state.selectedIndex;
	    var suggestions = _state.suggestions;

	    // hide suggestions menu on escape

	    if (e.keyCode === Keys.ESCAPE) {
	      e.preventDefault();
	      e.stopPropagation();
	      this.setState({
	        selectedIndex: -1,
	        selectionMode: false,
	        suggestions: []
	      });
	    }

	    // When one of the terminating keys is pressed, add current query to the tags.
	    // If no text is typed in so far, ignore the action - so we don't end up with a terminating
	    // character typed in.
	    if (this.props.delimiters.indexOf(e.keyCode) !== -1 && !e.shiftKey) {
	      if (e.keyCode !== Keys.TAB || query !== "") {
	        e.preventDefault();
	      }

	      if (query !== "") {
	        if (this.state.selectionMode) {
	          query = this.state.suggestions[this.state.selectedIndex];
	        }
	        this.addTag(query);
	      }
	    }

	    // when backspace key is pressed and query is blank, delete tag
	    if (e.keyCode === Keys.BACKSPACE && query == "" && this.props.allowDeleteFromEmptyInput) {
	      this.handleDelete(this.props.tags.length - 1);
	    }

	    // up arrow
	    if (e.keyCode === Keys.UP_ARROW) {
	      e.preventDefault();
	      var selectedIndex = this.state.selectedIndex;
	      // last item, cycle to the top
	      if (selectedIndex <= 0) {
	        this.setState({
	          selectedIndex: this.state.suggestions.length - 1,
	          selectionMode: true
	        });
	      } else {
	        this.setState({
	          selectedIndex: selectedIndex - 1,
	          selectionMode: true
	        });
	      }
	    }

	    // down arrow
	    if (e.keyCode === Keys.DOWN_ARROW) {
	      e.preventDefault();
	      this.setState({
	        selectedIndex: (this.state.selectedIndex + 1) % suggestions.length,
	        selectionMode: true
	      });
	    }
	  },
	  handlePaste: function handlePaste(e) {
	    var _this = this;

	    e.preventDefault();

	    // See: http://stackoverflow.com/a/6969486/1463681
	    var escapeRegex = function escapeRegex(str) {
	      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	    };

	    // Used to determine how the pasted content is split.
	    var delimiterChars = escapeRegex(this.props.delimiters.map(function (delimiter) {
	      // See: http://stackoverflow.com/a/34711175/1463681
	      var chrCode = delimiter - 48 * Math.floor(delimiter / 48);
	      return String.fromCharCode(96 <= delimiter ? chrCode : delimiter);
	    }).join(''));

	    var clipboardData = e.clipboardData || window.clipboardData;
	    var string = clipboardData.getData('text');
	    var regExp = new RegExp('[' + delimiterChars + ']+');
	    string.split(regExp).forEach(function (tag) {
	      return _this.props.handleAddition(tag);
	    });
	  },
	  addTag: function addTag(tag) {
	    var input = this.refs.input;

	    if (this.props.autocomplete) {
	      var possibleMatches = this.filteredSuggestions(tag, this.props.suggestions);

	      if (this.props.autocomplete === 1 && possibleMatches.length === 1 || this.props.autocomplete === true && possibleMatches.length) {
	        tag = possibleMatches[0];
	      }
	    }

	    // call method to add
	    this.props.handleAddition(tag);

	    // reset the state
	    this.setState({
	      query: "",
	      selectionMode: false,
	      selectedIndex: -1
	    });

	    // focus back on the input box
	    input.value = "";
	    input.focus();
	  },
	  handleSuggestionClick: function handleSuggestionClick(i, e) {
	    this.addTag(this.state.suggestions[i]);
	  },
	  handleSuggestionHover: function handleSuggestionHover(i, e) {
	    this.setState({
	      selectedIndex: i,
	      selectionMode: true
	    });
	  },
	  moveTag: function moveTag(id, afterId) {
	    var tags = this.props.tags;

	    // locate tags
	    var tag = tags.filter(function (t) {
	      return t.id === id;
	    })[0];
	    var afterTag = tags.filter(function (t) {
	      return t.id === afterId;
	    })[0];

	    // find their position in the array
	    var tagIndex = tags.indexOf(tag);
	    var afterTagIndex = tags.indexOf(afterTag);

	    // call handler with current position and after position
	    this.props.handleDrag(tag, tagIndex, afterTagIndex);
	  },
	  render: function render() {
	    var moveTag = this.props.handleDrag ? this.moveTag : null;
	    var tagItems = this.props.tags.map(function (tag, i) {
	      return _react2.default.createElement(_Tag2.default, { key: i,
	        tag: tag,
	        labelField: this.props.labelField,
	        onDelete: this.handleDelete.bind(this, i),
	        moveTag: moveTag,
	        removeComponent: this.props.removeComponent,
	        readOnly: this.props.readOnly,
	        classNames: this.state.classNames });
	    }.bind(this));

	    // get the suggestions for the given query
	    var query = this.state.query.trim(),
	        selectedIndex = this.state.selectedIndex,
	        suggestions = this.state.suggestions,
	        placeholder = this.props.placeholder;

	    var tagInput = !this.props.readOnly ? _react2.default.createElement(
	      'div',
	      { className: this.state.classNames.tagInput },
	      _react2.default.createElement('input', { ref: 'input',
	        type: 'text',
	        placeholder: placeholder,
	        'aria-label': placeholder,
	        onBlur: this.handleBlur,
	        onChange: this.handleChange,
	        onKeyDown: this.handleKeyDown,
	        onPaste: this.handlePaste }),
	      _react2.default.createElement(_Suggestions2.default, { query: query,
	        suggestions: suggestions,
	        selectedIndex: selectedIndex,
	        handleClick: this.handleSuggestionClick,
	        handleHover: this.handleSuggestionHover,
	        minQueryLength: this.props.minQueryLength,
	        shouldRenderSuggestions: this.props.shouldRenderSuggestions,
	        classNames: this.state.classNames })
	    ) : null;

	    return _react2.default.createElement(
	      'div',
	      { className: this.state.classNames.tags },
	      _react2.default.createElement(
	        'div',
	        { className: this.state.classNames.selected },
	        tagItems,
	        this.props.inline && tagInput
	      ),
	      !this.props.inline && tagInput
	    );
	  }
	});

	module.exports = {
	  WithContext: (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(ReactTags),
	  WithOutContext: ReactTags,
	  Keys: Keys
	};

/***/ },
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _DragDropContext = __webpack_require__(249);

	exports.DragDropContext = _interopRequire(_DragDropContext);

	var _DragLayer = __webpack_require__(353);

	exports.DragLayer = _interopRequire(_DragLayer);

	var _DragSource = __webpack_require__(356);

	exports.DragSource = _interopRequire(_DragSource);

	var _DropTarget = __webpack_require__(371);

	exports.DropTarget = _interopRequire(_DropTarget);

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slice = Array.prototype.slice;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = DragDropContext;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _dndCore = __webpack_require__(250);

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _utilsCheckDecoratorArguments = __webpack_require__(352);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	function DragDropContext(backendOrModule) {
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragDropContext', 'backend'].concat(_slice.call(arguments)));

	  // Auto-detect ES6 default export for people still using ES5
	  var backend = undefined;
	  if (typeof backendOrModule === 'object' && typeof backendOrModule['default'] === 'function') {
	    backend = backendOrModule['default'];
	  } else {
	    backend = backendOrModule;
	  }

	  _invariant2['default'](typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-drop-context.html');

	  var childContext = {
	    dragDropManager: new _dndCore.DragDropManager(backend)
	  };

	  return function decorateContext(DecoratedComponent) {
	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	    return (function (_Component) {
	      _inherits(DragDropContextContainer, _Component);

	      function DragDropContextContainer() {
	        _classCallCheck(this, DragDropContextContainer);

	        _Component.apply(this, arguments);
	      }

	      DragDropContextContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };

	      DragDropContextContainer.prototype.getManager = function getManager() {
	        return childContext.dragDropManager;
	      };

	      DragDropContextContainer.prototype.getChildContext = function getChildContext() {
	        return childContext;
	      };

	      DragDropContextContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, {
	          ref: 'child' }));
	      };

	      _createClass(DragDropContextContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragDropContext(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'childContextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);

	      return DragDropContextContainer;
	    })(_react.Component);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _DragDropManager = __webpack_require__(251);

	exports.DragDropManager = _interopRequire(_DragDropManager);

	var _DragSource = __webpack_require__(349);

	exports.DragSource = _interopRequire(_DragSource);

	var _DropTarget = __webpack_require__(350);

	exports.DropTarget = _interopRequire(_DropTarget);

	var _backendsCreateTestBackend = __webpack_require__(351);

	exports.createTestBackend = _interopRequire(_backendsCreateTestBackend);

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _reduxLibCreateStore = __webpack_require__(252);

	var _reduxLibCreateStore2 = _interopRequireDefault(_reduxLibCreateStore);

	var _reducers = __webpack_require__(261);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _actionsDragDrop = __webpack_require__(263);

	var dragDropActions = _interopRequireWildcard(_actionsDragDrop);

	var _DragDropMonitor = __webpack_require__(344);

	var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);

	var _HandlerRegistry = __webpack_require__(345);

	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

	var DragDropManager = (function () {
	  function DragDropManager(createBackend) {
	    _classCallCheck(this, DragDropManager);

	    var store = _reduxLibCreateStore2['default'](_reducers2['default']);

	    this.store = store;
	    this.monitor = new _DragDropMonitor2['default'](store);
	    this.registry = this.monitor.registry;
	    this.backend = createBackend(this);

	    store.subscribe(this.handleRefCountChange.bind(this));
	  }

	  DragDropManager.prototype.handleRefCountChange = function handleRefCountChange() {
	    var shouldSetUp = this.store.getState().refCount > 0;
	    if (shouldSetUp && !this.isSetUp) {
	      this.backend.setup();
	      this.isSetUp = true;
	    } else if (!shouldSetUp && this.isSetUp) {
	      this.backend.teardown();
	      this.isSetUp = false;
	    }
	  };

	  DragDropManager.prototype.getMonitor = function getMonitor() {
	    return this.monitor;
	  };

	  DragDropManager.prototype.getBackend = function getBackend() {
	    return this.backend;
	  };

	  DragDropManager.prototype.getRegistry = function getRegistry() {
	    return this.registry;
	  };

	  DragDropManager.prototype.getActions = function getActions() {
	    var manager = this;
	    var dispatch = this.store.dispatch;

	    function bindActionCreator(actionCreator) {
	      return function () {
	        var action = actionCreator.apply(manager, arguments);
	        if (typeof action !== 'undefined') {
	          dispatch(action);
	        }
	      };
	    }

	    return Object.keys(dragDropActions).filter(function (key) {
	      return typeof dragDropActions[key] === 'function';
	    }).reduce(function (boundActions, key) {
	      boundActions[key] = bindActionCreator(dragDropActions[key]);
	      return boundActions;
	    }, {});
	  };

	  return DragDropManager;
	})();

	exports['default'] = DragDropManager;
	module.exports = exports['default'];

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(253);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(257);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(254),
	    isObjectLike = __webpack_require__(256);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(255);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 255 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 256 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(258);


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(260);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(259)(module)))

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 260 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dragOffset = __webpack_require__(262);

	var _dragOffset2 = _interopRequireDefault(_dragOffset);

	var _dragOperation = __webpack_require__(268);

	var _dragOperation2 = _interopRequireDefault(_dragOperation);

	var _refCount = __webpack_require__(329);

	var _refCount2 = _interopRequireDefault(_refCount);

	var _dirtyHandlerIds = __webpack_require__(330);

	var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);

	var _stateId = __webpack_require__(343);

	var _stateId2 = _interopRequireDefault(_stateId);

	exports['default'] = function (state, action) {
	  if (state === undefined) state = {};

	  return {
	    dirtyHandlerIds: _dirtyHandlerIds2['default'](state.dirtyHandlerIds, action, state.dragOperation),
	    dragOffset: _dragOffset2['default'](state.dragOffset, action),
	    refCount: _refCount2['default'](state.refCount, action),
	    dragOperation: _dragOperation2['default'](state.dragOperation, action),
	    stateId: _stateId2['default'](state.stateId)
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = dragOffset;
	exports.getSourceClientOffset = getSourceClientOffset;
	exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;

	var _actionsDragDrop = __webpack_require__(263);

	var initialState = {
	  initialSourceClientOffset: null,
	  initialClientOffset: null,
	  clientOffset: null
	};

	function areOffsetsEqual(offsetA, offsetB) {
	  if (offsetA === offsetB) {
	    return true;
	  }
	  return offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
	}

	function dragOffset(state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case _actionsDragDrop.BEGIN_DRAG:
	      return {
	        initialSourceClientOffset: action.sourceClientOffset,
	        initialClientOffset: action.clientOffset,
	        clientOffset: action.clientOffset
	      };
	    case _actionsDragDrop.HOVER:
	      if (areOffsetsEqual(state.clientOffset, action.clientOffset)) {
	        return state;
	      }
	      return _extends({}, state, {
	        clientOffset: action.clientOffset
	      });
	    case _actionsDragDrop.END_DRAG:
	    case _actionsDragDrop.DROP:
	      return initialState;
	    default:
	      return state;
	  }
	}

	function getSourceClientOffset(state) {
	  var clientOffset = state.clientOffset;
	  var initialClientOffset = state.initialClientOffset;
	  var initialSourceClientOffset = state.initialSourceClientOffset;

	  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
	    return null;
	  }
	  return {
	    x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
	    y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
	  };
	}

	function getDifferenceFromInitialOffset(state) {
	  var clientOffset = state.clientOffset;
	  var initialClientOffset = state.initialClientOffset;

	  if (!clientOffset || !initialClientOffset) {
	    return null;
	  }
	  return {
	    x: clientOffset.x - initialClientOffset.x,
	    y: clientOffset.y - initialClientOffset.y
	  };
	}

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.beginDrag = beginDrag;
	exports.publishDragSource = publishDragSource;
	exports.hover = hover;
	exports.drop = drop;
	exports.endDrag = endDrag;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsMatchesType = __webpack_require__(264);

	var _utilsMatchesType2 = _interopRequireDefault(_utilsMatchesType);

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsArray = __webpack_require__(265);

	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

	var _lodashIsObject = __webpack_require__(267);

	var _lodashIsObject2 = _interopRequireDefault(_lodashIsObject);

	var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
	exports.BEGIN_DRAG = BEGIN_DRAG;
	var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
	exports.PUBLISH_DRAG_SOURCE = PUBLISH_DRAG_SOURCE;
	var HOVER = 'dnd-core/HOVER';
	exports.HOVER = HOVER;
	var DROP = 'dnd-core/DROP';
	exports.DROP = DROP;
	var END_DRAG = 'dnd-core/END_DRAG';

	exports.END_DRAG = END_DRAG;

	function beginDrag(sourceIds) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var _ref$publishSource = _ref.publishSource;
	  var publishSource = _ref$publishSource === undefined ? true : _ref$publishSource;
	  var _ref$clientOffset = _ref.clientOffset;
	  var clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;
	  var getSourceClientOffset = _ref.getSourceClientOffset;

	  _invariant2['default'](_lodashIsArray2['default'](sourceIds), 'Expected sourceIds to be an array.');

	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](!monitor.isDragging(), 'Cannot call beginDrag while dragging.');

	  for (var i = 0; i < sourceIds.length; i++) {
	    _invariant2['default'](registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
	  }

	  var sourceId = null;
	  for (var i = sourceIds.length - 1; i >= 0; i--) {
	    if (monitor.canDragSource(sourceIds[i])) {
	      sourceId = sourceIds[i];
	      break;
	    }
	  }
	  if (sourceId === null) {
	    return;
	  }

	  var sourceClientOffset = null;
	  if (clientOffset) {
	    _invariant2['default'](typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
	    sourceClientOffset = getSourceClientOffset(sourceId);
	  }

	  var source = registry.getSource(sourceId);
	  var item = source.beginDrag(monitor, sourceId);
	  _invariant2['default'](_lodashIsObject2['default'](item), 'Item must be an object.');

	  registry.pinSource(sourceId);

	  var itemType = registry.getSourceType(sourceId);
	  return {
	    type: BEGIN_DRAG,
	    itemType: itemType,
	    item: item,
	    sourceId: sourceId,
	    clientOffset: clientOffset,
	    sourceClientOffset: sourceClientOffset,
	    isSourcePublic: publishSource
	  };
	}

	function publishDragSource(manager) {
	  var monitor = this.getMonitor();
	  if (!monitor.isDragging()) {
	    return;
	  }

	  return {
	    type: PUBLISH_DRAG_SOURCE
	  };
	}

	function hover(targetIds) {
	  var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var _ref2$clientOffset = _ref2.clientOffset;
	  var clientOffset = _ref2$clientOffset === undefined ? null : _ref2$clientOffset;

	  _invariant2['default'](_lodashIsArray2['default'](targetIds), 'Expected targetIds to be an array.');
	  targetIds = targetIds.slice(0);

	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call hover while not dragging.');
	  _invariant2['default'](!monitor.didDrop(), 'Cannot call hover after drop.');

	  // First check invariants.
	  for (var i = 0; i < targetIds.length; i++) {
	    var targetId = targetIds[i];
	    _invariant2['default'](targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');

	    var target = registry.getTarget(targetId);
	    _invariant2['default'](target, 'Expected targetIds to be registered.');
	  }

	  var draggedItemType = monitor.getItemType();

	  // Remove those targetIds that don't match the targetType.  This
	  // fixes shallow isOver which would only be non-shallow because of
	  // non-matching targets.
	  for (var i = targetIds.length - 1; i >= 0; i--) {
	    var targetId = targetIds[i];
	    var targetType = registry.getTargetType(targetId);
	    if (!_utilsMatchesType2['default'](targetType, draggedItemType)) {
	      targetIds.splice(i, 1);
	    }
	  }

	  // Finally call hover on all matching targets.
	  for (var i = 0; i < targetIds.length; i++) {
	    var targetId = targetIds[i];
	    var target = registry.getTarget(targetId);
	    target.hover(monitor, targetId);
	  }

	  return {
	    type: HOVER,
	    targetIds: targetIds,
	    clientOffset: clientOffset
	  };
	}

	function drop() {
	  var _this = this;

	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call drop while not dragging.');
	  _invariant2['default'](!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');

	  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);

	  targetIds.reverse();
	  targetIds.forEach(function (targetId, index) {
	    var target = registry.getTarget(targetId);

	    var dropResult = target.drop(monitor, targetId);
	    _invariant2['default'](typeof dropResult === 'undefined' || _lodashIsObject2['default'](dropResult), 'Drop result must either be an object or undefined.');
	    if (typeof dropResult === 'undefined') {
	      dropResult = index === 0 ? {} : monitor.getDropResult();
	    }

	    _this.store.dispatch({
	      type: DROP,
	      dropResult: dropResult
	    });
	  });
	}

	function endDrag() {
	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call endDrag while not dragging.');

	  var sourceId = monitor.getSourceId();
	  var source = registry.getSource(sourceId, true);
	  source.endDrag(monitor, sourceId);

	  registry.unpinSource();

	  return {
	    type: END_DRAG
	  };
	}

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = matchesType;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashIsArray = __webpack_require__(265);

	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

	function matchesType(targetType, draggedItemType) {
	  if (_lodashIsArray2['default'](targetType)) {
	    return targetType.some(function (t) {
	      return t === draggedItemType;
	    });
	  } else {
	    return targetType === draggedItemType;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 265 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 267 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = dragOperation;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _actionsDragDrop = __webpack_require__(263);

	var _actionsRegistry = __webpack_require__(269);

	var _lodashWithout = __webpack_require__(270);

	var _lodashWithout2 = _interopRequireDefault(_lodashWithout);

	var initialState = {
	  itemType: null,
	  item: null,
	  sourceId: null,
	  targetIds: [],
	  dropResult: null,
	  didDrop: false,
	  isSourcePublic: null
	};

	function dragOperation(state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case _actionsDragDrop.BEGIN_DRAG:
	      return _extends({}, state, {
	        itemType: action.itemType,
	        item: action.item,
	        sourceId: action.sourceId,
	        isSourcePublic: action.isSourcePublic,
	        dropResult: null,
	        didDrop: false
	      });
	    case _actionsDragDrop.PUBLISH_DRAG_SOURCE:
	      return _extends({}, state, {
	        isSourcePublic: true
	      });
	    case _actionsDragDrop.HOVER:
	      return _extends({}, state, {
	        targetIds: action.targetIds
	      });
	    case _actionsRegistry.REMOVE_TARGET:
	      if (state.targetIds.indexOf(action.targetId) === -1) {
	        return state;
	      }
	      return _extends({}, state, {
	        targetIds: _lodashWithout2['default'](state.targetIds, action.targetId)
	      });
	    case _actionsDragDrop.DROP:
	      return _extends({}, state, {
	        dropResult: action.dropResult,
	        didDrop: true,
	        targetIds: []
	      });
	    case _actionsDragDrop.END_DRAG:
	      return _extends({}, state, {
	        itemType: null,
	        item: null,
	        sourceId: null,
	        dropResult: null,
	        didDrop: false,
	        isSourcePublic: null,
	        targetIds: []
	      });
	    default:
	      return state;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 269 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addSource = addSource;
	exports.addTarget = addTarget;
	exports.removeSource = removeSource;
	exports.removeTarget = removeTarget;
	var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
	exports.ADD_SOURCE = ADD_SOURCE;
	var ADD_TARGET = 'dnd-core/ADD_TARGET';
	exports.ADD_TARGET = ADD_TARGET;
	var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
	exports.REMOVE_SOURCE = REMOVE_SOURCE;
	var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';

	exports.REMOVE_TARGET = REMOVE_TARGET;

	function addSource(sourceId) {
	  return {
	    type: ADD_SOURCE,
	    sourceId: sourceId
	  };
	}

	function addTarget(targetId) {
	  return {
	    type: ADD_TARGET,
	    targetId: targetId
	  };
	}

	function removeSource(sourceId) {
	  return {
	    type: REMOVE_SOURCE,
	    sourceId: sourceId
	  };
	}

	function removeTarget(targetId) {
	  return {
	    type: REMOVE_TARGET,
	    targetId: targetId
	  };
	}

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(271),
	    baseRest = __webpack_require__(317),
	    isArrayLikeObject = __webpack_require__(326);

	/**
	 * Creates an array excluding all given values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.pull`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.xor
	 * @example
	 *
	 * _.without([2, 1, 2, 3], 1, 2);
	 * // => [3]
	 */
	var without = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, values)
	    : [];
	});

	module.exports = without;


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(272),
	    arrayIncludes = __webpack_require__(308),
	    arrayIncludesWith = __webpack_require__(313),
	    arrayMap = __webpack_require__(314),
	    baseUnary = __webpack_require__(315),
	    cacheHas = __webpack_require__(316);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(273),
	    setCacheAdd = __webpack_require__(306),
	    setCacheHas = __webpack_require__(307);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(274),
	    mapCacheDelete = __webpack_require__(300),
	    mapCacheGet = __webpack_require__(303),
	    mapCacheHas = __webpack_require__(304),
	    mapCacheSet = __webpack_require__(305);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(275),
	    ListCache = __webpack_require__(291),
	    Map = __webpack_require__(299);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(276),
	    hashDelete = __webpack_require__(287),
	    hashGet = __webpack_require__(288),
	    hashHas = __webpack_require__(289),
	    hashSet = __webpack_require__(290);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(277);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(278);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(279),
	    getValue = __webpack_require__(286);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(280),
	    isMasked = __webpack_require__(281),
	    isObject = __webpack_require__(267),
	    toSource = __webpack_require__(285);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(267);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(282);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(283);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(284);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 284 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 285 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 286 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 287 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(277);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(277);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(277);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(292),
	    listCacheDelete = __webpack_require__(293),
	    listCacheGet = __webpack_require__(296),
	    listCacheHas = __webpack_require__(297),
	    listCacheSet = __webpack_require__(298);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 292 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(294);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(295);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 295 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(294);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(294);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(294);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(278),
	    root = __webpack_require__(283);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(301);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(302);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 302 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(301);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(301);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(301);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 306 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 307 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(309);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(310),
	    baseIsNaN = __webpack_require__(311),
	    strictIndexOf = __webpack_require__(312);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ },
/* 310 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 311 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ },
/* 312 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;


/***/ },
/* 313 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 314 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 315 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 316 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(318),
	    overRest = __webpack_require__(319),
	    setToString = __webpack_require__(321);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ },
/* 318 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(320);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ },
/* 320 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(322),
	    shortOut = __webpack_require__(325);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(323),
	    defineProperty = __webpack_require__(324),
	    identity = __webpack_require__(318);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ },
/* 323 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(278);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 325 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 500,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(327),
	    isObjectLike = __webpack_require__(256);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(280),
	    isLength = __webpack_require__(328);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 328 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = refCount;

	var _actionsRegistry = __webpack_require__(269);

	function refCount(state, action) {
	  if (state === undefined) state = 0;

	  switch (action.type) {
	    case _actionsRegistry.ADD_SOURCE:
	    case _actionsRegistry.ADD_TARGET:
	      return state + 1;
	    case _actionsRegistry.REMOVE_SOURCE:
	    case _actionsRegistry.REMOVE_TARGET:
	      return state - 1;
	    default:
	      return state;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = dirtyHandlerIds;
	exports.areDirty = areDirty;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashXor = __webpack_require__(331);

	var _lodashXor2 = _interopRequireDefault(_lodashXor);

	var _lodashIntersection = __webpack_require__(340);

	var _lodashIntersection2 = _interopRequireDefault(_lodashIntersection);

	var _actionsDragDrop = __webpack_require__(263);

	var _actionsRegistry = __webpack_require__(269);

	var NONE = [];
	var ALL = [];

	function dirtyHandlerIds(state, action, dragOperation) {
	  if (state === undefined) state = NONE;

	  switch (action.type) {
	    case _actionsDragDrop.HOVER:
	      break;
	    case _actionsRegistry.ADD_SOURCE:
	    case _actionsRegistry.ADD_TARGET:
	    case _actionsRegistry.REMOVE_TARGET:
	    case _actionsRegistry.REMOVE_SOURCE:
	      return NONE;
	    case _actionsDragDrop.BEGIN_DRAG:
	    case _actionsDragDrop.PUBLISH_DRAG_SOURCE:
	    case _actionsDragDrop.END_DRAG:
	    case _actionsDragDrop.DROP:
	    default:
	      return ALL;
	  }

	  var targetIds = action.targetIds;
	  var prevTargetIds = dragOperation.targetIds;

	  var dirtyHandlerIds = _lodashXor2['default'](targetIds, prevTargetIds);

	  var didChange = false;
	  if (dirtyHandlerIds.length === 0) {
	    for (var i = 0; i < targetIds.length; i++) {
	      if (targetIds[i] !== prevTargetIds[i]) {
	        didChange = true;
	        break;
	      }
	    }
	  } else {
	    didChange = true;
	  }

	  if (!didChange) {
	    return NONE;
	  }

	  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
	  var innermostTargetId = targetIds[targetIds.length - 1];

	  if (prevInnermostTargetId !== innermostTargetId) {
	    if (prevInnermostTargetId) {
	      dirtyHandlerIds.push(prevInnermostTargetId);
	    }
	    if (innermostTargetId) {
	      dirtyHandlerIds.push(innermostTargetId);
	    }
	  }

	  return dirtyHandlerIds;
	}

	function areDirty(state, handlerIds) {
	  if (state === NONE) {
	    return false;
	  }

	  if (state === ALL || typeof handlerIds === 'undefined') {
	    return true;
	  }

	  return _lodashIntersection2['default'](handlerIds, state).length > 0;
	}

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(332),
	    baseRest = __webpack_require__(317),
	    baseXor = __webpack_require__(333),
	    isArrayLikeObject = __webpack_require__(326);

	/**
	 * Creates an array of unique values that is the
	 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	 * of the given arrays. The order of result values is determined by the order
	 * they occur in the arrays.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.without
	 * @example
	 *
	 * _.xor([2, 1], [2, 3]);
	 * // => [1, 3]
	 */
	var xor = baseRest(function(arrays) {
	  return baseXor(arrayFilter(arrays, isArrayLikeObject));
	});

	module.exports = xor;


/***/ },
/* 332 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(334),
	    baseDifference = __webpack_require__(271),
	    baseUniq = __webpack_require__(335);

	/**
	 * The base implementation of methods like `_.xor`, without support for
	 * iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of values.
	 */
	function baseXor(arrays, iteratee, comparator) {
	  var index = -1,
	      length = arrays.length;

	  while (++index < length) {
	    var result = result
	      ? arrayPush(
	          baseDifference(result, arrays[index], iteratee, comparator),
	          baseDifference(arrays[index], result, iteratee, comparator)
	        )
	      : arrays[index];
	  }
	  return (result && result.length) ? baseUniq(result, iteratee, comparator) : [];
	}

	module.exports = baseXor;


/***/ },
/* 334 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(272),
	    arrayIncludes = __webpack_require__(308),
	    arrayIncludesWith = __webpack_require__(313),
	    cacheHas = __webpack_require__(316),
	    createSet = __webpack_require__(336),
	    setToArray = __webpack_require__(339);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(337),
	    noop = __webpack_require__(338),
	    setToArray = __webpack_require__(339);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};

	module.exports = createSet;


/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(278),
	    root = __webpack_require__(283);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 338 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 339 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(314),
	    baseIntersection = __webpack_require__(341),
	    baseRest = __webpack_require__(317),
	    castArrayLikeObject = __webpack_require__(342);

	/**
	 * Creates an array of unique values that are included in all given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of intersecting values.
	 * @example
	 *
	 * _.intersection([2, 1], [2, 3]);
	 * // => [2]
	 */
	var intersection = baseRest(function(arrays) {
	  var mapped = arrayMap(arrays, castArrayLikeObject);
	  return (mapped.length && mapped[0] === arrays[0])
	    ? baseIntersection(mapped)
	    : [];
	});

	module.exports = intersection;


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(272),
	    arrayIncludes = __webpack_require__(308),
	    arrayIncludesWith = __webpack_require__(313),
	    arrayMap = __webpack_require__(314),
	    baseUnary = __webpack_require__(315),
	    cacheHas = __webpack_require__(316);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * The base implementation of methods like `_.intersection`, without support
	 * for iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of shared values.
	 */
	function baseIntersection(arrays, iteratee, comparator) {
	  var includes = comparator ? arrayIncludesWith : arrayIncludes,
	      length = arrays[0].length,
	      othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(othLength),
	      maxLength = Infinity,
	      result = [];

	  while (othIndex--) {
	    var array = arrays[othIndex];
	    if (othIndex && iteratee) {
	      array = arrayMap(array, baseUnary(iteratee));
	    }
	    maxLength = nativeMin(array.length, maxLength);
	    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	      ? new SetCache(othIndex && array)
	      : undefined;
	  }
	  array = arrays[0];

	  var index = -1,
	      seen = caches[0];

	  outer:
	  while (++index < length && result.length < maxLength) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (!(seen
	          ? cacheHas(seen, computed)
	          : includes(result, computed, comparator)
	        )) {
	      othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if (!(cache
	              ? cacheHas(cache, computed)
	              : includes(arrays[othIndex], computed, comparator))
	            ) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseIntersection;


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(326);

	/**
	 * Casts `value` to an empty array if it's not an array like object.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array|Object} Returns the cast array-like object.
	 */
	function castArrayLikeObject(value) {
	  return isArrayLikeObject(value) ? value : [];
	}

	module.exports = castArrayLikeObject;


/***/ },
/* 343 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = stateId;

	function stateId() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	  return state + 1;
	}

	module.exports = exports["default"];

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _utilsMatchesType = __webpack_require__(264);

	var _utilsMatchesType2 = _interopRequireDefault(_utilsMatchesType);

	var _lodashIsArray = __webpack_require__(265);

	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

	var _HandlerRegistry = __webpack_require__(345);

	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

	var _reducersDragOffset = __webpack_require__(262);

	var _reducersDirtyHandlerIds = __webpack_require__(330);

	var DragDropMonitor = (function () {
	  function DragDropMonitor(store) {
	    _classCallCheck(this, DragDropMonitor);

	    this.store = store;
	    this.registry = new _HandlerRegistry2['default'](store);
	  }

	  DragDropMonitor.prototype.subscribeToStateChange = function subscribeToStateChange(listener) {
	    var _this = this;

	    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var handlerIds = _ref.handlerIds;

	    _invariant2['default'](typeof listener === 'function', 'listener must be a function.');
	    _invariant2['default'](typeof handlerIds === 'undefined' || _lodashIsArray2['default'](handlerIds), 'handlerIds, when specified, must be an array of strings.');

	    var prevStateId = this.store.getState().stateId;
	    var handleChange = function handleChange() {
	      var state = _this.store.getState();
	      var currentStateId = state.stateId;
	      try {
	        var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !_reducersDirtyHandlerIds.areDirty(state.dirtyHandlerIds, handlerIds);

	        if (!canSkipListener) {
	          listener();
	        }
	      } finally {
	        prevStateId = currentStateId;
	      }
	    };

	    return this.store.subscribe(handleChange);
	  };

	  DragDropMonitor.prototype.subscribeToOffsetChange = function subscribeToOffsetChange(listener) {
	    var _this2 = this;

	    _invariant2['default'](typeof listener === 'function', 'listener must be a function.');

	    var previousState = this.store.getState().dragOffset;
	    var handleChange = function handleChange() {
	      var nextState = _this2.store.getState().dragOffset;
	      if (nextState === previousState) {
	        return;
	      }

	      previousState = nextState;
	      listener();
	    };

	    return this.store.subscribe(handleChange);
	  };

	  DragDropMonitor.prototype.canDragSource = function canDragSource(sourceId) {
	    var source = this.registry.getSource(sourceId);
	    _invariant2['default'](source, 'Expected to find a valid source.');

	    if (this.isDragging()) {
	      return false;
	    }

	    return source.canDrag(this, sourceId);
	  };

	  DragDropMonitor.prototype.canDropOnTarget = function canDropOnTarget(targetId) {
	    var target = this.registry.getTarget(targetId);
	    _invariant2['default'](target, 'Expected to find a valid target.');

	    if (!this.isDragging() || this.didDrop()) {
	      return false;
	    }

	    var targetType = this.registry.getTargetType(targetId);
	    var draggedItemType = this.getItemType();
	    return _utilsMatchesType2['default'](targetType, draggedItemType) && target.canDrop(this, targetId);
	  };

	  DragDropMonitor.prototype.isDragging = function isDragging() {
	    return Boolean(this.getItemType());
	  };

	  DragDropMonitor.prototype.isDraggingSource = function isDraggingSource(sourceId) {
	    var source = this.registry.getSource(sourceId, true);
	    _invariant2['default'](source, 'Expected to find a valid source.');

	    if (!this.isDragging() || !this.isSourcePublic()) {
	      return false;
	    }

	    var sourceType = this.registry.getSourceType(sourceId);
	    var draggedItemType = this.getItemType();
	    if (sourceType !== draggedItemType) {
	      return false;
	    }

	    return source.isDragging(this, sourceId);
	  };

	  DragDropMonitor.prototype.isOverTarget = function isOverTarget(targetId) {
	    var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var _ref2$shallow = _ref2.shallow;
	    var shallow = _ref2$shallow === undefined ? false : _ref2$shallow;

	    if (!this.isDragging()) {
	      return false;
	    }

	    var targetType = this.registry.getTargetType(targetId);
	    var draggedItemType = this.getItemType();
	    if (!_utilsMatchesType2['default'](targetType, draggedItemType)) {
	      return false;
	    }

	    var targetIds = this.getTargetIds();
	    if (!targetIds.length) {
	      return false;
	    }

	    var index = targetIds.indexOf(targetId);
	    if (shallow) {
	      return index === targetIds.length - 1;
	    } else {
	      return index > -1;
	    }
	  };

	  DragDropMonitor.prototype.getItemType = function getItemType() {
	    return this.store.getState().dragOperation.itemType;
	  };

	  DragDropMonitor.prototype.getItem = function getItem() {
	    return this.store.getState().dragOperation.item;
	  };

	  DragDropMonitor.prototype.getSourceId = function getSourceId() {
	    return this.store.getState().dragOperation.sourceId;
	  };

	  DragDropMonitor.prototype.getTargetIds = function getTargetIds() {
	    return this.store.getState().dragOperation.targetIds;
	  };

	  DragDropMonitor.prototype.getDropResult = function getDropResult() {
	    return this.store.getState().dragOperation.dropResult;
	  };

	  DragDropMonitor.prototype.didDrop = function didDrop() {
	    return this.store.getState().dragOperation.didDrop;
	  };

	  DragDropMonitor.prototype.isSourcePublic = function isSourcePublic() {
	    return this.store.getState().dragOperation.isSourcePublic;
	  };

	  DragDropMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.store.getState().dragOffset.initialClientOffset;
	  };

	  DragDropMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.store.getState().dragOffset.initialSourceClientOffset;
	  };

	  DragDropMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.store.getState().dragOffset.clientOffset;
	  };

	  DragDropMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return _reducersDragOffset.getSourceClientOffset(this.store.getState().dragOffset);
	  };

	  DragDropMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return _reducersDragOffset.getDifferenceFromInitialOffset(this.store.getState().dragOffset);
	  };

	  return DragDropMonitor;
	})();

	exports['default'] = DragDropMonitor;
	module.exports = exports['default'];

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsArray = __webpack_require__(265);

	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

	var _utilsGetNextUniqueId = __webpack_require__(346);

	var _utilsGetNextUniqueId2 = _interopRequireDefault(_utilsGetNextUniqueId);

	var _actionsRegistry = __webpack_require__(269);

	var _asap = __webpack_require__(347);

	var _asap2 = _interopRequireDefault(_asap);

	var HandlerRoles = {
	  SOURCE: 'SOURCE',
	  TARGET: 'TARGET'
	};

	function validateSourceContract(source) {
	  _invariant2['default'](typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
	  _invariant2['default'](typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
	  _invariant2['default'](typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
	}

	function validateTargetContract(target) {
	  _invariant2['default'](typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
	  _invariant2['default'](typeof target.hover === 'function', 'Expected hover to be a function.');
	  _invariant2['default'](typeof target.drop === 'function', 'Expected beginDrag to be a function.');
	}

	function validateType(type, allowArray) {
	  if (allowArray && _lodashIsArray2['default'](type)) {
	    type.forEach(function (t) {
	      return validateType(t, false);
	    });
	    return;
	  }

	  _invariant2['default'](typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
	}

	function getNextHandlerId(role) {
	  var id = _utilsGetNextUniqueId2['default']().toString();
	  switch (role) {
	    case HandlerRoles.SOURCE:
	      return 'S' + id;
	    case HandlerRoles.TARGET:
	      return 'T' + id;
	    default:
	      _invariant2['default'](false, 'Unknown role: ' + role);
	  }
	}

	function parseRoleFromHandlerId(handlerId) {
	  switch (handlerId[0]) {
	    case 'S':
	      return HandlerRoles.SOURCE;
	    case 'T':
	      return HandlerRoles.TARGET;
	    default:
	      _invariant2['default'](false, 'Cannot parse handler ID: ' + handlerId);
	  }
	}

	var HandlerRegistry = (function () {
	  function HandlerRegistry(store) {
	    _classCallCheck(this, HandlerRegistry);

	    this.store = store;

	    this.types = {};
	    this.handlers = {};

	    this.pinnedSourceId = null;
	    this.pinnedSource = null;
	  }

	  HandlerRegistry.prototype.addSource = function addSource(type, source) {
	    validateType(type);
	    validateSourceContract(source);

	    var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
	    this.store.dispatch(_actionsRegistry.addSource(sourceId));
	    return sourceId;
	  };

	  HandlerRegistry.prototype.addTarget = function addTarget(type, target) {
	    validateType(type, true);
	    validateTargetContract(target);

	    var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
	    this.store.dispatch(_actionsRegistry.addTarget(targetId));
	    return targetId;
	  };

	  HandlerRegistry.prototype.addHandler = function addHandler(role, type, handler) {
	    var id = getNextHandlerId(role);
	    this.types[id] = type;
	    this.handlers[id] = handler;

	    return id;
	  };

	  HandlerRegistry.prototype.containsHandler = function containsHandler(handler) {
	    var _this = this;

	    return Object.keys(this.handlers).some(function (key) {
	      return _this.handlers[key] === handler;
	    });
	  };

	  HandlerRegistry.prototype.getSource = function getSource(sourceId, includePinned) {
	    _invariant2['default'](this.isSourceId(sourceId), 'Expected a valid source ID.');

	    var isPinned = includePinned && sourceId === this.pinnedSourceId;
	    var source = isPinned ? this.pinnedSource : this.handlers[sourceId];

	    return source;
	  };

	  HandlerRegistry.prototype.getTarget = function getTarget(targetId) {
	    _invariant2['default'](this.isTargetId(targetId), 'Expected a valid target ID.');
	    return this.handlers[targetId];
	  };

	  HandlerRegistry.prototype.getSourceType = function getSourceType(sourceId) {
	    _invariant2['default'](this.isSourceId(sourceId), 'Expected a valid source ID.');
	    return this.types[sourceId];
	  };

	  HandlerRegistry.prototype.getTargetType = function getTargetType(targetId) {
	    _invariant2['default'](this.isTargetId(targetId), 'Expected a valid target ID.');
	    return this.types[targetId];
	  };

	  HandlerRegistry.prototype.isSourceId = function isSourceId(handlerId) {
	    var role = parseRoleFromHandlerId(handlerId);
	    return role === HandlerRoles.SOURCE;
	  };

	  HandlerRegistry.prototype.isTargetId = function isTargetId(handlerId) {
	    var role = parseRoleFromHandlerId(handlerId);
	    return role === HandlerRoles.TARGET;
	  };

	  HandlerRegistry.prototype.removeSource = function removeSource(sourceId) {
	    var _this2 = this;

	    _invariant2['default'](this.getSource(sourceId), 'Expected an existing source.');
	    this.store.dispatch(_actionsRegistry.removeSource(sourceId));

	    _asap2['default'](function () {
	      delete _this2.handlers[sourceId];
	      delete _this2.types[sourceId];
	    });
	  };

	  HandlerRegistry.prototype.removeTarget = function removeTarget(targetId) {
	    var _this3 = this;

	    _invariant2['default'](this.getTarget(targetId), 'Expected an existing target.');
	    this.store.dispatch(_actionsRegistry.removeTarget(targetId));

	    _asap2['default'](function () {
	      delete _this3.handlers[targetId];
	      delete _this3.types[targetId];
	    });
	  };

	  HandlerRegistry.prototype.pinSource = function pinSource(sourceId) {
	    var source = this.getSource(sourceId);
	    _invariant2['default'](source, 'Expected an existing source.');

	    this.pinnedSourceId = sourceId;
	    this.pinnedSource = source;
	  };

	  HandlerRegistry.prototype.unpinSource = function unpinSource() {
	    _invariant2['default'](this.pinnedSource, 'No source is pinned at the time.');

	    this.pinnedSourceId = null;
	    this.pinnedSource = null;
	  };

	  return HandlerRegistry;
	})();

	exports['default'] = HandlerRegistry;
	module.exports = exports['default'];

/***/ },
/* 346 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = getNextUniqueId;
	var nextUniqueId = 0;

	function getNextUniqueId() {
	  return nextUniqueId++;
	}

	module.exports = exports["default"];

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(348);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ },
/* 348 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 349 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragSource = (function () {
	  function DragSource() {
	    _classCallCheck(this, DragSource);
	  }

	  DragSource.prototype.canDrag = function canDrag() {
	    return true;
	  };

	  DragSource.prototype.isDragging = function isDragging(monitor, handle) {
	    return handle === monitor.getSourceId();
	  };

	  DragSource.prototype.endDrag = function endDrag() {};

	  return DragSource;
	})();

	exports["default"] = DragSource;
	module.exports = exports["default"];

/***/ },
/* 350 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DropTarget = (function () {
	  function DropTarget() {
	    _classCallCheck(this, DropTarget);
	  }

	  DropTarget.prototype.canDrop = function canDrop() {
	    return true;
	  };

	  DropTarget.prototype.hover = function hover() {};

	  DropTarget.prototype.drop = function drop() {};

	  return DropTarget;
	})();

	exports["default"] = DropTarget;
	module.exports = exports["default"];

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createBackend;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodashNoop = __webpack_require__(338);

	var _lodashNoop2 = _interopRequireDefault(_lodashNoop);

	var TestBackend = (function () {
	  function TestBackend(manager) {
	    _classCallCheck(this, TestBackend);

	    this.actions = manager.getActions();
	  }

	  TestBackend.prototype.setup = function setup() {
	    this.didCallSetup = true;
	  };

	  TestBackend.prototype.teardown = function teardown() {
	    this.didCallTeardown = true;
	  };

	  TestBackend.prototype.connectDragSource = function connectDragSource() {
	    return _lodashNoop2['default'];
	  };

	  TestBackend.prototype.connectDragPreview = function connectDragPreview() {
	    return _lodashNoop2['default'];
	  };

	  TestBackend.prototype.connectDropTarget = function connectDropTarget() {
	    return _lodashNoop2['default'];
	  };

	  TestBackend.prototype.simulateBeginDrag = function simulateBeginDrag(sourceIds, options) {
	    this.actions.beginDrag(sourceIds, options);
	  };

	  TestBackend.prototype.simulatePublishDragSource = function simulatePublishDragSource() {
	    this.actions.publishDragSource();
	  };

	  TestBackend.prototype.simulateHover = function simulateHover(targetIds, options) {
	    this.actions.hover(targetIds, options);
	  };

	  TestBackend.prototype.simulateDrop = function simulateDrop() {
	    this.actions.drop();
	  };

	  TestBackend.prototype.simulateEndDrag = function simulateEndDrag() {
	    this.actions.endDrag();
	  };

	  return TestBackend;
	})();

	function createBackend(manager) {
	  return new TestBackend(manager);
	}

	module.exports = exports['default'];

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = checkDecoratorArguments;

	function checkDecoratorArguments(functionName, signature) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    for (var i = 0; i < args.length; i++) {
	      var arg = args[i];
	      if (arg && arg.prototype && arg.prototype.render) {
	        console.error( // eslint-disable-line no-console
	        'You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
	        return;
	      }
	    }
	  }
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slice = Array.prototype.slice;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = DragLayer;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utilsShallowEqual = __webpack_require__(354);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsShallowEqualScalar = __webpack_require__(355);

	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

	var _lodashIsPlainObject = __webpack_require__(253);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _utilsCheckDecoratorArguments = __webpack_require__(352);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	function DragLayer(collect) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragLayer', 'collect[, options]'].concat(_slice.call(arguments)));
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer ' + 'to be a function that collects props to inject into the component. ', 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the second argument to DragLayer to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', options);

	  return function decorateLayer(DecoratedComponent) {
	    var _options$arePropsEqual = options.arePropsEqual;
	    var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;

	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	    return (function (_Component) {
	      _inherits(DragLayerContainer, _Component);

	      DragLayerContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };

	      DragLayerContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2['default'](nextState, this.state);
	      };

	      _createClass(DragLayerContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragLayer(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'contextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);

	      function DragLayerContainer(props, context) {
	        _classCallCheck(this, DragLayerContainer);

	        _Component.call(this, props);
	        this.handleChange = this.handleChange.bind(this);

	        this.manager = context.dragDropManager;
	        _invariant2['default'](typeof this.manager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

	        this.state = this.getCurrentState();
	      }

	      DragLayerContainer.prototype.componentDidMount = function componentDidMount() {
	        this.isCurrentlyMounted = true;

	        var monitor = this.manager.getMonitor();
	        this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
	        this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);

	        this.handleChange();
	      };

	      DragLayerContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.isCurrentlyMounted = false;

	        this.unsubscribeFromOffsetChange();
	        this.unsubscribeFromStateChange();
	      };

	      DragLayerContainer.prototype.handleChange = function handleChange() {
	        if (!this.isCurrentlyMounted) {
	          return;
	        }

	        var nextState = this.getCurrentState();
	        if (!_utilsShallowEqual2['default'](nextState, this.state)) {
	          this.setState(nextState);
	        }
	      };

	      DragLayerContainer.prototype.getCurrentState = function getCurrentState() {
	        var monitor = this.manager.getMonitor();
	        return collect(monitor);
	      };

	      DragLayerContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	          ref: 'child' }));
	      };

	      return DragLayerContainer;
	    })(_react.Component);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 354 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ },
/* 355 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shallowEqualScalar;

	function shallowEqualScalar(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i])) {
	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB || typeof valA === 'object' || typeof valB === 'object') {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DragSource;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(253);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _utilsCheckDecoratorArguments = __webpack_require__(352);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	var _decorateHandler = __webpack_require__(357);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerSource = __webpack_require__(363);

	var _registerSource2 = _interopRequireDefault(_registerSource);

	var _createSourceFactory = __webpack_require__(364);

	var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);

	var _createSourceMonitor = __webpack_require__(365);

	var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);

	var _createSourceConnector = __webpack_require__(366);

	var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);

	var _utilsIsValidType = __webpack_require__(370);

	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);

	function DragSource(type, spec, collect) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    _invariant2['default'](_utilsIsValidType2['default'](type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  _invariant2['default'](_lodashIsPlainObject2['default'](spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', spec);
	  var createSource = _createSourceFactory2['default'](spec);
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);

	  return function decorateSource(DecoratedComponent) {
	    return _decorateHandler2['default']({
	      connectBackend: function connectBackend(backend, sourceId) {
	        return backend.connectDragSource(sourceId);
	      },
	      containerDisplayName: 'DragSource',
	      createHandler: createSource,
	      registerHandler: _registerSource2['default'],
	      createMonitor: _createSourceMonitor2['default'],
	      createConnector: _createSourceConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = decorateHandler;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _disposables = __webpack_require__(358);

	var _utilsShallowEqual = __webpack_require__(354);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsShallowEqualScalar = __webpack_require__(355);

	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

	var _lodashIsPlainObject = __webpack_require__(253);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	function decorateHandler(_ref) {
	  var DecoratedComponent = _ref.DecoratedComponent;
	  var createHandler = _ref.createHandler;
	  var createMonitor = _ref.createMonitor;
	  var createConnector = _ref.createConnector;
	  var registerHandler = _ref.registerHandler;
	  var containerDisplayName = _ref.containerDisplayName;
	  var getType = _ref.getType;
	  var collect = _ref.collect;
	  var options = _ref.options;
	  var _options$arePropsEqual = options.arePropsEqual;
	  var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;

	  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	  return (function (_Component) {
	    _inherits(DragDropContainer, _Component);

	    DragDropContainer.prototype.getHandlerId = function getHandlerId() {
	      return this.handlerId;
	    };

	    DragDropContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	      return this.decoratedComponentInstance;
	    };

	    DragDropContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	      return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2['default'](nextState, this.state);
	    };

	    _createClass(DragDropContainer, null, [{
	      key: 'DecoratedComponent',
	      value: DecoratedComponent,
	      enumerable: true
	    }, {
	      key: 'displayName',
	      value: containerDisplayName + '(' + displayName + ')',
	      enumerable: true
	    }, {
	      key: 'contextTypes',
	      value: {
	        dragDropManager: _react.PropTypes.object.isRequired
	      },
	      enumerable: true
	    }]);

	    function DragDropContainer(props, context) {
	      _classCallCheck(this, DragDropContainer);

	      _Component.call(this, props, context);
	      this.handleChange = this.handleChange.bind(this);
	      this.handleChildRef = this.handleChildRef.bind(this);

	      _invariant2['default'](typeof this.context.dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

	      this.manager = this.context.dragDropManager;
	      this.handlerMonitor = createMonitor(this.manager);
	      this.handlerConnector = createConnector(this.manager.getBackend());
	      this.handler = createHandler(this.handlerMonitor);

	      this.disposable = new _disposables.SerialDisposable();
	      this.receiveProps(props);
	      this.state = this.getCurrentState();
	      this.dispose();
	    }

	    DragDropContainer.prototype.componentDidMount = function componentDidMount() {
	      this.isCurrentlyMounted = true;
	      this.disposable = new _disposables.SerialDisposable();
	      this.currentType = null;
	      this.receiveProps(this.props);
	      this.handleChange();
	    };

	    DragDropContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (!arePropsEqual(nextProps, this.props)) {
	        this.receiveProps(nextProps);
	        this.handleChange();
	      }
	    };

	    DragDropContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.dispose();
	      this.isCurrentlyMounted = false;
	    };

	    DragDropContainer.prototype.receiveProps = function receiveProps(props) {
	      this.handler.receiveProps(props);
	      this.receiveType(getType(props));
	    };

	    DragDropContainer.prototype.receiveType = function receiveType(type) {
	      if (type === this.currentType) {
	        return;
	      }

	      this.currentType = type;

	      var _registerHandler = registerHandler(type, this.handler, this.manager);

	      var handlerId = _registerHandler.handlerId;
	      var unregister = _registerHandler.unregister;

	      this.handlerId = handlerId;
	      this.handlerMonitor.receiveHandlerId(handlerId);
	      this.handlerConnector.receiveHandlerId(handlerId);

	      var globalMonitor = this.manager.getMonitor();
	      var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });

	      this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister)));
	    };

	    DragDropContainer.prototype.handleChange = function handleChange() {
	      if (!this.isCurrentlyMounted) {
	        return;
	      }

	      var nextState = this.getCurrentState();
	      if (!_utilsShallowEqual2['default'](nextState, this.state)) {
	        this.setState(nextState);
	      }
	    };

	    DragDropContainer.prototype.dispose = function dispose() {
	      this.disposable.dispose();
	      this.handlerConnector.receiveHandlerId(null);
	    };

	    DragDropContainer.prototype.handleChildRef = function handleChildRef(component) {
	      this.decoratedComponentInstance = component;
	      this.handler.receiveComponent(component);
	    };

	    DragDropContainer.prototype.getCurrentState = function getCurrentState() {
	      var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);

	      if (process.env.NODE_ENV !== 'production') {
	        _invariant2['default'](_lodashIsPlainObject2['default'](nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
	      }

	      return nextState;
	    };

	    DragDropContainer.prototype.render = function render() {
	      return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	        ref: this.handleChildRef }));
	    };

	    return DragDropContainer;
	  })(_react.Component);
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;

	var _isDisposable2 = __webpack_require__(359);

	var _isDisposable3 = _interopRequireWildcard(_isDisposable2);

	exports.isDisposable = _isDisposable3['default'];

	var _Disposable2 = __webpack_require__(360);

	var _Disposable3 = _interopRequireWildcard(_Disposable2);

	exports.Disposable = _Disposable3['default'];

	var _CompositeDisposable2 = __webpack_require__(361);

	var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);

	exports.CompositeDisposable = _CompositeDisposable3['default'];

	var _SerialDisposable2 = __webpack_require__(362);

	var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);

	exports.SerialDisposable = _SerialDisposable3['default'];

/***/ },
/* 359 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isDisposable;

	function isDisposable(obj) {
	  return Boolean(obj && typeof obj.dispose === 'function');
	}

	module.exports = exports['default'];

/***/ },
/* 360 */
/***/ function(module, exports) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.__esModule = true;
	var noop = function noop() {};

	/**
	 * The basic disposable.
	 */

	var Disposable = (function () {
	  function Disposable(action) {
	    _classCallCheck(this, Disposable);

	    this.isDisposed = false;
	    this.action = action || noop;
	  }

	  Disposable.prototype.dispose = function dispose() {
	    if (!this.isDisposed) {
	      this.action.call(null);
	      this.isDisposed = true;
	    }
	  };

	  _createClass(Disposable, null, [{
	    key: "empty",
	    enumerable: true,
	    value: { dispose: noop }
	  }]);

	  return Disposable;
	})();

	exports["default"] = Disposable;
	module.exports = exports["default"];

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(359);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

	/**
	 * Represents a group of disposable resources that are disposed together.
	 */

	var CompositeDisposable = (function () {
	  function CompositeDisposable() {
	    for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) {
	      disposables[_key] = arguments[_key];
	    }

	    _classCallCheck(this, CompositeDisposable);

	    if (Array.isArray(disposables[0]) && disposables.length === 1) {
	      disposables = disposables[0];
	    }

	    for (var i = 0; i < disposables.length; i++) {
	      if (!_isDisposable2['default'](disposables[i])) {
	        throw new Error('Expected a disposable');
	      }
	    }

	    this.disposables = disposables;
	    this.isDisposed = false;
	  }

	  /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Disposable} item Disposable to add.
	   */

	  CompositeDisposable.prototype.add = function add(item) {
	    if (this.isDisposed) {
	      item.dispose();
	    } else {
	      this.disposables.push(item);
	    }
	  };

	  /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Disposable} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */

	  CompositeDisposable.prototype.remove = function remove(item) {
	    if (this.isDisposed) {
	      return false;
	    }

	    var index = this.disposables.indexOf(item);
	    if (index === -1) {
	      return false;
	    }

	    this.disposables.splice(index, 1);
	    item.dispose();
	    return true;
	  };

	  /**
	   * Disposes all disposables in the group and removes them from the group.
	   */

	  CompositeDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    var len = this.disposables.length;
	    var currentDisposables = new Array(len);
	    for (var i = 0; i < len; i++) {
	      currentDisposables[i] = this.disposables[i];
	    }

	    this.isDisposed = true;
	    this.disposables = [];
	    this.length = 0;

	    for (var i = 0; i < len; i++) {
	      currentDisposables[i].dispose();
	    }
	  };

	  return CompositeDisposable;
	})();

	exports['default'] = CompositeDisposable;
	module.exports = exports['default'];

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(359);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

	var SerialDisposable = (function () {
	  function SerialDisposable() {
	    _classCallCheck(this, SerialDisposable);

	    this.isDisposed = false;
	    this.current = null;
	  }

	  /**
	   * Gets the underlying disposable.
	   * @return The underlying disposable.
	   */

	  SerialDisposable.prototype.getDisposable = function getDisposable() {
	    return this.current;
	  };

	  /**
	   * Sets the underlying disposable.
	   * @param {Disposable} value The new underlying disposable.
	   */

	  SerialDisposable.prototype.setDisposable = function setDisposable() {
	    var value = arguments[0] === undefined ? null : arguments[0];

	    if (value != null && !_isDisposable2['default'](value)) {
	      throw new Error('Expected either an empty value or a valid disposable');
	    }

	    var isDisposed = this.isDisposed;
	    var previous = undefined;

	    if (!isDisposed) {
	      previous = this.current;
	      this.current = value;
	    }

	    if (previous) {
	      previous.dispose();
	    }

	    if (isDisposed && value) {
	      value.dispose();
	    }
	  };

	  /**
	   * Disposes the underlying disposable as well as all future replacements.
	   */

	  SerialDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    this.isDisposed = true;
	    var previous = this.current;
	    this.current = null;

	    if (previous) {
	      previous.dispose();
	    }
	  };

	  return SerialDisposable;
	})();

	exports['default'] = SerialDisposable;
	module.exports = exports['default'];

/***/ },
/* 363 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = registerSource;

	function registerSource(type, source, manager) {
	  var registry = manager.getRegistry();
	  var sourceId = registry.addSource(type, source);

	  function unregisterSource() {
	    registry.removeSource(sourceId);
	  }

	  return {
	    handlerId: sourceId,
	    unregister: unregisterSource
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = createSourceFactory;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(253);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'canDrag', 'isDragging', 'endDrag'];
	var REQUIRED_SPEC_METHODS = ['beginDrag'];

	function createSourceFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    _invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });
	  REQUIRED_SPEC_METHODS.forEach(function (key) {
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });

	  var Source = (function () {
	    function Source(monitor) {
	      _classCallCheck(this, Source);

	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }

	    Source.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };

	    Source.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };

	    Source.prototype.canDrag = function canDrag() {
	      if (!spec.canDrag) {
	        return true;
	      }

	      return spec.canDrag(this.props, this.monitor);
	    };

	    Source.prototype.isDragging = function isDragging(globalMonitor, sourceId) {
	      if (!spec.isDragging) {
	        return sourceId === globalMonitor.getSourceId();
	      }

	      return spec.isDragging(this.props, this.monitor);
	    };

	    Source.prototype.beginDrag = function beginDrag() {
	      var item = spec.beginDrag(this.props, this.monitor, this.component);
	      if (process.env.NODE_ENV !== 'production') {
	        _invariant2['default'](_lodashIsPlainObject2['default'](item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', item);
	      }
	      return item;
	    };

	    Source.prototype.endDrag = function endDrag() {
	      if (!spec.endDrag) {
	        return;
	      }

	      spec.endDrag(this.props, this.monitor, this.component);
	    };

	    return Source;
	  })();

	  return function createSource(monitor) {
	    return new Source(monitor);
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createSourceMonitor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var isCallingCanDrag = false;
	var isCallingIsDragging = false;

	var SourceMonitor = (function () {
	  function SourceMonitor(manager) {
	    _classCallCheck(this, SourceMonitor);

	    this.internalMonitor = manager.getMonitor();
	  }

	  SourceMonitor.prototype.receiveHandlerId = function receiveHandlerId(sourceId) {
	    this.sourceId = sourceId;
	  };

	  SourceMonitor.prototype.canDrag = function canDrag() {
	    _invariant2['default'](!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');

	    try {
	      isCallingCanDrag = true;
	      return this.internalMonitor.canDragSource(this.sourceId);
	    } finally {
	      isCallingCanDrag = false;
	    }
	  };

	  SourceMonitor.prototype.isDragging = function isDragging() {
	    _invariant2['default'](!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');

	    try {
	      isCallingIsDragging = true;
	      return this.internalMonitor.isDraggingSource(this.sourceId);
	    } finally {
	      isCallingIsDragging = false;
	    }
	  };

	  SourceMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };

	  SourceMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };

	  SourceMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };

	  SourceMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };

	  SourceMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };

	  SourceMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };

	  SourceMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };

	  SourceMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };

	  SourceMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };

	  return SourceMonitor;
	})();

	function createSourceMonitor(manager) {
	  return new SourceMonitor(manager);
	}

	module.exports = exports['default'];

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createSourceConnector;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _wrapConnectorHooks = __webpack_require__(367);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(369);

	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

	function createSourceConnector(backend) {
	  var currentHandlerId = undefined;

	  var currentDragSourceNode = undefined;
	  var currentDragSourceOptions = undefined;
	  var disconnectCurrentDragSource = undefined;

	  var currentDragPreviewNode = undefined;
	  var currentDragPreviewOptions = undefined;
	  var disconnectCurrentDragPreview = undefined;

	  function reconnectDragSource() {
	    if (disconnectCurrentDragSource) {
	      disconnectCurrentDragSource();
	      disconnectCurrentDragSource = null;
	    }

	    if (currentHandlerId && currentDragSourceNode) {
	      disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
	    }
	  }

	  function reconnectDragPreview() {
	    if (disconnectCurrentDragPreview) {
	      disconnectCurrentDragPreview();
	      disconnectCurrentDragPreview = null;
	    }

	    if (currentHandlerId && currentDragPreviewNode) {
	      disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
	    }
	  }

	  function receiveHandlerId(handlerId) {
	    if (handlerId === currentHandlerId) {
	      return;
	    }

	    currentHandlerId = handlerId;
	    reconnectDragSource();
	    reconnectDragPreview();
	  }

	  var hooks = _wrapConnectorHooks2['default']({
	    dragSource: function connectDragSource(node, options) {
	      if (node === currentDragSourceNode && _areOptionsEqual2['default'](options, currentDragSourceOptions)) {
	        return;
	      }

	      currentDragSourceNode = node;
	      currentDragSourceOptions = options;

	      reconnectDragSource();
	    },

	    dragPreview: function connectDragPreview(node, options) {
	      if (node === currentDragPreviewNode && _areOptionsEqual2['default'](options, currentDragPreviewOptions)) {
	        return;
	      }

	      currentDragPreviewNode = node;
	      currentDragPreviewOptions = options;

	      reconnectDragPreview();
	    }
	  });

	  return {
	    receiveHandlerId: receiveHandlerId,
	    hooks: hooks
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = wrapConnectorHooks;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCloneWithRef = __webpack_require__(368);

	var _utilsCloneWithRef2 = _interopRequireDefault(_utilsCloneWithRef);

	var _react = __webpack_require__(2);

	function throwIfCompositeComponentElement(element) {
	  // Custom components can no longer be wrapped directly in React DnD 2.0
	  // so that we don't need to depend on findDOMNode() from react-dom.
	  if (typeof element.type === 'string') {
	    return;
	  }

	  var displayName = element.type.displayName || element.type.name || 'the component';

	  throw new Error('Only native element nodes can now be passed to React DnD connectors. ' + ('You can either wrap ' + displayName + ' into a <div>, or turn it into a ') + 'drag source or a drop target itself.');
	}

	function wrapHookToRecognizeElement(hook) {
	  return function () {
	    var elementOrNode = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var options = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    // When passed a node, call the hook straight away.
	    if (!_react.isValidElement(elementOrNode)) {
	      var node = elementOrNode;
	      hook(node, options);
	      return;
	    }

	    // If passed a ReactElement, clone it and attach this function as a ref.
	    // This helps us achieve a neat API where user doesn't even know that refs
	    // are being used under the hood.
	    var element = elementOrNode;
	    throwIfCompositeComponentElement(element);

	    // When no options are passed, use the hook directly
	    var ref = options ? function (node) {
	      return hook(node, options);
	    } : hook;

	    return _utilsCloneWithRef2['default'](element, ref);
	  };
	}

	function wrapConnectorHooks(hooks) {
	  var wrappedHooks = {};

	  Object.keys(hooks).forEach(function (key) {
	    var hook = hooks[key];
	    var wrappedHook = wrapHookToRecognizeElement(hook);
	    wrappedHooks[key] = function () {
	      return wrappedHook;
	    };
	  });

	  return wrappedHooks;
	}

	module.exports = exports['default'];

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = cloneWithRef;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	function cloneWithRef(element, newRef) {
	  var previousRef = element.ref;
	  _invariant2['default'](typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

	  if (!previousRef) {
	    // When there is no ref on the element, use the new ref directly
	    return _react.cloneElement(element, {
	      ref: newRef
	    });
	  }

	  return _react.cloneElement(element, {
	    ref: function ref(node) {
	      newRef(node);

	      if (previousRef) {
	        previousRef(node);
	      }
	    }
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = areOptionsEqual;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsShallowEqual = __webpack_require__(354);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	function areOptionsEqual(nextOptions, currentOptions) {
	  if (currentOptions === nextOptions) {
	    return true;
	  }

	  return currentOptions !== null && nextOptions !== null && _utilsShallowEqual2['default'](currentOptions, nextOptions);
	}

	module.exports = exports['default'];

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isValidType;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashIsArray = __webpack_require__(265);

	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

	function isValidType(type, allowArray) {
	       return typeof type === 'string' || typeof type === 'symbol' || allowArray && _lodashIsArray2['default'](type) && type.every(function (t) {
	              return isValidType(t, false);
	       });
	}

	module.exports = exports['default'];

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DropTarget;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(253);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _utilsCheckDecoratorArguments = __webpack_require__(352);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	var _decorateHandler = __webpack_require__(357);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerTarget = __webpack_require__(372);

	var _registerTarget2 = _interopRequireDefault(_registerTarget);

	var _createTargetFactory = __webpack_require__(373);

	var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);

	var _createTargetMonitor = __webpack_require__(374);

	var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);

	var _createTargetConnector = __webpack_require__(375);

	var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);

	var _utilsIsValidType = __webpack_require__(370);

	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);

	function DropTarget(type, spec, collect) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    _invariant2['default'](_utilsIsValidType2['default'](type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  _invariant2['default'](_lodashIsPlainObject2['default'](spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', spec);
	  var createTarget = _createTargetFactory2['default'](spec);
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);

	  return function decorateTarget(DecoratedComponent) {
	    return _decorateHandler2['default']({
	      connectBackend: function connectBackend(backend, targetId) {
	        return backend.connectDropTarget(targetId);
	      },
	      containerDisplayName: 'DropTarget',
	      createHandler: createTarget,
	      registerHandler: _registerTarget2['default'],
	      createMonitor: _createTargetMonitor2['default'],
	      createConnector: _createTargetConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 372 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = registerTarget;

	function registerTarget(type, target, manager) {
	  var registry = manager.getRegistry();
	  var targetId = registry.addTarget(type, target);

	  function unregisterTarget() {
	    registry.removeTarget(targetId);
	  }

	  return {
	    handlerId: targetId,
	    unregister: unregisterTarget
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = createTargetFactory;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(253);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

	function createTargetFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    _invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
	  });

	  var Target = (function () {
	    function Target(monitor) {
	      _classCallCheck(this, Target);

	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }

	    Target.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };

	    Target.prototype.receiveMonitor = function receiveMonitor(monitor) {
	      this.monitor = monitor;
	    };

	    Target.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };

	    Target.prototype.canDrop = function canDrop() {
	      if (!spec.canDrop) {
	        return true;
	      }

	      return spec.canDrop(this.props, this.monitor);
	    };

	    Target.prototype.hover = function hover() {
	      if (!spec.hover) {
	        return;
	      }

	      spec.hover(this.props, this.monitor, this.component);
	    };

	    Target.prototype.drop = function drop() {
	      if (!spec.drop) {
	        return;
	      }

	      var dropResult = spec.drop(this.props, this.monitor, this.component);
	      if (process.env.NODE_ENV !== 'production') {
	        _invariant2['default'](typeof dropResult === 'undefined' || _lodashIsPlainObject2['default'](dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', dropResult);
	      }
	      return dropResult;
	    };

	    return Target;
	  })();

	  return function createTarget(monitor) {
	    return new Target(monitor);
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createTargetMonitor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	var isCallingCanDrop = false;

	var TargetMonitor = (function () {
	  function TargetMonitor(manager) {
	    _classCallCheck(this, TargetMonitor);

	    this.internalMonitor = manager.getMonitor();
	  }

	  TargetMonitor.prototype.receiveHandlerId = function receiveHandlerId(targetId) {
	    this.targetId = targetId;
	  };

	  TargetMonitor.prototype.canDrop = function canDrop() {
	    _invariant2['default'](!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target-monitor.html');

	    try {
	      isCallingCanDrop = true;
	      return this.internalMonitor.canDropOnTarget(this.targetId);
	    } finally {
	      isCallingCanDrop = false;
	    }
	  };

	  TargetMonitor.prototype.isOver = function isOver(options) {
	    return this.internalMonitor.isOverTarget(this.targetId, options);
	  };

	  TargetMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };

	  TargetMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };

	  TargetMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };

	  TargetMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };

	  TargetMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };

	  TargetMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };

	  TargetMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };

	  TargetMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };

	  TargetMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };

	  return TargetMonitor;
	})();

	function createTargetMonitor(manager) {
	  return new TargetMonitor(manager);
	}

	module.exports = exports['default'];

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createTargetConnector;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _wrapConnectorHooks = __webpack_require__(367);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(369);

	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

	function createTargetConnector(backend) {
	  var currentHandlerId = undefined;

	  var currentDropTargetNode = undefined;
	  var currentDropTargetOptions = undefined;
	  var disconnectCurrentDropTarget = undefined;

	  function reconnectDropTarget() {
	    if (disconnectCurrentDropTarget) {
	      disconnectCurrentDropTarget();
	      disconnectCurrentDropTarget = null;
	    }

	    if (currentHandlerId && currentDropTargetNode) {
	      disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);
	    }
	  }

	  function receiveHandlerId(handlerId) {
	    if (handlerId === currentHandlerId) {
	      return;
	    }

	    currentHandlerId = handlerId;
	    reconnectDropTarget();
	  }

	  var hooks = _wrapConnectorHooks2['default']({
	    dropTarget: function connectDropTarget(node, options) {
	      if (node === currentDropTargetNode && _areOptionsEqual2['default'](options, currentDropTargetOptions)) {
	        return;
	      }

	      currentDropTargetNode = node;
	      currentDropTargetOptions = options;

	      reconnectDropTarget();
	    }
	  });

	  return {
	    receiveHandlerId: receiveHandlerId,
	    hooks: hooks
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createHTML5Backend;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _HTML5Backend = __webpack_require__(377);

	var _HTML5Backend2 = _interopRequireDefault(_HTML5Backend);

	var _getEmptyImage = __webpack_require__(480);

	var _getEmptyImage2 = _interopRequireDefault(_getEmptyImage);

	var _NativeTypes = __webpack_require__(479);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	exports.NativeTypes = NativeTypes;
	exports.getEmptyImage = _getEmptyImage2['default'];

	function createHTML5Backend(manager) {
	  return new _HTML5Backend2['default'](manager);
	}

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodashDefaults = __webpack_require__(378);

	var _lodashDefaults2 = _interopRequireDefault(_lodashDefaults);

	var _shallowEqual = __webpack_require__(425);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _EnterLeaveCounter = __webpack_require__(426);

	var _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter);

	var _BrowserDetector = __webpack_require__(474);

	var _OffsetUtils = __webpack_require__(476);

	var _NativeDragSources = __webpack_require__(478);

	var _NativeTypes = __webpack_require__(479);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	var HTML5Backend = (function () {
	  function HTML5Backend(manager) {
	    _classCallCheck(this, HTML5Backend);

	    this.actions = manager.getActions();
	    this.monitor = manager.getMonitor();
	    this.registry = manager.getRegistry();

	    this.sourcePreviewNodes = {};
	    this.sourcePreviewNodeOptions = {};
	    this.sourceNodes = {};
	    this.sourceNodeOptions = {};
	    this.enterLeaveCounter = new _EnterLeaveCounter2['default']();

	    this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
	    this.handleTopDragStart = this.handleTopDragStart.bind(this);
	    this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
	    this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
	    this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
	    this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
	    this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
	    this.handleTopDragOver = this.handleTopDragOver.bind(this);
	    this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
	    this.handleTopDrop = this.handleTopDrop.bind(this);
	    this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
	    this.handleSelectStart = this.handleSelectStart.bind(this);
	    this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
	    this.endDragNativeItem = this.endDragNativeItem.bind(this);
	  }

	  HTML5Backend.prototype.setup = function setup() {
	    if (typeof window === 'undefined') {
	      return;
	    }

	    if (this.constructor.isSetUp) {
	      throw new Error('Cannot have two HTML5 backends at the same time.');
	    }
	    this.constructor.isSetUp = true;
	    this.addEventListeners(window);
	  };

	  HTML5Backend.prototype.teardown = function teardown() {
	    if (typeof window === 'undefined') {
	      return;
	    }

	    this.constructor.isSetUp = false;
	    this.removeEventListeners(window);
	    this.clearCurrentDragSourceNode();
	  };

	  HTML5Backend.prototype.addEventListeners = function addEventListeners(target) {
	    target.addEventListener('dragstart', this.handleTopDragStart);
	    target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
	    target.addEventListener('dragend', this.handleTopDragEndCapture, true);
	    target.addEventListener('dragenter', this.handleTopDragEnter);
	    target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
	    target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
	    target.addEventListener('dragover', this.handleTopDragOver);
	    target.addEventListener('dragover', this.handleTopDragOverCapture, true);
	    target.addEventListener('drop', this.handleTopDrop);
	    target.addEventListener('drop', this.handleTopDropCapture, true);
	  };

	  HTML5Backend.prototype.removeEventListeners = function removeEventListeners(target) {
	    target.removeEventListener('dragstart', this.handleTopDragStart);
	    target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
	    target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
	    target.removeEventListener('dragenter', this.handleTopDragEnter);
	    target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
	    target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
	    target.removeEventListener('dragover', this.handleTopDragOver);
	    target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
	    target.removeEventListener('drop', this.handleTopDrop);
	    target.removeEventListener('drop', this.handleTopDropCapture, true);
	  };

	  HTML5Backend.prototype.connectDragPreview = function connectDragPreview(sourceId, node, options) {
	    var _this = this;

	    this.sourcePreviewNodeOptions[sourceId] = options;
	    this.sourcePreviewNodes[sourceId] = node;

	    return function () {
	      delete _this.sourcePreviewNodes[sourceId];
	      delete _this.sourcePreviewNodeOptions[sourceId];
	    };
	  };

	  HTML5Backend.prototype.connectDragSource = function connectDragSource(sourceId, node, options) {
	    var _this2 = this;

	    this.sourceNodes[sourceId] = node;
	    this.sourceNodeOptions[sourceId] = options;

	    var handleDragStart = function handleDragStart(e) {
	      return _this2.handleDragStart(e, sourceId);
	    };
	    var handleSelectStart = function handleSelectStart(e) {
	      return _this2.handleSelectStart(e, sourceId);
	    };

	    node.setAttribute('draggable', true);
	    node.addEventListener('dragstart', handleDragStart);
	    node.addEventListener('selectstart', handleSelectStart);

	    return function () {
	      delete _this2.sourceNodes[sourceId];
	      delete _this2.sourceNodeOptions[sourceId];

	      node.removeEventListener('dragstart', handleDragStart);
	      node.removeEventListener('selectstart', handleSelectStart);
	      node.setAttribute('draggable', false);
	    };
	  };

	  HTML5Backend.prototype.connectDropTarget = function connectDropTarget(targetId, node) {
	    var _this3 = this;

	    var handleDragEnter = function handleDragEnter(e) {
	      return _this3.handleDragEnter(e, targetId);
	    };
	    var handleDragOver = function handleDragOver(e) {
	      return _this3.handleDragOver(e, targetId);
	    };
	    var handleDrop = function handleDrop(e) {
	      return _this3.handleDrop(e, targetId);
	    };

	    node.addEventListener('dragenter', handleDragEnter);
	    node.addEventListener('dragover', handleDragOver);
	    node.addEventListener('drop', handleDrop);

	    return function () {
	      node.removeEventListener('dragenter', handleDragEnter);
	      node.removeEventListener('dragover', handleDragOver);
	      node.removeEventListener('drop', handleDrop);
	    };
	  };

	  HTML5Backend.prototype.getCurrentSourceNodeOptions = function getCurrentSourceNodeOptions() {
	    var sourceId = this.monitor.getSourceId();
	    var sourceNodeOptions = this.sourceNodeOptions[sourceId];

	    return _lodashDefaults2['default'](sourceNodeOptions || {}, {
	      dropEffect: 'move'
	    });
	  };

	  HTML5Backend.prototype.getCurrentDropEffect = function getCurrentDropEffect() {
	    if (this.isDraggingNativeItem()) {
	      // It makes more sense to default to 'copy' for native resources
	      return 'copy';
	    }

	    return this.getCurrentSourceNodeOptions().dropEffect;
	  };

	  HTML5Backend.prototype.getCurrentSourcePreviewNodeOptions = function getCurrentSourcePreviewNodeOptions() {
	    var sourceId = this.monitor.getSourceId();
	    var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions[sourceId];

	    return _lodashDefaults2['default'](sourcePreviewNodeOptions || {}, {
	      anchorX: 0.5,
	      anchorY: 0.5,
	      captureDraggingState: false
	    });
	  };

	  HTML5Backend.prototype.getSourceClientOffset = function getSourceClientOffset(sourceId) {
	    return _OffsetUtils.getNodeClientOffset(this.sourceNodes[sourceId]);
	  };

	  HTML5Backend.prototype.isDraggingNativeItem = function isDraggingNativeItem() {
	    var itemType = this.monitor.getItemType();
	    return Object.keys(NativeTypes).some(function (key) {
	      return NativeTypes[key] === itemType;
	    });
	  };

	  HTML5Backend.prototype.beginDragNativeItem = function beginDragNativeItem(type) {
	    this.clearCurrentDragSourceNode();

	    var SourceType = _NativeDragSources.createNativeDragSource(type);
	    this.currentNativeSource = new SourceType();
	    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
	    this.actions.beginDrag([this.currentNativeHandle]);

	    // On Firefox, if mousemove fires, the drag is over but browser failed to tell us.
	    // This is not true for other browsers.
	    if (_BrowserDetector.isFirefox()) {
	      window.addEventListener('mousemove', this.endDragNativeItem, true);
	    }
	  };

	  HTML5Backend.prototype.endDragNativeItem = function endDragNativeItem() {
	    if (!this.isDraggingNativeItem()) {
	      return;
	    }

	    if (_BrowserDetector.isFirefox()) {
	      window.removeEventListener('mousemove', this.endDragNativeItem, true);
	    }

	    this.actions.endDrag();
	    this.registry.removeSource(this.currentNativeHandle);
	    this.currentNativeHandle = null;
	    this.currentNativeSource = null;
	  };

	  HTML5Backend.prototype.endDragIfSourceWasRemovedFromDOM = function endDragIfSourceWasRemovedFromDOM() {
	    var node = this.currentDragSourceNode;
	    if (document.body.contains(node)) {
	      return;
	    }

	    if (this.clearCurrentDragSourceNode()) {
	      this.actions.endDrag();
	    }
	  };

	  HTML5Backend.prototype.setCurrentDragSourceNode = function setCurrentDragSourceNode(node) {
	    this.clearCurrentDragSourceNode();
	    this.currentDragSourceNode = node;
	    this.currentDragSourceNodeOffset = _OffsetUtils.getNodeClientOffset(node);
	    this.currentDragSourceNodeOffsetChanged = false;

	    // Receiving a mouse event in the middle of a dragging operation
	    // means it has ended and the drag source node disappeared from DOM,
	    // so the browser didn't dispatch the dragend event.
	    window.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
	  };

	  HTML5Backend.prototype.clearCurrentDragSourceNode = function clearCurrentDragSourceNode() {
	    if (this.currentDragSourceNode) {
	      this.currentDragSourceNode = null;
	      this.currentDragSourceNodeOffset = null;
	      this.currentDragSourceNodeOffsetChanged = false;
	      window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
	      return true;
	    }

	    return false;
	  };

	  HTML5Backend.prototype.checkIfCurrentDragSourceRectChanged = function checkIfCurrentDragSourceRectChanged() {
	    var node = this.currentDragSourceNode;
	    if (!node) {
	      return false;
	    }

	    if (this.currentDragSourceNodeOffsetChanged) {
	      return true;
	    }

	    this.currentDragSourceNodeOffsetChanged = !_shallowEqual2['default'](_OffsetUtils.getNodeClientOffset(node), this.currentDragSourceNodeOffset);

	    return this.currentDragSourceNodeOffsetChanged;
	  };

	  HTML5Backend.prototype.handleTopDragStartCapture = function handleTopDragStartCapture() {
	    this.clearCurrentDragSourceNode();
	    this.dragStartSourceIds = [];
	  };

	  HTML5Backend.prototype.handleDragStart = function handleDragStart(e, sourceId) {
	    this.dragStartSourceIds.unshift(sourceId);
	  };

	  HTML5Backend.prototype.handleTopDragStart = function handleTopDragStart(e) {
	    var _this4 = this;

	    var dragStartSourceIds = this.dragStartSourceIds;

	    this.dragStartSourceIds = null;

	    var clientOffset = _OffsetUtils.getEventClientOffset(e);

	    // Don't publish the source just yet (see why below)
	    this.actions.beginDrag(dragStartSourceIds, {
	      publishSource: false,
	      getSourceClientOffset: this.getSourceClientOffset,
	      clientOffset: clientOffset
	    });

	    var dataTransfer = e.dataTransfer;

	    var nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);

	    if (this.monitor.isDragging()) {
	      if (typeof dataTransfer.setDragImage === 'function') {
	        // Use custom drag image if user specifies it.
	        // If child drag source refuses drag but parent agrees,
	        // use parent's node as drag image. Neither works in IE though.
	        var sourceId = this.monitor.getSourceId();
	        var sourceNode = this.sourceNodes[sourceId];
	        var dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode;

	        var _getCurrentSourcePreviewNodeOptions = this.getCurrentSourcePreviewNodeOptions();

	        var anchorX = _getCurrentSourcePreviewNodeOptions.anchorX;
	        var anchorY = _getCurrentSourcePreviewNodeOptions.anchorY;

	        var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
	        var dragPreviewOffset = _OffsetUtils.getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint);
	        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
	      }

	      try {
	        // Firefox won't drag without setting data
	        dataTransfer.setData('application/json', {});
	      } catch (err) {}
	      // IE doesn't support MIME types in setData

	      // Store drag source node so we can check whether
	      // it is removed from DOM and trigger endDrag manually.
	      this.setCurrentDragSourceNode(e.target);

	      // Now we are ready to publish the drag source.. or are we not?

	      var _getCurrentSourcePreviewNodeOptions2 = this.getCurrentSourcePreviewNodeOptions();

	      var captureDraggingState = _getCurrentSourcePreviewNodeOptions2.captureDraggingState;

	      if (!captureDraggingState) {
	        // Usually we want to publish it in the next tick so that browser
	        // is able to screenshot the current (not yet dragging) state.
	        //
	        // It also neatly avoids a situation where render() returns null
	        // in the same tick for the source element, and browser freaks out.
	        setTimeout(function () {
	          return _this4.actions.publishDragSource();
	        });
	      } else {
	        // In some cases the user may want to override this behavior, e.g.
	        // to work around IE not supporting custom drag previews.
	        //
	        // When using a custom drag layer, the only way to prevent
	        // the default drag preview from drawing in IE is to screenshot
	        // the dragging state in which the node itself has zero opacity
	        // and height. In this case, though, returning null from render()
	        // will abruptly end the dragging, which is not obvious.
	        //
	        // This is the reason such behavior is strictly opt-in.
	        this.actions.publishDragSource();
	      }
	    } else if (nativeType) {
	      // A native item (such as URL) dragged from inside the document
	      this.beginDragNativeItem(nativeType);
	    } else if (!dataTransfer.types && (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
	      // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
	      // Just let it drag. It's a native type (URL or text) and will be picked up in dragenter handler.
	      return;
	    } else {
	      // If by this time no drag source reacted, tell browser not to drag.
	      e.preventDefault();
	    }
	  };

	  HTML5Backend.prototype.handleTopDragEndCapture = function handleTopDragEndCapture() {
	    if (this.clearCurrentDragSourceNode()) {
	      // Firefox can dispatch this event in an infinite loop
	      // if dragend handler does something like showing an alert.
	      // Only proceed if we have not handled it already.
	      this.actions.endDrag();
	    }
	  };

	  HTML5Backend.prototype.handleTopDragEnterCapture = function handleTopDragEnterCapture(e) {
	    this.dragEnterTargetIds = [];

	    var isFirstEnter = this.enterLeaveCounter.enter(e.target);
	    if (!isFirstEnter || this.monitor.isDragging()) {
	      return;
	    }

	    var dataTransfer = e.dataTransfer;

	    var nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);

	    if (nativeType) {
	      // A native item (such as file or URL) dragged from outside the document
	      this.beginDragNativeItem(nativeType);
	    }
	  };

	  HTML5Backend.prototype.handleDragEnter = function handleDragEnter(e, targetId) {
	    this.dragEnterTargetIds.unshift(targetId);
	  };

	  HTML5Backend.prototype.handleTopDragEnter = function handleTopDragEnter(e) {
	    var _this5 = this;

	    var dragEnterTargetIds = this.dragEnterTargetIds;

	    this.dragEnterTargetIds = [];

	    if (!this.monitor.isDragging()) {
	      // This is probably a native item type we don't understand.
	      return;
	    }

	    if (!_BrowserDetector.isFirefox()) {
	      // Don't emit hover in `dragenter` on Firefox due to an edge case.
	      // If the target changes position as the result of `dragenter`, Firefox
	      // will still happily dispatch `dragover` despite target being no longer
	      // there. The easy solution is to only fire `hover` in `dragover` on FF.
	      this.actions.hover(dragEnterTargetIds, {
	        clientOffset: _OffsetUtils.getEventClientOffset(e)
	      });
	    }

	    var canDrop = dragEnterTargetIds.some(function (targetId) {
	      return _this5.monitor.canDropOnTarget(targetId);
	    });

	    if (canDrop) {
	      // IE requires this to fire dragover events
	      e.preventDefault();
	      e.dataTransfer.dropEffect = this.getCurrentDropEffect();
	    }
	  };

	  HTML5Backend.prototype.handleTopDragOverCapture = function handleTopDragOverCapture() {
	    this.dragOverTargetIds = [];
	  };

	  HTML5Backend.prototype.handleDragOver = function handleDragOver(e, targetId) {
	    this.dragOverTargetIds.unshift(targetId);
	  };

	  HTML5Backend.prototype.handleTopDragOver = function handleTopDragOver(e) {
	    var _this6 = this;

	    var dragOverTargetIds = this.dragOverTargetIds;

	    this.dragOverTargetIds = [];

	    if (!this.monitor.isDragging()) {
	      // This is probably a native item type we don't understand.
	      // Prevent default "drop and blow away the whole document" action.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'none';
	      return;
	    }

	    this.actions.hover(dragOverTargetIds, {
	      clientOffset: _OffsetUtils.getEventClientOffset(e)
	    });

	    var canDrop = dragOverTargetIds.some(function (targetId) {
	      return _this6.monitor.canDropOnTarget(targetId);
	    });

	    if (canDrop) {
	      // Show user-specified drop effect.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = this.getCurrentDropEffect();
	    } else if (this.isDraggingNativeItem()) {
	      // Don't show a nice cursor but still prevent default
	      // "drop and blow away the whole document" action.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'none';
	    } else if (this.checkIfCurrentDragSourceRectChanged()) {
	      // Prevent animating to incorrect position.
	      // Drop effect must be other than 'none' to prevent animation.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'move';
	    }
	  };

	  HTML5Backend.prototype.handleTopDragLeaveCapture = function handleTopDragLeaveCapture(e) {
	    if (this.isDraggingNativeItem()) {
	      e.preventDefault();
	    }

	    var isLastLeave = this.enterLeaveCounter.leave(e.target);
	    if (!isLastLeave) {
	      return;
	    }

	    if (this.isDraggingNativeItem()) {
	      this.endDragNativeItem();
	    }
	  };

	  HTML5Backend.prototype.handleTopDropCapture = function handleTopDropCapture(e) {
	    this.dropTargetIds = [];
	    e.preventDefault();

	    if (this.isDraggingNativeItem()) {
	      this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
	    }

	    this.enterLeaveCounter.reset();
	  };

	  HTML5Backend.prototype.handleDrop = function handleDrop(e, targetId) {
	    this.dropTargetIds.unshift(targetId);
	  };

	  HTML5Backend.prototype.handleTopDrop = function handleTopDrop(e) {
	    var dropTargetIds = this.dropTargetIds;

	    this.dropTargetIds = [];

	    this.actions.hover(dropTargetIds, {
	      clientOffset: _OffsetUtils.getEventClientOffset(e)
	    });
	    this.actions.drop();

	    if (this.isDraggingNativeItem()) {
	      this.endDragNativeItem();
	    } else {
	      this.endDragIfSourceWasRemovedFromDOM();
	    }
	  };

	  HTML5Backend.prototype.handleSelectStart = function handleSelectStart(e) {
	    var target = e.target;

	    // Only IE requires us to explicitly say
	    // we want drag drop operation to start
	    if (typeof target.dragDrop !== 'function') {
	      return;
	    }

	    // Inputs and textareas should be selectable
	    if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
	      return;
	    }

	    // For other targets, ask IE
	    // to enable drag and drop
	    e.preventDefault();
	    target.dragDrop();
	  };

	  return HTML5Backend;
	})();

	exports['default'] = HTML5Backend;
	module.exports = exports['default'];

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(379),
	    assignInDefaults = __webpack_require__(380),
	    assignInWith = __webpack_require__(382),
	    baseRest = __webpack_require__(398);

	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaultsDeep
	 * @example
	 *
	 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var defaults = baseRest(function(args) {
	  args.push(undefined, assignInDefaults);
	  return apply(assignInWith, undefined, args);
	});

	module.exports = defaults;


/***/ },
/* 379 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(381);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used by `_.defaults` to customize its `_.assignIn` use.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
	function assignInDefaults(objValue, srcValue, key, object) {
	  if (objValue === undefined ||
	      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	    return srcValue;
	  }
	  return objValue;
	}

	module.exports = assignInDefaults;


/***/ },
/* 381 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(383),
	    createAssigner = __webpack_require__(397),
	    keysIn = __webpack_require__(409);

	/**
	 * This method is like `_.assignIn` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extendWith
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see _.assignWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return _.isUndefined(objValue) ? srcValue : objValue;
	 * }
	 *
	 * var defaults = _.partialRight(_.assignInWith, customizer);
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	  copyObject(source, keysIn(source), object, customizer);
	});

	module.exports = assignInWith;


/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(384),
	    baseAssignValue = __webpack_require__(385);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(385),
	    eq = __webpack_require__(381);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(386);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(387);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(388),
	    getValue = __webpack_require__(396);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(389),
	    isMasked = __webpack_require__(391),
	    isObject = __webpack_require__(390),
	    toSource = __webpack_require__(395);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(390);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 390 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(392);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(393);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(394);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 394 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 395 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 396 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(398),
	    isIterateeCall = __webpack_require__(405);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(399),
	    overRest = __webpack_require__(400),
	    setToString = __webpack_require__(401);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ },
/* 399 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(379);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(402),
	    shortOut = __webpack_require__(404);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(403),
	    defineProperty = __webpack_require__(386),
	    identity = __webpack_require__(399);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ },
/* 403 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 404 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 500,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(381),
	    isArrayLike = __webpack_require__(406),
	    isIndex = __webpack_require__(408),
	    isObject = __webpack_require__(390);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(389),
	    isLength = __webpack_require__(407);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 407 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 408 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(410),
	    baseKeysIn = __webpack_require__(422),
	    isArrayLike = __webpack_require__(406);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(411),
	    isArguments = __webpack_require__(412),
	    isArray = __webpack_require__(415),
	    isBuffer = __webpack_require__(416),
	    isIndex = __webpack_require__(408),
	    isTypedArray = __webpack_require__(418);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 411 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(413),
	    isObjectLike = __webpack_require__(414);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(414);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && objectToString.call(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 414 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 415 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(393),
	    stubFalse = __webpack_require__(417);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(259)(module)))

/***/ },
/* 417 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(419),
	    baseUnary = __webpack_require__(420),
	    nodeUtil = __webpack_require__(421);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(407),
	    isObjectLike = __webpack_require__(414);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 420 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(394);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(259)(module)))

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(390),
	    isPrototype = __webpack_require__(423),
	    nativeKeysIn = __webpack_require__(424);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ },
/* 423 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 424 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ },
/* 425 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodashUnion = __webpack_require__(427);

	var _lodashUnion2 = _interopRequireDefault(_lodashUnion);

	var _lodashWithout = __webpack_require__(471);

	var _lodashWithout2 = _interopRequireDefault(_lodashWithout);

	var EnterLeaveCounter = (function () {
	  function EnterLeaveCounter() {
	    _classCallCheck(this, EnterLeaveCounter);

	    this.entered = [];
	  }

	  EnterLeaveCounter.prototype.enter = function enter(enteringNode) {
	    var previousLength = this.entered.length;

	    this.entered = _lodashUnion2['default'](this.entered.filter(function (node) {
	      return document.documentElement.contains(node) && (!node.contains || node.contains(enteringNode));
	    }), [enteringNode]);

	    return previousLength === 0 && this.entered.length > 0;
	  };

	  EnterLeaveCounter.prototype.leave = function leave(leavingNode) {
	    var previousLength = this.entered.length;

	    this.entered = _lodashWithout2['default'](this.entered.filter(function (node) {
	      return document.documentElement.contains(node);
	    }), leavingNode);

	    return previousLength > 0 && this.entered.length === 0;
	  };

	  EnterLeaveCounter.prototype.reset = function reset() {
	    this.entered = [];
	  };

	  return EnterLeaveCounter;
	})();

	exports['default'] = EnterLeaveCounter;
	module.exports = exports['default'];

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(428),
	    baseRest = __webpack_require__(398),
	    baseUniq = __webpack_require__(432),
	    isArrayLikeObject = __webpack_require__(470);

	/**
	 * Creates an array of unique values, in order, from all given arrays using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([2], [1, 2]);
	 * // => [2, 1]
	 */
	var union = baseRest(function(arrays) {
	  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	});

	module.exports = union;


/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(429),
	    isFlattenable = __webpack_require__(430);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 429 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(431),
	    isArguments = __webpack_require__(412),
	    isArray = __webpack_require__(415);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(393);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(433),
	    arrayIncludes = __webpack_require__(459),
	    arrayIncludesWith = __webpack_require__(464),
	    cacheHas = __webpack_require__(465),
	    createSet = __webpack_require__(466),
	    setToArray = __webpack_require__(469);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(434),
	    setCacheAdd = __webpack_require__(457),
	    setCacheHas = __webpack_require__(458);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(435),
	    mapCacheDelete = __webpack_require__(451),
	    mapCacheGet = __webpack_require__(454),
	    mapCacheHas = __webpack_require__(455),
	    mapCacheSet = __webpack_require__(456);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(436),
	    ListCache = __webpack_require__(443),
	    Map = __webpack_require__(450);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(437),
	    hashDelete = __webpack_require__(439),
	    hashGet = __webpack_require__(440),
	    hashHas = __webpack_require__(441),
	    hashSet = __webpack_require__(442);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(438);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(387);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 439 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(438);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(438);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(438);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(444),
	    listCacheDelete = __webpack_require__(445),
	    listCacheGet = __webpack_require__(447),
	    listCacheHas = __webpack_require__(448),
	    listCacheSet = __webpack_require__(449);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 444 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(446);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(381);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(446);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(446);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(446);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(387),
	    root = __webpack_require__(393);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(452);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(453);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 453 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(452);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(452);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(452);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 457 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 458 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(460);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(461),
	    baseIsNaN = __webpack_require__(462),
	    strictIndexOf = __webpack_require__(463);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ },
/* 461 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 462 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ },
/* 463 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;


/***/ },
/* 464 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 465 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(467),
	    noop = __webpack_require__(468),
	    setToArray = __webpack_require__(469);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};

	module.exports = createSet;


/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(387),
	    root = __webpack_require__(393);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 468 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 469 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(406),
	    isObjectLike = __webpack_require__(414);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(472),
	    baseRest = __webpack_require__(398),
	    isArrayLikeObject = __webpack_require__(470);

	/**
	 * Creates an array excluding all given values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.pull`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.xor
	 * @example
	 *
	 * _.without([2, 1, 2, 3], 1, 2);
	 * // => [3]
	 */
	var without = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, values)
	    : [];
	});

	module.exports = without;


/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(433),
	    arrayIncludes = __webpack_require__(459),
	    arrayIncludesWith = __webpack_require__(464),
	    arrayMap = __webpack_require__(473),
	    baseUnary = __webpack_require__(420),
	    cacheHas = __webpack_require__(465);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 473 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashMemoize = __webpack_require__(475);

	var _lodashMemoize2 = _interopRequireDefault(_lodashMemoize);

	var isFirefox = _lodashMemoize2['default'](function () {
	  return (/firefox/i.test(navigator.userAgent)
	  );
	});

	exports.isFirefox = isFirefox;
	var isSafari = _lodashMemoize2['default'](function () {
	  return Boolean(window.safari);
	});
	exports.isSafari = isSafari;

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(434);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getNodeClientOffset = getNodeClientOffset;
	exports.getEventClientOffset = getEventClientOffset;
	exports.getDragPreviewOffset = getDragPreviewOffset;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _BrowserDetector = __webpack_require__(474);

	var _MonotonicInterpolant = __webpack_require__(477);

	var _MonotonicInterpolant2 = _interopRequireDefault(_MonotonicInterpolant);

	var ELEMENT_NODE = 1;

	function getNodeClientOffset(node) {
	  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

	  if (!el) {
	    return null;
	  }

	  var _el$getBoundingClientRect = el.getBoundingClientRect();

	  var top = _el$getBoundingClientRect.top;
	  var left = _el$getBoundingClientRect.left;

	  return { x: left, y: top };
	}

	function getEventClientOffset(e) {
	  return {
	    x: e.clientX,
	    y: e.clientY
	  };
	}

	function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint) {
	  // The browsers will use the image intrinsic size under different conditions.
	  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
	  var isImage = dragPreview.nodeName === 'IMG' && (_BrowserDetector.isFirefox() || !document.documentElement.contains(dragPreview));
	  var dragPreviewNode = isImage ? sourceNode : dragPreview;

	  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
	  var offsetFromDragPreview = {
	    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
	    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
	  };

	  var sourceWidth = sourceNode.offsetWidth;
	  var sourceHeight = sourceNode.offsetHeight;
	  var anchorX = anchorPoint.anchorX;
	  var anchorY = anchorPoint.anchorY;

	  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
	  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;

	  // Work around @2x coordinate discrepancies in browsers
	  if (_BrowserDetector.isSafari() && isImage) {
	    dragPreviewHeight /= window.devicePixelRatio;
	    dragPreviewWidth /= window.devicePixelRatio;
	  } else if (_BrowserDetector.isFirefox() && !isImage) {
	    dragPreviewHeight *= window.devicePixelRatio;
	    dragPreviewWidth *= window.devicePixelRatio;
	  }

	  // Interpolate coordinates depending on anchor point
	  // If you know a simpler way to do this, let me know
	  var interpolantX = new _MonotonicInterpolant2['default']([0, 0.5, 1], [
	  // Dock to the left
	  offsetFromDragPreview.x,
	  // Align at the center
	  offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
	  // Dock to the right
	  offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
	  var interpolantY = new _MonotonicInterpolant2['default']([0, 0.5, 1], [
	  // Dock to the top
	  offsetFromDragPreview.y,
	  // Align at the center
	  offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
	  // Dock to the bottom
	  offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
	  var x = interpolantX.interpolate(anchorX);
	  var y = interpolantY.interpolate(anchorY);

	  // Work around Safari 8 positioning bug
	  if (_BrowserDetector.isSafari() && isImage) {
	    // We'll have to wait for @3x to see if this is entirely correct
	    y += (window.devicePixelRatio - 1) * dragPreviewHeight;
	  }

	  return { x: x, y: y };
	}

/***/ },
/* 477 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MonotonicInterpolant = (function () {
	  function MonotonicInterpolant(xs, ys) {
	    _classCallCheck(this, MonotonicInterpolant);

	    var length = xs.length;

	    // Rearrange xs and ys so that xs is sorted
	    var indexes = [];
	    for (var i = 0; i < length; i++) {
	      indexes.push(i);
	    }
	    indexes.sort(function (a, b) {
	      return xs[a] < xs[b] ? -1 : 1;
	    });

	    // Get consecutive differences and slopes
	    var dys = [];
	    var dxs = [];
	    var ms = [];
	    var dx = undefined;
	    var dy = undefined;
	    for (var i = 0; i < length - 1; i++) {
	      dx = xs[i + 1] - xs[i];
	      dy = ys[i + 1] - ys[i];
	      dxs.push(dx);
	      dys.push(dy);
	      ms.push(dy / dx);
	    }

	    // Get degree-1 coefficients
	    var c1s = [ms[0]];
	    for (var i = 0; i < dxs.length - 1; i++) {
	      var _m = ms[i];
	      var mNext = ms[i + 1];
	      if (_m * mNext <= 0) {
	        c1s.push(0);
	      } else {
	        dx = dxs[i];
	        var dxNext = dxs[i + 1];
	        var common = dx + dxNext;
	        c1s.push(3 * common / ((common + dxNext) / _m + (common + dx) / mNext));
	      }
	    }
	    c1s.push(ms[ms.length - 1]);

	    // Get degree-2 and degree-3 coefficients
	    var c2s = [];
	    var c3s = [];
	    var m = undefined;
	    for (var i = 0; i < c1s.length - 1; i++) {
	      m = ms[i];
	      var c1 = c1s[i];
	      var invDx = 1 / dxs[i];
	      var common = c1 + c1s[i + 1] - m - m;
	      c2s.push((m - c1 - common) * invDx);
	      c3s.push(common * invDx * invDx);
	    }

	    this.xs = xs;
	    this.ys = ys;
	    this.c1s = c1s;
	    this.c2s = c2s;
	    this.c3s = c3s;
	  }

	  MonotonicInterpolant.prototype.interpolate = function interpolate(x) {
	    var xs = this.xs;
	    var ys = this.ys;
	    var c1s = this.c1s;
	    var c2s = this.c2s;
	    var c3s = this.c3s;

	    // The rightmost point in the dataset should give an exact result
	    var i = xs.length - 1;
	    if (x === xs[i]) {
	      return ys[i];
	    }

	    // Search for the interval x is in, returning the corresponding y if x is one of the original xs
	    var low = 0;
	    var high = c3s.length - 1;
	    var mid = undefined;
	    while (low <= high) {
	      mid = Math.floor(0.5 * (low + high));
	      var xHere = xs[mid];
	      if (xHere < x) {
	        low = mid + 1;
	      } else if (xHere > x) {
	        high = mid - 1;
	      } else {
	        return ys[mid];
	      }
	    }
	    i = Math.max(0, high);

	    // Interpolate
	    var diff = x - xs[i];
	    var diffSq = diff * diff;
	    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
	  };

	  return MonotonicInterpolant;
	})();

	exports["default"] = MonotonicInterpolant;
	module.exports = exports["default"];

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _nativeTypesConfig;

	exports.createNativeDragSource = createNativeDragSource;
	exports.matchNativeItemType = matchNativeItemType;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _NativeTypes = __webpack_require__(479);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
	  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
	    return resultSoFar || dataTransfer.getData(typeToTry);
	  }, null);

	  return result != null ? // eslint-disable-line eqeqeq
	  result : defaultValue;
	}

	var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, NativeTypes.FILE, {
	  exposeProperty: 'files',
	  matchesTypes: ['Files'],
	  getData: function getData(dataTransfer) {
	    return Array.prototype.slice.call(dataTransfer.files);
	  }
	}), _defineProperty(_nativeTypesConfig, NativeTypes.URL, {
	  exposeProperty: 'urls',
	  matchesTypes: ['Url', 'text/uri-list'],
	  getData: function getData(dataTransfer, matchesTypes) {
	    return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
	  }
	}), _defineProperty(_nativeTypesConfig, NativeTypes.TEXT, {
	  exposeProperty: 'text',
	  matchesTypes: ['Text', 'text/plain'],
	  getData: function getData(dataTransfer, matchesTypes) {
	    return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
	  }
	}), _nativeTypesConfig);

	function createNativeDragSource(type) {
	  var _nativeTypesConfig$type = nativeTypesConfig[type];
	  var exposeProperty = _nativeTypesConfig$type.exposeProperty;
	  var matchesTypes = _nativeTypesConfig$type.matchesTypes;
	  var getData = _nativeTypesConfig$type.getData;

	  return (function () {
	    function NativeDragSource() {
	      _classCallCheck(this, NativeDragSource);

	      this.item = Object.defineProperties({}, _defineProperty({}, exposeProperty, {
	        get: function get() {
	          console.warn( // eslint-disable-line no-console
	          'Browser doesn\'t allow reading "' + exposeProperty + '" until the drop event.');
	          return null;
	        },
	        configurable: true,
	        enumerable: true
	      }));
	    }

	    NativeDragSource.prototype.mutateItemByReadingDataTransfer = function mutateItemByReadingDataTransfer(dataTransfer) {
	      delete this.item[exposeProperty];
	      this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
	    };

	    NativeDragSource.prototype.canDrag = function canDrag() {
	      return true;
	    };

	    NativeDragSource.prototype.beginDrag = function beginDrag() {
	      return this.item;
	    };

	    NativeDragSource.prototype.isDragging = function isDragging(monitor, handle) {
	      return handle === monitor.getSourceId();
	    };

	    NativeDragSource.prototype.endDrag = function endDrag() {};

	    return NativeDragSource;
	  })();
	}

	function matchNativeItemType(dataTransfer) {
	  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);

	  return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
	    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;

	    return matchesTypes.some(function (t) {
	      return dataTransferTypes.indexOf(t) > -1;
	    });
	  })[0] || null;
	}

/***/ },
/* 479 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var FILE = '__NATIVE_FILE__';
	exports.FILE = FILE;
	var URL = '__NATIVE_URL__';
	exports.URL = URL;
	var TEXT = '__NATIVE_TEXT__';
	exports.TEXT = TEXT;

/***/ },
/* 480 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = getEmptyImage;
	var emptyImage = undefined;

	function getEmptyImage() {
	  if (!emptyImage) {
	    emptyImage = new Image();
	    emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
	  }

	  return emptyImage;
	}

	module.exports = exports['default'];

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var maybeScrollSuggestionIntoView = function maybeScrollSuggestionIntoView(suggestionEl, suggestionsContainer) {
	  var containerHeight = suggestionsContainer.offsetHeight;
	  var suggestionHeight = suggestionEl.offsetHeight;
	  var relativeSuggestionTop = suggestionEl.offsetTop - suggestionsContainer.scrollTop;

	  if (relativeSuggestionTop + suggestionHeight >= containerHeight) {
	    suggestionsContainer.scrollTop += relativeSuggestionTop - containerHeight + suggestionHeight;
	  } else if (relativeSuggestionTop < 0) {
	    suggestionsContainer.scrollTop += relativeSuggestionTop;
	  }
	};

	var Suggestions = function (_Component) {
	  _inherits(Suggestions, _Component);

	  function Suggestions() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Suggestions);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Suggestions)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.componentDidUpdate = function (prevProps) {
	      var suggestionsContainer = _this.refs.suggestionsContainer;
	      if (suggestionsContainer && prevProps.selectedIndex !== _this.props.selectedIndex) {
	        var activeSuggestion = suggestionsContainer.querySelector('.active');

	        if (activeSuggestion) {
	          maybeScrollSuggestionIntoView(activeSuggestion, suggestionsContainer);
	        }
	      }
	    }, _this.markIt = function (input, query) {
	      var escapedRegex = query.trim().replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
	      return {
	        __html: input.replace(RegExp(escapedRegex, "gi"), "<mark>$&</mark>")
	      };
	    }, _this.shouldRenderSuggestions = function (query) {
	      var _this2 = _this;
	      var props = _this2.props;

	      var minQueryLength = props.minQueryLength || 2;
	      return props.query.length >= minQueryLength;
	    }, _this.render = function () {
	      var _this3 = _this;
	      var props = _this3.props;

	      var suggestions = props.suggestions.map(function (item, i) {
	        return _react2.default.createElement(
	          'li',
	          { key: i,
	            onMouseDown: props.handleClick.bind(null, i),
	            onMouseOver: props.handleHover.bind(null, i),
	            className: i == props.selectedIndex ? "active" : "" },
	          _react2.default.createElement('span', { dangerouslySetInnerHTML: this.markIt(item, props.query) })
	        );
	      }.bind(_this));

	      // use the override, if provided
	      var shouldRenderSuggestions = props.shouldRenderSuggestions || _this.shouldRenderSuggestions;
	      if (suggestions.length === 0 || !shouldRenderSuggestions(props.query)) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'div',
	        { ref: 'suggestionsContainer', className: _this.props.classNames.suggestions },
	        _react2.default.createElement(
	          'ul',
	          null,
	          ' ',
	          suggestions,
	          ' '
	        )
	      );
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  return Suggestions;
	}(_react.Component);

	Suggestions.propTypes = {
	  query: _react2.default.PropTypes.string.isRequired,
	  selectedIndex: _react2.default.PropTypes.number.isRequired,
	  suggestions: _react2.default.PropTypes.array.isRequired,
	  handleClick: _react2.default.PropTypes.func.isRequired,
	  handleHover: _react2.default.PropTypes.func.isRequired,
	  minQueryLength: _react2.default.PropTypes.number,
	  shouldRenderSuggestions: _react2.default.PropTypes.func,
	  classNames: _react2.default.PropTypes.object
	};
	exports.default = Suggestions;

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDnd = __webpack_require__(248);

	var _lodash = __webpack_require__(483);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ItemTypes = { TAG: 'tag' };

	var tagSource = {
	  beginDrag: function beginDrag(props) {
	    return { id: props.tag.id };
	  },
	  canDrag: function canDrag(props) {
	    return props.moveTag && !props.readOnly;
	  }
	};

	var tagTarget = {
	  hover: function hover(props, monitor) {
	    var draggedId = monitor.getItem().id;
	    if (draggedId !== props.id) {
	      props.moveTag(draggedId, props.tag.id);
	    }
	  },
	  canDrop: function canDrop(props) {
	    return !props.readOnly;
	  }
	};

	var dragSource = function dragSource(connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging()
	  };
	};

	var dropCollect = function dropCollect(connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget()
	  };
	};

	var Tag = function (_Component) {
	  _inherits(Tag, _Component);

	  function Tag() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Tag);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Tag)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.render = function () {
	      var _this2 = _this;
	      var props = _this2.props;

	      var label = props.tag[props.labelField];
	      var connectDragSource = props.connectDragSource;
	      var isDragging = props.isDragging;
	      var connectDropTarget = props.connectDropTarget;
	      var readOnly = props.readOnly;

	      var CustomRemoveComponent = props.removeComponent;
	      var RemoveComponent = _react2.default.createClass({
	        displayName: 'RemoveComponent',
	        render: function render() {
	          if (readOnly) {
	            return _react2.default.createElement('span', null);
	          }
	          if (CustomRemoveComponent) {
	            return _react2.default.createElement(CustomRemoveComponent, this.props);
	          }
	          return _react2.default.createElement(
	            'a',
	            this.props,
	            String.fromCharCode(215)
	          );
	        }
	      });
	      var tagComponent = _react2.default.createElement(
	        'span',
	        { style: { opacity: isDragging ? 0 : 1 }, className: props.classNames.tag },
	        label,
	        _react2.default.createElement(RemoveComponent, { className: props.classNames.remove, onClick: props.onDelete })
	      );
	      return connectDragSource(connectDropTarget(tagComponent));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  return Tag;
	}(_react.Component);

	Tag.propTypes = {
	  labelField: _react2.default.PropTypes.string,
	  onDelete: _react2.default.PropTypes.func.isRequired,
	  tag: _react2.default.PropTypes.object.isRequired,
	  moveTag: _react2.default.PropTypes.func,
	  removeComponent: _react2.default.PropTypes.func,
	  classNames: _react2.default.PropTypes.object,
	  readOnly: _react2.default.PropTypes.bool,
	  connectDragSource: _react2.default.PropTypes.func.isRequired,
	  isDragging: _react2.default.PropTypes.bool.isRequired,
	  connectDropTarget: _react2.default.PropTypes.func.isRequired
	};
	Tag.defaultProps = {
	  labelField: 'text',
	  readOnly: false
	};
	exports.default = (0, _lodash2.default)((0, _reactDnd.DragSource)(ItemTypes.TAG, tagSource, dragSource), (0, _reactDnd.DropTarget)(ItemTypes.TAG, tagTarget, dropCollect))(Tag);

/***/ },
/* 483 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var Symbol = root.Symbol,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Creates a `_.flow` or `_.flowRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new flow function.
	 */
	function createFlow(fromRight) {
	  return baseRest(function(funcs) {
	    funcs = baseFlatten(funcs, 1);

	    var length = funcs.length,
	        index = length;

	    if (fromRight) {
	      funcs.reverse();
	    }
	    while (index--) {
	      if (typeof funcs[index] != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	    }
	    return function() {
	      var index = 0,
	          result = length ? funcs[index].apply(this, arguments) : arguments[0];

	      while (++index < length) {
	        result = funcs[index].call(this, result);
	      }
	      return result;
	    };
	  });
	}

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Creates a function that returns the result of invoking the given functions
	 * with the `this` binding of the created function, where each successive
	 * invocation is supplied the return value of the previous.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Util
	 * @param {...(Function|Function[])} [funcs] The functions to invoke.
	 * @returns {Function} Returns the new composite function.
	 * @see _.flowRight
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var addSquare = _.flow([_.add, square]);
	 * addSquare(1, 2);
	 * // => 9
	 */
	var flow = createFlow();

	module.exports = flow;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 484 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {

	    roadshow: 0,

	    setRoadshowId: function setRoadshowId(id) {
	        this.roadshow = id;
	    },

	    getRoadshowId: function getRoadshowId() {
	        return this.roadshow;
	    }

	};

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var URL = __webpack_require__(104);
	var Ajax = __webpack_require__(105);
	var AutoComplete = __webpack_require__(106);

	var Profile = React.createClass({
	  displayName: 'Profile',

	  componentDidMount: function componentDidMount() {
	    $("#profile-edit").on("click", function () {
	      $("#profile-modal").modal('show');
	    });
	    var frm = $("#profile");
	    var data = JSON.parse(localStorage.getItem("/g60up_$1"));
	    for (var i in data.user) {
	      frm.find('[name="' + i + '"]').val(data[i]);
	    }
	  },

	  render: function render() {
	    return React.createElement('div', { id: 'profile-modal', className: 'modal right fade',
	      role: 'dialog' }, React.createElement('div', { className: 'modal-dialog' }, React.createElement('div', { className: 'modal-content' }, React.createElement('div', { className: 'modal-header' }, React.createElement('button', { type: 'button', className: 'close',
	      'data-dismiss': 'modal' }, '×'), React.createElement('h4', { className: 'modal-title' }, 'Profile')), React.createElement('div', { className: 'modal-body add-details' }, React.createElement('div', { className: 'row' }, React.createElement('form', { id: 'profile' }, React.createElement('div', { className: 'col-md-12' }, React.createElement('div', { className: 'input-field' }, React.createElement('input', { id: 'username', name: 'username', type: 'text', className: 'md-input', value: 'some', disabled: true }), React.createElement('label', { htmlFor: 'username' }, 'Username'))), React.createElement('div', { className: 'col-md-12' }, React.createElement('div', { className: 'input-field' }, React.createElement('input', { id: 'email', name: 'email', type: 'text', className: 'md-input', value: 'some', disabled: true }), React.createElement('label', { htmlFor: 'email' }, 'Email'))), React.createElement('div', { className: 'col-md-12' }, React.createElement('div', { className: 'input-field' }, React.createElement('input', { id: 'first_name', name: 'first_name', type: 'text', className: 'md-input', value: 'some', disabled: true }), React.createElement('label', { htmlFor: 'first_name' }, 'First Name')))))))));
	  }
	});

	var validateModal = function validateModal(callback) {

	  $("#change-password").validate({
	    rules: {
	      current_password: "required",
	      password1: {
	        required: true,
	        minlength: 5
	      },
	      password2: {
	        required: true,
	        minlength: 5,
	        equalTo: "#password1"
	      }

	    },
	    messages: {
	      current_password: "Required",
	      password1: {
	        required: "Password Required",
	        minlength: "Password Must be 5 character in length"
	      },
	      password2: {
	        required: "Password Required",
	        equalTo: "Password Not Match",
	        minlength: "Password Must be 5 character in length"
	      }

	    },
	    submitHandler: function submitHandler(form) {
	      callback();
	    }
	  });
	};

	module.exports = Profile;

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);

	var Loader = React.createClass({
	  displayName: "Loader",

	  render: function render() {
	    return React.createElement("div", { className: "loader-custom preloader-wrapper small active",
	      id: "loader-custom" }, React.createElement("div", { className: "spinner-layer spinner-green-only" }, React.createElement("div", { className: "circle-clipper left" }, React.createElement("div", { className: "circle" })), React.createElement("div", { className: "gap-patch" }, React.createElement("div", { className: "circle" })), React.createElement("div", { className: "circle-clipper right" }, React.createElement("div", { className: "circle" }))));
	  }
	});

	module.exports = Loader;

/***/ }
]))