import { StyleSheet } from "react-native";
import { cTheme } from "../../../costumeTheme";


const styles: any = StyleSheet.create({
	container: {
		backgroundColor: cTheme.containerbackgroundColor
	},
	header: {
		backgroundColor: cTheme.headerbackgroundColor
	},
	headerView: {
		// width: "15%",
		alignItems: "center",
		justifyContent: "center"
	},
	headerTxt: {
		color:cTheme.headerTxtcolor,
		fontSize:20,
		fontWeight:"bold"
	},
	menuButton: {
		marginLeft: -14
	},
	iconStyle: {
		color: cTheme.headerIconColor
	},
	headerTxtView: {
		width: "65%",
		alignItems:"center",
		justifyContent:"center",
		flexDirection:"row"
	},
	searchBarView: {
		width: "90%",
		marginRight: -15,
		marginTop:-1
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
