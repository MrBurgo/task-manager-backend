
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_name: 'Create task manager',
          body: `It's time to create a task manager for everyone to enjoy. Good luck with that.`,
          user_id: 1
        }
      ])
      .then(() => {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('tasks_id_seq', (SELECT MAX(id) FROM tasks))")
      })
    });
};
