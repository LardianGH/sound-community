import React, { Component } from "react";
import Link from "../Link";
import "./style.css"
class SignupForm extends Component {

    state = { //All the variables that will change
        userName: "",
        password: "",
        email: "",
        errors: {
            userName: '',
            email: '',
            password: '',
          }
      };

/* handleFileUpload = event => {
    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
}
*/
handleInputChange = event => { //Allows the textboxes to be used.
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  
    switch (name) {
      case 'userName': 
      console.log("userName")
        errors.userName = 
          value.length < 5
            ? "C'mon bro, not asking a lot here, at least 4 characters in your username"
            : '';
        break;
      case 'email': 
      console.log("email")
        errors.email = 
          (validEmailRegex.test(value) || value.length === 0)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
      console.log("password")
        errors.password = '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })
  };

render() {
    return(
        <form           className="Signup">
            <div className="formTitle"><h2>Signup</h2></div>
                        <div className="fieldWrapper">
                        <div className="fieldClass">Username<p className="red">*</p></div>
                        <div></div>
                        <input className="field"
                        name="userName"
                        type="text" 
                        placeholder="EX: Kylester3422"
                        value={this.state.name}
                        onChange={this.handleInputChange} noValidate
                        />
                        </div>
                        <div className="fieldWrapper">
                            <p className="fieldClass">Email</p>
                            <div></div>
                        <input className="field"
                        name="email"
                        type="text"
                        placeholder="KyleLovesCake@gmail.com"
                        value={this.state.email}
                        onChange={this.handleInputChange} noValidate
                        />
                        </div>
                        <div className="fieldWrapper">
                        <p className="fieldClass">Password<p className="red">*</p></p>
                            <div></div>
                        <input className="field"
                        name="password"
                        type="password"
                        placeholder="EX: !LOv3CakE"
                        value={this.state.password}
                        onChange={this.handleInputChange} noValidate
                        />
                        </div>
                        <p className="invalid">
                        {this.props.validity}
                        </p>
                    <button 
                    type="submit"
                    onClick={e => this.props.handleSignupSubmit(e, this.state.userName, this.state.password, this.state.email, this.state.errors)} //when this button is clicked, it submits the form
                    className="signupButton">
                        <i className="signup icon"></i>
                        <p>Sign Up</p>
                    </button>
                    <Link
     destination = "/Login"
     text = "Already have an account?"></Link>
                    
        </form>
    );
};
};

export default SignupForm;
  /*
  import React from "react";

const Signup = props =>{
    return(
        <form >
                <div >
                    <div >
                        <input 
                        name="username"
                        type="text" 
                        placeholder="Username"
                        value={props.userName}
                        onChange={props.handleInputChange}
                        />
                        <i className="user icon"></i>
                    </div>
                    <div >
                        <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={props.email}
                        onChange={props.handleInputChange}
                        />
                        <i className="envelope square icon"></i>
                    </div>
                    <div >
                        <input 
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={props.password}
                        onChange={props.handleInputChange}
                        />
                        <i className="lock icon"></i>
                    </div>
                    <button 
                    type="submit"
                    onClick={props.handleSignupSubmit}
                    >
                        <i className="signup icon"></i>
                        Sign Up
                    </button>
                </div>
        </form>
    )
};

export default Signup;
*/