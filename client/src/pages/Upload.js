import React, { Component } from 'react';
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import $ from 'jquery';
import "./style.css";
// Move the jsx to it's own component and move the style.css to it's own folder.
class Home extends Component {

	state = {
		selectedFile: null,
		returnedName: "",
		returnedEmail: "",
		returnedID: ""
	}

singleFileChangedHandler = ( event ) => {
	this.setState({
		selectedFile: event.target.files[0]
	});
};

	checkForUser = () => {
		console.log("checkForUser")
		API.findCookie()
	  .then(res => {
		this.setState({
		  returnedName: res.data.userName,
		  returnedEmail: res.data.email,
		  returnedID: res.data._id
		});
	  })
	  .catch(err => console.log(err));
	  }

	  componentDidMount(){
		this.checkForUser()
	  }

	singleFileUploadHandler = ( event ) => {

		const data = new FormData();
// If file selected
		if ( this.state.selectedFile ) {
			data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
			console.log("data")
			console.log(data)
			API.fileupload( data, {
				Navbars: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				}
			})
				.then( ( response ) => {
					/*
					if the file uploading would be sucessful
					the code below checks if the file size is too big (A self imposed restriction)
					*/
					if ( 200 === response.status ) {
						if( response.data.error ) {
							// If file size is larger than expected return 'Max size: 2MB'.
							if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
								this.ocShowAlert( 'Max size: 2MB', 'red' );
							} else {
								console.log( response.data );
							// If it's something else, return the error.
								this.ocShowAlert( response.data.error, 'red' );
							}
						} else {
							// Success
							let fileName = response.data;
							console.log( 'filedata', fileName );
							this.ocShowAlert( 'File Uploaded', '#3089cf' );
						}
					}
				}).catch( ( error ) => {
				// If another error
				if (error == 'Error: Request failed with status code 422') {				
					this.ocShowAlert("File must be .mp3, .wav, or .m4a", 'red');
				} else {
				this.ocShowAlert( error, 'red' );
				}
			});
		} else {
			// if file not selected throw error
			this.ocShowAlert( 'Please upload file', 'red' );
		}
	};

	// ShowAlert Function
	ocShowAlert = ( message, background = '#3089cf' ) => {
		let alertContainer = document.querySelector( '#oc-alert-container' ),
			alertEl = document.createElement( 'div' ),
			textNode = document.createTextNode( message );
		alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
		$( alertEl ).css( 'background', background );
		alertEl.appendChild( textNode );
		alertContainer.appendChild( alertEl );
		setTimeout( function () {
			$( alertEl ).fadeOut( 'slow' );
			$( alertEl ).remove();
		}, 3000 );
	};

	render() {
		console.log( this.state );
		return(
			<Wrapper>
			
				<Navbar>
        	</Navbar>
		{this.state.returnedName}
		{this.state.returnedID}
				{/* For Alert box*/}
				<div id="oc-alert-container"></div>
				{/* Single File Upload*/}
				<div className="upload">
					<div className="card-Header">
					<h2>Upload Audio File</h2>
						<p className="size-limit" >Max Upload Size: (2MB)</p>
					</div>
					<div className="card-body">
						<input type="file" onChange={this.singleFileChangedHandler}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload!</button>
						</div>
					</div>
				</div>
			</Wrapper>
		);
	}
}

export default Home;