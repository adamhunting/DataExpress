var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {

});

var userSchema = mongoose.Schema({
  userName: String,
  password: String,
  userLevel: String,
  email: String,
  age: String,
  answer1: String,
  answer2: String,
  answer3: String
});


var User = mongoose.model('User_Collection', userSchema);

exports.index = function(req, res) {
  res.render('index', {
    title: "Welcome!"
  });
}

exports.manage = function (req, res) {
  User.find(function (err, user) {
    if (err) return console.error(err);
    res.render('manage', {
      title: 'People List',
      people: user
    });
  });
};

exports.create = function (req, res) {
  res.render('create', {
      title: 'Sign Up'
  });
};

exports.createUser = function (req, res) {
  var user = new User({
    userName: req.body.userName,
    password: req.body.password,
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

exports.edit = function (req, res) {
  Person.findById(req.params.id, function (err, person) {
    if (err) return console.error(err);
    res.render('edit', {
      title: 'Edit Person',
      person: person
    });
  });
};

exports.editPerson = function (req, res) {
  Person.findById(req.params.id, function (err, person) {
    if (err) return console.error(err);
    person.name = req.body.name;
    person.age = req.body.age;
    person.species = req.body.species;
    person.save(function (err, person) {
      if (err) return console.error(err);
      console.log(req.body.name + ' updated');
    });
  });
  res.redirect('/');

};

exports.delete = function (req, res) {
  Person.findByIdAndRemove(req.params.id, function (err, person) {
    if (err) return console.error(err);
    res.redirect('/');
  });
};

exports.details = function (req, res) {
  Person.findById(req.params.id, function (err, person) {
    if (err) return console.error(err);
    res.render('details', {
      title: person.name + "'s Details",
      person: person
    });
  });
};