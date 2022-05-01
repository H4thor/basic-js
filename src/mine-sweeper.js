function minesweeper(matrix) {
  let answers = []
  for (let k = 0; k < matrix.length; k++) {
    answers.push([])
    for (let i = 0; i < matrix[k].length; i++) {
      let nearbies = []
      if (k != 0) {
        if (i != 0) {
          nearbies.push(matrix[k - 1][i - 1])
        }
        nearbies.push(matrix[k - 1][i])
        if (i + 1 < matrix[k].length) {
          nearbies.push(matrix[k - 1][i + 1]) 
        }
      }
      if (i > 0) {
        nearbies.push(matrix[k][i - 1])
      }
      if (i + 1 < matrix[k].length) {
        nearbies.push(matrix[k][i + 1])
      }
      if (k + 1 < matrix.length) {
        if (i != 0) {
          nearbies.push(matrix[k + 1][i - 1])
        }
        if (i + 1 < matrix[k].length) {
          nearbies.push(matrix[k + 1][i + 1])
        }
        nearbies.push(matrix[k + 1][i])
      }
          answers[k][i] = nearbies.filter(el => el == true).length
         
    }
  }
  return answers
}

module.exports = {
  minesweeper
};