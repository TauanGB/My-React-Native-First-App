import React from "react";
import { Text, View, TextInput, Button, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";
import styles from "./style";

export default function Form() {
	const [height, setHeigth] = useState<string>("");
	const [weight, setWeigth] = useState<string>("");
	const [messageImc, setMessageImc] = useState<string>("preencha o peso e altura");
	const [imc, setImc] = useState<string>("");
	const [textButton, setTextButton] = useState<string>("Calcular");
	const [errorMessage, setErrorMessage] = useState<string>("");

	function calcularPeso(weigthValue: number, heigthValue: number): string {
		return (weigthValue / (heigthValue * heigthValue)).toFixed(2);
	}

	function validateInput() {
		if (height === "" || weight === "") {
			setImc("");
			setErrorMessage("Este Campo e Obrigatorio*");
			Vibration.vibrate();
		}
		else if(imc !== ''){ 
			setImc("");
			setHeigth('')
			setWeigth('')
		}
		else {
			validationImc()
		}
	}

	function validationImc() {
		const heightNumber = parseFloat(height.replace(',', '.'));
		const weightNumber = parseFloat(weight.replace(',', '.'));
		
		if (!isNaN(heightNumber) && !isNaN(weightNumber) && heightNumber > 0) {
			const result = calcularPeso(weightNumber, heightNumber);
			setImc(result);
			setMessageImc("Seu imc e igual:");
			setTextButton("Calcular Novamente");
			setErrorMessage('')
		} else {
			setImc("");
			setTextButton("Calcular");
			setMessageImc("Preencha peso e altura corretamente");
		}
	}

	return (
		<View style={styles.Container}>
			{imc === '' ?
				<Pressable onPress={Keyboard.dismiss} style={styles.form} >
					<View>
						<Text
							style={styles.formLabel}
						>Altura</Text>
						<Text
							style={styles.errorMensage}
						>
							{errorMessage}
						</Text>
						<TextInput
							onChangeText={setHeigth}
							placeholder="Digite sua altura em metros!!"
							keyboardType="numeric"
							value={height}
							style={styles.input}
						></TextInput>
						<Text
							style={styles.formLabel}
						>Peso</Text>
						<Text
							style={styles.errorMensage}
						>
							{errorMessage}
						</Text>
						<TextInput
							onChangeText={setWeigth}
							placeholder="Digite seu peso em kilos"
							keyboardType="numeric"
							value={weight}
							style={styles.input}
						></TextInput>
					</View>
				</Pressable>

				:
				<View style={styles.form}>
					<ResultImc resultado={imc} mensagemResultImc={messageImc} />
				</View>
			}
			<TouchableOpacity
				style={styles.buttonCalculator}
				onPress={() => { validateInput() }}
			>
				<Text
					style={styles.textButton}
				>{textButton}</Text>
			</TouchableOpacity>
		</View>
	);
}
