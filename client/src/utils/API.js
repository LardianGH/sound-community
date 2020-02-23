import axios from "axios";

export default {

  findCookie: function() {
    return axios.get("/api/users/cookie")
  },

  saveUser: function(userData) {
  console.log("Running Saveuser")
    return axios.post("/api/users/signUp", userData); //makes a post of the form's data to /api/users, defined in user/routes/api/users
  },

  getUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users/login", userData);
  },

  fileupload: function(file) {
  console.log(file)
    return axios.post("/api/users/profile-img-upload", file)
  },

  getfile: function(filename) {
    console.log(filename)
    return axios.post("/api/users/profile-img-download", {filename})
  }


};