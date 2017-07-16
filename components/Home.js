import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Modal, Text, View, Button } from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Layout from './Layout';
import TaskForm from './TaskForm';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      tasks: null,
      products: null,
      shops: null,
      tasks: null,
      modalVisible: false,
    };

    this.renderList = this.renderList.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.handleCheckItem = this.handleCheckItem.bind(this);
    this.handleShowForm = this.handleShowForm.bind(this);
  }

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

  componentWillMount() {
    this.props.fetchTaskList();
    this.props.fetchProductList();
    this.props.fetchShopList();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tasks: nextProps.tasks,
      products: nextProps.products,
      shops: nextProps.shops,
    });
  }

  handleCheckItem(id, event) {
    const { touchBank } = event.touchHistory;
    const { currentTimeStamp,  startTimeStamp } = touchBank[0];
    if (currentTimeStamp - startTimeStamp > 500) {
      const { tasks } = this.state;
      tasks[id].done = !tasks[id].done;
      this.setState({
        tasks,
      });
      this.props.checkedTask(id, tasks[id].done);
    }
  }

  handleShowForm() {
    console.log('entra');
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  renderItem(id, item) {
    const { products, shops } = this.state;
    const product = products[item.productId];
    const shop = shops[item.shopId];
    const title = `${item.quantity} de ${product && product.name} en ${shop && shop.name}`;
    return (
      <ListItem
        key={id}
        title={title}
        hideChevron
        titleStyle={[styles.item, item.done ? styles.itemDone : null]}
        onPress={(event) => { this.handleCheckItem(id, event); }}
      />
    );
  }

  renderList() {
    const { tasks } = this.state;
    if (tasks) {
      const objectIds = Object.keys(tasks);
      return (
        <List style={styles.wrapperItem}>
          {objectIds.map((objectId) => (
              this.renderItem(objectId, tasks[objectId])
            ))
          }
        </List>
      );
    }
    return (
      <Text h1>No hay elementos</Text>
    );
  }

  render() {
    const { user, signOutUser, isFetching } = this.props;
    const { modalVisible, shops, products } = this.state;
    return (
      <View style={styles.container}>
        <Layout user={user} signOutUser={signOutUser}>
          {isFetching ?
            <Text h1>Loading</Text>
            :
            this.renderList()
          }
          <TaskForm
            modalVisible={modalVisible}
            products={products}
            shops={shops}
            onSubmit={this.props.createTask}
            onShowChange={this.handleShowForm}
          />
        </Layout>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={this.handleShowForm}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    fontSize: 16,
  },
  itemDone: {
    textDecorationLine: 'line-through',
    color: '#888',
  }
});

Home.propTypes  = {
  isFetching: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  tasks: PropTypes.objectOf(PropTypes.any),
  signOutUser: PropTypes.func.isRequired,
}
