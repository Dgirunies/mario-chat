const express = require('express')
const socket = require('socket.io')

// APP SETUP

const app = express()

const server = app.listen(4000, () => {
    console.log('Listen to requests on port 4000')
})

app.use(express.static('public'))

// Socket setup

const io = socket(server)

io.on('connection', (socket) =>  {
    console.log('Made socket connection', socket.id);
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })
})