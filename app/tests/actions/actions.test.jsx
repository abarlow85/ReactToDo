var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {

	it('should generate searchText action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		};
		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});

	it('should generate addTodo action', () => {
		var action = {
			type: 'ADD_TODO',
			text: 'Thing to do'
		};
		var res = actions.addTodo(action.text);

		expect(res).toEqual(action);
	});

	it('should generate toggle showCompleted action', () => {

		var action = {
			type: 'TOGGLE_SHOW_COMPLETED',
		};

		var res = actions.toggleShowCompleted();

		expect(res).toEqual(action);

	});

	it('should generate add todos action object', () => {
		var todos = [
			{
				id: 111,
				text: 'anthing',
				completed: false,
				createdAt: undefined,
				createdAt: 33000
			}
		]

		var action = {
			type: 'ADD_TODOS',
			todos
		};

		var res = actions.addTodos(todos);


		expect(res).toEqual(action);

	});

	it('should generate toggle todo action', () => {

		var action = {
			type: 'TOGGLE_TODO',
			id: '11'
		};

		var res = actions.toggleTodo(action.id);

		expect(res).toEqual(action);

	});



});

