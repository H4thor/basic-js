function encodeLine(str) {
  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count === 1) {
        result += str[i];
      } else {
        result += count + str[i];
        count = 1;
      }
    }
  }

  return result;
}

module.exports = {
  encodeLine
};