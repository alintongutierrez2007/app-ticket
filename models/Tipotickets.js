import mongoose from 'mongoose';
const Schema= mongoose.Schema;

var uniqueValidator=require('mongoose-unique-validator');


const tipoticketSchema=new Schema({
        nombre_tipo_ticket:{type:String, required:[true,'Nombre obligatorio']},
        activo:{type: Number, default: 1},
        creado:{type:Date, default:Date.now}
});


tipoticketSchema.plugin(uniqueValidator,{message:'Error , esperaba{PATH} unico'});

const Tipotickets= mongoose.model('tipo_tickets',tipoticketSchema);
export default Tipotickets;