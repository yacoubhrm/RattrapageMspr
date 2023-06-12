const mysql = require('mysql');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'azer',
  password: '7rRlNuFHNoD5gj.A', 
  database: 'mspr3'
});

module.exports = pool;
