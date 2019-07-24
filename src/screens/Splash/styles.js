import { Dimensions, StyleSheet } from "react-native";
import { cTheme } from "../../costumeTheme";
import { color } from "../../config";
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#f4d12a'
	},
});
export default styles;
