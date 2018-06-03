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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginQuery = exports.addUsertMutation = exports.getPost = exports.addPostMutation = undefined;

var _templateObject = _taggedTemplateLiteral(["\nmutation($title : String!,$body : String! ,$userId : String!){\n  addPost(Title:$title,Body :$body,_UserID:$userId)\n  {\n    _id\n    Title\n    Body\n    _UserID\n  }\n}\n\n"], ["\nmutation($title : String!,$body : String! ,$userId : String!){\n  addPost(Title:$title,Body :$body,_UserID:$userId)\n  {\n    _id\n    Title\n    Body\n    _UserID\n  }\n}\n\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n{\n  posts {\n    _id\n    Title\n    Body\n    _UserID\n  }\n}\n"], ["\n{\n  posts {\n    _id\n    Title\n    Body\n    _UserID\n  }\n}\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  query loginQuery($email : String!,$password:String!){\n    user(email : $email,password :$password){\n      email\n      name\n    }\n  }\n"], ["\n  query loginQuery($email : String!,$password:String!){\n    user(email : $email,password :$password){\n      email\n      name\n    }\n  }\n"]);

var _apolloBoost = __webpack_require__(4);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var addPostMutation = (0, _apolloBoost.gql)(_templateObject);
var addUsertMutation = (0, _apolloBoost.gql)(_templateObject);
var getPost = (0, _apolloBoost.gql)(_templateObject2);
var LoginQuery = (0, _apolloBoost.gql)(_templateObject3);
exports.addPostMutation = addPostMutation;
exports.getPost = getPost;
exports.addUsertMutation = addUsertMutation;
exports.LoginQuery = LoginQuery;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jwt = __webpack_require__(42);
var CryptoJS = __webpack_require__(12);
var md5 = __webpack_require__(13);
var bcrypt = __webpack_require__(43);
var crypto = __webpack_require__(15);

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
  AESEncryptionKey: AESEncryptionKey,
  getRandomNumber: function getRandomNumber(bits) {
    return crypto.randomBytes(bits).toString('hex');
  },
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 8 */
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

var PreLoadDiv = function (_React$Component) {
  _inherits(PreLoadDiv, _React$Component);

  function PreLoadDiv() {
    _classCallCheck(this, PreLoadDiv);

    return _possibleConstructorReturn(this, (PreLoadDiv.__proto__ || Object.getPrototypeOf(PreLoadDiv)).call(this));
  }

  _createClass(PreLoadDiv, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "postLoadCard content-div " },
        _react2.default.createElement(
          "div",
          { className: "bodyWrap" },
          _react2.default.createElement("div", { className: "loadingAnim" }),
          _react2.default.createElement("br", null),
          _react2.default.createElement("div", { className: "loadingAnim" }),
          _react2.default.createElement("div", { className: "loadingAnim" }),
          _react2.default.createElement("br", null),
          _react2.default.createElement("div", { className: "loadingAnim" })
        ),
        _react2.default.createElement("div", { className: "footerWrap" })
      );
    }
  }]);

  return PreLoadDiv;
}(_react2.default.Component);

exports.default = PreLoadDiv;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = __webpack_require__(27);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocsContent = function (_React$Component) {
  _inherits(DocsContent, _React$Component);

  function DocsContent() {
    _classCallCheck(this, DocsContent);

    return _possibleConstructorReturn(this, (DocsContent.__proto__ || Object.getPrototypeOf(DocsContent)).call(this));
  }

  _createClass(DocsContent, [{
    key: "render",
    value: function render() {

      return _react2.default.createElement(
        "div",
        { className: "content-wrapper " },
        _react2.default.createElement(
          "div",
          { key: this.props.i, className: "post-content-div" },
          _react2.default.createElement(
            "div",
            { className: "" },
            _react2.default.createElement(
              "div",
              { className: " content-title" },
              _react2.default.createElement(
                "h1",
                null,
                this.props.h1
              )
            ),
            _react2.default.createElement(
              "div",
              { className: " content-body" },
              _react2.default.createElement(
                "p",
                null,
                this.props.p
              )
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "a",
              null,
              this.props.a
            )
          )
        )
      );
    }
  }]);

  return DocsContent;
}(_react2.default.Component);

exports.default = DocsContent;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("crypto-js");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("crypto-js/md5");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(3);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(18);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(19);

var _App = __webpack_require__(20);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(10);

