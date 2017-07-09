import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ItemMenu  extends Component {
  render() {
    const { textItem, onClick } = this.props;
    return (
      <View style={styles.item}>
        <Text>
          {textItem}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
  },
});
