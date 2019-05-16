const express = require('express');

// set up express app
const app = express();
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

//initialize routes
app.use('/api', require('./routes/api.js'));

//listen for requests
app.listen(process.env.port || 4000, () => {
  console.log('now listening for requests!');
})