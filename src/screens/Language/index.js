import * as React from "react";
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  View
} from "native-base";
import { Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import { color } from "../../config";
import styles from "./styles";
import { isSelectedLanguage, configureLanguage } from '../../store/reducers/actions';
const { width, height } = Dimensions.get("window");
class Language extends React.Component {
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

  async onChangeText(data) {
    // console.log("onChangeText", text);
    await this.props.configureLanguage(this.props.navigation, data.value);
  }
  render() {
    let props = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.mainView}>
            <Text style={styles.textOne}>Choose your preffered Language</Text>
          </View>
          {
            props.apiService.languages.map((data,index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.onChangeText(data);
                  }}
                  key={index}
                  style={{ flexDirection: "row", margin: 20 }}
                >
                  <Text style={styles.textStyle}>{data.name}</Text>
                  <Icon active name="ios-arrow-forward" style={styles.iconStyle} />
                </TouchableOpacity>
              )
            })
          }
        </Content>

        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate("MobileEnter")}
          style={styles.backButton}
        >
          <Image source={require("../../../../assets/back.png")} />
        </TouchableOpacity> */}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    apiService: state.ApiReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isSelectedLanguage: navigation => dispatch(isSelectedLanguage(navigation)),
    configureLanguage: (navigation, value) => dispatch(configureLanguage(navigation, value)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Language);
