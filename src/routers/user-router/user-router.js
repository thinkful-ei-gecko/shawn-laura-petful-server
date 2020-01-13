const express = require('express');
const jsonParser = express.json();
const userArr = require('../../store/user-store/user-array');
//const randomizer = require('../../randomizer/randomizer');
const Q = require('../../Qclass/Q');

const userRouter = express.Router();

//let randomOrderUserArr = randomizer(userArr);
//randomOrderUserArr.forEach(user => userQ.enqueue(user));
//exported for use in all-users-router
//function allUsersArr(){  return randomOrderUsersArr;}

const userQ = new Q();
userArr.forEach(user => userQ.enqueue(user));

userRouter
  .route('/')
  .get((req, res, next) => {
    let adopters = userQ.toArr();
    res.status(200).json(adopters);
  })
  //remove first user from queue and send to back of queue
  .patch((req, res, next) => {
    let recycledUser = userQ.dequeue();
    userQ.enqueue(recycledUser);
    let updatedAdopters = userQ.toArr();
    res.status(200).json(updatedAdopters);
  })
  //remove user from queue
  .delete((req, res, next) => {
    let deletedUser = userQ.dequeue();
    let updatedAdopters = userQ.toArr();
    let responseData = [deletedUser, updatedAdopters];
    res.status(200).json(responseData);
  })
  //place new adopter in queue
  .post(jsonParser, (req, res) => {
    if(!req.body.full_name){
      res.status(400).json('Name must be included in body');
    }
    const { full_name } = req.body;
    userQ.enqueue(full_name);
    //userArr.push(full_name);
    return res.status(201).json(full_name);
  });

module.exports = userRouter;
//module.exports.allUsersArr = allUsersArr;

