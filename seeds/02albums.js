
'use strict'

exports.seed = (knex, Promise) => {
  return Promise.all([
    // Inserts seed entries
    knex('albums').insert({ id: 1, name: 'Bears Gone Fishing', album_art: 'https://content-images.p-cdn.com/images/public/int/1/2/3/0/731454620321_1080W_1080H.jpg', release_date: 2006, artist_id: 1 }),
    knex('albums').insert({ id: 2, name: 'Holding All The Roses', album_art: 'https://images-na.ssl-images-amazon.com/images/I/81c-ukIqMlL._SL1000_.jpg', release_date: 2015, artist_id: 2 }),
    knex('albums').insert({ id: 3, name: 'Boy In a Well', album_art: 'http://marqueemag.com/wp-content/uploads/2017/07/the-yawpers-album-reviews-marquee-magazine.jpg', release_date: 2017, artist_id: 3 }),
    knex('albums').insert({ id: 4, name: 'Bridges to Bert', album_art: 'https://content-images.p-cdn.com/images/public/int/1/2/3/0/731454620321_1080W_1080H.jpg', release_date: 1993, artist_id: 4 }),
  ])
}
