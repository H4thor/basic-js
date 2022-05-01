function getSumOfDigits(n) {
  let ar = [];

  function summary(number) {
    ar = String(number).split('')
    let res = 0;
    if (ar.length != 1) {
      for (let item of ar) {
        res += +item;
      }
      summary(res);
    }
    return ar.join('');
  }

  return +summary(n);
}

module.exports = {
  getSumOfDigits
};