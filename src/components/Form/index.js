import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";

export default function Form() {
	const [heigth, setheigth] = useState(null)
	const [weigth, setWeigth] = useState(null)
	const [messageImc, setMessageImc] = useState("preencha o peso e altura")
	const [imc, setImc] = useState(null)
	const [textButton, setTextButton] = useState("Preencha os valores")

	function calcularPeso() {
		let tmp1 = heigth*heigth
		let tmp2 = weigth*tmp1
		let tmp3 =  tmp2.toFixed(2)

		return setImc(tmp2)
	};

	function validationImc(){
		if (weigth != null && heigth != null){
			calcularPeso()
			setMessageImc("Seu imc e igual:")
			setTextButton("Calcular Novamente")
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
				value={heigth}
				></TextInput>
				<Text>Peso</Text>
				<TextInput
				onChangeText = {setWeigth}
				placeholder="Digite seu peso"
				keyboardType="numeric"
				value={weigth}
				></TextInput>
				<Button 
				onPress={validationImc}
				title="Calcular IMC"/>
				<ResultImc resultado={imc} mensagemResultImc={messageImc} />
			</View>
		</View>
	);
}
