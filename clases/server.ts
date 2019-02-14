import { desconectar } from './../sockets/sockets';
 
 import express from 'express';
import { SERV_PORT } from '../globas/enviroment';
import socketIO from 'socket.io';
import http from 'http';

import * as sockets from '../sockets/sockets';
 
 export default class Server {
 private static _instance: Server;
    public app:express.Application;
    public port: number;
    public io: socketIO.Server;
    private httpServer: http.Server;

 private constructor(){
        this.app = express();
        this.port = SERV_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.escucharSockets();
    }

    public static get  instance(){

        return this._instance || (this._instance = new this());


    }

    private escucharSockets() {

       console.log('Escuchar Sockets 2');
       
 //escuchar cuando un cliente se conecta a nuestro servidor

       this.io.on('connection', cliente => {

        console.log('nuevo cliente conectado');

       // mensajes

       sockets.mensaje(cliente,this.io);

        //Desconectar
        sockets.desconectar(cliente);

       });
        

    }

    start(callback: Function) {

        this.httpServer.listen(this.port, callback);


    }

}