exports.up = async function(knex) {
  await knex.schema.createTable('fruits', table => {
    table.increments('fruit_id') // shortcut for 'id' column, primary key, auto inc integers
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits')
};
