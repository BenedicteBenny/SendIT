import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

process.env.NODE_ENV = 'test';
const should = chai.should();

chai.use(chaiHttp);
// Our parent block

describe('/GET user', () => {
  it('Should GET all the users', (done) => {
    chai
      .request(server)
      .get('/api/v1/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('users');
        res.body.users.should.be.a('array');
        done();
      });
  });
});
describe('/GET user by ID', () => {
  it('Should GET the user by ID', (done) => {
    chai
      .request(server)
      .get('/api/v1/users/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('/Post new user ', () => {
  it('Should create a user', (done) => {
    let user = {
      userName: 'Pascale',
      email: 'passy@gmail.com',
      password: '12345'
    };
    chai
      .request(server)
      .post('/api/v1/sign_up')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });
});
