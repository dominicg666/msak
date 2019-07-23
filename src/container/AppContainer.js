import { createStackNavigator, createAppContainer } from "react-navigation";
import  BottomTabBarNavigator from './BottamTabNavigtor/BottomTab';
import  Language from '../screens/Language/index';
import  MobileEnter from '../screens/MobileEnter/index';
import  OtpVerification from '../screens/OtpVerification/index';
import  Welcome from '../screens/Welcome/index';
import  OfferPage from '../screens/OfferPage/index';
import  OfferListing from '../screens/OfferListing/index';
import  ProductView from '../screens/ProductView/index';
import  OfferBannerPage from '../screens/OfferBannerPage/index';
import  OfferView from '../screens/OfferView/index';
import  Profile from '../screens/Profile/index';
import  More from '../screens/More/index';
import  SavingsBreakdown from '../screens/SavingsBreakdown/index';

const AppNavigator = createStackNavigator({
  BottomTabBarNavigator,
    Language: {
      screen: Language
    },
    MobileEnter: {
      screen: MobileEnter
    },
    OtpVerification: {
      screen: OtpVerification
    },
    Welcome:{
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
  
  export default createAppContainer(AppNavigator);