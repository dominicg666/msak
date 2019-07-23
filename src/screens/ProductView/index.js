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
import { Dimensions, Image, TouchableOpacity, BackHandler } from "react-native";
import { color } from "../../config";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
class ProductView extends React.Component {
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
    this.props.navigation.navigate("OfferListing");
    return true;
  };
  render() {
    return (
      <Container style={styles.container}>
        <View>
          <Button
            style={styles.menuButton}
            transparent
            onPress={() => this.props.navigation.navigate("OfferListing")}
          >
            <Icon active name="ios-arrow-back" style={styles.iconStyle} />
          </Button>
        </View>

        <Content>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("OfferBannerPage")}
            >
              <Image
                style={styles.imageStyle}
                source={require("../../assets/sandwitch.jpg")}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.textStyleOne}>Buy 1 Get 1 free</Text>

            <Text style={styles.homeTopText}>
              Buy one larger burger and you will one {"\n"}Absolutely free
            </Text>

            <Button style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Use coupon</Text>
            </Button>
          </View>

          <View style={styles.viewFive}>
            <Text style={styles.textNine}>Your Estimated savings!</Text>
            <Text style={styles.textTen}>SAR 82</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ProductView;
