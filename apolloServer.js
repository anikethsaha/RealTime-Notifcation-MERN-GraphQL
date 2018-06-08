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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFullPost = exports.LoginQuery = exports.addUsertMutation = exports.getPost = exports.addPostMutation = undefined;

var _templateObject = _taggedTemplateLiteral(["\nmutation($title : String!,$body : String! ,$userId : String!){\n  addPost(Title:$title,Body :$body,_UserID:$userId)\n  {\n    _id\n    Title\n    Body\n    _UserID\n  }\n}\n\n"], ["\nmutation($title : String!,$body : String! ,$userId : String!){\n  addPost(Title:$title,Body :$body,_UserID:$userId)\n  {\n    _id\n    Title\n    Body\n    _UserID\n  }\n}\n\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n{\n  posts {\n    _id\n    Title\n    Body\n    _UserID\n  }\n}\n"], ["\n{\n  posts {\n    _id\n    Title\n    Body\n    _UserID\n  }\n}\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  query loginQuery($email : String!,$password:String!){\n    user(email : $email,password :$password){\n      email\n      name\n    }\n  }\n"], ["\n  query loginQuery($email : String!,$password:String!){\n    user(email : $email,password :$password){\n      email\n      name\n    }\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  query postQuery($title : String!){\n    post(Title : $title){\n      Title\n      Body\n      Likes\n      Comments\n    }\n  }\n"], ["\n  query postQuery($title : String!){\n    post(Title : $title){\n      Title\n      Body\n      Likes\n      Comments\n    }\n  }\n"]);

var _apolloBoost = __webpack_require__(5);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var addPostMutation = (0, _apolloBoost.gql)(_templateObject);
var addUsertMutation = (0, _apolloBoost.gql)(_templateObject);
var getPost = (0, _apolloBoost.gql)(_templateObject2);
var LoginQuery = (0, _apolloBoost.gql)(_templateObject3);
var getFullPost = (0, _apolloBoost.gql)(_templateObject4);
exports.addPostMutation = addPostMutation;
exports.getPost = getPost;
exports.addUsertMutation = addUsertMutation;
exports.LoginQuery = LoginQuery;
exports.getFullPost = getFullPost;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

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

