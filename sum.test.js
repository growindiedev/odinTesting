import { sum, capitalize } from "./index";

test("adds", () => {
  expect(sum(2, 3)).toBe(5);
});

test("capitalize", () => expect(capitalize("hello")).toBe("Hello"));
