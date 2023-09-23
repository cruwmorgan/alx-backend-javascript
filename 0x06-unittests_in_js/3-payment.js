const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  let total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}\n`);
  return total;
}

module.exports = sendPaymentRequestToApi;
