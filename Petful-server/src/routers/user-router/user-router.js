const express = require('express');
const jsonParser = express.json();
const userArr = require('../../store/user-store/user-array');
const randomizer = require('../../randomizer/randomizer');
const Q = require('../../Qclass/Q');

const userRouter = express.Router();
const userQ = new Q();

let randomOrderUserArr = randomizer(userArr);

randomOrderUserArr.forEach(user => userQ.enqueue(user));

//exported for use in all-users-router
function allUsersArr(){
  return randomOrderUsersArr;
}
userRouter
  .route('/')
  .get((req, res, next) => {
    let FirstUser = userQ.first.value;
    res.status(200).json(FirstUser);
  })
  //removing first user from queue and sending to back of queue
  .delete((req, res, next) => {
    let RemovedUser = userQ.dequeue();
    userQ.enqueue(RemovedUser);
    res.status(200).json(RemovedUser);
  })
  //placing new adopter in queue
  .post(jsonParser, (req, res) => {
    if(!req.body.full_name){
      res.status(400).json('Name must be included in body')
    }
    const { full_name } = req.body;
    console.log(full_name);

    userQ.enqueue(full_name);
    userArr.push(full_name);
    return res.status(201).json(full_name);
  });



module.exports = userRouter;
module.exports.allUsersArr = allUsersArr;

