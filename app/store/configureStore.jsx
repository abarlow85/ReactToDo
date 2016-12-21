import * as redux from 'redux';
import thunk from 'redux-thunk'

import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers';

export var configure = (initialState = {}) => {
	var reducers = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer,
		auth: authReducer
	});

	var devTools = process.env.NODE_ENV !== 'test' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;

	var store = redux.createStore(reducers,initialState,redux.compose(redux.applyMiddleware(thunk), devTools));

	return store;
}