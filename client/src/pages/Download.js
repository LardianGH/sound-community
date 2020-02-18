import React, { Component } from 'react';
import API from "../utils/API";
import Header from "../components/Header";
import NavbarLink from "../components/NavbarLink";

class Home extends Component {

		state = {
            fileName: "",
            image: ""
        }

        handleInputChange = event => { //Allows the textboxes to be used.
            const { name, value } = event.target;
            this.setState({
              [name]: value
            });
          };

          handleSubmit = event => { //whenever the form is submitted
            event.preventDefault()
            let currentComponent = this;
            API.getfile('Lardian.jpg')
            .then(res => {
              console.log(res)
              currentComponent.setState({
                image: res.data.Body
              });
            })
            .catch(err => console.log(err));
                
            }

	render() {
		return(
			<div className="container">
        <Header>
          <NavbarLink text={"home"} link={"/Browse"}/>
          <NavbarLink text={"download"} link={"/Download"}/>
          <NavbarLink text={"upload"} link={"/Upload"}/>
          <NavbarLink text={"sign up"} link={"/Signup"}/>
        </Header>
				<img src={this.state.image} alt="insert image here"></img>
                    <form>
                    <input
        className="fileName"
        value={this.state.fileName}
        onChange={this.handleInputChange}
        name="fileName"
        placeholder="enter the name of your file here"
        />

        <button
        className="subButton"
        onClick={this.handleSubmit} //when this button is clicked, it submits the form
        >Submit
        </button>
                    </form>

			</div>
		);
	}
}

export default Home;