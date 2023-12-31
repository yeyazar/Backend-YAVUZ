"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

/*------------------------------------------------------- *

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
				function (data) {return true;},"Error-Message",],
			get: function (data) {return true;},
			set: function (data) {return true;},
		},
	},
	{
		collection: "collectionName", // Table Name
		timestamps: true, // CreatedAt, UpdatedAt
	}
);

/*------------------------------------------------------- */

/* ------------------------------------------------------- */
// ------------------------------------------
// BlogCategory
// ------------------------------------------

const blogCategorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
		},
	},
	{
		collection: "blogCategories",
		timestamps: true,
	}
);

// ------------------------------------------
// BlogPost
// ------------------------------------------
const blogPostSchema = new mongoose.Schema(
	{
		// _id ->> given automatically

		blogCategoryId:{
			type: mongoose.Schema.ObjectId, // Relational ObjectId
			ref: 'BlogCategory', // ModelName down below
			required: true,
		},

		title: {
			type: String,
			trim: true,
			required: true,
		},

		content: {
			type: String,
			trim: true,
			required: true,
		},

		published: {
			type: Boolean,
			default: true,
		},

		// CreatedAt & UpdatedAt will be added automatically
	},
	{ collection: "blogPosts", timestamps: true }
);

// const blogPostModel = mongoose.model("BlogPost", blogPostSchema);

// module.exports = {
// 	BlogPost: blogPostModel,
// };

module.exports = {
	BlogCategory: mongoose.model("BlogCategory", blogCategorySchema),
	BlogPost: mongoose.model("BlogPost", blogPostSchema),
};
