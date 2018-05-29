const mongoose = require('mongoose');
const Post = mongoose.Schema({
  _id : {
   type : mongoose.Schema.Types.ObjectId,
   required: true,
   auto: true,
 },
 Title : {
   type : String,
   required : true
 },
 Body : {
   type : String,
   required : true
 },
 _UserID : {
   type :Number,
   required : true
 }
});
module.exports = mongoose.model('Post',Post);
