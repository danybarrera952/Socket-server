
import { Usuariolista } from './../clases/usuario-lista';
import { Socket } from 'socket.io';
import socketIO from 'socket.io';

import { Usuario } from '../clases/usuario';




export const UsuariosConectados =  new Usuariolista();

export const conectarCliente = (cliente: Socket, io: socketIO.Server) =>{

    const usuario = new Usuario(cliente.id);
    UsuariosConectados.agregar(usuario);

    io.emit('usuarios-activos',UsuariosConectados.getLista());


};

export const desconectar = (cliente:  Socket, io:socketIO.Server) => {

    cliente.on('disconnect', () => {


        console.log('cliente Desconectado');
        
        UsuariosConectados.borrarUsuario(cliente.id);
        io.emit('usuarios-activos',UsuariosConectados.getLista());
    });

}
//escuchar mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {

    cliente.on('mensaje', (payload) => {

        console.log('mensaje recibido', payload );

        io.emit('mensaje-nuevo', payload);

    
    
    });

    
}
//escuchar usuarios

export const usuario = (cliente: Socket, io: socketIO.Server ) => {

    cliente.on('configurar-usuario', ( payload:{nombre:string} ) =>{


        UsuariosConectados.actualizarNombre(cliente.id , payload.nombre);
        io.emit('usuarios-activos',UsuariosConectados.getLista());


    });
}



























