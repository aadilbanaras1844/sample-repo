var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const { restart } = require('nodemon');
const userModel = require('./../models/clients');
const Joi = require('joi');


// const connection = mongoose.createConnection('mongodb://localhost:27017/sample-app');
mongoose.connect('mongodb://localhost:27017/myapp');


/* GET home page. */

const data = [
  {
    "isCitizen": true,
    "Name": "John Smith",
    "EIDA": 123456,
    "Children": {
      "Mike Smith": 123457,
      "Jessica Smith": 123458,
      "Sarah Smith": 123459
    },
    "hasDrivingLicense": true
  },
  {
    "isCitizen": false,
    "Name": "Michael Tall",
    "EIDA": 123461,
    "Children": {
    },
    "hasDrivingLicense": false
  },
  {
    "isCitizen": false,
    "Name": "Joe Bloggs",
    "EIDA": 123462,
    "Children": {
      "Sarah Bloggs": 123463
    },
    "hasDrivingLicense": true
  }
  
]

// data.forEach(obj => {
//   userModel.create({
//     ...obj,
//     totalChildrens: Object.keys(obj.Children)
//   })
// });

const apiSchema = Joi.object({
  isCitizen: Joi.boolean(),
  Name: Joi.string(),
  totalChildrens: Joi.number(),
  hasDrivingLicense: Joi.boolean(),
  EIDA: Joi.number(),
});

router.get('/', async(req, res, next) => {
  const query = req.query;
  const {error, value} = apiSchema.validate(query);
  if(error) {
    return res.status(401).json({error: error, msg: 'invalid params'})
  }
  if(query.Name) {
    query.Name = { $regex: query.Name };
    // {Name: {$regex: 'John'}}
  }
  const users = await userModel.find(query)
  return res.json(users);
});

module.exports = router;
