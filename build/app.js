/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {var express = __webpack_require__(1);
	var app = express(); // create our app w/ express
	var morgan = __webpack_require__(2); // log requests to the console (express4)
	var bodyParser = __webpack_require__(3); // pull information from HTML POST (express4)
	var methodOverride = __webpack_require__(4); // simulate DELETE and PUT (express4)

	var routes = __webpack_require__(5);

	// configuration =================


	app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
	app.use(morgan('dev')); // log every request to the console
	app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
	app.use(bodyParser.json()); // parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
	app.use(methodOverride());

	app.use('/', routes); // when you hit the root route, use this
	// listen (start app with node server.js) ======================================
	app.listen(3001);
	console.log("App listening on port 3001");
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("method-override");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var express = __webpack_require__(1);
	var router = express.Router(); // google express Router() later

	// router  supports .use .get .post. put. patch .delete

	router.get('/home', function (req, res, next) {
	    res.send('gob bleuth');
	});

	router.get('/', function (req, res) {
	    res.sendfile('./public/index.html');
	});

	module.exports = router;

/***/ }
/******/ ]);