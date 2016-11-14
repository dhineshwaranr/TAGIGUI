var React  = require('react');
var URL  = require('./../constants.js');
var Ajax = require('./ajax.helpers.js');
var Router = require('react-router');
var browserHistory = Router.browserHistory;

var RoundNavigation = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    logout : function() {
        Ajax.logout();
        this.context.router.push('/login');
    },

    componentDidMount : function() {
          $('.btn-floating').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
         });



    },

    render:function(){
        return(
              <ul id='dropdown1' className='dropdown-content'>
                      <li id="profile-edit"><a href="javascript:void(0)">Profile</a></li>
                      <li id="change-password-from"><a href="javascript:void(0)" >Change Password</a></li>
                      <li className="divider"></li>
                      <li><a href="javascript:void(0)" onClick={this.logout}>Logout</a></li>
             </ul>
      )
    }
});

module.exports = RoundNavigation;
