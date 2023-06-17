import express  from "express";
import mongoDBConnection from "./db.js";
import dotenv from 'dotenv';
//routes
import auth from "./routes/auth.js";
import groupCrud from "./routes/groupCrud.js";
import utils from "./routes/utils.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
import ratelimit from 'express-rate-limit';
import { Server } from "socket.io";
import {setupSockets} from "./socket.js";
import seller from './routes/seller.js'

//rate limiter for api calls
const limiter = ratelimit({
    windowMs: 3 * 60 * 1000, // 3 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });
const port = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(cookieParser());
const httpServer = http.createServer(app);
const io = new Server(httpServer);
dotenv.config();
mongoDBConnection();
app.io = io;
app.use('/api/auth', auth,limiter);
app.use('/api/groups', groupCrud);
app.use('/api/seller', seller);
//routes for utilites
app.use("/api/utils",utils )
setupSockets(io);  // setup your socket listeners
app.get('/check', (req, res) => {
    res.send("hello world");
})

httpServer.listen(port, () => {
    console.log(`Outlet 34 Server listening on port ${port}`)
  })