import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';
import Layout from './Layout';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      tasks: null,
    };

    this.renderList = this.renderList.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.handleCheckItem = this.handleCheckItem.bind(this);
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
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tasks: nextProps.tasks,
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
    }
  }

  renderItem(id, item) {
    return (
      <ListItem
        key={id}
        title={item.quantity}
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
    return (
        <Layout user={user} signOutUser={signOutUser}>
          {isFetching ?
            <Text h1>Loading</Text>
            :
            this.renderList()
          }
        </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
