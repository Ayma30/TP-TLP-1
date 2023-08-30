// controllers/usuarioController.js
const Usuario = require("../models/modeloUsuario");

module.exports = {
  crearUsuario: (req, res) => {
    const { nombreUsuario, correoElectronico } = req.body;
    Usuario.crearUsuario(nombreUsuario, correoElectronico, (idUsuario) => {
      res.json({ idUsuario });
    });
  },

  obtenerUsuarios: (req, res) => {
    Usuario.obtenerUsuarios((usuarios) => {
      res.json(usuarios);
    });
  },
};
