var redux = require('redux');

var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
	var reducers = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer
	});

	var store = redux.createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

	return store;
}