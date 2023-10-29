"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
//? Middleware functions must be has three parameters.
//? Last parameter is for next().

//! next() for next Function:

// Middleware:
app.get("/", (req, res, next) => {

  // Request/Response parametresi ile next() metoduna veri gönderebilirim.
  req.customData = "Custom Data With Request";
  res.customDataWithResponse = "Custom Data With Response";

  next(); // Go to next Function.

  // next() komutundan sonra çıktı vermek anlamsız olacaktır. (Hata verecektir.)
  res.send({
    message: "Middleware running",
  });
});

app.get("/", (req, res) => {
  res.send({
    customData: [req.customData, res.customDataWithResponse],
    message: "Welcome to Home",
  });
});

/* ------------------------------------------------------- */
//! next() for next callBackFunction:

const middleFunction1 = (req, res, next) => {
  //   console.log(req.query);
  const skip = req.query.skip ?? false;

  req.customData = "Custom Data With Request";
  res.customDataWithResponse = "Custom Data With Response";

  if (skip) {
    // Bir sonraki route'a (bağımsız fonksiyona) git:
    next("route");
  } else {
    // Bir sonraki callback fonksiyona git:
    next();
  }
};

const middleFunction2 = (req, res, next) => {
  // next();

  res.send({
    customData: [req.customData, res.customDataWithResponse],
    message: "Here is func2, next() runned",
  });
};

// //? add to function like callBack:
// app.get('/', middleFunction1, middleFunction2, (req, res) => { ... } )
// //? It can be in array:
app.get("/", [middleFunction1, middleFunction2], (req, res) => {
  res.send({
    customData: [req.customData, res.customDataWithResponse],
    message: "Welcome to Home",
  });
});

app.get("/", (req, res) => {
  res.send({
    message: "next route",
  });
});

/* ------------------------------------------------------- *
//* Middlewares & use():

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
