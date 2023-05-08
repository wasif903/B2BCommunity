import express from "express";
import User from "../models/auth.js";

const router = express();

router.post("/register", async (req, res) => {
    try {

        const createUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const saveUser = await createUser.save();

        res.status(200).json({ message: "Logged in successfully", saveUser });

    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});
export default router;