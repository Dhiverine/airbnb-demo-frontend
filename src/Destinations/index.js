import React, { Component } from "react";
import styled from "styled-components";
import CapeTown from "./CapeTown.png";
import LosAngel from "./LosAngel.png";
import Miami from "./Miami.png";
import Paris from "./Paris.png";
import Seoul from "./Seoul.png";
import Tokyo from "./Tokyo.png";

const Destinations = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;


}
`;
const CardPlace = styled.section`
  width: 16.6667%;
  display: flex;
  align-items: left;
  flex-direction: column;
  flex-wrap: wrap;
  margin-right: 18px;
  font-size: 15px;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    align-items: left;
  }
`;
const Place = styled.span`
  margin-top: 8px;
  font-family: Circular-Air-Bold, sans-serif;
`;

export default function() {
  return (
    <Destinations>
      <CardPlace>
        <img src={Paris} alt="Paris" />
        <Place>Paris</Place>
      </CardPlace>
      <CardPlace>
        <img src={Miami} alt="Miami" />
        <Place>Miami</Place>
      </CardPlace>
      <CardPlace>
        <img src={Tokyo} alt="Tokyo" />
        <Place>Chumley's</Place>
      </CardPlace>
      <CardPlace>
        <img src={CapeTown} alt="CapeTown" />
        <Place>CapeTown</Place>
      </CardPlace>
      <CardPlace>
        <img src={Seoul} alt="Seoul" />
        <Place>Chumley's</Place>
      </CardPlace>
      <CardPlace>
        <img src={LosAngel} alt="LosAngeles" />
        <Place>Los Angeles</Place>
      </CardPlace>
    </Destinations>
  );
}
