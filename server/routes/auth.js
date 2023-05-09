import express from "express";
import AuthSchema from "../models/auth.js";

const router = express();

router.post("/register", async (req, res) => {
    try {

        const createUser = new AuthSchema({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            companyName: req.body.companyName,
            VAT_ID: req.body.VAT_ID,
            addressLine: req.body.addressLine,
            zipCode: req.body.zipCode,
            city: req.body.city,
            country: req.body.email,
            password: req.body.password,
            roles: req.body.roles,
        });

        const saveUser = await createUser.save();

        res.status(200).json({ message: "Logged in successfully", saveUser });

    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});
export default router;