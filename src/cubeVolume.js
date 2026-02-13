export function cubeVolume(heightM) {
  return heightM * heightM * heightM;
}

if (import.meta.main) {
  console.log(`cubeVolume(2) = ${cubeVolume(2)}`);
}

