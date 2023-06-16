const express=require('express');
const app=express();
const userRouter=require('./Routers/userRouter');

app.use('/api/user',userRouter);



app.use((req,res,next)=>{
    res.status(404).json({
        error:"url not found"
    })
    res.status(200).json({
        msg: 'App is runnung'
    })
})





module.exports=app;