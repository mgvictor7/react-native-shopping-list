import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {  Text } from 'react-native-elements';

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
        navigation.navigate('Home');
      }
    }
    return (
      <View style={styles.loading}>
        <Text h2>Loading</Text>
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
