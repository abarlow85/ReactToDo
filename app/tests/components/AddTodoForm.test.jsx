var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodoForm = require('AddTodoForm');

describe('AddTodoForm', () => {
	it('should exist', () => {
		expect(AddTodoForm).toExist();
	});

	it('should call onAddTodo if valid text is entered', () => {
		var todoText = 'Walk the Dog';
		var spy = expect.createSpy();
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy} />)
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);

	});

	it('should NOT call onAddTodo if invalid text is entered', () => {
		var todoText = '';
		var spy = expect.createSpy();
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy} />)
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();

	});

});