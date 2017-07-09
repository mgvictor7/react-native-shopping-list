import React, { Component } from 'react';
import { View, StyleSheet,  TextInput } from 'react-native';
import { Text, Button  } from 'react-native-elements';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { navigation } = this.props;
    if (nextProps.authenticated) {
      navigation.navigate('Home');
    }
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
            style={styles.inputText}
            placeholder='Email'
            keyboardType="email-address"
            onChangeText={(text) => { this.handleInputChange('email', text) }}
          />
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder='Password'
            onChangeText={(text) => { this.handleInputChange('password', text) }}
          />
          <Button
            title="Entrar"
            style={styles.sendBtn}
            backgroundColor='#397af8'
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
    // alignItems: 'center',
    padding: 16,
  },
  form: {
    marginTop: 16,
    // alignItems: 'center',
  },
  inputText: {
    height: 40,
  },
  sendBtn: {
    marginTop: 16,
  }
});
