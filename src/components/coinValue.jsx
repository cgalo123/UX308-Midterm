import { Text, View } from "react-native";
import { coinValue } from "../coinValue.js";

export function CoinValue({ nickels, dimes, quarters, loonies, toonies }) {
  let total = coinValue(nickels, dimes, quarters, loonies, toonies);

  return (
    <View>
      <Text>
        coinValue({nickels}, {dimes}, {quarters}, {loonies}, {toonies}) returned $
        {total.toFixed(2)}
      </Text>
    </View>
  );
}