
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', (table) => {
        table.increments()
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tasks')
};
