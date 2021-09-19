const express = require('express')
const cors = require('cors')
const routes = require('./routes/routings')
const app = express()

app.listen(4000)

app.use(cors())

app.use('/', routes)



