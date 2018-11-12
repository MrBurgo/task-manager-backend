const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/', function(req, res, next) {
  knex('tasks')
    .select(['id', 'task_name', 'body'])
    .then((result) => {
        res.json(result);
    });
});

router.post('/new-task', function(req, res, next) {
    const { task_name, body, user_id } = req.body;
    knex('tasks')
        .insert({
            user_id,
            task_name,
            body
        })
        .returning(['id', 'task_name', 'body'])
        .then((result) => {
            res.json(result[0]);
        });
});

module.exports = router;
