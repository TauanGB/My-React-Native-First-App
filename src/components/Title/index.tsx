import React from "react";
import { Text, View } from "react-native";
import Styles from "./style"

export default function Title() {
  return (
    <View style={Styles.boxTitle}>
      <Text style={Styles.textTitle}>ONEBITHEALTH</Text>
    </View>
  );
}
