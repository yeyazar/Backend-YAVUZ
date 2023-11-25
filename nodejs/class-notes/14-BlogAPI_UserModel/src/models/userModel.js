"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
----------------------------------------------------- */

const mongoose = require("mongoose");
const passwordEncrypt = require("../helpers/passwordEncrypt.js");

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			trim: true,
			unique: true,
			required: [true, "Email field must be given."],
			validate: [
				// (email) => (email.indexOf("@")>0 && email.indexOf(".")>0), // ValidationCheck
				(email) => email.includes("@") && email.includes("."), // ValidationCheck

				"Incorrect email format", // ErrorMessage
			],
		},

		password: {
			type: String,
			trim: true,
			required: true,
			set: (password) => passwordEncrypt(password),
		},

		firstName: String,

		lastName: String,
	},
	{
		collection: "users",
		timestamps: true,
	}
);

module.exports = mongoose.model("User", UserSchema);
