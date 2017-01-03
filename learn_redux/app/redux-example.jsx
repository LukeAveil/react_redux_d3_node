var redux = require('redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View Your Location</a>'
  }
});

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Luke'));

store.dispatch(actions.addHobby('Walk'));

store.dispatch(actions.addHobby('Run'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Blade Runner', 'Sci-fi'));

store.dispatch(actions.addMovie('Jingle all the Way', 'Comedy'));

store.dispatch(actions.removeMovie(2));

store.dispatch(actions.changeName('Louisa'));
