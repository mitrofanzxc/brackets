module.exports = function check(str, bracketsConfig) {
  let count = 0;
  if (bracketsConfig.length === 1) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === bracketsConfig[0][0]) {
        count++;
      } else {
        count--;
      }
    }
  } else if (bracketsConfig.length === 2) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === bracketsConfig[0][0]) {
        count++;
      } else if (str[i]=== bracketsConfig[0][1]) {
        count--;
      } else if (str[i] === bracketsConfig[1][0]) {
        count++;
      } else {
        count--;
      }
    }
  } else if (bracketsConfig.length === 3) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === bracketsConfig[0][0]) {
        count++;
      } else if (str[i] === bracketsConfig[0][1]) {
        count--;
      } else if (str[i] === bracketsConfig[1][0]) {
        count++;
      } else if (str[i] === bracketsConfig[1][1]) {
        count--;
      } else if (str[i] === bracketsConfig[2][0]) {
        count++;
      } else {
        count--;
      }
    }
  } else if (bracketsConfig.length === 4) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === bracketsConfig[0][0]) {
        count++;
      } else if (str[i]=== bracketsConfig[0][1]) {
        count--;
      } else if (str[i] === bracketsConfig[1][0]) {
        count++;
      } else if (str[i] === bracketsConfig[1][1]) {
        count--;
      } else if (str[i] === bracketsConfig[2][0]) {
        count++;
      } else if (str[i] === bracketsConfig[2][1]) {
        count--;
      } else if (str[i] === bracketsConfig[3][0]) {
        count++;
      } else {
        count--;
      }
    }
  } else if (bracketsConfig.length === 5) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === bracketsConfig[0][0]) {
        count++;
      } else if (str[i]=== bracketsConfig[0][1]) {
        count--;
      } else if (str[i] === bracketsConfig[1][0]) {
        count++;
      } else if (str[i] === bracketsConfig[1][1]) {
        count--;
      } else if (str[i] === bracketsConfig[2][0]) {
        count++;
      } else if (str[i] === bracketsConfig[2][1]) {
        count--;
      } else if (str[i] === bracketsConfig[3][0]) {
        count++;
      } else if (str[i] === bracketsConfig[3][1]) {
        count--;
      } else if (str[i] === bracketsConfig[4][0]) {
        count++;
      } else {
        count--;
      }
    }
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}