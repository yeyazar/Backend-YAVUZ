"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGODB)
	.then(() => console.log(" * DB Connected to MongoDB * "))
	.catch((err) => console.log(" * DB NOT!!! Connected * ", err));
