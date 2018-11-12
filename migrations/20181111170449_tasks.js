
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', (table) => {
        table.increments().primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        table.string('task_name').notNullable();
        table.string('body');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tasks')
};