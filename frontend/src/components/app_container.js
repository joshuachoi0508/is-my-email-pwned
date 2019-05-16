import { connect } from 'react-redux';
import { fetchPwnedInfo } from '../actions/actions';
import App from './app';

const mapDispatchToProps = (dispatch) => {
  return {
      fetchPwnedInfo: email => dispatch(fetchPwnedInfo(email))
  };
};


export default connect(null, mapDispatchToProps)(App);