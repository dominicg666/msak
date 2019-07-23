import * as React from "react";
import { CheckBox } from "react-native-elements";
import { View, Image } from "react-native";
function myCheckBox(locals: Object) {
  console.log("locals", locals);
  this.state = {
    checked: true
  };
  return (
    <View>
      {locals.config.selected === true ? (
        <Image
          style={{
            width: 25,
            height: 25,
            marginBottom: -22,
            // marginTop: 25,
            marginLeft: 50,
            zIndex: 999
          }}
          source={require("../../../../assets/agreed.png")}
        />
      ) : (
        <Image
          style={{
            width: 25,
            height: 25,
            marginBottom: -22,
            // marginTop: 25,
            marginLeft: 50,
            zIndex: 999
          }}
          source={require("../../../../assets/notagreed.png")}
        />
      )}
      <CheckBox
        containerStyle={{
          alignSelf:"center",
          // marginLeft: 65,
          // marginRight: 0,
          // marginTop: 15,
          // marginBottom: 15,
          margin:0,
          padding:0,
          borderWidth: 0,
          backgroundColor: "#28a74500"
        }}
        onPress={()=>{
          if (locals.config.onAgreeSwitchClicked) {
            locals.config.onAgreeSwitchClicked(true);
          }
        }}
        checkedColor="#28a74500"
        uncheckedColor="#28a74500"
        textStyle={{ color: "white", fontSize: 12, fontWeight: "100" }}
        title="I accept terms of service"
        checked={locals.config.selected}
      />
    </View>
  );
}
module.exports = myCheckBox;
