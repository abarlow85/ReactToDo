var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			}

			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);

		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle show completed', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED',
			}

			var res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				text: 'Walk the dog'
			};

			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		});

		it('should toggle completed and add/remove completedAt attr', () => {
			var todos = [
				{
					id: 1,
					text: 'Walk the dog',
					completed: false,
					completedAt: undefined
				},
				{
					id: 2,
					text: 'Beat the dog',
					completed: false,
					completedAt: undefined
				},
				{
					id: 3,
					text: 'Kill the dog',
					completed: false,
					completedAt: undefined
				}
			]
			var action = {
				type: 'TOGGLE_TODO',
				id: 1
			}

			var res = reducers.todosReducer(df(todos), df(action));

			expect(res[0].completed).toEqual(true);
			expect(res[0].completedAt).toBeA('number');

			var newRes = reducers.todosReducer(df(res), df(action));

			expect(newRes[0].completed).toEqual(false);
			expect(newRes[0].completedAt).toNotExist();

		});
	});



});