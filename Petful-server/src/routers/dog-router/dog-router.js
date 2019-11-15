const express = require('express')
const xss = require('xss')
const jsonBodyParser = express.json()
const dogArr = require('../../store/dog-store/dog-array')
const randomizer = require('../../randomizer/randomizer')
const Q = require('../../Qclass/Q')

const dogRouter = express.Router()
const dogQ = new Q()

let randomOrderDogArr = randomizer(dogArr)

randomOrderDogArr.forEach(dog => dogQ.enqueue(dog))

dogRouter
  .route('/')
  .get((req, res, next) => {
    FirstDog = dogQ.first.value
    res.status(200).json(FirstDog)
  })
  .delete((req, res, next) => {
    AdoptedDog = dogQ.dequeue()
    dogQ.enqueue(AdoptedDog)
    res.status(200).json(AdoptedDog)
  })

module.exports = dogRouter