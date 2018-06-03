const PostModel = require('../src/server/model/Post.js');
const MerchantUser = require('../src/server/model/merchant.js');
const { find, filter } = require('lodash');
const postsA = [
  { id: 1, _UserID: 1, Title: 'Introduction to GraphQL', Body: "hello" },
  { id: 2, _UserID: 2, Title: 'Welcome to Meteor', Body: "hello" },
  { id: 3, _UserID: 2, Title: 'Advanced GraphQL', Body: "hello" },
  { id: 4, _UserID: 3, Title: 'Launchpad is Cool', Body: "hello" },
];

const resolver = {
  Query: {
    posts : () => PostModel.find((err,post) => post),
    localposts : () => postsA,
    localpost : (root,args) => find(postsA,{id:args.id}),
    users : () => MerchantUser.find((err,user) => user),
    loginUser : (root,args) => {
      //Login Logic here
    }
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
