import { connect } from 'react-redux';
import { signInUser } from '../actions/auth';
import Login from '../components/Login';

const mapStateToProps = (state) => {
  const { authenticated, authenticationError } = state.auth;
  return {
    authenticationError,
    authenticated,
  }
};

export default connect(
  mapStateToProps,
  { signInUser},
)(Login);
