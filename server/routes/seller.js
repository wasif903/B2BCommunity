import express from "express";
import Post from "../models/groups/posts";
import userdetails from "../models/users/userdetails";
import Group from "../models/groups/groups";
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
    })
    res.status(200).json({ post });
}catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

export default router;