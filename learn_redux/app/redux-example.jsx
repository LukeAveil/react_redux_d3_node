var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      default:
        return state;
  }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('current state', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Luke'
});

console.log('Name should be Luke', store.getState());
