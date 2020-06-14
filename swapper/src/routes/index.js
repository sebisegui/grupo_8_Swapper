var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')


// HOME LOGIN
router.get('/',userController.login);

// LISTA PRODUCTOS

router.get('/products', userController.index);

// FORMULARIO CARGA PRODUCTO

router.get('/products/create', userController.cargaProduct);
router.post('/products/create', userController.storeNew)

// DETALLE DE PRODUCTO

router.get('/products/:id', userController.detalleProduct);

// FORMULARIO EDIT PRODUCTO

router.get('/products/:id/edit', userController.edit)
router.put('/products/:id', userController.update)

// ELIMINAR PRODUCTO

router.delete('/products/:id', userController.delete)

// FORMULARIO REGISTRO

router.get('/register',userController.register);

// SECCION MENSAJES

router.get('/mensajes',userController.mensajes);



module.exports = router;
