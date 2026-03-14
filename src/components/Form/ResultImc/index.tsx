import React from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function ResultImc(props: { resultado: string; mensagemResultImc: string }) {
	return (
		<View>
			<Text>{props.resultado}</Text>
			<Text>{props.mensagemResultImc}</Text>
		</View>
	);
}
