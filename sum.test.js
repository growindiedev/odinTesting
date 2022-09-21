import { sum, capitalize, reverseWord } from "./index";

test("adds", () => {
  expect(sum(2, 3)).toBe(5);
});

test("capitalize", () => expect(capitalize("hello")).toBe("Hello"));

test("reverse the string", () => {
  expect(reverseWord("giraffe")).toBe("effarig");
  expect(reverseWord("Alpha bEt")).toBe("tEb ahplA");
});
