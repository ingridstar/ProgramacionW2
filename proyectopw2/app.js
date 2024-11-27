const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express(); // Define 'app' antes de usarla

app.use(express.static('public')); // Configuración de archivos estáticos
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

// Configuración de MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amayranee3st02',
    database: 'node_crud',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Error al conectarse a la BD:', err);
    } else {
        console.log('Conectada a la BD de MySQL');
    }
});

const port = 3009;
app.listen(port, () => {
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});
// Muestra la página "enviado"
app.get('/enviado', (req, res) => {
    res.render('enviado'); // Nos dirige a enviado.ejs
});

// Muestrar la página "editado"
app.get('/editado', (req, res) => {
    res.render('editado'); // Nos dirige a editado.ejs
});

// Ruta para la lista de usuarios
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al recuperar articulos:', err);
            res.send('Error');
        } else {
            res.render('index', { users: results });
        }
    });
});

//Agregas articulos
app.post('/add', (req, res) => {
    const { name, account_number, career, email } = req.body;
    const query = 'INSERT INTO users (name, account_number, career, email) VALUES (?, ?, ?, ?)';
    db.query(query, [name, account_number, career, email], (err) => {
        if (err) {
            console.error('Error al añadir articulos:', err);
            res.send('Error');
        } else {
            res.redirect('enviado');
        }
    });
});

//Nos muestrar el formulario de edición del articulo
app.get('/edit/:account_number', (req, res) => {
    const { account_number } = req.params;
    const query = 'SELECT * FROM users WHERE account_number = ?';
    db.query(query, [account_number], (err, results) => {
        if (err) {
            console.error('Error al recuperar el articulo:', err);
            res.send('Error');
        } else if (results.length === 0) {
            res.send('No se encontró un articulo con ese número de piezas');
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

// Sirve para actualizar un articulo (método POST)
app.post('/edit/:account_number', (req, res) => {
    const { account_number } = req.params;
    const { name, email, career } = req.body;
    const query = 'UPDATE users SET name = ?, email = ?, career = ? WHERE account_number = ?';

    db.query(query, [name, email, career, account_number], (err) => {
        if (err) {
            console.error('Error al actualizar articulo:', err);
            res.send('Error');
        } else {
            res.redirect('/editado'); // Nos envia a la página de confirmacion de la edicion
        }
    });
});


// Muestra la tabla en una página separada
app.get('/table', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al recuperar el articulo:', err);
            res.send('Error');
        } else {
            res.render('table', { users: results });
        }
    });
});

// Sirve para eliminar usuario
app.get('/delete/:account_number', (req, res) => {
    const { account_number } = req.params; // Se usa account_number para referenciar
    const query = 'DELETE FROM users WHERE account_number = ?';
    db.query(query, [account_number], (err) => {
        if (err) {
            console.error('Error al eliminar articulo:', err);
            res.send('Error');
        } else {
            res.redirect('/table'); // Nos manda a la tabla después de la opcion de eliminar
        }
    });
});
