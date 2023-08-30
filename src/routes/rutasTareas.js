// routes/tareaRoutes.js
const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/controladorTareas');

router.post('/usuarios/:idUsuario/tareas', tareaController.crearTarea);
router.get('/usuarios/:idUsuario/tareas', tareaController.obtenerTareasPorUsuario);
router.get('/tareas/:idTarea', tareaController.obtenerTarea);
router.put('/tareas/:idTarea', tareaController.actualizarTarea);
router.delete('/tareas/:idTarea', tareaController.eliminarTarea);

module.exports = router;
