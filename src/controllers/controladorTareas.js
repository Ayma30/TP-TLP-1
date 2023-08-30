// controllers/tareaController.js
const Tarea = require('../models/modeloTareas');

module.exports = {
  crearTarea: (req, res) => {
    const idUsuario = req.params.idUsuario;
    const { titulo, descripcion } = req.body;
    Tarea.crearTarea(idUsuario, titulo, descripcion, (idTarea) => {
        res.json({ idTarea });
      });
  },

  obtenerTareasPorUsuario: (req, res) => {
    const { idUsuario } = req.params;
    Tarea.obtenerTareasPorUsuario(idUsuario, (tareas) => {
      res.json(tareas);
    });
  },

  obtenerTarea: (req, res) => {
    const { idTarea } = req.params;
    Tarea.obtenerTareaPorId(idTarea, (tarea) => {
      res.json(tarea);
    });
  },

  actualizarTarea: (req, res) => {
    const { idTarea } = req.params;
    const { titulo, descripcion } = req.body;
    Tarea.actualizarTarea(idTarea, titulo, descripcion, () => {
      res.json({ mensaje: 'Tarea actualizada correctamente' });
    });
  },

  eliminarTarea: (req, res) => {
    const { idTarea } = req.params;
    Tarea.eliminarTarea(idTarea, () => {
      res.json({ mensaje: 'Tarea eliminada correctamente' });
    });
  }
};
