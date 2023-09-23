let Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM') {
      return (Math.round(a) + Math.round(b));
    } else if (type === 'SUBTRACT') {
      return (Math.round(a) - Math.round(b));
    } else if (type === 'DIVIDE') {
      const ba = Math.round(b);
      if (ba === 0) {
        return 'Error';
      }
      return (Math.round(a) / Math.round(b));
    }
  }
}

module.exports = Utils;