var app = (0, _express2.default)();
app.use(_express2.default.static("."));
var fs = __webpack_require__(34);
var path = __webpack_require__(11);
__webpack_require__(10);

var CryptoJS = __webpack_require__(12);
var md5 = __webpack_require__(13);
var csrf = __webpack_require__(35);
var cookieParse = __webpack_require__(14);
var expressControllers = __webpack_require__(36);
var path = __webpack_require__(11);
var bodyParser = __webpack_require__(37);
var mongoose = __webpack_require__(3);
var graphqlHTTP = __webpack_require__(38);

//ReactJS components

//database connection
mongoose.connect('mongodb://localhost/payment-gateway-api');

//graphql schema here
var schema = __webpack_require__(39);

//Middleware
//graphql middleware // NOTE:keep this (graphql_ ) middleware at top
app.use('/graphqlInterface', graphqlHTTP(function (req) {
  return {
    schema: schema, // schema : schema
    graphiql: true
  };
}));
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
app.use(bodyParser.urlencoded({ extended: true }));

// User defined middleware
var Api_Key_Middleware = __webpack_require__(46);

//controller ASSIGNMENT
//setting up the controller
expressControllers.setDirectory(path.join(__dirname, '/controller')).bind(app);
var merchantController = __webpack_require__(47);

//static path
app.use(_express2.default.static(path.join(__dirname + './public')));
app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'ejs');

//routes
app.get('/', function (req, res) {
  var d = "helloServer";
  var myapp = (0, _server.renderToString)(_react2.default.createElement(_App2.default, { data: d }));
  var html = fs.readFileSync('./public/views/index.ejs');
  html = html.toString();
  html = html.replace("<!-- APP -->", myapp);
  res.send(html);
});

app.post('/merchant/register', merchantController.register);
app.post('/merchant/pay', Api_Key_Middleware.VerifyApi_Key, merchantController.FetchAndMakePayment);

var server = app.listen(5000, function () {
  return console.log("server Running in port 5000");
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _apolloBoost = __webpack_require__(4);

var _apolloBoost2 = _interopRequireDefault(_apolloBoost);

var _reactApollo = __webpack_require__(1);

var _SideBar = __webpack_require__(21);

var _SideBar2 = _interopRequireDefault(_SideBar);

var _rightSlidePanel = __webpack_require__(22);

var _rightSlidePanel2 = _interopRequireDefault(_rightSlidePanel);

var _center = __webpack_require__(25);

var _center2 = _interopRequireDefault(_center);

var _store = __webpack_require__(30);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Apollo ApolloClient
var client = new _apolloBoost2.default({
  uri: 'http://localhost:5000/graphqlinterface'
});

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { client: client },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(_SideBar2.default, { store: _store2.default }),
            _react2.default.createElement(_center2.default, { store: _store2.default }),
            _react2.default.createElement(_rightSlidePanel2.default, { store: _store2.default })
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 21 */
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

var SideBar = function (_React$Component) {
    _inherits(SideBar, _React$Component);

    function SideBar() {
        _classCallCheck(this, SideBar);

        return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
    }

    _createClass(SideBar, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "sideBar three columns" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "side-bar-header" },
                        _react2.default.createElement(
                            "h2",
                            null,
                            "MERN+GraphQL"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "h1",
                            null,
                            "Stack Used"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "h5",
                            null,
                            "NodeJS ",
                            _react2.default.createElement("br", null),
                            " ReactJS ",
                            _react2.default.createElement("br", null),
                            " ExpressJS ",
                            _react2.default.createElement("br", null),
                            " Mongodb ",
                            _react2.default.createElement("br", null),
                            " GraphQl ",
                            _react2.default.createElement("br", null),
                            " Apollo"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "p",
                            null,
                            "Using fragments",
                            _react2.default.createElement("br", null),
                            "Learn how to use fragments to share fields across queries"
                        )
                    )
                )
            );
        }
    }]);

    return SideBar;
}(_react2.default.Component);

exports.default = SideBar;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RegistrationForm = __webpack_require__(23);

var _RegistrationForm2 = _interopRequireDefault(_RegistrationForm);

var _loginForm = __webpack_require__(24);

