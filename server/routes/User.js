const express=require("express");
const router=express.Router();

const {auth}=require("../controllers/Auth");

router.post("/CreateUser",auth);

module.exports=router;