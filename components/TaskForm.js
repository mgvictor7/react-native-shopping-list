import React, { Component } from 'react';
import { StyleSheet, Modal,  View } from 'react-native';
import { Text, Icon, FormLabel, FormInput, Button } from 'react-native-elements'
import CustomPicker from './CustomPicker';
import color from '../lib/colors';

export default class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      products: {},
      shops: {},
      quantity: null,
      productId: null,
      shopId: null,
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { products, shops} = nextProps;
    this.setState({
      products,
      shops,
    });
  }

  handleChangeInput(id, value) {
    this.setState({
      [id]: value
    });
  }

  handleSubmit() {
    const { products, shops, productId, shopId, quantity } = this.state;
    const data = {
      product: products[productId],
      shop: shops[shopId],
      task: {
        done: false,
        quantity
      }
    };

    this.props.onShowChange();

    this.setSate({
      quantity: null,
      productId: null,
      shopId: null,
    });

    this.props.onSubmit(data);
  }

  render() {
    const { shops, products, productId, shopId } = this.state;
    const { modalVisible, onShowChange } = this.props;

    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modalVisible}
        onRequestClose={onShowChange}
      >
        <View>
          <View style={styles.modalHeader}>
            <Icon
              raised
              name='remove'
              type='font-awesome'
              color='#ccc'
              size={16}
              onPress={this.props.onShowChange}
            />
          </View>
          <View style={styles.formContent}>
            <Text style={styles.title}>Añadir nuevo elemento a la lista</Text>
            <FormLabel>Producto</FormLabel>
            <CustomPicker
              objectData={products}
              elementName="productId"
              elementLabel="producto"
              elementSelected={productId}
              onInputChange={this.handleChangeInput}
            />
            <FormLabel>Cantidad</FormLabel>
            <FormInput
              style={styles.input}
              onChangeText={(text) => this.handleChangeInput('quantity', text)}
            />
            <FormLabel>Tienda</FormLabel>
            <CustomPicker
              objectData={shops}
              elementName="shopId"
              elementLabel="tienda"
              elementSelected={shopId}
              onInputChange={this.handleChangeInput}
            />
            <Button
              large
              title='Guardar'
              backgroundColor={color.defaultPrimaryColor}
              buttonStyle={styles.button}
              onPress={this.handleSubmit}
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
    padding: 16,
  },
  input: {
    marginRight: 10,
  },
  button: {
    marginTop:16,
  }
});
