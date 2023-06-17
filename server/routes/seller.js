import express from "express";
import Post from "../models/groups/posts.js";
import userdetails from "../models/users/userdetails.js";
import Group from "../models/groups/Group.js";
import user from "../models/users/user.js";
const router = express.Router();

//route for creating a post for a specific group

router.post("/addpost", async (req, res) => {
  const groupid = req.body.groupid;
  const userid = req.body.userid;
  const title = req.body.title;
  const description = req.body.description;
  const media = req.body.media;

  try {
    const user = await userdetails.findOne({ userid: req.body.userid });
    if (!user) {
      res.status(400).send("User not found");
    }
    const group = await Group.findById(groupid);
    if (!group) {
      res.status(400).send("Group not found");
    }
    // Check if the user is an admin of the group
    const isAdmin = group.admins.some(
      (adminId) => adminId.toString() === userid
    );
    if (!isAdmin) {
      return res
        .status(403)
        .json({ error: "User is not an admin of the group" });
    }
    const post = await Post.create({
      title: title,
      description: description,
      media: media,
      group: groupid,
      author: userid,
    });
    res.status(200).json({ post });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//route for accepting user into group
router.post("/acceptuser", async (req, res) => {
  const groupid = req.body.groupid;
  const userid = req.body.userid;
  try {
    const group = await Group.findById(groupid);
    if (!group) {
      res.status(400).send("Group not found");
    }
    // Check if the user is an admin of the group
    const isAdmin = group.admins.some(
      (adminId) => adminId.toString() === userid
    );
    if (!isAdmin) {
      return res
        .status(403)
        .json({ error: "User is not an admin of the group" });
    }
    const user = await userdetails.findOne({ userid: req.body.userid });
    if (!user) {
      res.status(400).send("User not found");
    }
    const isMember = group.members.some(
      (memberId) => memberId.toString() === userid
    );
    if (isMember) {
      return res
        .status(403)
        .json({ error: "User is already a member of the group" });
    }
    group.members.push(userid);
    res.status(200).json({ message: "user Added to group successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});


// Fetch All Sellers
router.get('/all-sellers', async (req, res) => {

  try {
    const findSellers = await user.find({ role: 'Seller' }); // Filter users by role
    res.status(200).json(findSellers);
  } catch (error) {
    res.status(500).json(error);
    console.log(error.message);
  }

});

router.get('/unassigned-sellers', async (req, res) => {
  try {
    const assignedAdmins = await Group.distinct('admins');

    const unassignedSellers = await user
      .find({ _id: { $nin: assignedAdmins }, role: 'Seller' }) // Filter by role 'seller'
      .select('email'); // Adjust the field names based on your schema

    const unassignedSellersDetails = await userdetails
      .find({ userid: { $nin: assignedAdmins } })
      .select('userid firstName lastName');

    // Combine the data based on matching IDs
    const combinedData = unassignedSellers.map((seller) => {
      const details = unassignedSellersDetails.find((detail) => detail.userid.equals(seller._id));
      return {
        _id: seller._id,
        email: seller.email,
        firstName: details ? details.firstName : '',
        lastName: details ? details.lastName : '',
      };
    });

    res.status(200).json(combinedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


router.get('/assigned-sellers', async (req, res) => {
  try {
    const assignedAdmins = await Group.distinct('admins');

    const assignedSellers = await user
      .find({ _id: { $in: assignedAdmins }, role: 'Seller' })
      .select('_id email');

    const assignedSellersDetails = await userdetails
      .find({ userid: { $in: assignedAdmins } })
      .select('userid firstName lastName');

    const combinedData = await Promise.all(
      assignedSellers.map(async (seller) => {
        const details = assignedSellersDetails.find((detail) => detail.userid.equals(seller._id));

        // Retrieve the group ID instead of the admin ID
        const group = await Group.findOne({ admins: seller._id }).select('_id');

        return {
          _id: seller._id,
          groupID: group ? group._id : null,
          email: seller.email,
          firstName: details ? details.firstName : '',
          lastName: details ? details.lastName : '',
        };
      })
    );

    res.status(200).json(combinedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});





export default router;
