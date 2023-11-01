"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

/*-------------------------------------------------------------------------*/
//* SEQUELIZE

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite:" + (process.env.SQLITE || "./db.sqlite3"));

// Synchronization:
//! SYNC MUST RUN ONCE!
// sequelize.sync() // CREATE TABLE
// sequelize.sync({ force: true }) // DROP & CREATE
// sequelize.sync({ alter: true }); // TO BACKUP & DROP & CREATE & FROM BACKUP

// Connect:
sequelize
	.authenticate()
	.then(() => console.log("* DB Connected *"))
	.catch((err) => console.log("* DB Not Connected *", err));