var _loginForm2 = _interopRequireDefault(_loginForm);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightSlidePanel = function (_React$Component) {
  _inherits(RightSlidePanel, _React$Component);

  function RightSlidePanel(props) {
    _classCallCheck(this, RightSlidePanel);

    var _this = _possibleConstructorReturn(this, (RightSlidePanel.__proto__ || Object.getPrototypeOf(RightSlidePanel)).call(this, props));

    _this.store = _this.props.store;
    return _this;
  }

  _createClass(RightSlidePanel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.store },
        _react2.default.createElement(
          'section',
          { className: 'right-Bar' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(_RegistrationForm2.default, null),
            _react2.default.createElement(_loginForm2.default, null)
          )
        )
      );
    }
  }]);

  return RightSlidePanel;
}(_react2.default.Component);

exports.default = RightSlidePanel;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegistrationForm = function (_React$Component) {
  _inherits(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    _classCallCheck(this, RegistrationForm);

    return _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));
  }

  _createClass(RegistrationForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Form-Div' },
        _react2.default.createElement(
          'div',
          { className: 'right-panel-close-icon' },
          _react2.default.createElement(
            'span',
            { onClick: function onClick(e) {
                e.preventDefault();
                $('.right-Bar').removeClass('open');
              } },
            '\u2716'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'Register Here For getting the ',
          _react2.default.createElement(
            'i',
            null,
            'Dummy'
          ),
          ' API_KEY'
        ),
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement('input', { type: 'text', name: 'name', placeholder: 'Write Name' }),
          _react2.default.createElement('input', { type: 'text', name: 'email', placeholder: 'Write Email' }),
          _react2.default.createElement('input', { type: 'number', name: 'phone_no', placeholder: 'Write Phone Number' }),
          _react2.default.createElement('input', { type: 'number', name: 'account_no', placeholder: 'Your Account Number' }),
          _react2.default.createElement('input', { type: 'number', name: 'identification_no', placeholder: 'Identification Number' }),
          _react2.default.createElement('input', { type: 'password', name: 'password', placeholder: 'Write Password' }),
          _react2.default.createElement(
            'button',
            { type: 'submit', name: 'button' },
            'Register'
          )
        )
      );
    }
  }]);

  return RegistrationForm;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
    isReduxWorking: state.isReduxWorking
  };
};
var mapDepatchToProps = function mapDepatchToProps(dispatch) {
  return {
    changeIsReduxWorking: function changeIsReduxWorking(answerTrueOrNot) {
      dispatch({
        type: "CHANGE_REDUX_WORKING_STATUS",
        data: answerTrueOrNot
      });
    }
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDepatchToProps)(RegistrationForm);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactApollo = __webpack_require__(1);

var _reduxForm = __webpack_require__(7);

var _Queries = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderField = function renderField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      null,
      label
    ),
    _react2.default.createElement('input', _extends({}, input, { placeholder: label, type: type })),
    touched && error && _react2.default.createElement(
      'span',
      null,
      error
    )
  );
};

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.submit = _this.submit.bind(_this);

    return _this;
  }

  _createClass(LoginForm, [{
    key: 'submit',
    value: async function submit(values) {
      console.log("form submitted", this.props.LoginQuery);
      var graphQLResponse = await this.props.LoginQuery.refetch({
        email: values.email,
        password: values.password
      });
      var storeResponse = await this.props.updateLoggedInUse(graphQLResponse.data.user);
      console.log("store Response", storeResponse);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Form-Div' },
        _react2.default.createElement(
          'p',
          null,
          'Login Here'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.props.handleSubmit(this.submit) },
          _react2.default.createElement(_reduxForm.Field, { name: 'firstName', label: 'First Name', component: renderField, type: 'text', placeholder: 'First Name' }),
          _react2.default.createElement(_reduxForm.Field, { name: 'email', label: 'Email Address', component: renderField, type: 'text', placeholder: 'Email' }),
          _react2.default.createElement(_reduxForm.Field, { name: 'password', label: 'Password', component: renderField, type: 'password', placeholder: 'Password' }),
          _react2.default.createElement(
            'button',
            { type: 'submit' },
            'Submit'
          )
        )
      );
    }
  }]);

  return LoginForm;
}(_react2.default.Component);

LoginForm = (0, _reduxForm.reduxForm)({
  form: 'Login' // a unique identifier for this form
})(LoginForm);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser

  };
};
var mapDepatchToProps = function mapDepatchToProps(dispatch) {
  return {
    updateLoggedInUse: function updateLoggedInUse(user) {
      return dispatch({ type: "LOGGED_USER_UPDATE", loggedInUser: user });
    }
  };
};

