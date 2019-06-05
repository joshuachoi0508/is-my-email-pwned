import * as APIUtil from '../util/api_util';

export const RECEIVE_PWNED_INFO = "RECEIVE_PWNED_INFO";

const receivePwnedInfo = result => ({
  type: RECEIVE_PWNED_INFO,
  result
})

export const fetchPwnedInfo = email => dispatch => {
  APIUtil.checkPwned(email)
      .then(result => dispatch(receivePwnedInfo(result))
};
