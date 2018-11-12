var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  knex('tasks')
    .select(['id', 'title', 'body'])
    .then((result) => {
        res.json(result);
    });
});

router.post('/new-task', function(req, res, next) {
    const { title, body, user_id } = req.body;
    knex('tasks')
        .insert({
            title,
            body,
            user_id
        })
        .returning(['id', 'title', 'body'])
        .then((result) => {
            res.json(result[0]);
        });
});

module.exports = router;
