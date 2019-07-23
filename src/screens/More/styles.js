import { StyleSheet } from "react-native";
import { cTheme } from "../../costumeTheme";
import { color } from "../../config";

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center"
  },
  mainHeading: {
    fontSize: 20,
    paddingTop: 25,
    textAlign: "center",
    fontWeight: "900",
    color: "#34393C"
  },
  coupenimageStyle: {
    width: 30,
    height: 30
  },
  menuList: {
    flexDirection: "row",
    // borderBottomWidth: 1,
    // borderColor: "#EFEFEF",
    paddingBottom: 5
  },
  iconView: {
    marginLeft: 15,
    marginRight: 15,
    alignSelf: "flex-start",
    left: 0,
    width: "10%"
  },
  headingView: {
    width: "75%"
  },
  iconArea: {
    width: "10%"
    // backgroundColor: "red"
  },

  profileText: {
    paddingTop: 5,
    fontSize: 18,
    color: "#3C3C3C"
  },
  arrowView: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    backgroundColor: "red"
  },
  iconStyle: {
    color: "#C7C7C7"
  },
  versionText: {
    alignItems: "center",
    marginTop: 20
  },
  textVertion: {
    fontSize: 18,
    color: "#848282"
  },
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
