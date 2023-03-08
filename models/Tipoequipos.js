import mongoose from 'mongoose';
const Schema= mongoose.Schema;

var uniqueValidator=require('mongoose-unique-validator');


const tipoEquipoSchema=new Schema({
        nombre_equipo:{type:String, required:[true,'Nombre obligatorio']},
        activo:{type: Number, default: 1},
        creado:{type:Date, default:Date.now}
});


tipoEquipoSchema.plugin(uniqueValidator,{message:'Error , esperaba{PATH} unico'});

const TipoEquipos= mongoose.model('tipo_equipos',tipoEquipoSchema);
export default TipoEquipos;