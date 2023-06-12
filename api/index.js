const express = require('express');
const app = express();

const authentificationLoginRoutes = require('./authentification_login');
const authentificationSignupRoutes = require('./authentification_signup');

app.use('/api/login', authentificationLoginRoutes);
app.use('/api/signup', authentificationSignupRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
