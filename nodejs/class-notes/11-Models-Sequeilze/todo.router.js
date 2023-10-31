"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const router = require("express").Router();

const Todo = require("./todo.model");

// LIST:
router.get("/", async (req, res) => {
	// const data = await Todo.findAll()
	const data = await Todo.findAndCountAll();
	res.send({
		error: false,
		result: data,
	});
});

// CREATE






module.exports = router
