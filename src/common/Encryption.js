var jwt = require('jsonwebtoken');
var CryptoJS = require("crypto-js");
var md5 = require("crypto-js/md5");
var crypto = require('crypto');


// //bcrypt for password
// var saltRounds = 15;
// var salt = bcrypt.genSaltSync(saltRounds);


//AES for api key
const AESEncryptionKey =  () => {
 var salt = "ApISaLtKeY";
 var saltEncoded  = md5(salt).toString();
 var encryptionKey = CryptoJS.PBKDF2("Secret Passphrase", saltEncoded, { keySize: 512/32, iterations: 1000 });
 return encryptionKey.toString();
};

module.exports = {
  AESEncryptionKey,
  getRandomNumber : (bits)=>{
    return crypto.randomBytes(bits).toString('hex');
  },
  PasswordhashBcrypt : (passwordToHash) => {

    return CryptoJS.AES.encrypt(passwordToHash, AESEncryptionKey());

  },
  AESEncryption : (data) => {
    var ciphertext = CryptoJS.AES.encrypt(data, AESEncryptionKey());
    return ciphertext.toString();
  },
  AESDecryption : (ciphertext)=>{
    var bytes  = CryptoJS.AES.decrypt(ciphertext, AESEncryptionKey());
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  },
  JWTEncryptToken :  (payload) =>{
    return  jwt.sign(payload,AESEncryptionKey());
  },
  JWTDecryption : async (payload ) => {
    return await jwt.verify(payload, AESEncryptionKey());
  },
  PasswordVerification :  (passwordToVerify , hashedPassword) => {

      return new Promise((resolve,reject) => {
        bcrypt.compare(passwordToVerify , hashedPassword , (err,result) => {
          if(err){
            return reject(err);
          }
          return resolve(result);//true
      })
      })

  }
};
