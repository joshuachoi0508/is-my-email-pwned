import { connect } from 'react-redux';
import App from './app';
import { fetchPwnedInfo } from '../actions/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPwnedInfo: email => dispatch(fetchPwnedInfo(email))
    };
};


export default connect(null, mapDispatchToProps)(App);