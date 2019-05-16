// import { combineReducers } from 'redux';
import { RECEIVE_PWNED_INFO } from '../actions/actions';

// const rootReducer = combineReducers({
//   entities
// });

export default function (prevState = {}, action) {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_PWNED_INFO:
      return Object.assign({}, action.result);
    default:
      return prevState;
  }
}

// export default rootReducer;