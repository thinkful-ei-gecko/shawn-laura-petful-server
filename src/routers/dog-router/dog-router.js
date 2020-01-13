const express = require('express');
//const xss = require('xss');
//const jsonBodyParser = express.json();
//const randomizer = require('../../randomizer/randomizer');

const dogArr = require('../../store/dog-store/dog-array');
const Q = require('../../Qclass/Q');

const dogRouter = express.Router();

// let randomOrderDogArr = randomizer(dogArr);
//randomOrderDogArr.forEach(dog => dogQ.enqueue(dog));

const dogQ = new Q();
dogArr.forEach(dog => dogQ.enqueue(dog));

dogRouter
  .route('/')
  .get((req, res, next) => {
    let firstDog = dogQ.first.value;
    res.status(200).json(firstDog);
  })
  .delete((req, res, next) => {
    let adoptedDog = dogQ.dequeue();
    let nextDog = dogQ.first.value;
    dogQ.enqueue(adoptedDog); // simulate new animals coming into the shelter
    res.status(200).json(nextDog);
  });

module.exports = dogRouter;