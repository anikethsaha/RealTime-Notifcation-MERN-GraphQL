const PostModel = require('../.././server/model/Post.js') // eslint-disable-lin
const MerchantUser = require('../.././server/model/merchant.js')
const LikeModel = require('../.././server/model/Likes.js')
const NotifcationModel = require('../../server/model/notification')
const objectAssign = require('object-assign')
const {
    find,
    filter
} = require('lodash')
const Encryption = require('../.././common/Encryption.js')
// import {pubsub } from '../pubsub.js'
import io from 'socket.io-client'
import { CLIENT_RENEG_WINDOW } from 'tls'
const socket = io('http://localhost:3000')
// console.log("socket from resolver", socket)
var crypto = require('crypto')
var cookieParse = require('cookie-parser')

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
            return MerchantUser.findOne({
                email: args.email
            },(err,user) => {
                return user;
            })
        },
        post: (root, args) => {
            return PostModel.findOne({
                Title: args.Title
            }, (err, p) => {
                return p;
            });
        },
        allNotification : (root,args) => NotifcationModel.find().exec(),
        checkNotification : (root,args)=> {
            console.log('args :', args);
            return NotifcationModel.find({
                _userID : args._userID,
                isSeen : false
            },(err,res) => {
                if(err){
                    console.log('err  from resovler:', err);
                }else{
                    console.log("from resovler response of notifitcation",res)
                    if(res.length > 0){
                       return res;
                    }else{
                        return {};
                    }
                }
            });
        },
        clearUnseenNotification : (root,args) => {
            return NotifcationModel.updatem(
                { _userID : args._userID },
                { $set: { isSeen : true}},
                 (err,notification) =>{
                if(err){
                     console.log('err from clearUnseenNotification:', err);
                }else{
                    return notification;
                }
            })
        },
        allNotification : (root,args) => {
            return NotifcationModel.find({_userID : args._userID},(err,notification)=>{
                if(err){
                    console.log('err  from allNotification:', err);
                }else{
                    console.log("from resovler response of notifitcation",notification)
                    if(notification.length > 0){
                       return notification;
                    }else{
                        return {};
                    }
                }
            })
               },
        author: (root, args) => MerchantUser.find().exec(),
        postDetails: (root, args) => PostModel.find({
            _UserID: root._id
        }).exec()
    },


    Mutation: {
        addPost:  (root, args) => {
            console.log('args from addPost :', args);
            return new PostModel({
                Title : args.Title,
                Body : args.Body,
                _UserID : args._UserID,
                likesCount : 0,
                comments : ""
            }).save((err,newPost) => {
                if(err){
                    console.log('err  from  addPost:', err);
                }else{
                    return newPost;
                }
            });

            return  postModel.save().exec();
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
            merchantUser.identification_number = args.identification_number;
            return merchantUser.save().then(user => {
                console.log('user :', user);
                const JWTtoken =  Encryption.JWTEncryptToken({
                    _id: user._id,
                    email: user.email
                });
                const res =  Object.assign(user,{
                    JWTtoken
                })
                console.log('res :', res);
                return user;
            });

        },
        createLike :  (root, args) => {

            console.log("Like Mutation");
            let likeModel = new LikeModel();
            likeModel._RecieverId = args._RecieverId;
            likeModel._SenderId = args._SenderId;
            likeModel._PostId = args._PostId;
            let likeData =  likeModel.save();
            // pubsub.publish('LIKE_ADDED', { likeData });

            const post = PostModel.findById(args._PostId,((err,post)=>{
                if(err) {
                    console.log('err :', err);
                }
                post.Likes = post.Likes + 1;
                post.save((err,newPost) => {
                console.log('newPost :', newPost);
                const notificationMessage = "You Have recieved a new Like";
                new NotifcationModel({
                    _userID :args._RecieverId,
                    type : "like",
                    message : notificationMessage,
                    isSeen : false
                }).save((err,newNotification) => {
                    if(err) console.log('err',err);
                    console.log('newNotification :', newNotification);

                    socket.emit('NEW_LIKE_CREATED', newNotification);
                })
            })
            })
        )

            return likeData

        }
    }
};
module.exports = resolver;
