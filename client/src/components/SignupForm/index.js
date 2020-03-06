import React, { Component } from "react";
import "./style.css"
class SignupForm extends Component {

    state = { //All the variables that will change
        userName: "",
        password: "",
        email: "",
      };

handleFileUpload = event => {
    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
}

handleInputChange = event => { //Allows the textboxes to be used.
    
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

render() {
    return(
        <form className="Signup">
                        <div className="fieldWrapper">
                        Username
                        <input className="field"
                        name="userName"
                        type="text" 
                        placeholder="EX: Kylester3422"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        />
                        </div>
                        <div className="fieldWrapper">
                            Email
                        <input className="field"
                        name="email"
                        type="text"
                        placeholder="KyleLovesCake@gmail.com"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        />
                        </div>
                        <div className="fieldWrapper">
                            Password
                        <input className="field"
                        name="password"
                        type="password"
                        placeholder="EX: !LOv3CakE"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        />
                        </div>
                    <button 
                    type="submit"
                    onClick={e => this.props.handleSignupSubmit(e, this.state.userName, this.state.password, this.state.email, this.state.selectedFile)} //when this button is clicked, it submits the form
                    className="ui big button">
                        <i className="signup icon"></i>
                        Sign Up
                    </button>
                    
                    <div className="changeForm">
                    <a href="/Login">or Log in here</a>
                    </div>
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