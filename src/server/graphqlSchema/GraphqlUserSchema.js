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
const PostModel = require('../model/Post.js');



const PostType = new GraphQLObjectType({
  name : "Post",
  fields : ()=>({
    _id : {type:GraphQLString},
    Title : {type : GraphQLString},
    Body : {type : GraphQLString},
    _UserID : {type : GraphQLString},
    Comments : {type : GraphQLString},
    Likes : {type : GraphQLInt},
    author : {
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
        args : {
          email : { type : GraphQLString},
          password : {type : GraphQLString}
         },
        resolve(parent,args){
            // fetch from db here

              return MerchantUser.findOne({email:args.email},(err,u) => {
                return u;
              });
        }
    },
    post :{
        type : PostType,
        args : {Title : { type : GraphQLString}},
        resolve(parent,args){
              return PostModel.findOne({Title:args.Title},(err,p) => {
                return p;
              });
        }
    },
    posts :{
        type : new GraphQLList(PostType),
        resolve(parent,args){
              return PostModel.find((err,ps) => {
                return ps;
              });
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
          postModel.Likes = 0;
          postModel.Comments = "";
        return postModel.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query : RootQuery,
  mutation:mutation
});
