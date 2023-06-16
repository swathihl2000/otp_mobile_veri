require('dotenv/config');
const mongoose=require('mongoose');
const app=require('./app');

mongoose.connect('mongodb+srv://swathi1:swathi123@sbs.yurdma2.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error',err=>{
    console.log('connection failed')
});

mongoose.connection.on('connected',connected=>{
    console.log('connected with database')
});
const port=process.env.PORT ||4000

app.listen(port,()=>{
    console.log(`app running on port ${port}!`)
})