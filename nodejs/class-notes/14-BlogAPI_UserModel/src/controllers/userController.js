"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// catch error
require("express-async-errors");

const User = require("../models/userModel");

// ------------------------------------------
// User
// ------------------------------------------
module.exports.User = {
	list: async (req, res) => {
		const data = await User.find();

		res.status(200).send({
			error: false,
			count: data.length,
			result: data,
		});
	},

	create: async (req, res) => {
		const data = await User.create(req.body);

		res.status(201).send({
			error: false,
			body: req.body,
			result: data,
		});
	},

	read: async (req, res) => {
		// req.params.userId
		// const data = await User.findById(req.params.userId );
		const data = await User.findOne({ _id: req.params.userId });

		res.status(200).send({
			error: false,
			result: data,
		});
	},

	update: async (req, res) => {
		// const data = await User.updateOne({ _id: req.params.userId }, req.body);
		const data = await User.updateOne({ _id: req.params.userId }, req.body, {
			runValidators: true,
		});

		res.status(202).send({
			error: false,
			body: req.body,
			result: data,
			newData: await User.findOne({ _id: req.params.userId }),
		});
	},

	delete: async (req, res) => {
		const data = await User.deleteOne({ _id: req.params.userId });

		res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
	},
};