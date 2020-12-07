const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const app = express();

app.use(express.json());

app.get('/styles.css', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../styles.css'));
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});



// Make sure my server is listening on the correct port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
