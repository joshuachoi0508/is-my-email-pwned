import { connect } from 'react-redux';
import { fetchPwnedInfo } from '../actions/actions';
import App from './app';

const mapStateToProps = (state, ownProps) => {
  let pwnSites = [];
  if (state.result) pwnSites = state.result;

  return {
    pwnSites
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchPwnedInfo: email => dispatch(fetchPwnedInfo(email))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);