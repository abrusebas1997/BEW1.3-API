const express = require('express')

const Student = require('../models/student.js')

const router = express.Router(); // eslint-disable-line new-cap

// GET list of Students
// IF COMMENT OUT ALL THE REQ.USER YOU CAN TRY IT ON POST MAN
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

// Update a single student
router.post("/update/student", (req, res) => {
  console.log("updating student")
  console.log(req.body)
  Student.findOne({_id: req.body.id}).exec()
  .then(function(student){
    student.email = req.body.email || student.email;
    student.name = req.body.name || student.name;
      console.log(`${req.body.name} has been updated!`)
      res.json({'update': "success", 'student': student})
      return student.save();
  })
  .then(function(){
      // Save successful! Now redirect
      // res.json({`/${req.body.name}`});
  })
  .catch(function(err){
      // There was an error either finding the document or saving it.
      console.log(err);
  });
})

module.exports = router;
