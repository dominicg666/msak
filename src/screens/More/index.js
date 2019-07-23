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
  Tabs,
  List,
  ListItem
} from "native-base";
import { Dimensions, Image, TouchableOpacity, FlatList } from "react-native";
import Carousel from "react-native-looped-carousel";
import { color } from "../../config";
import styles from "./styles";
const routes = [
  {
    route: "OfferListing",
    caption: "Profile",
    icon: require("../../assets/menu_user.png")
  },
  {
    route: "OfferListing",
    caption: "Plan Details",
    icon: require("../../assets/menu_money.png")
  },
  {
    route: "OfferListing",
    caption: "Support",
    icon: require("../../assets/menu_chat.png")
  },
  {
    route: "OfferListing",
    caption: "Settings",
    icon: require("../../assets/menu_settings.png")
  },
  {
    route: "OfferListing",
    caption: "Contact Us",
    icon: require("../../assets/menu_telephone.png")
  },
  {
    route: "OfferListing",
    caption: "About App",
    icon: require("../../assets/menu_logo.png")
  }
];

const { width, height } = Dimensions.get("window");
class More extends React.Component{
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      size: { width, height: 200 }
    };
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  handleBackPress = () => {
    this.props.navigation.navigate("OfferPage");
    return true;
  };
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View />
          <FlatList
            style={{ marginTop: 10 }}
            data={routes}
            keyExtractor={(item,index) => index+""}
            renderItem={({ item,index })  => {
              return (
                <ListItem style={{ marginLeft: 0 }} button>
                  <View style={styles.menuList}>
                    <View style={styles.iconView}>
                      <Image
                        style={styles.coupenimageStyle}
                        source={item.icon}
                      />
                    </View>
                    <View style={styles.headingView}>
                      <Text style={styles.profileText}>{item.caption}</Text>
                    </View>
                    <View style={styles.iconArea}>
                      <Icon
                        style={styles.arrowView}
                        active
                        name="ios-arrow-forward"
                        style={styles.iconStyle}
                      />
                    </View>
                  </View>
                  {/* <Icon name={data.icon} size={20} color="black" />
                  <Text style={{ paddingLeft: 10 }}>{data.caption}</Text> */}
                </ListItem>
              );
            }}
          />
          <View style={styles.versionText}>
            <Text style={styles.textVertion}>Vertion 1.345 Build 240</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default More;
