'use strict';
require('babel-core/register')
var express = require("express");
var React = require("react");
var ReactDOMServer = require('react-dom/server');
const App = require("./src/common/component/App.js").default;

var app = express();
app.use(express.static("."));
const fs = require('fs');
var path = require('path');
require('babel-core/register')



//static path
app.use(express.static(path.join(__dirname+'./public')));


app.set('views' , path.join(__dirname,'./public/views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  var app = React.createElement(App);
  var html = fs.readFileSync('./public/views/index.ejs');
  html = html.toString();
  var AppMarkup = renderToString(app);
  html = html.replace("<!-- APP -->",AppMarkup);
  // res.write(html);
  res.render('index');
})


var server = app.listen(5000,() => console.log("server Running in port 5000"))
