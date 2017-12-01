var express = require('express'),
pug = require('pug'),
path = require('path'),
route = require('./routes/routes.js'),
cookieParser = require('cookie-parser'),
expressSession = require('express-session'),
bodyParser = require('body-parser');


var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')));
app.use(cookieParser());
app.use(expressSession({
    secret: 'Our Secret',
    saveUninitialized: true,
    resave: true
}));

var urlencodedParser = bodyParser.urlencoded({
  extended: true
})

var whatever = function(req, res, next) {
  console.log("whatever");
  next();
}

app.get('/', route.index);
app.get('/login', whatever, route.login);
app.get('/manage', route.checkAuth, route.manage);
app.get('/create', route.create);
app.get('/update/:id', route.update);
app.get('/details/:id', route.details);
app.get('/details/:id', route.checkAuth, route.details);
app.post('/login', urlencodedParser, route.loginUser);
app.post('/create', urlencodedParser, route.createUser);
app.post('/update/:id', urlencodedParser, route.updateUser);
app.get('/delete/:id', route.delete);
app.get('/logout', route.logout);

app.listen(3000);