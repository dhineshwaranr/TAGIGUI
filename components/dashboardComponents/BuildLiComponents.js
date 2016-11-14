var React  = require('react');

import axios from 'axios';

var URL  = require('./../constants.js');
var Ajax = require('./../helpers/axios.helpers.js');
var BuildLiChildComponents = require('./../dashboardComponents/BuildLiChildComponents.js');

var BuildLiComponents = React.createClass({
  getInitialState : function(){
    return{
      teamId:0
    }
  },
  componentDidMount:function(){
      this.setState({
        teamId : 100
      })
  },
  render: function() {
    var teamId = this.props.teamId
    var bindComponents = this.props.projects.map(function(project, i) {
          return (<BuildLiChildComponents key={i} data = {project}
            className = "rs-tl-box waves-effect waves-light" teamId = {teamId}/>)
        
     });
  	return (
      <li className="tl-item" id={this.props.team.teamCode} data-id={this.props.teamLabelId}>
                <div className="tl-wrap">
                  <a href={this.props.teamLabelId}><span className="tl-date" data-toggle="tooltip"
                      data-placement="top" title="Tooltip on top">
                      {this.props.team.teamCode}</span></a>
                  <div className="tl-content tl-dragHolder">
                    {bindComponents}
                </div>
              </div>
          </li>
    );
  }
});

module.exports = BuildLiComponents;