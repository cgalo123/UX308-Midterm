import { View } from "react-native";

import { CoinValue } from "./coinValue.jsx";
import { FToC } from "./fToC.jsx";
import { CubeVolume } from "./cubeVolume.jsx";
import { GymCost } from "./gymCost.jsx";
import { QuakeDamage } from "./quakeDamage.jsx";

export default function App() {
  return (
    <View>
      <CoinValue nickels={0} dimes={0} quarters={0} loonies={0} toonies={0} />
      <CoinValue nickels={1} dimes={1} quarters={1} loonies={1} toonies={1} />
      <CoinValue nickels={0} dimes={0} quarters={3} loonies={0} toonies={2} />

      <FToC f={32} />
      <FToC f={212} />
      <FToC f={70} />

      <CubeVolume heightM={1} />
      <CubeVolume heightM={2} />
      <CubeVolume heightM={0.5} />

      <GymCost cost={100} friends={1} />
      <GymCost cost={100} friends={2} />
      <GymCost cost={100} friends={3} />
      <GymCost cost={100} friends={4} />

      <QuakeDamage intensity={4.9} />
      <QuakeDamage intensity={5.2} />
      <QuakeDamage intensity={6.0} />
      <QuakeDamage intensity={7.0} />
      <QuakeDamage intensity={7.5} />
    </View>
  );
}

