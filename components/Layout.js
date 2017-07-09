import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, DrawerLayoutAndroid, Button } from 'react-native';
import ItemMenu from './ItemMenu';

export default class Layout extends Component {
  constructor() {
    super();
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickButton() {
    const {  signOutUser } = this.props;
    signOutUser && signOutUser();
  }

  render() {
    const { user } = this.props;

    var navigationView = (
      <View style={styles.navigationView}>
          <ItemMenu
            textItem={`Hola ${user && user.email}`}
          />
          <Button
            title='Cerrar'
            onPress={this.handleClickButton}
          />
      </View>
    );

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
