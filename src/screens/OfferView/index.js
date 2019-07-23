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

import Carousel from "react-native-looped-carousel";
import { color } from "../../config";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
class OfferView extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      size: { width, height: 250 }
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
    this.props.navigation.navigate("OfferBannerPage");
    return true;
  };
  render() {
    return (
      <Container style={styles.container}>
        <View>
          <Header style={styles.header}>
            <View style={[styles.headerView, { width: "15%" }]}>
              <Button
                style={styles.menuButton}
                transparent
                // onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
                <Icon active name="ios-arrow-back" style={styles.iconStyle} />
              </Button>
            </View>
            <View style={styles.headerTxtView}>
              <Text style={styles.headerTxt}>25% Discount on.....</Text>
            </View>
            <View style={styles.rightBtn} />
          </Header>
        </View>

        <Content>
          <View>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductView")}
              >
                <Image
                  style={{ width: "100%", height: 250 }}
                  source={require("../../assets/14.jpg")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.topView}>
            <Image
              style={styles.imageStyle}
              source={require("../../assets/call-white.png")}
            />
            <Image
              style={styles.imageStyle}
              source={require("../../assets/placeholder-white.png")}
            />
            <Image
              style={styles.imageStyle}
              source={require("../../assets/telegram-white.png")}
            />
            <Image
              style={styles.imageStyle}
              source={require("../../assets/open-book-white.png")}
            />
          </View>
          <View>
            <Text style={styles.textStyleOne}>25% Discount on all menu</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.homeTopText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View style={styles.viewFour}>
            <View>
              <Image
                style={styles.textImage}
                source={require("../../assets/4.jpg")}
              />
              {/* <Text style={styles.textFive}>Careem</Text> */}
            </View>
            <View style={{ marginLeft: 80, marginTop: 5 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#fff",
                  textAlign: "right"
                }}
              >
                SAR 10 IN 4 Min
              </Text>
            </View>
          </View>

          <View style={styles.viewFive}>
            <Text style={styles.textNine}>Outlet Details</Text>
            <Text style={styles.textTen}>Mcdonalds</Text>
            <Text style={styles.TextLeven}>
              <Text style={styles.TextTwelve}>Location: </Text>
              AlManama,18thstreet
            </Text>
            <Text style={styles.aone}>
              <Text style={styles.atwo}>Type :</Text>
              Fast food
            </Text>
            <Text style={styles.athree}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default OfferView;
