import * as React from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  View
} from "native-base";
import { SearchBar } from "react-native-elements";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      search: false
    };
  }

  onChangeText(text) {
    // console.log("onChangeText", text);
  }
  render() {
    return (
      <Container style={styles.container}>
        {this.state.search === false ? (
          <View>
            <Header style={styles.header}>
              <View style={[styles.headerView, { width: "15%" }]}>
                <Button
                  style={styles.menuButton}
                  transparent
                  // onPress={() => this.props.navigation.navigate("DrawerOpen")}
                >
                  <Icon active name="menu" style={styles.iconStyle} />
                </Button>
              </View>
              <View style={styles.headerTxtView}>
                <Text style={styles.headerTxt}>HOME</Text>
              </View>
              <View style={styles.rightBtn}>
                <Button
                  transparent
                  onPress={() => this.setState({ search: true })}
                >
                  <Icon active name="search" style={styles.iconStyle} />
                </Button>
              </View>
            </Header>
          </View>
        ) : (
          <View>
            <Header style={styles.header}>
              <View style={[styles.headerView, { width: "10%" }]}>
                <Button
                  style={styles.menuButton}
                  transparent
                  onPress={() => this.setState({ search: false })}
                >
                  <Icon active name="ios-arrow-back" style={styles.iconStyle} />
                </Button>
              </View>
              <View style={styles.searchBarView}>
                <SearchBar
                  lightTheme
                  searchIcon={null} // You could have passed `null` too
                  onChangeText={text => this.onChangeText(text)}
                  // onClear={someMethod}
                  clearIcon
                  containerStyle={styles.header}
                  inputStyle={styles.container}
                  placeholder="Search"
                />
              </View>
            </Header>
          </View>
        )}
        <Content>
          <View style={styles.contentView}>
            <Text style={[styles.contentTxt, { fontSize: 20 }]}>
              WHITE SPACE
            </Text>
            <Text style={[styles.contentTxt, { fontSize: 15 }]}>for</Text>
            <Text style={[styles.contentTxt, { fontSize: 22 }]}>HOME PAGE</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
