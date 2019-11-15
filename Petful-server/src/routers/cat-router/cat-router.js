const express = require('express')
const xss = require('xss')
const jsonBodyParser = express.json()
const catArr = require('../../store/cat-store/cat-array')
const randomizer = require('../../randomizer/randomizer')
const Q = require('../../Qclass/Q')

const catRouter = express.Router()
const catQ = new Q()

let randomOrderCatArr = randomizer(catArr)

randomOrderCatArr.forEach(cat => catQ.enqueue(cat))


catRouter
  .route('/')
  .get((req, res, next) => {
    FirstCat = catQ.first.value
    res.status(200).json(FirstCat)
  })
  .delete((req, res, next) => {
    AdoptedCat = catQ.dequeue()
    catQ.enqueue(AdoptedCat)
    res.status(200).json(AdoptedCat)
  })

module.exports = catRouter