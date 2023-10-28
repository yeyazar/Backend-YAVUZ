"use strict"
/* -------------------------------------------------------
    EXPRESSJS
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
*/

/* ExpressJS Start */
const express = require('express'); // Assing expressFramework to express variable.
const app = express() // run application on express.

/* ENV */
require('dotenv').config()
const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 8000
/*---------------------------------------------------------------*/
/* HTTP_Methods & URLs *

app.get('/', (request, response) => {
  //? run response.send for print-out:
  // response.send( 'Welcome to Express' )
  response.send({ message: 'called in "get" method '})
});
app.post('/', (request, response) => response.send({ message: "called in 'post' method."}))
app.put('/', (request, response) => response.send({ message: "called in 'put' method."}))
app.delete('/', (request, response) => response.send({ message: "called in 'delete' method."}))
// //? allow at all methods:
// app.all('/', (request, response) => response.send({ message: "'all' option allows to all methods."}))

//? app.route('url'):
app.route('/route')
  .get( (request, response) => response.send('get') )
  .post( (request, response) => response.send('post') )
  .put( (request, response) => response.send('put') )
  .delete( (request, response) => response.send('delete') )

  /* ------------------------------------------------------- */
  /* HTTP_Methods & URLs */
app.get('/', (req, res) => res.send("in 'root' path") ) // '/' == root
app.get('/path', (req, res) => res.send("in 'path'") ) // '/path' == '/path/'
//? express-urls supported JokerChar:
app.get('/abc(x?)123', (req, res) => res.send("in 'abc(x?)123'") )  // abc123 or abcx123
app.get('/abc(x+)123', (req, res) => res.send("in 'abc(x+)123'") )  // abcx123 or abcxx..xx123
app.get('/abc(*)123', (req, res) => res.send("in 'abc(*)123'") )  // abc123 or abc...123 // abc(ANY)123
//? express-urls supported regexp:
app.get(/xyz/, (req, res) => res.send("regexp /xyz/") ) // url contains = 'xyz' (no limit for subPaths)
app.get(/^\/xyz/, (req, res) => res.send("regexp /^\/xyz/")) // url startswith = 'xyz'
app.get(/xyz$/, (req, res) => res.send("regexp /xyz$/")) // url endswith = 'xyz'

/*---------------------------------------------------------------*/
// app.listen(PORT, () => console.log(`Running on http://127.0.0.1:${PORT}`));
app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`))
