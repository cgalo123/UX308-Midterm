export function fToC(f) {
  let c = (f - 32) * (5 / 9);
  return c;
}

if (import.meta.main) {
  console.log(`fToC(32) = ${fToC(32)}`);
}
