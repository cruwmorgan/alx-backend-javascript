const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/a12b', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a12b',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/13', () => {
    it('Responds with 200 and id 13 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/13',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 1');
        done();
      });
    });
  });
});
