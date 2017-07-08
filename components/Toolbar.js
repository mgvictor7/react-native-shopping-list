import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class Toolbar extends Component {
  render() {
    return (
      <Header
        leftComponent={{ icon: 'menu' }}
        centerComponent={{ text: 'MY TITLE' }}
        rightComponent={{ icon: 'home' }}
      />
    );
  }
}
