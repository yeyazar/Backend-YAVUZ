"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * $ npm init -y
 * $ npm i express dotenv express-async-errors
 * $ npm i mongoose
 */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Session Cookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session
const session = require("cookie-session");

app.use(
	session({
		secret: process.env.SECRET_KEY || "secret_keys_for_cookies",
		// name: cookie,  // default:req.session
		// maxAge: 1000 * 60 * 60 * 24, // 1 day in ms
	})
);

/* ------------------------------------------------------- */

app.use(express.json());

// MongoDB connection with  Mongoose
require("./src/dbConnection.js");

app.all("/", (req, res) => {
	res.send("WELCOME TO BLOG API");
});

// Routes:
app.use("/user", require("./src/routes/userRoute.js"));
app.use("/blog", require("./src/routes/blogRoute.js"));

/* ------------------------------------------------------- */
// Synchronization
require("./src/sync.js")();

// error handler
app.use(require("./src/errorHandler.js"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
