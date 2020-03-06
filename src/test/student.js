const app = require("../index.js");
const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");
const Student = require('../models/student');
var assert = require('assert');

chai.config.includeStack = true;

chai.use(chaiHttp);

after((done) => {
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## Student APIs', () => {
  // TODO: Implement more tests.
  const newStudent = {
      name: 'test component',
      student_major: 'computer science',
      student_age: '21',
      email: 'aaabbbccc@gmail.com'
  };

  // it('should load homepage', () => {
  //   chai.request(app)
  //     .get('/api/student')
  //     .end((err, res) => {
  //         if (res) {
  //           assert.equal(res.status, 200);
  //       }
  //     })
  // });
});
