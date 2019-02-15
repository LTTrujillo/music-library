const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const parser = require('body-parser')
const cors = require('cors')
const env = require('dotenv').config()

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

app.use(parser.json())

app.get('/', (req, res, next) => {
  return knex('artists').select('id', 'name')
  .then(artists => {
    let newArr = artists.map(artist => {
      return knex('albums').select('id', 'name','release_date').where({artist_id: artist.id})
        .then(albums => {
          artist.albums = albums
          return artist 
        })   
    })
    return Promise.all(newArr)
  })      

   .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    next(err);
  });
})

  






app.listen(port, () => console.log(`Example app listening on port ${port}!`))