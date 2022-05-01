function deleteDigit(n) {
  const ar = String(n).split('');
  const option = ar.map((e, i, a) => a.filter((el, ind) => ind !== i)).map(item => item.join(''));

  return Number(option.sort((a, b) => b - a)[0]);
}

module.exports = {
  deleteDigit
};
