const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('./database.js');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query('SELECT * FROM connexions WHERE nom_utilisateur = ?', [email]);
    if (user.length === 0) {
      return res.status(401).json({ message: 'Adresse e-mail incorrecte' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user[0].mot_de_passe);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    return res.status(200).json({ message: 'Authentification réussie' });
  } catch (error) {
    console.error('Erreur lors de l\'authentification', error);
    return res.status(500).json({ message: 'Erreur lors de l\'authentification' });
  }
});

module.exports = router;
