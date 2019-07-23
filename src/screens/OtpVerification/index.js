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
import {
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  BackHandler
} from "react-native";
import { color } from "../../config";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
class OtpVerification extends React.Component {
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

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackPress
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    this.props.navigation.navigate("MobileEnter");
    return true;
  };
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.mainView}>
            <Text style={styles.textOne}>Please hang on</Text>
            {/* <View style={styles.whats}>
              <Text style={styles.textTwo}>what’s in</Text>
            </View> */}

            <Text style={styles.textThree}>
              We are trying to auto verify your number with SMS sent to
              +917734341477
            </Text>
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.TextInput} />
            <TextInput style={styles.TextInput} />
            <TextInput style={styles.TextInput} />
            <TextInput style={styles.TextInput} />
          </View>
        </Content>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Welcome")}
          style={styles.backButton}
        >
          <Image
            style={styles.btnImg}
            source={require("../../assets/back.png")}
          />
        </TouchableOpacity>
      </Container>
    );
  }
}

export default OtpVerification;
