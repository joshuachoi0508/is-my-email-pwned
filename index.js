const express = require('express');
const bodyParser = require('body-parser')

// set up express app
const app = express();
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/public'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'));
  })
}

//initialize routes
app.use(bodyParser.json());
app.use('/api', require('./routes/api.js'));

//listen for requests
app.listen(process.env.PORT || 4000, () => {
  console.log('now listening for requests!');
})