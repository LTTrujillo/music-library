'use strict'

exports.up = (knex) => {
  return knex.schema.createTable('artists', table => {
    table.increments()
    table.string('name')
    table.string('description')
    table.integer('years_active')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('artists')
}