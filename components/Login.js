import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { RkTextInput, RkText, RkButton } from 'react-native-ui-kitten';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleClick() {
    const { signInUser } = this.props;
    const { email, password } = this.state;
    signInUser({ email, password });
  }

  handleInputChange(id, text) {
    this.setState({
      [id]: text
    });
  }

  render() {
    return (
      <View style={styles.login}>
        <RkText rkType='header' >Login</RkText>
        <View style={styles.form}>
          <RkTextInput
            rkType='rounded'
            placeholder='Email'
            keyboardType="email-address"
            onChangeText={(text) => { this.handleInputChange('email', text) }}
          />
          <RkTextInput
            secureTextEntry={true}
            rkType='rounded'
            placeholder='Password'
            onChangeText={(text) => { this.handleInputChange('password', text) }}
          />
          <RkButton
            rkType='primary '
            style={styles.sendBtn}
            onPress={this.handleClick}>
              Entrar
          </RkButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  form: {
    marginTop: 16,
    alignItems: 'center',
  },
  sendBtn: {
    marginTop: 16,
  }
});
