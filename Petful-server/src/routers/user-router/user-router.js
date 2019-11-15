const express = require('express')
const xss = require('xss')
const jsonBodyParser = express.json()
const userArr = require('../../store/user-store/user-array')
const randomizer = require('../../randomizer/randomizer')
const Q = require('../../Qclass/Q')

const userRouter = express.Router()
const userQ = new Q()

let randomOrderUserArr = randomizer(userArr)

randomOrderUserArr.forEach(user => userQ.enqueue(user))

//exported for use in all-users-router
function allUsersArr(){
  return randomOrderUsersArr
}

userRouter
  .route('/')
  .get((req, res, next) => {
    FirstUser = userQ.first.value
    res.status(200).json(FirstUser)
  })  
    .delete((req, res, next) => {
    RemovedUser = userQ.dequeue()
    userQ.enqueue(RemovedUser)
    res.status(200).json(RemovedUser)
    console.log(userQ) 
  })

  .post(jsonBodyParser, (req, res, next) => {
    if(!req.body.name){
      res.status(400).json('Name not included in body')
    }
    let newUser = xss(req.body.name)
    usersArr.push(newUser)
    return res.status(201).json(newUser)
  })

  module.exports = userRouter;
  module.exports.allUsersArr = allUsersArr;

