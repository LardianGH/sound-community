import React, { Component } from "react";
import "./style.css"
class UploadForm extends Component {



      render() {
        return(
<div className="upload">
					<div className="card-Header">
					<h2 className="social-distance" >Upload Audio File</h2>
						<p className="size-limit social-distance" >Max Upload Size: (2MB)</p>
					</div>
					<div className="card-body">
						<input className="social-distance HiddenInput" type="file" id="file" onChange={this.props.singleFileChangedHandler}/>
                        <label for="file">
                            <svg class="bi bi-upload" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8zM5 4.854a.5.5 0 00.707 0L8 2.56l2.293 2.293A.5.5 0 1011 4.146L8.354 1.5a.5.5 0 00-.708 0L5 4.146a.5.5 0 000 .708z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 2z" clip-rule="evenodd"/>
                            </svg>
                        {this.props.labelFile}</label>
						<div className=" social-distance mt-5">
							<button className="uploadButton btn btn-info" onClick={e => this.props.singleFileUploadHandler()}
                            >Upload!</button>
						</div>
					</div>
				</div>
        )
    }
}

export default UploadForm;