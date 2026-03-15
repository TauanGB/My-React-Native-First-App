import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";

export default function Form() {
	const [height, setheigth] = useState<string>("");
	const [weight, setWeigth] = useState<string>("");
	const [messageImc, setMessageImc] = useState<string>("preencha o peso e altura");
	const [imc, setImc] = useState<string>("");
	const [textButton, setTextButton] = useState<string>("Preencha os valores");

	function calcularPeso(weigthValue: number, heigthValue: number): string {
		return (weigthValue / (heigthValue * heigthValue)).toFixed(2);
	}

	function validationImc() {
		const heightNumber = parseFloat(height);
		const weightNumber = parseFloat(weight);

		if (!isNaN(heightNumber) && !isNaN(weightNumber) && heightNumber > 0) {
			const result = calcularPeso(weightNumber, heightNumber);
			setImc(result);
			setMessageImc("Seu imc e igual:");
			setTextButton("Calcular Novamente");
		} else {
			setImc("");
			setMessageImc("Preencha peso e altura corretamente");
		}
	}

	return (
		<View>
			<View>
				<Text>Altura</Text>
				<TextInput
					onChangeText={setheigth}
					placeholder="Digite sua altura"
					keyboardType="numeric"
					value={height}
				></TextInput>
				<Text>Peso</Text>
				<TextInput
					onChangeText={setWeigth}
					placeholder="Digite seu peso"
					keyboardType="numeric"
					value={weight}
				></TextInput>
				<Button
					onPress={validationImc}
					title="Calcular IMC" />
				<ResultImc resultado={imc} mensagemResultImc={messageImc} />
			</View>
		</View>
	);
}
