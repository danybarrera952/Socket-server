import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { emit } from 'cluster';





export const desconectar = (cliente:  Socket) => {

    cliente.on('disconnect', () => {

        console.log('cliente Desconectado');
        

    });

}
//escuchar mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {

    cliente.on('mensaje', (payload) => {

        console.log('mensaje recibido', payload );

        io.emit('mensaje-nuevo', payload);
    
    });

}



























