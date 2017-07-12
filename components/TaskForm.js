import React, { Component } from 'react';
import { StyleSheet, Modal, TouchableHighlight, View, Picker } from 'react-native';
import { Text, Icon, FormLabel, FormInput, Button } from 'react-native-elements'
import CustomPicker from './CustomPicker';
import color from '../lib/colors';

export default class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      products: {},
      shops: {},
      modalVisible: false,
      quantity: null,
      product: null,
      shop: null,
    };

    this.setModalVisible = this.setModalVisible.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {modalVisible, products, shops} = nextProps;
    this.setState({
      products,
      shops,
    });
    this.setModalVisible(modalVisible);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleChangeInput(id, value) {
    this.setState({
      [id]: value
    });
  }

  render() {
    const { shops, products, product, shop } = this.state;
    const shopsIds = Object.keys(shops);
    const productsIds = Object.keys(products);

    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() =>  this.setModalVisible(!this.state.modalVisible)}
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
            <Text style={styles.title}>Añadir nuevo elemento a la lista</Text>
            <FormLabel>Producto</FormLabel>
            <CustomPicker
              objectData={products}
              elementName="product"
              elementLabel="producto"
              elementSelected={product}
              onInputChange={this.handleChangeInput}
            />
            <FormLabel>Cantidad</FormLabel>
            <FormInput onChangeText={(text) => this.handleChangeInput('quantity', text)} />
            <FormLabel>Tienda</FormLabel>
            <CustomPicker
              objectData={shops}
              elementName="shop"
              elementLabel="tienda"
              elementSelected={shop}
              onInputChange={this.handleChangeInput}
            />
            <Button
              large
              title='Guardar'
              backgroundColor={color.defaultPrimaryColor}
              buttonStyle={styles.button}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
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
  button: {
    marginTop:16,
  }
});
