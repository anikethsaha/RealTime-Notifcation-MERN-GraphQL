const graphql = require('graphql');
var _ = require('lodash');
const  {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt ,
  GraphQLScalarType ,
  GraphQLSchema,
  GraphQLList
 } = graphql;
const MerchantUser = require('../model/merchant.js');
//sample data // mongodb collection comming soon
const transactionArray = [
  {
    "_id":1,
    "recieverAccountName":"easy",
     "recieverAccountNumber ": 2039123,
     "senderAccountNumber" : 24121212,
     "senderAccountName" : "tom",
     "Amount" : 50,
     "Merchant_Mid":"9f09f38c"
   },
  {
    "_id":2,
    "recieverAccountName":"max",
    "recieverAccountNumber ": 202323123,
    "senderAccountNumber" : 25451212,
    "senderAccountName" : "jerry",
     "Amount" : 150,
     "Merchant_Mid":"5212b7d9"
   }
]
transactionArray.map((k,i) =>{
  console.log(k , i);
})
const TransactionType = new GraphQLObjectType({
  name : "Transaction",
  fields : ()=>({
    _id : {Types:GraphQLInt},
    recieverAccountName : {Types : GraphQLString},
    recieverAccountNumber : {Types : GraphQLString},
    senderAccountNumber : {Types : GraphQLString},
    senderAccountName : {Types : GraphQLString},
    Amount : {Types : GraphQLInt}
    // MerchantUserData : {
    //   Types : UserType,
    //   resolve(parent,args){
    //     return MerchantUser.find(_Mid : parent._Mid).exec();
    //   }
    // }
  })
});


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
    _Mid :{type : GraphQLString}
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
    },
    transaction :{
        type : TransactionType,
        args : {id : { type : GraphQLString}},
        resolve(parent,args){
            // fetch from db here

              return _.find(transactionArray,{id:args._id});
        }
    },
    Users : {
      type :  new GraphQLList(UserType),
      resolve(parent,args){
        console.log("inside");
        return MerchantUser.find().exec();
      }
    }

  }
});
module.exports = new GraphQLSchema({
  query : RootQuery
});
