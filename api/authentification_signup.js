const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('./database.js');

router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await pool.query('SELECT * FROM utilisateurs WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(409).json({ message: 'L\'utilisateur existe déjà' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO utilisateurs (prenom, nom, email) VALUES (?, ?, ?)',
      [firstName, lastName, email]
    );

    const newUser = await pool.query('SELECT * FROM utilisateurs WHERE email = ?', [email]);
    await pool.query(
      'INSERT INTO connexions (utilisateur_id, nom_utilisateur, mot_de_passe) VALUES (?, ?, ?)',
      [newUser[0].id, email, hashedPassword]
    );

    return res.status(201).json({ message: 'Inscription réussie' });
  } catch (error) {
    console.error('Erreur lors de l\'inscription', error);
    return res.status(500).json({ message: 'Erreur lors de l\'inscription' });
  }
});

module.exports = router;
