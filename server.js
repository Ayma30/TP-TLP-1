const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Configuración de la conexión a la base de datos
const db = require('./conexion'); // Asegúrate de que la ruta sea correcta


app.use(express.json())
const usuarioRutas =require('./src/routes/rutasUsuarios')
const tareasRutas=require("./src/routes/rutasTareas")
app.use('/api', usuarioRutas);
app.use('/api', tareasRutas);


// Lógica del servidor
app.get('/', (req, res) => {
  db.query('SELECT * FROM tabla', (error, results) => {
    if (error) {
      console.error('Error al obtener datos:', error);
      res.status(500).send('Error del servidor');
      return;
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
