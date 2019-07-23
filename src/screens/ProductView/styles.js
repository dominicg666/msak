import { StyleSheet } from "react-native";
import { cTheme } from "../../costumeTheme";
import { color } from "../../config";

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  buttonStyle: {
    backgroundColor: "#FFDB00",
    borderRadius: 35,
    paddingLeft: 25,
    paddingRight: 35,
    alignSelf: "center"
  },
  buttonText: {
    color: "#000"
  },
  menuButton: {
    marginTop: 20,
    marginLeft: 10
  },
  iconStyle: {
    color: cTheme.headerIconColor,
    fontSize: 35
  },
  imageStyle: {
    width: 120,
    height: 100,
    marginTop: 20,
    alignSelf: "center"
  },
  textStyleOne: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 25,

    marginBottom: 10,
    textAlign: "center"
  },
  homeTopText: {
    color: color.slateText,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    textAlign: "center"
  },
  viewFive: {
    backgroundColor: "#fff",
    borderColor: "#B6B6B6",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    padding: 15,
    marginTop: 30,
    alignItems: "center"
  },
  textNine: {
    color: color.slateText,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  textTen: {
    fontSize: 40,
    color: "#FFDB00",
    marginBottom: 5
  }
});
export default styles;
