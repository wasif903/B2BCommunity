import express from "express";
import Group from "../models/Group.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import auth from "../models/auth.js";

const router = express.Router();

router.post("/create-group", authMiddleware(["Seller"]), async (req, res) => {
    try {

        const createGroup = new Group({
            groupName: req.body.groupName,
            userID: req.body.userID,
        });
        const saveGroup = await createGroup.save();
        res.status(201).json({ message: "Group Has Been Created Successfully", saveGroup });

    } catch (error) {
        res.status(500).json({ message: error });
    }
});


router.patch("/join-group/:GroupID", authMiddleware(["User"]), async (req, res) => {
    try {
        const { GroupID } = req.params;
        const findGroup = await Group.findById(GroupID);
        const findUser = await auth.findOne({ _id: req.body.userID });
        
        if (!findUser || !findGroup) {
            res.status(404).json({ error: "Data Not Found" });
        } else {
            findGroup.userID.push(findUser._id); // Push the user's _id value
            
            await findGroup.save(); // Save the updated group

            await auth.findByIdAndUpdate(
                findUser._id,
                { $set: { invitation: "Accepted" } } // Update the invitation status to "Accepted"
            );

            res.status(201).json({ message: "New User Has Joined", updateGroup: findGroup });
        }
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});



export default router;
