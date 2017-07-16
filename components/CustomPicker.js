import React, { Component } from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import color from '../lib/colors';

export default class CustomPicker extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    const { objectData } = this.props;
    if  (objectData) {
      this.setState({
        data: Object.values(objectData).sort((a, b)  => a.name.localeCompare( b.name)),
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { objectData } = nextProps;
    if  (objectData) {
      this.setState({
        data: Object.values(objectData).sort((a, b)  => a.name.localeCompare( b.name)),
      });
    }
  }

  render() {
    const { onInputChange, elementName, elementSelected, elementLabel } = this.props;
    const { data } = this.state;

    return (
      <View style={styles.picker}>
        <Picker
          selectedValue={elementSelected}
          onValueChange={(itemValue, itemIndex) =>  onInputChange(elementName, itemValue)}
        >
          <Picker.Item label="" value="-1" />
          {data.length ?
            data.map(element => (
              <Picker.Item key={element._id} label={element.name} value={element._id} />
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
