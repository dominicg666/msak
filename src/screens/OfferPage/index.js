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
import { color } from "../../config";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
class OfferPage extends React.Component{
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
    this.props.navigation.navigate("Welcome");
    return true;
  };
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View>
            <View style={[styles.carouseStyle, this.state.size]}>
              <Image
                style={{ width: "100%", borderRadius: 10, height: 190 }}
                source={require("../../assets/bg1.jpg")}
              />
            </View>
          </View>

          <View style={{ padding: 15 }}>
            <View style={{ flexDirection: "row", marginBottom: 25 }}>
              <TouchableOpacity>
                <Text style={styles.offerText}>Food </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.DrinksText}>Drinks</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("OfferListing")}
            >
              <View style={styles.cardView}>
                <View style={styles.mainViewStyle}>
                  <Image
                    style={styles.cardImg}
                    source={require("../../assets/12.jpg")}
                  />
                </View>

                <View style={styles.mainView}>
                  <Text style={styles.priceTag}>Buy 1 Get 1</Text>
                  <Text style={styles.textStyleOne}>Mcdonalds</Text>

                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={styles.imageThree}
                      source={require("../../assets/location.png")}
                    />
                    <Text style={{ color: "#929497" }}>40 KM</Text>
                  </View>
                  <Text style={styles.textSix}>
                    American, Fast-food, Burger, {"\n"}Pizza..
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.cardView}>
              <View style={styles.mainViewStyle}>
                <Image
                  style={styles.cardImg}
                  source={require("../../assets/16.jpg")}
                />
              </View>

              <View style={styles.mainView}>
                <Text style={styles.priceTag}>50% Off</Text>
                <Text style={styles.textStyleOne}>Subway</Text>

                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={styles.imageThree}
                    source={require("../../assets/location.png")}
                  />
                  <Text style={{ color: "#929497" }}>12 KM</Text>
                </View>
                <Text style={styles.textSix}>American, Fast-food, Burger</Text>
              </View>
            </View>
            <View style={styles.cardView}>
              <View style={styles.mainViewStyle}>
                <Image
                  style={styles.cardImg}
                  source={require("../../assets/13.jpg")}
                />
              </View>

              <View style={styles.mainView}>
                <Text style={styles.priceTag}>40% Off</Text>
                <Text style={styles.textStyleOne}>KFC</Text>

                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={styles.imageThree}
                    source={require("../../assets/location.png")}
                  />
                  <Text style={{ color: "#929497" }}>32 KM</Text>
                </View>
                <Text style={styles.textSix}>American, Fast-food, Burger</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default OfferPage;
