import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import {  Text } from 'react-native-elements';

export default class Loading extends Component {
  constructor() {
    super();
    this.handleRedirection = this.handleRedirection.bind(this);
  }
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.handleRedirection(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.handleRedirection(nextProps);
  }

  handleRedirection(data) {
    const { isFetching, authenticated, navigation } = data;
    if (!isFetching) {
      if (!authenticated) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('Home');
      }
    }
  }

  render() {
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

Loading.propTypes  = {
  isFetching: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired, 
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
}
