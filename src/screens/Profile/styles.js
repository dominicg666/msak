import { StyleSheet } from "react-native";
import { cTheme } from "../../costumeTheme";
import { color } from "../../config";

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  tabViewOne: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    flex: 1,
    bottom: 0,
    height: 350
  },
  savings: {
    fontSize: 20,
    marginTop: 0,
    fontWeight: "900",
    marginBottom: 10
  },
  savingsimageStyle: {
    width: 80,
    height: 100,
    marginTop: 20
  },
  priceTxt: {
    color: "#FFDB00",
    fontWeight: "900",
    fontSize: 18,
    marginTop: 15
  },
  linkText: {
    textDecorationLine: "underline",
    marginTop: 20
  },
  couponList: {
    flexDirection: "row",
    padding: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 10
  },
  coupenimageStyle: {
    width: 100,
    height: 80
  },
  coupenHeading: {
    fontSize: 20
  },
  coupenSecond: {
    fontSize: 18,
    color: "#606060"
  },
  coupenViewOne: {
    borderRightWidth: 1,
    borderColor: "#E7E7E7",
    marginRight: 10,
    paddingRight: 10
  },
  priceTxtTwo: {
    color: "#FFDB00",
    fontWeight: "900",
    fontSize: 35,
    marginTop: 15
  },
  buttonStyle: {
    backgroundColor: "#FFDB00",
    borderRadius: 35,
    paddingLeft: 25,
    paddingRight: 35,
    alignSelf: "center"
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: "center"
    // borderColor: "#000",
    // borderWidth: 1
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

  textStyleOne: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 25,
    marginBottom: 0,
    textAlign: "center"
  },
  textStyleSecond: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 15,
    marginBottom: 0,
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
  tabStyle: {
    backgroundColor: "white"
  },
  activeTabStyle: {
    backgroundColor: "white"
  },
  tabTextStyle: {
    color: "#000"
  },
  activeTabTextStyle: {
    color: "#000"
  },

  textNine: {
    color: color.slateText,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  textTen: {
    fontSize: 50,
    color: "#FFDB00",
    marginBottom: 5
  },
  topView: {
    // position: "absolute",
    // bottom: 0,
    width: "100%"
    // marginTop: 10
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
  footerimageStyle: {
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
