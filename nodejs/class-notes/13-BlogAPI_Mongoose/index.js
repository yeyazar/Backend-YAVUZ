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

app.use(express.json());

// MongoDB connection with  Mongoose
require("./src/dbConnection.js");

app.all("/", (req, res) => {
	res.send("WELCOME TO BLOG API");
});

// Routes:
app.use(require("./src/routes/blogRoute.js"));

/* ------------------------------------------------------- */
// error handler
app.use(require("./src/errorHandler.js"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
