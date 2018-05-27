module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("crypto-js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("crypto-js/md5");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(6);
var MerchantUser = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  name: {
    type: String,
    required: true
  },
  _Mid: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true

  },
  account_Number: {
    type: Number,
    required: true
  },
  phone_no: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  identification_number: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('MerchantUser', MerchantUser);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jwt = __webpack_require__(20);
var CryptoJS = __webpack_require__(3);
var md5 = __webpack_require__(4);
var bcrypt = __webpack_require__(21);

//bcrypt for password
var saltRounds = 15;
var salt = bcrypt.genSaltSync(saltRounds);

//AES for api key
var AESEncryptionKey = function AESEncryptionKey() {
  var salt = "ApISaLtKeY";
  var saltEncoded = md5(salt).toString();
  var encryptionKey = CryptoJS.PBKDF2("Secret Passphrase", saltEncoded, { keySize: 512 / 32, iterations: 1000 });
  return encryptionKey.toString();
};

module.exports = {
  PasswordhashBcrypt: function PasswordhashBcrypt(passwordToHash) {
    return bcrypt.hashSync(passwordToHash, salt);
  },
  AESEncryption: function AESEncryption(data) {
    var ciphertext = CryptoJS.AES.encrypt(data, AESEncryptionKey());
    return ciphertext.toString();
  },
  AESDecryption: function AESDecryption(ciphertext) {
    var bytes = CryptoJS.AES.decrypt(ciphertext, AESEncryptionKey());
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  },
  JWTEncryptToken: function JWTEncryptToken(payload) {
    return jwt.sign(payload, AESEncryption());
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

var _server = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(1);

var app = (0, _express2.default)();
app.use(_express2.default.static("."));
var fs = __webpack_require__(13);
var path = __webpack_require__(2);
__webpack_require__(1);

var CryptoJS = __webpack_require__(3);
var md5 = __webpack_require__(4);
var csrf = __webpack_require__(14);
var cookieParse = __webpack_require__(5);
var expressControllers = __webpack_require__(15);
var path = __webpack_require__(2);
var mongoose = __webpack_require__(6);
var graphqlHTTP = __webpack_require__(16);

//database connection
mongoose.connect('mongodb://localhost/payment-gateway-api');

//graphql schema here
var schema = __webpack_require__(17);

//Middleware
app.use(cookieParse());
// var sessionSecrect = bcrypt.hashSync('Your_Secret_key',7); // not writing cause this key should be known by the bank website gateway too
// app.use(session({
//   // secret : sessionSecrect,
//   resave : false,
//   saveUninitialized : true,
//    signed: true,
//   // store : true,
//
//
// }))

//graphql middleware
app.use('/graphql', graphqlHTTP(function (req) {
  return {
    schema: schema, // schema : schema
    graphiql: true
  };
}));
// User defined middleware
var Api_Key_Middleware = __webpack_require__(19);

//controller ASSIGNMENT
//setting up the controller
expressControllers.setDirectory(path.join(__dirname, '/controller')).bind(app);
var merchantController = __webpack_require__(22);

//static path
app.use(_express2.default.static(path.join(__dirname + './public')));
app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'ejs');

//routes
app.get('/', function (req, res) {
  var myapp = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
  var html = fs.readFileSync('./public/views/index.ejs');
  html = html.toString();
  html = html.replace("<!-- APP -->", myapp);
  res.send(html);
});

app.post('/merchant/register', merchantController.register);
app.post('/merchant/pay/:api_key', Api_Key_Middleware.VerifyApi_Key, merchantController.FetchAndMakePayment);

var server = app.listen(5000, function () {
  return console.log("server Running in port 5000");
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { renderToString } from "react-dom/server";
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "user-div four columns" },
        _react2.default.createElement(
          "div",
          { className: "user_container" },
          _react2.default.createElement("div", { className: "user_avatar" }),
          _react2.default.createElement(
            "div",
            { className: "user_details" },
            _react2.default.createElement(
              "h2",
              { className: "user_name" },
              _react2.default.createElement(
                "strong",
                null,
                "Name : "
              )
            ),
            _react2.default.createElement(
              "h3",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Age : "
              )
            ),
            _react2.default.createElement(
              "h3",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Gender : "
              )
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                " Location :"
              )
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Jobs :"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "buy-btn-bar" },
              _react2.default.createElement(
                "button",
                { className: "buy-btn" },
                "Buy Now"
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);
// export var Apps = renderToString(<App />);


exports.default = App;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("csurf");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-controller");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var graphql = __webpack_require__(18);
var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLString = graphql.GraphQLString,
    GraphQLInt = graphql.GraphQLInt,
    GraphQLScalarType = graphql.GraphQLScalarType,
    GraphQLSchema = graphql.GraphQLSchema;


var MerchantUser = __webpack_require__(7);

var UserType = new GraphQLObjectType({
  name: "User",
  fields: function fields() {
    return {
      _id: { type: GraphQLString },
      email: { type: GraphQLString },
      name: { type: GraphQLString },
      password: { type: GraphQLString },
      account_Number: { type: GraphQLInt },
      phone_no: { type: GraphQLInt },
      identification_number: { type: GraphQLInt },
      _Mid: { type: GraphQLInt }
    };
  }
});
var RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: {
    user: {
      type: UserType,
      args: { name: { type: GraphQLString } },
      resolve: function resolve(parent, args) {
        // fetch from db here

        return MerchantUser.findOne({ name: args.name }, function (err, u) {
          return u;
        });
      }
    }
  }
});
module.exports = new GraphQLSchema({
  query: RootQuery
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Encryption = __webpack_require__(8);

module.exports = {
  VerifyApi_Key: function VerifyApi_Key(req, res, next) {
    if (!req.params.api_key) {
      res.sendStatus(403);
    }
    var _Mid = Encryption.AESDecryption(req.params.api_key);
    if (_Mid && _Mid.length == 8) {
      next();
    } else {
      res.sendStatus(403);
    }
  }

};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MerchantUser = __webpack_require__(7);
var Encryption = __webpack_require__(8);
var crypto = __webpack_require__(23);
var cookieParse = __webpack_require__(5);

module.exports = {
  register: function register(req, res) {
    //  things required for registration
    //  name -> name
    //  password -> password
    //  fake bank account number -> account_Number
    //  phone number -> phone_no
    //  email address -> email
    //  identification number like voter card or license number ( fake  ) -> identification_number


    var Passwordhash = Encryption.PasswordhashBcrypt(req.body.password);
    var merchantUser = new MerchantUser();
    merchantUser.email = req.body.email;
    merchantUser.name = req.body.name;
    merchantUser.password = Passwordhash;
    merchantUser.account_Number = req.body.account_Number;
    merchantUser.phone_no = req.body.phone_no;
    merchantUser._Mid = crypto.randomBytes(4).toString('hex');
    merchantUser.identification_number = req.body.identification_number;
    merchantUser.save(function (err, mUser) {
      if (err) {
        res.json(err);
      }
      var responseData = {
        'api_key': Encryption.AESEncryption(mUser._Mid)
      };
      res.json(responseData);
    });
    //  .......
    //  will return the api key

  },
  FetchAndMakePayment: function FetchAndMakePayment(req, res) {
    // request details.....

    //  Amount to payment
    //  Client bank

    // ... cookies details :-
    // jwt - 30sec expiration time
    // Amount - encrypted
    var amount = req.body.amount;
    var bank = req.body.bank;
    var _Mid = Encryption.AESDecryption(req.params.api_key);
    MerchantUser.findOne({ _Mid: _Mid }, function (err, user) {
      if (err) {
        res.status(403);
      } else {
        var recieverAccountNumber = user.account_Number;
        var recieverAccountName = user.name;
        var payload = {
          amount: amount,
          recieverAccountName: recieverAccountName,
          recieverAccountNumber: recieverAccountNumber
        };
        var JWTUserDetails = Encryption.JWTEncryptToken(payload);
        console.log(JWTUserDetails);
        res.cookie("payment_Details", JWTUserDetails);
      }
    });
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ })
/******/ ]);