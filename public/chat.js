// Make connection
const socket = io.connect('http://localhost:4000')

// Query DOM
const messageInput = document.getElementById('message')
const handleInput = document.getElementById('handle')
const sendBtn = document.getElementById('send')
const output = document.getElementById('output')

// Emit events
sendBtn.addEventListener('click', () => {
    socket.emit('chat', {
        message: messageInput.value,
        handle: handleInput.value
    })
})

// Listen for events
socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.handle + ':</strong> ' + data.message + '</p>'
})