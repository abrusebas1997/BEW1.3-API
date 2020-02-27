const express = require('express')

const Student = require('../models/student.js')

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/Student
router.get('/', (req, res) => {
  Student.find().then(students => {
    res.send({ students })
  })
})

// TODO: Add more routes.


module.exports = router;
