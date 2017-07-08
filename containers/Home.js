import { connect } from 'react-redux';
import * as tasks from '../actions/tasks';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  const { isFetching, tasks,  error } = state.tasks;
  return {
    isFetching,
    tasks,
    error,
  }
};

export default connect(
  mapStateToProps,
  tasks,
)(Home);
