import * as React from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  View,
  Footer
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
class MobileEnter extends React.Component {
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
    // this.backHandler = BackHandler.addEventListener(
    //   "hardwareBackPress",
    //   this.handleBackPress
    // );
  }

  componentWillUnmount() {
    // this.backHandler.remove();
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Language");
    return true;
  };
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.mainView}>
            <Text style={styles.textOne}>Enter your{"\n"}Mobile number</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textThree}>
              We are trying to auto verify your number with SMS sent to
              +917734341477
            </Text>
          </View>
          <View style={styles.inputView}>
            <TextInput placeholder={"+966"} keyboardType='numeric' style={styles.TextInput} />
            <TextInput
              placeholder={"XXX XXX XXX X"}
              style={styles.TextInputTwo}
              keyboardType='numeric'
            />
          </View>
        </Content>
        <Footer style={styles.footerConatiner}>
          <View style={[styles.innerFooterContainer,styles.innerFooterContainerOne]}></View>
          <View style={styles.innerFooterContainer}>  
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("OtpVerification")}
            style={styles.backButton}
          >
            <Image
              style={styles.btnImg}
              source={require("../../assets/back.png")}
            />
          </TouchableOpacity>
          </View>
          <View style={styles.innerFooterContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Welcome")}
              style={styles.skipButton}
            >
              <Text style={{ textDecorationLine: "underline", fontSize: 16 }}>
                {'Skip'}
          </Text>
            </TouchableOpacity>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default MobileEnter;
