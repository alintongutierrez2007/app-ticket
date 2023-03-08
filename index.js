import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';




//conecion a DB
const uri='mongodb://localhost:27017/db_ticket';

const options={
                useNewUrlParser:true, 
                useCreateIndex:true,
                useUnifiedTopology: true,
                useFindAndModify: false
             };


mongoose.Promise=global.Promise; 
mongoose.connect(uri,options).then(
    ()=>{ console.log('conectado a mongo: db_tickets'); },
    err=>{console.log('error conectando con mongo:'+err);}

);



const app = express();
app.use(morgan('tiny'));
app.use(cors());



app.use(express.json({limit: '20mb'}));


app.use(express.urlencoded({extended:true}));



//rutas del servidor

app.use('/api',require('./routes/login'));

app.use('/api',require('./routes/usuarios'));

app.use('/api',require('./routes/tickets'));

app.use('/api',require('./routes/tipovehiculos'));

app.use('/api',require('./routes/tecnicos'));

app.use('/api',require('./routes/tipoequipos'));

app.use('/api',require('./routes/tipotrabajos'));

app.use('/api',require('./routes/tipotickets'));

app.use('/api',require('./routes/etiquetas'));


const history=require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));


app.set('puerto', process.env.PORT  || 3000);
app.listen(app.get('puerto'), function(){
console.log('escuchando en puerto:'+ app.get('puerto'));
});

