var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var salt = bcrypt.genSaltSync(10);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {

});

var userSchema = mongoose.Schema({
  userName: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  userLevel: {type: String, required: true},
  email: {type: String, required: true},
  age: {type: String, required: true},
  answer1: {type: String, required: true},
  answer2: {type: String, required: true},
  answer3: {type: String, required: true}
});

var User = mongoose.model('User_Collection', userSchema);

exports.index = function(req, res) {
  res.render('index', {
    title: "Welcome!"
  });
}

exports.login = function(req, res) {
  User.find(function(err, guest) {
    res.render('login', {
      title: "Login"
    });
  })
}

exports.loginUser = function(req, res) {
  User.findOne({userName: req.body.userName}, function(err, guest) {
    if(guest) {
      bcrypt.compare(req.body.password, guest.password, function(err, user) {
        if(user) {
          req.session.name = user.userLevel;
          console.log(req.session.name);
          res.redirect('/');
        }
        else return console.error(err);
      });
    }
    else return console.error(err);
  });
}

exports.manage = function (req, res) {
  //if(req.session.name === "Admin") {
    User.find(function (err, user) {
      if (err) return console.error(err);
      res.render('manage', {
        title: 'User List',
        people: user
      });
    });
  //}
 // else {
  //  res.redirect('/');
  //}
};

exports.create = function (req, res) {
  res.render('create', {
      title: 'Sign Up'
  });
};

exports.createUser = function (req, res) {
  var hash = bcrypt.hashSync(req.body.password, salt);
  var user = new User({
    userName: req.body.userName,
    password: hash,
    userLevel: req.body.userLevel,
    email: req.body.email,
    age: req.body.age,
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3
  });
  user.save(function (err, user) {
    if (err) return console.error(err);
    console.log(req.body.userName + ' added');
  });
  res.redirect('/');
};

exports.update = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) return console.error(err);
    res.render('update', {
      title: 'Update Information',
      user: user
    });
  });
};

exports.updateUser = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) return console.error(err);
    user.userName = req.body.userName;
    user.age = req.body.age;
    userLevel: req.body.userLevel;
    email: req.body.email;
    user.answer1 = req.body.answer1;
    user.answer2 = req.body.answer2;
    user.answer3 = req.body.answer3;
    user.save(function (err, user) {
      if (err) return console.error(err);
      console.log(req.body.userName + ' updated');
    });
  });
  res.redirect('/');
};

exports.delete = function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return console.error(err);
    res.redirect('/');
  });
};

exports.details = function (req, res) {
  if(req.session.name === "Admin") {
    User.findById(req.params.id, function (err, user) {
      if (err) return console.error(err);
      res.render('details', {
        title: user.userName + "'s Details",
        user: user
      });
    });
  } else {
    res.redirect('/');
  }
};