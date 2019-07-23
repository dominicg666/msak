import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#82CBF5",
	},
	header : {
		alignItems:"center",
		justifyContent:"center",
		height: "10%",
		marginTop: 50,
		width:"90%",
		alignSelf:"center"
	},
	headerTxt : {
		fontSize : 20,
		color:"white",
		fontFamily: "CaviarDreams"
	},
	headerSubTxt : {
		color: "rgba(255,255,255,0.5)",
		textAlign: "center",
		fontFamily: "CaviarDreams"
	},
	contentView1: {
		// alignItems: "center",
		justifyContent: "center",
		backgroundColor:"rgba(200, 200, 220, 0.3)",
		width:"90%",
		alignSelf:"center",
		// height: Dimensions.get("window").height / 1.5
		// marginTop: "40%"
	},
	contentView2:{
		backgroundColor:"transparent",
		width:"90%",
		alignSelf:"center",
		// height:"90%"
	},
	btn: {
		// marginLeft:12,
		backgroundColor:"rgba(0,0,25,0.5)",
		borderRadius:50,
		marginBottom:30
	},
	bottom : {
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"center",
		// paddingLeft:"10%",
	},
	bottombtn : {
		width:"30%",
		alignItems:"center",
		justifyContent:"center",
		backgroundColor:"transparent",
	},
	bottombtnTxt : {
		color:"rgba(255,255,255,0.5)",
	},
	successModel: {
		marginTop: deviceHeight / 4,
		width:250,
		height:200,
		backgroundColor:"white",
		alignSelf:"center",
		justifyContent:"center",
		alignItems:"center",
		borderRadius:15
	},
	doneImg : {
		width: 70,
		height: 70,
		alignSelf: "center"
	},
	modelTxt : {
		fontSize: 13,
		fontFamily: "CaviarDreams"
	}
});
export default styles;
