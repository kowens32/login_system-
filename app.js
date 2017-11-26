var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mySql = require('mysql');
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//
//     // Your username
//     user: "root",
//
//     // Your password
//     password: "",
//     database: "blank for right now"
// });
//
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + "\n");
//     createProduct();
// });

var router = require('./routes/index');
var users = require('./routes/users');

//Init App
var app = express();

//VIew Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());