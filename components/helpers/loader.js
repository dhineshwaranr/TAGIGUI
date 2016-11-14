var React  = require('react');

var Loader = React.createClass({
    render : function() {
        return (
        <div className="loader-custom preloader-wrapper small active"
            id="loader-custom">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        )
    }
});


module.exports = Loader
