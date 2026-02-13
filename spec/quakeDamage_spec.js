import { quakeDamage } from "../src/quakeDamage.js";

describe("quakeDamage returns correct damage level", function () {
  it("tests < 5", function () {
    let result = quakeDamage(4.9);
    expect(result).toBe("Little or no damage");
  });

  it("tests 5 <= n < 5.5", function () {
    let result = quakeDamage(5.2);
    expect(result).toBe("Some damage");
  });

  it("tests 5.5 <= n < 6.5", function () {
    let result = quakeDamage(6.0);
    expect(result).toBe("Serious damage: walls may crack or fall");
  });

  it("tests 6.5 <= n < 7.5", function () {
    let result = quakeDamage(7.0);
    expect(result).toBe("Disaster: building may collapse");
  });

  it("tests >= 7.5", function () {
    let result = quakeDamage(7.5);
    expect(result).toBe("Catastrophe: most buildings destroyed");
  });
});