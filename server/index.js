import express  from "express";
import mongoDBConnection from "./db.js";
import dotenv from 'dotenv';
import auth from "./routes/auth.js";
import groupCrud from "./routes/groupCrud.js";
import cookieParser from 'cookie-parser';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

dotenv.config();
mongoDBConnection();

app.use('/auth', auth);
app.use('/groups', groupCrud);

app.get('/check', (req, res) => {
    res.send("hello world");
})

app.listen(process.env.PORT , () => console.log(`app listening on port ${process.env.PORT}`));