const express = require('express');
const mysql = require('mysql2');
const path = require("path");
const bodyParser = require('body-parser');
const db = require('./db/conn.js')

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


const hbs = require("hbs");

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.static(static_path));

// Serve Static Files
app.use(express.static('public')); // Assuming HTML and CSS files are in the 'public' folder

// Sign Up Route (To Handle Form Submission)
app.get('/', (req, resp) => {
    resp.render("home");
});

app.get('/signup', (req, resp) => {
    resp.render("signup");
});

app.get('/login', (req, resp) => {
    resp.render("login");
});

app.post('/signup', (req, res) => {
    const { name, address, sex, contact_number,password } = req.body;

    const sql = 'INSERT INTO users (name, address, sex, contact_number,password) VALUES (?, ?, ?, ?,?)';
    db.query(sql, [name, address, sex, contact_number,password ], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Error creating user');
        } else {
            console.log('User registered:', result);
            res.send('User successfully registered!');
        }
    });
});

// Login Route
app.post('/login', (req, resp) => {
    const name = req.body.name;
    const userPass = req.body.password;

    const sql = 'SELECT * FROM users WHERE name = ?';
    db.query(sql, [name], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return resp.status(500).send('Server error');
        }

        if (results.length > 0) {
            const user = results[0];

            // Compare entered password with stored password
            if (userPass === user.password) {
                resp.render('home'); // Redirect on successful login
            } else {
                resp.render('login', { errorMessage: 'Authentication failed! Incorrect password.' });
            }
        } else {
            resp.render('login', { errorMessage: 'Auth entication failed! Incorrect Username.' });
        }
    });
});



// Start the Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
