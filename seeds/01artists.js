'use strict'

exports.seed = (knex, Promise) => {
  return Promise.all([
    // Inserts seed entries
    knex('artists').insert({ id: 1, name: 'Widespread Panic', description: 'Jamband', years_active: 50 }),
    knex('artists').insert({ id: 2, name: 'Blackberry Smoke',description: 'Rock', years_active: 29 }),
    knex('artists').insert({ id: 3, name: 'Yawpers', description: 'Trash', years_active: 10 }),
    knex('artists').insert({ id: 4, name: 'Leftover Salmon',description: 'Bluegrass', years_active: 35 }),
  ])
}
