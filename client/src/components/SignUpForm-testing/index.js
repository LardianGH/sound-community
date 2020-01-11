import React, { Component } from "react";
import API from "../../utils/API";

class New extends Component { //main is a test page to test user creation (Working)

    state = { //All the variables that will change
      userName: "",
        password: "",
        email: ""
      };
    

    handleSubmit = event => { //whenever the form is submitted
event.preventDefault()

const form = this.state

if (form.userName && form.password && form.email) { //if all 3 areas are filled out, run this
    console.log(form.userName) //log them
    console.log(form.password)
    console.log(form.email)
    API.saveUser({ //call saveUser from ../utils/API
      userName: form.userName, //insert the 3 data areas to saveUser
      password: form.password,
      email: form.email,
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err));
    }
};

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
                    <div className="field">
                        <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        />
                        <i className="envelope square icon"></i>
                    </div>
                    <button 
                    type="submit"
                    onClick={this.handleSubmit}
                    className="ui big button">
                        <i className="signup icon"></i>
                        Sign Up
                    </button>
                </div>
        </form>
    );
};
};

export default New;
