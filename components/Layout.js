import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, DrawerLayoutAndroid } from 'react-native';
import Toolbar from './Toolbar';

export default class Layout extends Component {
  constructor() {
    super();
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  handleDrawer() {
    console.log('entra');
  }

  render() {
    var navigationView = (
      <View style={styles.navigationView}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );

    console.log(this.props);

    return (
      <DrawerLayoutAndroid
        ref={(_drawer) => this.drawer = _drawer}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <ScrollView style={styles.container}>
          {this.props.children}
        </ScrollView>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#fff',
  },
  navigationView: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 16
  },
});
