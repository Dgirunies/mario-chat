// Make connection
const socket = io.connect('http://localhost:4000')

// Query DOM
const messageInput = document.getElementById('message')
const handleInput = document.getElementById('handle')
const sendBtn = document.getElementById('send')
const output = document.getElementById('output')
const feedback = document.getElementById('feedback')

// Emit events
sendBtn.addEventListener('click', () => {
    socket.emit('chat', {
        message: messageInput.value,
        handle: handleInput.value
    })
})

messageInput.addEventListener('keypress', () => {
    socket.emit('typing', handle.value)
})

// Listen for events
socket.on('chat', (data) => {
    feedback.innerHTML = ''
    output.innerHTML += '<p><strong>' + data.handle + ':</strong> ' + data.message + '</p>'
})

socket.on('typing', (data) => {
    feedback.innerHTML = '<p><em> '+ data +' is typing a message...</em></p>'
})