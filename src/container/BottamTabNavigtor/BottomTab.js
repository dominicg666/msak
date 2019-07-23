import * as React from "react";
import TabBarComponent from './TabBarComponent'
import TabHeader from './TabHeader'
import { createBottomTabNavigator, BottomTabBar, TouchableOpacity } from 'react-navigation';
import OfferPage from '../../screens/OfferPage/index';
import OfferBannerPage from '../../screens/OfferBannerPage/index';
import Profile from '../../screens/Profile/index';
import More from '../../screens/More/index';


const Navigator = createBottomTabNavigator(
    {
        OfferPage: OfferPage,
        OfferBannerPage: OfferBannerPage,
        Profile: Profile,
        More: More,
    },
    {
        tabBarComponent: props =>
            <TabBarComponent
                {...props}
            />,
            navigationOptions: props => ({
                
                headerTitle: <TabHeader   {...props} />,
            }),
    }
);

const BottomTabBarNavigator = Navigator;
export default BottomTabBarNavigator;
