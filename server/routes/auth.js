import express from "express";
import AuthSchema from "../models/auth.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post("/register", async (req, res) => {
    
    try {

        const isUserExist = await AuthSchema.findOne({email:req.body.email});

        if (isUserExist) {
          res.status(403).json({message:"Email Already Exists"})
        } else {

            const securedPass = await bcrypt.hash(req.body.password, 10); 

            const createUser = new AuthSchema({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                companyName: req.body.companyName,
                VAT_ID: req.body.VAT_ID,
                addressLine: req.body.addressLine,
                zipCode: req.body.zipCode,
                city: req.body.city,
                country: req.body.country,
                email: req.body.email,
                password: securedPass,
                roles: req.body.roles,
            });
        
            const saveUser = await createUser.save();


            const token = await jwt.sign(
                {
                    email:createUser.email,
                    userID:createUser.id,
                    roles:createUser.roles,
                    invitation:createUser.invitation

                }, process.env.JWT_SECRET)
    
            res.status(200).json({ message: "Registered in successfully", saveUser, token:token });

        } 
            
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});


router.post('/login', async (req, res) => {
    
    try {
    
        const UserExists = await AuthSchema.findOne({email:req.body.email})

        if (UserExists) {

            const comparePass = await bcrypt.compare(req.body.password, UserExists.password);

            if (comparePass) {
                
                const token = await jwt.sign(
                    {
                        email:UserExists.email,
                        userID:UserExists.id,
                        roles:UserExists.roles,
                        invitation:UserExists.invitation
    
                    }, process.env.JWT_SECRET)

            res.status(200).json({message:"Logged In Successfully", token})

            } else {
                res.status(400).json({message:"Passwords Dont Match"});
            }

        } else {
            res.status(404).json({message:"Account Not Found"})
        }

        
    } catch (error) {
        res.status(500).json(error)
    }

})

export default router;