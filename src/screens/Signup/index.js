import * as React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  Modal,
  Image,
  ActivityIndicator
} from "react-native";
import { Container, Button, Text, View, Content } from "native-base";
import styles from "./styles";
import { customTemplate, myCheckBox } from "../../../template";
import { appMsgs } from "../../../config";
import Toast, { DURATION } from "react-native-easy-toast";

//******* Tcomb Form Setup ***********//
var t = require("tcomb-form-native");
var _ = require("lodash");

var Form = t.form.Form;
const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

const PasswordMinLength = t.refinement(t.String, value => {
  return value.length > 5;
});

const Mobile = t.refinement(t.String, value => {
  return value.length === 10;
});

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

var Person = t.struct({
  firstName: t.String, // a required string
  lastName: t.maybe(t.String), // an optional string
  mobile: Mobile,
  email: Email,
  password: PasswordMinLength,
  confirmPass: t.String,
  accepted: t.Boolean // a boolean
});

stylesheet.controlLabel.normal.color = "#00439a";
stylesheet.textbox.normal = {
  backgroundColor: "transparent",
  color: "#fff",
  height: 50,
  padding: 7,
  borderRadius: 5,
  borderBottomWidth: 1,
  borderBottomColor: "rgba(0,0,0,0.4)"
  // marginBottom: 2
};
stylesheet.textbox.error = {
  backgroundColor: "transparent",
  color: "#fff",
  height: 50,
  padding: 7,
  borderRadius: 4,
  borderWidth: 0
  // borderBottomWidth: 1,
  // borderBottomColor: "rgba(255,0,0,0.4)"
  // marginBottom: 2
};

//************* Tcomb setupEND **************//

