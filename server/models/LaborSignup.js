const mongoose=require("mongoose");


   const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
        enum:["Employer","Worker"]
    },
    email:{
        type:String,
        required:true
    },
    jobrole:{
        type:String,
        required:true
    },
    availability:{
        type:String,
        required:true
    },
    projects:{
        type:String,
        required:true
    },
   
   })

   module.exports=mongoose.model("Worker",userSchema);