import { StyleSheet } from "react-native";
import { cTheme } from "../../costumeTheme";
import { color } from "../../config";

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: cTheme.containerbackgroundColor
  },
  mainView: { backgroundColor: color.yellowBg, padding: 20 },
  whats: {
    flexDirection: "row",
    alignSelf: "flex-end"
  },

  textOne: {
    fontSize: 18,
    color: color.slateText,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 15
  },
  textTwo: { fontSize: 20, marginTop: 5, marginBottom: 10, color: "#dab337" },
  textThree: { fontSize: 18, color: color.slateText, marginBottom: 10 },
  TextInput: {
    height: 40,
    width: 50,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginLeft: 7,
    marginRight: 7
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35
  },
  backButton: {
    width: 67,
    position: "absolute",
    bottom: 50,
    alignSelf: "center"
  },
  btnImg: {
    width: 65,
    height: 65
  }
});
export default styles;
