var React  = require('react');

import axios from 'axios';

var URL  = require('./../constants.js');
var Ajax = require('./../helpers/axios.helpers.js');

var ProjectComponent = React.createClass({
  getInitialState:function(){
    return{
      teamId:0,
      projectId:0
    }
  },
  componentDidMount:function(){
    var currentprojectId = this.props.params.projectId
    var currentteamId = this.props.params.teamId
    this.setState({
      teamId : currentteamId,
      projectId : currentprojectId
    },this.getTeamProjectData(currentteamId, currentprojectId))

  },
  getTeamProjectData:function(currentteamId, currentprojectId){
      var url = URL.getBy_projects_team+currentteamId+"/"+currentprojectId
      var a = axios.get(url)
      a.then(res => {
        const data = res.data;
        this.setState({
           teamList : data,
        });
      });
  },
  render: function() {
    return (
      <div>Project Window</div>
    );
  }
});

module.exports = ProjectComponent;