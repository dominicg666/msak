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
import { TouchableHighlight, Keyboard } from "react-native";
import styles from "./styles";
import { customTemplate } from "../../../template";
import myCheckBox from "./myCheckBox";

//******* Tcomb Form Setup ***********//
var t = require("tcomb-form-native");
var _ = require("lodash");

var Form = t.form.Form;
const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

const PasswordMinLength = t.refinement(t.String, value => {
  return value.length > 6;
});

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

var Person = t.struct({
  firstName: t.String, // a required string
  lastName: t.maybe(t.String), // an optional string
  mobile: t.Number, // a required number
  email: Email,
  password: PasswordMinLength,
  confirmPass: t.String,
  accepted: t.Boolean // a boolean
});

stylesheet.controlLabel.normal.color = "#00439a";
stylesheet.textbox.normal = {
  backgroundColor: "transparent",
  color: "#000",
  height: 35,
  padding: 7,
  borderRadius: 5
  // borderBottomWidth: 1,
  // borderBottomColor: "rgba(0,0,0,0.4)"
  // marginBottom: 2
};
stylesheet.textbox.error = {
  backgroundColor: "transparent",
  color: "#000",
  height: 35,
  padding: 7,
  borderRadius: 4,
  borderWidth: 0,
  borderBottomWidth: 1,
  borderBottomColor: "rgba(255,0,0,0.4)"
  // marginBottom: 2
};

//************* Tcomb setupEND **************//

export interface Props {
  navigation: any;
}
export interface State {}
class PageThree extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {
      value: {
        firstName: null,
        lastName: null,
        email: null,
        mobile: null,
        password: null,
        confirmPass: null,
        accepted: null
      }
    };
  }

  onChange(val, path) {
    console.log("val= ", val);
    this.setState({ value: val });
    this.value.getComponent(path).validate();
  }

  onPress() {
    console.log("press");
    var value = this.value.getValue();
    if (value) {
      Keyboard.dismiss();
      // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
      // clear content from all textbox
      this.setState({ value: null });
    }
  }
  handleClick() {
    console.log("Click happened");
  }

  render() {
    var options = {
      auto: "none",
      order: [
        "firstName",
        "lastName",
        "email",
        "mobile",
        "password",
        "confirmPass",
        "accepted"
      ],
      // stylesheet: stylesheet,
      fields: {
        firstName: {
          placeholder: "First Name",
          // stylesheet: stylesheet,
          returnKeyType: "next",
          underlineColorAndroid: "transparent",
          template: customTemplate,
          error: "Required",
          onSubmitEditing: () => {
            this.value.getComponent("lastName").refs.input.focus();
          }
        },
        accepted: {
          template: myCheckBox,
          placeholder: "I accept the terms of services",
          returnKeyType: "next",
          autoCapitalize: "none",
          focus: true,
          blureOnSubmit: false,
          config: {
            selected: this.state.accepted,
            onAgreeSwitchClicked: () => {
              this.state.accepted === true
                ? this.setState({ accepted: false })
                : this.setState({ accepted: true });
            }
          }
        },
        lastName: {
          placeholder: "Last Name",
          template: customTemplate,
          returnKeyType: "next",
          onSubmitEditing: () => {
            this.value.getComponent("email").refs.input.focus();
          }
        },
        email: {
          placeholder: "Email",
          auto: "none",
          autoCapitalize: "none",
          keyboardType: "email-address",
          error: "Enter a valid email",
          returnKeyType: "next",
          focus: true,
          blurOnSubmit: false,
          template: customTemplate,
          onSubmitEditing: () => {
            this.value.getComponent("mobile").refs.input.focus();
          }
        },
        password: {
          placeholder: "Password",
          secureTextEntry: true,
          template: customTemplate,
          returnKeyType: "next",
          error: "Must contain atleast 6",
          onSubmitEditing: () => {
            this.value.getComponent("confirmPass").refs.input.focus();
          }
        },
        confirmPass: {
          placeholder: "Confirm Password",
          secureTextEntry: true,
          returnKeyType: "done",
          template: customTemplate
        },
        mobile: {
          placeholder: "Mobile",
          keyboardType: "numeric",
          returnKeyType: "next",
          focus: true,
          blurOnSubmit: false,
          error: "Must contain 10 numbers",
          template: customTemplate,
          onSubmitEditing: () => {
            this.value.getComponent("password").refs.input.focus();
          }
        }
      }
    }; // optional rendering options (see documentation)
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
            <Text style={styles.headerTxt}>PAGE 3</Text>
          </View>
          <View style={styles.rightBtn} />
        </Header>

        <Content padder>
          <View style={styles.contentView1}>
            <View style={styles.contentView2}>
              {/* <Text style={{fontSize:20, fontFamily:"CaviarDreams"}}>WHITE SPACE</Text>
            <Text style={{fontSize:15, fontFamily:"CaviarDreams"}}>for</Text>
            <Text style={{fontSize:22, fontFamily:"CaviarDreams"}}>PAGE 3</Text> */}
              <Form
                ref={ref => (this.value = ref)}
                type={Person}
                options={options}
                value={this.state.value}
                onChange={(val, path) => this.onChange(val, path)}
              />
              <TouchableHighlight
                style={styles.button}
                onPress={this.onPress}
                underlayColor="#99d9f4"
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default PageThree;
