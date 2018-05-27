var jwt = require('jsonwebtoken');
var CryptoJS = require("crypto-js");
var md5 = require("crypto-js/md5");
var bcrypt = require('bcrypt');


//bcrypt for password
var saltRounds = 15;
var salt = bcrypt.genSaltSync(saltRounds);


//AES for api key
const AESEncryptionKey =  () => {
 var salt = "ApISaLtKeY";
 var saltEncoded  = md5(salt).toString();
 var encryptionKey = CryptoJS.PBKDF2("Secret Passphrase", saltEncoded, { keySize: 512/32, iterations: 1000 });
 return encryptionKey.toString();
};

module.exports = {
  PasswordhashBcrypt : (passwordToHash) => {
    return bcrypt.hashSync(passwordToHash, salt);
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
  JWTEncryptToken : (payload) =>{
    return jwt.sign(payload,AESEncryption());
  }
};
