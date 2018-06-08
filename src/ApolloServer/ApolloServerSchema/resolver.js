const PostModel = require('../.././server/model/Post.js');
const MerchantUser = require('../.././server/model/merchant.js');
const { find, filter } = require('lodash');
const postsA = [
  { id: 1, _UserID: 1, Title: 'Introduction to GraphQL', Body: "hello" , Likes : 0,Comments : "" },
  { id: 2, _UserID: 2, Title: 'Welcome to Meteor', Body: "hello" , Likes : 0,Comments : "" },
  { id: "5b0d4299b1482066f0680056", _UserID: 2, Title: 'Advanced GraphQL', Body: "hello" , Likes : 0,Comments : "" },
  { id: 4, _UserID: 3, Title: 'Launchpad is Cool', Body: "hello" , Likes : 0,Comments : "" },
];

const resolver = {
  Query: {
    posts : () => PostModel.find((err,post) => post),
    localposts : () => postsA,
    localpost : (root,args) => find(postsA,{id:args.id}),
    users : () => MerchantUser.find((err,user) => user),
    loginUser : (root,args) => {
      //Login Logic here
    },
    author : (root,args) => MerchantUser.find().exec(),
    postDetails : (root,args) => PostModel.find({_UserID:root._id}).exec()
  },
  Mutation : {
    addPost : (root,args) => {
      let postModel = new PostModel();
        postModel.Title = args.title;
        postModel.Body = args.body;
        postModel._UserID = args._UserID;
      return postModel.save();
    },
    registerUser : (roote,args) =>{
      // registration here
    }
  }
};
module.exports = resolver;
