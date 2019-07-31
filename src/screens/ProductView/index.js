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
    let URL = this.props.apiService.base_url + this.props.apiService.getoffers;
    let API_KEY = this.props.apiService.api_key;
    let OFFER_ID = this.props.offerDetailsService.offer_id;

    this.props.fetchOffersDetails({ URL, API_KEY, OFFER_ID });
  }

  componentWillUnmount() {

  }

  handleBackPress = () => {
    // this.props.navigation.navigate("OfferListing");
    return true;
  };
  render() {
    return (
      <Container style={styles.container}>
        <View>
          <Button
            style={styles.menuButton}
            transparent
            onPress={() => {
              if (this.props.navigation.pop()) {
                this.props.navigation.goBack()
              }
            }}
          >
            <Icon active name="ios-arrow-back" style={styles.iconStyle} />
          </Button>
        </View>
        {this.props.offerDetailsService.offerDetails && this.props.offerDetailsService.offerDetails.length > 0 ?
          this.props.offerDetailsService.offerDetails.map((data, i) => {
            return (
              <Content key={i}>
                <View>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("OfferBannerPage")}
                  >
                    <Image
                      style={styles.imageStyle}
                      source={{uri:data.banner}}
                    />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={styles.textStyleOne}>{`${data.banner_text}`}</Text>

                  <Text style={styles.homeTopText}>
                   {data.offer_text}
            </Text>

                  <Button style={styles.buttonStyle}   onPress={() => this.props.navigation.navigate("Barcode")}>
                    <Text style={styles.buttonText}>Use coupon</Text>
                  </Button>
                </View>

                <View style={styles.viewFive}>
                  <Text style={styles.textNine}>Your Estimated savings!</Text>
                  <Text style={styles.textTen}>{`${data.coupon_code}`}</Text>
                </View>
              </Content>)
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
)(ProductView);

