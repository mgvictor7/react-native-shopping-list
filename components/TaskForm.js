import React, { Component } from 'react';
import { StyleSheet, Modal, TouchableHighlight, View, Picker } from 'react-native';
import { Text, Icon, FormLabel, FormInput, Button } from 'react-native-elements'
import color from '../lib/colors';

export default class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      shops: [],
      modalVisible: false,
      quantity: null,
      product: null,
    };

    this.setModalVisible = this.setModalVisible.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {modalVisible} = nextProps;
    this.setModalVisible(modalVisible);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleChangeInput(id, value) {
    console.log(value);
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
      >
        <View>
          <View style={styles.modalHeader}>
            <Icon
              raised
              name='remove'
              type='font-awesome'
              color='#ccc'
              size={16}
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            />
          </View>
          <View style={styles.formContent}>
            <Text h4>Añadir nuevo elemento a la lista</Text>
            <FormLabel>Producto</FormLabel>
            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.product}
                onValueChange={(itemValue, itemIndex) =>  this.handleChangeInput('product', itemValue)}
              >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <FormLabel>Cantidad</FormLabel>
            <FormInput onChangeText={(text) => this.handleChangeInput('quantity', text)} />
            <FormLabel>Tienda</FormLabel>

            <Button
              large
              title='Guardar'
              backgroundColor={color.defaultPrimaryColor}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalHeader: {
    paddingLeft: 16,
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderColor: color.dividerColor,
  },
  formContent: {
    flexDirection: 'column',
    margin: 16,
  },
  picker: {
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: color.dividerColor,
  }
});
