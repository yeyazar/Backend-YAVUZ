"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/*-------------------------------------------------------------------------*/
// Accept json data & convert to object:
app.use(express.json())

app.all("/", (req, res) => {
	res.send("WELCOME TODO API");
});

/*-------------------------------------------------------------------------*/
//* SEQUELIZE
//? npm i sequelize sqlite3

const { Sequelize, DataType } = require('sequelize')



/*-------------------------------------------------------------------------*/
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler runned.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
        body: req.body,
    })
}
app.use(errorHandler)
/*-------------------------------------------------------------------------*/
app.listen(PORT, () => console.log("Running -> http://127.0.0.1:" + PORT));
