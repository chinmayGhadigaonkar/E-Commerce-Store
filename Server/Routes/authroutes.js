import { Router } from "express";
import bcrypt from "bcrypt"
import { body ,validationResult } from "express-validator";
import User from "../models/user.js"

const router = Router()


// Create user

router.post("/createuser", body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter a valid password").isEmail(),
    body("password", "Password must be at least 5 character").isLength({  min: 5,}), async (req, res) => {
        try{
            let success  = false
            let error = validationResult(req)
            if(!error.isEmpty()){
                return res.status(400).json({ success:false,errors: errors.array() });
            }

            let salt =  await bcrypt.genSalt(10)
            let password = req.body.password
            let hashpassword =await bcrypt.hash(password,salt)

            let user= await User.create({
                name:req.body.name,
                email:req.body.email,
                password:hashpassword
            })

            res.status(200).json({success:true, user})
        }
        catch(e){
            console.log(e);
            res.status(500).json({error:"Internal Server Error"});
        }
    })

    


export default router