var { kwegoniaTranslator } = require('./translator')
const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.post('/', function (req, res) {
  const { phrase } = req.body
  const translation = kwegoniaTranslator(phrase)
  res.json({ phrase, translation })
})

app.listen(3000, () => console.log('Listening'))
