
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments().primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        table.string('user_name').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};