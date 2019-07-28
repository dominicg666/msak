import * as React from 'react';
import { View, Text, Animated, FlatList, Image, Dimensions } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
class ShimmerList extends React.Component {


    // _ItemSeparator = () => <View style={styles.separator} />;

    render() {
        //no-data-found
        return (<View style={{ paddingTop: 220, paddingLeft: 12, paddingRight: 12 }}>
            {[0, 1, 2, 3, 4].map((_, index) => (
                <View key={index} style={{ marginBottom: 12 }}>
                    <SkeletonPlaceholder>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: 100, height: 100 }} />

                            <View
                                style={{
                                    justifyContent: "space-between",
                                    marginLeft: 12,
                                    flex: 1
                                }}
                            >
                                <View style={{ width: "50%", height: 20 }} />
                                <View style={{ width: "30%", height: 20 }} />
                                <View style={{ width: "80%", height: 20 }} />
                            </View>
                        </View>
                    </SkeletonPlaceholder>
                </View>)
            )}</View>);
    }
}


export default ShimmerList;
