import React from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";
import styles from "./style";

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
		<View style={styles.formContext}>
			<View style={styles.form}>
				<Text
					style={styles.formLabel}
				>Altura</Text>
				<TextInput
					onChangeText={setheigth}
					placeholder="Digite sua altura"
					keyboardType="numeric"
					value={height}
					style={styles.input}
				></TextInput>
				<Text
					style={styles.formLabel}
				>Peso</Text>
				<TextInput
					onChangeText={setWeigth}
					placeholder="Digite seu peso"
					keyboardType="numeric"
					value={weight}
					style={styles.input}
				></TextInput>
				<TouchableOpacity
				style={styles.buttonCalculator}
				>
					<Text
						style={styles.textButton}
					>Calcular</Text>
				</TouchableOpacity>
			</View>
				<ResultImc resultado={imc} mensagemResultImc={messageImc} />
		</View>
	);
}