LoginForm = (0, _reactApollo.graphql)(_Queries.LoginQuery, {
  name: "LoginQuery",
  options: function options(values) {
    return {
      variables: {
        email: values.email,
        password: values.password
      }
    };
  }
})(LoginForm);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDepatchToProps)(LoginForm);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _centerHeader = __webpack_require__(26);

var _centerHeader2 = _interopRequireDefault(_centerHeader);

var _preloadContent = __webpack_require__(8);

var _preloadContent2 = _interopRequireDefault(_preloadContent);

var _docsContent = __webpack_require__(9);

var _docsContent2 = _interopRequireDefault(_docsContent);

var _postContent = __webpack_require__(28);

var _postContent2 = _interopRequireDefault(_postContent);

var _rightSide = __webpack_require__(29);

var _rightSide2 = _interopRequireDefault(_rightSide);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Center = function (_React$Component) {
  _inherits(Center, _React$Component);

  function Center(props) {
    _classCallCheck(this, Center);

    var _this = _possibleConstructorReturn(this, (Center.__proto__ || Object.getPrototypeOf(Center)).call(this, props));

    _this.state = { loading: false };
    _this.store = _this.props.store;
    return _this;
  }

  _createClass(Center, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ // re-renders the component everytime setState is called
        loading: true
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ // re-renders the component everytime setState is called
        loading: false
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.store },
        _react2.default.createElement(
          'div',
          { className: 'center-bar nine columns ' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_centerHeader2.default, null),
            _react2.default.createElement(_postContent2.default, null),
            _react2.default.createElement(_rightSide2.default, null)
          )
        )
      );
    }
  }]);

  return Center;
}(_react2.default.Component);

exports.default = Center;

/***/ }),
/* 26 */
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

var CenterHeader = function (_React$Component) {
  _inherits(CenterHeader, _React$Component);

  function CenterHeader() {
    _classCallCheck(this, CenterHeader);

    return _possibleConstructorReturn(this, (CenterHeader.__proto__ || Object.getPrototypeOf(CenterHeader)).call(this));
  }

  _createClass(CenterHeader, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container header-div" },
        _react2.default.createElement(
          "div",
          { className: "side-menu-icon" },
          _react2.default.createElement(
            "span",
            { onClick: function onClick(e) {
                e.preventDefault(e);
                $('.right-Bar').toggleClass('open');
              } },
            "\u205D"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "Notification-menu-icon" },
          _react2.default.createElement(
            "span",
            null,
            "\uD83D\uDD14"
          )
        )
      );
    }
  }]);

  return CenterHeader;
}(_react2.default.Component);

exports.default = CenterHeader;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _apolloBoost = __webpack_require__(4);

var _reactApollo = __webpack_require__(1);

var _preloadContent = __webpack_require__(8);

var _preloadContent2 = _interopRequireDefault(_preloadContent);

var _docsContent = __webpack_require__(9);

var _docsContent2 = _interopRequireDefault(_docsContent);

var _Queries = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostContent = function (_React$Component) {
  _inherits(PostContent, _React$Component);

  function PostContent() {
    _classCallCheck(this, PostContent);

    var _this = _possibleConstructorReturn(this, (PostContent.__proto__ || Object.getPrototypeOf(PostContent)).call(this));

    _this.displayPost = _this.displayPost.bind(_this);
    return _this;
  }

  _createClass(PostContent, [{
    key: 'displayPost',
    value: function displayPost() {
      var data = this.props.data;
      if (data.loading) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_preloadContent2.default, null)
        );
      } else {

        return data.posts.map(function (post, i) {
          return _react2.default.createElement(_docsContent2.default, {
            key: i,
            i: i,
            h1: post.Title,
            p: post.Body,
            a: post._id });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'seven columns' },
        this.displayPost()
      );
    }
  }]);

  return PostContent;
}(_react2.default.Component);

exports.default = (0, _reactApollo.graphql)(_Queries.getPost)(PostContent);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(1);

