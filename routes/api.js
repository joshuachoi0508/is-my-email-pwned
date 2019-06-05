const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

router.post('/pwned', (req, res) => {
  const url = "https://haveibeenpwned.com/api/breachedaccount/";
  fetch(url + req.body.email)
    .then(response => (response.json()))
    .then(result => res.json(result))
    .catch(error => res.json(error));
})

module.exports = router;