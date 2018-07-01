const mongoose = require('mongoose');
const Notification = mongoose.Schema({
  _id : {
   type : mongoose.Schema.Types.ObjectId,
   required: true,
   auto: true,
 },
 _userID : {
   type : mongoose.Schema.Types.ObjectId,
   required : true
 },
 type : {
   type : String,
   required : true
 },
 message : {
   type : String,
   required : true
 },
 isSeen : {
   type : Boolean,
    required : true,
 },
 metaData : {
     type : String
 }
});
module.exports = mongoose.model('Notification',Notification);
