import * as React from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  View,
  Icon
} from "native-base";
// import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";
export interface Props {
  navigation: any;
}
export interface State {}
class Settings extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <View style={styles.headerView1}>
            <Button
              style={{ marginLeft: -14 }}
              transparent
              // onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon active name="menu" style={styles.iconStyle} />
            </Button>
          </View>
          <View style={styles.headerView2}>
            <Text style={styles.headerTxt}>Settings</Text>
          </View>
          <View style={styles.rightBtn} />
        </Header>

        <Content>
          <View style={styles.contentView}>
            <Text style={[styles.contentTxt, { fontSize: 20 }]}>
              WHITE SPACE
            </Text>
            <Text style={[styles.contentTxt, { fontSize: 15 }]}>for</Text>
            <Text style={[styles.contentTxt, { fontSize: 22 }]}>Settings</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Settings;
