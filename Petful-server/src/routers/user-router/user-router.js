const express = require('express')
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
  return res.status(201).send(`${RemovedUser} removed from the queue.`)
})  
.post(jsonBodyParser, (req, res, next) => {
  let { full_name } = req.body;
  // console.log(req)
  // console.log(req.body)
  // console.log(req.body.full_name)
  // console.log({ full_name })
  // console.log(full_name)
  if(!full_name) {
    return res.status(400)
      .json({
        error: {message: 'Missing name in request body'}
      });
  }
  // console.log(JSON.stringify(userQ.toArr(userQ)))
  // userQ.enqueue(full_name);
  // console.log(JSON.stringify(userQ))
  res.status(201).send(`${full_name} added to the queue`);
})





// userRouter
//   .route('/')
//   .get((req, res, next) => {
//     FirstUser = userQ.first.value
//     res.status(200).json(FirstUser)
//   })  
//   .delete((req, res, next) => {
//     RemovedUser = userQ.dequeue()
//     userQ.enqueue(RemovedUser)
//     res.status(200).json(RemovedUser)
//     return res.status(201).send(`${RemovedUser} removed from the queue.`)
//   })

//   .post(jsonBodyParser, (req, res, next) => {
//     console.log(JSON.stringify(req.body.full_name))
//     let userName = JSON.stringify(req.body.full_name)
//     if(!userName){
//       return res.status(400)
//         .json({
//           error: {message: 'Name not included in body'}
//         })
//     }
//     userQ.enqueue(userName)
//     //console.log(userName)
//     return res.status(201).send(`${userName} added to the queue.`)
//   })



  // .post(jsonBodyParser, (req, res, next) => {
  //   if(!req.body.name){
  //     res.status(400).json('Name not included in body')
  //   }
  //   let newUser = xss(req.body.name)
  //   usersArr.push(newUser)
  //   return res.status(201).json(newUser)
  // })


  module.exports = userRouter;
  module.exports.allUsersArr = allUsersArr;

