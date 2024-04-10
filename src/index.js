import express from 'express';
import app from './app.js';
import mysql from 'mysql';
import path from 'path';


    // Configuración de la conexión a la base de datos MySQL
    const connection = mysql.createConnection({
        host: 'bxjwmqfma3xbaji1je9l-mysql.services.clever-cloud.com', // El host de tu servidor MySQL
        user: 'u0c2xm30ze4iljyc', // Tu nombre de usuario de MySQL
        password: 'FhNilBcpswCcautrktNV', // Tu contraseña de MySQL
        database: 'bxjwmqfma3xbaji1je9l'
    });

    // Conectar a la base de datos MySQL
    connection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            return;
        }
        console.log('Conexión exitosa a la base de datos MySQL');

    // Ruta para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    // Consulta SQL para seleccionar todos los usuarios
    const sql = 'SELECT * FROM Usuarios';

    // Ejecutar la consulta
    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }

        // Enviar los resultados como respuesta
        res.json(results);
    });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


    // Ruta para servir la página de inicio de sesión estática
    app.get('/', (req, res) => {
        res.sendFile(path.join(process.cwd(), 'src/login.html'));
    });


    // Ruta para el inicio de sesión
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Consulta SQL para verificar las credenciales del usuario
    const sql = 'SELECT * FROM Usuarios WHERE correo = ? AND contraseña = ?';
    connection.query(sql, [email, password], (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        if (results.length === 0) {
            res.status(401).json({ error: 'Correo electrónico o contraseña incorrectos' });
            return;
        }
        // Usuario autenticado
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
    });
});

    // Iniciar el servidor una vez que la conexión a la base de datos esté establecida
    app.listen(3000, () => {
        console.log('Server on port', 3000);
    });

    
});