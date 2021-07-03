const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Hello World!!');
})
