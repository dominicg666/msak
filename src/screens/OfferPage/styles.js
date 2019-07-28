import { StyleSheet,Dimensions } from "react-native";
import { cTheme } from "../../costumeTheme";
import { color } from "../../config";
const HEADER_HEIGHT = 160;
const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cTheme.containerbackgroundColor
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .32)',
  },
  cover: {
    height: HEADER_HEIGHT,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#fff"
  },
  tabbar: {
    backgroundColor: 'rgba(0, 0, 0, .32)',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerView: {
    // width: "15%",
    alignItems: "center",
    justifyContent: "center"
  },
  mainViewStyle: {
    borderColor: "#d9d9d9",
    borderRightWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  priceTag: {
    backgroundColor: "#ffe790",
    width: "auto",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: -45,
    marginRight: -10,
    marginTop: 10,
    alignItems: "flex-end",
    alignSelf: "flex-end"
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
    padding: 10,
    backgroundColor: "#fff",
    height: HEADER_HEIGHT
  },

  textStyleOne: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10
  },
  imageThree: {
    marginBottom: 5,
    width: 25,
    height: 25,
    marginLeft: 10,
    marginRight: 8
  },
  viewFour: {
    backgroundColor: color.greenBg,
    flexDirection: "row",
    padding: 10
  },
  textFive: { fontSize: 28, fontWeight: "bold", color: "#fff" },
  offerText: {
    backgroundColor: "#fed12d",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginRight: 10
  },
  DrinksText: {
    backgroundColor: "#e0e0e0",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10
  },
  cardView: {
    borderColor: "#4f44441a",
    borderWidth: 1,
    borderRadius: 5,
    margin: 8,
    flexDirection: "row",
    alignItems: 'center',
    padding: 8,
  },
  cardImg: {
    width: 90,
    height: 70,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 0,
    borderRadius: 5
  },
  mainView: { marginLeft: 0 },
  textSix: {
    color: color.textLight,
    fontSize: 16,
    marginLeft: 10,
    width:Dimensions.get("screen").width-165
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
