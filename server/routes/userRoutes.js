const {signup,login,labourregister,showAllLabour}=require("../controllers/Auth")
const express=require("express");
const router=express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/labourregister",labourregister)
router.get("/labourdetails",showAllLabour)

module.exports = router;

