export function gymCost(cost, friends) {
  let discount = 0;

  if (friends === 0) {
    discount = 0;
  } else if (friends === 1) {
    discount = 0.05;
  } else if (friends === 2) {
    discount = 0.10;
  } else {
    discount = 0.15;
  }

  return cost - cost * discount;
}

if (import.meta.main) {
  console.log(`gymCost(100,3) = ${gymCost(100, 3)}`);
}