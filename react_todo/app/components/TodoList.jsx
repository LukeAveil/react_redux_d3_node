var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
