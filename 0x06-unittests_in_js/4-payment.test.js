const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { assert } = require('chai');

describe('Stubs', () => {
  let stub;
  let log;

  beforeEach(() => {
    stub = sinon.stub(Utils, "calculateNumber").returns(10);
    log = sinon.spy(console, "log");
  });

  afterEach(() => {
    stub.restore(); // Restore the stub after each test.
    log.restore(); // Restore the spy after each test.
  });

  it('should call Utils.calculateNumber to always return the same number 10', () => {
    sendPaymentRequestToApi(100, 20);

    assert.equal(stub.calledWithExactly('SUM', 100, 20), true);
    assert.equal(log.calledWithExactly('The total is: 10'), true);
  });
});
