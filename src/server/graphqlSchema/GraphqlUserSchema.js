const graphql = require('graphql');
var _ = require('lodash');
var Encryption  = require('../Encryption.js');
const  {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt ,
  GraphQLScalarType ,
  GraphQLSchema,
  GraphQLList
 } = graphql;
const MerchantUser = require('../model/merchant.js');
const TransactionModel = require('../model/Transaction.js');
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

const TransactionType = new GraphQLObjectType({
  name : "Transaction",
  fields : ()=>({
    _id : {type:GraphQLInt},
    _Tid : {type:GraphQLString},
    _Mid : {type:GraphQLString},
    recieverAccountName : {type : GraphQLString},
    recieverAccountNumber : {type : GraphQLString},
    senderAccountNumber : {type : GraphQLString},
    senderAccountName : {type : GraphQLString},
    Amount : {type : GraphQLInt},
    MerchantUserData : {
      type : UserType,
      resolve(parent,args){
        return MerchantUser.findOne({_Mid : parent._Mid}).exec();
      }
    }
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
    _Mid :{type : GraphQLString},
    transactionDetails :{
      type : new GraphQLList(TransactionType),
      resolve(parent,args){
        return TransactionModel.find({_Mid:parent._Mid}).exec();
      }
    }
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
        args : {_Tid : { type : GraphQLString}},
        resolve(parent,args){
            // fetch from db here
          return TransactionModel.findOne({_Tid:args._Tid}).exec();
        }
    },
    Transactions :{
      type : new GraphQLList(TransactionType),
      resolve(parent,args){
        return TransactionModel.find().exec();
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

const mutation = new GraphQLObjectType({
  name : "mutation",
  fields : {
    addTransaction : {
      type : TransactionType,
      args : {
        recieverAccountName : {type : GraphQLString},
        recieverAccountNumber : {type : GraphQLString},
        senderAccountName : {type : GraphQLString},
        senderAccountNumber : {type : GraphQLString},
        _Mid : {type : GraphQLString},
        Amount : {type : GraphQLInt}
      },
      resolve(parent,args){
        let transactionModel = new TransactionModel();
          transactionModel.recieverAccountName = args.recieverAccountName;
          transactionModel.recieverAccountNumber = args.recieverAccountNumber;
          transactionModel.senderAccountName = args.senderAccountName;
          transactionModel.senderAccountNumber = args.senderAccountNumber;
          transactionModel._Mid = args._Mid;
          transactionModel.Amount = args.Amount;
          transactionModel._Tid = Encryption.getRandomNumber(3);
        return transactionModel.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query : RootQuery,
  mutation:mutation
});
