// const express = require("express");
import express from "express";
import morgan from "morgan"
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter} from "./routser.js"; // here we destructure the imported obj


const app = express();

/* Handle Functions*/
const rootHandler = (req, res) => res.send("Hey you, what are you doing?");

const profileHandler = (req, res) =>
    res.send("You are in my profile, can i help you????");


app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(helmet()) // another middleware for security
app.use(morgan('dev')); /** the use method to make the middleware acceptable`*/

app.get("/", rootHandler);
app.get("/profile", profileHandler);
app.use('/user', userRouter)

export default app;

/**
 * MVC
 * M -> the data
 * V -> the view or how does this data look like
 * C -> the controller function, the function that controls this data
 * so mvc is just a model or how to deal with data
 */
/