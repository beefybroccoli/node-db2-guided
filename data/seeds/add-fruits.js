
exports.seed = function (knex) {
  return knex('fruits').truncate() // deletes rows and resets the primary key
    .then(function () {
      return knex('fruits').insert([
        { id: 1, colName: 'rowValue1' },
        { id: 2, colName: 'rowValue2' },
        { id: 3, colName: 'rowValue3' }
      ])
    })
}
