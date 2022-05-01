function isMAC48Address(str) {
  let ar = str.split('-');
  
  if (ar.length !== 6) return false;
  
  for (let i = 0; i < ar.length; i++) {
    let num = parseInt(ar[i], 16);

    if (!num && num !== 0) return false;
  }
  
  return true;
}

module.exports = {
  isMAC48Address
};