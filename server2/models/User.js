const mongoose=require("mongoose");


   const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    accounttype:{
        type:String,
        enum:["Employer","Worker"]
    }
   })

   module.exports=mongoose.model("Worker",userSchema);