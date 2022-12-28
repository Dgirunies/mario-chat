const express = require('express')

// APP SETUP

const app = express()

const server = app.listen(4000, () => {
    console.log('Listen to requests on port 4000')
})

app.use(express.static('public'))