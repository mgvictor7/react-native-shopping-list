import { connect } from 'react-redux';
import { signInUser } from '../actions/auth';
import Loading from '../components/Loading';

const mapStateToProps = (state) => {
  const { isFetching, authenticated } = state.auth;
  return {
    authenticated,
    isFetching,
  }
};

export default connect(
  mapStateToProps,
  { signInUser},
)(Loading);
