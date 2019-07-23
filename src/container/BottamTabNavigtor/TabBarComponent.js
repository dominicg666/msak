import * as React from "react";
import {
    Text,
    View,
} from "native-base";
import { Dimensions, Image, TouchableOpacity,StyleSheet } from "react-native";
const tabItems=[{
    image:require("../../assets/24.jpg"),
    activeImage:require("../../assets/23.jpg"),
    title:"Restaurant"
},
{
    image:require("../../assets/28.jpg"),
    activeImage:require("../../assets/27.jpg"),
    title:"Offer"
},
{
    image:require("../../assets/26.jpg"),
    activeImage:require("../../assets/25.jpg"),
    title:"savings"
},
{
    image:require("../../assets/22.jpg"),
    activeImage:require("../../assets/21.jpg"),
    title:"More"
}]

export default class TabBarComponent  extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        const routes = navigation.state.routes;
        return (
            <View style={styles.topView}>
                <View style={styles.bottomBar}>
                    {routes.map((route, index) => {
                      let  focused=navigation.state.index === index;
                      let image=focused?tabItems[index].activeImage:tabItems[index].image.toString();
                        return (
                            <TouchableOpacity
                                key={route.key}
                                routeName={route.routeName}
                                onPress={() => this.navigationHandler(route.routeName)}
                                index={index}
                                style={styles.btnSection}
                            >
                                <Image
                                    style={styles.imageStyle}
                                    source={image}
                                />
                                <Text style={styles.footerText}>{tabItems[index].title}</Text>
                            </TouchableOpacity>
                        )
                    })
                    }
                </View>
            </View>
        );
    }
    navigationHandler = (routeName) => {
        this.props.navigation.navigate(routeName);
      }
}


const styles = StyleSheet.create({
    topView: {
        // position: "absolute",
        // bottom: 0,
        width: "100%",
        marginTop: 10
    },
    bottomBar: {
        width: "100%",
        borderColor: "#d9d9d9",
        borderTopWidth: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    imageStyle: {
        width: 40,
        height: 40
    },

    btnSection: {
        width: "25%",
        alignItems: "center"
    },
    footerText: {
        color: "#797979",
        fontSize: 15
    }
})