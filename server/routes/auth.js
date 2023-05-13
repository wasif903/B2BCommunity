import express from "express";
import AuthSchema from "../models/auth.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { body, validationResult } from 'express-validator';

const router = express.Router();


router.post("/register", [
    // Validation rules for each field
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('companyName').notEmpty().withMessage('Company name is required'),
    body('VAT_ID').notEmpty().withMessage('VAT ID is required'),
    body('addressLine').notEmpty().withMessage('Address line is required'),
    body('zipCode').notEmpty().withMessage('Zip code is required'),
    body('city').notEmpty().withMessage('City is required'),
    body('country').notEmpty().withMessage('Country is required'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const isUserExist = await AuthSchema.findOne({ email: req.body.email });

        if (isUserExist) {
            return res.status(403).json({ message: "Email Already Exists" });
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

            const cookie = await jwt.sign(
                {
                    email: createUser.email,
                    userID: createUser.id,
                    roles: createUser.roles,
                    invitation: createUser.invitation
                }, process.env.JWT_SECRET
            );

            // Generate a cookie and set it in the response
            res.cookie('cookie', cookie, { httpOnly: true });

            res.status(200).json({ message: "Registered in successfully", saveUser, cookie });
        }
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});



router.post('/login', [
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required')
], async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const userExists = await AuthSchema.findOne({ email: req.body.email });

        if (userExists) {
            const comparePass = await bcrypt.compare(req.body.password, userExists.password);

            if (comparePass) {
                const cookie = await jwt.sign(
                    {
                        email: userExists.email,
                        userID: userExists.id,
                        roles: userExists.roles,
                        invitation: userExists.invitation
                    }, process.env.JWT_SECRET
                );

                // Generate a cookie and set it in the response
                res.cookie('cookie', cookie, { httpOnly: true });

                res.status(200).json({ message: "Logged In Successfully", cookie });
            } else {
                res.status(400).json({ message: "Passwords Don't Match" });
            }
        } else {
            res.status(404).json({ message: "Account Not Found" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});



export default router;