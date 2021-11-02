exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {
    table.increments('fruit_id') // shortcut for 'id' column, primary key, auto inc integers
    table.text('fruit_name', 128) // this would work with other dbs too (not only sqlite)
      .unique().notNullable()
    table.decimal('avg_weight').notNullable()
    table.boolean('delicious')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
}
