'use strict'

exports.up = (knex) => {
  return knex.schema.createTable('albums', table => {
    table.increments()
    table.string('name')
    table.string('album_art')
    table.integer('release_date')
    table.timestamps(true, true)
    table.integer('artist_id').notNullable()
    table.foreign('artist_id').references('artists.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('albums')
}