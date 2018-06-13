const mongoose = require('mongoose');
const Like = mongoose.Schema({
  _id : {
   type : mongoose.Schema.Types.ObjectId,
   required: true,
   auto: true,
 },
 _PostId : {
   type : String,
   required : true
 },
 _RecieverId : {
   type : String,
   required : true
 },
 _SenderId : {
   type : String,
      required : true
 }
});
module.exports = mongoose.model('Like',Like);
