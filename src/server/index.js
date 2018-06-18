require('babel-core/register')

import express from "express";
import React from "react";
var app = express();
app.use(express.static("."));
const fs = require('fs');
var path = require('path');

import { StaticRouter, matchPath } from "react-router-dom"
import { renderToString } from "react-dom/server"

var CryptoJS = require("crypto-js");
var md5 = require("crypto-js/md5");
var csrf = require('csurf');
var cookieParse = require('cookie-parser');
var expressControllers = require('express-controller');
var path = require('path');
var bodyParser= require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
//ReactJS components
import App from "../common/component/App.js";
//database connection
mongoose.connect('mongodb://localhost/payment-gateway-api');



//graphql schema here
const schema = require('./graphqlSchema/GraphqlUserSchema.js');


//Middleware
app.use(cookieParse());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
// User defined middleware
// const Api_Key_Middleware = require('./Middleware/apiKeyVerify.js');



//controller ASSIGNMENT
//setting up the controller
expressControllers.setDirectory(path.join(__dirname,'/controller')).bind(app);
// const merchantController = require('./controller/merchantController');

//static path
app.use(express.static(path.join(__dirname+'./public')));
app.set('views' , path.join(__dirname,'./public/views'));
app.set('view engine', 'ejs');


//routes
app.get('/',(req,res)=>{
  var d = "helloServer";
  const context = {}
  var myapp = renderToString(
        <StaticRouter location={req.url}  context={context}  >
          <App/>
        </StaticRouter>
  );
  var html = fs.readFileSync('./public/views/index.ejs');
  html = html.toString();
  html = html.replace("<!-- APP -->",myapp);
  res.send(html);
})

// app.post('/merchant/register' , merchantController.register);
// app.post('/merchant/pay', Api_Key_Middleware.VerifyApi_Key , merchantController.FetchAndMakePayment);

var server = app.listen(5000,() => console.log("> NODE SERVER RUNNING 5000"))
