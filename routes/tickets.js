
import express from 'express';
const router=express.Router();

import mongoose from 'mongoose';


import Ticket from '../models/Tickets';
import { verificarAuth } from '../middlewares/autenticacion';

//ruta para agregar 
router.post('/nuevo-ticket',verificarAuth, async(req, res)=>{
 const body=req.body;
  try{

    const TicketDB=await Ticket.create(body);
    res.status(200).json(TicketDB)

  }catch(error){
    console.log(error);
     return res.status(500).json({
         mensaje:'Ocurrio un error',
         error
     })
  }

});




//ruta para todos los registros abiertos que aun no se han cerrado.

router.get('/tickets-abiertos',verificarAuth, async(req, res)=>{


try {
    const TicketDB=await Ticket.find({"activo":1, "status":{$in:[0,2]}})
    .populate('id_tipo_vehiculo')
    .populate('id_tipo_equipo')
    .populate('id_tipo_ticket')
    .populate('id_tipo_trabajo').exec();
    res.status(200).json(TicketDB);

} catch (error) {
    console.log(error);
    return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});






router.post('/tickets-fechas-all', verificarAuth, async(req, res)=>{

   
    let desde=new Date(req.body.desde+'T00:00:00.000-06:00');
    let hasta=new Date(req.body.hasta+'T23:59:59.000-06:00');

    console.log(req.body.desde);
    console.log(req.body.hasta);
  
  
    try{
           const TicketDB=await Ticket.find({
               "activo":1,
               "fecha_reportado":{$gte:new Date(desde),$lte:new Date(hasta)} })
                .populate('id_tipo_vehiculo')
                .populate('id_tipo_equipo')
                .populate('id_tipo_ticket')
                .populate('id_tipo_trabajo')
                .populate('id_etiqueta')
                .populate('id_tecnico').sort({fecha:"descending"}).exec();
  
           res.status(200).json(TicketDB);
  
    }catch(error){
      console.log(error);
  
      return res.status(400).json({
          mensaje:'Ocurrio un error',
          error
      })
   }
  
  });
  
  router.post('/tickets-fechas', verificarAuth, async(req, res)=>{

   
    let desde=new Date(req.body.desde+'T00:00:00.000-06:00');
    let hasta=new Date(req.body.hasta+'T23:59:59.000-06:00');

    console.log(req.body.desde);
    console.log(req.body.hasta);
  
  
    try{
           const TicketDB=await Ticket.find({
               "status":1,  //status 1-> solo devuelve ya solucionadas
               "activo":1,
               "fecha_reportado":{$gte:new Date(desde),$lte:new Date(hasta)} })
                .populate('id_tipo_vehiculo')
                .populate('id_tipo_equipo')
                .populate('id_tipo_ticket')
                .populate('id_tipo_trabajo')
                .populate('id_etiqueta')
                .populate('id_tecnico').sort({fecha:"descending"}).exec();
  
           res.status(200).json(TicketDB);
  
    }catch(error){
      console.log(error);
  
      return res.status(400).json({
          mensaje:'Ocurrio un error',
          error
      })
   }
  
  });




//ruta actualizar put

router.put('/tickets/:id',verificarAuth, async(req, res)=>{

const _id=req.params.id;
const body= req.body;

try {
    const TicketDB=await Ticket.findByIdAndUpdate(_id,body,{new:true});
    res.json(TicketDB);

} catch (error) {
    console.log(error);
     return res.status(400).json({
        mensaje:'error ocurrido', error
    })
}

});


module.exports=router;