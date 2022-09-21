import { sum, capitalize, reverseWord, calculator } from "./index";

test("adds", () => {
  expect(sum(2, 3)).toBe(5);
});

test("capitalize", () => expect(capitalize("hello")).toBe("Hello"));

test("reverse the string", () => {
  expect(reverseWord("giraffe")).toBe("effarig");
  expect(reverseWord("Alpha bEt")).toBe("tEb ahplA");
});

test("calculator functions", () => {
  expect(calculator.add(5, 5)).toBe(10);
  expect(calculator.subtract(77, 43)).toBe(34);
  expect(calculator.divide(44, 2)).toBe(22);
  expect(calculator.multiply(5, 3)).toBe(15);
});
