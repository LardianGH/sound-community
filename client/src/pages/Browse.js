import React, { Component } from "react";
import Card from "../components/Card";
import Scroll from "../components/Scroll"
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import NavbarLink from "../components/NavbarLink";
import {Howl, Howler} from 'howler';
import moment from 'moment';
import API from "../utils/API";

class Browse extends Component {

  state = {
    sound: null,
    lastSound: null,
    bucketRegion: "",
    bucketName: "",
    soundName: "",
    soundURLs: [],
    fileName: "",
    returnedName: "",
    returnedEmail: ""
  };

  checkForUser = () => {
    //console.log("checkForUser")
    API.findCookie()
  .then(res => {
    this.setState({
      returnedName: res.data.userName,
      returnedEmail: res.data.email
    });
  })
  .catch(err => console.log(err));
  }

  handleSubmit = ()=> { //whenever the form is submitted
     
    let currentComponent = this;
    console.log(currentComponent.state.fileName)
    API.getfile(currentComponent.state.fileName)
    .then(res => {
      console.log(res)
      console.log(res.data.Contents)
      currentComponent.setState({
        soundURLs: []
      });
      for (let i=0; i < res.data.Contents.length; i++) {
        currentComponent.setState({
          soundURLs: currentComponent.state.soundURLs.concat(res.data.Contents[i]),
          bucketName: res.data.Name,
          bucketRegion: res.data.Region
        });
        console.log(currentComponent.state.soundURLs)

      }
      
    })
    .catch(err => console.log(err));   
    }

    componentWillMount(){
      this.checkForUser()
      this.handleSubmit()
    }

  handleInputChange = event => { //Allows the textboxes to be used.
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => this.handleSubmit()
    )};

  playSound = () => {
 
   //If lastSound exists, stop it
  if (this.state.lastSound !== null) {
  console.log("stopping the previous sound")
  this.state.lastSound.stop()
    }
  //Play the current sound
  this.state.sound.play();

  console.log("played")
  //set the last sound to the sound that just played
  let lastSound = this.state.sound
  //setState does not like 'this.state', so I had to use the variable lastSound
  this.setState({lastSound: lastSound});
    
  }

  //When loadSound is called a new Howl instance is created, taking the selectedSound as it's source
  loadSound = (selectedSound) => {
    console.log("Loading a new sound")
    this.setState({sound: new Howl({
      src: [selectedSound]
    })}, () => this.playSound()
    )};
  

  soundSetup = (selectedSound) => {
    /* If a new sound is clicked (the selected sound is different from the last selected sound), a new Howl will be loaded, 
    otherwise, the sound will be played without having to load a new Howl*/
    
    if (this.state.sound !== null && this.state.lastSound._src === selectedSound) { 
      //if you click the same audio file again.
      console.log("calling playSound()")
      this.playSound() //it will play without loading a new file
    }
    else if ((this.state.sound === null && this.state.sound === this.state.lastSound) || (selectedSound !== this.state.lastSound._src)) {
      //runs is selectedSound and lastSound are different or if they are both empty objects 
      //in other words: if you click on a new file
      console.log("calling loadSound()")
      this.loadSound(selectedSound)
    }
   
    else {
      console.log("some error happened") //This should never happen
    }
  }

/*
playSound = (selectedSound) => {

}
*/

getFilePart = (filePath, part) => { //runs 3 times, can I reduce? ---TODO
  //console.log("Getting file" + part)
  const splitFile = filePath.split(".")
  if (part === "type") return splitFile[1]
  else {
    /* WARNING ---
    Development only, change to split on "-" (to get rid of the extra tag from s3)
    and return fileName[0] because it comes before the "-", this is only set up to deal with "Assets/{filename}"
    --- WARNING */
    const nameAndDate = splitFile[0].split("/")
    const fileName = nameAndDate[0].split("-")
    if (part === "name") {
    const cleanedName = fileName[0].replace(/_/g," ")
    return cleanedName;
    } else {
      const fileDate = parseInt(fileName[1])
      const formatDate = moment(fileDate).format('MMMM Do YYYY, h:mm:ss a');
      return formatDate
    }
    //ADDITION -- maybe get rid of the "_" unless it looks nice, but probably better if gone.

    //Individuals naming the files they upload is very important, block numbers, "-"s, and more than one ., "_" substitute spaces
    //EX: "car_honking.mp3" => "car honking"
  }
}

getFileUploader = (filePath) => {
  let name = "none"
  API.getFileUploader(filePath)
  .then(soundInfo => {
    if (soundInfo.data != null) {
    //console.log(soundInfo.data)
    API.getUploaderByID(soundInfo) //You could have just given the name in the first api call instead of the id. Would've been a lot simpler.
    .then(res => { name = res.data.userName}) //really close, just have to return it
  }
  else { name = "unknown"} //this does not run
  })
  return name //this runs
}

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Navbar>
          <form>
                    <input
        className="fileName"
        value={this.state.SoundName}
        onChange={this.handleInputChange}
        name="fileName"
        placeholder="Search"
        />
      </form>
        </Navbar>
        <Scroll>
        {this.state.soundURLs.map((sounds, i) => (
          <Card
            key={i}
            user={this.getFileUploader(sounds.Key)}
            fileType={this.getFilePart(sounds.Key, "type")}
            name={this.getFilePart(sounds.Key, "name")}
            uploadDate={this.getFilePart(sounds.Key, "date")}
            soundSetup={this.soundSetup}
            sound={"https://" + this.state.bucketName + ".s3." + this.state.bucketRegion + ".amazonaws.com/" + sounds.Key}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
        ))}
        </Scroll>
      </Wrapper>
    );
  }
}

export default Browse;
