import express from 'express'
import posts from '../models/groups/posts.js';
import Group from '../models/groups/Group.js';
import user from '../models/users/user.js';

const router = express.Router();

// Create Post Endpoint
router.post('/create-post', async (req, res) => {
    try {
        const findUser = await user.findOne({ _id: req.body.author, role: 'Seller' });
        const findGroup = await Group.findOne({ _id: req.body.group });

        if (!findUser) {
            return res.status(400).json({ message: "User Not Found" });
        } else if (!findGroup) {
            return res.status(400).json({ message: "Group Not Found" });
        } else {
            if (findGroup.admins.includes(req.body.author) || findGroup.admins !== null) {
                const createPost = await new posts({
                    title: req.body.title,
                    description: req.body.description,
                    group: req.body.group,
                    author: req.body.author,
                });

                const savePost = await createPost.save();

                return res.status(201).json({ status: 201, savePost });
            } else {
                return res.status(400).json({ message: "You are not allowed to make this request" });
            }
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Get All Post endpoint 
router.get('/all-posts', async (req, res) => {
    try {
        const findPosts = await posts.find();
        res.status(200).json({ status: 200, findPosts });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// Get Single Post 
router.get('/:grpID/single-post/:postID', async (req, res) => {

    const { grpID, postID } = req.params;

    const findGroup = await Group.findById(grpID);
    const findSingle = await posts.findById(postID)

    if (!findGroup) {
        res.status(404).json({ message: "Group Not Found" });
    } else if (!findSingle) {
        res.status(404).json({ message: "Group Not Found" });
    } else {
        res.status(200).json({ status: 200, findSingle })
    }

})

// Delete Posts
router.delete('/:grpID/:authorID/delete-post/:postID', async (req, res) => {
    try {
        const { grpID, authorID, postID } = req.params
        const findUser = await user.findById(authorID);
        const findGroup = await Group.findById(grpID);


        if (!findUser) {
            return res.status(400).json({ message: "User Not Found" });
        } else if (!findGroup) {
            return res.status(400).json({ message: "Group Not Found" });
        } else {
            if (findUser.role === 'Seller' || findUser.admins !== null) {


                const findPost = await posts.findByIdAndDelete(postID);

                return res.status(201).json({ status: 201, findPost, message: "Post Deleted Successfully" });
            } else {
                return res.status(400).json({ message: "You are not allowed to make this request" });
            }
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

export default router;