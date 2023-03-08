import express from 'express';

import bcrypt from  '../node_modules/bcryptjs';

const router=express.Router();

import Usuario from '../models/Usuarios';

const jwt = require('jsonwebtoken');



    //ruta para buscarUsuario

    router.post('/login', async(req, res)=>{
        
        const pwd_payload=req.body.pwd;
            
        try{   
                const UsuarioDB=await Usuario.findOne({"usr":req.body.usr, "estado":1}).exec();

                if(UsuarioDB){

                            let passwordDB=UsuarioDB.pwd;

                            if(bcrypt.compareSync(pwd_payload, passwordDB)){


                                //generamos un token
                             const token= jwt.sign({
                                                    data: UsuarioDB
                                                 }, 'D1s4T31.@uzuario',
                                                 { expiresIn: 60 * 60 * 24 * 30 });  // 30 dia valido token



                                res.status(200).json({
                                    UsuarioDB, 
                                    token
                                });


                            }else{
                                res.status(500).json({mensaje:"usuario o password incorrecto"})
                            }

                }else{
                        res.status(500).json({mensaje:"usuario o password incorrecto"})
                }
        
        }catch(error){
            return res.status(500).json({
                mensaje:'Ocurrio un error',
                error
            })
        }

    });







    module.exports=router;
