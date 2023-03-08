import mongoose from 'mongoose';
const Schema= mongoose.Schema;

var uniqueValidator=require('mongoose-unique-validator');


const tecnicoSchema=new Schema({
        nombre_tecnico:{type:String, required:[true,'Nombre obligatorio']},
        activo:{type: Number, default: 1},
        creado:{type:Date, default:Date.now}
});


tecnicoSchema.plugin(uniqueValidator,{message:'Error , esperaba{PATH} unico'});

const Tecnico= mongoose.model('tecnicos',tecnicoSchema);
export default Tecnico;