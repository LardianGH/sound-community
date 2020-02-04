import React, { Component } from "react";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";

class Browse extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    
  };

  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header>Hello</Header>
        
          <Card
            id={43}
            key={4}
            image={"https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"}
          />
           <Card
            id={43}
            key={4}
            image={"http://localhost:8080/img/cowboy_160.png"}
          />
           <Card
            id={43}
            key={4}
            image={"http://localhost:8080/img/cowboy_160.png"}
          />
           <Card
            id={43}
            key={4}
            image={"http://localhost:8080/img/cowboy_160.png"}
          />
           <Card
            id={43}
            key={4}
            image={"http://localhost:8080/img/cowboy_160.png"}
          />
        
      </Wrapper>
    );
  }
}

export default Browse;
