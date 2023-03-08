
import express from 'express';
const router=express.Router();

import mongoose from 'mongoose';


import TipoEquipos from '../models/Tipoequipos';
import { verificarAuth } from '../middlewares/autenticacion';

//ruta para agregar estado desde post
router.post('/nuevo-equipo',verificarAuth, async(req, res)=>{
 const body=req.body;
  try{

    const TipoEquiposDB=await TipoEquipos.create(body);
    res.status(200).json(TipoEquiposDB)

  }catch(error){
     return res.status(500).json({
         mensaje:'Ocurrio un error',
         error
     })
  }

});




//ruta para todos los registros

router.get('/equipos',verificarAuth, async(req, res)=>{


try {
    const TipoEquiposDB=await TipoEquipos.find({"activo":1});
    res.status(200).json(TipoEquiposDB);

} catch (error) {
    return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});






//ruta actualizar put

router.put('/equipos/:id',verificarAuth, async(req, res)=>{

const _id=req.params.id;
const body= req.body;

try {
    const TipoEquiposDB=await TipoEquipos.findByIdAndUpdate(_id,body,{new:true});
    res.json(TipoEquiposDB);

} catch (error) {
     return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});


module.exports=router;