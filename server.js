const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { Pool } = require('pg');


const pool = new Pool({
  connectionString: 'postgresql://root:pMqVkNALNWiuQEyZHPcmQTneN81Cll9x@dpg-d1gr456mcj7s73d58lf0-a.oregon-postgres.render.com/portofolio_abes',
  ssl: { rejectUnauthorized: false }
});


const app = express();
const port = 3000;

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
   port: process.env.PG_PORT || 5432,
  ssl: {
    rejectUnauthorized: false, // Important sur Render
  },
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname)); // Sert à la racine

app.post('/contact', async (req, res) => {
  const { name, _replyto, message } = req.body;
  console.log("Reçu :", req.body);

  try {
    await pool.query(
      'INSERT INTO messages (nom, email, message) VALUES ($1, $2, $3)',
      [name, _replyto, message]
    );
    res.send('<p style="color:green;">Message enregistré dans PostgreSQL !</p><a href="/">Retour</a>');
  } catch (err) {
    console.error("Erreur BDD :", err);
    res.status(500).send("Erreur lors de l'enregistrement.");
  }
});

app.listen(port, () => {
  console.log(`Serveur actif sur http://localhost:${port}`);
});
