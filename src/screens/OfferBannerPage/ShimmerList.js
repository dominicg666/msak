import * as React from 'react';
import { View, Text, Animated, FlatList, Image, Dimensions } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import styles from "./styles";
class ShimmerList extends React.Component {


    // _ItemSeparator = () => <View style={styles.separator} />;

    render() {
        //no-data-found
        return (<View style={{  paddingLeft: 12, paddingRight: 12 }}>
            {[0, 1, 2, 3, 4].map((_, index) => (
                <View key={index} style={{ marginBottom: 12 }}>
                    <SkeletonPlaceholder>
                        <View style={styles.bannerStyle}>

                        </View>
                        <View style={styles.textMain}></View>
                        <View style={styles.TextSecond}>
                        </View>
                    </SkeletonPlaceholder>
                </View>)
            )}</View>);
    }
}


export default ShimmerList;