var _reactRedux = __webpack_require__(1);

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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = __webpack_require__(24);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactRouterDom = __webpack_require__(3);

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
    key: 'render',
    value: function render() {
      var href = "/#/Dpost/";
      href = href.concat(this.props.h1);
      return _react2.default.createElement(
        'div',
        { className: 'content-wrapper ' },
        _react2.default.createElement(
          'div',
          { key: this.props.i, className: 'post-content-div' },
          _react2.default.createElement(
            'div',
            { className: '' },
            _react2.default.createElement(
              'div',
              { className: ' content-title' },
              _react2.default.createElement(
                'h1',
                null,
                this.props.h1.toUpperCase()
              )
            ),
            _react2.default.createElement(
              'div',
              { className: ' content-body' },
              _react2.default.createElement(
                'p',
                null,
                this.props.p
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              { className: 'helper-sec' },
              _react2.default.createElement(
                'span',
                { className: 'ti-align-center' },
                ' '
              ),
              _react2.default.createElement(
                'a',
                { href: href },
                'Full Post'
              )
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _apolloBoost = __webpack_require__(5);

var _reactApollo = __webpack_require__(2);

var _preloadContent = __webpack_require__(6);

var _preloadContent2 = _interopRequireDefault(_preloadContent);

var _docsContent = __webpack_require__(11);

var _docsContent2 = _interopRequireDefault(_docsContent);

var _Queries = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(3);

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
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log("post", this.props.data);
    }
  }, {
    key: 'displayPost',
    value: function displayPost() {

      var data = this.props.data;
      console.log("data", data);
      if (data.loading) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_preloadContent2.default, null)
        );
      } else {
        console.log("data2", data);
        return data.posts.map(function (post, i) {
          return _react2.default.createElement(_docsContent2.default, {
            key: i,
            i: i,
            h1: post.Title,
            p: post.Body,
            a: '/test'
          });
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(2);

var _Queries = __webpack_require__(4);

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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(17);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _server = __webpack_require__(18);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(14);

var app = (0, _express2.default)();
app.use(_express2.default.static("."));
var fs = __webpack_require__(31);
var path = __webpack_require__(15);
__webpack_require__(14);

var _require = __webpack_require__(32),
    graphqlExpress = _require.graphqlExpress,
    graphiqlExpress = _require.graphiqlExpress;

var CryptoJS = __webpack_require__(33);
var md5 = __webpack_require__(34);
var csrf = __webpack_require__(35);
var cookieParse = __webpack_require__(36);
var expressControllers = __webpack_require__(37);
var path = __webpack_require__(15);
var bodyParser = __webpack_require__(38);
var mongoose = __webpack_require__(7);

//ReactJS components

//database connection
mongoose.connect('mongodb://localhost/payment-gateway-api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var schema = __webpack_require__(39);
// bodyParser is needed just for POST.
app.use('/graphql', graphqlExpress({ schema: schema }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: "/graphql"
}));

app.use(cookieParse());

//controller ASSIGNMENT

//static path
app.use(_express2.default.static(path.join(__dirname + './public')));
app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'ejs');

//routes
app.get('/', function (req, res) {
  var d = "helloServer";
  var context = {};
  var myapp = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_App2.default, null)
  ));
  var html = fs.readFileSync('./public/views/index.ejs');
  html = html.toString();
  html = html.replace("<!-- APP -->", myapp);
  res.send(html);
});

var server = app.listen(3000, function () {
  return console.log("server Running in port 3000");
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _apolloBoost = __webpack_require__(5);

var _apolloBoost2 = _interopRequireDefault(_apolloBoost);

var _reactApollo = __webpack_require__(2);

var _SideBar = __webpack_require__(20);

var _SideBar2 = _interopRequireDefault(_SideBar);

var _rightSlidePanel = __webpack_require__(21);

var _rightSlidePanel2 = _interopRequireDefault(_rightSlidePanel);

var _center = __webpack_require__(23);

var _center2 = _interopRequireDefault(_center);

var _store = __webpack_require__(25);

var _store2 = _interopRequireDefault(_store);

var _postContent = __webpack_require__(12);

var _postContent2 = _interopRequireDefault(_postContent);

var _rightSide = __webpack_require__(13);

var _rightSide2 = _interopRequireDefault(_rightSide);

var _DetailPost = __webpack_require__(30);

var _DetailPost2 = _interopRequireDefault(_DetailPost);

var _centerHeader = __webpack_require__(10);

var _centerHeader2 = _interopRequireDefault(_centerHeader);

var _reactRedux = __webpack_require__(1);

var _RegistrationForm = __webpack_require__(8);

var _RegistrationForm2 = _interopRequireDefault(_RegistrationForm);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Apollo ApolloClient   // NOTE:  _ _use POST : 5000 when using expressJS graphQL server_ _ 
var client = new _apolloBoost2.default({
  uri: 'http://localhost:3000/graphql'
});

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.testing = _this.testing.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "testing",
    value: function testing() {
      return _react2.default.createElement(
        "div",
        { className: "seven columns" },
        _react2.default.createElement(
          "h1",
          null,
          "hello world"
        )
      );
    }
  }, {
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
            _react2.default.createElement(
              _reactRedux.Provider,
              { store: _store2.default },
              _react2.default.createElement(
                "div",
                { className: "center-bar nine columns " },
                _react2.default.createElement(
                  "div",
                  { className: "row" },
                  _react2.default.createElement(_centerHeader2.default, null),
                  _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _postContent2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: "/Dpost/:title", component: _DetailPost2.default })
                  ),
                  _react2.default.createElement(_rightSide2.default, null)
                )
              )
            ),
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RegistrationForm = __webpack_require__(8);

var _RegistrationForm2 = _interopRequireDefault(_RegistrationForm);

var _loginForm = __webpack_require__(22);

var _loginForm2 = _interopRequireDefault(_loginForm);

var _reactRedux = __webpack_require__(1);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactApollo = __webpack_require__(2);

var _reduxForm = __webpack_require__(9);

var _Queries = __webpack_require__(4);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _centerHeader = __webpack_require__(10);

var _centerHeader2 = _interopRequireDefault(_centerHeader);

var _preloadContent = __webpack_require__(6);

var _preloadContent2 = _interopRequireDefault(_preloadContent);

var _docsContent = __webpack_require__(11);

var _docsContent2 = _interopRequireDefault(_docsContent);

var _postContent = __webpack_require__(12);

var _postContent2 = _interopRequireDefault(_postContent);

var _rightSide = __webpack_require__(13);

var _rightSide2 = _interopRequireDefault(_rightSide);

var _reactRedux = __webpack_require__(1);

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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(26);

var _reduxForm = __webpack_require__(9);

var _reducer = __webpack_require__(27);

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
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initialState = __webpack_require__(28);

var _initialState2 = _interopRequireDefault(_initialState);

var _objectAssign = __webpack_require__(29);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

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
    case "UPDATED_CURRENT_POST":
      return Object.assign({}, state, {
        currentPost: {
          title: Action.data.Title,
          body: Action.data.Body
        }
      });
      break;
    case "GET_CURRENT_POST":
      console.log(state.currentPost);
      return state.currentPost;
      break;
    default:
      return state;
      break;
  }
};
exports.default = myReducer;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = function initialState() {
  return {
    loggedInUser: [],
    isReduxWorking: false,
    currentPost: []
  };
};
exports.default = initialState;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _Queries = __webpack_require__(4);

