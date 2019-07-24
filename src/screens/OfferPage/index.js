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
  ImageBackground,
  StatusBar,
  Animated,
  Image
} from "react-native";
import { color } from "../../config";
import OfferList from './OfferList';
import styles from "./styles";

const { width, height } = Dimensions.get("window");

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const HEADER_HEIGHT = 140;
const COLLAPSED_HEIGHT = -10;
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
        { key: '1', title: 'First' },
        { key: '2', title: 'Second' },
        { key: '3', title: 'Third' },
      ],
      scroll: new Animated.Value(0),
    };
  }

  _handleIndexChange = index => {
    this.setState({ index });
  };

  _renderPager = props => <PagerPan {...props} />;
  _renderHeader = props => {
    const translateY = this.state.scroll.interpolate({
      inputRange: [0, SCROLLABLE_HEIGHT],
      outputRange: [0, -SCROLLABLE_HEIGHT],
      extrapolate: 'clamp',
    });
    console.log(props, 'tabbar');
    const { index, routes } = props.navigationState;
    return (
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <View>
          <View style={[styles.carouseStyle, this.state.size]}>
            <Image
              style={{ width: "100%", borderRadius: 10, height: HEADER_HEIGHT }}
              source={require("../../assets/bg1.jpg")}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          {
            routes.map((data, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.setState({ index: index })}>
                  <Text style={[styles.DrinksText,{marginLeft:index==0?10:5,marginRight:index==(routes.length-1)?10:0,marginBottom:5}]}>{data.title}</Text>
                </TouchableOpacity>
              )
            })
          }
          {/* <TabBar {...props} style={styles.tabbar} /> */}
        </View>
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
    apiService: state.ApiReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferPage);




