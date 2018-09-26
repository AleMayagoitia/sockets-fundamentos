var socket = io();

//Los on son para escuchar información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Los emits son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alejandra',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log("Se disparó el callback");
    console.log('respuesta server:', resp);
});
//Escuchar
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});