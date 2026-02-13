import { cubeVolume } from "../src/cubeVolume.js";

describe("cubeVolume calculates volume of a cube", function () {
  it("tests height 1 -> volume 1", function () {
    let v = cubeVolume(1);
    expect(v).toBe(1);
  });

  it("tests height 2 -> volume 8", function () {
    let v = cubeVolume(2);
    expect(v).toBe(8);
  });

  it("tests height 0.5 -> volume 0.125", function () {
    let v = cubeVolume(0.5);
    expect(v).toBe(0.125);
  });
});

