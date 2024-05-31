const mongoose=require("mongoose");
const User=require("../models/User")
// const Labours=require("../models/Labours")
// const LabourSignup=require("../models/LabourSignup")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const LabourSignup = require("../models/LabourSignup");
// import {useSelector} from "react-redux";
require("dotenv").config();
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

    try{
       hashedpassword = await bcrypt.hash(password, 10)
    }
    catch(error){
        return res.json({
            success:false,
            message:"Failed while encryption password",
            error: error.message
        })
    }
  
    const user=await User.create({
              firstname,lastname,email,password:hashedpassword,accounttype
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

exports.labourregister=async(req,res)=>{
    try{
        const {name,age,phone,address,email,jobrole,availability,projects}=req.body;

        if(!name||!age||!phone||!address||!email||!jobrole||!availability||!projects)
        {
            return res.status(403).json({
                success:false,
                message:"All fields are required"
            })
        }
        const existinguser=await LabourSignup.find({email});
console.log("hbh",existinguser);
        if(existinguser[0])
        {
            return res.status(403).json({
                success:false,
                message:"User Already Registered"
            })
        }

        const user=await LabourSignup.create({
            name,age,phone,address,email,jobrole,availability,projects
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
            message:"Failed to Register",
            error:err.message
        })
    }
}

exports.login=async(req,res)=>{
   
    try{
        console.log(1);
        const {email,password}=req.body;
        if(!email||!password)
        {
            return res.json({
                success:false,
                message:"All fields are required"
            })
        }
        console.log(2);
        const existinguser=await User.find({email});
        console.log(existinguser);
     
        if(!existinguser)
        {
            return res.json({
                success:false,
                message:"User is not registered"
            })
        }

        const payload={
            email:existinguser.email,
            id:existinguser._id,
            accounttype:existinguser.accounttype,
        }
        console.log("Password is", password)
        console.log("Existing User Password is", existinguser[0].password)

        if(await bcrypt.compare(password,existinguser[0].password))
        {
            let token=jwt.sign(payload,
                process.env.JWT_SECRET,
                {
                    expiresIn:"2h",
                })


            
            existinguser.token=token;
            existinguser.password=undefined;
            
            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                existinguser,
                message:"User Logged In successsfully"
            })
            
            
        }
        else
        {
            return res.status(403).json({
                success:false,
                message:"Password Incorrect"
            })
        }
        
        // console.log(existinguser[0].email)
        // console.log(email)
        // if(existinguser[0].email=email)
        // {
        //     console.log("Logged In")
        //     return res.json({
        //         success:true,
        //         message:"Logged In"
        //     })
        // }

        // if(await bcrypt.compare(password,existinguser.password))
        // {
        //     const payload={
        //         email:existinguser.email,
        //         id:existinguser._id,
        //         role:existinguser.role
        //     }
            
        //     const token=jwt.sign(payload,
        //                          process.env.JWT_secret,
        //                         {
        //                             expiresIn:"2h"
        //                         })
        //      existinguser=existinguser.toObject();
        //      existinguser.token=token;
        //      existinguser.password=undefined;
             
        //      const options={
        //         expires:new Date(Date.now()+3*24*60*60*1000),
        //         httpOnly:true
        //      }

        //      res.cookie("token",token,options).status(200).json({
        //         success:true,
        //         token,
        //         existinguser,
        //         message:"User Logged In successfully"

        //      })
        // }
        // else
        // {
        //     return res.json({
        //         success:false,
        //         message:"Password Did not match"
        //     })
        // }
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"Failed to Login",
            error:err.message
        })
    }

}


exports.showAllLabour = async (req, res) => {
    console.log("Request Is ",req.body);
    const {email}=req.body;
    console.log("naam hai",email);
  try {
    const allCategorys = await LabourSignup.find()
    console.log("Backend pe data check",allCategorys)
    res.status(200).json({
      success: true,
      data: allCategorys,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}