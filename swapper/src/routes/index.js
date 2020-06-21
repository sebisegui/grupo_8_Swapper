var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
const app = require('../app');
const path = require ('path')
const multer = require ('multer');
const { route } = require('./users');
const session = require('express-session');
const { check, validationResult } = require('express-validator');



//Metodo para cargar archivos con MULTER (imagenes)
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
 });
 
 var upload = multer({ storage: storage });



// HOME LOGIN
router.get('/',userController.login);
router.post('/', [
  check('usuario_email').isEmail().withMessage('Email invalido'),
  check('password').isLength({min: 8}).withMessage('La contraseña es invalida')
] ,userController.validationLogin)

// LISTA PRODUCTOS

router.get('/products', userController.index);

// FORMULARIO CARGA PRODUCTO

router.get('/products/create', userController.cargaProduct);
router.post('/products/create', userController.store)

// DETALLE DE PRODUCTO

router.get('/products/:id', userController.detalleProduct);

// FORMULARIO EDIT PRODUCTO

router.get('/products/edit/:id', userController.edit)
router.put('/products/edit/:id', userController.update)

// ELIMINAR PRODUCTO

router.delete('/products/:id', userController.delete)

// FORMULARIO REGISTRO

router.get('/register', userController.register);

//Ruta por Multer para subir foto
router.post('/register',upload.any(), userController.userStore)


// SECCION MENSAJES

router.get('/mensajes',userController.mensajes)



module.exports = router;
