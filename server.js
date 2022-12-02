const express = require('express');
const mysql = require('mysql');

const app = express();

const PORT = 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '289Vrhep',
  database: 'ch07Saleco',
});

connection.connect();

app.get('/query', (req, res) => {
  let hasError = false;
  connection.query('SELECT * FROM Vendor', (err, rows, fields) => {
    if (err) {
      hasError = true;
      return;
    }
    console.log('rows', rows);
    console.log('fields', fields);
  });
  if (hasError) res.sendStatus(500);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