export interface Props {
  navigation: any;
}
export interface State {}
class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {
      value: {
        firstName: null,
        lastName: "",
        email: null,
        mobile: null,
        password: null,
        confirmPass: null,
        accepted: null
      },
      signupBtn: false
    };
  }

  onChange(val, path) {
    // console.log("val= ", val);
    this.setState({ value: val });
    this.value.getComponent(path).validate();
  }

  onPress() {
    // console.log("press");
    var value = this.value.getValue();
    if (value) {
      if (value.password !== value.confirmPass) {
        this.refs.toast.show(appMsgs.password_Missmatch, DURATION.LENGTH_LONG);
        // console.log("password mismatch");
      } else {
        Keyboard.dismiss();
        // if validation fails, value will be null
        console.log("state value", this.state.value); // value here is an instance of Person
        this.props.signUp(this.state.value);
      }
    }
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
      stylesheet: stylesheet,
      fields: {
        firstName: {
          placeholder: "First Name",
          // stylesheet: stylesheet,
          returnKeyType: "next",
          underlineColorAndroid: "transparent",
          template: customTemplate,
          error: appMsgs.firstName,
          onSubmitEditing: () => {
            this.value.getComponent("lastName").refs.input.focus();
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
          error: appMsgs.valid_email,
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
          error: appMsgs.valid_pass,
          onSubmitEditing: () => {
            this.value.getComponent("confirmPass").refs.input.focus();
          }
        },
        confirmPass: {
          placeholder: "Confirm Password",
          secureTextEntry: true,
          returnKeyType: "done",
          error: appMsgs.valid_confirmPass,
          template: customTemplate
        },
        mobile: {
          placeholder: "Mobile",
          keyboardType: "numeric",
          returnKeyType: "next",
          focus: true,
          blurOnSubmit: false,
          error: appMsgs.valid_mob,
          template: customTemplate,
          onSubmitEditing: () => {
            this.value.getComponent("password").refs.input.focus();
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
                ? this.setState({ accepted: false, signupBtn: false })
                : this.setState({ accepted: true, signupBtn: true });
            }
          }
        }
      }
    }; // optional rendering options (see documentation)
    return (
      <Container style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/bg2.jpg")}
          style={{ flexGrow: 1 }}
        >
          <Toast
            ref="toast"
            style={{ backgroundColor: "gray" }}
            position="top"
            positionValue={100}
            fadeInDuration={300}
            fadeOutDuration={700}
            opacity={0.8}
            textStyle={{ color: "white" }}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 30
            }}
          >
            <Text style={styles.heading}>Sign Up</Text>
          </View>
          <View style={styles.spaceGap} />
          <KeyboardAvoidingView
            behavior="padding"
            enabled
            style={{ height: "100%" }}
          >
            <Content padder>
              <View style={styles.contentView1}>
                <View style={styles.contentView2}>
                  <Form
                    ref={ref => (this.value = ref)}
                    type={Person}
                    options={options}
                    value={this.state.value}
                    onChange={(val, path) => this.onChange(val, path)}
                  />
                  <View style={{ height: 10 }} />
                  {this.state.signupBtn === true ? (
                    <Button style={styles.btn} onPress={this.onPress} block>
                      <Text>Sign Up</Text>
                    </Button>
                  ) : (
                    <Button style={styles.btn} block>
                      <Text style={{ color: "gray" }}>Sign Up</Text>
                    </Button>
                  )}
                </View>
              </View>
              <View style={styles.bottom}>
                <Text style={styles.bottombtnTxt}>Already a member?</Text>
                <TouchableOpacity
                  style={styles.bottombtn}
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text style={styles.bottombtnTxt}>Login</Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 22 }}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.props.modelVisible}
                  onRequestClose={() => {
                    console.log("Modal close");
                  }}
                >
                  <View style={styles.successModal}>
                    {this.props.isLoading === true ? (
                      <View style={{ alignItems: "center" }}>
                        <ActivityIndicator
                          size="large"
                          color="black"
                          style={{ marginBottom: 15 }}
                        />
                        <Text style={styles.modalHead}>Please wait...</Text>
                      </View>
                    ) : this.props.isConnected === true &&
                      this.props.signupFaild === false &&
                      this.props.alreadyExist === false ? (
                      <View style={{ alignItems: "center" }}>
                        <Image
                          style={{ width: 70, height: 70, alignSelf: "center" }}
                          source={require("../../../../assets/done.png")}
                        />
                        <Text style={styles.modalHead}>Successfully</Text>
                        <Text style={{ fontFamily: "CaviarDreams" }}>
                          {" "}
                          Registered
                        </Text>
                      </View>
                    ) : this.props.signupFaild === true ? (
                      <View style={{ alignItems: "center" }}>
                        <Image
                          style={{
                            width: 70,
                            height: 70,
                            alignSelf: "center",
                            marginBottom: 15
                          }}
                          source={require("../../../../assets/faild.png")}
                        />
                        <Text style={styles.modalHead}>Oops!</Text>
                        <Text style={{ fontFamily: "CaviarDreams" }}>
                          {" "}
                          Somthing went wrong
                        </Text>
                      </View>
                    ) : this.props.alreadyExist === true ? (
                      <View style={{ alignItems: "center" }}>
                        <Image
                          style={{
                            width: 70,
                            height: 70,
                            alignSelf: "center",
                            marginBottom: 15
                          }}
                          source={require("../../../../assets/already.png")}
                        />
                        <Text style={styles.modalHead}>Already exist</Text>
                        <Text style={{ fontFamily: "CaviarDreams" }}>
                          {" "}
                          Please use another
                        </Text>
                        <Text style={{ fontFamily: "CaviarDreams" }}>
                          {" "}
                          email id
                        </Text>
                      </View>
                    ) : (
                      <View style={{ alignItems: "center" }}>
                        <Image
                          style={{
                            width: 100,
                            height: 75,
                            alignSelf: "center",
                            marginBottom: 15
                          }}
                          source={require("../../../../assets/nonet.gif")}
                        />
                        <Text style={styles.modalHead}>Offline</Text>
                        <Text style={{ fontFamily: "CaviarDreams" }}>
                          {" "}
                          Please check the internet
                        </Text>
                        <Text style={{ fontFamily: "CaviarDreams" }}>
                          {" "}
                          connection
                        </Text>
                      </View>
                    )}
                  </View>
                </Modal>
              </View>
            </Content>
          </KeyboardAvoidingView>
        </ImageBackground>
      </Container>
    );
  }
}

export default Login;
