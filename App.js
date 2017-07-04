import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, DrawerLayoutAndroid } from 'react-native';
import Toolbar from './components/Toolbar';
import Login from './components/Login';

export default class App extends Component {

  onActionSelected(position) {
    console.log(position);
  }
  render() {
    var navigationView = (
      <View style={styles.navigationView}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );

    return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <Toolbar />
          <Login />
        </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationView: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 16
  }
});
