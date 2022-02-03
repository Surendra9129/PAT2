const PORT=8585;
const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
app.listen(PORT,()=>{
  console.log(`port is running on ${PORT}`);
})