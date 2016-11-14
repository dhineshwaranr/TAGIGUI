var React  = require('react');

var MeetingType = React.createClass({
      getInitialState() {
        return {
          showInput : false
        }
      },

      componentDidMount : function() {
          if(this.props.meetingType) {
            this.setState({
                showInput : true
            })
          }
      },

      componentWillReceiveProps : function(nextProps) {

      },

      handleClick : function(e) {
          var option = e.currentTarget.id;
          if(option == "meeting_type_Other") {
              this.setState({
                showInput : true
              })
          }else {
             this.setState({
                showInput : false
              })
          }
      },

      render : function() {
         var _this = this;
         var renderOptions = this.props.data.map(function(type,i) {
            return (
                  <p key={i}>
                    <input name="meeting_type" type="radio"
                      id={"meeting_type_"+type.name} className="with-gap" value={type.id} />
                    <label onClick={_this.handleClick}
                       htmlFor={"meeting_type_"+type.name}
                       id={"meeting_type_"+type.name}>
                      {type.name}
                    </label>
                  </p>)
              });
        return (
            <div>
            <p>Meeting Type </p>
              {renderOptions}
                { this.state.showInput ? <MeetingTypeInput /> : null }

            </div>
        )
      }
  });

  var MeetingTypeInput = React.createClass({
    render : function(){
      return (
          <div className="col-md-12">
              <div className="input-field">
                <input id="meeting_type_other" name="meeting_type_other" type="text" className="md-input" />
                <label htmlFor="meeting_type_other">Reasons ...
                </label>
              </div>
          </div>
      )
    }
  })


module.exports = MeetingType;
