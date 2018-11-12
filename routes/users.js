const express = require('express');
const knex = require('../knex');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('users')
    .select(['id', 'user_name'])
    .then((result) => {
      res.json(result);
    });
});

router.post('/new', function(req, res, next) {
  const { user_name } = req.body
  knex('users')
    .insert({ user_name })
    .returning(['id', 'user_name'])
    .then((result) => {
      res.json(result[0]);
    });
});

module.exports = router;
