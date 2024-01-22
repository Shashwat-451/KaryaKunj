const mongoose=require("mongoose");
const User=require("../models/User")
const bcrypt=require("bcrypt")

exports.signup=async(req,res)=>{
   

    try{
    const{firstname,lastname,email,password,confirmpassword,accounttype}=req.body;
    
    if(!firstname||!lastname||!email||!password||!confirmpassword||!accounttype)
    {
        return res.status(403).json({
            success:false,
            message:"All fields are required"
        })
    }

    // const existinguser=await User.find({email});

    // if(existinguser)
    // {
    //     return res.json({
    //         success:true,
    //         message:"User Already Existing"
    //     })
    // }

    let hashedpassword;

    // try{
    //     hashedpassword=await bcrypt(password,10)
    // }
    // catch{
    //     return res.json({
    //         success:false,
    //         message:"Failed while encryption password"
    //     })
    // }

    const user=await User.create({
              firstname,lastname,email,password,accounttype
    })

    return res.json({
        success:true,
        message:"User Registered"
    })
    
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
     
            success:false,
            message:"Fail to Register"
        })
    }
}


exports.login=async(req,res)=>{
   
    try{
        const {email,password}=req.body;
        if(!email||!password)
        {
            return res.json({
                success:false,
                message:"All fields are required"
            })
        }

        const existinguser=await User.find({email});

        if(!existinguser)
        {
            return res.json({
                success:false,
                message:"User does not exist"
            })
        }

        if(await bcrypt.compare(password,existinguser.password))
        {
            const payload={
                email:existinguser.email,
                id:existinguser._id,
                role:existinguser.role
            }
            
            const token=jwt.sign(payload,
                                 process.env.JWT_secret,
                                {
                                    expiresIn:"2h"
                                })
             existinguser=existinguser.toObject();
             existinguser.token=token;
             existinguser.password=undefined;
             
             const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true
             }

             res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                existinguser,
                message:"User Logged In successfully"

             })
        }
        else
        {
            return res.json({
                success:false,
                message:"Password Did not match"
            })
        }
    }
    catch{
        return res.status(500).json({
            success:false,
            message:"Failed to Login"
        })
    }

}