import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { RkTextInput, RkText, RkButton } from 'react-native-ui-kitten';

export default class Login extends Component {

  handleClick(event) {
    console.log('add login');
  }

  render() {
    return (
      <View style={styles.login}>
        <RkText rkType='header' >Login</RkText>
        <View style={styles.form}>
          <RkTextInput rkType='rounded' placeholder='Login'/>
          <RkTextInput secureTextEntry={true} rkType='rounded'  placeholder='Password'/>
          <RkButton rkType='primary ' style={styles.sendBtn} onPress={this.handleClick}>Entrar</RkButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    marginTop: 16,
    padding: 16,
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  form: {
    marginTop: 16,
    alignItems: 'center',
  },
  sendBtn: {
    marginTop: 16,
  }
});
