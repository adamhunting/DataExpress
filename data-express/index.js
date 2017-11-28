var express = require('express'),
pug = require('pug'),
path = require('path'),
route = require('./routes/routes.js'),
cookieParser = require('cookie-parser'),
expressSession = require('express-session'),
bodyParser = require('body-parser');


var app = express();