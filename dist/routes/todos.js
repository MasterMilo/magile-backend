"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [
    { id: 1, title: 'Learn Vue 3', completed: false },
    { id: 2, title: 'Build a REST API', completed: false }
];
router.get('/todos', (req, res) => {
    res.json(todos);
});
router.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo)
        return res.status(404).send('Todo not found');
    res.json(todo);
});
router.post('/todos', (req, res) => {
    const todo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: req.body.completed || false
    };
    todos.push(todo);
    res.json(todo);
});
router.put('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo)
        return res.status(404).send('Todo not found');
    todo.title = req.body.title;
    todo.completed = req.body.completed;
    res.json(todo);
});
router.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1)
        return res.status(404).send('Todo not found');
    const deletedTodo = todos.splice(todoIndex, 1);
    res.json(deletedTodo[0]);
});
exports.default = router;
