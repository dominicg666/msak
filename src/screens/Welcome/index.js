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
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Carousel from "react-native-looped-carousel";
import { color } from "../../config";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
class Welcome extends React.Component{
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      size: { width: "99%", height: 150 }
    };
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <ImageBackground
            source={require("../../assets/main_bg.png")}
            style={styles.ImageBackground}
          >
            <Text style={styles.mainHeading}>Welcome</Text>
            <Text style={styles.textStyleTwo}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </ImageBackground>
          <View style={styles.borderBox}>
            <Text style={styles.planSelect}>Choose a plan</Text>
            <Carousel
              delay={5000}
              arrows={true}
              leftArrowText={"<"}
              rightArrowText={">"}
              leftArrowStyle={styles.arrowStyle}
              rightArrowStyle={styles.arrowStyle}
              style={{ height: 200 }}
              style={this.state.size}
              onAnimateNextPage={p => console.log(p)}
            >
              <View style={[styles.carouseStyle, this.state.size]}>
                <Image
                  style={{ width: "100%", height: 150 }}
                  source={require("../../assets/10.jpg")}
                />
              </View>
              <View style={[styles.carouseStyle, this.state.size]}>
                <Image
                  style={{ width: "100%", height: 200 }}
                  source={require("../../assets/10.jpg")}
                />
              </View>
              <View style={[styles.carouseStyle, this.state.size]}>
                <Image
                  style={{ width: "100%", height: 200 }}
                  source={require("../../assets/10.jpg")}
                />
              </View>
            </Carousel>
            <Text style={styles.offerText}>Sar 130.00 off</Text>
            <Text style={styles.offerBottomTExt}>
              Sar 165 <Text style={styles.pricelisting}>sar 250</Text>
            </Text>
          </View>
          <View style={styles.bottomSection}>
            <Text style={styles.conditionText}>
              By pressing "submit" you agree to our
            </Text>
            <Text style={styles.termsTest}>terms & conditions</Text>
          </View>
          <View style={styles.imgBox}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("OfferPage")}
              style={styles.buttonStyle}
            >
              <Image
                style={styles.backImage}
                source={require("../../assets/back.png")}
              />
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Welcome;
