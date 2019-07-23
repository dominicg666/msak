import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "transparent",
	},
	logoView: {
		alignItems: "center",
		justifyContent: "center"
	},
	logo : {
		width: 120,
		height: 120,
		marginTop: deviceHeight / 12
	},
	appName: {
		color: "rgba(24,174,249,0.8)",
		marginTop:10,
		fontFamily: "CaviarDreams",
		fontSize:22
	},
	spaceGap : {
		height:10
	},
	contentView1: {
		// alignItems: "center",
		justifyContent: "center",
		backgroundColor:"rgba(200, 200, 220, 0.3)",
		width:"90%",
		alignSelf:"center",
		// height: Dimensions.get("window").height / 1.5
		marginTop: 15
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
		// paddingLeft:"10%",
	},
	bottombtn : {
		// width:"40%",
		// alignItems:"center",
		justifyContent:"center",
		backgroundColor:"transparent",
	},
	bottombtnTxt : {
		color:"rgba(255,255,255,0.5)",
	},
	buttonText: {
		fontSize: 18,
		color: "white",
		alignSelf: "center"
	},
	button: {
		height: 36,
		backgroundColor: "#48BBEC",
		borderColor: "#48BBEC",
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: "stretch",
		justifyContent: "center",
		marginTop:10
	},
	successModal: {
		marginTop: deviceHeight / 4,
		width:200,
		height:200,
		backgroundColor:"white",
		alignSelf:"center",
		justifyContent:"center",
		alignItems:"center",
		borderRadius:15
	},
	modalHead: {
		fontSize: 20,
		fontFamily: "CaviarDreams"
	}
});
export default styles;
