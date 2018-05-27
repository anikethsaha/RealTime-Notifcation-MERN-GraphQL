var Encryption = require('../Encryption.js');

module.exports = {
    VerifyApi_Key : (req,res,next) => {
      if(!req.params.api_key){
        res.sendStatus(403);
      }
      const _Mid = Encryption.AESDecryption(req.params.api_key);
      if(_Mid && ( _Mid.length == 8)){
        next();
      }else{
        res.sendStatus(403);
      }
    }



};
