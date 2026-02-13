import { gymCost } from "../src/gymCost.js";

describe("gymCost calculates total cost with discount", function () {
  it("tests 1 friend (5%)", function () {
    let total = gymCost(100, 1);
    expect(total).toBe(95);
  });

  it("tests 2 friends (10%)", function () {
    let total = gymCost(100, 2);
    expect(total).toBe(90);
  });

  it("tests 3 friends (15%)", function () {
    let total = gymCost(100, 3);
    expect(total).toBe(85);
  });

  it("tests 4 friends (still 15%)", function () {
    let total = gymCost(100, 4);
    expect(total).toBe(85);
  });
});