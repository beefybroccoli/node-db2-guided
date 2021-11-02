exports.seed = function (knex) {
  return knex('fruits').truncate() // deletes rows and resets the primary key
    .then(function () {
      return knex('fruits').insert([
        // BUG NUMBER 1 IN UNIT 4:
        // trying to seed records with an id
        // remember the db provides this
        { fruit_name: 'apple', avg_weight: 20.8, color: 'red', delicious: true },
        { fruit_name: 'orange', avg_weight: 5.8, color: 'orange' },
        { fruit_name: 'melon', avg_weight: 4.8, delicious: false },
        { fruit_name: 'grapes', avg_weight: 1.8 },
      ])
    })
}
