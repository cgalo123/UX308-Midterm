import { coinValue } from "../src/coinValue.js";

describe("coinValue calculates the total value of coins", function () {
  it("tests all 0", function () {
    let total = coinValue(0, 0, 0, 0, 0);
    expect(total).toBe(0);
  });

  it("tests 1 of each", function () {
    let total = coinValue(1, 1, 1, 1, 1); 
    expect(total).toBe(3.4);
  });

  it("tests 2 toonies and 3 quarters", function () {
    let total = coinValue(0, 0, 3, 0, 2); 
    expect(total).toBe(4.75);
  });
});