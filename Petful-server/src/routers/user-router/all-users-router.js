const express = require('express')
const xss = require('xss')
const jsonBodyParser = express.json()

//const userRouter = require('./user-router')
const allUsersArr = require('./user-router')

const allUsersRouter = express.Router()


//NOT FUNCTIONING
allUsersRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(allUsersArr)
    
  })

  module.exports = allUsersRouter
