import { RECEIVE_PWNED_INFO } from '../actions/actions';

export default function (prevState = {}, action) {
  debugger;
  Object.freeze(prevState);
  
  switch (action.type) {
    case RECEIVE_PWNED_INFO:
      return Object.assign({}, {result: action.result.data});
    default:
      return prevState;
  }
}