// REQUIRES
var express = require('express');
var router = express.Router();
const path = require ('path')
const fs = require('fs');


//ACCESO A DATA BASE
const usersPath = path.join(__dirname, '../database/usersDataBase.json')
const productsPath = path.join(__dirname, '../database/productsDataBase.json')
const listaUsuarios = fs.readFileSync(usersPath)
const listaProductos = fs.readFileSync(productsPath)

// VARIABLES A UTILIZAR 
let listaUsuariosJS = JSON.parse(listaUsuarios)
let listaProductosJS = JSON.parse(listaProductos)

// CONTROLLER
const userController ={  
    login: (req,res) =>{
        res.render('login')
    },
    index: (req, res) =>{
        res.render('index', {listaProductosJS})
    },
    detalleProduct: (req,res) =>{
        let producto = listaProductosJS.find(producto => producto.id == req.params.id)
        res.render('detalle', {producto: producto})
    },
    cargaProduct: (req, res) =>{
        res.render('formulario-carga')
    },
    edit: (req,res) =>{
        let productToEdit = listaProductosJS.find(product => producto.id == req.params.id)
        res.render('edit-form', {productToEdit})
    },
    storeNew: (req,res) =>{
        res.render('index')
    },
    update: (req,res) =>{
        res.render('index')
    },
    delete: (req,res) => { 
        let deleteId = req.params.id
        let newDataBase = listaProductosJS.filter(product => product.id != deleteId)
        let newDataBaseJS = JSON.stringify(newDataBase, null, " ");
        fs.writeFileSync(productsPath, newDataBaseJS);
        res.render('index')
    },
    register: (req,res) =>{
        res.render('register')
    },
    mensajes: (req,res) =>{
        res.render('mensajes')
    }
}

module.exports = userController