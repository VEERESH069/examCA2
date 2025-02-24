const {Router} = require('express');
const router = Router();
//const users = require('./index')

router.put('/change-pass',async(req,res)=>{
    const {email} = req.body;
    const userEmail = await user.findOne({email});
    if (!user){
        return res.status(400).json({message:"Email not found"});
    }
    const {newpassword} = req.body;
    const user = {
        email:email,
        password:newpassword,
    }
    res.status(200).json({message:"Password updated Successfully"});


})

router.delete('/delet-account',async(req,res)=>{
    const {email} = req.body;
    const Useremail = await users.findOne({email});
    if (!Useremail){
        return res.status(200).json({message:"Email not found"});
    } 

    res.status(200).json({message:"User Deleted successfully"})


})
module.exports = router;