
'use strict'

exports.seed = (knex, Promise) => {
  return Promise.all([
    // Inserts seed entries
    knex('songs').insert({ id: 1, name: 'Suprise Valley', lyrics: '', play_time: 309, album_id: 1  }),
    knex('songs').insert({ id: 2, name: 'Bears gone fishing', lyrics: '', play_time: 407,album_id: 1 }),
    knex('songs').insert({ id: 3, name: 'Climb to Safety', lyrics: '', play_time: 909,album_id: 1 }),
    knex('songs').insert({ id: 4, name: 'Blue Indian', lyrics: '', play_time: 420, album_id: 1 }),
    knex('songs').insert({ id: 5, name: 'The Waker', lyrics: '', play_time: 605, album_id: 1 }),
    knex('songs').insert({ id: 6, name: 'Party at Your Momas', lyrics: '', play_time: 230, album_id: 1 }),
    knex('songs').insert({ id: 7, name: 'Dyin Man', lyrics: '', play_time: 330, album_id: 1 }),
  
  ])
}
