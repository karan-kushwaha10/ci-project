let nextId = 1;
const store = new Map();

function createTodo(title) {
  if (!title || typeof title !== 'string') {
    throw new Error('title is required');
  }
  const id = String(nextId++);
  const todo = { id, title, completed: false };
  store.set(id, todo);
  return todo;
}

function listTodos() {
  return Array.from(store.values());
}

function getTodo(id) {
  return store.get(id) || null;
}

function resetStore() {
  store.clear();
  nextId = 1;
}

module.exports = { createTodo, listTodos, getTodo, resetStore };
