var socket = io();

//los eventos on son para escuchar 
// esto mantiene pendiente de lo que pasa con el backend
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
})

// los emit son para enviar informacion al servidor mas no a otros usuarios
socket.emit('enviarMensaje', {
    usuario: 'Robinso',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta serer ', resp);
});

// escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor', mensaje);
});