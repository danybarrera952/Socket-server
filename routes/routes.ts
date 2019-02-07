import {Router, Request, Response} from 'express';

//constante para crear servicios REST
const router = Router();


// Crear Servicio de prueba

router.get('/mensajes', (req:Request , res:Response) =>{

    res.json({
        ok: true,
        mensaje: 'todo esta bien'
    });
});

router.post('/mensajes', (req:Request , res:Response) =>{
 
    // req.body con esto rescatados lo que venga del body

   const cuerpo = req.body.cuerpo;
   const de = req.body.de;


    res.json({
        ok: true,
        mensaje: 'todo esta bien post',
        cuerpo,
        de
       
    });
});

router.post('/mensajes/:id', (req:Request , res:Response) =>{
 
    // req.params con esto rescatados lo que venga de los parametros en este caso el id
    
   const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'todo esta bien post',
        id
       
    });
});

export default router;

