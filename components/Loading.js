import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {  RkText } from 'react-native-ui-kitten';

export default class Loading extends Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    const { isFetching, authenticated, navigation } = this.props;
    if (!isFetching) {
      if (!authenticated) {
        navigation.navigate('Login');
      } else {
        console.log('User is logeaded');
      }
    }
    return (
      <View style={styles.loading}>
        <RkText rkType='header' >Loading</RkText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
