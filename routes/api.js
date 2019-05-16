const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

router.post('/pwned', (req, res) => {
  console.log("heyo")
  const url = "https://haveibeenpwned.com/api/breachedaccount/";
  fetch(url + req.body)
    .then(response => res.json({ msg: JSON.parse(response) }))
})

module.exports = router;