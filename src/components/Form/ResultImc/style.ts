import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	adviceBox: {
		width:'100%',
		height:120,
		marginTop: 15,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
	},
	adviceText: {
		fontSize: 16,
		fontWeight: "bold",
		color: '#b64a07',
	},
	infoText: {
		fontSize: 48,
		fontWeight: "bold",
		color: '#b64a07',
	},
	boxShare: {
		alignItems: 'center',
		marginBottom: 10,
	},
	share: {
		backgroundColor: 'blue',
		borderRadius: 50,
		paddingBottom: 5,
		paddingTop: 5,
	},
	textShare: {
		color: '#ffffff',
		fontWeight: 'bold',
		paddingHorizontal: 30,
	}
})

export default styles