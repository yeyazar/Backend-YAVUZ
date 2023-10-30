"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
 * npm i express-async-handler
 */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

app.get("/user/:id", (req, res) => {
	const id = req.params.id ?? 0;
	if (isNaN(id)) {
		res.statusCode = 400;
		throw new Error("ID is Not A Number", { cause: "params.id=" + id });
	} else {
		res.send({
			error: false,
			id: id,
		});
	}
});

/* ------------------------------------------------------- *
// TRY-CATCH:

app.get('/user/:id', (req, res, next) => {

    try {
        const id = req.params.id ?? 0
        if (isNaN(id)) {
            throw new Error('ID is Not A Number', { cause: 'params.id='+id })
        } else {
            res.send({ 
                error: false, 
                id: id
            })
        }
    } catch (err) {

        console.log('try-catch runned')
        next(err) // Go to errorHandler()

        res.send({ 
            error: true, 
            message: err.message,
            cause: err.cause
        })
    }

})
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
//? use(errorHandler) kodlamanın en sonunda yer almalı.

const errorHandler = (err, req, res, next) => {
    const statusCode = res.errorStatusCode ?? 500

	console.log("errorHandler runs");

	res.status(statusCode).send({
		error: true, // special data
		message: err.message, // Error string Message
		cause: err.cause, // Error optional cause
		// stack: err.stack, // Error Details.
	});
};
//? for run errorHandler call in use.
//? It must be at last middleware.
app.use(errorHandler);

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
