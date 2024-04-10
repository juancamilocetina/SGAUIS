// Importar el paquete mysql
const mysql = require('mysql');

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'bxjwmqfma3xbaji1je9l-mysql.services.clever-cloud.com', // El host de tu servidor MySQL
    user: 'u0c2xm30ze4iljyc', // Tu nombre de usuario de MySQL
    password: 'FhNilBcpswCcautrktNV', // Tu contraseña de MySQL
    database: 'bxjwmqfma3xbaji1je9l' // El nombre de tu base de datos
});

// Conectar a la base de datos MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');

    connection.query('SELECT 1 + 1 AS resultado', (error, results, fields) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            return;
        }
        console.log('Resultado de la consulta:', results[0].resultado);
    });
});

// Realizar consultas o manipular la base de datos aquí

//Cerrar la conexión a la base de datos MySQL cuando hayas terminado
//connection.end();
