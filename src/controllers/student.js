const express = require('express')

const Student = require('../models/student.js')

const router = express.Router(); // eslint-disable-line new-cap

// GET list of Students
router.get('/', (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    Student.find().then(student => {
      res.json(student);
    })
  }
})

// GET specific student
router.get('/:name', (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    Student.findOne({name: req.params.name}).then(student => {
      res.json(student);
    })
  }
})

// POST new student.
router.post('/add/student', (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    const student = new Student(req.body)
    student.save().then(student => {
      res.json(student)
    })
  }
})

// Delete a single student
router.delete("/delete/:name", (req, res) => {
  Student.findOneAndRemove({name : req.params.name}, (err, Student) => {
    res.json(student)
  });
})

// TODO: Add more routes.


module.exports = router;
