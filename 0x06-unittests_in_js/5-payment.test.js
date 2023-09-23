const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { assert } = require('chai');

describe('Hooks', () => {
  let log;

  beforeEach(() => {
    log = sinon.spy(console, "log");
  });

  afterEach(() => {
    log.restore(); // Restore the spy after each test.
  });

  it('should call sendPaymentRequestToAPI to always log the total number 120', () => {
    sendPaymentRequestToApi(100, 20);

    assert.equal(log.calledWithExactly("The total is: 120"));
    assert.equal(log.calledOnce, true);
  });

  it('should call sendPaymentRequestToAPI to always return the total number 20', () => {
    sendPaymentRequestToApi(10, 10);

    assert.equal(log.calledWithExactly("The total is: 20"));
    assert.equal(log.calledOnce, true);
  });
});