var _Queries = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightSide = function (_React$Component) {
  _inherits(RightSide, _React$Component);

  function RightSide(props) {
    _classCallCheck(this, RightSide);

    var _this = _possibleConstructorReturn(this, (RightSide.__proto__ || Object.getPrototypeOf(RightSide)).call(this, props));

    console.log(_this.props);
    _this.state = {
      title: "",
      body: "",
      userId: ""
    };
    _this.SendPostDateToGraph = _this.SendPostDateToGraph.bind(_this);
    return _this;
  }

  _createClass(RightSide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.props.addPostMutation({
      //   variables: {
      //       title : "hello World",
      //       body : "hello body",
      //       userId : "7346387sjdfb"
      //      }
      // })
      // this.setState();
    }
  }, {
    key: 'SendPostDateToGraph',
    value: function SendPostDateToGraph(e) {
      e.preventDefault();
      console.log(this.state);
      this.props.addPostMutation({
        variables: {
          title: this.state.title,
          body: this.state.body,
          userId: "7346387sjdfb"
        },
        refetchQueries: [{ query: _Queries.getPost }]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'four columns' },
        _react2.default.createElement(
          'div',
          { className: 'post-form' },
          _react2.default.createElement(
            'h3',
            null,
            'Write Post'
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.SendPostDateToGraph },
            _react2.default.createElement(
              'div',
              { className: 'post-title' },
              _react2.default.createElement(
                'label',
                { 'for': '' },
                'Title'
              ),
              _react2.default.createElement('textarea', { name: 'name', onChange: function onChange(e) {
                  e.preventDefault();
                  console.log(e);
                  _this2.setState({
                    title: e.target.value
                  });
                }, rows: '8', cols: '80' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'post-body' },
              _react2.default.createElement(
                'label',
                { 'for': '' },
                'Body'
              ),
              _react2.default.createElement('textarea', { name: 'name', rows: '8', cols: '80', onChange: function onChange(e) {
                  e.preventDefault();
                  console.log(e);
                  _this2.setState({
                    body: e.target.value
                  });
                } })
            ),
            _react2.default.createElement(
              'div',
              { className: 'post-menu-icon' },
              _react2.default.createElement(
                'button',
                { onClick: this.SendPostDateToGraph },
                'Write Post'
              )
            )
          )
        )
      );
    }
  }]);

  return RightSide;
}(_react2.default.Component);

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(_Queries.addPostMutation, { name: "addPostMutation" }), (0, _reactApollo.graphql)(_Queries.getPost, { name: "getPost" }))(RightSide);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(31);

var _reduxForm = __webpack_require__(7);

var _reducer = __webpack_require__(32);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  myReducer: _reducer2.default,
  form: _reduxForm.reducer
});
var store = (0, _redux.createStore)(rootReducer);

store.subscribe(function () {
  // console.log("State Changed " , store.getState());
});

exports.default = store;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initialState = __webpack_require__(33);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myReducer = function myReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _initialState2.default)();
  var Action = arguments[1];

  switch (Action.type) {
    case "LOGGED_USER_UPDATE":
      console.log("Inside the login user reducer", Action);
      return state;
      break;
    case "REGISTER_USER":
      console.log("Inside the Register user reducer");
      break;
    case "CHANGE_REDUX_WORKING_STATUS":
      console.log("CHANGE_REDUX_WORKING_STATUS");
      return state;
      break;
    default:
      return state;
      break;
  }
};
exports.default = myReducer;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = function initialState() {
  return {
    loggedInUser: [],
    isReduxWorking: false
  };
};
exports.default = initialState;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("csurf");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("express-controller");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var graphql = __webpack_require__(40);
var _ = __webpack_require__(41);
var Encryption = __webpack_require__(6);
var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLString = graphql.GraphQLString,
    GraphQLInt = graphql.GraphQLInt,
    GraphQLScalarType = graphql.GraphQLScalarType,
    GraphQLSchema = graphql.GraphQLSchema,
    GraphQLList = graphql.GraphQLList;

var MerchantUser = __webpack_require__(16);
var TransactionModel = __webpack_require__(44);
var PostModel = __webpack_require__(45);

var TransactionType = new GraphQLObjectType({
  name: "Transaction",
  fields: function fields() {
    return {
      _id: { type: GraphQLInt },
      _Tid: { type: GraphQLString },
      _Mid: { type: GraphQLString },
      recieverAccountName: { type: GraphQLString },
      recieverAccountNumber: { type: GraphQLString },
      senderAccountNumber: { type: GraphQLString },
      senderAccountName: { type: GraphQLString },
      Amount: { type: GraphQLInt },
      MerchantUserData: {
        type: UserType,
        resolve: function resolve(parent, args) {
          return MerchantUser.findOne({ _Mid: parent._Mid }).exec();
        }
      }
    };
  }
});

