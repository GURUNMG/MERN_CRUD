const express=require("express")
const mongoose=require("mongoose")

const app=express()
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/FULLSTACK",{useNewUrlParser:true})

app.listen(3001,()=>{
  console.log("server is listening on 3001")
})

const companyModel=require("./models/Company")
app.get("/",async(req,res)=>{
  const company=new companyModel({name:"GOOGLE",role:"developer",offers:5})

  try{
    await company.save()
  }
  catch(err)
  {
    console.log("ERROR",err)
  }
  res.send("stored")
})