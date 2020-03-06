const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index.js");
const should = chai.should();
chai.use(chaiHttp);

const agent = chai.request.agent(app);
const assert = chai.assert;

const User = require("../models/user");

sampleUser = {
  username: 'sebas1234',
  password: 'sebastian3333'
}

describe("User", function() {
  // TESTS WILL GO HERE.
  it("should not be able to login if they have not registered", function(done) {
      agent.post("/auth/login", { email: "wrong@wrong.com", password: "nope" }).end(function(err, res) {
          res.status.should.be.equal(401);
          done();
      });
  });

  // signup
  it("should be able to signup", function(done) {
      User.findOneAndRemove({ username: "testone" }, function() {
          agent
          .post("/auth/sign-up")
          .send({ username: "testone", password: "password" })
          .end(function(err, res) {
              res.should.have.status(200);
              done();
          });
      });
  });

  // // login
  it("should be able to login", function(done) {
      agent
      .post("/auth/login")
      .send({ username: "testone", password: "password" })
      .end(function(err, res) {
          res.should.have.status(200);
          agent.should.have.cookie("nToken");
          done();
      });
  });

  // logout
  it("should be able to logout", function(done) {
      agent.get("/auth/logout").end(function(err, res) {
      res.should.have.status(200);
      agent.should.not.have.cookie("nToken");
      done();
      });
  });


  after(function () {
      agent.close()
  });

});
