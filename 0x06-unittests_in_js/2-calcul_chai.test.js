const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  it('should round two numbers and add them up', function () {
    expect(6).to.equal(calculateNumber('SUM', 1.4, 4.5));
  });
  it('should round two numbers and subtract them', function () {
    expect(-4).to.equal(calculateNumber('SUBTRACT', 1.4, 4.5));
  });
  it('should round two numbers and perform some calculations', function () {
    expect(0.2).to.equal(calculateNumber('DIVIDE', 1.4, 4.5));
    expect('Error').to.equal(calculateNumber('DIVIDE', 1.4, 0));
  });
});
