const express = require('express');
const bodyParser = require('body-parser')

// set up express app
const app = express();
const path = require('path');

//Setting up assets and static page
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'));
  })
}

//initialize routes
//body parser for requests wit body
app.use(bodyParser.json());
app.use('/api', require('./routes/api.js'));

//listen for requests
app.listen(process.env.PORT || 4000, () => {
  console.log('now listening for requests!');
})