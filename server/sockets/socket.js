const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');
    //enviar
    client.emit('enviarMensaje', {
        ok: true,
        numero: 123,
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });


    //escuchar
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /*
        if (mensaje.usuario) {
            callback({
                resp: 'Todo salió bien'
            });
        } else {
            callback({
                resp: 'Todo salió mal :(('
            });
        }
        */

    });
});