const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { assert } = require('chai');

describe('sendPaymentRequestToApi', () => {
  afterEach(() => {
    sinon.restore(); // Restore the spy after each test.
  });

  it('should call Utils.calculateNumber with the correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
    // Call the function under test
    Utils.calculateNumber('SUM', 100, 20);
    let spyCall = Utils.calculateNumber.getCall(0);
    assert.equal(spyCall.returnValue, sendPaymentRequestToApi(100, 20));
  })
})
