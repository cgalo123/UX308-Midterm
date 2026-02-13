export function coinValue(nickels, dimes, quarters, loonies, toonies) {
  let total =
    nickels * 0.05 +
    dimes * 0.10 +
    quarters * 0.25 +
    loonies * 1.0 +
    toonies * 2.0;

  return total;
}


if (import.meta.main) {
  console.log(`coinValue(1,1,1,1,1) = ${coinValue(1, 1, 1, 1, 1)}`);
}