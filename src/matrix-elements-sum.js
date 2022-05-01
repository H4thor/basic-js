function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][j] === 0) {
        break;
      } else {
        result += matrix[k][j];
      }
    }
  }

  return result;
}

module.exports = {
  getMatrixElementsSum
};
