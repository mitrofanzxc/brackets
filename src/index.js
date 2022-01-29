module.exports = function check(str, bracketsConfig) {
  let arr  = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    arr.push(bracketsConfig[i].join(''));
  }
  for (let j = 0; j < arr.length; j++) {
    if (str.includes(arr[j])) {
      str = str.replace(arr[j], '');
      j = -1;
    }
  }
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}