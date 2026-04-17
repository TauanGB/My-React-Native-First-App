import React from "react";
import { Text, View, TextInput, Button, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";
import styles from "./style";

interface ImcItem {
	id: number,
	imc: null;
}

export default function Form() {
	const [height, setHeigth] = useState<string>("");
	const [weight, setWeigth] = useState<string>("");
	const [messageImc, setMessageImc] = useState<string>("preencha o peso e altura");
	const [imc, setImc] = useState<string>("");
	const [textButton, setTextButton] = useState<string>("Calcular");
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [imcList, setImcList] = useState<ImcItem[]>([]);

	function calcularPeso(weigthValue: number, heigthValue: number): string {
		let totalImc = (weigthValue / (heigthValue * heigthValue)).toFixed(2);
		setImcList((arr) => [
			...arr,
			{ id: new Date().getTime(), imc: totalImc }
		]);
		return totalImc
	}

	function validateInput() {
		if (height === "" || weight === "") {
			setImc("");
			setErrorMessage("Este Campo e Obrigatorio*");
			Vibration.vibrate();
		}
		else if (imc !== '') {
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
			<FlatList
				style={styles.listImcs}
				data={imcList.reverse()}
				renderItem={({ item }) => {
					return (
						<View
						style={styles.BoxListItemImcs}
						>
							<Text
								style={styles.textListItemImcs}

							> Resultado IMC = {item.imc}</Text>
						</View>
					)
				}}
				keyExtractor={(item) => {
					item.id
				}}
			/>
		</View>
	);
}
