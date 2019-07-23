import { StyleSheet, Dimensions } from "react-native";
import { cTheme } from "../../../costumeTheme";

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: cTheme.containerbackgroundColor,
	},
	header: {
		backgroundColor: cTheme.headerbackgroundColor
	},
	headerView1: {
		width: "15%",
		alignItems: "center",
		justifyContent: "center"
	},
	iconStyle: {
		color: cTheme.headerIconColor
	},
	headerView2: {
		width: "65%",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row"
	},
	headerTxt:{
		color: "white",
		fontSize: 20,
		fontWeight: "bold"
	},
	rightBtn: {
		width: "20%",
		alignItems:"flex-end",
		justifyContent:"flex-end",
		flexDirection:"row",
		marginRight:-14,
		marginTop:6
	},
	contentView1: {
		// alignItems: "center",
		justifyContent: "center",
		backgroundColor:"black",
		width:"90%",
		alignSelf:"center",
		height: Dimensions.get("window").height / 1.5
		// marginTop: "40%"
	},
	contentView2:{
		backgroundColor:"transparent",
		width:"90%",
		alignSelf:"center",
		height:"90%"
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
  }
});
export default styles;
