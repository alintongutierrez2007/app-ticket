const jwt = require('jsonwebtoken');



const verificarAuth = (req,res, next) =>{


       const token=req.get('token');

       jwt.verify(token,'D1s4T31.@uzuario',(err, decoded)=>{
            if(err){
                
                  return  res.status(400).json({mensaje:"acceso no permitido"})
                    
            }


            //recogemos el detalle de usuario enviado dentro del token
            req.usuario=decoded.data;




            //en caso que no retorne acceso no permitido, continuara aejecucion
             next();

       });


     


}



const verificarAdministrador = (req, res, next) => {

            const rol=req.usuario.rol;
            if(rol=='ADMIN'){
                next();
            }else{

               return res.status(401).json({mensaje:"usuario no valido"})
            }

};


module.exports= { verificarAuth, verificarAdministrador };