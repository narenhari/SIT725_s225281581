const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = 3004;

mongoose.connect('mongodb://localhost:27017/bookDB', {
  });
  
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  const app = express();

  app.get('/ping', (_req, res) => { 
  console.log('[HIT] /ping handler');
  res.send('pong');
});
  app.use((req,res,next)=>{ console.log(`[REQ] ${req.method} ${req.url}`); next(); });

  app.use(express.static(__dirname + '/public'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

const bookRoutes = require('./routes/books.routes');

app.use('/api/books', bookRoutes);
app.get('/api/_integrity-check', (_req, res) => res.sendStatus(204));

app.get('/', (_req, res) => res.send('Welcome to the Book Menu Home Page!'));

app.use((req, res) => res.status(404).json({ message: 'Not found' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

console.log('[BOOT] about to listen');
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));