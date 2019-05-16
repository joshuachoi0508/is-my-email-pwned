import axios from "axios";

export const checkPwned = email => (
  axios.post("api/pwned", email)
);