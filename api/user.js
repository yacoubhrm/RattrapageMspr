const express = require('express');
const router = express.Router();
const pool = require('./database.js');

router.get('/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const userQuery = 'SELECT * FROM utilisateurs WHERE id = ?';
    const userResult = await pool.query(userQuery, [userId]);

    if (userResult.length === 0) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const connQuery = 'SELECT * FROM connexions WHERE utilisateur_id = ?';
    const connResult = await pool.query(connQuery, [userId]);

    const user = {
      id: userResult[0].id,
      prenom: userResult[0].prenom,
      nom: userResult[0].nom,
      email: userResult[0].email,
      autres_champs: userResult[0].autres_champs,
      nom_utilisateur: connResult[0].nom_utilisateur
    };

    res.json(user);
  } catch (error) {
    console.error('Erreur lors de la récupération des informations utilisateur', error);
    return res.status(500).json({ message: 'Erreur lors de la récupération des informations utilisateur' });
  }
});

module.exports = router;