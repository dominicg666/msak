import * as React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  Modal,
  Image
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

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

var forgotPass = t.struct({
  email: Email
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
  ForgotForm: any;
  // onForgot: Function,
}
export interface State {}
class Forgot extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {
      value: {
        email: null
      },
			modalVisible: false
    };
  }

  onChange(val, path) {
    console.log("val= ", val);
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
      this.setState({ modalVisible: true });
      this.props.navigation.navigate("Login");
			setTimeout(() => {
				this.setState({
					modalVisible: false
				});
			}, 2500);
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
          returnKeyType: "done",
          focus: true,
          blurOnSubmit: false,
          template: customTemplate
        }
      }
    }; // optional rendering options (see documentation)
    return (
      <Container style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/bg2.jpg")}
          style={{ flexGrow: 1 }}
        >
          <View style={styles.header}>
            <View style={{ paddingTop: 30 }}>
              <Text style={styles.headerTxt}>Forgot Password?</Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <Text style={styles.headerSubTxt} >
                We just need your Emai id to send you password reset
                instructions.
              </Text>
            </View>
          </View>
          <View style={{ height: "8%" }} />
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
                    type={forgotPass}
                    options={options}
                    value={this.state.value}
                    onChange={(val, path) => this.onChange(val, path)}
                  />
                  <View style={{ height: 20 }} />
                  <Button style={styles.btn} onPress={this.onPress} block>
                    <Text>Reset Password</Text>
                  </Button>
                </View>
              </View>
              <View style={{ height: 70 }} />
              <View style={styles.bottom}>
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
									visible={this.state.modalVisible}
									onRequestClose={() => {
										console.log("model close");
									}}
								>
									<View style={styles.successModel}>
										<View style={{ alignItems: "center" }}>
											<Image
												style={styles.doneImg}
												source={require("../../../../assets/done.png")}
											/>
											<Text style={styles.modelTxt} >
												Password reset instructions
											</Text>
											<Text style={styles.modelTxt}>
												are send to
											</Text>
											<Text style={{fontSize: 13,fontWeight:"bold" }}>
												{this.state.value.email}
											</Text>
										</View>
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

export default Forgot;
