import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import Auth from './containers/Auth';
import Login from './containers/Login';
import Home from './containers/Home';
import configureStore from './store/configureStore';

const store = configureStore();

const Routes = StackNavigator({
  Loading: { screen: Auth },
  Login: { screen: Login },
  Home: { screen: Home },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
            <Routes />
        </Provider>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    backgroundColor: '#fff',
  },
});
