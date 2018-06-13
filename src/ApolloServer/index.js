require('babel-core/register')
import express from "express";
import { createServer } from 'http';


var path = require('path');
require('babel-core/register');
const { graphqlExpress ,graphiqlExpress } = require('apollo-server-express');
var CryptoJS = require("crypto-js");
var md5 = require("crypto-js/md5");
var csrf = require('csurf');
var cookieParse = require('cookie-parser');
var bodyParser= require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
var app = express();
// var socketIOServerInstance = createServer(app);


//ReactJS components
import App from "../common/component/App.js";
//database connection
mongoose.connect('mongodb://localhost/payment-gateway-api');


app.use(express.static("."));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//middleware
app.use(cors());
const schema = require('.././ApolloServer/apolloServerSchema');
// bodyParser is needed just for POST.



app.use('/graphql', graphqlExpress({ schema }));

app.use('/graphiql',graphiqlExpress({
  endpointURL : "/graphql",
  subscriptionsEndpoint: `ws://localhost:3000/subscriptions`
}))

const GraphQLWebSocketServerInstance = createServer(app);
var server = GraphQLWebSocketServerInstance.listen(3000,() => {
  console.log("> APOLLO SUBSCRIPTION SERVER RUNNING ON PORT 3000");
  new SubscriptionServer({
    execute,
    subscribe,
    schema,
     onSubscribe: (message, params, webSocket) => {
       console.log("onSubscribe");
     },
     onConnect: (connectionParams, webSocket, context) => {

  },
  },
  {
    server: GraphQLWebSocketServerInstance,
    path: '/subscriptions',
});
});
var io = require('socket.io')(server);
io.on('connection', client => {
  console.log("> WEB-SOCKET RUNNING" , client.id);
  client.on("NEW_LIKE_CREATED",likeData => {
    
    io.emit("NEW_NOTIFICATION" , likeData);
  })
})
