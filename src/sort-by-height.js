function sortByHeight(arr) {
  const trueArray = arr.filter(num => num !== -1).sort((a, b) => a - b);

  let res = [];
  let count = 0;

  for (let elem of arr) {
    if (elem === -1) {
      res.push(elem);
    } else {
      res.push(trueArray[count]);
      count++;
    }
  }

  return res;
}

module.exports = {
  sortByHeight
};
