import * as React from "react";
import { View,StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Splash from '../screens/Splash/index';
import BottomTabBarNavigator from './BottamTabNavigtor/BottomTab';
import Language from '../screens/Language/index';
import MobileEnter from '../screens/MobileEnter/index';
import OtpVerification from '../screens/OtpVerification/index';
import Welcome from '../screens/Welcome/index';
import OfferPage from '../screens/OfferPage/index';
import OfferListing from '../screens/OfferListing/index';
import ProductView from '../screens/ProductView/index';
import OfferBannerPage from '../screens/OfferBannerPage/index';
import OfferView from '../screens/OfferView/index';
import Profile from '../screens/Profile/index';
import More from '../screens/More/index';
import SavingsBreakdown from '../screens/SavingsBreakdown/index';
import { from } from "rxjs";


const Main = createStackNavigator({
  BottomTabBarNavigator
});


const SwitchNavigator = createSwitchNavigator({
  Splash: {
    screen: Splash
  },
  Main: {
    screen: Main
  },
  Language: {
    screen: Language
  },
});

const Stack = createStackNavigator({
  MobileEnter: {
    screen: MobileEnter
  },
  OtpVerification: {
    screen: OtpVerification
  },
  Welcome: {
    screen: Welcome
  },
  // OfferPage:{
  //   screen: OfferPage
  // },
  // OfferListing:{
  //   screen: OfferListing
  // },
  // ProductView:{
  //   screen: ProductView
  // },
  // OfferBannerPage:{
  //   screen: OfferBannerPage
  // },
  // OfferView:{
  //   screen: OfferView
  // },
  // Profile:{
  //   screen: Profile
  // },
  // More:{
  //   screen: More
  // },
  // SavingsBreakdown:{
  //   screen: SavingsBreakdown
  // },
});


class AppNavigator extends React.Component {
  static router = {
    ...SwitchNavigator.router,
    getStateForAction: (action, lastState) => {
      // check for custom actions and return a different navigation state.
      return SwitchNavigator.router.getStateForAction(action, lastState);
    },
  };
  componentDidUpdate(lastProps) {
    // Navigation state has changed from lastProps.navigation.state to this.props.navigation.state
  }
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#f2c30f" barStyle="light-content" />
        <SwitchNavigator navigation={navigation} />
      </View>
    );
  }
}

export default createAppContainer(AppNavigator);