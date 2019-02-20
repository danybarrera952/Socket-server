



export class Usuario{

    //el id del socket del usuario que se esta conectado siempre es obligatoria
     public id: string;
     public nombre: string;
     public sala: string;

     public Usuario(){
         
     }

    constructor ( id: string) {

        this.id = id;
        this.nombre = 'sin-nombre';
        this.sala = 'sin-sala';


    }
}