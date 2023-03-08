import mongoose from 'mongoose';
const Schema= mongoose.Schema;


const roles={
values:['ADMIN', 'USER'],
message:'{VALUE} rol no valido'
};


const uniqueValidator = require('mongoose-unique-validator');



const usuarioSchema=new Schema({
        nombre_usuario:{
                        type:String,
                        required:[true,'Nombre obligatorio'],
                        unique:true
                },
        rol: {type:String, default:'USER', enum: roles},
        usr : {
                 type:String,
                 required:[true,'Usr obligatorio'],
                 unique:true
                },
        pwd : {type:String, required:[true,'Pwd obligatorio']},
        estado:{type:Number,default:1},
        creado:{type:Date, default:Date.now}

});


usuarioSchema.plugin(uniqueValidator,{message:'Error , esperaba{PATH} unico'});


//ocultamos el pwd devuelto en objeto

usuarioSchema.methods.toJSON= function(){
  const obj=this.toObject();
  delete obj.pwd;
  return obj;

}



const Usuario= mongoose.model('usuarios',usuarioSchema);
export default Usuario;