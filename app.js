const express = require('express')
var cors = require('cors')
const router = require('./routers')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app