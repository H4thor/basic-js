class DepthCalculator {
  calculateDepth(ar) {
    let res = 1;
    let count;
    for (let item of ar) {
      if (Array.isArray(item)) {
        count = this.calculateDepth(item) + 1;
        if (count > res) res = count;
      }
    }
    return res;  
  }
}

module.exports = {
  DepthCalculator
};