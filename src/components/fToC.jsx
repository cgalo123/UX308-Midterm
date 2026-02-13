import { Text, View } from "react-native";
import { fToC } from "../fToC.js";

export function FToC({ f }) {
  let c = fToC(f);

  return (
    <View>
      <Text>
        fToC({f}) returned {c.toFixed(2)}C
      </Text>
    </View>
  );
}


