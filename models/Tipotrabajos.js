import mongoose from 'mongoose';
const Schema= mongoose.Schema;

var uniqueValidator=require('mongoose-unique-validator');


const tipoTrabajoSchema=new Schema({
        nombre_trabajo:{type:String, required:[true,'Nombre obligatorio']},
        descripcion:{type:String},
        activo:{type: Number, default: 1},
        creado:{type:Date, default:Date.now}
});


tipoTrabajoSchema.plugin(uniqueValidator,{message:'Error , esperaba{PATH} unico'});

const TipoTrabajos= mongoose.model('tipo_trabajos',tipoTrabajoSchema);
export default TipoTrabajos;