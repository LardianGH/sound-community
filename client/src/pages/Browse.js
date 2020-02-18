import React, { Component } from "react";
import Card from "../components/Card";
import Scroll from "../components/Scroll"
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import NavbarLink from "../components/NavbarLink";
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
    console.log(selectedSound)
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

getFilePart = (filePath, part) => {
  //console.log("Getting file" + part)
  const splitFile = filePath.split(".")
  if (part === "type") return splitFile[1]
  else {
    /* WARNING ---
    Development only, change to split on "-" (to get rid of the extra tag from s3)
    and return fileName[0] because it comes before the "-", this is only set up to deal with "Assets/{filename}"
    --- WARNING */
    const fileName = splitFile[0].split("/")
    return fileName[1]
    //ADDITION -- maybe get rid of the "_" unless it looks nice, but probably better if gone.

    //Individuals naming the files they upload is very important, block numbers, "-"s, and more than one ., "_" substitute spaces
    //EX: "car_honking.mp3" => "car honking"
  }
}

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Header>
          <NavbarLink text={"home"} link={"/Browse"}/>
          <NavbarLink text={"download"} link={"/Download"}/>
          <NavbarLink text={"upload"} link={"/Upload"}/>
          <NavbarLink text={"sign up"} link={"/Signup"}/>
        </Header>
        <Scroll>
          <Card
            id={42}
            key={1}
            fileType={this.getFilePart("assets/car_honking.mp3", "type")}
            name={this.getFilePart("assets/car_honking.mp3", "name")}
            soundSetup={this.soundSetup}
            sound={"assets/car_honking.mp3"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={44}
            key={2}
            fileType={this.getFilePart("assets/door_closing.mp3", "type")}
            name={this.getFilePart("assets/door_closing.mp3", "name")}
            soundSetup={this.soundSetup}
            sound={"assets/door_closing.mp3"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={34}
            key={3}
            fileType={this.getFilePart("assets/door_slam.mp3", "type")}
            name={this.getFilePart("assets/door_slam.mp3", "name")}
            soundSetup={this.soundSetup}
            sound={"assets/door_slam.mp3"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={45}
            key={4}
            fileType={this.getFilePart("assets/Dramatic_chipmunk.wav", "type")}
            name={this.getFilePart("assets/Dramatic_chipmunk.wav", "name")}
            soundSetup={this.soundSetup}
            //wavs are much bigger, might not want them taking up all that space.
            sound={"assets/Dramatic_chipmunk.wav"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={43}
            key={5}
            fileType={this.getFilePart("assets/let_me_take_a_selfie.mp3", "type")}
            name={this.getFilePart("assets/let_me_take_a_selfie.mp3", "name")}
            soundSetup={this.soundSetup}
            sound={"assets/let_me_take_a_selfie.mp3"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
        <Card
            id={66}
            key={6}
            fileType={this.getFilePart("assets/meeemes.mp3", "type")}
            name={this.getFilePart("assets/meeemes.mp3", "name")}
            soundSetup={this.soundSetup}
            sound={"assets/meeemes.mp3"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={467}
            key={7}
            fileType={this.getFilePart("assets/phone_beep.mp3", "type")}
            name={this.getFilePart("assets/phone_beep.mp3", "name")}
            soundSetup={this.soundSetup}
            sound={"assets/phone_beep.mp3"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={31}
            key={8}
            fileType={this.getFilePart("assets/streets_of_fire.mp3", "type")}
            name={this.getFilePart("assets/streets_of_fire.mp3", "name")}
            soundSetup={this.soundSetup}
            sound={"assets/streets_of_fire.mp3"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={40}
            key={9}
            fileType={this.getFilePart("assets/trouble_coldplay_intro.mp3", "type")}
            name={this.getFilePart("assets/trouble_coldplay_intro.mp3", "name")}
            soundSetup={this.soundSetup}
            sound={"assets/trouble_coldplay_intro.mp3"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
        </Scroll>
      </Wrapper>
    );
  }
}

export default Browse;
