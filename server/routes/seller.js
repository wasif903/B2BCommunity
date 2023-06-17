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
    res.status(200).json({ message:"user Added to group successfully" });
  }catch (error) {
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


export default router;
