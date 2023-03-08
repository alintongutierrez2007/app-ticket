
import express from 'express';
const router=express.Router();

import mongoose from 'mongoose';


import Tecnico from '../models/Tecnicos';
import { verificarAuth } from '../middlewares/autenticacion';

//ruta para agregar estado desde post
router.post('/nuevo-tecnico',verificarAuth, async(req, res)=>{
 const body=req.body;
  try{

    const TecnicoDB=await Tecnico.create(body);
    res.status(200).json(TecnicoDB)

  }catch(error){
     return res.status(500).json({
         mensaje:'Ocurrio un error',
         error
     })
  }

});




//ruta para todos los registros

router.get('/tecnicos',verificarAuth, async(req, res)=>{


try {
    const TecnicoDB=await Tecnico.find({"activo":1});
    res.status(200).json(TecnicoDB);

} catch (error) {
    return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});






//ruta actualizar put

router.put('/tecnicos/:id',verificarAuth, async(req, res)=>{

const _id=req.params.id;
const body= req.body;

try {
    const TecnicoDB=await Tecnico.findByIdAndUpdate(_id,body,{new:true});
    res.json(TecnicoDB);

} catch (error) {
     return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});


module.exports=router;