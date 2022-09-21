export const sum = (a, b) => a + b;

export const capitalize = (word) => {
  let capital = word[0].toUpperCase() + word.slice(1, word.length);
  return capital;
};
