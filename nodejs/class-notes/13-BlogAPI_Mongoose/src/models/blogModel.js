"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema(
	{
		// _id: // AUTO CREATED

		// fieldName: String,  // Shortcut using
		fieldName: {
			type: String,
			default: null,
			trim: true,
			select: true,
			index: false, // Fast calling
			unique: false,
			// required: true,
			required: [true, "Error-Message"],
			enum: [[0, 1, 2, 3], "Error-Message"], // Pattern / Constraint
			validate: [
				// Filter function
				function (data) {
					return true;
				},
				"Error-Message",
			],
			get: function (data) {
				return true;
			},
			set: function (data) {
				return true;
			},
		},
	},
	{
		collection: "collectionName", // Table Name
		timestamps: true, // CreatedAt, UpdatedAt
	}
);
