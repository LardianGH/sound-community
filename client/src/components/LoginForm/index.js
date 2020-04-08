import React, { Component } from "react";
import "./style.css"
class LoginForm extends Component { //main is a test page to test user creation (Working)

    state = { //All the variables that will change
      userName: "",
        password: "",
      };

      handleSubmit = event => { //whenever the form is submitted
        event.preventDefault()
      }

handleInputChange = event => { //Allows the textboxes to be used.
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

render() {
    return(
        <form className="Login">
           <div className="formTitle"><h2>Login</h2></div>
                    <div className="fieldWrapper">
                    <div className="fieldClass">Username</div>
                      <div></div>
                        <input className="field"
                        name="userName" 
                        type="text" 
                        placeholder="EX: Kylester3422"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        />
                        <i className="user icon"></i>
                    </div>
                    <div className="fieldWrapper">
                    <div className="fieldClass">Password</div>
                      <div></div>
                        <input className="field"
                        name="password"
                        type="password"
                        placeholder="EX: !LOv3CakE"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        />
                        <i className="lock icon"></i>
                    </div>
                    <button 
                    type="submit"
                    onClick={e => this.props.handleSubmit(e, this.state.userName, this.state.password)} //when this button is clicked, it submits the form
                    className="loginButton">
                        <i className="signup icon"></i>
                        Log In
                    </button>

                      <div className="changeForm">
                    <a href="/Signup">or Sign Up here</a>
                    </div>
        </form>
    );
};
};

export default LoginForm;
