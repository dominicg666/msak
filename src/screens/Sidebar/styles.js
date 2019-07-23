import { StyleSheet } from "react-native";
import { cTheme } from "../../../costumeTheme";

const styles: any = StyleSheet.create({
	contentView: {
    height: 200,
    width: 280,
    backgroundColor: "green"
  },
  topContentView1: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5
  },
  topContentView2: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    marginBottom: 5,
    width: "40%"
  },
  avatar: {
    marginTop: 25,
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    zIndex: 4
  },
  avatarTxtView: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2
  },
  avatarTxt1: {
    color: "black",
    fontSize: 20
  },
  avatarTxt2: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 12
  },
  editView1: {
    // backgroundColor: "rgba(255,0,0,0.3)",
    height: "55%",
    marginTop: "-33%",
    justifyContent: "center",
    alignItems: "center"
  },
  editView2: {
    width: "80%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 5
  },
  editView3: {
    width: 30,
    height: 30,
    alignSelf: "flex-end",
    top: 80,
    alignItems: "center",
  },
  editIcon: {
    alignSelf: "flex-end",
    margin: 3
  },
});
export default styles;
