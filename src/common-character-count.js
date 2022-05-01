function getCommonCharacterCount( s1, s2 ) {
  let ar1 = s1.split('')
  let ar2 = s2.split('')
  let res = 0;
  for (let i = 0; i < ar1.length; i++) {
    if (ar2.includes(ar1[i])) {
      ar2.splice(ar2.indexOf(ar1[i]), 1)
      res++;
    }
  }
  return res

}
console.log(getCommonCharacterCount('aabbcc', 'adcaa'))
module.exports = {
  getCommonCharacterCount
};