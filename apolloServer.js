const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress ,graphiqlExpress } = require('apollo-server-express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/payment-gateway-api');
// ... define or import your schema here!
const schema = require('./apolloServerSchema');

const PORT = 3000;

const app = express();
app.use( bodyParser.json());
// bodyParser is needed just for POST.
app.use('/graphql', graphqlExpress({ schema }));

app.use('/graphiql',graphiqlExpress({
  endpointURL : "/graphql"
}))

app.listen(PORT,() => {
  console.log("> SERVER LISTENING TO 3000");
});
