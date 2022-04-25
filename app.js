const express=require('express')

const app=express

app.use(express.static('./'))

app.get('./img',(req,res)=>{

})