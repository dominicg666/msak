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

import styles from "./styles";
export interface Props {
  navigation: any;
}
export interface State {}
class PageTwo extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      modelVisible: false
    };
  }
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
            <Text style={styles.headerTxt}>PAGE 2</Text>
          </View>
          <View style={styles.rightBtn} />
        </Header>

        <Content>
          <View style={styles.contentView}>
            <Text style={[styles.contentTxt, { fontSize: 20 }]}>
              WHITE SPACE
            </Text>
            <Text style={[styles.contentTxt, { fontSize: 15 }]}>for</Text>
            <Text style={[styles.contentTxt, { fontSize: 22 }]}>PAGE 2</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default PageTwo;
