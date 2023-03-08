
import express from 'express';
const router=express.Router();

import mongoose from 'mongoose';


import Tipotickets from '../models/Tipotickets';
import { verificarAuth } from '../middlewares/autenticacion';

//ruta para añadir
router.post('/nuevo-tipoticket',verificarAuth, async(req, res)=>{
 const body=req.body;
  try{

    const TipoticketsDB=await Tipotickets.create(body);
    res.status(200).json(TipoticketsDB)

  }catch(error){
     return res.status(500).json({
         mensaje:'Ocurrio un error',
         error
     })
  }

});




//ruta para todos los registros

router.get('/tipotickets',verificarAuth, async(req, res)=>{


try {
    const TipoticketsDB=await Tipotickets.find({"activo":1});
    res.status(200).json(TipoticketsDB);

} catch (error) {
    return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});






//ruta actualizar put

router.put('/tipotickets/:id',verificarAuth, async(req, res)=>{

const _id=req.params.id;
const body= req.body;

try {
    const TipoticketsDB=await Tipotickets.findByIdAndUpdate(_id,body,{new:true});
    res.json(TipoticketsDB);

} catch (error) {
     return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});


module.exports=router;