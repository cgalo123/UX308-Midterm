import { Text, View } from "react-native";
import { cubeVolume } from "../cubeVolume.js";

export function CubeVolume({ heightM }) {
  let v = cubeVolume(heightM);

  return (
    <View>
      <Text>
        cubeVolume({heightM}) returned {v} m^3
      </Text>
    </View>
  );
}