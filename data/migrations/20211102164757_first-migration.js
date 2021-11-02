exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {
    table.increments('fruit_id') // shortcut for 'id' column, primary key, auto inc integers
    table.text('fruit_name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
};
