import * as React from "react";
import TabBarComponent from './TabBarComponent'
import TabHeader from './TabHeader'
import { createBottomTabNavigator, BottomTabBar, createStackNavigator } from 'react-navigation';
import OfferPage from '../../screens/OfferPage/index';
import OfferBannerPage from '../../screens/OfferBannerPage/index';
import Profile from '../../screens/Profile/index';
import More from '../../screens/More/index';

import OfferView from '../../screens/OfferView/index';
import ProductView from '../../screens/ProductView/index';


import Barcode from '../../screens/Barcode/index';

const OfferPageNavigator = createStackNavigator({
    OfferPage: OfferPage,
    OfferView: OfferView,
    ProductView: ProductView,
    Barcode:Barcode
});

const OfferBannerNavigator = createStackNavigator({
    OfferBannerPage: OfferBannerPage,
    ProductView: ProductView,
    Barcode:Barcode

});

const ProfileNavigator = createStackNavigator({
    Profile: Profile,
    OfferView: OfferView

});

const MoreNavigator = createStackNavigator({
    More: More,
    OfferView: OfferView

});



const Navigator = createBottomTabNavigator(
    {
        OfferPage: OfferPageNavigator,
        OfferBannerPage: OfferBannerNavigator,
        Profile: ProfileNavigator,
        More: MoreNavigator,
    },
    {
        tabBarComponent: props =>
            <TabBarComponent
                {...props}
            />,

    }
);

const BottomTabBarNavigator = Navigator;
export default BottomTabBarNavigator;
