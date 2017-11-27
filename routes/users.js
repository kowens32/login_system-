var express = require('express');
var router = express.Router();

//register
router.get('/register', function(req,res){
    res.render('register');
});

//login
router.get('/login', function(req,res){
    res.render('login');
});

//register user
router.post('/register', function(req,res){
   var name = req.body.name;
   var email = req.body.email;
   var username = req.body.email;
   var password = req.body.password;
   var password2 = req.body.password2;


   //Validation
    req.checkBody('name', 'Name is required').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        console.log('YES');
    } else{
        console.log('NO')
    }

});

module.exports = router;