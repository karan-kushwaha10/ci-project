const express = require('express');
const { createTodo, listTodos, getTodo } = require('./todoService');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/todos', (req, res) => {
  res.json(listTodos());
});

app.post('/todos', (req, res) => {
  try {
    const todo = createTodo(req.body.title);
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/todos/:id', (req, res) => {
  const todo = getTodo(req.params.id);
  if (!todo) return res.status(404).json({ message: 'not found' });
  res.json(todo);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
