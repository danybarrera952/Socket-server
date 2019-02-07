 
 import express from 'express';
import { SERV_PORT } from '../globas/enviroment';
 
 export default class Server {

    public app:express.Application;
    public port: number;

    constructor(){
        this.app = express();
        this.port = SERV_PORT;
    }

    start(callback: Function) {

        this.app.listen(this.port, callback);


    }

}