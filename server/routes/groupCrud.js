import express from "express";
import Group from "../models/groups/Group.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import auth from "../models/users/user.js";
import user from "../models/users/user.js";
import userdetails from "../models/users/userdetails.js";

const router = express.Router();

// Create Group Endpoint
router.post("/create-group", async (req, res) => {
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

// Update Group Endpoint
router.patch("/update-group/:groupID", async (req, res) => {
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


router.delete('/remove-group/:groupID', async (req, res) => {
    try {
        const groupID = req.params;
        const findGroups = await Group.findByIdAndDelete(groupID);
        if (findGroups) {
            res.status(200).json({ message: "Group Has Been Deleted Successfully" });
        } else {
            res.status(404).json({ message: "No Group Found" });
        }
    } catch (error) {
        res.status(500).json(error);
    }

})


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

router.get('/available-groups-to-assign', async (req, res) => {
    try {
        const groupsWithoutSeller = await Group.find({ admins: { $exists: false } });

        res.status(200).json(groupsWithoutSeller);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.get("/single-group/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const findGroups = await Group.findById(id);

        if (findGroups) {
            res.status(200).json(findGroups);
        } else {
            res.status(404).json({ message: "Group Not Found" });
        }
    } catch (error) {
        res.status(500).json({ message: error });
        console.log(error)
    }
});

// Request TO Join The Group Endpoint
router.patch('/:groupID/request-to-join', async (req, res) => {
    try {
        const groupID = req.params.groupID;
        const findUser = await user.findOne({ email: req.body.email });

        const pendingDetail = await userdetails.findOne({ userid: findUser._id })

        const findGroup = await Group.findById(groupID);

        if (!findUser || !pendingDetail) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!findGroup) {
            return res.status(404).json({ message: "Group not found" });
        }

        if (findGroup.pendingRequests.includes(findUser._id)) {
            return res.status(400).json({ message: "User already has a pending request to join this group" });
        }

        pendingDetail.invitation = "Pending" || pendingDetail.invitation

        findGroup.pendingRequests.push(findUser._id);

        await pendingDetail.save();
        await findGroup.save();

        res.status(200).json(findGroup);
    } catch (error) {
        res.status(500).json({ message: error });
        console.log(error)
    }
});

// Get All the Pending Requests Of The Group
router.get('/:groupID/get-pending-requests', async (req, res) => {
    try {
        const groupID = req.params.groupID; // Access the groupID parameter correctly
        const findGroup = await Group.findById(groupID).populate('pendingRequests', '-password');

        if (!findGroup) {
            return res.status(404).json({ message: "Group not found" });
        }

        const pendingRequests = findGroup.pendingRequests;

        // Query user collection to retrieve user details
        const users = await userdetails.find({ userid: { $in: pendingRequests } }, '-password');


        res.status(200).json(users);

    } catch (error) {
        res.status(500).json(error);
        console.log(error.message);
    }
});


//   Reject Group Request 
router.patch('/:groupID/reject-request/:userID', async (req, res) => {
    try {
        const groupID = req.params.groupID;
        const userID = req.params.userID;

        const findGroup = await Group.findById(groupID);

        if (!findGroup) {
            return res.status(404).json({ message: "Group not found" });
        }

        const index = findGroup.pendingRequests.indexOf(userID);

        if (index === -1) {
            return res.status(404).json({ message: "User not found in pending requests" });
        }

        findGroup.pendingRequests.splice(index, 1);
        await findGroup.save();

        res.status(200).json({ message: "Request rejected successfully" });
    } catch (error) {
        res.status(500).json(error);
        console.log(error.message);
    }
});

// Accept Group Request 
router.patch('/:groupID/accept-request/:userID', async (req, res) => {
    try {
        const groupID = req.params.groupID;
        const userID = req.params.userID;

        const findGroup = await Group.findById(groupID);

        if (!findGroup) {
            return res.status(404).json({ message: "Group not found" });
        }

        const index = findGroup.pendingRequests.indexOf(userID);

        if (index === -1) {
            return res.status(404).json({ message: "User not found in pending requests" });
        }

        findGroup.pendingRequests.splice(index, 1);
        findGroup.members.push(userID);
        await findGroup.save();

        res.status(200).json({ message: "Request accepted successfully" });

    } catch (error) {
        res.status(500).json(error);
        console.log(error.message);
    }
});

// Get All Members
router.get('/:groupID/get-all-members', async (req, res) => {
    try {
        const groupID = req.params.groupID;
        const findGroup = await Group.findById(groupID).populate('members', '-password');

        if (!findGroup) {
            return res.status(404).json({ message: "Group not found" });
        }

        const members = findGroup.members;

        const users = await userdetails.find({ userid: { $in: members } }, '-password');

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json(error);
        console.log(error.message);
    }
});

// Remove Member
router.patch('/:groupID/remove-member/:userID', async (req, res) => {
    try {
        const groupID = req.params.groupID;
        const userID = req.params.userID;

        const findGroup = await Group.findById(groupID);

        if (!findGroup) {
            return res.status(404).json({ message: "Group not found" });
        }

        const index = findGroup.members.indexOf(userID);

        if (index === -1) {
            return res.status(404).json({ message: "User not found in pending requests" });
        }

        findGroup.members.splice(index, 1);
        await findGroup.save();
        res.status(200).json({ message: "Member Removed Successfully" });

    } catch (error) {
        res.status(500).json(error);
        console.log(error.message);
    }
});


// Assign Group to sellers
router.patch('/:groupID/assign-group/:sellerID', async (req, res) => {
    try {
        const { groupID, sellerID } = req.params;

        const findGroup = await Group.findById(groupID);

        if (!findGroup) {
            return res.status(404).json({ message: "Group Not Found" });
        }

        const findSeller = findGroup.admins.includes(sellerID);

        if (findSeller) {
            return res.status(409).json({ message: "Seller Already Assigned to Group" });
        }

        const existingGroup = await Group.findOne({ admins: sellerID });

        if (existingGroup) {
            return res.status(409).json({ message: "Seller Already Assigned to Another Group" });
        }

        findGroup.admins.push(sellerID);
        await findGroup.save();

        res.status(200).json({ message: "Group Assigned to Seller Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


router.get('/unassigned-sellers', async (req, res) => {
    try {
        const assignedAdmins = await Group.distinct('admins');

        const unassignedSellers = await user.find({ _id: { $nin: assignedAdmins } })
            .select('email'); // Adjust the field names based on your schema

        const unassignedSellersDetails = await userdetails.find({ userid: { $nin: assignedAdmins } })
            .select('userid firstName lastName');

        // Combine the data based on matching IDs
        const combinedData = unassignedSellers.map((seller) => {
            console.log("Seller Id Here",seller._id);
            const details = unassignedSellersDetails.find((detail) => detail.userid.equals(seller._id));
            console.log("userDetail Id Here",details);
            return {
                _id: seller._id,
                email: seller.email,
                firstName: details ? details.firstName : '',
                lastName: details ? details.lastName : ''
            };
        });

        res.status(200).json(combinedData);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    
});






export default router;