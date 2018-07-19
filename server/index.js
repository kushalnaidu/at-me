const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const routes = require('./routes')
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
