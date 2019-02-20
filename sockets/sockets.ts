import { Usuariolista } from './../clases/usuario-lista';
import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { emit } from 'cluster';
import { Usuario } from '../clases/usuario';




export const UsuariosConectados =  new Usuariolista();

export const conectarCliente = (cliente: Socket) =>{

    const usuario = new Usuario(cliente.id);
    UsuariosConectados.agregar(usuario);




};

export const desconectar = (cliente:  Socket) => {

    cliente.on('disconnect', () => {

        console.log('cliente Desconectado');
        
        UsuariosConectados.borrarUsuario(cliente.id);

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

export const usuario = (cliente: Socket ) => {

    cliente.on('configurar-usuario', ( payload:{nombre:string} ) =>{


        UsuariosConectados.actualizarNombre(cliente.id , payload.nombre);
        

    });
}



























