import { connect } from 'react-redux';
import * as tasks from '../actions/tasks';
import { fetchProductList } from '../actions/products';
import{ fetchShopList } from '../actions/shops';
import { signOutUser } from '../actions/auth';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  const { isFetching, tasks,  error } = state.tasks;
  const { user } = state.auth;
  const { products } = state.products;
  const { shops } = state.shops;
  return {
    user,
    isFetching,
    tasks,
    products,
    shops,
    error,
  }
};

const newProps = {};
Object.assign(newProps, tasks, { signOutUser  }, { fetchProductList }, { fetchShopList });

export default connect(
  mapStateToProps,
  newProps,
)(Home);
