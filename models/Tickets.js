import mongoose from 'mongoose';
const Schema= mongoose.Schema;


const ticketsSchema=new Schema({

        numero_ticket:{type:Number},
        id_equipo:{type:String, required:[true,'Id AVL obligatorio']},
        nombre_codigo:{type:String, required:[true,'Nombre obligatorio']},
        placa:{type: String},
        grupo:{type:String, required:[true,'grupo obligatorio']},

        id_tipo_vehiculo:{type:Schema.Types.ObjectId, ref:'tipo_vehiculos', required:[true,'tipo vehiculo obligatorio']}, 

        id_tipo_equipo:{type:Schema.Types.ObjectId, ref:'tipo_equipos', required:[true,'tipo gps obligatorio']}, //starlink, sf, one, basico

        id_tipo_ticket:{type:Schema.Types.ObjectId, ref:'tipo_tickets'}, //reporte de fallas o solicitud de trabajo


        descripcion:{type:String},
        fecha_reportado:{type:Date, required:[true,'fecha reportado obligatorio'] },

        id_tipo_trabajo:{type:Schema.Types.ObjectId, ref:'tipo_trabajos', required:[true,'id tipo trabajo no funciona']}, //Revision, traslado, 
        id_tecnico:{type:Schema.Types.ObjectId, ref:'tecnicos'},

        accion_correcion:{type:String}, //  'Envio comandos', 'Revision fisica'  existe solo si es revision
        id_etiqueta:{type:Schema.Types.ObjectId, ref:'etiquetas'},  //equipo manipulado,  fusible quemado, etc

        fecha_solucion:{type:Date},

        comentario_atc:{type:String}, //comentario de cindy
        comentario_tecnico:{type:String}, //comentario de tecnicos

        status:{type:Number, default:0}, //0 -> pendiente , 1 -> solucionado, 2-> pendiente vehiculo no disponible
        horas_espera_ticket:{type:Number},
        cumple_sla:{type:Number, default:1}, // 1-> si cumple     0-> no cumple

        fecha_llegada_tenico:{type:Date},
        fecha_inicio_tenico:{type:Date},
        fecha_fin_tecnico:{type:Date},
        horas_espera_tecnico:{type:Number},

        activo:{type:Number, default:1},
        creado:{type:Date, default:Date.now},
        actualizado:{type:Date, default:Date.now},
        registrado:{type:String}

});



const Ticket= mongoose.model('tickets',ticketsSchema);
export default Ticket;