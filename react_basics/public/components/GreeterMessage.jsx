var React = require('react');

var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    return (
      <div>
        <h1>Hello {name}!</h1>
      </div>
    );
  }
});

module.exports = GreeterMessage;
