var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var {AddTodoForm} = require('AddTodoForm');

describe('AddTodoForm', () => {
	it('should exist', () => {
		expect(AddTodoForm).toExist();
	});

	it('should dispatch ADD_TODO if valid text is entered', () => {
		var todoText = 'Walk the Dog';
		var action = {
			type: 'ADD_TODO',
			text: todoText
		}
		var spy = expect.createSpy();
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy} />)
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);

	});

	it('should NOT dispatch ADD_TODO if invalid text is entered', () => {
		var todoText = '';
		var spy = expect.createSpy();
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy} />)
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();

	});

});