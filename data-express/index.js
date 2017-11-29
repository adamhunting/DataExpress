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

var urlencodedParser = bodyParser.urlencoded({
  extended: true
})

app.get('/', route.index);
app.get('/create', route.create);
app.get('/update/:id', route.update);
app.get('/details/:id', route.details);
app.post('/create', urlencodedParser, route.createUser);
app.post('/update/:id', urlencodedParser, route.updateUser);
app.get('/delete/:id', route.delete);

app.listen(3000);