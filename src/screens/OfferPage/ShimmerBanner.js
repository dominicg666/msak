import * as React from 'react';
import { View, Text, Animated, FlatList, Image, Dimensions } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
class ShimmerBanner extends React.Component {


    // _ItemSeparator = () => <View style={styles.separator} />;

    render() {
        //no-data-found
        return (<SkeletonPlaceholder >
            <View style={{ width: "100%", height: 140, borderRadius: 5, }} />
        </SkeletonPlaceholder>);
    }
}


export default ShimmerBanner;
