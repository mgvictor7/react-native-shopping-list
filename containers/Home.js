import { connect } from 'react-redux';
import * as tasks from '../actions/tasks';
import { signOutUser } from '../actions/auth';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  const { isFetching, tasks,  error } = state.tasks;
  const { user } = state.auth;
  return {
    user,
    isFetching,
    tasks,
    error,
  }
};

const newProps = {};
Object.assign(newProps, tasks, { signOutUser  });

export default connect(
  mapStateToProps,
  newProps,
)(Home);
