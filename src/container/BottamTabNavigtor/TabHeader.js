import * as React from "react";
import {
    Container,
    Header,
    Content,
    Text,
    Button,
    Icon,
    View,
    Tab,
    Tabs
} from "native-base";
import { Dimensions, Image, TouchableOpacity,StyleSheet } from "react-native";
import { cTheme } from "../../costumeTheme";
import { color } from "../../config";
const tabItems=[{
    image:require("../../assets/24.jpg"),
    activeImage:require("../../assets/23.jpg"),
    title:"Kasm %"
},
{
    image:require("../../assets/28.jpg"),
    activeImage:require("../../assets/27.jpg"),
    title:"Offer"
},
{
    image:require("../../assets/26.jpg"),
    activeImage:require("../../assets/25.jpg"),
    title:"Savings"
},
{
    image:require("../../assets/22.jpg"),
    activeImage:require("../../assets/21.jpg"),
    title:"More"
}]

export default class TabHeader  extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        const routes = navigation.state.routes;
        console.log(this.props);
        
        return (
            <Header style={styles.header}>
            <View style={styles.rightBtn} />
            <View style={styles.headerTxtView}>
              <Text style={styles.headerTxt}>{tabItems[navigation.state.index].title}</Text>
            </View>
            <View style={[styles.headerView, { width: "15%" }]}>
              <Button
                style={styles.menuButton}
                transparent
                // onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
                <Icon active name="ios-search" style={styles.iconStyle} />
              </Button>
            </View>
          </Header>
        );
    }
    navigationHandler = (routeName) => {
        this.props.navigation.navigate(routeName);
      }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff"
      },
      headerView: {
        // width: "15%",
        alignItems: "center",
        justifyContent: "center"
      },
      headerTxtView: {
        width: "65%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
      },
      rightBtn: {
        width: "20%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginRight: 0,
        marginTop: 6
      },
      headerTxt: {
        color: "#333",
        fontSize: 20,
        fontWeight: "900"
      },
      menuButton: {
        marginLeft: -14
      },
      iconStyle: {
        color: cTheme.headerIconColor
      },
})