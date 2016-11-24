var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "React"
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  render: function() {
    var name = this.state.name;

    return (
      <div>
        <GreeterMessage name={name}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

module.exports = Greeter;
