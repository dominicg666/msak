import * as React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Keyboard,
  Modal,
  ActivityIndicator
} from "react-native";
import { Container, Button, Text, View, Content } from "native-base";
import styles from "./styles";
import {customTemplate} from "../../../template";
import { appMsgs } from "../../../config";

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

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

var Person = t.struct({
  email: Email,
  password: PasswordMinLength
  // rememberMe: t.Boolean // a boolean
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
  borderWidth: 0,
  borderBottomWidth: 1,
  borderBottomColor: "rgba(255,0,0,0.4)"
  // marginBottom: 2
};

//************* Tcomb setupEND **************//

export interface Props {
  loginForm: any;
  onLogin: Function;
}
export interface State {}
class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {
      value: {
        email: null,
        password: null
      }
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
      Keyboard.dismiss();
      // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
      // this.refs.toast.show("Successfully registerd!",DURATION.LENGTH_LONG);
      // clear content from all textbox
      this.props.logIn(value);
      // this.setState({ value: null });
      // this.props.navigation.navigate("Login");
			// this.props.navigation.navigate("Drawer");
    }
  }
  render() {
    var options = {
      auto: "none",
      stylesheet: stylesheet,
      fields: {
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
            this.value.getComponent("password").refs.input.focus();
          }
        },
        password: {
          placeholder: "Password",
          secureTextEntry: true,
          template: customTemplate,
          returnKeyType: "done",
          error: appMsgs.valid_pass,
        }
      }
    }; // optional rendering options (see documentation)
    return (
      <Container style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/bg2.jpg")}
          style={{ flexGrow: 1 }}
        >
          <View style={styles.logoView}>
            <Image
              source={require("../../../../assets/1.png")}
              style={styles.logo}
            />
            <Text style={styles.appName}>
              BluePrint
            </Text>
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
									<View style={{ height: 20 }} />
									<Button style={styles.btn} onPress={this.onPress} block>
										<Text>Login</Text>
									</Button>
								</View>
							</View>
							<View style={{height:30}}/>
							<View style={styles.bottom}>
								<TouchableOpacity
									style={[styles.bottombtn, { marginLeft: "8%", width: "40%" }]}
									onPress={() => this.props.navigation.navigate("Forgot")}
								>
									<Text style={styles.bottombtnTxt}>Forgot password?</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={[styles.bottombtn, { width: "23%", alignItems: "center" }]}
								>
									<Text style={styles.bottombtnTxt} />
								</TouchableOpacity>
								<TouchableOpacity
									style={[
										styles.bottombtn,
										{ alignItems: "flex-end", width: "20%" }
									]}
									onPress={() => this.props.navigation.navigate("Signup")}
								>
									<Text style={styles.bottombtnTxt}>Signup!</Text>
								</TouchableOpacity>
							</View>

							<View style={{ marginTop: 22 }} >
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
                        <ActivityIndicator size="large" color="black" style={{ marginBottom:15 }} />
                        <Text
                          style={styles.modalHead}
                        >
                          Please wait...
                        </Text>
                      </View>
                    ) : (
                      this.props.isConnected === true &&
                      this.props.loginErr === false &&
                      this.props.incorrectPass === false ? (
                        <View style={{ alignItems: "center" }}>
                          <Image
                            style={{ width: 70, height: 70, alignSelf: "center" }}
                            source={require("../../../../assets/done.png")}
                          />
                          <Text
                            style={styles.modalHead}
                          >
                            Successfully
                          </Text>
                          <Text style={{ fontFamily: "CaviarDreams" }}>
                            {" "}
                            Logged In
                          </Text>
                        </View>
                      ) : this.props.loginErr === true ? (
                        <View style={{ alignItems: "center" }}>
                          <Image
                            style={{ width: 70, height: 70, alignSelf: "center",  marginBottom:15 }}
                            source={require("../../../../assets/faild.png")}
                          />
                          <Text
                            style={styles.modalHead}
                          >
                            Oops!
                          </Text>
                          <Text style={{ fontFamily: "CaviarDreams" }}>
                            {" "}
                            Somthing went wrong
                          </Text>
                        </View>
                      ) : this.props.incorrectPass === true ? (
                        <View style={{ alignItems: "center" }}>
                          <Image
                            style={{ width: 70, height: 70, alignSelf: "center",  marginBottom:15 }}
                            source={require("../../../../assets/already.png")}
                          />
                          <Text style={styles.modalHead}>
                            Incorrect
                          </Text>
                          <Text style={{ fontFamily: "CaviarDreams" }}>
                            {" "}
                            Email or Password
                          </Text>
                        </View>
                      ) : (
                        <View style={{ alignItems: "center" }}>
                          <Image
                            style={{ width: 100, height: 75, alignSelf: "center", marginBottom:15 }}
                            source={require("../../../../assets/nonet.gif")}
                          />
                          <Text
                            style={styles.modalHead}
                          >
                            Offline
                          </Text>
                          <Text style={{ fontFamily: "CaviarDreams" }}>
                            {" "}
                            Please check the internet
                          </Text>
                          <Text style={{ fontFamily: "CaviarDreams" }}>
                            {" "}
                            connection
                          </Text>
                        </View>
                      )
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
