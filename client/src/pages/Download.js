import React, { Component } from 'react';
import API from "../utils/API";
import Header from "../components/Header";
import NavbarLink from "../components/NavbarLink";

class Home extends Component {

		state = {
            fileName: "",
            image: "data:image/jpeg;base64,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"
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
              let data = res.data.Body.data
              let buff = new Buffer(data)
              let base64 = buff.toString('base64')
              console.log(base64)
              currentComponent.setState({
                image: "data:image/jpeg;base64," + base64
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
				<img src={this.state.image} alt={this.state.image}></img>
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