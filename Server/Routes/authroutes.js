import { Router } from "express";
import bcrypt from "bcrypt"
import { body, validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import User from "../models/user.js"
import generateToken from "../utills/genratetoken.js";


const router = Router()


// Create user

router.post("/createuser", body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter a valid password").isEmail(),
    body("password", "Password must be at least 5 character").isLength({ min: 5, }), async (req, res) => {
        try {
            let success = false
            let error = validationResult(req)
            if (!error.isEmpty()) {
                return res.status(400).json({ success: false, errors: errors.array() });
            }

            let salt = await bcrypt.genSalt(10)
            let password = req.body.password
            let hashpassword = await bcrypt.hash(password, salt)

            let result = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashpassword,
              })
           
            const authtoken = generateToken(result.id)
            res.status(200).json({ success: true, authtoken })
        }
        catch (e) {
            console.log(e);
            res.status(500).json({ error: "Internal Server Error" });
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
        const authtoken = generateToken(user.id)
        success = true;
        res.status(200).json({ success, authtoken });
    }
    catch (e) {
        res.status(500).json({error: "Internal Server Error"});
      }



})






export default router