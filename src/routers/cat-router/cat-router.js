const express = require('express');
//const xss = require('xss');
//const jsonBodyParser = express.json();
//const randomizer = require('../../randomizer/randomizer')

const catArr = require('../../store/cat-store/cat-array');
const Q = require('../../Qclass/Q');

const catRouter = express.Router();

//let randomOrderCatArr = randomizer(catArr);
//randomOrderCatArr.forEach(cat => catQ.enqueue(cat));

const catQ = new Q();
catArr.forEach(cat => catQ.enqueue(cat));

catRouter
  .route('/')
  .get((req, res, next) => {
    let firstCat = catQ.first.value;
    res.status(200).json(firstCat);
  })
  .delete((req, res, next) => {
    let adoptedCat = catQ.dequeue();
    let nextCat = catQ.first.value;
    catQ.enqueue(adoptedCat); // as if new animals were coming into shelter
    res.status(200).json(nextCat);
  });

module.exports = catRouter;