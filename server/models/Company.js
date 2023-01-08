const mongoose=require("mongoose")

const companySchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  role:{
    required:true,
    type:String
  },
  offers:{
    required:true,
    type:Number
  }
})
const collection_name="data"
const company =mongoose.model(collection_name,companySchema) 

module.exports =company;