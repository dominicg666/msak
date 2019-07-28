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
import { connect } from 'react-redux';
import { fetchOffersDetails } from '../../store/reducers/offers/action';
import Carousel from "react-native-looped-carousel";
import { color } from "../../config";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
class OfferView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params && navigation.state.params.title ? navigation.state.params.title : ''}`,
  });
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      size: { width, height: 250 }
    };
  }


  componentDidMount() {
    let URL = this.props.apiService.base_url + this.props.apiService.getoffers;
    let API_KEY = this.props.apiService.api_key;
    let OFFER_ID = this.props.offerDetailsService.offer_id;

    this.props.fetchOffersDetails({ URL, API_KEY, OFFER_ID });
  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.offerDetailsService.offerDetails !== this.props.offerDetailsService.offerDetails) {
      if (nextProps.offerDetailsService.offerDetails
        && nextProps.offerDetailsService.offerDetails[0]
        && nextProps.offerDetailsService.offerDetails[0].restuarant_name) {
        let restuarant_name = nextProps.offerDetailsService.offerDetails[0].restuarant_name
        const { setParams } = this.props.navigation;
        setParams({ title: restuarant_name })
      }
    }
  }

  handleBackPress = () => {
    this.props.navigation.navigate("OfferBannerPage");
    return true;
  };
  render() {
    return (
      <Container style={styles.container}>
        {this.props.offerDetailsService.offerDetails && this.props.offerDetailsService.offerDetails.length > 0 ?
          this.props.offerDetailsService.offerDetails.map((data, i) => {
            return (<Content key={i}>
              <View>
                <View>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("ProductView")}
                  >
                    <Image
                      style={{ width: "100%", height: 180 }}
                      source={{uri:data.banner}}
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
                <Text style={styles.textStyleOne}>{data.banner_text}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.homeTopText}>
                    {data.restuarant_name} {`Code: ${data.coupon_code}`}
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
                <Text style={styles.textTen}>{data.restuarant_name}</Text>
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
            )
          }) : (<View style={{
            flex: 1, paddingLeft: 12, paddingRight: 12,
            width: Dimensions.get('screen').width,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white"

          }}>
            <Image
              style={{ height: 100, width: 180 }}
              source={require("../../assets/no-data-found.png")}

            />
            <Text>No Data Found...</Text>
          </View>)

        }


      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    apiService: state.ApiReducer,
    offerDetailsService: state.OfferDetailsReducer

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOffersDetails: ({ URL, API_KEY, OFFER_ID }) => dispatch(fetchOffersDetails({ URL, API_KEY, OFFER_ID }))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferView);
