import { Router } from 'express';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { OAuth2Client } from 'google-auth-library';
import user from '../models/users/user.js';
import userdetails from '../models/users/userdetails.js';

const router = Router();
const clientId = '405649527749-r45ht00vdr2arc67bajdu0nuspic7c82.apps.googleusercontent.com';
const clientSecret = 'GOCSPX - unufSu - LI8gEvBjfCfo9q - FnsKA0';
const redirectUri = 'http://localhost:5173/home';

const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);

passport.use(
    new GoogleStrategy(
      {
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: redirectUri + 'google/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        // Handle the user profile data returned by Google
        // Create a new user or retrieve an existing user from your database
        // Generate a session token or JWT for user authentication
        // Call the 'done' function to indicate successful authentication
        done(null, profile);
      }
    )
  );
  
  // Create the Google signup route
  router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  
  // Create the Google callback route
  router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      // Extract user data from the profile
      const { id, displayName, emails } = req.user;
      const googleId = id;
      const name = displayName;
      const email = emails[0].value;
  
      // Create a new User instance
      const newUser = new User({
        googleId,
        email,
      });
  
      // Save the user data to the database
      newUser.save((err) => {
        if (err) {
          // Handle the error
          console.error(err);
          return res.status(500).json({ error: 'Failed to save user data' });
        }
  
        // Create a new UserDetails instance
        const userDetails = new UserDetails({
          userId: newUser._id,
          firstName: email,
        });
  
        // Save the user details to the database
        userDetails.save((err) => {
          if (err) {
            // Handle the error
            console.error(err);
            return res.status(500).json({ error: 'Failed to save user details' });
          }
  
          res.status(200).json({ user: newUser, userDetails });
        });
      });
    }
  );
  
  export default router;