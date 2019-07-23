import { StyleSheet } from "react-native";
import { cTheme } from "../../costumeTheme";
import { color } from "../../config";

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: cTheme.containerbackgroundColor
  },
  header: {
    backgroundColor: "#fff"
  },
  headerView: {
    // width: "15%",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTxt: {
    color: "#333",
    fontSize: 20,
    fontWeight: "900"
  },
  menuButton: {
    marginLeft: -14
  },
  iconStyle: {
    color: cTheme.headerIconColor
  },
  headerTxtView: {
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  rightBtn: {
    width: "20%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: -14,
    marginTop: 6
  },
  carouseStyle: {
    backgroundColor: "#BADA55",
    height: 200
  },
  topView: {
    backgroundColor: color.bgGray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textImage: {
    width: 130,
    height: 35,
    marginLeft: 8,
    marginRight: 8
  },
  imageStyle: {
    marginTop: 12,
    marginBottom: 12,
    width: 25,
    height: 25,
    marginLeft: 8,
    marginRight: 8
  },
  textStyleOne: {
    fontSize: 25,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  imageThree: {
    marginBottom: 12,
    width: 25,
    height: 25,
    marginLeft: 20,
    marginRight: 8
  },
  viewFour: {
    backgroundColor: color.greenBg,
    flexDirection: "row",
    padding: 10
  },
  textFive: { fontSize: 28, fontWeight: "bold", color: "#fff" },
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
  textSix: {
    color: color.textLight,
    fontSize: 17,
    marginTop: 12,
    marginBottom: 1
  },
  textSeven: {
    color: "#000",
    fontSize: 22,
    marginTop: 0,
    marginBottom: 0
  },
  textEight: {
    color: color.redText,
    fontSize: 17,
    marginTop: 3,
    marginBottom: 5
  },
  viewFive: { backgroundColor: "#f4f4f4", padding: 15 },
  textNine: {
    color: color.slateText,
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10
  },
  textTen: {
    fontSize: 16,
    fontWeight: "900",
    color: color.slateText,
    marginBottom: 2
  },
  TextLeven: { fontSize: 16, color: color.slateText, marginBottom: 0 },
  TextTwelve: {
    fontWeight: "900",
    fontSize: 16,
    color: color.slateText
  },
  aone: { fontSize: 16, color: color.slateText, marginBottom: 10 },
  atwo: {
    fontWeight: "900",
    fontSize: 16,
    color: color.slateText
  },
  athree: { fontSize: 16, color: color.slateText, marginBottom: 15 },
  homeTopText: {
    color: color.slateText,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15
  }
});
export default styles;
