import React, { Component } from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import color from '../lib/colors';

export default class CustomPicker extends Component {
  constructor() {
    super();
    this.state = {
      objectData: {}
    };
  }

  componentWillMount() {
    const {objectData} = this.props;
    this.setState({
      objectData
    });
  }

  componentWillReceiveProps(nextProps) {
    const {objectData} = nextProps;
    this.setState({
      objectData
    });
  }

  render() {
    const { onInputChange, elementName, elementSelected, elementLabel } = this.props;
    const { objectData } = this.state;
    const objectIds = Object.keys(objectData);

    return (
      <View style={styles.picker}>
        <Picker
          selectedValue={elementSelected}
          onValueChange={(itemValue, itemIndex) =>  onInputChange(elementName, itemValue)}
        >
          <Picker.Item label="" value="-1" />
          {objectIds && objectIds.length ?
            objectIds.map(objectId => (
              <Picker.Item key={objectId} label={objectData[objectId].name} value={objectId} />
            ))
            :
            null
          }
          <Picker.Item label={`+ Añadir ${elementLabel}`} value="add" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: color.dividerColor,
  }
});
