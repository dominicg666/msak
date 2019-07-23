import { StyleSheet } from "react-native";
import { cTheme } from "../../../costumeTheme";
import { color } from "../../../config";

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: cTheme.containerbackgroundColor
  },
  header: {
    backgroundColor: "#fff"
  },

  viewFour: {
    backgroundColor: color.greenBg,
    flexDirection: "row",
    padding: 15
  },

  offerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 25,
    color: color.slateText
  },
  cardView: {
    borderColor: "#4f44441a",
    borderWidth: 1,
    borderRadius: 5,
    margin: 8,
    flexDirection: "row"
  },
  cardImg: {
    width: 90,
    height: 70,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 5
  },
  mainView: { marginLeft: 10 },

  viewFive: { backgroundColor: "#f4f4f4", padding: 15 },
  textNine: {
    color: color.slateText,
    fontSize: 28,
    marginTop: 15,
    marginBottom: 20
  },
  textTen: {
    fontSize: 20,
    fontWeight: "900",
    color: color.slateText,
    marginBottom: 10
  },
  TextLeven: { fontSize: 20, color: color.slateText, marginBottom: 0 },
  TextTwelve: {
    fontWeight: "bold",
    fontSize: 20,
    color: color.slateText
  },
  aone: { fontSize: 20, color: color.slateText, marginBottom: 20 },
  atwo: {
    fontWeight: "bold",
    fontSize: 20,
    color: color.slateText
  },
  athree: { fontSize: 20, color: color.slateText, marginBottom: 15 },
  ///////////////new style
  ImageBackground: { width: "100%", height: 380 },

  carouseStyle: {
    backgroundColor: "#BADA55",
    height: 200
  },
  mainHeading: { fontSize: 60, marginLeft: 20, marginTop: 80 },
  textStyleTwo: {
    fontSize: 20,
    marginLeft: 20
  },
  borderBox: {
    backgroundColor: "#373737",
    marginLeft: 20,
    marginRight: 20,
    position: "relative",
    zIndex: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -135
  },
  planSelect: { color: "#fff", fontSize: 20, paddingBottom: 20 },
  arrowStyle: {
    fontSize: 25,
    paddingLeft: 10,
    lineHeight: 25,
    marginLeft: 0,
    zIndex: 100,
    position: "relative",
    backgroundColor: "#c7c7c7",
    width: 30,
    height: 30,
    borderRadius: 20
  },
  offerText: {
    color: "#fff",
    backgroundColor: "#8e8e8e",
    borderRadius: 20,
    marginTop: -20,
    marginLeft: 50,
    padding: 8,
    width: 120
  },
  offerBottomTExt: {
    color: "#fff",
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20
  },
  pricelisting: {
    color: "#fff",
    fontSize: 20,
    textDecorationLine: "line-through"
  },
  bottomSection: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: "#000",
    borderWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    paddingBottom: 25
    // marginBottom: 200
  },
  conditionText: {
    color: "#79889f",
    marginTop: 60,
    fontSize: 18
  },

  termsTest: {
    color: "#b99330",
    fontSize: 18,
    marginTop: 5,
    marginBottom: 60
  },
  backImage: {
    width: 60,
    height: 60
  },
  buttonStyle: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 45,
    borderColor: "#000",
    borderWidth: 0.5,
    marginBottom: 1,
    zIndex: 100
  },
  imgBox: { alignItems: "center", marginTop: -45, marginBottom: 50 }
});
export default styles;
