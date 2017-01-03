var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Make coffee'));
store.dispatch(actions.setSearchText('coffee'));
store.dispatch(actions.toggleShowCompleted());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
