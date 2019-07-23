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
class Profile extends React.Component {
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
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("OfferBannerPage")}
            >
              <Text style={styles.textStyleOne}>Profile</Text>

              <Image
                style={styles.imageStyle}
                source={require("../../assets/17.jpg")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textStyleSecond}>Muhammed Jaffer</Text>
            <Text style={styles.homeTopText}>muhammedj@gmail.com</Text>
          </View>
          <View>
            <Tabs activeTabStyle={{ backgroundColor: "red" }}>
              <Tab
                tabStyle={styles.tabStyle}
                activeTabStyle={styles.activeTabStyle}
                textStyle={styles.tabTextStyle}
                activeTextStyle={styles.activeTabTextStyle}
                heading="Savings"
              >
                <View style={styles.tabViewOne}>
                  <Text style={styles.savings}>Total Savings</Text>
                  <Image
                    style={styles.savingsimageStyle}
                    source={require("../../assets/saving_icon.png")}
                  />
                  <Text style={styles.priceTxt}>
                    SAR <Text style={styles.priceTxtTwo}>940</Text>
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("SavingsBreakdown")
                    }
                  >
                    <Text style={styles.linkText}>View Savings breakdown</Text>
                  </TouchableOpacity>
                </View>
              </Tab>
              <Tab
                tabStyle={styles.tabStyle}
                activeTabStyle={styles.activeTabStyle}
                textStyle={styles.tabTextStyle}
                activeTextStyle={styles.activeTabTextStyle}
                heading="My Coupons"
              >
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
                  </View>
                </View>
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
                  </View>
                </View>
              </Tab>
            </Tabs>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Profile;
