const express = require('express')
const app = express()

const cors = require('cors')

app.use(express.json());

app.use(cors());

const port = 9000;

module.exports = app;

require('./shapes/shapesController');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});