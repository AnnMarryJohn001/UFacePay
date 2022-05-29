const express=require("express");
const router = express.Router();
const User=require("../models/userModel");


router.route("/create").post((req,res) =>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const accno=req.body.accno;
    const phoneno=req.body.phoneno;
    const balance=req.body.balance;
    const pswd=req.body.pswd;
    const newUser = new User({
        fname,
        lname,
        accno,
        phoneno,
        balance,
        pswd
    });
    newUser.save();

})

router.route("/check").get((req,res) =>{

    
    User.find().then(foundUsers=>res.json(foundUsers))

})




module.exports=router;


