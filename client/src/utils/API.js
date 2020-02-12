import axios from "axios";

export default {
saveUser: function(userData) {
  console.log("Running Saveuser")
  console.log('data: ', userData.file)
    return axios.post("/api/users/signUp", userData); //makes a post of the form's data to /api/users, defined in user/routes/api/users
  },
  fileupload: function(fileData) {
    console.log(fileData)
    return axios.post("/api/users/fileupload", fileData)
  },
  sendRequest: function(request) {
    console.log(request.signedRequest)
    console.log(request.file)
    console.log(request.options)
    return axios.put(request.signedRequest, request.file, request.options)
  },

  s3Send: function(file) {
console.log(file)
return axios.post("/api/users/profile-img-upload", file)
  }
};