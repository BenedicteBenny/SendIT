const assert = require('assert');
const request = require('supertest');
// const server = require('../app');

describe('Array', function() {
    const arr = [1,2,3,4];
    it('should return length an array', function(){
        assert.equal(4, arr.length);
    })
    it('should return correct array element at position 2', function() {
        assert.equal(arr[1], 6);
    });
    
});


// describe('/api/v1/users', () => {
     
//     it('should get list of all users', () => {
//         const user = equest.get('/api/v1/users');
//         console.log(user);

//         assert.equal(true);
            
//     })
// })