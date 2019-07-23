import * as React from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  View
} from "native-base";
import { Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import { color } from "../../config";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
class Language extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      size: { width, height: 200 }
    };
  }

  onChangeText(text) {
    // console.log("onChangeText", text);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.mainView}>
            <Text style={styles.textOne}>Choose your preffered Language</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("MobileEnter")}
            style={{ flexDirection: "row", margin: 20 }}
          >
            <Text style={styles.textStyle}>English</Text>
            <Icon active name="ios-arrow-forward" style={styles.iconStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("MobileEnter")}
            style={{ flexDirection: "row", margin: 20 }}
          >
            <Text style={styles.textStyle}>Arabic (Update it soon)</Text>
            <Icon active name="ios-arrow-forward" style={styles.iconStyle} />
          </TouchableOpacity>
        </Content>

        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate("MobileEnter")}
          style={styles.backButton}
        >
          <Image source={require("../../../../assets/back.png")} />
        </TouchableOpacity> */}
      </Container>
    );
  }
}

export default Language;
