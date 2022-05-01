const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string' || sampleActivity <= 0 || sampleActivity > 15 || sampleActivity != +sampleActivity) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
}

module.exports = {
  dateSample
};
