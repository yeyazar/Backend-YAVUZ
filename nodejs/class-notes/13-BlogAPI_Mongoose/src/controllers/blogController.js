"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// https://mongoosejs.com/docs/queries.html

// catch error
require("express-async-error");

const { BlogPost } = require("../models/blogModel.js");

// ------------------------------------------
// BlogPost
// ------------------------------------------
module.exports.BlogPost = {
	list: async (req, res) => {
		const data = await BlogPost.find();

		res.status(200).send({
			error: false,
			result: data,
		});
	},

	create: async (req, res) => {
		const data = await BlogPost.insertOne(req.body);

		res.status(201).send({
			error: false,
			body: req.body,
			result: data,
		});
	},

	read: async (req, res) => {},

	update: async (req, res) => {},

	delete: async (req, res) => {},
};
