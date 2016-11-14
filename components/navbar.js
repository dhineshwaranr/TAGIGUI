var React  = require('react');
var routerModule = require('react-router');
var Link = routerModule.Link;


var Navbar = React.createClass({
  render: function() {
    return (
      <div className="col-sm-3 col-md-2 sidebar">

        <div className="menuSection">
          <div className="logo">
              <img src="assets/img/logo.png" />
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </div>
          <ul className="nav nav-sidebar">
            <li>
                <Link to="/dashboard/list">
                  Dashboard
                </Link>
                <Link to="/dashboard/team">
                  Team
                </Link>
              </li>
          </ul>
        </div>
      </div>

    );
  }
});

module.exports = Navbar;
