import React, { Component } from "react";
import "./fonts.css";
import Footer from "./Footer/index.js";
import Header from "./Header/index.js";
import Explore from "./Explore Airbnb/index.js";
import Experiences from "./Experiences/index.js";
import Reservations from "./Reservations/index.js";
import Destinations from "./Destinations/index.js";
import Homes from "./Homes/index.js";
import styled from "styled-components";

const Caption = styled.h1`
  font-family: Circular-Air-Bold;
  line-height: 34px;
  font-size: 32px;
  color: #383838;
  align: left;
  margin-top: 48px;

  @media only screen and (max-width: 768px) {
    font: 24px "CircularAir-Bold", sans-serif;
  }
`;

const Wrap = styled.div`
  width: 976px;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  render() {
    return (
      <Wrap>
        <Header />
        <Caption>Explore Airbnb</Caption>
        <Explore />
        <Caption>Experiences</Caption>
        <Experiences />
        <Caption>Homes</Caption>
        <Homes />
        <Caption>Popular reservations around the world</Caption>
        <Reservations />
        <Caption>Featured destinations</Caption>
        <Destinations />
        <Footer />
      </Wrap>
    );
  }
}

export default App;
