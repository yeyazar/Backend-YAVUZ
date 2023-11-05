"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			trim: true,
			unique: true,
			required: [true, "Email field must be given."],
		},

		password: {
			type: String,
			trim: true,
			required: true,
		},

		firstName: String,

		lastName: String,
	},
	{
		collection: "users",
		timestamps: true,
	}
);
