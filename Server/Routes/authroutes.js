import { Router } from "express";
import bcrypt from "bcrypt"
import { body, validationResult } from "express-validator";

import User from "../models/user.js"

import setCookie from "../utills/storetoken.js";
import { authMiddleware, authorizeRoles } from "../Midware/authMiddleware.js";


const router = Router()


// Create user

router.post("/createuser", body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter a valid password").isEmail(),
    body("password", "Password must be at least 5 character").isLength({ min: 5, }), async (req, res) => {
        try {
            let success = false
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
        

            let salt = await bcrypt.genSalt(10)
            let password = req.body.password
            let hashpassword = await bcrypt.hash(password, salt)

            let user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashpassword,
              })
           

            setCookie(user,201,res)
        }
        catch (e) {
            console.log(e);
            res.statusCode(500).json({ error: e });
        }
    })


// Login 
router.post('/login', [
    body("email", "Enter a valid password").isEmail(),
    body("password", "password cannot be blank").exists(),
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {

            return res.json({ success, error: "please try to login with valid credential" });
        }
        const comparepassword = await bcrypt.compare(password, user.password);
        if (!comparepassword) {

            return res.json({ success, error: "please try to login with valid credential" });
        }
        success = true;
        setCookie(user,201,res)
    }
    catch (e) {
        res.status(500).json({error: '"Please Enter Email & Password"'});
      }



})


// Logout

router.get('/logout',async(req,res)=>{
    try{
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
          });
        
          res.status(200).json({
            success: true,
            message: "Logged Out",
          });

    }
    catch(e){
        res.status(500).json({error: e});

    }
})


// update user  password

router.put('/updatepassword' ,authMiddleware , async(req,res)=>{
    try{
        const user = await User.findById(req.user.id)

        let ispasswordMatch = await user.comparepassword(req.body.oldPassword)
    
        if(!ispasswordMatch){
            res.status(400).json({error:"old password does not match"})
        }

        if(req.body.newPassword !== req.body.confirmPassword){
            res.status(400).json({error:"password does not match"})
        }
    
        user.password= req.body.newPassword;
        await user.save()
        setCookie(user,200,res)
    }
    catch(e){
        res.status(500).json({error:"Internal Error "})
    }
   
} )


//  get  all user -- Admin 

router.get("/admin/getallusers",authMiddleware ,authorizeRoles(true),async(req,res)=>{
    try{
        const users = await User.find().select("-password");
        res.status(200).json({success:true, users})
    }
    catch(e){
        res.status(400).json({e:"Internal Server error"})
    }
})

//  Get on user -- Admin 
router.get("/admin/getoneuser/:id",authMiddleware ,authorizeRoles(true),async(req,res)=>{
    try{
        const user = await User.findById(req.params.id).select("-password");
        res.status(200).json({success:true, user})
    }
    catch(e){
        res.status(400).json({e:"Internal Server error"})
    }
})




// Update user detail -- Admin 

router.put("/admin/updateuser/:id",authMiddleware ,authorizeRoles(true),async(req,res)=>{
    try{
        const query = req.body;    
         let user = await User.findById(req.params.id);

         if(!user){
            res.json("No user of this id")
         }

         user = await User.findByIdAndUpdate(req.params.id,{$set:query},{new:true}).select("-password")

        res.status(200).json({success:true ,user})
    }
    catch(e){
        res.status(404).json({e:"Internal Server error"})
    }
})


//  Delete user -- Admin 

router.delete("/admin/deleteuser/:id",authMiddleware ,authorizeRoles(true),async(req,res)=>{
    try{
         const user = await User.findByIdAndDelete(req.params.id)

         if(!user){
            res.json("No user of this id")
         }

        res.status(200).json({success:true , msg: " Delete user successfully  "})
    }
    catch(e){
        res.status(404).json({e:"Internal Server error"})
    }
})











export default router