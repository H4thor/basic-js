function calculateHanoi(disks, turnsSpeed) {
  const min = Math.pow(2,disks) - 1
  const t = Math.floor((min / turnsSpeed ) * 60 * 60)
  return {turns: min, seconds: t}
}

module.exports = {
  calculateHanoi
};