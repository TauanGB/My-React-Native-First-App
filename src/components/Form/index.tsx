import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";

export default function Form() {

	return (
		<View>
			<View>
				<Text>Altura</Text>
				<TextInput
				placeholder="Digite sua altura"
				keyboardType="numeric"
				></TextInput>
				<Text>Peso</Text>
				<TextInput
				placeholder="Digite seu peso"
				keyboardType="numeric"
				></TextInput>
				<Button title="Calcular IMC"/>
				<ResultImc resultado={imc} mensagemResultImc={messageImc} />
			</View>
		</View>
	);
}
