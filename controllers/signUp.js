/**
 * Created by bey on 28/11/16.
 */
var express = require('express');
var router = express.Router();

//var userManager = require('user-manager');
//var validator = require('validator');
var Users = require('../models/Users');



router.post('/signUp', function (req, res) {
    if(typeof req.body.email != 'undefined'){
        var email = req.body.email;
        var password = req.body.password;
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var birthday = req.body.birthday;
        var gender = req.body.gender;

        var newuser = new Users();
        newuser.email = email;
        newuser.password = password;
        newuser.firstName = firstName;
        newuser.lastName = lastName;
        newuser.birthday = birthday;
        newuser.gender = gender;

        newuser.save(function (err,saveduser) {
            if(err){
                console.log(err);
                return res.status.send();
            }
            return res.status(200).send();
        });
    }else{
        res.status(200).json({error: {"code": 100,"message": "missing parametre: required parametres ( email( mail format ), deviceID )."}, instatus: 2160, success : '0'});
    }
});



module.exports = router;
