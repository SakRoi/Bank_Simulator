const express = require('express');
const router = express.Router();
const cards = requure("../models/cards_model");

router.get('cards/',
function(request, response) {
  cards.getAll(function (err, dbResult) {
    if (err) {
        response.json(err);
    } else {
        console.log(dbResult);
        response.json(dbResult);
    }
  });
});

router.get('cards/:id',
function(request, response) {
})

module.exports = router;
