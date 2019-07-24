import * as React from "react";
import {

  ActivityIndicator
} from "react-native";
import { connect } from 'react-redux';
import { Container, Button, Text, View, Content } from "native-base";
import styles from "./styles";
import { isSelectedLanguage } from '../../store/reducers/actions';
class Splash extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    setTimeout(async() => {
      await this.props.isSelectedLanguage(this.props.navigation);
    }, 10)
  }

  render() {

    return (
      <Container style={styles.container}>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isSelectedLanguage: navigation => dispatch(isSelectedLanguage(navigation)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
