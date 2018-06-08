require('babel-core/register')
import express from "express";
import React from "react";
var app = express();
app.use(express.static("."));
const fs = require('fs');
var path = require('path');
require('babel-core/register');
import { StaticRouter, matchPath } from "react-router-dom";
import { renderToString } from "react-dom/server";
const { graphqlExpress ,graphiqlExpress } = require('apollo-server-express');
var CryptoJS = require("crypto-js");
var md5 = require("crypto-js/md5");
var csrf = require('csurf');
var cookieParse = require('cookie-parser');
var expressControllers = require('express-controller');
var path = require('path');
var bodyParser= require('body-parser');
const mongoose = require('mongoose');



//ReactJS components
import App from "../common/component/App.js";
//database connection
mongoose.connect('mongodb://localhost/payment-gateway-api');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const schema = require('.././ApolloServer/apolloServerSchema');
// bodyParser is needed just for POST.
app.use('/graphql', graphqlExpress({ schema }));

app.use('/graphiql',graphiqlExpress({
  endpointURL : "/graphql"
}))




app.use(cookieParse());




//controller ASSIGNMENT

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

var server = app.listen(3000,() => console.log("server Running in port 3000"))
