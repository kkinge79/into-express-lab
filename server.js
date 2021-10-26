import express from 'express'


import * as greatestMovies from './data/greatestMovies.js'


const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/greatestMovies', function(req, res) {
  greatestMovies.find({}, function(error, greatestMovies) {
    res.render('greatestMovies.ejs/index', {
    greatestMovies : greatestMovies,
    error
    })
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000')
})