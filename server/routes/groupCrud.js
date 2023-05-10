import express from 'express'
import Group from '../models/Group.js'

const router = express.Router()


router.post('/create-group', async (req,res) => {

    const createGroup = new Group({
        groupName: req.body.groupName,
        userID: req.body.userID,
    })

    const saveGroup = await createGroup.save()

    res.status(201).json({message:"Group Has Been Created Successfully", saveGroup})
})



export default router