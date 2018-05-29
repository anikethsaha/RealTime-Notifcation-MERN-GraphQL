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
const PostModel = require('../model/post.js');

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

const PostType = new GraphQLObjectType({
  name : "Post",
  fields : ()=>({
    _id : {type:GraphQLString},
    Title : {type : GraphQLString},
    Body : {type : GraphQLString},
    _UserID : {type : GraphQLString},
    userDetails : {
      type : UserType,
      resolve(parent,args){
        return MerchantUser.findOne({_id:parent._UserID}).exec();
      }
    }

  })
})
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
    },
    postDetails :{
      type : new GraphQLList(PostType),
      resolve(parent,args){
        return PostModel.find({_UserID:parent._id}).exec();
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
    post :{
        type : PostType,
        args : {id : { type : GraphQLString}},
        resolve(parent,args){
              return PostModel.findOne({_id:args.id},(err,u) => {
                return u;
              });
        }
    },
    posts :{
        type : new GraphQLList(PostType),
        resolve(parent,args){
              return PostModel.find((err,u) => {
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
    },
    addPost : {
      type : PostType,
      args : {
        Title : {type : GraphQLString},
        Body : {type : GraphQLString},
        _UserID : {type : GraphQLString}
      },
      resolve(parent,args){
        let postModel = new PostModel();
          postModel.Title = args.Title;
          postModel.Body = args.Body;
          postModel._UserID = args._UserID;
        return postModel.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query : RootQuery,
  mutation:mutation
});
