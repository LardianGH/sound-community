import axios from "axios";

export default {
saveUser: function(userData) {
  console.log("Running Saveuser")
    return axios.post("/api/users/signUp", userData); //makes a post of the form's data to /api/users, defined in user/routes/api/users
  },

  fileupload: function(file) {
console.log(file)
return axios.post("/api/users/profile-img-upload", file)
  },

  getfile: function(filename) {
    //console.log(filename)
    return axios.get("/api/users/profile-img-upload", filename)
  }
};