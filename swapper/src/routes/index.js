var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
const app = require('../app');
const path = require ('path')
const multer = require ('multer');
const { route } = require('./users');
const session = require('express-session');
const { check, validationResult, body } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');



//Metodo para cargar archivos con MULTER (imagenes)
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
 });
 
 var upload = multer({ storage: storage });



// HOME LOGIN
router.get('/',userController.login);

router.post('/', [
  check('email').isEmail().withMessage('Email invalido'),
  check('contraseña').isLength({min: 8}).withMessage('La contraseña no es correcta')
] ,userController.validationLogin)

//Logout
router.get('/logout',userController.logout)

// LISTA PRODUCTOS

router.get('/products', userController.index);

// FORMULARIO CARGA PRODUCTO

router.get('/products/create', userController.cargaProduct);
router.post('/products/create', upload.any(), userController.store)

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






module.exports = router;
