import React, { Component } from "react";
import SignupForm from "../components/SignupForm";
import Navbar from "../components/Navbar";
import NavbarLink from "../components/NavbarLink";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

class Signup extends Component {

state = {
  returnedName: "",
  returnedEmail: "",
  validity: "",
}

checkForUser = () => {
  console.log("checkForUser")
  API.findCookie()
.then(res => {
  this.setState({
    returnedName: res.data.userName,
    returnedEmail: res.data.email
  });
})
.catch(err => console.log(err));
}

componentDidMount(){
  this.checkForUser()
}

validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid; //Change to break on error and return the first error instead of just a false ----- TODO
}

handleSignupSubmit = (event, userName, password, email, errors) => { //whenever the form is submitted

  event.preventDefault();
  if(this.validateForm(errors) && userName && password) {
    console.info('Valid Form')
    API.saveUser({ //call saveUser from ../utils/API
      userName, //insert the 3 data areas to saveUser
      password,
      email
      })
      .then(res => {
        console.log(res.data)
        this.setState({
          returnedName: res.data.userName,
          returnedEmail: res.data.email
        });
        this.props.history.push("/login")
      })
      .catch(err => console.log(err));
  }else{
    console.error('Invalid Form') //Return the actual error here ----- TODO
    this.setState({validity: 'Invalid Form'}); //will make this message appear
    setTimeout(() => this.setState({validity:''}), 5000); //will disappear after 3 seconds
  }

  /*
//event.preventDefault()
if (userName && password) { //if the 2 required areas are filled out, run this, email is not required
console.log("posted") //log them
API.saveUser({ //call saveUser from ../utils/API
userName, //insert the 3 data areas to saveUser
password,
email
})
.then(res => {
  console.log(res.data)
  this.setState({
    returnedName: res.data.dbModel[0].userName,
    returnedEmail: res.data.dbModel[0].email
  });
  this.props.history.push("/login")
})
.catch(err => console.log(err));
}
*/
};

render() {
  return (
    <Wrapper>
      <Navbar>
        </Navbar>
        {this.state.returnedName}
     <SignupForm
     handleSignupSubmit = {this.handleSignupSubmit}
     validity = {this.state.validity}
     ></SignupForm>
    </Wrapper>
  );
}
}

export default Signup;