const { createTodo, listTodos, getTodo, resetStore } = require('../../src/todoService');

beforeEach(() => resetStore());

test('creates a todo item', () => {
  const todo = createTodo('Learn CI');
  expect(todo.title).toBe('Learn CI');
  expect(todo).toHaveProperty('id');
});

test('lists all todos', () => {
  createTodo('Task 1');
  createTodo('Task 2');
  const list = listTodos();
  expect(list.length).toBe(2);
});

test('gets todo by id', () => {
  const todo = createTodo('Study Jest');
  const found = getTodo(todo.id);
  expect(found.title).toBe('Study Jest');
});

test('throws error for empty title', () => {
  expect(() => createTodo()).toThrow();
});
