import React, { Component } from "react";
import Header from "../components/Header";
import NavbarLink from "../components/NavbarLink";
import LoginForm from "../components/LoginForm"
import API from "../utils/API";

class Login extends Component { //main is a test page to test user creation (Working)
    
    state = {
        returnedName: "",
        returnedEmail: ""
    }

       handleSubmit = (event, userName, password) => { //whenever the form is submitted

event.preventDefault()
if (userName && password) { //if all 2 areas are filled out, run this
    console.log("posted") //log them
    API.getUser({ //call getUser from ../utils/API
      userName, //insert the 2 data areas to getUser
      password,
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


//something is wrong
render() {
  
return (

<div>
      <Header>
          <NavbarLink text={"home"} link={"/Browse"}/>
          <NavbarLink text={"download"} link={"/Download"}/>
          <NavbarLink text={"upload"} link={"/Upload"}/>
          <NavbarLink text={"sign up"} link={"/Signup"}/>
        </Header>
        {this.state.returnedName}

        <LoginForm
 
    handleSubmit={this.handleSubmit}
    >
    </LoginForm>

</div>

)
}
}

export default Login;