import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	adviceText: {
		fontSize: 16,
		fontWeight: "bold",
		color: '#b64a07',
	},
	adviceBox: {
		flex: 1,
		marginTop: 15,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		backgroundColor: '#c3c3c3'
	},
	infoText: {
		fontSize: 48,
		fontWeight: "bold",
		color: '#b64a07',
	},
	boxShare: {
		width: '100%',
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