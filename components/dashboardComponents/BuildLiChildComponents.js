var React  = require('react');

import axios from 'axios';

var URL  = require('./../constants.js');
var Ajax = require('./../helpers/axios.helpers.js');

var BuildLiChildComponents = React.createClass({
  		
  componentDidMount:function(){
  	 
  },
  
  _buildLinkHref: function(teamId, projectid) {
        return '#/dashboard/project/'+teamId+'/'+projectid;
    },
   _builddataid:function(id){
    return 'project-'+id;
   }, 
   getTeamId:function(e){
      var teamId = $("#" + e.currentTarget.id).parent().parent().parent().attr('data-id');
      console.log(teamId);
   }, 
    
  render: function() {
        return (
            <a href={this._buildLinkHref(this.props.teamId, this.props.data.projectId)} className >
                <div className={this.props.className}>
                    <p>{this.props.data.projectCode}<span className="projectNameSpan">{this.props.data.projectName}</span></p>
                </div>
            </a>
        )
    }
});

module.exports = BuildLiChildComponents;