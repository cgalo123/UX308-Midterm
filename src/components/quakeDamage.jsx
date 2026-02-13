import { Text, View } from "react-native";
import { quakeDamage } from "../quakeDamage.js";

export function QuakeDamage({ intensity }) {
  let result = quakeDamage(intensity);

  return (
    <View>
      <Text>
        quakeDamage({intensity}) returned {result}
      </Text>
    </View>
  );
}