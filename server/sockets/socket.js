const { io } = require('../server');

//el objeto client contiene toda la informacion de la computadora o cliente qeu se conecto al backend
io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN  '
        //     });

        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL  '
        //     });
        // }
    });
})