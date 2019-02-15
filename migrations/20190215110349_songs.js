'use strict'

exports.up = (knex) => {
  return knex.schema.createTable('songs', table => {
    table.increments()
    table.string('name')
    table.string('lyrics')
    table.integer('play_time')
    table.timestamps(true, true)
    table.integer('album_id').notNullable()
    table.foreign('album_id').references('albums.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('songs')
}
