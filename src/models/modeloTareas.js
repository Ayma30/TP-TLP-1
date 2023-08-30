// models/tareaModel.js
const db = require('../../conexion');

module.exports = {
    crearTarea: (idUsuario, titulo, descripcion, callback) => {
        const sql = 'INSERT INTO tareas (id_usuario, titulo, descripcion) VALUES (?, ?, ?)';
        db.query(sql, [idUsuario, titulo, descripcion], (error, result) => {
          if (error) throw error;
          callback(result.insertId);
        });
      },
  obtenerTareasPorUsuario: (idUsuario, callback) => {
    const sql = 'SELECT * FROM tareas WHERE id_usuario = ?';
    db.query(sql, [idUsuario], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  },

  obtenerTareaPorId: (idTarea, callback) => {
    const sql = 'SELECT * FROM tareas WHERE id = ?';
    db.query(sql, [idTarea], (error, results) => {
      if (error) throw error;
      callback(results[0]);
    });
  },

  actualizarTarea: (idTarea, titulo, descripcion, callback) => {
    const sql = 'UPDATE tareas SET titulo = ?, descripcion = ? WHERE id = ?';
    db.query(sql, [titulo, descripcion, idTarea], (error, result) => {
      if (error) throw error;
      callback();
    });
  },

  eliminarTarea: (idTarea, callback) => {
    const sql = 'DELETE FROM tareas WHERE id = ?';
    db.query(sql, [idTarea], (error, result) => {
      if (error) throw error;
      callback();
    });
  }
};
