const express = require('express');
const studentRoutes = require('./student.js');
const authRoutes = require('./auth.js');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: Change to your model.

router.use('/student', studentRoutes);

router.use('/auth', authRoutes);

module.exports = router;
