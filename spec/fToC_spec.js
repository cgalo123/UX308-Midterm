import { fToC } from "../src/fToC.js";

describe("fToC converts Fahrenheit to Celsius", function () {
  it("tests freezing 32F -> 0C", function () {
    let c = fToC(32);
    expect(c).toBe(0);
  });

  it("tests boiling 212F -> 100C", function () {
    let c = fToC(212);
    expect(c).toBe(100);
  });

  it("tests room temp 70F -> 21.111...", function () {
    let c = fToC(70);
    expect(c).toBeCloseTo(21.111111, 5);
  });
});

