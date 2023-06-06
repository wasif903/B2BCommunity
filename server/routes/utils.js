import express from "express";
import multer from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import multers3 from "multer-s3";
import xpath  from "path";

const router = express.Router();
//intialize s3 client
const s3 = new S3Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});
const Storage = multers3({
  s3: s3,
  acl: "public-read",
  bucket: "content0123",
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
  },
  key: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + xpath.extname(file.originalname)
    );
  },
});
//middleware for uploading a single file
const upload = multer({
  storage: Storage,
}).single("file");
//middleware for uploading multiple files
const uploads = multer({
  storage: Storage,
}).array("files", 5);

//route for uploading a image to s3 bucket
router.post("/uploadimage", (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        console.log(err);
        res.status(401).json({ error: "Not Uploaded" });
      } else{
        const dd = await Image.create({
            _id: req.user.id,
            path: `http://d1dp5nanfre15g.cloudfront.net/${req.file.key}`,
            // path: `/${req.file.path.replace(/\\/g, "/")}`,,
            //req.file.location,
          });
          res.json(dd);
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

export default router;
