"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//* SEQUELIZE

const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))

const dbConnection = () => {

    
}

module.exports = { sequelize, DataTypes, dbConnection }

