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

const company =mongoose.model('data',companySchema) 

module.exports =company;