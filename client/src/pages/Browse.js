import React, { Component } from "react";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import {Howl, Howler} from 'howler';

class Browse extends Component {

  state = {
    sound: null,
    lastSound: null
  };

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
      console.log(this.state.sound)
      console.log(this.state.lastSound)
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
        <Header>Welcome to my Soundboard!</Header>
        
          <Card
            id={42}
            key={1}
            name={"water"}
            soundSetup={this.soundSetup}
            sound={"assets/Recording.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={44}
            key={2}
            name={"explosion"}
            soundSetup={this.soundSetup}
            sound={"assets/Recording2.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={34}
            key={3}
            name={"laser sword"}
            soundSetup={this.soundSetup}
            sound={"assets/Recording3.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={45}
            key={4}
            name={"bomboclaat"}
            soundSetup={this.soundSetup}
            sound={"assets/Recording4.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={43}
            key={5}
            name={"water"}
            soundSetup={this.soundSetup}
            sound={"assets/Recording.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
        <Card
            id={66}
            key={6}
            name={"water"}
            soundSetup={this.soundSetup}
            sound={"assets/Recording.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={467}
            key={7}
            name={"explosion"}
            soundSetup={this.soundSetup}
            sound={"assets/Recording2.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={31}
            key={8}
            name={"laser sword"}
            soundSetup={this.soundSetup}
            sound={"assets/Recording3.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={40}
            key={9}
            name={"bomboclaat"}
            soundSetup={this.soundSetup}
            sound={"assets/Recording4.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={444}
            key={10}
            name={"water"}
            soundSetup={this.soundSetup}
            sound={"assets/Recording.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
        
      </Wrapper>
    );
  }
}

export default Browse;
