import React, { Component } from "react";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import {Howl, Howler} from 'howler';

class Browse extends Component {

  state = {
    sound: {},
    setSound: {}
  };

  playSound = () => {
    console.log("playsound")
    var id = this.state.sound.play();
    console.log(this.state.sound.playing(id))
    console.log(id)
    if (this.state.sound.playing(id) === true) {
      console.log("Stopping")
      this.state.sound.stop();
      this.state.sound.unload();
      this.setState({
        sound: {},
        setSound: {}
      })
    } else {
      console.log("Right before sound.play()")
      this.state.sound.play();
    }
  }

  loadSound = (selectedSound) => {
    console.log(selectedSound)
    console.log("No you wont")
    this.setState({sound: new Howl({
      src: [selectedSound]
    })}, () => this.playSound()
    )};
  

  soundSetup = (selectedSound) => {
    //setsound here.
    //setSound is the last played file, if the setSound and sound do not match, then a new sound file is loaded
    //perhaps have a current sound and set to selectedSound?
    console.log(this.state.sound)
    console.log(this.state.setSound)
    if (this.state.setSound !== {} && this.state.setSound === selectedSound) { 
      //if you click the same audio file again.
      console.log("playing")
      this.playSound() //it will play without loading a new file
    }
    else if ((selectedSound !== this.state.setSound) || (this.state.sound === {} && selectedSound === this.state.setSound)) { 
      //if you click on a new file
      console.log("loading")
      this.setState({setSound: selectedSound}, () =>  this.loadSound(selectedSound)); //it will load that sound
    }
    else {
      console.log("some error happened") //This should never happen
      console.log(this.state.sound)
      console.log(this.state.setSound)
    }
  }

/*
playSound = (selectedSound) => {

}
*/
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header>Hello</Header>
        
          <Card
            id={42}
            key={1}
            soundSetup={this.soundSetup}
            sound={"assets/Recording.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={44}
            key={2}
            soundSetup={this.soundSetup}
            sound={"assets/Recording2.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={34}
            key={3}
            soundSetup={this.soundSetup}
            sound={"assets/Recording3.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={45}
            key={4}
            soundSetup={this.soundSetup}
            sound={"assets/Recording4.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={43}
            key={5}
            soundSetup={this.soundSetup}
            sound={"assets/Recording.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
        
      </Wrapper>
    );
  }
}

export default Browse;
