const task = require('../models/task');
const User = require('../models/user');

module.exports.profile = function (req, res) {
  task.find({}, function (err, tasks) {
    if (err) {
      console.log('err in fetching tasks from db', err);
      return;
    }
    return res.render('home', {
      title: "task List",
      task_list: tasks
      // return res.render('home');
    });

  });
}

module.exports.create_tasks = function (req, res) {
  //console.log(JSON.stringify(req.body));
  task.create(
    {
      description: req.body.Tasks,
      category: req.body.details,
      date: req.body.date
    }, function (err, newtask) {
      if (err) {
        console.log('err in creating contact list', err);
        return;
      }
      console.log('******', newtask);


    })
  res.redirect('/users/profile')
}
module.exports.delete_task = function (req, res) {
  let id = req.query.id;
  task.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log('deleting an object from database');
      return;
    }
    console.log('******', id);


  });

  res.redirect('/users/profile')
}
module.exports.SignUp = function (req, res) {
  return res.render('user_sign_up', {
    title: "codeial|sign up"
  })
}
module.exports.SignIn = function (req, res) {
  return res.render('user_sign_in', {
    title: "codeial|sign in"
  })
}

module.exports.create = function (req, res) {


  if (req.body.password != req.body.confirm_password) {
    return res.redirect('/users/sign-up');
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log('err in finding user in signing up');
      return;
    }
console.log(user);
    if (!user) {
      console.log(req.body);
      User.create(req.body, function (err, user) {
        if (err) {
          console.log('error in creating while using signing up');
          return;
        }
        return res.redirect('/users/sign-in');
      });
    }
    else {
      return res.redirect('back');
    }

  })
}
module.exports.createSession=function(req,res){

  User.findOne({email:req.body.email},function(req,res){
if(err){
  console.log('error in finding user in signing in')
  return;
}
if(user){
if(user.password!=req.body.password){
  return res.redirect('back')
}
}
else{
  return res.redirect('/users/profile')
}

  });
}