import axios from "axios";

export const checkPwned = email => {
  return axios.post("api/pwned", email);
};