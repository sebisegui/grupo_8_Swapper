var express = require('express');
var router = express.Router();
const fs = require('fs');

const userController ={
    register: (req,res) =>{
        res.render('register')
    },

    login: (req,res) =>{
        res.render('login')
    },

    mensajes: (req,res) =>{
        res.render('mensajes')
    },

}

module.exports = userController