var PostType = new GraphQLObjectType({
  name: "Post",
  fields: function fields() {
    return {
      _id: { type: GraphQLString },
      Title: { type: GraphQLString },
      Body: { type: GraphQLString },
      _UserID: { type: GraphQLString },
      userDetails: {
        type: UserType,
        resolve: function resolve(parent, args) {
          return MerchantUser.findOne({ _id: parent._UserID }).exec();
        }
      }

    };
  }
});
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
      _Mid: { type: GraphQLString },
      transactionDetails: {
        type: new GraphQLList(TransactionType),
        resolve: function resolve(parent, args) {
          return TransactionModel.find({ _Mid: parent._Mid }).exec();
        }
      },
      postDetails: {
        type: new GraphQLList(PostType),
        resolve: function resolve(parent, args) {
          return PostModel.find({ _UserID: parent._id }).exec();
        }
      }
    };
  }
});
var RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: {
    user: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: function resolve(parent, args) {
        // fetch from db here

        return MerchantUser.findOne({ email: args.email }, function (err, u) {
          return u;
        });
      }
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLString } },
      resolve: function resolve(parent, args) {
        return PostModel.findOne({ _id: args.id }, function (err, u) {
          return u;
        });
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: function resolve(parent, args) {
        return PostModel.find(function (err, u) {
          return u;
        });
      }
    },
    transaction: {
      type: TransactionType,
      args: { _Tid: { type: GraphQLString } },
      resolve: function resolve(parent, args) {
        // fetch from db here
        return TransactionModel.findOne({ _Tid: args._Tid }).exec();
      }
    },
    Transactions: {
      type: new GraphQLList(TransactionType),
      resolve: function resolve(parent, args) {
        return TransactionModel.find().exec();
      }
    },
    Users: {
      type: new GraphQLList(UserType),
      resolve: function resolve(parent, args) {
        console.log("inside");
        return MerchantUser.find().exec();
      }
    }

  }
});

var mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    addTransaction: {
      type: TransactionType,
      args: {
        recieverAccountName: { type: GraphQLString },
        recieverAccountNumber: { type: GraphQLString },
        senderAccountName: { type: GraphQLString },
        senderAccountNumber: { type: GraphQLString },
        _Mid: { type: GraphQLString },
        Amount: { type: GraphQLInt }
      },
      resolve: function resolve(parent, args) {
        var transactionModel = new TransactionModel();
        transactionModel.recieverAccountName = args.recieverAccountName;
        transactionModel.recieverAccountNumber = args.recieverAccountNumber;
        transactionModel.senderAccountName = args.senderAccountName;
        transactionModel.senderAccountNumber = args.senderAccountNumber;
        transactionModel._Mid = args._Mid;
        transactionModel.Amount = args.Amount;
        transactionModel._Tid = Encryption.getRandomNumber(3);
        return transactionModel.save();
      }
    },
    addPost: {
      type: PostType,
      args: {
        Title: { type: GraphQLString },
        Body: { type: GraphQLString },
        _UserID: { type: GraphQLString }
      },
      resolve: function resolve(parent, args) {
        var postModel = new PostModel();
        postModel.Title = args.Title;
        postModel.Body = args.Body;
        postModel._UserID = args._UserID;
        return postModel.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mongoose = __webpack_require__(3);
var transaction = new mongoose.Schema((_ref = {
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  recieverAccountNumber: {
    type: String,
    required: true
  },
  recieverAccountName: {
    type: String,
    required: true
  },
  senderAccountNumber: {
    type: String,
    required: true
  }
}, _defineProperty(_ref, 'senderAccountNumber', {
  type: String,
  required: true
}), _defineProperty(_ref, '_Tid', {
  type: String,
  required: true
}), _defineProperty(_ref, 'Amount', {
  type: Number,
  required: true
}), _ref));
module.exports = mongoose.model('transaction', transaction);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(3);
var Post = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  Title: {
    type: String,
    required: true
  },
  Body: {
    type: String,
    required: true
  },
  _UserID: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Post', Post);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Encryption = __webpack_require__(6);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MerchantUser = __webpack_require__(16);
var Encryption = __webpack_require__(6);
var crypto = __webpack_require__(15);
var cookieParse = __webpack_require__(14);

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

/***/ })
/******/ ]);