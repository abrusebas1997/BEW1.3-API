const express = require('express')

const Student = require('../models/student.js')

const router = express.Router(); // eslint-disable-line new-cap

// GET list of Students
router.get('/', (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    Student.find().then(result => {
      res.json(result);
    })
  }
})

// GET specific student
router.get('/:id', (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    Dog.findOne({_id: req.params.id}).then(result => {
      res.json(result);
    })
  }
})

// POST new student.
router.post('/', (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    const student = new Student(req.body)
    dog.save().then(result => {
      res.json(result)
    })
  }
})

// Delete a single student
router.delete("/delete/:name", (req, res) => {
  Component.findOneAndRemove({name : req.params.name}, (err,Component) => {
    res.json(result)
  });
})

// TODO: Add more routes.


module.exports = router;
