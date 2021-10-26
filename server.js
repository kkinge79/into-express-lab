import express from 'express'

const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.send('<h1>Hello peeps</h1>')
})

app.get('/home', function(req, res) {
  res.render('home')
})


app.listen(3000, function() {
  console.log('listening on port 3000')
})