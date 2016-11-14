import React from 'react';
var URL  = require('./../constants.js');
var Ajax = require('./ajax.helpers.js');


var Participants = React.createClass({
   getInitialState : function() {
          return {
             length : 1,
             users_url : "http://192.168.7.221:8000/api/v1/userslist/?users=5",
             users_list:[{"id":5,"name":"santhoshs@techaffinity.com"},{"id":6,"name":"jeyabal@techaffinity.com"}],
             rows : 1,
             meeting_type : [{"id":2,"name":"By Walk"},{"id":3,"name":"By Public Transport"},{"id":4,"name":"By Flight"},{"id":5,"name":"Other"}]
          }
      },

    componentDidMount : function() {
        var _this = this;
        var users_list = Ajax.getCall(this.props.url);
       /* users_list.done(function(data){
            _this.setState({
                users_list:data
            })
        })*/
    },
    addRows : function() {
        console.log("add")
        this.setState({
            length : this.state.length + 1
        })
    },
    removeRows : function() {
        console.log("remove")
         var length = this.state.length;
         if(length > 1) {
            this.setState({
                length : this.state.length - 1
            })
         }

    },
    render : function() {
        var rows = [];
        for(var i=0; i < this.state.length; i++) {
            rows.push(
                <Row key={i} users_list={this.state.users_list}
                    meeting_type={this.state.meeting_type}
                    add={this.addRows}
                    remove={this.removeRows}/>
            )
        }
        return(
            <span>
                {rows}
            </span>

        )
    }
});

var Row = React.createClass({
    render : function() {
        return(
            <div>
                <DropDown data = {this.props.users_list}/>
                <DropDown data = {this.props.meeting_type}/>
                <span>
                    <a href="javascript:void(0)">
                        <i className="material-icons"
                                onClick={this.props.add}>queue</i>
                    </a>
                    <a href="javascript:void(0)">
                         <i className="material-icons"
                             onClick={this.props.remove}>not_interested</i>
                    </a>
                </span>
            </div>
        )
    }
})

var DropDown = React.createClass({
    render : function() {
        var options = this.props.data.map(function(item,i){
                return(<option key={i} value={item.id}>{item.name}</option>)
            })
        return(
            <select className="md-select1">
                {options}
            </select>
        )
    }
})



module.exports = Participants;
