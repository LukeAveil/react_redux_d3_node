var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

var Todo = React.createClass({
  render: function() {
    var {text, id, completed, dispatch} = this.props;
    return (
      <div onClick={() => {
          dispatch(actions.toggleTodo(id));
        }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    )
  }
});

module.exports = connect()(Todo);
