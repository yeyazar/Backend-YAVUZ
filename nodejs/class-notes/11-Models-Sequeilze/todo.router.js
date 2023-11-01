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
router.post("/", async (req, res) => {
	const data = await Todo.create(req.body);
	res.send({
		error: false,
		body: req.body, // Send Data
		message: "Created",
		result: data, // Receive Data
	});
});

// READ
router.get("/:id", async (req, res) => {
	// https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
	// const data = await Todo.findOne({ where: { id: req.params.id } })

	const data = await Todo.findByPk(req.params.id);
	res.send({
		error: false,
		result: data,
	});
});

// UPDATE
router.put("/:id", async (req, res) => {
	// Model.update({ newData }, { filter })
	const isUpdated = await Todo.update(req.body, { where: { id: req.params.id } });
	res.send({
		error: false,
		body: req.body, // Send Data
		message: "Updated",
		isUpdated: Boolean(isUpdated[0]),
		result: await Todo.findByPk(req.params.id),
	});
});

// DELETE
router.delete("/:id", async (req, res) => {
	// Model.destroy({filter})
	const isDeleted = await Todo.destroy({ where: { id: req.params.id } });
	res.send({
		error: false,
		message: "Deleted",
		isDeleted: Boolean(isDeleted[0]),
	});
});

module.exports = router;
