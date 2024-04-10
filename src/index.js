import app from './app.js'
import mysql from 'mysql';

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

    // Iniciar el servidor una vez que la conexión a la base de datos esté establecida
    app.listen(3000, () => {
        console.log('Server on port', 3000);
    });
});