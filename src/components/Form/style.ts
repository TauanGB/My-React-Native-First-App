import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	formContext:{
		flex:1,
		bottom:0,
		backgroundColor:'#f7f7f7',
		alignItems:'center',
		borderTopLeftRadius:30,
		borderTopRightRadius:30,
		paddingTop:15,
		marginTop:30,
	},
	form:{
		width:'100%',
		padding:25,
		marginTop:30,
	},
	formLabel:{
		color:'#000000',
		fontSize:18,
		paddingLeft:20,
	},
	input:{
		width:'90%',
		borderRadius:15,
		backgroundColor:'#0000001e',
		height:50,
		margin:12,
		paddingLeft:10,
	},
	textButton:{
		fontSize:24,
		color:"#d9d9d9"
	},
	buttonCalculator:{
		marginTop:40,
		backgroundColor:'#FF0043',
		borderRadius:40,
		alignItems:'center',
		padding:12,
	},
	errorMensage:{
		fontSize:12,
		color:'red',
		fontWeight:'bold',
		paddingLeft:20,
	}
})

export default styles