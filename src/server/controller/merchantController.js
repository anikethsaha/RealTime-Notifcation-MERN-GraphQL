const MerchantUser = require('../model/merchant.js');
const Encryption = require('../Encryption.js');
var crypto = require('crypto');
var cookieParse = require('cookie-parser');

module.exports = {
  register : (req,res) =>{
    //  things required for registration
    //  name -> name
    //  password -> password
    //  fake bank account number -> account_Number
    //  phone number -> phone_no
    //  email address -> email
    //  identification number like voter card or license number ( fake  ) -> identification_number



    var Passwordhash = Encryption.PasswordhashBcrypt(req.body.password);
    var merchantUser = new MerchantUser();
    merchantUser.email =req.body.email;
    merchantUser.name = req.body.name;
    merchantUser.password = Passwordhash;
    merchantUser.account_Number = req.body.account_Number;
    merchantUser.phone_no = req.body.phone_no;
    merchantUser._Mid = crypto.randomBytes(4).toString('hex');
    merchantUser.identification_number = req.body.identification_number;
    merchantUser.save((err,mUser) => {
      if(err){
        res.json(err);
      }
      var responseData = {
        'api_key' : Encryption.AESEncryption(mUser._Mid)
      }
       res.json(responseData);

    })
    //  .......
    //  will return the api key



  },
  FetchAndMakePayment : (req , res)=>{
      // request details.....

      //  Amount to payment
      //  Client bank

      // ... cookies details :-
      // jwt - 30sec expiration time
      // Amount - encrypted
      var amount = req.body.amount;
      var bank = req.body.bank;
      var _Mid = Encryption.AESDecryption(req.params.api_key);
      MerchantUser.findOne({_Mid:_Mid},(err , user) => {
        if(err){
          res.status(403);
        }else{
          var recieverAccountNumber = user.account_Number;
          var recieverAccountName = user.name;
          var payload = {
            amount : amount,
            recieverAccountName : recieverAccountName,
            recieverAccountNumber : recieverAccountNumber
          }
          var JWTUserDetails = Encryption.JWTEncryptToken(payload);
          console.log(JWTUserDetails);
          res.cookie("payment_Details" , JWTUserDetails);
        }
      })


  }
};
