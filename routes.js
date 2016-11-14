var React  = require('react');
var routerModule = require('react-router');
var history = routerModule.hashHistory;

var Router = routerModule.Router;
var Route = routerModule.Route;
var Redirect = routerModule.Redirect;


// load all components

var App = require('./components/app.js');
var Dashboard = require('./components/dashboard.js');
var DashboardMainSection = require('./components/dashboardComponents/DashboardMainSection.js');
var ProjectComponent = require('./components/projectComponents/ProjectComponent.js');
var TeamComponent = require('./components/teamComponents/TeamComponent.js');
var AllTeamComponent = require('./components/teamComponents/AllTeamComponent.js');
var NotFound = require('./components/notfound.js');

module.exports = (
  <Router history={history}>
    <Route component={App}>
      <Redirect from='/' to='/dashboard/list' />
          <Route path='dashboard' component={Dashboard}>
            <Route path='list' component={DashboardMainSection} />
            <Route path='team/:teamId' component={TeamComponent} />
             <Route path='team' component={AllTeamComponent} />
            <Route path='project/:teamId/:projectId' component={ProjectComponent} />
          </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
