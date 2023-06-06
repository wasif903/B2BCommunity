import express from "express";
import Group from "../models/groups/Group.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import auth from "../models/users/user.js";

const router = express.Router();


router.post('/create-group',  async (req, res) => {
  try {
    const {
      groupName,
      groupDesc,
      groupType,
      grouplocation,
      admins,
      members,
      pendingRequests,
      invitedUsers,
      posts,
    } = req.body;

    const newGroup = new Group({
      groupName,
      groupDesc,
      groupType,
      grouplocation,
      admins,
      members,
      pendingRequests,
      invitedUsers,
      posts,
    });

    const savedGroup = await newGroup.save();
    res.status(201).json(savedGroup);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// router.post('')


// Create Group Endpoint
// router.post("/create-group", authMiddleware(["Seller"]), async (req, res) => {
//     try {

//         const createGroup = new Group({
//             groupName: req.body.groupName,
//             userID: req.body.userID,
//         });
//         const saveGroup = await createGroup.save();
//         res.status(201).json({ message: "Group Has Been Created Successfully", saveGroup });

//     } catch (error) {
//         res.status(500).json({ message: error });
//     }
// });


// Update Group Endpoint
router.patch("/update-group/:groupID", authMiddleware(["Seller"]), async (req, res) => {
    try {

        const { groupID } = req.params;

        const findGroup = await Group.findById(groupID);

        if (findGroup) {

            findGroup.groupName = req.body.groupName || findGroup.groupName

            const saveUpdateGroup = await findGroup.save();
            res.status(200).json({ message: "Group Has Been Created Successfully", saveUpdateGroup });
        } else {
            res.status(404).json({ message: "Group Not Found" })
        }

    } catch (error) {
        res.status(500).json({ message: error });
        console.log(error)
    }
});

// All Groups Endpoint
router.get("/get-groups", async (req, res) => {

    try {
        const findGroups = await Group.find();

        if (findGroups) {
            res.status(200).json({ message: "All Groups Has Been Listed Successfully", findGroups });
        } else {
            res.status(404).json({ message: "Groups Not Found" });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
});



// Requesting To Join Group Endpoint
router.patch("/request-join-group/:GroupID", authMiddleware(["User"]), async (req, res) => {
    try {
        const { GroupID } = req.params;
        const findGroup = await Group.findById(GroupID);
        const findUser = await auth.findOne({ _id: req.body.userID });

        if (!findUser || !findGroup) {
            res.status(404).json({ error: "Data Not Found" });
        } else {
            const existingUserIndex = findGroup.userID.findIndex(id => id.equals(findUser._id));

            if (existingUserIndex !== -1) {
                // User already exists in the group, update the invitation status
                findGroup.userID[existingUserIndex].invitation = "Pending";
            } else {
                // User doesn't exist in the group, add the user
                findGroup.userID.push({
                    _id: findUser._id,
                    invitation: "Pending"
                });
            }

            await findGroup.save(); // Save the updated group

            await auth.findByIdAndUpdate(
                findUser._id,
                { $set: { invitation: "Pending" } } // Update the invitation status to "Pending"
            );

            res.status(200).json({ message: "Waiting For Seller To Accept Your Invitation", updateGroup: findGroup });
        }
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

// Accepting Request To Join Group From Seller Endpoint
router.patch("/:sellerID/group-request-accepted/:GroupID", authMiddleware(["Seller"]), async (req, res) => {
    try {
        const { GroupID } = req.params;
        const { sellerID } = req.params;
        const findGroup = await Group.findById(GroupID);
        const findSeller = await auth.findById(sellerID);
        const findUser = await auth.findOne({ _id: req.body.userID });

        if (!findUser || !findGroup || !findSeller) {
            res.status(404).json({ error: "Data Not Found" });
        } else {
            const existingUserIndex = findGroup.userID.findIndex(id => id.equals(findUser._id));

            if (existingUserIndex !== -1) {
                // User already exists in the group, update the invitation status
                findGroup.userID[existingUserIndex].invitation = "Accepted";
            } else {
                // User doesn't exist in the group, add the user
                findGroup.userID.push({
                    _id: findUser._id,
                    invitation: "Accepted"
                });
            }

            await findGroup.save(); // Save the updated group

            await auth.findByIdAndUpdate(
                findUser._id,
                { $set: { invitation: "Accepted" } } // Update the invitation status to "Accepted"
            );

            res.status(200).json({ message: "Your Invitation Has Been Accepted By The Seller", updateGroup: findGroup });
        }
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});


export default router;
