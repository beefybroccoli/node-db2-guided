exports.up = function (knex) {
  return knex.schema.createTable('fruits', table => {
    // shortcut for 'id' column, primary key, auto inc integers
    table.increments('fruit_id')
    // this would work with other dbs too (not only sqlite)
    table.text('fruit_name', 128).unique().notNullable()
    table.decimal('avg_weight').notNullable()
    table.boolean('delicious')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('fruits')
}
