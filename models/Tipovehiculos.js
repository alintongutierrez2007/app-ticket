import mongoose from 'mongoose';
const Schema= mongoose.Schema;

var uniqueValidator=require('mongoose-unique-validator');


const tipoVehiculoSchema=new Schema({
        tipo_vehiculo:{type:String, required:[true,'Nombre obligatorio']},
        activo:{type: Number, default: 1},
        creado:{type:Date, default:Date.now}
});


tipoVehiculoSchema.plugin(uniqueValidator,{message:'Error , esperaba{PATH} unico'});

const TipoVehiculo= mongoose.model('tipo_vehiculos',tipoVehiculoSchema);
export default TipoVehiculo;