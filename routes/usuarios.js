import express from 'express';

import bcrypt from  '../node_modules/bcryptjs';

const router=express.Router();

import Usuario from '../models/Usuarios';
import { verificarAuth, verificarAdministrador } from '../middlewares/autenticacion';




    //ruta para agregar nuevo usuario

  
    router.post('/nuevo-usuario',[verificarAuth , verificarAdministrador], async(req, res)=>{

    // Store hash password in DB
        var hash = bcrypt.hashSync(req.body.pwd, 10);
        
            const datosUsuario={
                nombre_usuario:req.body.nombre_usuario,
                rol:req.body.rol,
                usr:req.body.usr,
                pwd:hash
            };

            
        try{   
            const UsuarioDB=await Usuario.create(datosUsuario);
            res.status(200).json(UsuarioDB)
        }catch(error){
            return res.status(500).json({
                mensaje:'Ocurrio un error',
                error
            })
        }

    });



//ruta para todos los registros


router.get('/usuarios',[verificarAuth , verificarAdministrador], async(req, res)=>{

    try {
        const UsuarioDB=await Usuario.find().exec();
        res.status(200).json(UsuarioDB);
    
    } catch (error) {
        return res.status(400).json({
            mensaje:'error ocurrido', error
        })
    }
    
    });





//actualizamos usuario pero con autenticacion de token de acceso


      router.put('/usuario/:id', [verificarAuth , verificarAdministrador], async(req, res)=>{

        const _id=req.params.id;

        const body=req.body;


        
        try {

            const Usuariobuscado=await Usuario.findOne({"_id":_id});

                //si existe no encriptamos nuevmanete la contraseña

                if(body.pwd){
                        if(Usuariobuscado.pwd==req.body.pwd){
                            body.pwd=req.body.pwd
                        }else{
                            body.pwd=bcrypt.hashSync(req.body.pwd, 10);
                        }
                    }

            const UsuarioDB=await Usuario.findByIdAndUpdate(_id,body,{new:true});
            res.json(UsuarioDB);
        
        } catch (error) {
             return res.status(400).json({
                mensaje:'error ocurrido', error
            })
        }
        
        });




//verificarAuth
        router.put('/update-usuario/:id',[verificarAuth , verificarAdministrador], async(req, res)=>{

            const _id=req.params.id;
            const body=req.body;
            
        
            console.log('recibimos:');
            console.log(body);
    
    
            
            try {
    
                const Usuariobuscado=await Usuario.findOne({"_id":_id});

                if(Usuariobuscado){
                        console.log('pwd1:'+Usuariobuscado.pwd);
                        console.log('pwdr:'+body.pwd);
    
                    //si existe no encriptamos nuevmanete la contraseña
    

                         if(bcrypt.compareSync(body.pwd, Usuariobuscado.pwd)){

                        

                           let nuevo_pwd=bcrypt.hashSync(body.nuevo_pwd, 10);
                           let bodyupdate={pwd:nuevo_pwd};

                             const UsuarioDB=await Usuario.findByIdAndUpdate(_id,bodyupdate,{new:true});
                            if(UsuarioDB){
                                res.json({mensaje:'datos actualizados'});
                            }
                             

                            }else{
                                res.json({mensaje:'contraseña no coincide'});
                            }
                        

                    }else{
                        res.json({mensaje:'usuario no existe'});
                    }
    
                
            
            } catch (error) {
                 return res.status(400).json({
                    mensaje:'error ocurrido', error
                })
            }
            
            });





   
module.exports=router;