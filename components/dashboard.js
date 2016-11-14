var React  = require('react');

//var Header = require('./common/header.js');
var Navbar = require('./navbar.js');

var Dashboard = React.createClass({
  render: function() {
    return (
     <div className="row">
         <Navbar />
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            {this.props.children}
          </div>
      </div>
    );
  }
});

module.exports = Dashboard;
