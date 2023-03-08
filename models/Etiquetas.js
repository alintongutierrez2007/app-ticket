import mongoose from 'mongoose';
const Schema= mongoose.Schema;

var uniqueValidator=require('mongoose-unique-validator');


const etiquetasSchema=new Schema({
        nombre_etiqueta:{type:String, required:[true,'Nombre obligatorio']},
        activo:{type: Number, default: 1},
        creado:{type:Date, default:Date.now}
});


etiquetasSchema.plugin(uniqueValidator,{message:'Error , esperaba{PATH} unico'});

const Etiquetas= mongoose.model('etiquetas',etiquetasSchema);
export default Etiquetas;