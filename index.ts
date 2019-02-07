import Server from './clases/server';
import router from './routes/routes';

import bodyParser from 'body-parser';
import cors from 'cors';



const server = new Server();

//bodyparser

server.app.use( bodyParser.urlencoded( {extended: true }));
server.app.use(bodyParser.json());

//cors

server.app.use( cors({ 
    origin:true,
    credentials:true
}));

//routes de servicios
server.app.use('/',router);

server.start(()=> {
    console.log('Servidor corriendo');
    
})