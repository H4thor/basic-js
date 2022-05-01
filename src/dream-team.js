function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let dreamTeam = [];
  for (let name of members) {
    if (typeof name === 'string') {
      let letter = name.trim().substring(0, 1).toUpperCase();
      dreamTeam.push(letter);
    }
  }
  return dreamTeam.sort().join('');
}

module.exports = {
  createDreamTeam
};