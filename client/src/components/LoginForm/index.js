import React, { Component } from "react";
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
        <form className="new">
                <div className="fields">
                    <div className="field">
                        <input 
                        name="userName"
                        type="text" 
                        placeholder="Username"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        />
                        <i className="user icon"></i>
                    </div>
                    <div className="field">
                        <input 
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        />
                        <i className="lock icon"></i>
                    </div>
                    <button 
                    type="submit"
                    onClick={e => this.props.handleSubmit(e, this.state.userName, this.state.password)} //when this button is clicked, it submits the form
                    className="ui big button">
                        <i className="signup icon"></i>
                        Sign Up
                    </button>
                </div>
        </form>
    );
};
};

export default LoginForm;
