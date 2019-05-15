const express = require('express');

// set up express app
const app = express();

//initialize routes
app.use('/api', require('./routes/api.js'));

//listen for requests
app.listen(process.env.port || 4000, () => {
  console.log('now listening for requests!');
})