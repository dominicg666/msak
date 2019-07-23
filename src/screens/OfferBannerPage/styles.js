import { StyleSheet } from "react-native";
import { cTheme } from "../../costumeTheme";
import { color } from "../../config";

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: cTheme.containerbackgroundColor
  },
  header: {
    backgroundColor: "#fff",
    paddingTop: 15
  },
  headerTxt: {
    color: "#333",
    fontSize: 20,
    fontWeight: "900"
  },

  textMain: {
    fontSize: 16,
    fontWeight: "900",
    paddingLeft: 15,
    paddingTop: 10
  },
  TextSecond: {
    fontSize: 16,
    paddingLeft: 15,
    paddingBottom: 10
  },
  bannerStyle: { width: "100%", height: 220 },
  topView: {
    // position: "absolute",
    // bottom: 0,
    width: "100%",
    marginTop: 10
  },
  bottomBar: {
    width: "100%",
    borderColor: "#d9d9d9",
    borderTopWidth: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  imageStyle: {
    width: 40,
    height: 40
  },

  btnSection: {
    width: "25%",
    alignItems: "center"
  },
  footerText: {
    color: "#797979",
    fontSize: 15
  }
});
export default styles;
