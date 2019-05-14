const express = require('express');
const routes = require('./routes/api.js');

// set up express app
const app = express();

app.use(routes);

//listen for requests
app.listen(process.env.port || 4000, () => {
  console.log('now listening for requests!');
})