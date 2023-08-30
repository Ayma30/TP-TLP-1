// models/usuarioModel.js
const db = require('../../conexion')

module.exports = {
  crearUsuario: (nombreUsuario, correoElectronico, callback) => {
    const sql = 'INSERT INTO usuarios (nombre_usuario, correo_electronico) VALUES (?, ?)';
    db.query(sql, [nombreUsuario, correoElectronico], (error, result) => {
      if (error) throw error;
      callback(result.insertId);
    });
  },

  obtenerUsuarios: (callback) => {
    const sql = 'SELECT * FROM usuarios';
    db.query(sql, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
};
