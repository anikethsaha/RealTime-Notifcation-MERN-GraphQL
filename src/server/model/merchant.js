const mongoose = require('mongoose');
var MerchantUser = new mongoose.Schema({
  _id : {
   type : mongoose.Schema.Types.ObjectId,
   required: true,
   auto: true,
 },
 name : {
   type : String,
   required:true,
 },
 _Mid : {
   type : String,
   required:true,
 },
 password : {
   type : String,
   required:true,

 },
 account_Number : {
   type : Number,
   required : true,
 },
 phone_no : {
   type : Number,
   required : true,
 },
 email : {
   type : String,
   required : true,
 },
 identification_number : {
   type : Number,
   required : true,
 }
})
module.exports = mongoose.model('MerchantUser',MerchantUser);
