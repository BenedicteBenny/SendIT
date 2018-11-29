import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

process.env.NODE_ENV = 'test';
const should = chai.should();

chai.use(chaiHttp);
// Our parent block

describe('/GET all parcels', () => {
  it('Should GET all the parcels', (done) => {
    chai
      .request(server)
      .get('/api/v1/parcels')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('parcels');
        done();
      });
  });
});
describe('/GET parcel by ID', () => {
  it('Should GET the parcel by ID', (done) => {
    chai
      .request(server)
      .get('/api/v1/parcels/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('/Post new parcels ', () => {
  it('Should create a parcels', (done) => {
    let parcel = {
      parcelName: 'Laptop',
      pickup: 'Kigali',
      destination: 'Musanze',
      weight: 2
    };
    chai
      .request(server)
      .post('/api/v1/parcels/')
      .send(parcel)
      .end((err, res) => {
        res.should.have.status(201);
        // res.body.should.be.a('object');
        done();
      });
  });
});
