function renameFiles(names) {
  let count;
  for (let i = 0; i < names.length; i++) {
      count = 1;
      for (let j = i + 1; j < names.length; j++) {
          if (names[j] === names[i]) {
              names[j] = `${names[j]}(${count})`;
              count++;
          }
      }
      console.log(names);
  }
  return names;
}

module.exports = {
  renameFiles
};