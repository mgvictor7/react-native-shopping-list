import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import Layout from './Layout';

export default class Home extends Component {
  static navigationOptions = (aux) => ({
    title: 'Shopping List',
    headerLeft: (
      <Icon
        name="menu"
        size={30}
        type="entypo"
        style={{ paddingLeft: 10 }}
        onPress={() => { console.log(aux)}}
      />
    ),
  });
  render() {
    console.log(this.props);
    return (
        <Layout>
          <Text h1>Home</Text>
        </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
