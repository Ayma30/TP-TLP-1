// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/controladorUsuario');

router.post('/usuarios', usuarioController.crearUsuario);
router.get('/usuarios', usuarioController.obtenerUsuarios);

module.exports = router;
