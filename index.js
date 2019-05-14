const express = require('express');

// set up express app
const app = express();

//listen for requests
app.listen(process.env.port || 4000, () => {
  console.log('now listening for requests!');
})