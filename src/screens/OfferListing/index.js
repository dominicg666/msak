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
class OfferListing extends React.Component {
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
        <View>
          <Header style={styles.header}>
            <View style={[styles.headerView, { width: "15%" }]}>
              <Button
                style={styles.menuButton}
                transparent
                onPress={() => this.props.navigation.navigate("OfferPage")}
              >
                <Icon active name="ios-arrow-back" style={styles.iconStyle} />
              </Button>
            </View>
            <View style={styles.headerTxtView}>
              <Text style={styles.headerTxt}>Mcdonalds</Text>
            </View>
            <View style={styles.rightBtn} />
          </Header>
        </View>

        <Content>
          <View>
            <Carousel
              delay={5000}
              bullets={true}
              style={{ height: 200 }}
              chosenBulletStyle={{
                backgroundColor: "white",
                width: 15,
                height: 15
              }}
              bulletStyle={{
                backgroundColor: "#ffffff9e",
                width: 15,
                height: 15,
                borderColor: "#ffffff9e"
              }}
              bulletsContainerStyle={{
                marginTop: -25
              }}
              style={this.state.size}
              autoplay
              onAnimateNextPage={p => console.log(p)}
            >
              <View style={[styles.carouseStyle, this.state.size]}>
                <Image
                  style={{ width: "100%" }}
                  source={require("../../assets/bg1.jpg")}
                />
              </View>
              <View style={[styles.carouseStyle, this.state.size]}>
                <Image source={require("../../assets/bg1.jpg")} />
              </View>
              <View style={[styles.carouseStyle, this.state.size]}>
                <Image source={require("../../assets/bg1.jpg")} />
              </View>
            </Carousel>
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
            <Text style={styles.textStyleOne}>Mcdonalds Restaurent</Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.imageThree}
                source={require("../../assets/location.png")}
              />
              <Text style={{ color: "#929497" }}>32 KM</Text>
            </View>
          </View>
          <View style={styles.viewFour}>
            <View>
              <Image
                style={styles.textImage}
                source={require("../../assets/4.jpg")}
              />
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
          <View style={{ padding: 15 }}>
            <Text style={styles.offerText}>Offer</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ProductView")}
            >
              <View style={styles.cardView}>
                <Image
                  style={styles.cardImg}
                  source={require("../../assets/7.jpg")}
                />
                <View style={styles.mainView}>
                  <Text style={styles.textSix}>Main Course</Text>
                  <Text style={styles.textSeven}>Buy 1 Get 1 free</Text>
                  <Text style={styles.textEight}>Already Used</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.cardView}>
              <Image
                style={styles.cardImg}
                source={require("../../assets/5.jpg")}
              />
              <View style={styles.mainView}>
                <Text style={styles.textSix}>Main Course</Text>
                <Text style={styles.textSeven}>Flat 20% off on Total Bill</Text>
                <Text style={styles.textEight}>Already Used</Text>
              </View>
            </View>
            <View style={styles.cardView}>
              <Image
                style={styles.cardImg}
                source={require("../../assets/8.jpg")}
              />
              <View style={styles.mainView}>
                <Text style={styles.textSix}>Main Course</Text>
                <Text style={styles.textSeven}>Buy 1 Get 1 free</Text>
                <Text style={styles.textEight}>Already Used</Text>
              </View>
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

export default OfferListing;
