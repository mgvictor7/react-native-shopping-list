import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import Auth from './containers/Auth';
import Login from './containers/Login';
import configureStore from './store/configureStore';

const store = configureStore();

const Routes = StackNavigator({
  Loading: { screen: Auth },
  Login: { screen: Login },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
