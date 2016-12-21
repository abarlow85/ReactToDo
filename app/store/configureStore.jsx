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

	var devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

	var store = process.env.NODE_ENV === 'test' ? redux.createStore(reducers,initialState,redux.compose(redux.applyMiddleware(thunk))) : redux.createStore(reducers,initialState,redux.compose(redux.applyMiddleware(thunk), devTools));

	return store;
}