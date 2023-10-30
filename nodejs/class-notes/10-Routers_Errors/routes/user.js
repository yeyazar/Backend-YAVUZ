"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

// const express = require("express");
// const router = express.Router();

const router = require("express").Router();

const routeControl = (req, res, next) => {
	const { username} = req.query;

	if (username == "clarusway") {
		next();
	} else {
		res.send({
			message: "Wrong username/password",
		});
	}
};

router.use();

router.get("/", (req, res) => {
	res.send({ message: "All User" });
});
router.get("/login", (req, res) => {
	res.send({ message: "Login" });
});
router.get("/logout", (req, res) => {
	res.send({ message: "Logout" });
});
router.get("/:userId", (req, res) => {
	res.send({ message: "User Page" });
});
router.get("/:userId/password", (req, res) => {
	res.send({ message: "Pasword Page" });
});

module.exports = router;
