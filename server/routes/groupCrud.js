import express from "express";
import Group from "../models/Group.js";
import authMiddleware from "../middlewares/authMiddleware.js";

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

router.patch("/join-group/GroupID", authMiddleware(["User"]), async (req, res) => {

    try {

        const { GroupID } = req.params;
        const findGroup = await Group.findById(GroupID);
        const findUser = await auth.findOne({ _id: req.body.userID });
        
        if (!findUser && !findGroup) {
            res.status(404).json({ error: "Data Not Found" });
        } else {

            const pushedInUserID = await createGroup.userID.push(findUser);
            const updateGroup = Group.findByIdAndUpdate({
                userID: pushedInUserID,
            });
            
            const saveGroup = await updateGroup.save();

            res.status(201).json({ message: "New User Has Joined", saveGroup });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;
