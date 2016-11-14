var React  = require('react');
var MeetingMode = require('./meeting.mode.js');
var URL  = require('./../constants.js');
var Ajax = require('./ajax.helpers.js');

var MeetingPersonMode = React.createClass({

   getInitialState : function() {
        return {
         users : [],
         meetingModes:[],
         usersWithModes : []
        }
    },

    validateUsersWithMode : function(data) {
        var _usersWithModes = this.state.usersWithModes;
        var flag = false;
        if(_usersWithModes.length <=0) {
            flag = true;
        }else {
            for(var i in _usersWithModes) {
                if(_usersWithModes[i].user_id == data.user_id) {
                    _usersWithModes.splice(i, 1)
                    flag = true;
                }else {
                    flag = true;
                }
            }
        }
        if(flag) {
            _usersWithModes.push(data);
            this.setState({
                usersWithModes : _usersWithModes
            })
        }

        this.props.callback(this.state.usersWithModes)
    },

    setValueUsersWithMode : function(data) {
        this.setState({
            usersWithModes : data
        })
    },

    getUsersDetails : function(user) {
         var _users = URL.users
         var _this = this;
         var temp_users="";
         var data = user
         for(var i in data) {
            temp_users += data[i].user_id+","
         }
         temp_users = temp_users.replace(/,\s*$/, "");
         _users = _users+temp_users;
         var usersObject = Ajax.getCall(_users);
         usersObject.done(function(data) {
            var usersList = []
            for(var i in data) {
                var temp = {id : data[i].id, text : data[i].name}
                usersList.push(temp);
            }
            _this.setState({
                users : usersList
            })

        });
    },

    componentDidMount : function() {
         var _this = this
         var meeting_mode = Ajax.getCall(URL.meeting_modes);
          meeting_mode.done(function(data){
            _this.setState({
                meetingModes : data
            })
        });
    },

    componentWillUpdate: function(nextProps, nextState) {

        if(nextProps.data != this.state.users) {
            this.setState({
                users : nextProps.data
            })
        }
    },

    componentWillReceiveProps : function(nextProps) {
       if(nextProps.userModeArray != undefined
                && nextProps.userModeArray.length > 0) {
            this.setState({
                usersWithModes : nextProps.userModeArray
            })
            this.getUsersDetails(nextProps.userModeArray);
        }
    },

    shouldComponentUpdate: function(nextProps, nextState) {
             this.setState({
                users : nextProps.data
            })
      return true;
    },

    render : function() {
            return (
                <div>
                    <UserTable data={this.state.users}
                               callback = {this.validateUsersWithMode}
                               meetingModes={this.state.meetingModes}
                               dataMeetingMode = {this.props.dataMeetingMode}/>
                </div>
            )
        }
    });


var UserTable = React.createClass({

      componentDidUpdate: function() {
        var data = this.props.dataMeetingMode
        for(var i in data) {
            var _class = "."+data[i].user_id+"_"+data[i].mode_id+"_rdio"
            $('#edit_appoinments_user_mode '+_class+'' ).prop('checked', true);
        }
      },

        render : function() {
            var data = null;
            var _this = this;
            if(this.props.data.length > 0) {
                data = this.props.data.map(function(user,i){
                    return (
                            <tr key={i}>
                                <td>{user.text}</td>
                                <td><MeetingMode
                                        data = {_this.props.meetingModes}
                                        user = {user.id}
                                        callback = {_this.props.callback} />
                                </td>
                            </tr>
                    )
                });
            }
            return (
                <table id="edit_appoinments_user_mode">
                     <tbody>
                        {data}
                     </tbody>
                </table>
            )
        }
    })



module.exports = MeetingPersonMode;
