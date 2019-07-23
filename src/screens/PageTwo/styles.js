import { StyleSheet } from "react-native";
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
	contentView: {
		alignItems:"center",
		justifyContent:"center",
		marginTop:"40%"
	},
	contentTxt: {
		fontFamily:cTheme.fancyFont
	}
});
export default styles;
