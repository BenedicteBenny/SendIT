// let mongoose = require("mongoose");
// import User from '../models/users';

// Require the dev-dependencies
// import Chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

process.env.NODE_ENV = 'test';
const should = chai.should();

chai.use(chaiHttp);
// Our parent block

describe('/GET user', () => {
  it('it should GET all the users', (done) => {
    chai
      .request(server)
      .get('/api/v1/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
  });
});
