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
        let productToEdit = listaProductosJS.find(producto => producto.id == req.params.id)
        res.render('edit-form', {producto:productToEdit})
    },
    store: (req,res) =>{
        let storeProduct ={
            id: listaProductosJS[listaProductosJS.length-1].id+1,
            nombre: req.body.nombre,
            imagen: req.body.imagen,
            zona: req.body.zona,
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            estado: req.body.estado
        }
        listaProductosJS.push(storeProduct);
        fs.writeFileSync(productsPath,JSON.stringify(listaProductosJS))
            res.redirect('/products/')
    },
    update: (req,res) =>{
        let idProducto = req.params.id;
        listaProductosJS.forEach(producto => {
            if(idProducto == producto.id){
                producto.nombre = req.body.nombre,
                producto.categoria = req.body.categoria,
                producto.descripcion = req.body.descripcion,
                producto.estado = req.body.estado,
                producto.precio = req.body.precio,
                producto.zona = req.body.zona,
                producto.imagen = req.body.imagen
            }});
            fs.writeFileSync(productsPath,JSON.stringify(listaProductosJS))
            res.redirect('/products/')
    },

    delete: (req,res) => { 
        let deleteId = req.params.id
        let newDataBase = listaProductosJS.filter(product => product.id != deleteId)
        let newDataBaseJS = JSON.stringify(newDataBase, null, " ");
        fs.writeFileSync(productsPath, newDataBaseJS);
        res.redirect('/products/')
    },
    register: (req,res) =>{
        res.render('register')
    },
    mensajes: (req,res) =>{
        res.render('mensajes')
    }
}

module.exports = userController