const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/FULLSTACK",{useNewUrlParser:true})

app.listen(3001,()=>{
  console.log("server is listening on 3001")
})

const companyModel=require("./models/Company")
app.post("/insert",async(req,res)=>{

  const company=req.body.company
  const role_name=req.body.role
  const offer_count=req.body.offer
  const company1=new companyModel({name:company,role:role_name,offers:offer_count})

  try{
    await company1.save()
  }
  catch(err)
  {
    console.log("ERROR",err)
  }
  res.send("stored")
})

app.get("/read",(req,res)=>{
  companyModel.find({},"name role offers",(err,data)=>{
    if(err) res.send("ERROR")
    res.send(data)
  })
})

app.delete("/remove/:id",async(req,res)=>{
  const id=req.params.id

  // await companyModel.findByIdAndRemove(id)
  await companyModel.findByIdAndRemove(id).exec()
  res.send("deleted")
})
