const graphql = require('graphql');
const  {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt ,
  GraphQLScalarType ,
  GraphQLSchema
 } = graphql;

const MerchantUser = require('../model/merchant.js');


const UserType = new GraphQLObjectType({
  name : "User",
  fields : () =>({
    _id : {type : GraphQLString},
    email : {type : GraphQLString},
    name : {type : GraphQLString},
    password : {type : GraphQLString},
    account_Number : {type : GraphQLInt},
    phone_no:{type : GraphQLInt},
    identification_number:{type : GraphQLInt},
    _Mid :{type : GraphQLInt}
  })
});
const RootQuery = new GraphQLObjectType({
  name : 'Root',
  fields : {
    user :{
        type : UserType,
        args : {name : { type : GraphQLString}},
        resolve(parent,args){
            // fetch from db here

              return MerchantUser.findOne({name:args.name},(err,u) => {
                return u;
              });
        }
    }
  }
});
module.exports = new GraphQLSchema({
  query : RootQuery
});
