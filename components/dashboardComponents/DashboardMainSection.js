var React  = require('react');

import axios from 'axios';

var URL  = require('./../constants.js');
var Ajax = require('./../helpers/axios.helpers.js');
var BuildLiComponents = require('./../dashboardComponents/BuildLiComponents.js');

var DashboardMain = React.createClass({
  getInitialState:function(){
  	return{
  		teamList:[]
  	}	
  },
  componentDidMount:function(){
  	var a = axios.get(URL.getAllTeams)
      a.then(res => {
        const data = res.data;
        this.setState({
           teamList : data,
        });
      });
  },
  
  render: function() {
  	return (
      <div className="main-section">
        <div>
            <BuildULComponent data={this.state.teamList}/>
        </div>
      </div>
    );
  }
});

var BuildULComponent = React.createClass({
    render : function() {
        var bindLiComponents = this.props.data.map(function(teams,i) {
        var teamLabelDataId = "#/dashboard/team/"+teams.teamid;
        var teamId = teams.teamid;
            return (<BuildLiComponents 
                      key={i}
                      team={teams}
                      projects={teams.projects}
                      teamLabelId={teamLabelDataId}
                      teamId={teamId}/>
                  )
       });
        return (
               <ul className="timeline showview" id="multi">
                  {bindLiComponents}
              </ul>
        )
    }
});

module.exports = DashboardMain;