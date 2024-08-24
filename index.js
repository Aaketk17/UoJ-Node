const express = require('express')
const app = express()
const dotenv = require('dotenv')
const {DateTime} = require('luxon')
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static(__dirname + '/public'))

dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello world!!!')
})

app.get('/pug', (req, res) => {
  res.render('index', {
    title: process.env.TITLE,
    name: process.env.NAME,
    time: DateTime.now().toLocaleString('en-US'),
  })
})

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`)
})
