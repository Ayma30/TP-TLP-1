const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'ayma'
});

db.connect(async (error) => {
  if (error) {
    console.error('Error al conectar al servidor de base de datos:', error);
    return;
  }

  try {
    await db.promise().query('CREATE DATABASE IF NOT EXISTS tu_base_de_datos');
    console.log('Base de datos creada o verificada');
    db.changeUser({ database: 'tu_base_de_datos' });

    // Crear la tabla de usuarios si no existe
    const createUsuariosTableQuery = `
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre_usuario VARCHAR(255) NOT NULL,
        correo_electronico VARCHAR(255) NOT NULL
      )
    `;
    await db.promise().query(createUsuariosTableQuery);

    // Crear la tabla de tareas si no existe
  const createTareasTableQuery = `
  CREATE TABLE IF NOT EXISTS tareas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
  )
`;
await db.promise().query(createTareasTableQuery);
console.log('Tabla de tareas creada o verificada');
  } catch (createError) {
    console.error('Error al crear o verificar la base de datos o la tabla:', createError);
  }
});

module.exports = db;
