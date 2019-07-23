import * as React from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  View,
  Tab,
  Tabs
} from "native-base";
import { Dimensions, Image, TouchableOpacity, BackHandler } from "react-native";
import Carousel from "react-native-looped-carousel";
import { color } from "../../config";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
class OfferBannerPage extends React.Component {
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
    this.props.navigation.navigate("OfferPage");
    return true;
  };
  render() {
    return (
      <Container style={styles.container}>

        <Content>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("OfferView")}
          >
            <View>
              <Image
                style={styles.bannerStyle}
                source={require("../../assets/14.jpg")}
              />
              <Text style={styles.textMain}>25% discount on all menu</Text>
              <Text style={styles.TextSecond}>
                Lorem ipsum dolor sit amet consactetur
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Image
              style={styles.bannerStyle}
              source={require("../../assets/15.jpg")}
            />
            <Text style={styles.textMain}>25% discount on all menu</Text>
            <Text style={styles.TextSecond}>
              Lorem ipsum dolor sit amet consactetur
            </Text>
          </View>
          <View>
            <Image
              style={styles.bannerStyle}
              source={require("../../assets/14.jpg")}
            />
            <Text style={styles.textMain}>25% discount on all menu</Text>
            <Text style={styles.TextSecond}>
              Lorem ipsum dolor sit amet consactetur
            </Text>
          </View>

         </Content>
      </Container>
    );
  }
}

export default OfferBannerPage;
