import React, { Component } from "react";
import SignupForm from "../components/SignupForm";
import API from "../utils/API";

class Signup extends Component {

state = {
  returnedName: "",
  returnedEmail: ""
}

handleSignupSubmit = (event, userName, password, email, file) => { //whenever the form is submitted

//event.preventDefault()
if (userName && password) { //if the 2 required areas are filled out, run this, email is not required
console.log("posted") //log them
API.saveUser({ //call saveUser from ../utils/API
userName, //insert the 3 data areas to saveUser
password,
email,
file
})
.then(res => {
  console.log(res.data)
  this.setState({
    returnedName: res.data.dbModel[0].userName,
    returnedEmail: res.data.dbModel[0].email
  });
  this.props.history.push("/")
})
.catch(err => console.log(err));
}
};

render() {
  return (
    <div>
    {this.props.returnedName}
     <SignupForm
     handleSignupSubmit = {this.handleSignupSubmit}
     ></SignupForm>
     </div>
  );
}
}

export default Signup;