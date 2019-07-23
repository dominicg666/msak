import { StyleSheet,Dimensions } from "react-native";
import { cTheme } from "../../costumeTheme";
import { color } from "../../config";
const { width, height } = Dimensions.get("window");
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
    fontSize: 36,
    color: color.slateText,
    // fontWeight: "bold",
    marginTop: 10
  },
  textView: {
    padding: 20
  },
  textTwo: { fontSize: 20, marginTop: 5, marginBottom: 10, color: "#dab337" },
  textThree: { fontSize: 16, color: color.slateText, marginBottom: 10 },
  TextInput: {
    height: 40,
    width: 60,
    borderColor: "#000",
    borderWidth: 1,
    marginLeft: 7,
    borderRadius: 5,
    marginRight: 7,
    paddingLeft: 10
  },
  TextInputTwo: {
    height: 40,
    width: 270,
    borderColor: "#000",
    borderWidth: 1,
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 5,
    paddingLeft: 10
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0
  },
  backButton: {
    width: 67,
    marginBottom:60,
    alignSelf: "center"
  },
  btnImg: {
    width: 65,
    height: 65
  },
  skipButton: {
    width: 100,
    alignSelf: "flex-end",
    justifyContent: "flex-end"
    // right: 0
  },
  footerConatiner:{
    backgroundColor:cTheme.containerbackgroundColor,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    alignContent:"center"
  },

  innerFooterContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    alignContent:"center"
  },
  innerFooterContainerOne:{
    width:width/3.5
  }
});
export default styles;
