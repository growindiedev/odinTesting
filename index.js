export const sum = (a, b) => a + b;

export const capitalize = (word) => {
  let capital = word[0].toUpperCase() + word.slice(1, word.length);
  return capital;
};

export const reverseWord = (word) => {
  return word.split("").reverse().join("");
};

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};
