import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import {
  Image,
  View,
  ImageBackground,
  BackHandler,
  TouchableOpacity
} from "react-native";
import { NavigationActions } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";

const routes = [
  {
    route: "OfferListing",
    caption: "Comming Soon",
    icon: "home-variant"
  }
];

export interface Props {
  navigation: any;
}
export interface State {}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Login" })]
});
export default class  extends React.Component<Props, State> {
  componentDidMount() {
    console.log("avatar : ", this.props.userDetails);
  }
  render() {
    return (
      <Container>
        <Content>
          {/* <View style={styles.contentView}>
            <ImageBackground
              source={require("../../../../assets/bg2.jpg")}
              style={{ flexGrow: 1 }}
            >
              <View style={styles.topContentView1}>
                <View style={styles.topContentView2}>
                  {this.props.userDetails.uAvatar ? (
                    <Image
                      style={styles.avatar}
                      // source={require("../../../../assets/avatar.png")}
                      source={{ uri: this.props.userDetails.uAvatar }}
                    />
                  ) : (
                    <Image
                      style={styles.avatar}
                      source={require("../../../../assets/avatar.png")}
                      // source={{uri:this.props.userDetails.uAvatar}}
                    />
                  )}
                </View>
              </View>
              <View style={styles.avatarTxtView}>
                <Text style={styles.avatarTxt1}>
                  {this.props.userDetails.uName}
                </Text>
                <Text style={styles.avatarTxt2}>
                  {this.props.userDetails.uEmail}
                </Text>
              </View>
              <View style={styles.editView1}>
                <View style={styles.editView2}>
                  <View style={styles.editView3}>
                    <TouchableOpacity
                      onPress={() => {
                        console.log("pressss", this.props.userDetails.uAvatar);
                        this.props.navigation.navigate("Profile");
                      }}
                    >
                      <MaterialIcons
                        name="mode-edit"
                        color="rgba(0, 0, 0, 0.9)"
                        size={21}
                        style={styles.editIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View> */}
          <List
            style={{ marginTop: 10 }}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => {
                    data.route === "Login"
                      ? (this.props.navigation.dispatch(resetAction),
                        this.props.logOut())
                      : this.props.navigation.navigate(data.route);
                    data.route === "Exit"
                      ? BackHandler.exitApp()
                      : this.props.navigation.navigate(data.route);
                  }}
                >
                  <Icon name={data.icon} size={20} color="black" />
                  <Text style={{ paddingLeft: 10 }}>{data.caption}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
