
import express from 'express';
const router=express.Router();

import mongoose from 'mongoose';


import TipoVehiculo from '../models/Tipovehiculos';
import { verificarAuth } from '../middlewares/autenticacion';



//ruta para agregar 

router.post('/nuevo-tipovehiculo',verificarAuth, async(req, res)=>{
 const body=req.body;
  try{

    const TipoVehiculoDB=await TipoVehiculo.create(body);
    res.status(200).json(TipoVehiculoDB)

  }catch(error){
     return res.status(500).json({
         mensaje:'Ocurrio un error',
         error
     })
  }

});




//ruta para todos los registros

router.get('/tipovehiculos',verificarAuth, async(req, res)=>{


try {
    const TipoVehiculoDB=await TipoVehiculo.find({"activo":1});
    res.status(200).json(TipoVehiculoDB);

} catch (error) {
    return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});






//ruta actualizar put

router.put('/tipovehiculos/:id',verificarAuth, async(req, res)=>{

const _id=req.params.id;
const body= req.body;

try {
    const TipoVehiculoDB=await TipoVehiculo.findByIdAndUpdate(_id,body,{new:true});
    res.json(TipoVehiculoDB);

} catch (error) {
     return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});


module.exports=router;