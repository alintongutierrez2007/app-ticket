
import express from 'express';
const router=express.Router();

import mongoose from 'mongoose';


import Etiquetas from '../models/Etiquetas';
import { verificarAuth } from '../middlewares/autenticacion';

//ruta para agregar etiqueta desde post
router.post('/nueva-etiqueta',verificarAuth, async(req, res)=>{
 const body=req.body;
  try{

    const EtiquetasDB=await Etiquetas.create(body);
    res.status(200).json(EtiquetasDB)

  }catch(error){
     return res.status(500).json({
         mensaje:'Ocurrio un error',
         error
     })
  }

});




//ruta para todos los registros

router.get('/etiquetas',verificarAuth, async(req, res)=>{


try {
    const EtiquetasDB=await Etiquetas.find({"activo":1});
    res.status(200).json(EtiquetasDB);

} catch (error) {
    return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});






//ruta actualizar put

router.put('/etiquetas/:id',verificarAuth, async(req, res)=>{

const _id=req.params.id;
const body= req.body;

try {
    const EtiquetasDB=await Etiquetas.findByIdAndUpdate(_id,body,{new:true});
    res.json(EtiquetasDB);

} catch (error) {
     return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});


module.exports=router;