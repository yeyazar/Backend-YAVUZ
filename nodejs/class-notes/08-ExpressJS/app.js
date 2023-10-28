"use strict";
/* -------------------------------------------------------
    EXPRESSJS
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
 */

/* ExpressJS Start */
const express = require("express");
const app = express();

/* ENV */
require("dotenv").config();
const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 8000;
