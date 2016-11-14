var React  = require('react');


var NotFound = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
      NOTFOUND
         {this.props.status}
      </div>
    );
  }
});

module.exports = NotFound;
