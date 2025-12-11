const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const bookRoutes = require('./routes/books.routes');

app.use('/', bookRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Book Menu Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});