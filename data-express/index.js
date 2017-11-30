var express = require('express'),
pug = require('pug'),
path = require('path'),
route = require('./routes/routes.js'),
cookieParser = require('cookie-parser'),
expressSession = require('express-session'),
bodyParser = require('body-parser');


var app = express();

var checkAuth = function(req, res, next){
  if(req.session.user && req.session.user.isAuthenticated){
    next();
  }else{
    res.redirect('/');
  }
}

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')));

app.use(expressSession({
  secret: 'Something',
  saveUninitialized: true,
  resave: true

}));

var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

app.get('/', route.index);
app.get('/login', route.login);
app.get('/manage', route.manage);
app.get('/create', route.create);
app.get('/update/:id', route.update);
app.get('/details/:id', route.details);
app.post('/login', urlencodedParser, route.loginUser);
app.post('/create', urlencodedParser, route.createUser);
app.post('/update/:id', urlencodedParser, route.updateUser);
app.get('/delete/:id', route.delete);


//Logout 
//app.get('/logout', function(req,res){
//  req.session.destroy(function(err){
//    if(err){
//      console.log(err);
//    }else{
//     res.redirect('/')
//    }
//  })
//});

app.listen(3000);