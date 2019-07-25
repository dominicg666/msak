import * as React from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Tab,
  Tabs
} from "native-base";
import { connect } from 'react-redux';
import { TabView, TabBar, PagerPan } from 'react-native-tab-view';
import {
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  Animated,
  Image
} from "react-native";
import { fetchCategory, fetchBanner } from '../../store/reducers/restaurant/actions';
import { color } from "../../config";
import OfferList from './OfferList';
import styles from "./styles";

const { width, height } = Dimensions.get("window");
import Carousel from "react-native-looped-carousel";

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const HEADER_HEIGHT = 140;
const COLLAPSED_HEIGHT = -20;
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;
class OfferPage extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
      ],
      scroll: new Animated.Value(0),
      size: { width, height },
    };
  }
  componentWillMount() {

    let URL = this.props.apiService.base_url + this.props.apiService.getbanners;
    let API_KEY = this.props.apiService.api_key;
    this.props.fetchBanner({ URL, API_KEY });

    this.getTabbars();

  }

  async getTabbars() {
    let URL = this.props.apiService.base_url + this.props.apiService.getcategory;
    let API_KEY = this.props.apiService.api_key;
    await this.props.fetchCategory({ URL, API_KEY });
    let routes = [];
    this.props.restaurantService.categoryList.map((data, index) => {
      routes.push({ key: data.category_id, title: data.category_name })
    });
    this.setState({ routes });
  }

  _handleIndexChange = index => {
    this.setState({ index });
  };

  _renderPager = props => <PagerPan {...props} />;
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
  _renderHeader = props => {
    const translateY = this.state.scroll.interpolate({
      inputRange: [0, SCROLLABLE_HEIGHT],
      outputRange: [0, -SCROLLABLE_HEIGHT],
      extrapolate: 'clamp',
    });
    const { index, routes } = props.navigationState;
    return (
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <View>
          {this.props.restarantBannerService.bannerList && this.props.restarantBannerService.bannerList.length > 0 ? (<Carousel swipe={false} delay={5000} style={[styles.carouseStyle, {height: HEADER_HEIGHT+20, width: width-2}]}
            autoplay
            pageInfo
            onAnimateNextPage={p => console.log(p)}
          >
            {this.props.restarantBannerService.bannerList.map((data, index) => {
              return (
                <View style={{ borderRadius: 10, height: HEADER_HEIGHT, width: width-5 }} key={index}>
                  <Image
                    style={{ flex: 1, borderRadius: 10, height: HEADER_HEIGHT, width: width-5 }}
                    source={{ uri: data.banner_img }}
                  />
                </View>
              );
            })}

          </Carousel>) : null}
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: "row" }}>
          {
            routes.map((data, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.setState({ index: index })}>
                  <Text style={[styles.DrinksText, { marginLeft: index == 0 ? 10 : 5, marginRight: index == (routes.length - 1) ? 10 : 0, marginBottom: 5 }]}>{data.title}</Text>
                </TouchableOpacity>
              )
            })
          }
          {/* <TabBar {...props} style={styles.tabbar} scrollEnabled={true} /> */}
        </ScrollView>
      </Animated.View>
    );
  };



  _renderScene = () => {
    return (
      <OfferList
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.scroll } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
      />
    );
  };


  render() {
    return (
      <TabView
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}

        renderTabBar={this._renderHeader}
        renderPager={this._renderPager}
        // renderScene={this._renderScene}
        // renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    apiService: state.ApiReducer,
    restaurantService: state.RestaurantReducer,
    restarantBannerService: state.RestarantBannerReducer

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategory: ({ URL, API_KEY }) => dispatch(fetchCategory({ URL, API_KEY })),
    fetchBanner: ({ URL, API_KEY }) => dispatch(fetchBanner({ URL, API_KEY })),

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferPage);




