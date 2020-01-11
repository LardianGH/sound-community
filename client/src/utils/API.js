import axios from "axios";

export default {
saveUser: function(userData) {
  console.log('data: ', userData)
    return axios.post("/api/users/signUp", userData); //makes a post of the form's data to /api/users, defined in user/routes/api/users
  }
};