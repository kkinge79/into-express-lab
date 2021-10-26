import express from 'express'
import express from 'express'

import * as greatestMovies from './data/greatestMovies'


const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.send('<h1>Hello peeps</h1>')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/greatestMovies', function(req, res) {
  greatestMovies.find({}, function(error, greatestMovies) {
    greatestMovies : greatestMovies,
    error : error
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000')
})