var _preloadContent = __webpack_require__(6);

var _preloadContent2 = _interopRequireDefault(_preloadContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailPost = function (_React$Component) {
  _inherits(DetailPost, _React$Component);

  function DetailPost(props) {
    _classCallCheck(this, DetailPost);

    var _this = _possibleConstructorReturn(this, (DetailPost.__proto__ || Object.getPrototypeOf(DetailPost)).call(this, props));

    _this.state = {
      Title: '',
      Body: '',
      likes: 0,
      isLoading: true
    };
    _this.getPostData = _this.getPostData.bind(_this);
    _this.postLoaded = _this.postLoaded.bind(_this);
    _this.postNotLoad = _this.postNotLoad.bind(_this);
    return _this;
  }

  _createClass(DetailPost, [{
    key: 'getPostData',
    value: function getPostData() {
      var _this2 = this;

      this.props.getFullPost.refetch({
        title: this.props.match.params.title
      }).then(function (response) {
        console.log("response", response);
        _this2.setState({
          Title: response.data.post.Title,
          Body: response.data.post.Body,
          isLoading: false,
          likes: response.data.post.Likes
        });
      });
    }
  }, {
    key: 'componentWillMount',
    value: async function componentWillMount() {
      await this.getPostData();
    }
    //   async componentWillMount(){
    //   var response = await this.props.getFullPost.refetch({
    //     title : this.props.match.params.title
    //   });
    //   var currentPostVar = await this.props.updateCurrentPost(response);
    //   this.state = {
    //     Title : currentPostVar.data.data.post.Title,
    //     Body : currentPostVar.data.data.post.Body,
    //     isLoading : false
    //   }
    //
    // }

  }, {
    key: 'postNotLoad',
    value: function postNotLoad() {
      return _react2.default.createElement(
        'div',
        { className: 'seven columns' },
        _react2.default.createElement(
          'div',
          { className: 'content-wrapper ' },
          _react2.default.createElement(
            'div',
            { className: 'post-content-div' },
            _react2.default.createElement(
              'div',
              { className: '' },
              _react2.default.createElement(
                'div',
                { className: ' content-title' },
                _react2.default.createElement(
                  'h1',
                  null,
                  this.props.match.params.title.toUpperCase()
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'content-body' },
                _react2.default.createElement(_preloadContent2.default, null)
              )
            )
          )
        )
      );
    }
  }, {
    key: 'postLoaded',
    value: function postLoaded() {
      return _react2.default.createElement(
        'div',
        { className: 'seven columns' },
        _react2.default.createElement(
          'div',
          { className: 'content-wrapper ' },
          _react2.default.createElement(
            'div',
            { className: 'post-content-div' },
            _react2.default.createElement(
              'div',
              { className: '' },
              _react2.default.createElement(
                'div',
                { className: ' content-title' },
                _react2.default.createElement(
                  'h1',
                  null,
                  this.props.match.params.title.toUpperCase()
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'content-body' },
                _react2.default.createElement(
                  'p',
                  null,
                  this.state.Body
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'helper-sec row' },
                _react2.default.createElement(
                  'a',
                  { className: 'meta-likes two columns' },
                  _react2.default.createElement('span', { className: 'ti-thumb-up' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    this.state.likes
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'meta-author two columns' },
                  _react2.default.createElement('span', { className: 'ti-pencil-alt' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Comments'
                  )
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isLoading) return this.postNotLoad();
      return this.postLoaded();
    }
  }]);

  return DetailPost;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentPost: state.currentPost
  };
};
var mapDepatchToProps = function mapDepatchToProps(dispatch) {
  return {
    updateCurrentPost: function updateCurrentPost(_post) {
      return dispatch({ type: "UPDATED_CURRENT_POST", data: _post });
    },
    getCurrentPost: function getCurrentPost() {
      return dispatch({ type: "GET_CURRENT_POST" });
    }
  };
};

DetailPost = (0, _reactRedux.connect)(mapStateToProps, mapDepatchToProps)(DetailPost);

exports.default = (0, _reactApollo.graphql)(_Queries.getFullPost, {
  name: "getFullPost",
  options: function options(values) {
    return {
      variables: {
        title: values
      }
    };
  }
})(DetailPost);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("crypto-js");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("crypto-js/md5");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("csurf");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("express-controller");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(40),
    makeExecutableSchema = _require.makeExecutableSchema;

var typeDefs = __webpack_require__(41);
var resolvers = __webpack_require__(42);

module.exports = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var typeDefs = "\n  type post{\n    _id : String!,\n    Title : String!,\n    Body :String!,\n    _UserID :String!,\n    Comments : String!,\n    Likes : Int!,\n    author : user\n  }\n  type user{\n    _id : String!,\n    email : String!,\n    name : String!,\n    password : String!,\n    account_Number : Int!,\n    phone_no:Int!,\n    identification_number:Int!,\n    _Mid :String!,\n    postDetails : [post]\n  }\n  type Query{\n    posts : [post],\n    localposts : [post],\n    localpost(id:Int!) : post,\n    users : [user],\n    loginUser(email : String! ,password : String!) : user,\n    author : user,\n    postDetails : [post]\n  }\n  type Mutation{\n    addPost(title : String!,body:String!,_UserID : String!) : post,\n    registerUser(\n      email : String! ,\n      password : String!,\n      name : String!,\n      account_Number : Int!,\n      phone_no:Int!,\n      identification_number:Int!\n    ) : user!\n  }\n\n";

module.exports = typeDefs;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostModel = __webpack_require__(43);
var MerchantUser = __webpack_require__(44);

var _require = __webpack_require__(45),
    find = _require.find,
    filter = _require.filter;

var postsA = [{ id: 1, _UserID: 1, Title: 'Introduction to GraphQL', Body: "hello", Likes: 0, Comments: "" }, { id: 2, _UserID: 2, Title: 'Welcome to Meteor', Body: "hello", Likes: 0, Comments: "" }, { id: "5b0d4299b1482066f0680056", _UserID: 2, Title: 'Advanced GraphQL', Body: "hello", Likes: 0, Comments: "" }, { id: 4, _UserID: 3, Title: 'Launchpad is Cool', Body: "hello", Likes: 0, Comments: "" }];

var resolver = {
  Query: {
    posts: function posts() {
      return PostModel.find(function (err, post) {
        return post;
      });
    },
    localposts: function localposts() {
      return postsA;
    },
    localpost: function localpost(root, args) {
      return find(postsA, { id: args.id });
    },
    users: function users() {
      return MerchantUser.find(function (err, user) {
        return user;
      });
    },
    loginUser: function loginUser(root, args) {
      //Login Logic here
    },
    author: function author(root, args) {
      return MerchantUser.find().exec();
    },
    postDetails: function postDetails(root, args) {
      return PostModel.find({ _UserID: root._id }).exec();
    }
  },
  Mutation: {
    addPost: function addPost(root, args) {
      var postModel = new PostModel();
      postModel.Title = args.title;
      postModel.Body = args.body;
      postModel._UserID = args._UserID;
      return postModel.save();
    },
    registerUser: function registerUser(roote, args) {
      // registration here
    }
  }
};
module.exports = resolver;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7);
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
  Comments: {
    type: String
  },
  Likes: {
    type: Number

  },
  _UserID: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Post', Post);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7);
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
/* 45 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })
/******/ ]);