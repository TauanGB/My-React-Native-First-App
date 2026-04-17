import React from "react";
import { Text, View, TextInput, Button, Share, TouchableOpacity } from "react-native";
import styles from "./style"

export default function ResultImc(props: { resultado: string; mensagemResultImc: string }) {

	const onShare = async () => {
		const result = await Share.share({
			message: 'Meu imc hoje é: ' + props.resultado,
		})

	}

	return (
		<View style={styles.adviceBox}>
			<View style={styles.boxShare}>
				{props.resultado != "" ?

					<TouchableOpacity
						style={styles.share}
						onPress={onShare}
					>
						<Text
						style={styles.textShare}
						>
							Share
						</Text>
					</TouchableOpacity>
					:
					<View></View>
				}
			</View>
			<Text
				style={styles.adviceText}
			>{props.mensagemResultImc}</Text>
			<Text
				style={styles.infoText}
			>{props.resultado}</Text>
		</View>
	);
}
