var React  = require('react');

   var MeetingMode = React.createClass({
      getInitialState() {
          return {
            showInput : false,
            users:[]
          }
        },

      componentDidMount : function() {
          if(this.props.meetingMode) {
            this.setState({
                showInput : true
            })
          }
      },

      handleClick : function(e) {
        if(this.props.user != undefined) {
          var currentStateUsers = this.state.users;
          var callback = this.props.callback;
          var userId = this.props.user;
          var modeId = e.currentTarget.getAttribute("data-value");
          var temp = { user_id : userId, mode_id : modeId };
          callback(temp);
        }
          var option = e.currentTarget.id;
          if(option == "meeting_mode_Other") {
              this.setState({
                showInput : false //default true
              })
            }else {
             this.setState({
                showInput : false
              })
          }
      },
      render : function() {
         var _this = this;
         var renderOptions = this.props.data.map(function(mode,i) {
            return (
                  <p key={i}>
                    <input name={_this.props.user+"_meeting_mode"} type="radio"
                      id={_this.props.user+"_meeting_mode_"+mode.name} className={_this.props.user+"_"+mode.id+"_rdio with-gap"} value={mode.id}
                         data-user-id={_this.props.user}/>
                    <label onClick={_this.handleClick}
                    htmlFor={_this.props.user+"_meeting_mode_"+mode.name}
                     id={"meeting_mode_"+mode.name}
                     data-value = {mode.id}>
                     {mode.name}
                     </label>
                  </p>)
              });
        return (
            <div>
               {renderOptions}
               { this.state.showInput ? <MeetingModeInput /> : null }
            </div>
        )
      }
  });

var MeetingModeInput = React.createClass({
    render : function(){
      return (
          <div className="col-md-12">
              <div className="input-field">
                <input id="meeting_mode_other" name="meeting_mode_other" type="text" className="md-input" />
                <label htmlFor="meeting_mode_other">Specify Others
                </label>
              </div>
          </div>
      )
    }
  })

module.exports = MeetingMode;
