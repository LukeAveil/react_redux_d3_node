var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "React"
    };
  },
  render: function() {
    var name = this.props.name;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>This is from a component</p>
      </div>
    );
  }
});

var firstName = "Luke";

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
