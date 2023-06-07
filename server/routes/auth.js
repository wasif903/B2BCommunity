import express from "express";
import users from '../models/users/user.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import transporter from "../utils/NodeMailerConfig.js";
import userdetails from "../models/users/userdetails.js";
import userotp from "../models/users/userotp.js";

const router = express.Router();
//route for seller registeration
router.post("/register", async (req, res) => {
  try {

    const isUserExist = await users.findOne({ email: req.body.email });

    if (isUserExist) {
      return res.status(403).json({ message: "Email Already Exists" });
    } else {
      const securedPass = await bcrypt.hash(req.body.password, 10);

      const otpCode = await Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      // Save the OTP code to the user's record in the database
      const getOtpCode = otpCode;
      const getOtpExpire = Date.now() + 600000; // OTP expires in 10 minutes

      const createUser = new users({
        email: req.body.email,
        password: securedPass,
        role: req.body.role,
      });

      const saveUser = await createUser.save();


      const createUserDetails = new userdetails({
        userid: createUser._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        companyName: req.body.companyName,
        VAT_ID: req.body.VAT_ID,
        addressLine: req.body.addressLine,
        zipCode: req.body.zipCode,
        city: req.body.city,
        country: req.body.country
      })


      const createOtp = new userotp({
        userid: createUser._id,
        otpCode: getOtpCode,
        otpExpire: getOtpExpire,
      });

      const saveUserDetails = await createUserDetails.save();
      const saveOtp = await createOtp.save();

      // Set up the email message options
      const mailOptions = {
        from: "abdulrehman@techsmiths.co", // sender address
        to: createUser.email, // receiver address
        subject: "Welcome to My Website", // Subject line
        html: `<p>Confirm Your OTP ${otpCode}</p>`, // plain text body
      };

      // Send the email with the OTP code
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Email sending failed" });
        } else {
          console.log("Email sent: " + info.response);
          return res
            .status(200)
            .json({ message: "OTP created and sent successfully" });
        }
      });



      res.status(200).json({ status: 200, user: saveUser, userDetails: saveUserDetails, otp: saveOtp });
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});
//route for verifying the otp
router.patch("/verify-otp", async (req, res) => {
  try {
    const userExist = await users.findOne({ email: req.body.email });


    if (!userExist) {
      res.status(404).json({ message: "User Not Found" });
    } else {

      const checkOtp = await userotp.findOne({ userid: userExist._id })
      if (checkOtp.otpCode === req.body.otpCode) {
        // Check if OTP has expired
        const currentTime = Date.now();
        const otpExpirationTime =
          new Date(checkOtp.otpExpire).getTime() + 10 * 60 * 1000; // Adding 10 minutes in milliseconds

        if (currentTime > otpExpirationTime) {
          await userExist.updateOne({ $unset: { otpCode: "", otpExpire: "" } });
          res.status(400).json({ status: 400, message: "OTP has expired" });
        } else {
          await checkOtp.updateOne({ verification: true });

          const cookie = await jwt.sign(
            {
              email: checkOtp.email,
              userID: checkOtp.id,
              role: checkOtp.role,
              invitation: checkOtp.invitation,
            },
            process.env.JWT_SECRET
          );

          // Generate a cookie and set it in the response
          res.cookie("cookie", cookie, { httpOnly: true });

          res
            .status(200)
            .json({ status: 200, otpCode: checkOtp, cookie: cookie });
        }
      } else {
        res.status(400).json({ status: 400, message: "INCORRECT OTP" });
      }
    }
  } catch (error) {
    res.status(500).json({ status: 500, error });
    console.log(error);
  }
});
//route for login
router.post(
  "/login",
  [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email address"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const userExists = await users.findOne({ email: req.body.email });

      if (userExists) {
        const comparePass = await bcrypt.compare(
          req.body.password,
          userExists.password
        );

        if (comparePass) {
          const cookie = await jwt.sign(
            {
              email: userExists.email,
              userID: userExists.id,
              role: userExists.role,
              invitation: userExists.invitation,
            },
            process.env.JWT_SECRET
          );

          // Generate a cookie and set it in the response
          res.cookie("cookie", cookie, { httpOnly: true });

          res.status(200).json({ status: 200, message: "Logged In Successfully", cookie, user: userExists });
        } else {
          res.status(400).json({ message: "Passwords Don't Match" });
        }
      } else {
        res.status(404).json({ message: "Account Not Found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
);


router.patch('/resend-otp', async (req, res) => {
  try {
    const userExist = await users.findOne({ email: req.body.email });

    if (!userExist) {
      res.status(404).json({ message: "Account With This Email Doesn't Exist" })
    } else {

      const resendOtp = await userotp.findOne({ userid: userExist._id });

      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

      // Save the OTP code to the user's record in the database
      resendOtp.otpCode = otpCode;
      resendOtp.otpExpire = Date.now() + 600000; // OTP expires in 10 minutes

      // Set up the email message options
      const mailOptions = {
        from: "abdulrehman@techsmiths.co", // sender address
        to: userExist.email, // receiver address
        subject: "Welcome to My Website", // Subject line
        html: `<p>Confirm Your OTP ${otpCode}</p>`, // plain text body
      };

      // Send the email with the OTP code
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Email sending failed" });
        } else {
          console.log("Email sent: " + info.response);
          return res
            .status(200)
            .json({ message: "OTP created and sent successfully" });
        }
      });

      const saveUpdatedOtp = await resendOtp.save();

      res.status(200).json({ data: saveUpdatedOtp, status: 200 });

    }

  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.patch('/forgot-password', async (req, res) => {
  try {
    const userExist = await users.findOne({ email: req.body.email });
    if (!userExist) {
      res.status(404).json({ message: "Account With This Email Doesn't Exist" })
    } else {

      const resendOtp = await userotp.findOne({ userid: userExist._id });

      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

      // Save the OTP code to the user's record in the database
      resendOtp.otpCode = otpCode;
      resendOtp.otpExpire = Date.now() + 600000; // OTP expires in 10 minutes

      // Set up the email message options
      const mailOptions = {
        from: "abdulrehman@techsmiths.co", // sender address
        to: userExist.email, // receiver address
        subject: "Welcome to My Website", // Subject line
        html: `<p>Confirm Your OTP ${otpCode}</p>`, // plain text body
      };

      // Send the email with the OTP code
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Email sending failed" });
        } else {
          console.log("Email sent: " + info.response);
          return res
            .status(200)
            .json({ message: "OTP created and sent successfully" });
        }
      });

      const saveUpdatedOtp = await resendOtp.save();
      res.status(200).json({ data: saveUpdatedOtp, status: 200 });
    }

  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
})


router.patch('/reset-password', async (req, res) => {
  try {
    const userExist = await users.findOne({ email: req.body.email });
    if (!userExist) {
      res.status(404).json({ message: "Account With This Email Doesn't Exist" })
    } else {

      const resendOtp = await userotp.findOne({ userid: userExist._id });
      const resetHashedPass = await bcrypt.hash(req.body.password, 10)

      if (resendOtp.otpCode === req.body.otpCode) {
        userExist.password = resetHashedPass || userExist.password
      } else {
        res.status(400).json({ message: "Invalid Opt Code" })
      }


      // Set up the email message options
      const mailOptions = {
        from: "abdulrehman@techsmiths.co", // sender address
        to: userExist.email, // receiver address
        subject: "Welcome to My Website", // Subject line
        html: `<p>Your Password Has Changed Successfully</p>`, // plain text body
      };

      // Send the email with the OTP code
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Email sending failed" });
        } else {
          console.log("Email sent: " + info.response);
          return res
            .status(200)
            .json({ message: "OTP created and sent successfully" });
        }
      });

      const saveUpdatedPass = await userExist.save();
      res.status(200).json({ data: saveUpdatedPass, status: 200 });
    }

  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
})


export default router;
