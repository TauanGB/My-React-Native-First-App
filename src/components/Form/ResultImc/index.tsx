import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import styles from "./style"

export default function ResultImc(props: { resultado: string; mensagemResultImc: string }) {
	return (
		<View>
			<Text>{props.resultado}</Text>
			<Text
			style={styles.adviceText}
			>{props.mensagemResultImc}</Text>
		</View>
	);
}
