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
import { connect } from 'react-redux';

import { fetchOffersList, openOfferDetails } from '../../store/reducers/offers/action';
import { Dimensions, Image, TouchableOpacity, FlatList } from "react-native";
import Carousel from "react-native-looped-carousel";
import { color } from "../../config";
import ShimmerList from './ShimmerList';
import TabHeader from "../../container/BottamTabNavigtor/TabHeader";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
class OfferBannerPage extends React.Component {
  static navigationOptions = props => ({
    headerTitle: <TabHeader keyindex={1}  {...props} />,
  });
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
    this.props.fetchOffersList({ URL, API_KEY });
  }

  componentWillUnmount() {
  }

  handleBackPress = () => {
    this.props.navigation.navigate("OfferPage");
    return true;
  };
  _renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this.props.openOfferDetails({ offer_id: item.offer_id })
        this.props.navigation.navigate("ProductView")
      }}
    >
      <View>
        <Image
          style={styles.bannerStyle}
          source={{ uri: item.banner }}
        />
        <Text style={styles.textMain}>{`${item.banner_text} CODE:${item.coupon_code}`}</Text>
        <Text style={styles.TextSecond}>
          {item.restuarant_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      <Container style={styles.container}>
        {this.props.OfferListsService.isRequest ?
          (<ShimmerList />) : this.props.OfferListsService.offersList.length > 0 ? (<FlatList
            style={{}}
            data={this.props.OfferListsService.offersList}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem}
          // ItemSeparatorComponent={this._ItemSeparator}
          />) : (<View style={{
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
          </View>)}

      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    apiService: state.ApiReducer,
    OfferListsService: state.OfferListsReducer

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOffersList: ({ URL, API_KEY }) => dispatch(fetchOffersList({ URL, API_KEY })),
    openOfferDetails: (offer_id) => dispatch(openOfferDetails(offer_id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferBannerPage);
