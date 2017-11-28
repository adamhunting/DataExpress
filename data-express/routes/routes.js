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
  
  
  
  exports.manage = function (req, res) {
    User.find(function (err, user) {
      if (err) return console.error(err);
      res.render('index', {
        title: 'People List',
        people: user
      });
    });
  };
  
  exports.create = function (req, res) {
    res.render('create', {
        title: 'Add Person'
    });
  };
  
  exports.createPerson = function (req, res) {
    var person = new Person({
      name: req.body.name,
      age: req.body.age,
      species: req.body.species
    });
    person.save(function (err, person) {
      if (err) return console.error(err);
      console.log(req.body.name + ' added');
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