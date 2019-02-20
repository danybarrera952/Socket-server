import { Usuario } from './usuario';
import { usuario } from '../sockets/sockets';



export class Usuariolista {

    private Lista: Usuario[] = [];

    constructor() {}
  
     //agregar un usuario
    public agregar(usuario: Usuario) {

        this.Lista.push(usuario);
        return usuario;
        
    }

    public actualizarNombre(id:string , nombre: string) {

        for(let usuario of this.Lista) {

            if(usuario.id === id){
                usuario.nombre = nombre;
                break;
            }
        }

        console.log('Usuario Actualizado', this.Lista);
        
    }
    //obtener lista de usuarios conectados
    public getLista() {

        return this.Lista;
    }

    //obtener los usuarios por el id
    public getListaId( id:string){

        return this.Lista.find(usuario => usuario.id === id);
    }

    //obtener usuarios en una sala en particular
    public getUsuariosbysala(sala: string){

        return this.Lista.filter(usuario => usuario.sala ===sala);

    }
    //borrar un usuario

    public borrarUsuario ( id:string) {

        const usuarioTmp = this.getListaId(id);

        this.Lista = this.Lista.filter(usuario => usuario.id !== id);
        
        return usuarioTmp;
    }

}