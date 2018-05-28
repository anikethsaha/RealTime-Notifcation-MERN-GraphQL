const mongoose = require('mongoose');
const transaction = new mongoose.Schema({
    _id : {
     type : mongoose.Schema.Types.ObjectId,
     required: true,
     auto: true,
   },
   recieverAccountNumber : {
    type : String,
    required : true
    },
  recieverAccountName : {
   type : String,
   required : true
   },
   senderAccountNumber : {
    type : String,
    required : true
    },
    senderAccountNumber : {
     type : String,
     required : true
     },
   _Tid : {
     type : String,
     required:true,
   },
   _Mid : {
     type : String,
     required:true,
   },
   Amount : {
     type:Number,
     required : true,
   }
})
module.exports =  mongoose.model('transaction',transaction);
