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
class SavingsBreakdown extends React.Component {
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
    
  }

  componentWillUnmount() {
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Profile");
    return true;
  };
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.header}>
            <Button
              style={styles.menuButton}
              transparent
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Icon active name="ios-arrow-back" style={styles.iconStyle} />
            </Button>
            <Text style={styles.mainHeading}>Savings Breakdown</Text>
          </View>
          <View>
            <View style={styles.couponList}>
              <View style={styles.coupenViewOne}>
                <Image
                  style={styles.coupenimageStyle}
                  source={require("../../assets/mcdonalds.png")}
                />
              </View>
              <View>
                <Text style={styles.coupenHeading}>Mcdonalds</Text>
                <Text style={styles.coupenSecond}>Buy 1 Get 1 free</Text>
                <Text style={styles.coupenThird}>Savings : SAR 40</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("More")}
            >
              <View style={styles.couponList}>
                <View style={styles.coupenViewOne}>
                  <Image
                    style={styles.coupenimageStyle}
                    source={require("../../assets/subway.png")}
                  />
                </View>
                <View>
                  <Text style={styles.coupenHeading}>Subway</Text>
                  <Text style={styles.coupenSecond}>
                    Flat 20% off on Total Bill
                  </Text>
                  <Text style={styles.coupenThird}>Savings : SAR 40</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SavingsBreakdown;
