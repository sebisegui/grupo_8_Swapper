var express = require('express');
var router = express.Router();
var siteController = require('../controllers/siteController');
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
router.get('/',siteController.login);

router.post('/', [
  check('email').isEmail().withMessage('Email invalido'),
  check('password').isLength({min: 8}).withMessage('La contraseña no es correcta')
] ,siteController.validationLogin)

//Logout
router.get('/logout',siteController.logout)

// LISTA PRODUCTOS

router.get('/products', siteController.index);

// FORMULARIO CARGA PRODUCTO

router.get('/products/create', siteController.cargaProduct);
router.post('/products/create', upload.any(), siteController.store)

// DETALLE DE PRODUCTO

router.get('/products/:id', siteController.detalleProduct);

// FORMULARIO EDIT PRODUCTO

router.get('/products/edit/:id', siteController.edit)
router.put('/products/edit/:id',upload.any(), siteController.update)

// ELIMINAR PRODUCTO

router.delete('/products/:id', siteController.delete)

// FORMULARIO REGISTRO

router.get('/register', siteController.register);

//Ruta por Multer para subir foto
router.post('/register',upload.any(), siteController.userStore)

//botones likes
router.post('/products/:id', siteController.likes)






module.exports = router;
