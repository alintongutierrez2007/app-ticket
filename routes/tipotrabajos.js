
import express from 'express';
const router=express.Router();

import mongoose from 'mongoose';


import TipoTrabajos from '../models/Tipotrabajos';
import { verificarAuth } from '../middlewares/autenticacion';

//ruta para agregar estado desde post
router.post('/nuevo-trabajo',verificarAuth, async(req, res)=>{
 const body=req.body;
  try{

    const TipoTrabajosDB=await TipoTrabajos.create(body);
    res.status(200).json(TipoTrabajosDB)

  }catch(error){
     return res.status(500).json({
         mensaje:'Ocurrio un error',
         error
     })
  }

});




//ruta para todos los registros

router.get('/trabajos',verificarAuth, async(req, res)=>{


try {
    const TipoTrabajosDB=await TipoTrabajos.find({"activo":1});
    res.status(200).json(TipoTrabajosDB);

} catch (error) {
    return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});






//ruta actualizar put

router.put('/trabajos/:id',verificarAuth, async(req, res)=>{

const _id=req.params.id;
const body= req.body;

try {
    const TipoTrabajosDB=await TipoTrabajos.findByIdAndUpdate(_id,body,{new:true});
    res.json(TipoTrabajosDB);

} catch (error) {
     return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});


module.exports=router;