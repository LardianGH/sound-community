import React, { Component } from "react";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import {Howl, Howler} from 'howler';

class Browse extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    sound: {},
    setSound: {}
  };

  playSound = () => {
    var id = this.state.sound.play();
    (console.log(this.state.sound.playing(id)))
    console.log(id)
    if (this.state.sound.playing(id) === true) {
      console.log("Pausing")
      this.state.sound.pause(id);
    } else {
      this.state.sound.play();
    }
  }

  loadSound = (selectedSound) => {
    console.log(selectedSound)
    this.setState({sound: new Howl({
      src: [selectedSound]
    }, () => this.playSound())
  });
  }

  soundSetup = (selectedSound) => {
    //setsound here.
    //setSound is the last played file, if the setSound and sound do not match, then a new sound file is loaded
    //perhaps have a current sound and set to selectedSound?
    console.log(this.state.sound)
    console.log(this.state.setSound)
    if (this.state.sound !== {} && this.state.sound === this.state.setSound) {
      console.log("playing")
      this.playSound()
    }
    else if ((this.state.sound !== this.state.setSound) || (this.state.sound === {} && this.state.sound === this.state.setSound)) {
      console.log("loading")
      this.loadSound(selectedSound)
    }
    else {
      console.log("some error happened")
      console.log(this.state.sound)
      console.log(this.state.setSound)
    }
  }

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
            sound={"assets/Recording.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={34}
            key={3}
            soundSetup={this.soundSetup}
            sound={"assets/Recording.m4a"}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={45}
            key={4}
            soundSetup={this.soundSetup}
            sound={"assets/Recording.m4a"}
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
