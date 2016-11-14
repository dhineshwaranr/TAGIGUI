var React  = require('react');

//import navbar

var App = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
          {this.props.children}
      </div>
    );
  }
});

module.exports = App;
