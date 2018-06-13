const PostModel = require('../.././server/model/Post.js');
const MerchantUser = require('../.././server/model/merchant.js');
const LikeModel = require('../.././server/model/Likes.js');
const {
    find,
    filter
} = require('lodash');
const Encryption = require('../.././server/Encryption.js');
// import {pubsub } from '../pubsub.js'
import io from 'socket.io-client';
const socket = io('http://localhost:3000');
console.log("socket from resolver", socket);
var crypto = require('crypto');
var cookieParse = require('cookie-parser');

const resolver = {
    Subscription: {
        likeAddedSubscription: {
            resolve: (payload) => {
                console.log("subscription", payload);
                return payload;
            },
            subscribe: () => pubsub.asyncIterator('LIKE_ADDED')
        }
    },


    Query: {
        posts: () => PostModel.find((err, post) => post),
        users: () => MerchantUser.find((err, user) => user),
        loginUser:  (root, args) => {
            //Login Logic here

             MerchantUser.find({
                email: args.email
            },  (err, user) => {

                if (err) {
                     throw new Error(JSON.stringify({
                            status: "ERROR",
                            typeErrorMsg: "Email address not present",
                            err
                        }));
               
                } else {

                    let isVerifiedPassword = Encryption.PasswordVerification(args.password, user[0].password);
                    if (!isVerifiedPassword) {
                        throw new Error(JSON.stringify({
                            status: "ERROR",
                            typeErrorMsg: "Password not matched",
                            err
                        }));
                      
                    }
                   
                      user.JWTtoken =  Encryption.JWTEncryptToken({
                        _id: user._id,
                        email: user.email
                    });
                    return user;
                }
            })


        },
        post: (root, args) => {
            return PostModel.findOne({
                Title: args.Title
            }, (err, p) => {
                return p;
            });
        },
        author: (root, args) => MerchantUser.find().exec(),
        postDetails: (root, args) => PostModel.find({
            _UserID: root._id
        }).exec()
    },


    Mutation: {
        addPost:  (root, args) => {
            let postModel = new PostModel();
            postModel.Title = args.Title;
            postModel.Body = args.Body;
            postModel._UserID = args._UserID;
            return  postModel.save();
        },


        registerUser:  (root, args) => {
            // registration here

            var Passwordhash = Encryption.PasswordhashBcrypt(args.password);
            var merchantUser = new MerchantUser();
            merchantUser.email = args.email;
            merchantUser.name = args.name;
            merchantUser.password = Passwordhash;
            merchantUser.account_Number = args.account_Number;
            merchantUser.phone_no = args.phone_no;
            merchantUser._Mid = crypto.randomBytes(4).toString('hex');
            merchantUser.identification_number = args.identification_number;
            merchantUser.save((err, user) => {
                if (err) {
                    throw new Error(JSON.stringify({
                        status: "ERROR",
                        err
                    }));
                } else {
                         
                      user.JWTtoken =  Encryption.JWTEncryptToken({
                        _id: user._id,
                        email: user.email
                    });
                    return user;
                }

            })








        },
        createLike:  (root, args) => {
            console.log("Like Mutation");
            let likeModel = new LikeModel();
            likeModel._RecieverId = args._RecieverId;
            likeModel._SenderId = args._SenderId;
            likeModel._PostId = args._PostId;
            let likeData =  likeModel.save();
            // pubsub.publish('LIKE_ADDED', { likeData });
            socket.emit('NEW_LIKE_CREATED', likeData);
            return likeData

        }
    }
};
module.exports = resolver;
