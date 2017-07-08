import React, { Component } from 'react';
import { View, StyleSheet,  TextInput } from 'react-native';
import { Text, Button  } from 'react-native-elements';

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
        <Text h2>Login</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.sendBtn}
            placeholder='Email'
            keyboardType="email-address"
            onChangeText={(text) => { this.handleInputChange('email', text) }}
          />
          <TextInput
            style={styles.sendBtn}
            secureTextEntry={true}
            placeholder='Password'
            onChangeText={(text) => { this.handleInputChange('password', text) }}
          />
          <Button
            title="Entrar"
            style={styles.sendBtn}
            onPress={this.handleClick}
          />
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
