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
import { fetchRestarantDetails } from '../../store/reducers/restaurant/actions';
import { openOfferDetails } from '../../store/reducers/offers/action';
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
    let URL = this.props.apiService.base_url + this.props.apiService.getrestaurant;
    let API_KEY = this.props.apiService.api_key;
    let RESTARANT_ID = this.props.restaurantDetailsService.restarant_id;

    this.props.fetchRestarantDetails({ URL, API_KEY, RESTARANT_ID });
  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.restaurantDetailsService.restarantDetails !== this.props.restaurantDetailsService.restarantDetails) {
      if (nextProps.restaurantDetailsService.restarantDetails
        && nextProps.restaurantDetailsService.restarantDetails.restuarant
        && nextProps.restaurantDetailsService.restarantDetails.restuarant[0]
        && nextProps.restaurantDetailsService.restarantDetails.restuarant[0].restuarant_name) {
        let restuarant_name = nextProps.restaurantDetailsService.restarantDetails.restuarant[0].restuarant_name
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
        {this.props.restaurantDetailsService.restarantDetails &&
          this.props.restaurantDetailsService.restarantDetails.restuarant
          && this.props.restaurantDetailsService.restarantDetails.restuarant.length > 0 ?
          this.props.restaurantDetailsService.restarantDetails.restuarant.map((data, i) => {
            return (<Content key={i}>
              <View>
                <View>
                  <Image
                    style={{ width: "100%", height: 180 }}
                    source={{ uri: data.picture }}
                  />
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
                <Text style={styles.textStyleOne}>{data.food_type}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.homeTopText}>
                    {data.restuarant_name}
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
              <View style={styles.viewOffers}>
                <Text style={styles.textNine}>Offers</Text>
                {this.props.restaurantDetailsService.restarantDetails.offers.map((item, i) => {
                  return (<TouchableOpacity
                    onPress={() => {
                      this.props.openOfferDetails({ offer_id: item.offer_id })
                      this.props.navigation.navigate("ProductView")
                    }}
                    key={i}
                  >
                    <View style={styles.cardView}>
                      <View style={styles.mainViewStyle}>
                        <Image
                          style={styles.cardImg}
                          source={{uri:item.banner}}
                        />
                      </View>
                      <View style={styles.mainView}>
                        <Text style={styles.priceTag}>{item.restuarant_name}</Text>
                        <Text style={styles.textStyleOne}>{item.banner_text}</Text>

                        <Text style={styles.textSix}>already used</Text>
                      </View>
                    </View>
                  </TouchableOpacity>)
                })}

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
    restaurantDetailsService: state.RestaurantDetailsReducer

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRestarantDetails: ({ URL, API_KEY, RESTARANT_ID }) => dispatch(fetchRestarantDetails({ URL, API_KEY, RESTARANT_ID })),
    openOfferDetails: (offer_id) => dispatch(openOfferDetails(offer_id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferView);
